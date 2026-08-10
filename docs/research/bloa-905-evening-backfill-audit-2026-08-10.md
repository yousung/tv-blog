# BLOA-905 저녁 과거 백필 감사 결과

- 작성일: 2026-08-10
- 작성자: Blogger
- 대상 이슈: BLOA-905
- 범위: `6시 내고향`, `2TV 생생정보`, `생방송 투데이` 프로그램별 과거 2회차 백필 상태 확인

## 결론

이번 heartbeat에서는 신규 게시글을 만들지 않았다. 저장소 기준으로 저녁 과거 백필 대상이 되는 최근 과거 회차가 이미 `published` 상태로 반영되어 있었고, 남은 미추적 후보는 직접 중복이거나 최신 방송 처리 범위와 이미지·영업정보 리스크가 남은 상태였다.

- `6시 내고향`: 8595회, 8594회 과거 2회차가 이미 published 글로 커버됨.
- `2TV 생생정보`: 2586회, 2585회 과거 2회차가 이미 published 글로 커버됨.
- `생방송 투데이`: 기존 과거 후보 4057회, 4056회, 4055회가 published 글로 커버됨. 2026-08-05 `고려산 호랑이` 미추적 초안은 최신 방송 범위이면서 이미지·영업시간 리스크가 남아 신규 발행에서 제외함.

## recall 및 중복 검사

`para-memory-files` 규칙에 따라 유사 토픽 회상을 시도했으나 현재 실행 환경에 `qmd` 명령이 없어 실패했다. 대체 방식으로 다음 로컬 자료를 직접 검색했다.

- `src/content/posts`
- `docs/research`
- `docs/marketing`
- `src/pages/search-index.json.ts`
- `src/pages/sitemap.xml.ts`

확인 키워드:

- 프로그램명: `6시 내고향`, `2TV 생생정보`, `생방송 투데이`
- 회차: `8595`, `8594`, `2586`, `2585`, `4057`, `4056`, `4055`
- 상호·키워드: `대미농원`, `노지황토장어`, `예랑`, `종어연`, `귤의 정원 바령`, `영덕`, `의령메밀집`, `농원숯불왕갈비`, `단대전통시장`, `모터시티`, `왕차이루`, `광계`, `별마루농원`, `고려산 호랑이`

## 프로그램별 처리 상태

### 6시 내고향

| 회차 | 방송일 | 발행 상태 | 대표 발행 글 |
| --- | --- | --- | --- |
| 8595회 | 2026-08-06 | published | `6si-naegohyang-pyeongchang-daemi-dureup-8595.md`, `6si-naegohyang-gwangyang-noji-eel-8595.md`, `6si-naegohyang-hapcheon-yerang-strawberry-8595.md` |
| 8594회 | 2026-08-05 | published | `6si-naegohyang-gimje-jongeoyeon-jongeo-8594.md`, `6si-naegohyang-jeju-jocheon-green-tangerine-8594.md`, `6si-naegohyang-boryeong-mud-festival-trip-8594.md` |

중복 검사 결과: 신규 발행 없음. 두 회차 모두 검색 의도가 있는 세그먼트가 이미 발행되어 있고, 8595회 `팔도 배달맨`은 상호·장소·지도 정보가 부족해 기존 리서치에서 스킵 권장으로 분류됐다.

### 2TV 생생정보

| 회차 | 방송일 | 발행 상태 | 대표 발행 글 |
| --- | --- | --- | --- |
| 2586회 | 2026-08-06 | published | `2tv-live-info-geumcheon-uiryeong-memil-2586.md`, `2tv-live-info-yeongdeok-bus-sea-trip-2586.md` |
| 2585회 | 2026-08-05 | published | `2tv-live-info-incheon-nongwon-bulgogi-set-2585.md`, `2tv-live-info-seongnam-dandae-market-2585.md`, `2tv-live-info-yangju-retro-valley-trip-2585.md`, `2tv-live-info-suwon-daddy-childcare-kickboxing-2585.md`, `2tv-live-info-mountain-unicycle-leopard-muni-2585.md` |

중복 검사 결과: 신규 발행 없음. 처리 단위인 회차 기준으로 과거 2회차가 이미 충족되어 있고, 각 회차 안의 주요 맛집·지역·인물형 세그먼트도 published 상태다.

### 생방송 투데이

| 회차 | 방송일 | 발행 상태 | 대표 발행 글 |
| --- | --- | --- | --- |
| 4057회 | 2026-07-23 | published | `saengbangsong-today-itaewon-motorcity-detroit-pizza.md` |
| 4056회 | 2026-07-22 | published | `saengbangsong-today-bucheon-wangchairu-dosakmyeon.md` |
| 4055회 | 2026-07-21 | published | `saengbangsong-today-yeonnam-gwanggye-samgyebaekban.md` |

추가 확인:

- `saengbangsong-today-starmaru-hangul-peach.md`는 2026-08-05 방송분으로 이미 published 상태다.
- `saengbangsong-today-goryeosan-horangi-kodari-jjim.md`는 미추적 초안으로 존재하지만, 2026-08-05 방송분이며 기존 리서치에서 영업시간·휴무 충돌과 안전한 공식 이미지 부족 때문에 `draft 권장`으로 분류됐다. 이번 과거 백필 신규 발행 대상이 아니다.
- 2026-08-06 `옛한우 간월재점`은 이미 `saengbangsong-today-ulju-yethanwoo-ganwoljae.md`로 published 상태다.

중복 검사 결과: 신규 발행 없음. 기존 과거 후보 4057~4055회가 이미 발행되어 과거 2회차 조건을 충족한다.

## 최종 판단

이번 실행은 `스킵 완료`로 처리한다. 새 글을 만들지 않은 이유는 자료 부족이 아니라, 현재 저장소 기준으로 프로그램별 과거 2회차 조건이 이미 충족되어 있기 때문이다.

남은 리스크는 두 가지다.

- 현재 worktree에는 다른 작업에서 생긴 것으로 보이는 미추적 글·리서치 문서가 많다. 이번 감사에서는 건드리지 않았다.
- `qmd`가 없어 파일 기반 memory recall은 수행하지 못했고, 로컬 저장소 검색으로 대체했다.
