/** 브라우저에 노출해도 되는 네이버 지도 Client ID만 읽는다. Secret 키는 절대 여기서 읽지 않는다. */
export function getNaverClientKey(): string {
  return (
    process.env.NAVER_CLIENT_KEY ??
    process.env.PUBLIC_NAVER_CLIENT_KEY ??
    import.meta.env.NAVER_CLIENT_KEY ??
    import.meta.env.PUBLIC_NAVER_CLIENT_KEY ??
    ''
  );
}
