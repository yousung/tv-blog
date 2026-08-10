# BLOA-906 밤 과거 백필 감사 결과

- 작성일: 2026-08-10
- 작성자: Blogger
- 대상 이슈: BLOA-906
- 범위: `2TV 생생정보`, `생방송 투데이`, `오늘N`, `6시 내고향` 프로그램별 과거 3회차 백필 상태 확인

## 결론

이번 heartbeat에서는 신규 게시글을 만들지 않았다. 저녁 루틴(BLOA-905)이 이미 확인한 최신 과거 회차와 겹치지 않도록 더 오래된 후보를 확인했지만, 현재 저장소와 검색 인덱스 기준으로 밤 과거 백필에 필요한 프로그램별 3회차가 이미 `published` 상태로 반영되어 있었다.

- `6시 내고향`: 8595회·8594회는 저녁 루틴 범위로 제외. 그보다 오래된 8591회, 8590회, 8589회가 이미 published.
- `2TV 생생정보`: 2586회·2585회는 저녁 루틴 범위로 제외. 그보다 오래된 2581회, 2580회, 2568회가 이미 published.
- `생방송 투데이`: 저녁 루틴에서 확인한 4057회~4055회와 이전 밤 감사에서 확인한 4047회 등이 이미 published. 새로 발행할 직접 후보 없음.
- `오늘N`: 2772회는 최신/저녁성 후보로 제외. 과거 후보 2757회, 2755회, 2754회, 2753회가 이미 published 글로 다수 반영되어 있음.

따라서 이번 실행의 최종 상태는 `스킵 완료`다. 작업 회피가 아니라 중복 방지 정책에 따른 신규 작성 보류다.

## recall 및 중복 검사

`para-memory-files` 규칙에 따라 유사 과거 토픽 회상을 시도했으나, 현재 실행 환경에는 `qmd` 명령이 없어 실패했다. 대체 방식으로 아래 파일군을 직접 검색했다.

- `src/content/posts`
- `dist/search-index.json`
- `dist/sitemap.xml`
- `docs/research`
- `docs/marketing`
- 이전 감사 문서: `docs/research/bloa-892-night-backfill-audit-2026-08-09.md`, `docs/research/bloa-905-evening-backfill-audit-2026-08-10.md`

확인 키워드:

- 프로그램명: `2TV 생생정보`, `생방송 투데이`, `오늘N`, `6시 내고향`
- 저녁 루틴 제외 회차: `8595`, `8594`, `2586`, `2585`, `4057`, `4056`, `4055`, `2772`
- 밤 루틴 대조 회차: `8591`, `8590`, `8589`, `2581`, `2580`, `2568`, `4047`, `4046`, `2757`, `2755`, `2754`, `2753`
- 대표 상호/키워드: `하능농원`, `간절곶토마토협동조합`, `벚꽃마을가든`, `마포옥`, `장금이꽃게장`, `부여 406번`, `발해감자탕`, `B형간염`, `용궁삼계짬뽕`, `솔반찬`, `안양중앙시장`, `이창노녹두삼계탕`, `장생포오색수국정원`

## 프로그램별 처리 상태

### 6시 내고향

| 회차 | 방송일 | 발행 상태 | 대표 발행 글 | 중복 검사 결과 |
| --- | --- | --- | --- | --- |
| 8591회 | 2026-07-31 | published | `6si-naegohyang-sancheong-geumhwagyu-8591.md` | 신규 생성 불필요 |
| 8590회 | 2026-07-30 | published | `6si-naegohyang-ulju-ganjeolgot-tomato-8590.md` | 신규 생성 불필요 |
| 8589회 | 2026-07-29 | published | `6si-naegohyang-jinan-byeotkkotmaeul-deunggalbi-8589.md` | 신규 생성 불필요 |

추가 메모:

- 8595회, 8594회는 BLOA-905 저녁 과거 백필 감사에서 이미 처리 범위로 확인했으므로 이번 밤 루틴에서는 제외했다.
- 8591회 금화규 글은 건강 표현 리스크가 있는 농산물 주제이나 기존 글에서 구매 정보와 주의 표현을 함께 다루고 있어 별도 중복 글을 만들지 않는다.

### 2TV 생생정보

| 회차 | 방송일 | 발행 상태 | 대표 발행 글 | 중복 검사 결과 |
| --- | --- | --- | --- | --- |
| 2581회 | 2026-07-30 | published | `2tv-live-info-mapo-mapook-yangjitang-2581.md` | 신규 생성 불필요 |
| 2580회 | 2026-07-29 | published | `2tv-live-info-asan-janggeumi-gejang-2580.md` | 신규 생성 불필요 |
| 2568회 | 2026-07-13 | published | `2tv-live-info-buyeo-406-bus-history-trip-2568.md` | 신규 생성 불필요 |

추가 메모:

- 2586회, 2585회는 BLOA-905 저녁 과거 백필 감사에서 이미 처리 범위로 확인했으므로 제외했다.
- 2568회는 Researcher 문서 `bloa-692`, `bloa-694`에서 공식 출처가 확인됐고, 부여 406번 버스 여행 글이 published 상태다.

### 생방송 투데이

