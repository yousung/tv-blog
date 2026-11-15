import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'posts'>;

export interface GeoPoint {
  lat: number;
  lng: number;
}

export function hasCoordinates(post: Post): boolean {
  const { mapLat, mapLng } = post.data;
  return typeof mapLat === 'number' && Number.isFinite(mapLat) && typeof mapLng === 'number' && Number.isFinite(mapLng);
}

export function distanceKm(a: GeoPoint, b: GeoPoint): number {
  const R = 6371;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

export function formatDistance(km: number): string {
  if (km < 1) return `${Math.max(50, Math.round((km * 1000) / 10) * 10)}m`;
  if (km < 10) return `${km.toFixed(1)}km`;
  return `${Math.round(km)}km`;
}

export interface NearbyPost {
  post: Post;
  km: number;
}

/** 같은 상호(공백 무시)는 하나로 보고, 가까운 순으로 limit개를 maxKm 안에서 고른다. */
export function getNearbyPosts(target: Post, pool: Post[], limit = 4, maxKm = 30): NearbyPost[] {
  if (!hasCoordinates(target)) return [];
  const origin = { lat: target.data.mapLat as number, lng: target.data.mapLng as number };
  const placeKey = (p: Post) => (p.data.placeName ?? p.data.slug).replace(/\s+/g, '');
  const targetKey = placeKey(target);
  const samePlace = (p: Post) => placeKey(p) === targetKey;

  const candidates = pool
    .filter((p) => p.data.slug !== target.data.slug && hasCoordinates(p) && !samePlace(p))
    .map((p) => ({ post: p, km: distanceKm(origin, { lat: p.data.mapLat as number, lng: p.data.mapLng as number }) }))
    .filter((item) => item.km <= maxKm)
    .sort((a, b) => a.km - b.km);

  const seenPlaces = new Set<string>();
  const result: NearbyPost[] = [];
  for (const item of candidates) {
    const key = placeKey(item.post);
    if (seenPlaces.has(key)) continue;
    seenPlaces.add(key);
    result.push(item);
    if (result.length >= limit) break;
  }
  return result;
}
