# BLOA-1030 저녁 과거 백필 처리 결과

- 작성일: `2026-08-16`
- 작성자: Blogger
- 대상 이슈: `BLOA-1030`
- 범위: `6시 내고향`, `2TV 생생정보`, `생방송 투데이` 프로그램별 과거 2회차

## 결론

이번 저녁 과거 백필에서는 이미 원고와 출처가 갖춰져 있었으나 `draft`로 남아 있던 과거 회차 글 8건을 `published`로 전환했다. 전체 draft 일괄 복구는 하지 않았고, 이번 이슈 범위에 해당하는 회차와 주제만 선별했다.

- 신규 파일 작성: 없음
- 기존 업데이트: 8건 published 전환
- 스킵/보류: `생방송 투데이 4071회`는 선행 리서치상 상호·주소 공식 매칭이 부족해 스킵, `4070회 대천해수욕장`은 이미 published

## 현재 이슈 목적과 독자 의도

이 이슈의 목적은 최신 방송을 다시 따라잡는 것이 아니라, 최신 방송을 제외한 직전 과거 회차에서 검색 수요가 남은 글을 발행 상태로 채우는 것이다. 독자는 프로그램명, 회차, 지역, 상호, 메뉴를 함께 검색해 방송에 나온 곳의 정확한 위치와 주문·방문 전 확인할 조건을 알고 싶어 한다. 이번 처리에서는 새 글을 억지로 늘리기보다, 공식 방송정보와 기존 리서치가 이미 받쳐 주는 draft 글을 발행 상태로 전환하는 것이 가장 안전했다.

## recall 및 중복 검사

`para-memory-files` 규칙에 따라 `qmd` 기반 유사 토픽 회상을 시도했으나, 현재 실행 환경에는 `qmd` 명령이 없어 실패했다. 대체로 아래 자료를 직접 검색했다.

- `$AGENT_HOME/memory`
- `src/content/posts`
- `docs/research`
- `docs/marketing`
- `dist/search-index.json`
- `dist/sitemap.xml`

확인 키워드:

- 프로그램명: `6시 내고향`, `2TV 생생정보`, `생방송 투데이`
- 회차: `8600`, `8599`, `2591`, `2590`, `4072`, `4071`, `4070`
- 상호·장소·소재: `도깨비농수산`, `박가네농장`, `경동식당`, `울진 여행`, `플러스고기`, `백범 김구`, `화평동세숫대야냉면거리`, `달궁휴게소식당`, `대천해수욕장`, `다슬기 가족`, `여성호르몬`

## 프로그램별 처리 상태

### 6시 내고향

최신 방송성 회차인 `8601회`는 이번 저녁 과거 백필에서 제외하고, 과거 2회차인 `8600회`, `8599회`를 확인했다.

| 회차 | 방송일 | 처리 | 글 |
| --- | --- | --- | --- |
| 8600회 | 2026-08-13 | published 전환 | `src/content/posts/food/6si-naegohyang-sunchang-dokkaebi-catfish-millkit-8600.md` |
| 8600회 | 2026-08-13 | published 전환 | `src/content/posts/food/6si-naegohyang-yeongdong-parkfarm-peach-8600.md` |
| 8599회 | 2026-08-12 | published 전환 | `src/content/posts/food/6si-naegohyang-donghae-gyeongdong-sikdang-8599.md` |
| 8599회 | 2026-08-12 | published 전환 | `src/content/posts/local/6si-naegohyang-uljin-summer-trip-8599.md` |

중복 검사 결과: 신규 중복 없음. 같은 회차 안의 별도 세그먼트로 검색 의도가 다르다.

### 2TV 생생정보

최신 방송성 회차인 `2592회`는 제외하고, 과거 2회차인 `2591회`, `2590회`를 확인했다.

| 회차 | 방송일 | 처리 | 글 |
| --- | --- | --- | --- |
| 2591회 | 2026-08-13 | published 전환 | `src/content/posts/food/2tv-live-info-busan-plusgogi-unlimited-2591.md` |
| 2591회 | 2026-08-13 | published 전환 | `src/content/posts/local/2tv-live-info-kimkoo-seoul-history-trip-2591.md` |
| 2591회 | 2026-08-13 | published 전환 | `src/content/posts/local/2tv-live-info-hwapyeongdong-naengmyeon-street-2591.md` |
| 2590회 | 2026-08-12 | published 전환 | `src/content/posts/food/2tv-live-info-namwon-dalgung-hukdwaeji-sanche-2590.md` |

중복 검사 결과: 신규 중복 없음. 2591회는 음식·역사 여행·냉면거리로 의도가 나뉘며, 2590회 달궁휴게소식당은 별도 맛집 검색 의도다.

### 생방송 투데이

| 회차 | 방송일 | 처리 | 근거 |
| --- | --- | --- | --- |
| 4071회 | 2026-08-12 | 스킵 | `docs/research/bloa-951-saengbangsong-today-4071-verification.md` 기준 식당 실명·주소 공식 매칭 부족, 건강 코너는 YMYL 보강 필요 |
| 4070회 | 2026-08-11 | 기존 published 유지 | `src/content/posts/local/saengbangsong-today-daecheon-beach-4070.md` |

`4072회`는 선행 최신 루틴에서 공식 최신 회차 ID와 세부 메타를 안정적으로 확인하지 못한 상태였고, 이번 작업에서도 발행 가능한 실상호·장소 정보를 고정하지 못했다. 따라서 추정 글을 만들지 않았다.

## 이미지 판단

이번에 published 전환한 글들은 관련 실제 이미지가 충분히 확보되지 않아 방송 프로그램 정보 SVG를 대표 이미지로 쓰는 기존 원고 상태를 유지했다. 사람 식별 가능 이미지나 권리 조건이 불명확한 플랫폼 이미지를 새로 가져오지 않았다.

## 검증 전제

- 콘텐츠 본문에는 방송정보, 방문 전 확인 사항, FAQ, 출처 섹션이 포함되어 있다.
- `date`와 `broadcastDate`는 방송일 기준을 유지했다.
- `updatedDate`는 이번 전환일인 `2026-08-16`으로 맞췄다.
- 전체 draft 일괄 변경은 하지 않았다.

## 최종 판단

중복 검사 결과: `신규 0건 / 기존 업데이트 8건 / 생방송 투데이 4071·4072 스킵 / 생방송 투데이 4070 기존 published 유지`.

이번 이슈 범위에서는 기존 publishable 원고를 발행 상태로 전환하는 것이 가장 정확한 백필 처리다. 이후 남은 과거 백필은 더 오래된 회차 중 공식 상호·주소·지도·이미지 조건이 갖춰진 후보를 Researcher가 새로 제시해야 한다.
