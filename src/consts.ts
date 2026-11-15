export const SITE_TITLE = '오늘방송 노트';
export const SITE_DESCRIPTION = 'TV에 나온 맛집, 지역 이야기, 건강 정보를 빠르게 확인하고 검증해 정리하는 방송 정보 블로그입니다.';
export const SITE_URL = 'https://tv.lovizu.com';
export const SITE_AUTHOR = 'lovizu';

// Google AdSense (account pub-1322828698634218, site lovizu.com covers tv.lovizu.com)
export const ADSENSE_CLIENT = 'ca-pub-1322828698634218';
export const AD_SLOTS = {
  postTopDisplay: '6838397081', // "tv 글 상단 디스플레이" — responsive display
  postInArticle: '3703987348', // "tv 글 본문 인아티클" — in-article fluid
  postMultiplex: '9736023163' // "tv 글 하단 멀티플렉스" — autorelaxed
} as const;

export const NAV_ITEMS = [
  { href: '/', label: '홈' },
  { href: '/programs/', label: '프로그램' },
  { href: '/categories/', label: '카테고리' },
  { href: '/near/', label: '내 주변' },
  { href: '/search/', label: '검색' }
];

export const CATEGORY_LABELS: Record<string, string> = {
  food: '방송맛집',
  local: '지역·여행',
  health: '건강정보',
  life: '생활정보'
};
