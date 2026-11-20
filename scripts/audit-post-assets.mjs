#!/usr/bin/env node

import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const POSTS_DIR = path.resolve('src/content/posts');
const PUBLIC_DIR = path.resolve('public');
const VISIT_CATEGORIES = new Set(['food', 'local']);
const BROADCAST_FALLBACK_PATTERN = /^\/images\/broadcast\//;
const RASTER_PATTERN = /\.(jpe?g|png|webp|avif)$/i;
// 평균 밝기·표준편차가 이 값 미만이면 검정/빈 이미지로 판단 (0~255 기준)
const BLANK_MEAN_MAX = 8;
const BLANK_STDEV_MAX = 6;

const args = parseArgs(process.argv.slice(2));

if (args.help) {
  printHelp();
  process.exit(0);
}

const sharp = await loadSharp();
const posts = await readPosts(POSTS_DIR);
const targetPosts = posts.filter((post) => {
  const data = post.frontmatter;
  if (args.publishedOnly && data.status !== 'published') return false;
  if (args.slugs.length > 0 && !args.slugs.includes(data.slug)) return false;
  return true;
});

const failures = [];
const warnings = [];

for (const post of targetPosts) {
  const data = post.frontmatter;
  const slug = data.slug ?? path.basename(post.filePath);
  const isVisit = VISIT_CATEGORIES.has(data.category);

  await auditBodyImages(post, slug, isVisit);

  if (!isVisit) {
    if (data.image && data.image.startsWith('/')) {
      await auditImageFile(data.image, slug, '대표 이미지');
    }
    continue;
  }

  if (data.address && !hasCoordinates(data)) {
    warnings.push(`${slug}: address는 있으나 mapLat/mapLng 없음`);
  }

  if (!data.image || !data.imageAlt) {
    failures.push(`${slug}: food/local 글은 image와 imageAlt가 필요함`);
    continue;
  }

  if (BROADCAST_FALLBACK_PATTERN.test(data.image)) {
    failures.push(`${slug}: 방송사 마크 폴백 이미지는 대표 이미지로 사용할 수 없음`);
  }

  if (data.image.startsWith('/')) {
    const imagePath = path.join(PUBLIC_DIR, data.image);
    if (!await exists(imagePath)) {
      failures.push(`${slug}: 대표 이미지 파일 없음 (${data.image})`);
    } else {
      await auditImageFile(data.image, slug, '대표 이미지');
    }
  }
}

for (const warning of warnings) {
  console.log(`WARN ${warning}`);
}

for (const failure of failures) {
  console.log(`FAIL ${failure}`);
}

console.log(`감사 완료: 대상 ${targetPosts.length}건, 경고 ${warnings.length}건, 실패 ${failures.length}건`);

if (failures.length > 0) {
  process.exit(1);
}

function parseArgs(argv) {
  const parsed = {
    help: false,
    publishedOnly: true,
    slugs: []
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') {
      parsed.help = true;
    } else if (arg === '--include-drafts') {
      parsed.publishedOnly = false;
    } else if (arg === '--slug') {
      const value = argv[i + 1];
      if (!value) fail('--slug 뒤에 slug가 필요함');
      parsed.slugs.push(value);
      i += 1;
    } else {
      fail(`알 수 없는 옵션: ${arg}`);
    }
  }

  return parsed;
}

function printHelp() {
  console.log(`발행 전 글의 좌표·대표 이미지·본문 사진 품질을 검사합니다.

검사 항목:
  - food/local: 좌표, 대표 이미지(방송사 마크 금지), 본문 실사진 1장 이상
  - 전체: 본문 이미지 파일 존재, 검정/빈 이미지(전체가 거의 단색 검정) 여부
  - 그 외 카테고리: 본문 사진 0장이면 경고

Usage:
  npm run audit:post-assets
  npm run audit:post-assets -- --include-drafts
  npm run audit:post-assets -- --slug <slug> [--slug <slug>]`);
}

async function readPosts(rootDir) {
  const files = await walk(rootDir);
  const markdownFiles = files.filter((file) => file.endsWith('.md'));
  const posts = [];

  for (const filePath of markdownFiles) {
    const raw = await readFile(filePath, 'utf8');
    const frontmatter = parseFrontmatter(raw);

    if (frontmatter) {
      posts.push({ filePath, raw, frontmatter });
    }
  }

  return posts;
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(entryPath));
    } else {
      files.push(entryPath);
    }
  }

  return files;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const frontmatter = {};
  for (const line of match[1].split('\n')) {
    const item = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!item) continue;

    const [, key, rawValue] = item;
    frontmatter[key] = parseYamlScalar(rawValue);
  }

  return frontmatter;
}

function parseYamlScalar(value) {
  const trimmed = value.trim();
  if (trimmed === '') return '';
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) return trimmed.slice(1, -1).replace(/\\"/g, '"');
  if (trimmed.startsWith("'") && trimmed.endsWith("'")) return trimmed.slice(1, -1).replace(/''/g, "'");
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (/^-?\d+(?:\.\d+)?$/.test(trimmed)) return Number(trimmed);
  return trimmed;
}

function hasCoordinates(frontmatter) {
  return typeof frontmatter.mapLat === 'number' && typeof frontmatter.mapLng === 'number';
}

async function auditBodyImages(post, slug, isVisit) {
  const body = post.raw.replace(/^---\n[\s\S]*?\n---/, '');
  const urls = [...body.matchAll(/!\[[^\]]*\]\(([^)\s]+)[^)]*\)|<img[^>]*\ssrc=["']([^"']+)["']/g)]
    .map((match) => match[1] ?? match[2])
    .filter((url) => url.startsWith('/'));
  const photos = urls.filter((url) => !BROADCAST_FALLBACK_PATTERN.test(url));

  if (photos.length === 0) {
    const message = `${slug}: 본문에 실제 사진이 0장 (방송 캡처·업체/공식 사진 등 관련 이미지 필요)`;
    if (isVisit) failures.push(message);
    else warnings.push(message);
  }

  for (const url of urls) {
    if (!await exists(path.join(PUBLIC_DIR, url))) {
      failures.push(`${slug}: 본문 이미지 파일 없음 (${url})`);
      continue;
    }
    await auditImageFile(url, slug, '본문 이미지');
  }
}

async function auditImageFile(url, slug, label) {
  if (!sharp || !RASTER_PATTERN.test(url)) return;
  const filePath = path.join(PUBLIC_DIR, url);
  if (!await exists(filePath)) return;

  try {
    const stats = await sharp(filePath).stats();
    const rgb = stats.channels.slice(0, 3);
    const mean = rgb.reduce((sum, channel) => sum + channel.mean, 0) / rgb.length;
    const stdev = rgb.reduce((sum, channel) => sum + channel.stdev, 0) / rgb.length;
    if (mean < BLANK_MEAN_MAX && stdev < BLANK_STDEV_MAX) {
      failures.push(`${slug}: ${label}가 검정/빈 이미지 (${url}, 평균 ${mean.toFixed(1)})`);
    }
  } catch (error) {
    failures.push(`${slug}: ${label}를 열 수 없음 (${url}: ${error.message})`);
  }
}

async function loadSharp() {
  try {
    return (await import('sharp')).default;
  } catch {
    console.log('WARN sharp를 불러오지 못해 검정 이미지 검사를 건너뜀');
    return null;
  }
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
