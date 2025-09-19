export type Category = {
  id: number;
  name: string;
};

export type Image = {
  url: string;
};

export type Post = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  image: Image | null;
  category: Category;
  ckeditor?: string;
  relatedTo?: Post[];
  likes?: number;
  views?: number;
};

const STRAPI_URL = (import.meta as any).env?.VITE_STRAPI_API_URL as
  | string
  | undefined;

const buildUrl = (
  path: string,
  params?: Record<string, string | number | boolean | undefined>,
) => {
  const base = STRAPI_URL?.replace(/\/$/, '') ?? '';
  const url = new URL(`${base}${path}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      url.searchParams.append(key, String(value));
    });
  }
  return url.toString();
};

export const fetchJson = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  return res.json() as Promise<T>;
};

export const getCategories = async () => {
  const res = await fetchJson<{ data: Category[] }>(
    buildUrl('/api/categories'),
  );
  return res.data;
};

export type GetPostsResponse = {
  data: Post[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export const getPosts = (page: number, categoryId?: number | null) => {
  const params: Record<string, string | number> = {
    'pagination[page]': page,
    'pagination[pageSize]': 8,
    'populate[0]': 'image',
    'populate[1]': 'category',
  };
  if (categoryId) {
    params['filters[category][id][$eq]'] = categoryId;
  }
  return fetchJson<GetPostsResponse>(buildUrl('/api/posts', params));
};

export const getPostById = async (id: string) => {
  const url = buildUrl(
    `/api/posts/${id}?populate=image&populate=category&populate=relatedTo`,
  );
  const res = await fetchJson<{ data: Post }>(url);
  return res.data;
};

export type Comment = {
  id: number;
  content: string;
  authorName?: string | null;
  likes?: number;
  createdAt: string;
  replies?: Comment[];
};

export const getComments = async (postId: string | number) => {
  const res = await fetchJson<{ data: Comment[] }>(
    buildUrl(`/api/posts/${postId}/comments`),
  );
  return res.data;
};

export const addComment = async (
  postId: string | number,
  data: { content: string; authorName?: string; parentId?: number },
) => {
  const res = await fetch(buildUrl(`/api/posts/${postId}/comments`), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to add comment');
  const json = await res.json();
  return json.data as Comment;
};

export const likePost = async (postId: string | number) => {
  const res = await fetch(buildUrl(`/api/posts/${postId}/like`), {
    method: 'POST',
  });
  if (!res.ok) throw new Error('Failed to like post');
  return (await res.json()).data as { id: string | number; likes: number };
};

export const viewPost = async (postId: string | number) => {
  const res = await fetch(buildUrl(`/api/posts/${postId}/view`), {
    method: 'POST',
  });
  if (!res.ok) throw new Error('Failed to increment views');
  return (await res.json()).data as { id: string | number; views: number };
};

export const likeComment = async (commentId: string | number) => {
  const res = await fetch(buildUrl(`/api/comments/${commentId}/like`), {
    method: 'POST',
  });
  if (!res.ok) throw new Error('Failed to like comment');
  return (await res.json()).data as { id: string | number; likes: number };
};

export const buildMediaUrl = (relative?: string | null) => {
  if (!relative) return '';
  const base = STRAPI_URL?.replace(/\/$/, '') ?? '';
  return `${base}${relative}`;
};
