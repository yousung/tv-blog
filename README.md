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
