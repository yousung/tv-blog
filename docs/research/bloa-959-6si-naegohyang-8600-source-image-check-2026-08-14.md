# BLOA-959 6시 내고향 8600회 소스·이미지 확인

## 기준

- 프로그램: KBS 1TV 6시 내고향
- 방송일: 2026-08-13
- 회차: 8600회
- 공식 방송정보: https://iaudience.kbs.co.kr/broadcast/11347

## 세그먼트 목록

1. 메기랑 향어랑 순창에 삽니다! - 전북 순창
   - 문의처: 도깨비농수산
   - 전화: 010-2529-2019
   - 주소: 전북특별자치도 순창군 금과면 방계로 36-35
   - 지도: KBS 제공 네이버 지도 placeId 2018542013
   - 좌표: mapLat 35.3216442, mapLng 127.0613504
   - 교차 출처: 순창군 공식 블로그 재게시 웰로 문서
   - 발행 판단: published 가능

2. 팔도 배달맨, 잊지 말기로 해요 - 경기 양평
   - 공개 연락처 없음
   - 발행 판단: 독립 글 발행 보류. 인물/지역 스토리 확인 및 이미지 후보 추가 조사 필요.

3. 식재료 원정대, 떼려야 뗄 수 없는 식재료 - 강원 인제
   - 공개 연락처 없음
   - 발행 판단: 독립 글 발행 보류. 식재료 실체와 지역 출처 추가 조사 필요.

4. 청산에 살리라, 이 남자가 사는 법 - 충북 영동
   - 복숭아 구매 문의: 010-5269-9147
   - 1차 확인 시 주소 미공개
   - BLOA-962 Researcher 결과: KBS 공개 문의전화가 박가네농장 공식 사이트 상담문의 번호와 일치. 공식 주소는 충북 영동군 상촌면 상촌로 768.
   - 좌표: 비즈노 약도 HTML의 NaverMap center 36.1052485929643, 127.922962334851
   - 발행 판단: 영동 박가네농장 복숭아 상세 글 published 가능.

## 이미지 확인

- 이미지 후보 출처: 웰로 `순창군 유일의 메기 양식장 도깨비 농장`, 원출처 순창군 공식 블로그.
- 다운로드 후보: 0~21번 JPG.
- 제외:
  - 0번: 양식장 작업자 신체가 보임.
  - 2번: 인물 얼굴이 명확히 보임.
  - 10번, 11번, 21번: 인물 얼굴 또는 신체가 보임.
- 사용:
  - 1번: 도깨비농장 전경과 안내 표지판.
  - 9번: 메기 밀키트·가공 제품 단독 사진.
  - 20번: 도깨비농수산 간판과 양식장.
- 변환:
  - `/images/posts/6si-naegohyang-sunchang-dokkaebi-catfish-millkit-8600/hero.webp`
  - `/images/posts/6si-naegohyang-sunchang-dokkaebi-catfish-millkit-8600/products.webp`
  - `/images/posts/6si-naegohyang-sunchang-dokkaebi-catfish-millkit-8600/sign.webp`

## 영동 박가네농장 이미지 확인

- 이미지 후보:
  - 박가네농장 공식 홈페이지 과일 배너 `visual_01.jpg`: 사람 없음, 농장 공식 채널 이미지. 복숭아 단독 컷은 아니지만 농장 공식 홈페이지 대표 이미지로 사용 가능.
  - 박가네농장 공식 홈페이지 농지 배너 `visual_02.jpg`: 포도밭 이미지로 보여 영동 복숭아 글 대표 이미지로는 오인 가능성이 있어 제외.
  - 비즈노 약도·Daum Roadview `left_1200.jpg`: 사람 없음, 과수원 주변 컷. 위치 보조 이미지로 사용 가능.
  - 비즈노 약도·Daum Roadview `front_1200.jpg`, `right_1200.jpg`: 도로/건물 중심이라 본문 사용 제외.
- 변환:
  - `/images/posts/6si-naegohyang-yeongdong-parkfarm-peach-8600/hero.webp`
  - `/images/posts/6si-naegohyang-yeongdong-parkfarm-peach-8600/orchard-roadview.webp`

## 중복 확인

- 초기 작업 시 저장소 `src/content/posts`, `public`에서 `도깨비농수산`, `도깨비농장`, `순창 메기`, `향어`, `8600회`, `2026-08-13` 검색.
- 작업 중 원격 master 선행 커밋에서 같은 주제의 `6si-naegohyang-sunchang-dokkaebi-catfish-millkit-8600` 글이 추가된 것을 확인.
- 중복 발행을 피하기 위해 새 slug 글은 제거하고 기존 slug 글을 이미지·좌표·교차 출처 중심으로 보강.
- 영동 박가네농장 관련 기존 글은 저장소 검색에서 확인되지 않아 신규 글로 추가.
- 인접 회차 8599회(2026-08-12) 동해 경동식당, 울진 여행 글은 이미 master에 존재.

## 메모리 recall

- 지침상 qmd recall을 시도했으나 현재 실행 환경에서 `qmd` 명령을 찾을 수 없어 실패.
- 대체로 저장소 검색 기반 중복 확인을 수행.
