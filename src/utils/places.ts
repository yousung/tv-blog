import type { CollectionEntry } from 'astro:content';
import { CATEGORY_LABELS } from '../consts';
import { hasCoordinates } from './geo';

type Post = CollectionEntry<'posts'>;

const PROVINCE_ALIASES: Record<string, string> = {
  경기도: '경기',
  강원특별자치도: '강원',
  강원도: '강원',
  전북특별자치도: '전북',
  전라북도: '전북',
  전라남도: '전남',
  경상북도: '경북',
  경상남도: '경남',
  충청북도: '충북',
  충청남도: '충남',
  인천광역시: '인천',
  광주광역시: '광주',
  전남광주: '광주',
  부산광역시: '부산',
  대구광역시: '대구',
  대전광역시: '대전',
  울산광역시: '울산',
  서울특별시: '서울',
  세종특별자치시: '세종',
  제주특별자치도: '제주'
};

/** 시·도 표시 순서와 지역 페이지 URL(/near/{slug}/). */
export const PROVINCES = [
  { name: '서울', slug: 'seoul' },
  { name: '인천', slug: 'incheon' },
  { name: '경기', slug: 'gyeonggi' },
  { name: '강원', slug: 'gangwon' },
  { name: '충북', slug: 'chungbuk' },
  { name: '충남', slug: 'chungnam' },
  { name: '대전', slug: 'daejeon' },
  { name: '세종', slug: 'sejong' },
  { name: '전북', slug: 'jeonbuk' },
  { name: '전남', slug: 'jeonnam' },
  { name: '광주', slug: 'gwangju' },
  { name: '경북', slug: 'gyeongbuk' },
  { name: '경남', slug: 'gyeongnam' },
  { name: '대구', slug: 'daegu' },
  { name: '울산', slug: 'ulsan' },
  { name: '부산', slug: 'busan' },
  { name: '제주', slug: 'jeju' }
] as const;

export interface Place {
  slug: string;
  title: string;
  placeName: string;
  region: string;
  address: string;
  program: string;
  category: string;
  image: string;
  lat: number;
  lng: number;
  province: string;
  areaKey: string;
}

export function provinceOf(region: string | undefined): string {
  const first = (region ?? '').trim().split(/\s+/)[0] ?? '';
  return PROVINCE_ALIASES[first] ?? first ?? '기타';
}

export function provinceSlug(province: string): string | undefined {
  return PROVINCES.find((p) => p.name === province)?.slug;
}

const order = (province: string) => {
  const i = PROVINCES.findIndex((p) => p.name === province);
  return i === -1 ? 99 : i;
};

/** 좌표가 있는 글을 지도·목록용 장소로 바꾸고 시·도 > 시·군·구 순으로 정렬한다. */
export function buildPlaces(posts: Post[]): Place[] {
  return posts
    .filter(hasCoordinates)
    .map((post) => {
      const district = (post.data.region ?? '').trim().split(/\s+/)[1] ?? '';
      const province = provinceOf(post.data.region) || '기타';
      return {
        slug: post.data.slug,
        title: post.data.title,
        placeName: post.data.placeName ?? post.data.title,
        region: post.data.region ?? '',
        address: post.data.address ?? '',
        program: post.data.program,
        category: CATEGORY_LABELS[post.data.category],
        image: post.data.image ?? '',
        lat: post.data.mapLat as number,
        lng: post.data.mapLng as number,
        province,
        areaKey: district ? `${province} ${district}` : province
      };
    })
    .sort((a, b) => order(a.province) - order(b.province) || a.areaKey.localeCompare(b.areaKey, 'ko'));
}

/** 이보다 적은 지역 페이지는 내용이 얇아 검색 노출(noindex·사이트맵)에서 뺀다. */
export const MIN_INDEXED = 3;

/** 시·도별 장소 수 (지역 페이지 링크용, 등록 순서 유지). */
export function provinceCounts(places: Place[]) {
  return PROVINCES.map((p) => ({ ...p, count: places.filter((place) => place.province === p.name).length })).filter(
    (p) => p.count > 0
  );
}
