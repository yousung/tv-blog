# BLOA-975 새벽 최신 방송 루틴 처리 로그

- 작성일: 2026-08-15
- 대상 방송일: 2026-08-14
- 담당: Blogger

## 요약

2026년 8월 14일 금요일 실제 방영 여부를 공식 자료 중심으로 확인했다.

- KBS 시청자상담실 `[8월14일(금)] 방송정보`에서 `6시 내고향 8601회`, `2TV 생생정보 2592회` 방영 및 취재처를 확인했다.
- MBC `오늘N` 방송정보 목록 API는 최신 글이 2026-08-13 `2777회`로 멈춰 있어 2026-08-14 방영분은 이번 루틴에서 건너뛰었다.
- SBS `생방송 투데이`는 2026-08-14 공식 회차 ID/방송정보를 안정적으로 특정하지 못했다. 주변 AMP mediaid 탐색에서도 `생방송 투데이 4072/4073회` 공식 페이지가 잡히지 않아 발행하지 않았다.
- `생활의 달인`, `한국인의 밥상`, `생로병사의 비밀`, `알토란`은 금요일 정규 대상이 아니거나 전날 새 회차 확인 대상이 아니어서 건너뛰었다.

## 메모리·중복 확인

- `qmd query`는 현재 실행 환경에 없어 실패했다.
- 대체 확인 범위: `docs/research`, `docs/marketing`, `src/content/posts`, `dist/search-index.json`, `dist/sitemap.xml`
- 확인 키워드: `8601`, `2592`, `2026-08-14`, `유럽종포도`, `한드미마을`, `소백산벌꿀농장`, `어미가`, `서울빙고`, `대원냉동산업사`, `남양주 인공암벽`, `비숍 클라이밍`, `삼계사계`, `천안 독립기념관`, `충남집 순대`, `병천순대빵`
- 결과: 직접 중복 글 없음. 신규 발행으로 처리.

## 신규 발행 글

| 프로그램 | 회차 | 주제 | 결과 | 파일 |
| --- | --- | --- | --- | --- |
| 6시 내고향 | 8601회 | 김해 유럽종포도 | 신규 | `src/content/posts/food/6si-naegohyang-gimhae-european-grape-8601.md` |
| 6시 내고향 | 8601회 | 단양 한드미마을·소백산벌꿀농장 | 신규 | `src/content/posts/local/6si-naegohyang-danyang-handemi-honey-8601.md` |
| 6시 내고향 | 8601회 | 포항 어미가 물회·해신탕 | 신규 | `src/content/posts/food/6si-naegohyang-pohang-eomiga-mulhoe-haesintang-8601.md` |
| 6시 내고향 | 8601회 | 서울빙고·대원냉동산업사 얼음 | 신규 | `src/content/posts/local/6si-naegohyang-seoul-ice-shop-bingo-8601.md` |
| 2TV 생생정보 | 2592회 | 남양주·노원 실내 클라이밍 | 신규 | `src/content/posts/local/2tv-live-info-indoor-climbing-2592.md` |
| 2TV 생생정보 | 2592회 | 담양 삼계사계 삼계탕 | 신규 | `src/content/posts/food/2tv-live-info-damyang-samgyesagye-samgyetang-2592.md` |
| 2TV 생생정보 | 2592회 | 천안 독립기념관·병천순대 코스 | 신규 | `src/content/posts/local/2tv-live-info-cheonan-independence-course-2592.md` |

## 출처

- KBS 시청자상담실 `[8월14일(금)] 방송정보`: https://iaudience.kbs.co.kr/broadcast/11348
- MBC 오늘N 방송정보 목록 API: https://imbbs.imbc.com/api/board/list.aspx?bid=evening_info&page=1&pagesize=20&notice=3&img=yes&content=no
- SBS 생방송 투데이 AMP 탐색 기준: https://programs.sbs.co.kr/programTemplate/amp/vod/today3/
