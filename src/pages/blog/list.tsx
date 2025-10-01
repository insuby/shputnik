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
import { Pagination } from 'shared/ui';

export const BlogList = () => {
  const { t, i18n } = useTranslation(['blog']);
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
    <section
      className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch overflow-hidden rounded-[32px] xl:gap-12 xl:p-[88px]"
      aria-labelledby="blog-title"
    >
      <header className="relative flex flex-[0_0_auto] flex-col items-start gap-7">
        <h1
          id="blog-title"
          className="relative mt-3 self-stretch text-[36px]  font-medium leading-[44px]  tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:mt-[-1.00px] xl:text-5xl xl:leading-[60px]"
        >
          {t('list.title')}
        </h1>
        <nav
          aria-label={t('list.categories')}
          className="flex w-full items-center gap-2 overflow-x-auto"
        >
          <button
            onClick={() => setCategoryId(null)}
            className={`h-10 whitespace-nowrap rounded-full px-5 ${
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

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {loading ? (
          <div className="col-span-full flex items-center justify-center py-12 text-[#55607a]">
            {t('list.loading')}
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
                        d="M8 3.5C3 3.5 1 8 1 8C1 8 3 12.5 8 12.5C13 12.5 15 8 15 8C15 8 13 3.5 8 3.5Z"
                        stroke="#9FA7BC"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z"
                        stroke="#9FA7BC"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="relative w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      {post.views ?? 0}
                    </div>
                  </div>
                  <div className="justify_center relative inline-flex h-6 flex-[0_0_auto] items-center gap-2">
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
                        d="M8 14C8 14 1.5 10.5 1.5 6.375C1.5 5.47989 1.85558 4.62145 2.48851 3.98851C3.12145 3.35558 3.97989 3 4.875 3C6.28688 3 7.49625 3.76937 8 5C8.50375 3.76937 9.71312 3 11.125 3C12.0201 3 12.8785 3.35558 13.5115 3.98851C14.1444 4.62145 14.5 5.47989 14.5 6.375C14.5 10.5 8 14 8 14Z"
                        stroke="#9FA7BC"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="relative w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      {post.likes ?? 0}
                    </div>
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
  );
};