| 회차 | 방송일 | 발행 상태 | 대표 발행 글 | 중복 검사 결과 |
| --- | --- | --- | --- | --- |
| 4057회 | 2026-07-23 | published | `saengbangsong-today-itaewon-motorcity-detroit-pizza.md` | BLOA-905에서 확인, 신규 생성 불필요 |
| 4056회 | 2026-07-22 | published | `saengbangsong-today-bucheon-wangchairu-dosakmyeon.md` | BLOA-905에서 확인, 신규 생성 불필요 |
| 4055회 | 2026-07-21 | published | `saengbangsong-today-yeonnam-gwanggye-samgyebaekban.md` | BLOA-905에서 확인, 신규 생성 불필요 |
| 4047회 | 2026-07-09 | published | `saengbangsong-today-euljiro-balhae-gamjatang.md` | 이전 밤 감사에서 확인, 신규 생성 불필요 |
| 4046회 | 2026-07-08 | published | `saengbangsong-today-4046-hepatitis-b-liver-cirrhosis-cancer.md` | 건강 YMYL 글로 이미 발행, 중복 생성 금지 |

추가 메모:

- 4057~4055회는 저녁 루틴에서 이미 과거 후보로 잡아 published 상태를 확인했다.
- 4046회는 건강 주제라 새 맛집형 글로 확장하지 않는다. 기존 글이 공식 방송 정보와 일반 건강 정보 중심으로 작성되어 있어 중복 회피가 맞다.

### 오늘N

| 회차 | 방송일 | 발행 상태 | 대표 발행 글 | 중복 검사 결과 |
| --- | --- | --- | --- | --- |
| 2757회 | 2026-07-13 | published | `oneuln-gijang-yonggung-samgye-jjamppong.md`, `oneuln-gwangju-solbanchan-banchan.md`, `oneuln-dongducheon-blueberry-camping.md`, `oneuln-gyeongju-vasilla-hanok-garden.md` | 신규 생성 불필요 |
| 2755회 | 2026-07-09 | published | `oneuln-anyang-jungang-market-2755.md`, `oneuln-hongcheon-yangjimal-hwarogui-gochujang-samgyeopsal.md` | 신규 생성 불필요 |
| 2754회 | 2026-07-08 | published | `oneuln-yongin-ichangno-nokdu-samgyetang.md` | 신규 생성 불필요 |
| 2753회 | 2026-07-07 | published | `oneuln-gangneung-woorijibmatchan-banchan.md`, `oneuln-ulsan-jangsaengpo-hydrangea-garden.md`, `oneuln-gongju-yeongune-nongjang-camping.md` | 신규 생성 불필요 |

추가 메모:

- 오늘N은 BLOA-905 감사에는 별도 표가 없었지만, 우선 프로그램 문서 기준 활성 백필 대상이므로 이번 감사에 포함했다.
- 2772회 강화 금문도·태백 구와우마을 글은 2026-08-06 방송분이라 이번 밤 과거 백필의 더 오래된 3회차 기준에서는 제외했다. 또한 저장소에 동일/유사 slug가 복수 존재하므로 추가 중복 생성은 금지한다.

## 미추적 파일 및 스킵 판단

현재 worktree에는 다른 작업에서 생긴 것으로 보이는 미추적 리서치 문서와 게시글 파일이 다수 존재한다. 이번 BLOA-906에서는 기존 변경을 되돌리거나 정리하지 않았다.

특히 아래 미추적 글은 이번 밤 백필 신규 발행으로 보지 않는다.

- `src/content/posts/food/6si-naegohyang-goseong-seorin-corn.md`: 같은 방송·지역·품목·판매처 축의 `6si-naegohyang-goseong-wolpyeongri-corn.md`가 이미 published라 직접 중복으로 판단.
- `src/content/posts/food/saengbangsong-today-goryeosan-horangi-kodari-jjim.md`: 2026-08-05 방송분으로 이번 밤 과거 3회차 범위와 맞지 않으며, 기존 감사에서 이미지·영업정보 리스크가 남은 후보로 분류됨.
- `src/content/posts/food/oneuln-ganghwa-geummundo-jjajang-tangsuyuk-2772.md`: 2026-08-06 방송분으로 이번 밤 과거 백필 기준에서 제외. `oneuln-ganghwa-geummundo-jajang-tangsuyuk.md`와 slug·주제 중복 위험도 있음.

## 최종 판단

중복 검사 결과: `신규 0건 / 기존 업데이트 0건 / 스킵 4개 프로그램`.

발행할 새 원고가 없으므로 `npm run build`, 커밋, 푸시는 수행하지 않았다. 새 콘텐츠가 없는 상태에서 빌드를 돌리면 현재 worktree의 unrelated 미추적 파일과 기존 산출물 상태까지 함께 검증하는 의미가 되어 이번 Blogger 범위를 벗어난다.

다음 밤 백필에서 실제 신규 생산을 하려면 Marketer/Researcher가 기존 발행 회차보다 더 오래된 새 후보를 프로그램별로 다시 제시해야 한다. 추천 조건은 다음과 같다.

- `6시 내고향`: 8588회 이전 중 특산물·시장·판매처가 공식 확인되는 회차
- `2TV 생생정보`: 2579회 이전 중 상호·주소·지도·대표 이미지 확보가 가능한 회차
- `생방송 투데이`: 4045회 이전 중 맛집/지역/건강 주제의 출처가 명확한 회차
- `오늘N`: 2752회 이전 중 이미 발행된 2757~2753회와 충돌하지 않는 회차
