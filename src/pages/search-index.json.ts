import { getCollection } from 'astro:content';
import { CATEGORY_LABELS } from '../consts';
import { getPublishedPosts } from '../utils/posts';

export async function GET() {
  const posts = getPublishedPosts(await getCollection('posts'));
  return new Response(JSON.stringify(posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    program: post.data.program,
    region: post.data.region ?? '',
    placeName: post.data.placeName ?? '',
    category: CATEGORY_LABELS[post.data.category],
    tags: post.data.tags,
    url: `/posts/${post.data.slug}/`
  }))), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}
