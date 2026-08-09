# BLOA-892 밤 과거 백필 감사 결과

- 작성일: 2026-08-09
- 작성자: Blogger
- 대상 이슈: BLOA-892
- 범위: `6시 내고향`, `2TV 생생정보`, `생방송 투데이` 과거 회차 백필 상태 점검

## 결론

이번 heartbeat에서는 신규 게시글을 만들지 않았다. 저장소와 검색 인덱스 기준으로 Marketer/Researcher가 제시했던 과거 백필 후보 상당수가 이미 `published` 상태로 반영되어 있었고, 남은 미추적 초안 2건은 각각 직접 중복 또는 최신 방송 범위로 판단했다.

- `6시 내고향`: 과거 3회차 이상 이미 커버됨. 신규 발행 없음.
- `2TV 생생정보`: 과거 3회차 이상 이미 커버됨. 신규 발행 없음.
- `생방송 투데이`: 과거 3회차 이상 이미 커버됨. 신규 발행 없음.

## recall 및 중복 검사

`para-memory-files` 규칙에 따라 유사 과거 토픽 회상을 시도했으나, 현재 실행 환경에는 `qmd` 명령이 없었다. 대체 방식으로 `$AGENT_HOME`, `docs/research`, `docs/marketing`, `src/content/posts`, `dist/search-index.json`, `dist/sitemap.xml`을 `rg`로 검색했다.

확인한 키워드:

- 프로그램명: `6시 내고향`, `2TV 생생정보`, `생방송 투데이`
- 회차: `8572`, `8571`, `8568`, `8565`, `2564`, `2556`, `2553`, `4047`, `4042`, `4040`, `4037`, `4036`
- 후보 상호/키워드: `청도장`, `스타듀토마토`, `제일한우국밥`, `열대정글농장`, `산막이 세자매`, `금선정계곡`, `서인이네 찰옥수수`, `익선동`, `고려산 호랑이`

## 프로그램별 처리 상태

### 6시 내고향

과거 백필 3회차 조건은 이미 충족된 것으로 판단했다.

| 회차 | 방송일 | 발행 상태 | 대표 발행 글 |
| --- | --- | --- | --- |
| 8572회 | 2026-07-06 | published | `6si-naegohyang-cheorwon-direct-market-8572.md` |
| 8571회 | 2026-07-03 | published | `6si-naegohyang-paju-gangbyeol-myeonok-cold-noodle.md`, `6si-naegohyang-wanju-sangol-sanjang-valley.md`, `6si-naegohyang-goseong-wolpyeongri-corn.md` |
| 8568회 | 2026-06-30 | published | `6si-naegohyang-yeongju-geumseonjeong-valley.md` |
| 8565회 | 2026-06-25 | published | `6si-naegohyang-hadong-tropical-jungle-farm-mango-banana-8565.md`, `6si-naegohyang-goesan-sanmak-sejamae.md` |

중복 검사 결과:

- `src/content/posts/food/6si-naegohyang-goseong-seorin-corn.md`는 미추적 초안이지만, 이미 `src/content/posts/food/6si-naegohyang-goseong-wolpyeongri-corn.md`가 같은 방송·지역·품목·판매처로 발행되어 있어 신규 발행하지 않는다.
- `열대정글농장`, `산막이 세자매`, `금선정계곡`도 모두 발행되어 추가 생성 대상이 아니다.

### 2TV 생생정보

과거 백필 3회차 조건은 이미 충족된 것으로 판단했다.

| 회차 | 방송일 | 발행 상태 | 대표 발행 글 |
| --- | --- | --- | --- |
| 2564회 | 2026-07-07 | published | `2tv-live-info-haman-jeil-hanwoo-gukbap-2564.md`, `2tv-live-info-bangbae-carne-brasil-grill-2564.md`, `2tv-live-info-seongnam-manwol-jungsik-buffet-2564.md`, `2tv-live-info-daejeon-expo-aquarium-2564.md` |
| 2556회 | 2026-06-23 | published | `2tv-live-info-buan-310-bus-trip.md`, `2tv-live-info-daejeon-baekmagang-minmuljangeo.md`, `2tv-live-info-daegu-byeogu-palgongsan-haesintang.md` |
| 2553회 | 2026-06-17 | published | `2tv-live-info-cheongdo-market-luge-course-2553.md`, `2tv-live-info-gongju-stardew-tomato-2553.md` |

중복 검사 결과:

- Marketer 후보였던 `청도장 중심 청도 코스`, `스타듀토마토`, `제일한우국밥 함안점`은 모두 발행되어 신규 작성하지 않는다.
- `강주해바라기마을`은 기존 리서치에서 교차 프로그램 중복 위험으로 제외된 상태를 유지한다.

### 생방송 투데이

과거 백필 3회차 조건은 이미 충족된 것으로 판단했다.

| 회차 | 방송일 | 발행 상태 | 대표 발행 글 |
| --- | --- | --- | --- |
| 4047회 | 2026-07-09 | published | `saengbangsong-today-euljiro-balhae-gamjatang.md` |
| 4042회 | 2026-07-02 | published | `saengbangsong-today-yongdu-hanwoojeongyukso.md` |
| 4040회 | 2026-06-29/30 | published | `saengbangsong-today-ikseondong-mimine.md`, `saengbangsong-today-bupyeong-hwayangsik-lobster-gambas.md`, `saengbangsong-today-mukho-hotplace-course.md`, `saengbangsong-today-yeouido-8beon-daemuljip-bollak.md`, `saengbangsong-today-trend-24-doodleworkroom-justin.md` |
| 4037회 | 2026-06-25 | published | `saengbangsong-today-chuncheon-keungil-nakji-4037.md` |
| 4036회 | 2026-06-24 | published | `saengbangsong-today-hoegi-sambok-dakhanmari-4036.md` |

중복 검사 결과:

- Marketer 후보였던 익선동 4040회 잔여 주제는 이미 관련 글이 여러 건 발행되어 있다.
- `src/content/posts/food/saengbangsong-today-goryeosan-horangi-kodari-jjim.md`는 미추적 초안이지만 2026-08-05 방송분이라 이번 밤 과거 백필 범위에서 제외한다.

## 최종 판단

이번 실행의 상태는 `스킵 완료`다. 새 글을 발행하지 않은 이유는 작업 회피가 아니라, 현재 저장소 기준으로 프로그램별 과거 3회차 조건이 이미 충족되어 있고 남은 후보가 중복 또는 최신 방송 처리 범위였기 때문이다.

다음 밤 백필에서 추가 생산을 하려면 Marketer/Researcher가 기존 발행 회차보다 더 오래된 새 후보를 프로그램별로 다시 추려야 한다. 특히 `생방송 투데이`는 4040회 전후 회차가 이미 조밀하게 발행되어 있어, 새 후보 선정 전 회차·상호·코너명 충돌 검사가 먼저 필요하다.
