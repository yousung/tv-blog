# 방송 프로그램별 공식 출처와 수집 체크리스트

- 작성일: 2026-06-16
- 작성자: Researcher
- 적용 범위: `tv.lovizu.com` 방송 맛집, 지역 정보, 생활/건강 정보 글의 1차 출처 수집
- 원칙: 방송 내용을 그대로 옮기지 않고 직접 요약하며, 상호/주소/영업시간/가격/휴무는 방송사 출처와 지도/업체 공식 채널을 교차 검증한다.

## 빠른 결론

- 맛집·지역 글은 `방송사 공식 회차/방송정보 -> 공식 클립/자막 -> 지도/업체 공식 채널 -> 기사` 순서로 확인한다.
- 건강·식품 효능 글은 방송 정보만으로 결론을 쓰지 않는다. 질병관리청 국가건강정보포털, 식품의약품안전처/식품안전나라, 보건복지부 등 공식기관으로 제한해 일반 정보와 주의문구만 작성한다.
- KBS, SBS, MBC, MBN은 프로그램 홈/다시보기/방송정보가 비교적 명확하다. TV CHOSUN 백반기행은 공개 검색 기준 공식 프로그램 홈 접근성이 낮아, TV CHOSUN 공식 YouTube/Naver TV/KakaoTV 클립을 우선 쓰되 식당 정보는 반드시 지도와 기사로 재검증한다.
- 방송사 영상·이미지·자막은 저작권 보호 콘텐츠다. 긴 인용, 캡처 다량 사용, 영상 썸네일 재사용, 대본식 전사는 금지한다.

## 프로그램별 수집 표

