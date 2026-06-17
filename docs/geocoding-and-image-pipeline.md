# 방송 글 좌표 지오코딩 + 대표 이미지 파이프라인

맛집(`food`)과 지역(`local`) 글은 `address`가 확인되면 `mapLat`/`mapLng`를 채워 네이버 지도 핀을 활성화하고, 방송사 로고가 아닌 실제 장소·음식 대표 이미지를 사용한다.

## 좌표 지오코딩

1. 글 frontmatter에 `category`, `slug`, `placeName`, `address`를 먼저 확정한다.
2. 서버/로컬 환경에 지오코딩 키를 하나 이상 설정한다.
   - 네이버: `NAVER_GEOCODE_CLIENT_ID`, `NAVER_GEOCODE_CLIENT_SECRET`
   - 네이버 클라우드 표준명: `NCP_APIGW_API_KEY_ID`, `NCP_APIGW_API_KEY`
   - 카카오: `KAKAO_REST_API_KEY`
   - VWorld: `VWORLD_API_KEY`
3. dry-run으로 결과를 확인한다.

```bash
npm run geocode:posts -- --slug saengbangsong-today-samcheong-nunnamujip-tteokgalbi
```

4. 좌표가 대상 주소와 맞으면 `--write`로 frontmatter를 갱신한다.

```bash
npm run geocode:posts -- --write --slug saengbangsong-today-samcheong-nunnamujip-tteokgalbi
```

`--slug`를 생략하면 `food`/`local` 글 중 `address`는 있지만 `mapLat`/`mapLng`가 없는 글만 처리한다. 이미 좌표가 있는 글을 다시 계산하려면 `--force`를 함께 쓴다.

## 대표 이미지 수집

이미지 우선순위는 다음 순서다.

1. 업체 공식 홈페이지, 공식 블로그, 공식 SNS, 예약/지도에 등록된 음식·장소 사진
2. 지자체·관광공사·방송사 공식 클립에서 사용 조건을 확인한 장소 장면
3. 사용 허가를 받은 직접 촬영 또는 제휴 제공 이미지
4. 방송 캡처는 장면 설명 보조 용도로만 최소 사용

사람 얼굴·몸·손이 나온 이미지는 처음부터 제외한다. 모자이크는 최후 보정 수단이며, 애매하면 음식·외관·간판·메뉴판·풍경 컷으로 교체한다.

## 파일 배치와 frontmatter

대표 이미지는 글 slug 기준으로 둔다.

```text
public/images/posts/{slug}/hero.jpg
```

frontmatter에는 다음을 넣는다.

```yaml
image: "/images/posts/{slug}/hero.jpg"
imageAlt: "상호명 대표 메뉴 또는 장소를 설명하는 실제 사진"
```

## 감사 스크립트

발행 전 다음 명령으로 `food`/`local` published 글의 좌표와 대표 이미지를 점검한다.

```bash
npm run audit:post-assets
```

이 감사는 다음을 실패로 본다.

- 발행된 `food`/`local` 글에 `image` 또는 `imageAlt`가 없음
- 대표 이미지가 `/images/broadcast/` 방송사 마크 폴백임
- `/public` 아래 대표 이미지 파일이 없음

`address`는 있지만 좌표가 없는 경우는 경고로 출력한다. 키가 있는 환경에서 `npm run geocode:posts -- --write`로 보강한다.

## 이번 이슈의 우선 대상

다음 slug가 콘텐츠에 추가되면 먼저 dry-run 후 `--write`로 좌표를 채운다.

- `saengbangsong-today-samcheong-nunnamujip-tteokgalbi` - 서울 종로구 삼청로 136-1
- `saengbangsong-today-samcheong-bukchon-makguksu` - 서울 종로구 삼청로 141
- `saengbangsong-today-samcheong-bongtak-bbq-jjukkumi` - 서울 종로구 삼청로 104-3
- `2tv-live-info-incheon-ilmi-hwapyeong-naengmyeon` - 인천 동구 화평로 18
