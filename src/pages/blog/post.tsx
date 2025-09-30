import { format } from 'date-fns';
import { enUS, ru } from 'date-fns/locale';

import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

import {
  type Comment,
  type Post,
  addComment,
  buildMediaUrl,
  getComments,
  getPostById,
  likeComment,
  likePost,
  viewPost,
} from 'shared/api/strapi';

export const BlogPost = () => {
  const { t, i18n } = useTranslation(['blog']);
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [authorName, setAuthorName] = useState<string>('');
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState<string>('');

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const vkShare = useMemo(
    () =>
      `https://vk.com/share.php?url=${encodeURIComponent(
        pageUrl,
      )}&title=${encodeURIComponent(post?.title ?? '')}`,
    [pageUrl, post?.title],
  );
  const tgShare = useMemo(
    () =>
      `https://t.me/share/url?url=${encodeURIComponent(
        pageUrl,
      )}&text=${encodeURIComponent(post?.title ?? '')}`,
    [pageUrl, post?.title],
  );
  const related = useMemo(
    () => (post?.relatedTo || []).slice(0, 3),
    [post?.relatedTo],
  );

  useEffect(() => {
    if (!id) return;
    getPostById(id)
      .then((data) => {
        setPost(data);
        viewPost(id).catch(() => {});
      })
      .catch(() => {});
    getComments(id)
      .then(setComments)
      .catch(() => {});
  }, [id]);

  const handleSend = async () => {
    if (!id || !newComment.trim()) return;
    const created = await addComment(id, {
      content: newComment.trim(),
      authorName: authorName.trim() || undefined,
    });
    setComments((prev) => [...prev, created]);
    setNewComment('');
    setAuthorName('');
  };

  const handleLike = async () => {
    if (!id) return;
    const res = await likePost(id);
    setPost((p) => (p ? { ...p, likes: res.likes } : p));
  };

  const handleLikeComment = async (commentId: number) => {
    const res = await likeComment(commentId);
    setComments((prev) =>
      prev.map((c) => (c.id === commentId ? { ...c, likes: res.likes } : c)),
    );
  };

  const handleSendReply = async (parentId: number) => {
    if (!id || !replyText.trim()) return;
    const created = await addComment(id, {
      content: replyText.trim(),
      parentId,
    });
    setComments((prev) =>
      prev.map((c) =>
        c.id === parentId
          ? {
              ...c,
              replies: [...(c.replies || []), created],
            }
          : c,
      ),
    );
    setReplyText('');
    setReplyTo(null);
  };

  if (!post) {
    return (
      <div className="items_center justify_center flex w-full py-12 text-[#55607a]">
        {t('post.loading')}
      </div>
    );
  }

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch rounded-[32px] xl:gap-12 xl:px-20 xl:pb-0 xl:pt-20">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-10 self-stretch">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 xl:w-[1216px]">
          <div className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch">
            <div className="relative inline-flex h-6 flex-[0_0_auto] items-center justify-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative size-4"
                alt=""
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
                alt=""
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
                alt=""
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
          <h1 className="relative text-[36px] font-medium leading-none tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[800px] xl:text-5xl xl:leading-[60px]">
            {post.title}
          </h1>
        </div>
        <div
          className="relative h-[456px] w-full self-stretch overflow-hidden rounded-3xl"
          style={{
            background: `url(${buildMediaUrl(
              post.image?.url,
            )}) 50% 50% / cover`,
          }}
        >
          <div className="relative left-4 top-4 inline-flex items-center justify-center gap-2.5 rounded-[100px] bg-[#ffffff33] px-3 py-1.5 backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]">
            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-white [font-family:'Roboto',Helvetica]">
              {post.category?.name}
            </div>
          </div>
        </div>
        <div className="relative flex w-full flex-[0_0_auto] items-start gap-7 self-stretch xl:gap-12">
          <div className="relative flex w-full flex-1 grow flex-col items-start justify-center gap-10">
            <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[32px] bg-[#f9fafd] p-8 xl:p-10">
              <p className="relative mt-[-1.00px] flex-1 text-2xl font-normal leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                {post.description}
              </p>
            </div>
            <div>
              <div dangerouslySetInnerHTML={{ __html: post.ckeditor || '' }} />
            </div>
            <div className="relative flex w-full flex-[0_0_auto] flex-col justify-between self-stretch rounded-3xl bg-[#f9fafd] p-7 xl:!flex-row xl:!items-center">
              <div className="relative inline-flex flex-[0_0_auto] items-center gap-4">
                <div className="relative w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                  {t('post.rateArticle')}
                </div>
                <button
                  onClick={handleLike}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative size-8"
                    alt="Heart"
                  >
                    <path
                      d="M14 24.5C14 24.5 2.625 18.375 2.625 11.1562C2.625 9.58982 3.24726 8.08754 4.3549 6.9799C5.46254 5.87226 6.96482 5.25 8.53125 5.25C11.002 5.25 13.1184 6.59641 14 8.75C14.8816 6.59641 16.998 5.25 19.4688 5.25C21.0352 5.25 22.5375 5.87226 23.6451 6.9799C24.7527 8.08754 25.375 9.58982 25.375 11.1562C25.375 18.375 14 24.5 14 24.5Z"
                      fill="#55607A"
                    />
                  </svg>
                  <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {post.likes ?? 0}
                  </div>
                </button>
              </div>
              <div className="relative inline-flex flex-[0_0_auto] items-center gap-4">
                <div className="relative w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                  {t('post.share')}
                </div>
                <a
                  href={vkShare}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('post.shareVk')}
                  className="flex size-12 items-center justify-center rounded-full p-2 transition-colors hover:bg-[#e9efff] active:bg-[#dbe7ff]"
                >
                  <svg
                    width="28"
                    height="17"
                    viewBox="0 0 28 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.33 16.4329H14.9584C14.9584 16.4329 15.4502 16.3771 15.7017 16.0986C15.9328 15.8426 15.9254 15.3622 15.9254 15.3622C15.9254 15.3622 15.8935 13.1129 16.9075 12.7817C17.9075 12.4552 19.1912 14.9556 20.5518 15.9171C21.5807 16.6444 22.3626 16.4852 22.3626 16.4852L26.001 16.4329C26.001 16.4329 27.9042 16.312 27.0017 14.7716C26.9278 14.6458 26.476 13.6321 24.2964 11.5495C22.0148 9.36971 22.3207 9.72236 25.0688 5.95184C26.7424 3.65563 27.4114 2.25384 27.2023 1.65351C27.0031 1.08153 25.7721 1.23261 25.7721 1.23261L21.6756 1.25869C21.6756 1.25869 21.3717 1.21609 21.1466 1.35474C20.9264 1.49036 20.7851 1.80719 20.7851 1.80719C20.7851 1.80719 20.1365 3.58396 19.2721 5.09521C17.448 8.28372 16.7185 8.45251 16.4203 8.25423C15.7266 7.79272 15.8999 6.40062 15.8999 5.41136C15.8999 2.3212 16.3552 1.03283 15.0132 0.699259C14.568 0.588654 14.24 0.515486 13.1011 0.503534C11.6394 0.488251 10.4024 0.508144 9.70191 0.861432C9.23585 1.09639 8.87627 1.61983 9.09539 1.64997C9.36618 1.68707 9.97921 1.8203 10.3043 2.27557C10.7242 2.86364 10.7095 4.18386 10.7095 4.18386C10.7095 4.18386 10.9508 7.82145 10.1462 8.27318C9.59405 8.5831 8.8365 7.95041 7.21019 5.0576C6.37704 3.57581 5.7478 1.93773 5.7478 1.93773C5.7478 1.93773 5.62663 1.63166 5.4102 1.46782C5.14771 1.26932 4.78092 1.2064 4.78092 1.2064L0.888011 1.23256C0.888011 1.23256 0.303719 1.24938 0.0890362 1.51093C-0.101968 1.7438 0.0737758 2.22489 0.0737758 2.22489C0.0737758 2.22489 3.1213 9.5648 6.57236 13.2637C9.73703 16.6555 13.33 16.4329 13.33 16.4329Z"
                      fill="#3573FC"
                    />
                  </svg>
                </a>
                <a
                  href={tgShare}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('post.shareTelegram')}
                  className="flex size-12 items-center justify-center rounded-full p-2 transition-colors hover:bg-[#e8f7fd] active:bg-[#d3f0fb]"
                >
                  <svg
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.57478 8.62584C7.74753 5.81226 11.8568 3.94271 13.9203 3.0357C19.7932 0.46276 21.0278 0.0185104 21.8214 0C21.9978 0 22.3858 0.037021 22.6503 0.259146C22.8619 0.444249 22.9148 0.684885 22.9501 0.869989C22.9854 1.05509 23.0207 1.44381 22.9854 1.73998C22.6679 5.25695 21.2923 13.7902 20.5868 17.7144C20.287 19.3804 19.705 19.9357 19.1407 19.9912C17.9061 20.1023 16.9714 19.1397 15.7897 18.3253C13.9203 17.0481 12.8797 16.2521 11.0632 14.9934C8.96444 13.5496 10.3224 12.7537 11.5217 11.4579C11.8392 11.1247 17.2536 5.94183 17.3594 5.47907C17.377 5.42354 17.377 5.20142 17.2536 5.09035C17.1301 4.97929 16.9537 5.01631 16.8126 5.05333C16.6186 5.09035 13.6557 7.16352 7.88862 11.2543C7.04207 11.8652 6.2837 12.1613 5.59588 12.1428C4.83752 12.1243 3.39133 11.6986 2.29787 11.3283C0.975142 10.8841 -0.0830433 10.6435 0.00513875 9.86603C0.058048 9.4588 0.58714 9.05157 1.57478 8.62584Z"
                      fill="#019AE3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-20 self-stretch">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
                {!!comments.length && (
                  <div className="w_[842px] flex_[0_0_auto] relative mr-[-26.00px] flex items-start gap-3">
                    <div className="tracking_[0] relative mt-[-1.00px] w-fit whitespace-nowrap text-2xl font-medium leading-8 text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('post.comments')}
                    </div>
                    <div className="tracking_[0] relative mt-[-1.00px] w-fit whitespace-nowrap text-2xl font-medium leading-8 text-gray-40 [font-family:'Roboto',Helvetica]">
                      {comments.length}
                    </div>
                  </div>
                )}
                <div className="flex_[0_0_auto] relative flex w-full items-start gap-4">
                  <div className="items_center justify_center relative flex w-full flex-1 grow flex-col">
                    {comments.map((c) => (
                      <div
                        key={c.id}
                        className="flex w-full flex-col items-start gap-2.5 self-stretch"
                      >
                        <div className="justify_center flex_[0_0_auto] relative flex w-full items-center gap-4 self-stretch">
                          <div className="relative flex size-11 items-center justify-center overflow-hidden rounded-[100px] bg-[#3573fc14]">
                            <div className="top_[11px] tracking_[0] absolute left-3 w-5 text-center text-xl font-medium leading-5 text-blue-30 [font-family:'Roboto',Helvetica]">
                              {(c.authorName || t('post.guest').charAt(0))
                                .charAt(0)
                                .toUpperCase()}
                            </div>
                          </div>
                          <div className="text-XL tracking_[0] relative flex-1 font-normal leading-7 text-gray-90 [font-family:'Roboto',Helvetica]">
                            {c.authorName || t('post.guest')}
                          </div>
                          <div className="tracking_[0] relative w-fit whitespace-nowrap text-base font-normal leading-6 text-gray-40 [font-family:'Roboto',Helvetica]">
                            {format(
                              new Date(c.createdAt),
                              'dd MMMM yyyy HH:mm',
                              {
                                locale: i18n.language === 'ru' ? ru : enUS,
                              },
                            )}
                          </div>
                        </div>
                        <div className="flex_[0_0_auto] relative flex w-full flex-col items-start gap-4 self-stretch py-0 pl-14 pr-0">
                          <div className="flex_[0_0_auto] relative flex w-full flex-col items-start gap-4 self-stretch rounded-3xl bg-[#f9fafd] p-6">
                            <p className="tracking_[0] relative mt-[-1.00px] self-stretch text-xl font-normal leading-7 text-gray-70 [font-family:'Roboto',Helvetica]">
                              {c.content}
                            </p>
                            <div className="flex_[0_0_auto] relative flex w-full items-center justify-between gap-4 self-stretch">
                              <button
                                onClick={() => setReplyTo(c.id)}
                                className="tracking_[0] relative text-base font-normal leading-6 text-blue-50 [font-family:'Inter',Helvetica]"
                              >
                                {t('post.reply')}
                              </button>
                              <button
                                onClick={() => handleLikeComment(c.id)}
                                className="inline-flex items-center gap-2"
                              >
                                <svg
                                  width="28"
                                  height="28"
                                  viewBox="0 0 28 28"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="relative size-7"
                                  alt="Heart"
                                >
                                  <path
                                    d="M14 24.5C14 24.5 2.625 18.375 2.625 11.1562C2.625 9.58982 3.24726 8.08754 4.3549 6.9799C5.46254 5.87226 6.96482 5.25 8.53125 5.25C11.002 5.25 13.1184 6.59641 14 8.75C14.8816 6.59641 16.998 5.25 19.4688 5.25C21.0352 5.25 22.5375 5.87226 23.6451 6.9799C24.7527 8.08754 25.375 9.58982 25.375 11.1562C25.375 18.375 14 24.5 14 24.5Z"
                                    fill="#55607A"
                                  />
                                </svg>
                                <div className="tracking_[0] w-fit whitespace-nowrap text-base font-medium leading-6 text-gray-40 [font-family:'Roboto',Helvetica]">
                                  {c.likes ?? 0}
                                </div>
                              </button>
                            </div>
                            {replyTo === c.id && (
                              <div className="mt-2 w-full">
                                <div className="w_[818px] rounded-2xl border border-[#e3e4e7] bg-white p-3">
                                  <textarea
                                    className="h-[90px] w-full outline-none"
                                    placeholder={t('post.replyPlaceholder')}
                                    value={replyText}
                                    onChange={(e) =>
                                      setReplyText(e.target.value)
                                    }
                                  />
                                </div>
                                <div className="mt-2 flex gap-2">
                                  <button
                                    onClick={() => handleSendReply(c.id)}
                                    className="rounded-full bg-blue-50 px-4 py-2 text-white"
                                  >
                                    {t('post.reply')}
                                  </button>
                                  <button
                                    onClick={() => {
                                      setReplyTo(null);
                                      setReplyText('');
                                    }}
                                    className="rounded-full bg-[#e8eaf2] px-4 py-2 text-[#55607a]"
                                  >
                                    {t('post.cancel')}
                                  </button>
                                </div>
                              </div>
                            )}
                            {!!(c.replies && c.replies.length) && (
                              <div className="mt-3 flex flex-col gap-3 border-l border-[#e8eaf2] pl-4">
                                {c.replies!.map((r) => (
                                  <div key={r.id} className="text-[#1c222f]">
                                    <div className="text-sm text-[#7a86a2]">
                                      {r.authorName || t('post.guest')} ·{' '}
                                      {format(
                                        new Date(r.createdAt),
                                        'dd MMMM yyyy HH:mm',
                                        {
                                          locale:
                                            i18n.language === 'ru' ? ru : enUS,
                                        },
                                      )}
                                    </div>
                                    <div className="mt-1">{r.content}</div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <form
                className="flex_[0_0_auto] relative inline-flex w-full flex-col items-start gap-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                aria-labelledby="comment-form-title"
              >
                <div className="flex_[0_0_auto] relative inline-flex w-full flex-col items-start gap-6">
                  <div
                    id="comment-form-title"
                    className="tracking_[0] relative mt-[-1.00px] text-2xl font-medium leading-8 text-gray-90 [font-family:'Roboto',Helvetica]"
                  >
                    {t('post.yourComment')}
                  </div>
                  <label htmlFor="comment-text" className="sr-only">
                    {t('post.yourComment')}
                  </label>
                  <textarea
                    id="comment-text"
                    className="relative flex w-full items-center justify-center gap-2.5 rounded-2xl border border-solid border-[#e3e4e7] bg-white px-5 py-4"
                    placeholder={t('post.commentPlaceholder')}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                  />
                  <div className="relative flex h-[60px] w-full items-start gap-6">
                    <div className="flex-1">
                      <div className="relative flex w-full items-center justify-center gap-2.5 rounded-2xl border border-solid border-[#e3e4e7] bg-white px-5 py-4">
                        <label htmlFor="comment-author" className="sr-only">
                          {t('post.namePlaceholder')}
                        </label>
                        <input
                          id="comment-author"
                          className="w-full outline-none"
                          placeholder={t('post.namePlaceholder')}
                          value={authorName}
                          onChange={(e) => setAuthorName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="relative flex w-full items-center justify-center gap-2.5 rounded-2xl border border-solid border-[#e3e4e7] bg-white px-5 py-4">
                        <label htmlFor="comment-email" className="sr-only">
                          {t('post.emailPlaceholder')}
                        </label>
                        <input
                          id="comment-email"
                          type="email"
                          className="w-full outline-none"
                          placeholder={t('post.emailPlaceholder')}
                          aria-describedby="email-help"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="all-[unset] relative box-border flex h-[60px] w-full items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4"
                >
                  <div className="tracking_[0] relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 text-white [font-family:'Roboto',Helvetica]">
                    {t('post.send')}
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="flex_[0_0_auto] relative inline-flex flex-col items-start justify-center gap-4">
            {related.map((rel) => (
              <Link
                to={`/blog/${rel.documentId}`}
                key={rel.documentId}
                className="w_[352px] flex_[0_0_auto] relative flex items-start rounded-[32px] bg-[#f9fafd] p-3"
              >
                <div
                  className="w_[100px] h_[100px] relative rounded-3xl"
                  style={{
                    background: `url(${buildMediaUrl(
                      rel.image?.url,
                    )}) 50% 50% / cover`,
                  }}
                />
                <div className="relative flex flex-1 grow flex-col items-start justify-center gap-6 self-stretch px-5 py-3">
                  <p className="tracking_[0] relative self-stretch text-base font-normal leading-6 text-[#1c222f] [font-family:'Roboto',Helvetica]">
                    {rel.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
