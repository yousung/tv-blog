# 오늘방송 노트 / TV Blog

방송 프로그램에 소개된 맛집, 지역 이야기, 건강 정보를 정리하는 별도 블로그입니다.

- 예정 도메인: `https://tv.lovizu.com`
- GitHub: `https://github.com/yousung/tv-blog`
- Paperclip project: `방송 블로그 운영` (`c391d572`)
- Stack: Astro SSG + Markdown content collections

## 개발

```bash
npm install
npm run dev
npm run build
```

## 배포 준비

Cloudflare Pages 기준 설정:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 20 이상
- Production domain: `tv.lovizu.com`

`astro.config.mjs`의 `site` 값은 `https://tv.lovizu.com`으로 고정되어 RSS, canonical, sitemap URL 생성에 사용됩니다.

## 콘텐츠 원칙

1. 방송 내용은 복붙하지 않고 직접 요약합니다.
2. 상호, 주소, 영업시간, 가격은 공식/지도/기사로 교차 검증합니다.
3. 방송 캡처는 보조수단으로 최소 사용하고 출처를 명시합니다.
4. 건강 정보는 의학적 단정 없이 일반 정보로 정리합니다.
5. 초기 운영은 자동 발행보다 초안/검토/발행 흐름을 우선합니다.

## 일일 발행 루틴 — 조사·브라우저 도구

에이전트 루틴(하루 1개 방송글 발행)에서 웹 조사와 브라우저 작업은 아래 규칙을 따릅니다.

### 브라우저: ego-browser 스킬만 사용

- 방송 후보 조사, 네이버 플레이스·지도 확인, 기사·공식 클립 확인, 배포 후 실제 글 화면(모바일 포함) 확인은 **`ego-browser`(Ego Lite) 스킬**로 합니다.
- **Claude in Chrome(`mcp__claude-in-chrome__*`)은 사용하지 않습니다.** 2026-11-13 실행에서 `Couldn't determine which page` 오류와 응답 타임아웃이 반복되어 조사가 끊겼습니다.
- 시작 시 `ego-browser skill`을 실행해 설치 버전의 사용 가이드를 읽고, 그 안내대로 `ego-browser nodejs` 스크립트를 실행합니다.
- 작업 하나당 TaskSpace 하나를 쓰고, 끝나면 `task.finish({ keep: [] })`로 닫습니다.

```bash
ego-browser skill            # 버전별 사용 가이드 출력 (끝 줄 "[ego-browser:skill] end of guide" 확인)
ego-browser nodejs <<'EOF'
const task = await taskSpace("tv-blog daily research");
const page = task.page("p1");
await page.goto("https://m.place.naver.com/restaurant/<업체ID>/home");
console.log(await page.snapshot());
EOF
```

### 브라우저 없이 쓰는 보조 경로

| 용도 | 경로 |
|---|---|
| 최근 방송 예고 기사 목록 | 위키트리 `https://www.wikitree.co.kr/news-sitemap.xml` (최근 2일치 제목에서 프로그램명 필터) |
| 업체 메뉴·가격·영업시간·주차·업체 등록 사진 | `m.place.naver.com/restaurant/{id}/home` HTML의 `window.__APOLLO_STATE__` |
| 업체 ID·좌표 찾기 | `m.search.naver.com` 검색 HTML — `126.9783882 / 37.5666103`은 서울시청 기본좌표이므로 업체 좌표로 쓰지 않음 |
| 공식 클립 내용 | `yt-dlp ytsearch`로 KBS·SBS·MBC 공식 채널 클립 찾기 → `youtube-digest` 스킬(자동자막 요약). 클립 캡처는 설명란에 무단 전재 금지가 있으면 쓰지 않음 |

네이버가 막히면 같은 요청을 반복하지 말고 경로를 바꿉니다. 이미지 URL을 추출했다고 재사용 권한이 생기지는 않으므로, 업체가 직접 등록한 사진(`mediaSource: business`, 메뉴 사진)을 우선 사용합니다.
