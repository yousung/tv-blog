#!/usr/bin/env node

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const POSTS_DIR = path.resolve('src/content/posts');
const TARGET_CATEGORIES = new Set(['food', 'local']);

const args = parseArgs(process.argv.slice(2));

if (args.help) {
  printHelp();
  process.exit(0);
}

const posts = await readPosts(POSTS_DIR);
const selected = posts.filter((post) => shouldProcessPost(post, args));

if (selected.length === 0) {
  console.log('처리할 글이 없습니다.');
  process.exit(0);
}

const providers = buildProviders(args.provider);

if (providers.length === 0) {
  fail(
    '사용 가능한 지오코딩 provider가 없습니다. NAVER_GEOCODE_CLIENT_ID/NAVER_GEOCODE_CLIENT_SECRET, KAKAO_REST_API_KEY, VWORLD_API_KEY 중 하나를 설정하세요.'
  );
}

let changed = 0;
let skipped = 0;
let failed = 0;

for (const post of selected) {
  const label = `${post.frontmatter.slug ?? path.basename(post.filePath)} (${post.frontmatter.address})`;

  if (!post.frontmatter.address) {
    skipped += 1;
    console.log(`SKIP ${label}: address 없음`);
    continue;
  }

  if (hasCoordinates(post.frontmatter) && !args.force) {
    skipped += 1;
    console.log(`SKIP ${label}: mapLat/mapLng 이미 있음`);
    continue;
  }

  const result = await geocodeWithProviders(post.frontmatter.address, providers);

  if (!result) {
    failed += 1;
    console.log(`FAIL ${label}: 모든 provider 결과 없음`);
    continue;
  }

  const nextContent = setCoordinateFields(post.raw, result.lat, result.lng);
  const action = args.write ? 'WRITE' : 'DRY';
  console.log(`${action} ${label}: ${result.lat}, ${result.lng} (${result.provider})`);

  if (args.write && nextContent !== post.raw) {
    await writeFile(post.filePath, nextContent);
    changed += 1;
  }
}

console.log(`완료: 변경 ${changed}건, 건너뜀 ${skipped}건, 실패 ${failed}건`);

if (failed > 0) {
  process.exitCode = 1;
}

function parseArgs(argv) {
  const parsed = {
    write: false,
    force: false,
    help: false,
    slugs: new Set(),
    provider: 'auto'
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === '--write') {
      parsed.write = true;
    } else if (arg === '--force') {
      parsed.force = true;
    } else if (arg === '--help' || arg === '-h') {
      parsed.help = true;
    } else if (arg === '--slug') {
      const value = argv[i + 1];
      if (!value) fail('--slug 값이 필요합니다.');
      parsed.slugs.add(value);
      i += 1;
    } else if (arg.startsWith('--slug=')) {
      parsed.slugs.add(arg.slice('--slug='.length));
    } else if (arg === '--provider') {
      const value = argv[i + 1];
      if (!value) fail('--provider 값이 필요합니다.');
      parsed.provider = value;
      i += 1;
    } else if (arg.startsWith('--provider=')) {
      parsed.provider = arg.slice('--provider='.length);
    } else {
      fail(`알 수 없는 옵션: ${arg}`);
    }
  }

  return parsed;
}

