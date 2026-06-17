#!/usr/bin/env node

import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const POSTS_DIR = path.resolve('src/content/posts');
const PUBLIC_DIR = path.resolve('public');
const VISIT_CATEGORIES = new Set(['food', 'local']);
const BROADCAST_FALLBACK_PATTERN = /^\/images\/broadcast\//;

const args = parseArgs(process.argv.slice(2));

if (args.help) {
  printHelp();
  process.exit(0);
}

const posts = await readPosts(POSTS_DIR);
const publishedVisitPosts = posts.filter((post) => {
  const data = post.frontmatter;
  if (!VISIT_CATEGORIES.has(data.category)) return false;
  if (args.publishedOnly && data.status !== 'published') return false;
  return true;
});

const failures = [];
const warnings = [];

for (const post of publishedVisitPosts) {
  const data = post.frontmatter;
  const slug = data.slug ?? path.basename(post.filePath);

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
    }
  }
}

for (const warning of warnings) {
  console.log(`WARN ${warning}`);
}

for (const failure of failures) {
  console.log(`FAIL ${failure}`);
}

console.log(`감사 완료: 대상 ${publishedVisitPosts.length}건, 경고 ${warnings.length}건, 실패 ${failures.length}건`);

if (failures.length > 0) {
  process.exit(1);
}

function parseArgs(argv) {
  const parsed = {
    help: false,
    publishedOnly: true
  };

  for (const arg of argv) {
    if (arg === '--help' || arg === '-h') {
      parsed.help = true;
    } else if (arg === '--include-drafts') {
      parsed.publishedOnly = false;
    } else {
      fail(`알 수 없는 옵션: ${arg}`);
    }
  }

  return parsed;
}

function printHelp() {
  console.log(`발행 전 food/local 글의 좌표와 대표 이미지 품질을 검사합니다.

Usage:
  npm run audit:post-assets
  npm run audit:post-assets -- --include-drafts`);
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
