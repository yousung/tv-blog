import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'posts'>;

export function getPublishedPosts(posts: Post[]) {
  return posts
    .filter((post) => post.data.status === 'published')
    .sort((a, b) => getPostDisplayDate(b).date.getTime() - getPostDisplayDate(a).date.getTime());
}

export function getPostDisplayDate(post: Post) {
  const date = post.data.updatedDate ?? post.data.date;
  return {
    date,
    label: post.data.updatedDate ? '업데이트' : '작성',
    text: new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }).format(date)
  };
}

export function uniqueSorted(values: Array<string | undefined>) {
  return [...new Set(values.filter(Boolean) as string[])].sort((a, b) => a.localeCompare(b, 'ko'));
}