| 프로그램 | 공식/준공식 출처 | 수집 가능 시간 | 신뢰도 | 필수 확인 필드 | 주의사항 |
|---|---|---:|---|---|---|
| KBS `2TV 생생정보` | 공식 홈 `https://program.kbs.co.kr/2tv/culture/reallive/mobile/index.html`, KBS VOD 검색 `https://vod.kbs.co.kr/m/search.html?keyword=2TV+%EC%83%9D%EC%83%9D%EC%A0%95%EB%B3%B4`, KBS 교양 YouTube 재생목록 `https://www.youtube.com/playlist?list=PLjEfM9iTt3gyD_d8Wr2CPa3TGgvzTP6hB` | 당일 방송 후 클립/회차 정보 확인. KBS VOD는 방송 종료 3주 후 무료 VOD 안내가 노출될 수 있음. | 공식 홈/방송사 VOD: 높음, YouTube: 높음(공식 채널 확인 시) | 회차, 방송일, 코너명, 지역, 상호, 대표 메뉴, 주소, 가격, 휴무/영업시간, 전화번호, 지도 링크 | VOD 페이지에 저작권 및 무단 전재/재배포/AI 학습 금지 문구가 노출된다. 캡처는 최소화하고 출처를 명시한다. |
| SBS `생방송 투데이` | 공식 홈 `https://programs.sbs.co.kr/culture/today3/main`, SBS 다시보기 예시 `https://programs.sbs.co.kr/enter/today3/vod/54203/22000623352`, SBS Story YouTube 재생목록 `https://www.youtube.com/playlist?list=PLxpQhJmkUSyC5wtGg1e5cI_HBCLIgB-KK`, SBS TV맛집 `https://matstar.sbs.co.kr/program.html?programs=S01_V0000338038` | 평일 방송 후 공식 홈/다시보기/클립 확인. TV맛집은 식당 단서 보강용. | 공식 홈/다시보기: 높음, 공식 YouTube: 높음, TV맛집: 중간~높음(방송사 운영 페이지이나 지도 검증 필요) | 방송일, 회차, 코너명, 상호, 메뉴명, 지역, 주소, 가격, 운영 정보, 방송 소개 문구 | 클립 제목은 SEO 단서로만 사용하고, 본문은 직접 요약한다. 가격/휴무는 지도와 업체 채널로 재검증한다. |
| MBC `오늘N` | 공식 홈 `https://program.imbc.com/evening`, 방송정보 게시판 `https://program.imbc.com/BBS/evening?bbs_id=evening_info`, MBC VOD 예시 `https://playvod.imbc.com/vod/vodplay?broadcastid=1003106101612100000`, MBClife YouTube 재생목록 `https://www.youtube.com/playlist?list=PLV2IRmdiVsh15Q1DHNzdG3V034DiV82Dc` | 월~목 저녁 방송 후 방송정보 게시판과 VOD 확인. | 공식 홈/방송정보/VOD: 높음, 공식 YouTube: 높음 | 방송명 표기(`오늘N`/구 `생방송 오늘 저녁`), 회차, 방송일, 코너명, 상호, 지역, 주소, 메뉴, 가격, 영업시간 | 프로그램명이 변경/병기될 수 있어 slug와 frontmatter에는 방송 당시 표기를 확인한다. |
| SBS `생활의 달인` | 공식 홈 `https://programs.sbs.co.kr/culture/lifemaster/main`, 다시보기 예시 `https://programs.sbs.co.kr/culture/lifemaster/vod/55733/22000615128`, SBS Story YouTube 재생목록 `https://www.youtube.com/playlist?list=PLxpQhJmkUSyDgbFGk2d3P1pJHivnvpH8w`, SBS TV맛집 `https://matstar.sbs.co.kr/program.html?programs=S01_V0000305532` | 본방 후 공식 홈/다시보기/클립 확인. 장인·제조 공정 정보는 회차별 클립으로 보강. | 공식 홈/다시보기: 높음, 공식 YouTube: 높음, TV맛집: 중간~높음 | 달인명/상호, 분야, 지역, 주소, 대표 품목, 가격, 예약/택배 여부, 방송일 | 특정 기술·비법을 과장하지 않는다. 식품·건강 효능처럼 보이는 표현은 공식기관 출처 없이는 쓰지 않는다. |
| TV CHOSUN `식객 허영만의 백반기행` | TV CHOSUN YouTube 재생목록 `https://www.youtube.com/playlist?list=PLdL7USGieQC3EI1Of8ZR5klR3K2CPshZ-`, Naver TV `https://tv.naver.com/tvchosun.siggaek`, KakaoTV `https://tv.kakao.com/channel/3312685?act=channel` | 방송 후 공식 클립이 빠르게 올라오는 편. 공식 프로그램 홈은 공개 검색 기준 확인성이 낮아 클립 중심 수집. | 공식 채널 클립: 높음, 프로그램 홈 부재 정보: 단일 출처/검증 필요 | 회차, 방송일, 출연자, 지역, 음식명, 상호 단서, 지도 확인 주소, 가격/예약 여부 | 클립만으로 상호를 단정하지 않는다. 지도/업체 채널/지역 기사로 2차 확인 후 `확인됨` 처리한다. |
| MBN `생생 정보마당` | 공식 프로그램 페이지 `https://www.mbn.co.kr/pages/vod/programMain.php?progCode=752&uagent=m`, 모바일 홈 `https://m.mbn.co.kr/tv/752`, MBN YouTube 재생목록 `https://www.youtube.com/playlist?list=PL272srkmrzAGMHyNj_qRX7Z11eRl_VSGo` | 프로그램 페이지 기준 최신 회차가 2025-03-31로 확인됨. 신규 글 작성 전 현재 방송/종영 여부 재확인 필요. | 공식 페이지: 높음, 공식 YouTube: 높음, 현재성: 재확인 필요 | 회차, 방송일, 코너명, 출연업체 연락처 게시 여부, 상호, 주소, 메뉴/상품, 가격 | 2026-06-16 조회 기준 공식 페이지에 2025-03-31 회차가 최신으로 보여 현재성은 `단일 출처`로 표시한다. |
| MBN `알토란` | 공식 홈 `https://m.mbn.co.kr/tv/671`, 다시보기 `https://m.mbn.co.kr/tv_sub/671/4216`, 게시판/레시피 `https://m.mbn.co.kr/tv_sub/671/4224`, YouTube 채널 `https://www.youtube.com/channel/UCf3956PKvZ5H0Ul6vABDo4A` | 본방 후 레시피/클립/다시보기 확인. | 공식 홈/레시피: 높음, 공식 YouTube: 높음 | 회차, 방송일, 레시피명, 출연자/셰프, 재료, 조리 순서, 방송상 업체/시장명, 건강 표현 여부 | 레시피는 저작권 보호 대상일 수 있으므로 전체 조리법 복붙 금지. 재료/팁은 요약하고 출처 링크를 둔다. |
| 채널A `서민갑부` | 공식 페이지 `https://ichannela.com/program/detail/program_title_renew.do?cateCode=050105`, 클립 예시 `https://ichannela.com/program/clip/000000216091.do` | 공식 페이지에 `종영` 표기. 과거 회차/클립 기반 evergreen 글만 검토. | 공식 페이지: 높음, 현재성: 종영으로 제한 | 회차, 방송일, 인물/상호, 사업 분야, 지역, 주소, 매출 주장 출처, 현재 운영 여부 | 매출/성공담은 방송 당시 주장일 수 있다. 최신 사업자/지도/공식몰 확인 전 현재 수치처럼 쓰지 않는다. |

