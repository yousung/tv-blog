export const SITE_TITLE = '오늘방송 노트';
export const SITE_DESCRIPTION = 'TV에 나온 맛집, 지역 이야기, 건강 정보를 빠르게 확인하고 검증해 정리하는 방송 정보 블로그입니다.';
export const SITE_URL = 'https://tv.lovizu.com';
export const SITE_AUTHOR = 'lovizu';

export const NAV_ITEMS = [
  { href: '/', label: '홈' },
  { href: '/programs/', label: '프로그램' },
  { href: '/categories/', label: '카테고리' },
  { href: '/search/', label: '검색' }
];

export const CATEGORY_LABELS: Record<string, string> = {
  food: '방송맛집',
  local: '지역·여행',
  health: '건강정보',
  life: '생활정보'
};
