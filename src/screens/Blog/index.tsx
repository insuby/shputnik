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
    <section className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 md:gap-12 self-stretch overflow-hidden rounded-[32px] md:p-[88px]" aria-labelledby="blog-title">
      <header className="relative flex flex-[0_0_auto] flex-col items-start gap-7">
        <h1 id="blog-title" className="relative mt-[-1.00px] self-stretch  text-[36px] md:text-5xl  font-medium leading-[44px] md:leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
          Блог
        </h1>
        <nav aria-label="Категории" className="flex w-full items-center gap-2 overflow-x-auto">
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
        </nav>
      </header>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        {loading ? (
          <div className="col-span-full flex items-center justify-center py-12 text-[#55607a]">
            Загрузка…
          </div>
        ) : (
          posts.map((post) => (
            <article key={post.documentId} className="flex flex-col gap-4 rounded-3xl bg-gray-10 md:!flex-row p-3" aria-labelledby={`post-${post.documentId}-title`}>
              <Link to={`/blog/${post.documentId}`} className="relative h-72 w-full rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url(${buildMediaUrl(post.image?.url)})` }}>
                <span className="bg-white/10 absolute left-3 top-3 h-7 w-fit rounded-full px-3 py-1 text-sm text-gray-70 backdrop-blur-2xl">
                  {post.category?.name}
                </span>
              </Link>
              <div className="flex w-full flex-col gap-2 py-2">
                <div className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch">
                  <div className="relative inline-flex h-6 flex-[0_0_auto] items-center justify-center gap-2">
                    <img className="relative size-4" alt="" aria-hidden="true" src="https://c.animaapp.com/me09936stTuvMn/img/calendarblank.svg" />
                    <time dateTime={new Date(post.createdAt).toISOString()} className="relative w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      {format(new Date(post.createdAt), 'dd MMMM yyyy')}
                    </time>
                  </div>
                  <div className="relative inline-flex h-6 flex-[0_0_auto] items-center justify-center gap-2">
                    <img className="relative size-4" alt="" aria-hidden="true" src="https://c.animaapp.com/me09936stTuvMn/img/eye.svg" />
                    <div className="relative w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      {post.views ?? 0}
                    </div>
                  </div>
                  <div className="justify_center relative inline-flex h-6 flex-[0_0_auto] items-center gap-2">
                    <img className="relative size-4" alt="" aria-hidden="true" src="https://c.animaapp.com/me09936stTuvMn/img/heart-2.svg" />
                    <div className="relative w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      {post.likes ?? 0}
                    </div>
                  </div>
                </div>
                <h2 id={`post-${post.documentId}-title`} className="text-2xl font-bold text-[#1c222f]">
                  <Link to={`/blog/${post.documentId}`}>{post.title}</Link>
                </h2>
                <p className="leading-6 text-[#7a86a2]">{post.description}</p>
              </div>
            </article>
          ))
        )}
      </div>

      <nav aria-label="Навигация по страницам" className="mx-auto flex items-center justify-center gap-2 md:pt-4">
        <Pagination
          pageIndex={page}
          pageCount={pageCount}
          onPageChange={(event) => setPage(event.selected)}
        />
      </nav>
    </section>
  );
};

export default BlogList;