## 공통 수집 체크리스트

### 1. 방송사 출처

- `확인됨`: 방송사 공식 프로그램 홈, 공식 회차 페이지, 공식 방송정보 게시판, 방송사 운영 공식 YouTube/Naver TV/KakaoTV 채널에서 확인한 방송일·회차·코너명.
- `단일 출처`: 공식 클립 제목이나 게시글 하나에만 등장하는 상호/메뉴/지역.
- `검증 불가`: 클립 자막·블로그·커뮤니티만 있고 공식 회차/지도/업체 채널에서 확인되지 않는 상호.

수집 필드:

- 방송명, 회차, 방송일, 코너명
- 출처 URL, 조회일
- 클립 제목과 업로드 채널명
- 방송에서 다룬 핵심 정보: 지역, 상호, 메뉴/상품, 인물, 가격 단서
- 저작권 위험: 캡처 사용 여부, 자막 인용 여부, 영상 썸네일 재사용 여부

### 2. 지도/업체 검증

방송사 정보만으로 방문 정보를 확정하지 않는다.

- 네이버지도, 카카오맵, Google Maps 중 최소 2개 또는 지도 1개와 업체 공식 채널 1개로 교차 확인한다.
- 업체 공식 채널 우선순위: 공식 홈페이지, 네이버 스마트플레이스/예약, Instagram/Kakao Channel, 공지 게시판, 전화 확인 가능한 공개 번호.
- 가격·영업시간·휴무·브레이크타임·예약 여부는 변동 가능성이 높으므로 글 본문에 “방문 전 공식 채널/지도에서 재확인” 문구를 넣는다.

수집 필드:

- 정확한 상호명, 도로명 주소, 지번 주소
- 영업시간, 브레이크타임, 라스트오더, 정기휴무
- 대표 메뉴/가격, 포장/택배/예약 가능 여부
- 전화번호, 주차/대중교통, 지도 URL
- 정보 기준일: 지도/업체 채널 조회일

### 3. 기사/지역 보강 출처

- 기사 출처는 공식 방송사·지역지·지자체·관광공사 등 공개 신뢰 출처를 우선한다.
- 동일 상호가 여러 지역에 있으면 기사 제목의 지역명만으로 확정하지 않는다.
- 기사 날짜가 오래됐거나 방송일보다 앞서면 현재 운영 여부를 지도/업체 채널로 다시 확인한다.

### 4. 건강·의학·식품 효능 주의

YMYL 해당: 질병, 치료, 예방, 약품, 건강기능식품, 다이어트, 혈당/혈압, 면역, 암, 치매, 관절, 피부질환, 정신건강.

- 질병관리청 국가건강정보포털(`https://health.kdca.go.kr/`)은 의학전문가 검증 건강정보의 1차 확인 경로로 사용한다.
- 식품의약품안전처(`https://www.mfds.go.kr/`)와 식품안전나라(`https://www.foodsafetykorea.go.kr/`)는 건강기능식품, 부당 표시·광고, 기능성 표시 확인 경로로 사용한다.
- 보건복지부(`https://www.mohw.go.kr/`)와 국민건강보험(`https://www.nhis.or.kr/`)은 제도·검진·공공보건 정보 확인 경로로 사용한다.
- 방송 출연자의 경험담, 업체 홍보 문구, 클립 제목만으로 효능을 쓰지 않는다.

금지 표현:

- “치료된다”, “완치”, “예방 보장”, “효능 입증”, “부작용 없음”, “의사가 추천한 만병통치”, “암/치매/당뇨에 좋다” 같은 단정.

권장 문구:

- “방송에서 소개된 일반 정보이며 개인의 건강 상태에 따라 다를 수 있습니다.”
- “질병 진단·치료는 의료진과 상담해야 합니다.”
- “건강기능식품 여부와 기능성은 식품안전나라 또는 제품 표시사항에서 확인해야 합니다.”

## 콘텐츠 리스크 메모

