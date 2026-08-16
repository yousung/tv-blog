# BLOA-1031 밤 과거 백필 처리 결과

- 작성일: `2026-08-16`
- 작성자: Blogger
- 대상 이슈: `BLOA-1031`
- 범위: `6시 내고향`, `2TV 생생정보`, `생방송 투데이` 프로그램별 과거 3회차

## 결론

이번 밤 과거 백필에서는 이미 원고와 출처가 갖춰져 있었지만 `draft`로 남아 있던 과거 회차 글 13건을 `published`로 전환했다. 최신 방송은 처리하지 않았고, 저녁 루틴에서 처리한 `6시 내고향 8600·8599회`, `2TV 생생정보 2591·2590회`, `생방송 투데이 4070회`는 신규 작업 대상으로 삼지 않았다.

- 신규 파일 작성: 없음
- 기존 업데이트: 13건 published 전환
- 스킵: `6시 내고향 8598회` 나주 원황배·김제 호풍미는 선행 리서치가 `draft 권장`으로 둔 상태라 발행하지 않음

## 현재 이슈 목적과 독자 의도

이 이슈의 목적은 최신 회차가 아니라 과거 방송분 중 검색 수요가 남아 있는 글을 중복 없이 채우는 것이다. 독자는 프로그램명, 회차, 지역, 상호, 메뉴나 특산물명을 함께 검색해 방송에 나온 곳의 위치와 주문·방문 전 확인 사항을 알고 싶어 한다. 이번 처리에서는 새 추정 글을 만들기보다, 공식 방송정보와 지도·방문 전 안내가 이미 반영된 완성형 초안을 발행 상태로 전환하는 것이 가장 안전했다.

## recall 및 중복 검사

`para-memory-files` 규칙에 따라 `qmd` 기반 유사 토픽 회상을 시도했으나, 현재 실행 환경에는 `qmd` 명령이 없어 실행할 수 없었다. 대체로 아래 자료를 직접 검색했다.

- `src/content/posts`
- `docs/research`
- `docs/marketing`
- `dist/search-index.json`
- `dist/sitemap.xml`

확인 키워드:

- 프로그램명: `6시 내고향`, `2TV 생생정보`, `생방송 투데이`
- 회차: `8598`, `8597`, `8595`, `2589`, `2588`, `2586`, `4057`, `4056`, `4055`
- 상호·소재: `서정열멸치`, `홍성 직거래장터`, `노지황토장어`, `대미농원`, `예랑`, `해운대바다김밥`, `청자횟집`, `명품전복궁`, `화산애빵긋`, `의령메밀집`, `영덕 바다 여행`, `모터시티`, `왕차이루`, `광계`

## 프로그램별 처리 상태

### 6시 내고향

저녁 루틴에서 이미 처리한 `8600회`, `8599회`는 제외하고, 과거 3회차 범위로 `8598회`, `8597회`, `8595회`를 확인했다.

| 회차 | 방송일 | 처리 | 글 |
| --- | --- | --- | --- |
| 8598회 | 2026-08-11 | 스킵 | 나주 원황배·김제 호풍미는 판매처·문의처가 확정되지 않아 draft 유지 |
| 8597회 | 2026-08-10 | published 전환 | `src/content/posts/food/6si-naegohyang-jindo-seojeongyeol-anchovy-8597.md` |
| 8597회 | 2026-08-10 | published 전환 | `src/content/posts/local/6si-naegohyang-hongseong-direct-market-8597.md` |
| 8595회 | 2026-08-06 | published 전환 | `src/content/posts/food/6si-naegohyang-gwangyang-noji-eel-8595.md` |
| 8595회 | 2026-08-06 | published 전환 | `src/content/posts/food/6si-naegohyang-pyeongchang-daemi-dureup-8595.md` |
| 8595회 | 2026-08-06 | published 전환 | `src/content/posts/food/6si-naegohyang-hapcheon-yerang-strawberry-8595.md` |

중복 검사 결과: `8597회`, `8595회`는 같은 회차 안에서도 장소·주문 의도가 다른 별도 세그먼트라 신규 중복이 아니다. `8598회`는 상호·주소·문의처가 닫히지 않은 소재가 있어 발행하지 않았다.

### 2TV 생생정보

저녁 루틴에서 처리한 `2591회`, `2590회`는 제외하고, 과거 3회차 범위로 `2589회`, `2588회`, `2586회`를 확인했다.

| 회차 | 방송일 | 처리 | 글 |
| --- | --- | --- | --- |
| 2589회 | 2026-08-11 | 기존 published 유지 | `src/content/posts/food/2tv-live-info-haeundae-bada-gimbap-2589.md` |
| 2588회 | 2026-08-10 | published 전환 | `src/content/posts/food/2tv-live-info-mokpo-cheongja-min-eo-2588.md` |
| 2588회 | 2026-08-10 | published 전환 | `src/content/posts/food/2tv-live-info-wando-myeongpum-jeonbokgung-2588.md` |
| 2588회 | 2026-08-10 | published 전환 | `src/content/posts/food/2tv-live-info-wanju-hwasanae-bbanggeut-2588.md` |
| 2586회 | 2026-08-06 | published 전환 | `src/content/posts/food/2tv-live-info-geumcheon-uiryeong-memil-2586.md` |
| 2586회 | 2026-08-06 | published 전환 | `src/content/posts/local/2tv-live-info-yeongdeok-bus-sea-trip-2586.md` |

중복 검사 결과: `2589회` 해운대바다김밥은 이미 published라 유지했다. `2588회`는 민어·전복·시골빵집으로 검색 의도가 나뉘고, `2586회`는 메밀 맛집과 영덕 여행형 글이라 직접 중복이 아니다.

### 생방송 투데이

선행 리서치에서 `4071회`, `4069회`는 상호·주소 직접 매칭이 부족했고 `4070회`는 이미 발행됐다. 이번 밤 백필에서는 더 오래된 발행 가능 회차인 `4057회`, `4056회`, `4055회`를 처리했다.

| 회차 | 방송일 | 처리 | 글 |
| --- | --- | --- | --- |
| 4057회 | 2026-07-23 | published 전환 | `src/content/posts/food/saengbangsong-today-itaewon-motorcity-detroit-pizza.md` |
| 4056회 | 2026-07-22 | published 전환 | `src/content/posts/food/saengbangsong-today-bucheon-wangchairu-dosakmyeon.md` |
| 4055회 | 2026-07-21 | published 전환 | `src/content/posts/food/saengbangsong-today-yeonnam-gwanggye-samgyebaekban.md` |

중복 검사 결과: 세 글 모두 회차·상호·slug가 독립적이고, 기존에 published 상태로 남은 직접 중복 글은 없었다.

## 이미지 판단

이번에 published 전환한 글들은 관련 실제 이미지 재배포 권리를 확정하지 못한 경우 방송 프로그램 정보 SVG를 대표 이미지로 유지했다. 사람 식별 가능 이미지나 권리 조건이 불명확한 플랫폼 이미지를 새로 가져오지 않았다.

## 최종 판단

중복 검사 결과: `신규 0건 / 기존 업데이트 13건 / 기존 published 유지 1건 / 스킵 1회차`.

이번 이슈 범위에서는 검증 완료 초안을 발행 상태로 전환하는 것이 가장 정확한 백필 처리다. 남은 과거 백필은 `6시 내고향 8598회`처럼 소재는 있으나 상호·주소·문의처가 확정되지 않은 회차를 억지로 발행하지 않고, Researcher가 공식 출처를 더 보강한 뒤 재검토하는 편이 맞다.