function printHelp() {
  console.log(`방송 글 주소를 지오코딩해 frontmatter mapLat/mapLng를 채웁니다.

Usage:
  npm run geocode:posts -- [--write] [--force] [--provider auto|naver|kakao|vworld] [--slug post-slug]

환경 변수:
  NAVER_GEOCODE_CLIENT_ID + NAVER_GEOCODE_CLIENT_SECRET
  또는 NCP_APIGW_API_KEY_ID + NCP_APIGW_API_KEY
  또는 KAKAO_REST_API_KEY
  또는 VWORLD_API_KEY

기본은 dry-run입니다. 실제 파일 수정은 --write가 있을 때만 수행합니다.`);
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

function shouldProcessPost(post, options) {
  const { frontmatter } = post;

  if (!TARGET_CATEGORIES.has(frontmatter.category)) return false;
  if (!frontmatter.address) return false;
  if (options.slugs.size > 0 && !options.slugs.has(frontmatter.slug)) return false;
  return options.force || !hasCoordinates(frontmatter);
}

function hasCoordinates(frontmatter) {
  return typeof frontmatter.mapLat === 'number' && typeof frontmatter.mapLng === 'number';
}

function buildProviders(providerName) {
  const names = providerName === 'auto' ? ['naver', 'kakao', 'vworld'] : [providerName];
  const providers = [];

  for (const name of names) {
    if (name === 'naver') {
      const clientId = process.env.NAVER_GEOCODE_CLIENT_ID ?? process.env.NCP_APIGW_API_KEY_ID;
      const clientSecret = process.env.NAVER_GEOCODE_CLIENT_SECRET ?? process.env.NCP_APIGW_API_KEY;
      if (clientId && clientSecret) {
        providers.push({
          name: 'naver',
          geocode: (address) => geocodeNaver(address, clientId, clientSecret)
        });
      }
    } else if (name === 'kakao') {
      if (process.env.KAKAO_REST_API_KEY) {
        providers.push({
          name: 'kakao',
          geocode: (address) => geocodeKakao(address, process.env.KAKAO_REST_API_KEY)
        });
      }
    } else if (name === 'vworld') {
      if (process.env.VWORLD_API_KEY) {
        providers.push({
          name: 'vworld',
          geocode: (address) => geocodeVWorld(address, process.env.VWORLD_API_KEY)
        });
      }
    } else {
      fail(`지원하지 않는 provider: ${name}`);
    }
  }

  return providers;
}

async function geocodeWithProviders(address, providers) {
  for (const provider of providers) {
    try {
      const result = await provider.geocode(address);
      if (result) return { ...result, provider: provider.name };
    } catch (error) {
      console.log(`WARN ${provider.name}: ${error.message}`);
    }
  }

  return null;
}

async function geocodeNaver(address, clientId, clientSecret) {
  const url = new URL('https://maps.apigw.ntruss.com/map-geocode/v2/geocode');
  url.searchParams.set('query', address);

  const response = await fetchJson(url, {
    headers: {
      'x-ncp-apigw-api-key-id': clientId,
      'x-ncp-apigw-api-key': clientSecret
    }
  });

  const first = response.addresses?.[0];
  if (!first?.x || !first?.y) return null;

  return toCoordinate(first.y, first.x);
}

async function geocodeKakao(address, apiKey) {
  const url = new URL('https://dapi.kakao.com/v2/local/search/address.json');
  url.searchParams.set('query', address);

  const response = await fetchJson(url, {
    headers: {
      Authorization: `KakaoAK ${apiKey}`
    }
  });

  const first = response.documents?.[0];
  if (!first?.x || !first?.y) return null;

  return toCoordinate(first.y, first.x);
}

async function geocodeVWorld(address, apiKey) {
  const url = new URL('https://api.vworld.kr/req/address');
  url.searchParams.set('service', 'address');
  url.searchParams.set('request', 'getCoord');
  url.searchParams.set('version', '2.0');
  url.searchParams.set('crs', 'epsg:4326');
  url.searchParams.set('type', 'road');
  url.searchParams.set('format', 'json');
  url.searchParams.set('key', apiKey);
  url.searchParams.set('address', address);

  const response = await fetchJson(url);
  const point = response.response?.result?.point;
  if (!point?.x || !point?.y) return null;

  return toCoordinate(point.y, point.x);
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  const body = await response.text();

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${body.slice(0, 160)}`);
  }

  return JSON.parse(body);
}

function toCoordinate(latValue, lngValue) {
  const lat = Number(latValue);
  const lng = Number(lngValue);

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  if (lat < 32 || lat > 39 || lng < 124 || lng > 132) return null;

  return {
    lat: roundCoordinate(lat),
    lng: roundCoordinate(lng)
  };
}

function roundCoordinate(value) {
  return Number(value.toFixed(7));
}

function setCoordinateFields(raw, lat, lng) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return raw;

  const frontmatter = match[1];
  let nextFrontmatter = upsertScalar(frontmatter, 'mapLat', String(lat));
  nextFrontmatter = upsertScalar(nextFrontmatter, 'mapLng', String(lng));

  return raw.replace(frontmatter, nextFrontmatter);
}

function upsertScalar(frontmatter, key, value) {
  const linePattern = new RegExp(`^${key}:.*$`, 'm');
  if (linePattern.test(frontmatter)) {
    return frontmatter.replace(linePattern, `${key}: ${value}`);
  }

  const addressPattern = /^address:.*$/m;
  if (addressPattern.test(frontmatter)) {
    return frontmatter.replace(addressPattern, (line) => `${line}\n${key}: ${value}`);
  }

  return `${frontmatter}\n${key}: ${value}`;
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
