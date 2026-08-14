# BLOA-971 밤 과거 백필 감사 결과

- 작성일: 2026-08-14
- 작성자: Blogger
- 대상 이슈: `BLOA-971`
- 범위: `6시 내고향`, `2TV 생생정보`, `생방송 투데이` 프로그램별 과거 3회차

## 결론

이번 밤 백필에서는 신규 게시글을 만들지 않았다. 최신 회차를 제외하고 프로그램별 과거 3회차를 다시 확인했지만, 현재 저장소와 빌드 산출물 기준으로 검색 가치가 있는 후보는 이미 `published` 상태로 반영되어 있었다. 남은 후보는 상호·주소·좌표·이미지·공식 출처 중 하나가 부족해 Blogger 단독 발행으로 넘기면 추정성 글이 될 위험이 컸다.

- `6시 내고향`: 8597회, 8595회, 8594회는 선행 밤 루틴에서 이미 published 글로 확인됐다. 더 오래된 안전 후보인 8571회 강별면옥·산골산장도 published이며, 서인이네 찰옥수수 계열은 `6si-naegohyang-goseong-wolpyeongri-corn`이 검색 인덱스와 sitemap에 반영되어 있어 중복 생성하지 않는다.
- `2TV 생생정보`: 2588회, 2586회, 2585회는 이미 published 글로 커버됐다. 더 오래된 2556회 백마강 참숯 민물장어·벽우 팔공산점도 published이며, dist 검색 인덱스와 sitemap에서 URL을 확인했다.
- `생방송 투데이`: 4057회, 4056회, 4055회는 이미 published 상태다. 더 오래된 안정 후보인 4036회 삼복한방닭한마리와 4037회 큰길낙지볶음도 published 및 sitemap 반영 상태다. 4069~4071회는 선행 리서치에서 상호·주소 직접 매칭 부족 또는 최신성 문제로 보류가 맞다.

처리 결과는 `신규 0건 / 기존 업데이트 0건 / 스킵 3개 프로그램`이다. 새 콘텐츠 파일이 없으므로 게시글 커밋·푸시는 수행하지 않는다.

## 현재 이슈 목적과 독자 의도

BLOA-971의 목적은 최신 방송을 따라가는 것이 아니라, 방송일이 지난 회차 중 검색 수요가 남아 있는 소재를 중복 없이 채우는 것이다. 독자는 프로그램명, 회차, 지역, 상호, 메뉴를 함께 검색해 방송에 나온 곳이 어디인지, 지금 방문하거나 주문할 수 있는지, 방문 전 무엇을 확인해야 하는지를 알고 싶어 한다. 이번 범위에서는 새 글을 늘리는 것보다 이미 발행된 회차를 다시 만들지 않는 것이 검색 품질과 카니발리제이션 방지에 더 맞다.

## recall 및 중복 검사

`para-memory-files` 규칙에 따라 유사 과거 토픽 회상을 먼저 시도했으나, 현재 실행 환경에는 `qmd` 명령이 없어 실패했다. 대체 방식으로 아래 자료를 직접 검색했다.

- `src/content/posts`
- `dist/search-index.json`
- `dist/sitemap.xml`
- `docs/research`
- 선행 감사 문서: `docs/research/bloa-943-night-backfill-audit-2026-08-12.md`, `docs/research/bloa-957-night-backfill-audit-2026-08-13.md`
- 선행 후보 문서: `docs/research/bloa-606-backfill-recheck-2026-07-08.md`, `docs/research/bloa-678-backfill-source-image-coordinate-pack-2026-07-13.md`, `docs/research/bloa-697-past-backfill-official-source-precheck-2026-07-14.md`

확인 키워드:

- 프로그램명: `6시 내고향`, `2TV 생생정보`, `생방송 투데이`
- 회차: `8597`, `8595`, `8594`, `8571`, `2588`, `2586`, `2585`, `2556`, `4071`, `4070`, `4069`, `4057`, `4056`, `4055`, `4037`, `4036`
- 상호·소재: `강별면옥`, `산골산장`, `서인이네 찰옥수수`, `백마강 참숯 민물장어`, `벽우 팔공산점`, `삼복한방닭한마리`, `큰길낙지볶음`, `모터시티`, `왕차이루`, `광계`

