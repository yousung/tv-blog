# BLOA-960 새벽 최신 방송 루틴 처리 로그

- 작성일: 2026-08-14
- 작성자: Blogger
- 대상 방송일: 2026-08-13

## 요약

전날 실제 방영 여부를 공식 자료 중심으로 확인했다. `qmd`가 실행 환경에 없어 `para-memory-files` recall은 `$AGENT_HOME/memory`와 저장소 검색으로 대체했다.

- KBS 시청자상담실 2026년 8월 13일 방송정보에서 `6시 내고향 8600회`, `2TV 생생정보 2591회`, `한국인의 밥상 766회` 방영 및 세그먼트 확인.
- MBC 공식 VOD에서 `오늘N 2777회` 2026-08-13 방영 확인. 단, 공식 VOD 본문에는 하남 반찬가게·홍천 캠핑장·여수 정원·담양 고기뷔페의 상호와 주소가 없어 Blogger 단독 상호형 발행은 제외.
- SBS `생방송 투데이`는 공식 최신 회차 ID를 이번 heartbeat 안에서 확인하지 못했다. 단순 증가 URL이 SBS골프 VOD로 연결되어 추가 리서치가 필요하다.
- 2026-08-13 기준 `생활의 달인`, `생로병사의 비밀`, `알토란`은 전날 목요일 실제 방영 대상이 아닌 것으로 판단했다. `한국인의 밥상`은 목요일 방영 확인으로 처리했다.

## 중복 검사

확인 범위:

- `$AGENT_HOME/memory`
- `src/content/posts`
- `docs/research`
- `docs/marketing`
- `dist/search-index.json`
- `dist/sitemap.xml`

검색 키워드:

- `8600`, `2591`, `2777`, `766`, `4072`
- `도깨비농수산`, `플러스고기`, `화평동세숫대야냉면거리`, `백범김구기념관`, `덕성호수산`, `신안복분자장식품`, `산청물고은양식장`

직접 중복 글은 확인되지 않아 신규 발행으로 처리했다.

## 신규 발행 글

| 프로그램 | 회차 | 결과 | 파일 |
| --- | --- | --- | --- |
| 6시 내고향 | 8600회 | 신규 | `src/content/posts/food/6si-naegohyang-sunchang-dokkaebi-catfish-millkit-8600.md` |
| 2TV 생생정보 | 2591회 | 신규 | `src/content/posts/food/2tv-live-info-busan-plusgogi-unlimited-2591.md` |
| 2TV 생생정보 | 2591회 | 신규 | `src/content/posts/local/2tv-live-info-kimkoo-seoul-history-trip-2591.md` |
| 2TV 생생정보 | 2591회 | 신규 | `src/content/posts/local/2tv-live-info-hwapyeongdong-naengmyeon-street-2591.md` |
| 한국인의 밥상 | 766회 | 신규 | `src/content/posts/food/korean-table-summer-seasonal-food-766.md` |

## BLOA-966 2TV 생생정보 보강

- `qmd` 명령이 현재 실행환경에 없어 동일·유사 토픽 memory recall은 실패했다. 저장소 `src/content/posts`, `docs/research`, `docs/marketing` 검색으로 `2591`, `플러스고기`, `화평동세숫대야냉면거리`, `백범김구기념관`, `경교장`, `영천시장` 중복을 대체 확인했다.
- 2TV 생생정보 2591회 글 3개에는 주소 기반 `mapAddress`, `mapPlaceName`, `mapLat`, `mapLng`를 추가했다.
- 좌표는 공개 지오코딩(OpenStreetMap Nominatim)으로 주소 단위 확인했다. `플러스고기`는 부산 중구 광복중앙로 21 도로 좌표, `백범김구기념관`은 시설 좌표, `화평동세숫대야냉면거리`는 화평로 24-2 주변 도로 좌표를 사용했다.
- 실제 대상 사진은 이번 실행에서 별도 사용 허가 이미지나 사람 없는 공식 이미지까지 확보하지 못했다. 기존 사이트 공통 방송정보 SVG를 대표 이미지로 두되, 후속 이미지 확보 시 음식·장소 사진으로 교체하는 것이 좋다.

## 스킵 및 보류

- `6시 내고향 8600회` 팔도 배달맨 경기 양평, 식재료 원정대 강원 인제: KBS 공식 정보가 `공개된 연락처가 없습니다` 수준이라 독립 검색형 글로 확정하기 어렵다.
- `6시 내고향 8600회` 청산에 살리라 충북 영동 복숭아: 전화번호는 있으나 상호·주소가 없어 판매처형 글로 만들지 않았다.
- `2TV 생생정보 2591회` 쌍계사·섬진레져스쿨 숙소/래프팅: 여행형 가치는 있으나 템플스테이와 래프팅을 묶는 코스 글은 운영시간·예약·이미지 보강이 필요해 이번에는 제외.
- `2TV 생생정보 2591회` 비눗방울 아티스트: 인물·체험 장소 혼합 소재라 검색 의도와 발행 안정성이 낮아 제외.
- `오늘N 2777회`: 공식 VOD로 방영과 주제는 확인했으나 세부 상호·주소가 공식 본문에 없어 보류.
- `생방송 투데이`: 공식 최신 회차 ID 및 2026-08-13 회차 메타를 확인하지 못해 보류.

## 출처

- KBS 시청자상담실 2026년 8월 13일 방송정보: https://iaudience.kbs.co.kr/broadcast/11347
- MBC 오늘N 2777회 공식 VOD: https://playvod.imbc.com/Vod/VodPlay?broadcastId=1003106102784100000
