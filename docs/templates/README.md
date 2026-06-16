# 방송 블로그 카테고리별 원고 템플릿

이 디렉터리는 `tv.lovizu.com`(오늘방송 노트)의 카테고리별 Markdown 원고 템플릿입니다. Blogger가 초안을 빠르게 시작하기 위한 작성용 스캐폴드이며, 발행되는 글이 아닙니다. 실제 글은 `src/content/posts/**/*.md`에 작성합니다.

연결 문서:

- 전략/우선순위: `docs/tv-content-strategy-2026-06.md`
- 발행 전 게이트: `docs/publishing-quality-gates.md`
- 제목·메타·태그 규칙: `src/content/posts/guide/broadcast-blog-seo-rules.md`
- 출처 확인 플레이북: `docs/research/broadcast-source-checklist.md`
- frontmatter 스키마: `src/content.config.ts`

## 템플릿 목록

| 카테고리 | 파일 | 주 프로그램 | 우선순위 |
|---|---|---|---|
| `food` | `food-post-template.md` | 2TV 생생정보, 생방송 투데이, 오늘N | 최우선 |
| `local` | `local-post-template.md` | 6시 내고향, 한국인의 밥상 | 2순위 |
| `life` | `life-post-template.md` | 생활의 달인, 엄지의 제왕 | 3순위 |
| `health` | `health-post-template.md` | 생로병사의 비밀, 엄지의 제왕 | 제한 운영 |

## 모든 템플릿 공통 규칙

이 규칙은 4개 템플릿 전부에 적용됩니다. 각 템플릿 본문은 이 규칙을 전제로 작성되어 있습니다.

1. 방송 내용은 자막·대본을 복붙하지 않고 직접 요약합니다.
2. 상호·주소·영업시간·가격·휴무는 방송사 공식 정보와 지도/업체/기사 등 **서로 다른 계열 출처 2개 이상**으로 교차 확인합니다.
3. 가격·영업시간처럼 자주 바뀌는 정보에는 "방문 전 공식 채널 또는 지도에서 다시 확인" 문구를 둡니다.
4. 확인 못 한 정보는 단정하지 말고 `확인 필요`, `방송 기준`, `지도 기준`처럼 기준 시점을 밝힙니다.
5. frontmatter는 `src/content.config.ts` 스키마를 따릅니다. 필수: `title`, `slug`, `description`, `date`, `category`, `program`. `slug`는 `^[a-z0-9]+(?:-[a-z0-9]+)*$`.
6. 확인 안 된 `placeName`/`address`는 frontmatter에 단정값으로 넣지 말고, 본문에 "방문 전 확인" 문구로 처리합니다.
7. 제목은 프로그램명·핵심 대상·검색 의도를 담되 `무조건`, `충격`, `레전드`, `끝판왕` 같은 클릭베이트를 쓰지 않습니다.
8. 글 하단에 `## 출처` 섹션을 두고 사용한 근거를 정리합니다.
9. 모든 글에 `최종 업데이트: YYYY-MM-DD`를 남깁니다.

## frontmatter 필드 참고 (스키마 기준)

| 필드 | 필수 | 설명 |
|---|---|---|
| `title` | 예 | 게시 제목. H1과 일치 |
| `slug` | 예 | 소문자/숫자/하이픈만 |
| `description` | 예 | 80~120자 메타 설명 |
| `date` | 예 | 발행(작성) 기준일 |
| `updatedDate` | 아니오 | 수정일 |
| `status` | 아니오 | `draft`(기본) / `published` |
| `category` | 예 | `food` / `local` / `health` / `life` |
| `program` | 예 | 프로그램명 |
| `episode` | 아니오 | 회차/코너 |
| `broadcastDate` | 아니오 | 방송일 |
| `region` | 아니오 | 지역(시군구 권장) |
| `placeName` | 아니오 | 상호. 확인된 경우만 |
| `address` | 아니오 | 도로명 주소. 확인된 경우만 |
| `tags` | 아니오 | 3~5개 권장 |
| `source` | 아니오 | 발행 전 2개 이상 권장 |
| `image` / `imageAlt` | 아니오 | 이미지 사용 시 alt 필수 |
| `author` | 아니오 | 기본 `lovizu` |