| 리스크 | 판단 기준 | 처리 |
|---|---|---|
| 저작권 | 방송 대본, 긴 자막, 영상 캡처, 썸네일, 레시피 전문 | 직접 요약, 짧은 인용만 사용, 출처 링크, 캡처 최소화 |
| 현재성 | 가격·영업시간·휴무·방송 편성·종영 여부 | 조회일 표기, 방문 전 확인 문구, 오래된 정보는 `단일 출처` 처리 |
| 상호 오인 | 동명 업체, 프랜차이즈, 이전/폐업 | 지도 2개 또는 지도+업체 공식 채널 확인 전 확정 금지 |
| 건강 주장 | 질병/치료/예방/효능 | 공식기관 출처 없으면 삭제 또는 일반 주의문구로 축소 |
| 광고성 | 업체 홍보 문구, 매출·대박 표현 | 방송/기사의 주장으로 귀속하고 현재 사실처럼 쓰지 않음 |
| 브랜드 안전 | 도박, 성인, 불법, 무허가 의료·금융 상담 | 조사·작성 제외 |

## 출처 표

| URL | 출처명 | 발행일/조회일 | 신뢰 이유 | 라벨 |
|---|---|---|---|---|
| https://program.kbs.co.kr/2tv/culture/reallive/mobile/index.html | KBS `2TV 생생정보` 공식 홈 | 조회일 2026-06-16 | 방송사 공식 프로그램 페이지 | 확인됨 |
| https://vod.kbs.co.kr/m/search.html?keyword=2TV+%EC%83%9D%EC%83%9D%EC%A0%95%EB%B3%B4 | KBS VOD 검색 | 조회일 2026-06-16 | 방송사 공식 VOD/회차 검색 | 확인됨 |
| https://www.youtube.com/playlist?list=PLjEfM9iTt3gyD_d8Wr2CPa3TGgvzTP6hB | KBS 교양 YouTube `2TV 생생정보` 재생목록 | 조회일 2026-06-16 | 방송사 공식 채널 클립 | 확인됨 |
| https://programs.sbs.co.kr/culture/today3/main | SBS `생방송 투데이` 공식 홈 | 조회일 2026-06-16 | 방송사 공식 프로그램 페이지 | 확인됨 |
| https://programs.sbs.co.kr/enter/today3/vod/54203/22000623352 | SBS `생방송 투데이` 다시보기 예시 | 조회일 2026-06-16 | 방송사 공식 회차/VOD 페이지 | 확인됨 |
| https://www.youtube.com/playlist?list=PLxpQhJmkUSyC5wtGg1e5cI_HBCLIgB-KK | SBS Story `생방송 투데이` YouTube 재생목록 | 조회일 2026-06-16 | 방송사 공식 채널 클립 | 확인됨 |
| https://matstar.sbs.co.kr/program.html?programs=S01_V0000338038 | SBS TV맛집 `생방송 투데이` | 조회일 2026-06-16 | 방송사 관련 맛집 정보 페이지 | 단일 출처 |
| https://program.imbc.com/evening | MBC `오늘N` 공식 홈 | 조회일 2026-06-16 | 방송사 공식 프로그램 페이지 | 확인됨 |
| https://program.imbc.com/BBS/evening?bbs_id=evening_info | MBC `오늘N` 방송정보 게시판 | 조회일 2026-06-16 | 방송사 공식 방송정보 게시판 | 확인됨 |
| https://playvod.imbc.com/vod/vodplay?broadcastid=1003106101612100000 | MBC VOD 회차 예시 | 조회일 2026-06-16 | 방송사 공식 VOD 페이지 | 확인됨 |
| https://programs.sbs.co.kr/culture/lifemaster/main | SBS `생활의 달인` 공식 홈 | 조회일 2026-06-16 | 방송사 공식 프로그램 페이지 | 확인됨 |
| https://programs.sbs.co.kr/culture/lifemaster/vod/55733/22000615128 | SBS `생활의 달인` 다시보기 예시 | 조회일 2026-06-16 | 방송사 공식 회차/VOD 페이지 | 확인됨 |
| https://www.youtube.com/playlist?list=PLxpQhJmkUSyDgbFGk2d3P1pJHivnvpH8w | SBS Story `생활의 달인` YouTube 재생목록 | 조회일 2026-06-16 | 방송사 공식 채널 클립 | 확인됨 |
| https://matstar.sbs.co.kr/program.html?programs=S01_V0000305532 | SBS TV맛집 `생활의 달인` | 조회일 2026-06-16 | 방송사 관련 맛집 정보 페이지 | 단일 출처 |
| https://www.youtube.com/playlist?list=PLdL7USGieQC3EI1Of8ZR5klR3K2CPshZ- | TV CHOSUN `식객 허영만의 백반기행` YouTube 재생목록 | 조회일 2026-06-16 | 방송사 공식 채널 클립 | 확인됨 |
| https://tv.naver.com/tvchosun.siggaek | TV CHOSUN `식객 허영만의 백반기행` Naver TV | 조회일 2026-06-16 | 방송사 공식/준공식 클립 채널 | 확인됨 |
| https://tv.kakao.com/channel/3312685?act=channel | TV CHOSUN `식객 허영만의 백반기행` KakaoTV | 조회일 2026-06-16 | 공식 클립 채널로 보이는 방송사 채널. 개별 글마다 채널 소유 확인 필요 | 단일 출처 |
| https://www.mbn.co.kr/pages/vod/programMain.php?progCode=752&uagent=m | MBN `생생 정보마당` 공식 페이지 | 조회일 2026-06-16 | 방송사 공식 프로그램/VOD 페이지 | 확인됨 |
| https://m.mbn.co.kr/tv/752 | MBN `생생 정보마당` 모바일 홈 | 조회일 2026-06-16 | 방송사 공식 모바일 프로그램 페이지 | 확인됨 |
| https://www.youtube.com/playlist?list=PL272srkmrzAGMHyNj_qRX7Z11eRl_VSGo | MBN `생생 정보마당` YouTube 재생목록 | 조회일 2026-06-16 | 방송사 공식 채널 클립 | 확인됨 |
| https://m.mbn.co.kr/tv/671 | MBN `알토란` 공식 홈 | 조회일 2026-06-16 | 방송사 공식 프로그램 페이지 | 확인됨 |
| https://m.mbn.co.kr/tv_sub/671/4216 | MBN `알토란` 다시보기 | 조회일 2026-06-16 | 방송사 공식 다시보기 페이지 | 확인됨 |
| https://m.mbn.co.kr/tv_sub/671/4224 | MBN `알토란` 방송정보/레시피 게시판 | 조회일 2026-06-16 | 방송사 공식 레시피/출연자 정보 경로 | 확인됨 |
| https://www.youtube.com/channel/UCf3956PKvZ5H0Ul6vABDo4A | MBN `알토란 - 집밥 레시피` YouTube | 조회일 2026-06-16 | 공식 채널 여부를 채널명/링크로 확인 후 사용 | 단일 출처 |
| https://ichannela.com/program/detail/program_title_renew.do?cateCode=050105 | 채널A `서민갑부` 공식 페이지 | 조회일 2026-06-16 | 방송사 공식 프로그램 페이지. 종영 표기 확인 | 확인됨 |
| https://ichannela.com/program/clip/000000216091.do | 채널A `서민갑부` 클립 예시 | 조회일 2026-06-16 | 방송사 공식 클립 페이지 | 확인됨 |
| https://health.kdca.go.kr/ | 질병관리청 국가건강정보포털 | 조회일 2026-06-16 | 대한민국 공식 전자정부 누리집, 의학전문가 검증 건강정보 경로 | 확인됨 |
| https://www.mfds.go.kr/brd/m_629/view.do?seq=18 | 식품의약품안전처 허위·과대광고 안내 | 조회일 2026-06-16 | 식품·건강기능식품 표시/광고 주무기관 안내 | 확인됨 |
| https://www.foodsafetykorea.go.kr/portal/board/board.do?ctgType=CTG_TYPE01&ctgryno=2255&menu_grp=MENU_NEW01&menu_no=4838 | 식품안전나라 식품 등 부당한 표시·광고 | 조회일 2026-06-16 | 식품 표시·광고 규정 확인 경로 | 확인됨 |
| https://www.mohw.go.kr/ | 보건복지부 공식 홈 | 조회일 2026-06-16 | 보건복지 정책·공공보건 공식 출처 | 확인됨 |
| https://www.nhis.or.kr/nhis/index.do | 국민건강보험 공식 홈 | 조회일 2026-06-16 | 건강검진·건강보험 공식 정보 경로 | 확인됨 |

## Blogger에게 넘길 때 권장 메모 형식

```md
### 리서치 상태

- 확인됨:
  - 방송명/회차/방송일:
  - 코너명:
  - 상호/주소:
  - 지도/업체 공식 채널:
- 단일 출처:
  - 가격:
  - 영업시간/휴무:
- 검증 불가:
  - 방송 클립에는 있으나 지도에서 확인되지 않은 상호:
- YMYL 여부:
  - 해당/비해당
  - 해당 시 공식기관 출처:
- 저작권 주의:
  - 캡처 사용 여부:
  - 직접 인용 문구:
- 방문 전 확인 문구 필요 여부:
  - 필요/불필요
```
