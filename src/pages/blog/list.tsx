import { format } from 'date-fns';
import { enUS, ru } from 'date-fns/locale';

import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
  type Post,
  buildMediaUrl,
  getCategories,
  getPosts,
} from 'shared/api/strapi';
import { PAGE_META } from 'shared/lib/page-meta-config';
import { usePageMeta } from 'shared/lib/use-page-meta';
import { Pagination } from 'shared/ui';

export const BlogList = () => {
  const { t, i18n } = useTranslation(['blog']);
  const pageMeta = usePageMeta(PAGE_META.blog);
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    [],
  );
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [total, setTotal] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCategories()
      .then((cats) =>
        Array.isArray(cats) ? setCategories(cats) : setCategories([]),
      )
      .catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getPosts(page, categoryId)
      .then((res) => {
        setPosts(res.data);
        setTotal(res.meta.pagination.total);
        setError(null);
      })
      .catch(() => {
        setError('Сервер временно недоступен');
        setPosts([]);
        setTotal(0);
      })
      .finally(() => setLoading(false));
  }, [page, categoryId]);

  const pageCount = useMemo(() => Math.max(1, Math.ceil(total / 8)), [total]);

  return (
    <>
      {pageMeta}
      <section
        className="relative flex min-h-[calc(100vh-200px)] w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch overflow-hidden rounded-[32px] xl:gap-12 xl:p-[88px]"
        aria-labelledby="blog-title"
      >
        <header className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7">
          <h1
            id="blog-title"
            className="relative mt-3 self-stretch text-[36px]  font-medium leading-[44px]  tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:mt-[-1.00px] xl:text-5xl xl:leading-[60px]"
          >
            {t('list.title')}
          </h1>
          <nav
            aria-label={t('list.categories')}
            className="flex w-full max-w-full items-center gap-2 overflow-x-auto overflow-y-hidden [-webkit-overflow-scrolling:touch]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <button
              onClick={() => setCategoryId(null)}
              className={`h-10 shrink-0 whitespace-nowrap rounded-full px-5 ${
                categoryId === null
                  ? 'bg-blue-50 text-white'
                  : 'text-[#55607a] hover:bg-[#E8EAF2]'
              }`}
            >
              {t('list.all')}
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategoryId(c.id)}
                className={`h-10 shrink-0 whitespace-nowrap rounded-full px-5 ${
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

        <div className="grid w-full flex-1 grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {loading ? (
            <div className="col-span-full flex items-center justify-center py-12 text-[#55607a]">
              {t('list.loading')}
            </div>
          ) : error ? (
            <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
              <div className="mb-4 text-6xl">⚠️</div>
              <div className="mb-2 text-xl text-[#55607a]">{error}</div>
              <div className="text-sm text-[#9FA7BC]">
                Попробуйте обновить страницу позже
              </div>
            </div>
          ) : posts.length === 0 ? (
            <div className="col-span-full flex items-center justify-center py-24 text-xl text-[#55607a]">
              {t('list.noPosts', 'Нет постов')}
            </div>
          ) : (
            posts.map((post) => (
              <article
                key={post.documentId}
                className="flex flex-col gap-4 rounded-3xl bg-gray-10 p-3"
                aria-labelledby={`post-${post.documentId}-title`}
              >
                <Link
                  to={`/blog/${post.documentId}`}
                  className="relative h-72 w-full rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${buildMediaUrl(post.image?.url)})`,
                  }}
                >
                  <span className="!bg-white/10 absolute left-3 top-3 h-7 w-fit rounded-full px-3 py-1 text-sm !text-white backdrop-blur-xl">
                    {post.category?.name}
                  </span>
                </Link>
                <div className="flex w-full flex-col gap-2 py-2">
                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch">
                    <div className="relative inline-flex h-6 flex-[0_0_auto] items-center justify-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative size-4"
                        aria-hidden={true}
                      >
                        <path
                          d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z"
                          stroke="#9FA7BC"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11 1.5V3.5"
                          stroke="#9FA7BC"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 1.5V3.5"
                          stroke="#9FA7BC"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.5 5.5H13.5"
                          stroke="#9FA7BC"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <time
                        dateTime={new Date(post.createdAt).toISOString()}
                        className="relative w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                      >
                        {format(new Date(post.createdAt), 'dd MMMM yyyy', {
                          locale: i18n.language === 'ru' ? ru : enUS,
                        })}
                      </time>
                    </div>
                  </div>
                  <h2
                    id={`post-${post.documentId}-title`}
                    className="text-2xl font-bold text-[#1c222f]"
                  >
                    <Link to={`/blog/${post.documentId}`}>{post.title}</Link>
                  </h2>
                  <p className="leading-6 text-[#7a86a2]">{post.description}</p>
                </div>
              </article>
            ))
          )}
        </div>

        <nav
          aria-label={t('list.navigation')}
          className="mx-auto flex items-center justify-center gap-2 xl:pt-4"
        >
          <Pagination
            pageIndex={page}
            pageCount={pageCount}
            onPageChange={(event) => setPage(event.selected)}
          />
        </nav>
      </section>
    </>
  );
};
