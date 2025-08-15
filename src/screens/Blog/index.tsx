import {useEffect, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import {format} from 'date-fns';

import {buildMediaUrl, getCategories, getPosts, type Post} from '../../api/strapi';

export const BlogList = () => {
    const [page, setPage] = useState(1);
    const [categoryId, setCategoryId] = useState<number | null>(null);
    const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [total, setTotal] = useState(1);

    useEffect(() => {
        getCategories()
            .then((cats) => Array.isArray(cats) ? setCategories(cats) : setCategories([]))
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
        <div
            className="flex flex-col items-start gap-12 p-[88px] relative self-stretch w-full flex-[0_0_auto] rounded-[32px] overflow-hidden">
            <div className="flex flex-col items-start gap-8 relative flex-[0_0_auto]">
                <h1
                    className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[60px] leading-[60px] relative tracking-[0]">
                    Блог
                </h1>
                <div className="flex w-full items-center gap-2 overflow-x-auto">
                    <button
                        onClick={() => setCategoryId(null)}
                        className={`h-10 px-5 rounded-full whitespace-nowrap ${categoryId === null ?  'bg-blue-50 text-white' : 'text-[#55607a] hover:bg-[#E8EAF2]'}`}
                    >
                        Все
                    </button>
                    {categories.map((c) => (
                        <button
                            key={c.id}
                            onClick={() => setCategoryId(c.id)}
                            className={`h-10 px-5 rounded-full whitespace-nowrap ${categoryId === c.id ? 'bg-blue-50 text-white' : 'text-[#55607a] hover:bg-[#E8EAF2]'}`}
                        >
                            {c.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid w-full grid-cols-3 gap-6">
                {loading ? (
                    <div className="col-span-full flex items-center justify-center py-12 text-[#55607a]">Загрузка…</div>
                ) : (
                    posts.map((post) => (
                        <Link to={`/blog/${post.documentId}`} key={post.documentId}
                              className="rounded-3xl bg-gray-10 p-3 flex flex-col md:flex-row gap-4">
                            <div
                                className="relative h-72 w-full rounded-2xl bg-cover bg-center"
                                style={{backgroundImage: `url(${buildMediaUrl(post.image?.url)})`}}
                            >
                  <span
                      className="absolute left-3 top-3 h-7 w-fit rounded-full bg-white px-3 py-1 text-sm text-[#00cb82]">
                    {post.category?.name}
                  </span>
                            </div>
                            <div className="flex w-full flex-col gap-2 py-2">
                                <span
                                    className="text-sm text-[#9ea7bb]">{format(new Date(post.createdAt), 'dd MMMM yyyy')}</span>
                                <p className="text-2xl font-bold text-[#1c222f]">{post.title}</p>
                                <p className="text-[#7a86a2] leading-6">{post.description}</p>
                            </div>
                        </Link>
                    ))
                )}
            </div>

            <div className="flex items-center justify-center gap-2 pt-4">
                <button
                    disabled={page <= 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className="px-4 py-2 rounded-full bg-white text-[#55607a] disabled:opacity-50"
                >
                    Назад
                </button>
                <span className="text-[#55607a]">{page} / {pageCount}</span>
                <button
                    disabled={page >= pageCount}
                    onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                    className="px-4 py-2 rounded-full bg-white text-[#55607a] disabled:opacity-50"
                >
                    Вперёд
                </button>
            </div>
        </div>
    );
};

export default BlogList;

