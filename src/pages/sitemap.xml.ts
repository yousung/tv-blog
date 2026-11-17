import { getCollection } from 'astro:content';
import { getPublishedPosts } from '../utils/posts';
import { buildPlaces, provinceCounts, MIN_INDEXED } from '../utils/places';

export async function GET() {
  const site = 'https://tv.lovizu.com';
  const posts = await getCollection('posts');
  const staticPaths = [
    '/',
    '/programs/',
    '/categories/',
    '/categories/food/',
    '/categories/local/',
    '/categories/health/',
    '/categories/life/',
    '/near/',
    ...provinceCounts(buildPlaces(getPublishedPosts(posts))).filter((p) => p.count >= MIN_INDEXED).map((p) => `/near/${p.slug}/`),
    '/privacy/'
  ];

  const urls = [
    ...staticPaths.map((path) => ({ loc: `${site}${path}`, lastmod: new Date().toISOString() })),
    ...posts
      .filter((post: any) => post.data.status === 'published')
      .map((post: any) => ({
        loc: `${site}/posts/${post.data.slug}/`,
        lastmod: (post.data.updatedDate ?? post.data.date).toISOString()
      }))
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
