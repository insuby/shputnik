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
};

const STRAPI_URL = (import.meta as any).env?.VITE_STRAPI_API_URL as string | undefined;

const buildUrl = (path: string, params?: Record<string, string | number | boolean | undefined>) => {
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
  const res = await fetchJson<{ data: Category[] }>(buildUrl('/api/categories'));
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
  const url = buildUrl(`/api/posts/${id}?populate=image&populate=category&populate=relatedTo`);
  const res = await fetchJson<{ data: Post }>(url);
  return res.data;
};

export const buildMediaUrl = (relative?: string | null) => {
  if (!relative) return '';
  const base = STRAPI_URL?.replace(/\/$/, '') ?? '';
  return `${base}${relative}`;
};