## 프로그램별 처리 상태

### 6시 내고향

| 회차 | 방송일 | 상태 | 확인한 글 | 중복 검사 결과 |
| --- | --- | --- | --- | --- |
| 8597회 | 2026-08-10 | published | `6si-naegohyang-jindo-seojeongyeol-anchovy-8597.md`, `6si-naegohyang-hongseong-direct-market-8597.md` | 신규 생성 불필요 |
| 8595회 | 2026-08-06 | published | `6si-naegohyang-pyeongchang-daemi-dureup-8595.md`, `6si-naegohyang-gwangyang-noji-eel-8595.md`, `6si-naegohyang-hapcheon-yerang-strawberry-8595.md` | 신규 생성 불필요 |
| 8594회 | 2026-08-05 | published | `6si-naegohyang-gimje-jongeoyeon-jongeo-8594.md`, `6si-naegohyang-jeju-jocheon-green-tangerine-8594.md`, `6si-naegohyang-boryeong-mud-festival-trip-8594.md` | 신규 생성 불필요 |
| 8571회 | 2026-07-03 | published | `6si-naegohyang-paju-gangbyeol-myeonok-cold-noodle.md`, `6si-naegohyang-wanju-sangol-sanjang-valley.md`, `6si-naegohyang-goseong-wolpyeongri-corn.md` | 더 오래된 후보까지 이미 반영됨 |

스킵 사유:

- 8597~8594회는 선행 밤 감사에서 이미 주요 세그먼트 published가 확인됐다.
- 8571회는 선행 후보 문서에서 발행 가능 후보로 분류됐던 글이 현재 저장소와 dist 산출물에 반영되어 있다.
- `6si-naegohyang-goseong-seorin-corn.md` 초안 계열은 월평리 찰옥수수 published 글과 직접 중복 위험이 있어 새 글로 만들지 않는다.

### 2TV 생생정보

| 회차 | 방송일 | 상태 | 확인한 글 | 중복 검사 결과 |
| --- | --- | --- | --- | --- |
| 2588회 | 2026-08-10 | published | `2tv-live-info-mokpo-cheongja-min-eo-2588.md`, `2tv-live-info-wando-myeongpum-jeonbokgung-2588.md`, `2tv-live-info-wanju-hwasanae-bbanggeut-2588.md` | 신규 생성 불필요 |
| 2586회 | 2026-08-06 | published | `2tv-live-info-geumcheon-uiryeong-memil-2586.md`, `2tv-live-info-yeongdeok-bus-sea-trip-2586.md` | 신규 생성 불필요 |
| 2585회 | 2026-08-05 | published | `2tv-live-info-incheon-nongwon-bulgogi-set-2585.md`, `2tv-live-info-seongnam-dandae-market-2585.md`, `2tv-live-info-yangju-retro-valley-trip-2585.md`, `2tv-live-info-suwon-daddy-childcare-kickboxing-2585.md`, `2tv-live-info-mountain-unicycle-leopard-muni-2585.md` | 신규 생성 불필요 |
| 2556회 | 2026-06-23 | published | `2tv-live-info-daejeon-baekmagang-minmuljangeo.md`, `2tv-live-info-daegu-byeogu-palgongsan-haesintang.md`, `2tv-live-info-buan-310-bus-trip.md`, `2tv-live-info-unique-cafes-top3.md` | 더 오래된 후보까지 이미 반영됨 |

스킵 사유:

- 2588~2585회는 이미 맛집·지역·특이 소재가 published로 반영되어 같은 회차에서 추가 글을 만들면 중복 가능성이 크다.
- 2556회 백마강 참숯 민물장어와 벽우 팔공산점도 published이며, sitemap에서 공개 URL을 확인했다.
- 가격·영업시간처럼 변동 가능한 정보는 기존 글에서 방문 전 확인 문구로 처리되어 있어 Blogger가 이번 루틴에서 별도 업데이트할 필요가 없다.

