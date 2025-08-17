import { format } from 'date-fns';

import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  type Post,
  buildMediaUrl,
  getCategories,
  getPosts,
} from '../../api/strapi';
import { Pagination } from '../../components/ui/pagination.tsx';

export const BlogList = () => {
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    [],
  );
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    getCategories()
      .then((cats) =>
        Array.isArray(cats) ? setCategories(cats) : setCategories([]),
      )
      .catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    setLoading(true);
    getPosts(page, categoryId)
      .then((res) => {
        setPosts(res.data);
        setTotal(res.meta.pagination.total);
      })
      .finally(() => setLoading(false));
  }, [page, categoryId]);

  const pageCount = useMemo(() => Math.max(1, Math.ceil(total / 8)), [total]);

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-12 self-stretch overflow-hidden rounded-[32px] p-[88px]">
      <div className="relative flex flex-[0_0_auto] flex-col items-start gap-8">
        <h1 className="relative mt-[-1.00px] self-stretch text-[60px] font-medium leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
          Блог
        </h1>
        <div className="flex w-full items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setCategoryId(null)}
            className={`h-10 whitespace-nowrap rounded-full px-5 ${
              categoryId === null
                ? 'bg-blue-50 text-white'
                : 'text-[#55607a] hover:bg-[#E8EAF2]'
            }`}
          >
            Все
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategoryId(c.id)}
              className={`h-10 whitespace-nowrap rounded-full px-5 ${
                categoryId === c.id
                  ? 'bg-blue-50 text-white'
                  : 'text-[#55607a] hover:bg-[#E8EAF2]'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid w-full grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full flex items-center justify-center py-12 text-[#55607a]">
            Загрузка…
          </div>
        ) : (
          posts.map((post) => (
            <Link
              to={`/blog/${post.documentId}`}
              key={post.documentId}
              className="flex flex-col gap-4 rounded-3xl bg-gray-10 p-3 md:flex-row"
            >
              <div
                className="relative h-72 w-full rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url(${buildMediaUrl(post.image?.url)})`,
                }}
              >
                <span className="bg-white/10 absolute left-3 top-3 h-7 w-fit rounded-full px-3 py-1 text-sm text-gray-70 backdrop-blur-2xl">
                  {post.category?.name}
                </span>
              </div>
              <div className="flex w-full flex-col gap-2 py-2">
                <span className="text-sm text-[#9ea7bb]">
                  {format(new Date(post.createdAt), 'dd MMMM yyyy')}
                </span>
                <p className="text-2xl font-bold text-[#1c222f]">
                  {post.title}
                </p>
                <p className="leading-6 text-[#7a86a2]">{post.description}</p>
              </div>
            </Link>
          ))
        )}
      </div>

      <div className="flex items-center justify-center gap-2 pt-4">
        <Pagination
          pageIndex={page}
          pageCount={pageCount}
          onPageChange={(event) => setPage(event.selected)}
        />
      </div>
    </div>
  );
};

export default BlogList;
