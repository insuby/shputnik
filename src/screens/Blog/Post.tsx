import { format } from 'date-fns';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { type Post, buildMediaUrl, getPostById } from '../../api/strapi';

export const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!id) return;
    getPostById(id)
      .then(setPost)
      .catch(() => {});
  }, [id]);

  if (!post) {
    return (
      <div className="flex w-full items-center justify-center py-12 text-[#55607a]">
        Загрузка…
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center gap-4 px-0 md:p-4">
      <div className="flex w-full flex-col gap-4 rounded-[32px] bg-[#F3F4FA] px-6 py-8 md:p-8">
        <p className="flex items-center text-[#1c222f]">
          <Link to="/blog" className="text-[#7a86a2] hover:underline">
            Блог
          </Link>
          &nbsp;/&nbsp;
          <span className="truncate text-[#9ea7bb]" title={post.title}>
            {post.title}
          </span>
        </p>
        <div className="rounded-3xl bg-white p-4">
          <div
            className="relative h-80 w-full overflow-hidden rounded-[20px] bg-cover bg-center md:h-[267px]"
            style={{
              backgroundImage: `url("${buildMediaUrl(post.image?.url)}")`,
            }}
          >
            <div
              className="absolute inset-0 flex flex-col justify-between gap-8 p-8 md:p-12"
              style={{
                backdropFilter: 'blur(12px)',
                background: 'rgba(28,28,32,0.6)',
              }}
            >
              <h1 className="w-full text-[32px] font-extrabold leading-[115%] text-white md:text-[40px] md:leading-[120%]">
                {post.title}
              </h1>
              <div className="bg-white/10 flex w-full items-center gap-2 rounded-full px-5 py-2 text-white md:w-fit">
                <span>{post.category?.name}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-5 md:flex-row md:p-10">
            <div className="w-full md:w-9/12">
              <div dangerouslySetInnerHTML={{ __html: post.ckeditor || '' }} />
              <div className="mt-8">
                <div className="inline-flex h-10 items-center gap-2 rounded-full bg-[#E8EAF2] px-5 py-2 text-[#9ea7bb]">
                  <span>
                    {format(new Date(post.createdAt), 'dd MMMM yyyy')}
                  </span>
                </div>
              </div>
            </div>
            {!!(post.relatedTo && post.relatedTo.length) && (
              <div className="mt-8 w-full md:mt-0 md:w-1/4">
                <p className="font-semibold text-[#9ea7bb]">Похожие статьи</p>
                <div className="mt-3 flex flex-col gap-3">
                  {post.relatedTo.map((related) => (
                    <Link
                      key={related.documentId}
                      to={`/blog/${related.documentId}`}
                      className="flex w-full flex-col gap-3 rounded-2xl bg-[#F3F4FA] p-4 text-[#7a86a2] hover:bg-[#e8ebf4]"
                    >
                      <span className="text-[#9ea7bb]">
                        {format(new Date(related.createdAt), 'dd MMMM yyyy')}
                      </span>
                      <p className="line-clamp-3 font-bold text-[#1c222f]">
                        {related.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