### 생방송 투데이

| 회차 | 방송일 | 상태 | 확인 자료 또는 글 | 중복 검사 결과 |
| --- | --- | --- | --- | --- |
| 4071회 | 2026-08-12 | 보류 | `docs/research/bloa-951-saengbangsong-today-4071-verification.md` | 식당 실명·주소 공식 매칭 부족 |
| 4070회 | 2026-08-11 | 조건부 보류 | `docs/research/bloa-936-saengbangsong-today-4070-source-map-image-check-2026-08-12.md` | 최신성에 가깝고 이미지·공식 매칭 보강 필요 |
| 4069회 | 2026-08-10 | 보류 | `docs/research/bloa-914-saengbangsong-today-4069-source-map-image-check-2026-08-10.md` | 장소명·상호 직접 매칭 부족 |
| 4057회 | 2026-07-23 | published | `saengbangsong-today-itaewon-motorcity-detroit-pizza.md` | 신규 생성 불필요 |
| 4056회 | 2026-07-22 | published | `saengbangsong-today-bucheon-wangchairu-dosakmyeon.md` | 신규 생성 불필요 |
| 4055회 | 2026-07-21 | published | `saengbangsong-today-yeonnam-gwanggye-samgyebaekban.md` | 신규 생성 불필요 |
| 4037회 | 2026-06-25 | published | `saengbangsong-today-chuncheon-keungil-nakji-4037.md` | 더 오래된 후보까지 이미 반영됨 |
| 4036회 | 2026-06-24 | published | `saengbangsong-today-hoegi-sambok-dakhanmari-4036.md` | 더 오래된 후보까지 이미 반영됨 |

스킵 사유:

- 4071~4069회는 선행 리서치 기준으로 발행하면 추정성 글이 될 위험이 있어 보류한다.
- 4057~4055회는 이미 published 글로 처리됐다.
- 4037~4036회는 선행 후보 문서에서 우선순위 후보였으나 현재는 published와 sitemap 반영이 모두 확인됐다.

## 미추적 파일 처리

현재 worktree에는 다른 작업에서 생성된 것으로 보이는 미추적 리서치 문서와 게시글 파일이 다수 있다. 이번 BLOA-971에서는 기존 변경을 되돌리거나 정리하지 않았다. 새로 추가한 파일은 이 감사 문서 하나뿐이다.

특히 아래 미추적 글은 이번 밤 백필 신규 산출물로 보지 않는다.

- `src/content/posts/food/6si-naegohyang-goseong-seorin-corn.md`: 월평리 찰옥수수 published 글과 직접 중복 위험이 있다.
- `src/content/posts/food/saengbangsong-today-goryeosan-horangi-kodari-jjim.md`: 2026-08-05 방송분으로 선행 리서치에서 영업정보·이미지 리스크가 남은 후보로 분류됐다.

## 검증

- `qmd search`: 실행 실패. 현재 환경에 `qmd` 명령이 없다.
- `src/content/posts` 검색: 프로그램명, 회차, 상호, slug 기준으로 대조했다.
- `dist/search-index.json`, `dist/sitemap.xml` 검색: 주요 후보 URL 반영을 확인했다.
- 새 게시글이 없어 `npm run build`, 콘텐츠 커밋, 푸시는 수행하지 않았다. 이번 변경은 운영 판단을 남기는 리서치 감사 문서 추가다.

## 최종 판단

중복 검사 결과: `신규 0건 / 기존 업데이트 0건 / 스킵 3개 프로그램`.

이번 이슈에서 처리할 수 있는 과거 3회차는 이미 published 상태이거나 발행 리스크가 커서 보류가 맞다. 다음 밤 백필에서 신규 생산을 하려면 Researcher가 각 프로그램별로 더 오래된 회차 중 공식 방송정보, 상호·주소, 지도, 안전한 이미지 후보가 함께 확인되는 후보를 새로 제시해야 한다.
