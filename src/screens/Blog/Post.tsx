import {format} from 'date-fns';

import {useEffect, useMemo, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

import {
    type Post,
    buildMediaUrl,
    getPostById,
    getComments,
    addComment,
    likePost,
    viewPost,
    type Comment,
    likeComment
} from '../../api/strapi';
import {Input} from "./Input.tsx";

export const BlogPost = () => {
    const {id} = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<string>('');
    const [authorName, setAuthorName] = useState<string>('');
    const [replyTo, setReplyTo] = useState<number | null>(null);
    const [replyText, setReplyText] = useState<string>('');

    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    const vkShare = useMemo(() => `https://vk.com/share.php?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(post?.title ?? '')}`, [pageUrl, post?.title]);
    const tgShare = useMemo(() => `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post?.title ?? '')}`, [pageUrl, post?.title]);
    const related = useMemo(() => (post?.relatedTo || []).slice(0, 3), [post?.relatedTo]);

    useEffect(() => {
        if (!id) return;
        getPostById(id)
            .then((data) => {
                setPost(data);
                viewPost(id).catch(() => {
                });
            })
            .catch(() => {
            });
        getComments(id).then(setComments).catch(() => {
        });
    }, [id]);

    const handleSend = async () => {
        if (!id || !newComment.trim()) return;
        const created = await addComment(id, {content: newComment.trim(), authorName: authorName.trim() || undefined});
        setComments((prev) => [...prev, created]);
        setNewComment('');
        setAuthorName('');
    };

    const handleLike = async () => {
        if (!id) return;
        const res = await likePost(id);
        setPost((p) => (p ? {...p, likes: res.likes} : p));
    };

    const handleLikeComment = async (commentId: number) => {
        const res = await likeComment(commentId);
        setComments((prev) => prev.map((c) => (c.id === commentId ? {...c, likes: res.likes} : c)));
    };

    const handleSendReply = async (parentId: number) => {
        if (!id || !replyText.trim()) return;
        const created = await addComment(id, {content: replyText.trim(), parentId});
        setComments((prev) => prev.map((c) => (c.id === parentId ? {
            ...c,
            replies: [...(c.replies || []), created]
        } : c)));
        setReplyText('');
        setReplyTo(null);
    };

    if (!post) {
        return (
            <div className="flex w-full items_center justify_center py-12 text-[#55607a]">
                Загрузка…
            </div>
        );
    }

    return (
        <div
            className="flex flex-col items-start gap-12 pt-20 pb-0 px-20 relative self-stretch w-full flex-[0_0_auto] rounded-[32px]">
            <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col w-[1216px] items-start gap-4 relative flex-[0_0_auto]">
                    <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex h-6 items-center justify-center gap-2 relative flex-[0_0_auto]">
                            <img className="relative w-4 h-4" alt="Calendar blank"
                                 src="https://c.animaapp.com/me09936stTuvMn/img/calendarblank.svg"/>
                            <div
                                className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-sm tracking-[0] leading-5 whitespace-nowrap">{format(new Date(post.createdAt), 'dd MMMM yyyy')}</div>
                        </div>
                        <div className="inline-flex h-6 items-center justify-center gap-2 relative flex-[0_0_auto]">
                            <img className="relative w-4 h-4" alt="Eye"
                                 src="https://c.animaapp.com/me09936stTuvMn/img/eye.svg"/>
                            <div
                                className="font-normal text-sm leading-5 relative w-fit [font-family:'Roboto',Helvetica] text-gray-40 tracking-[0] whitespace-nowrap">{post.views ?? 0}</div>
                        </div>
                        <div className="inline-flex h-6 items-center justify_center gap-2 relative flex-[0_0_auto]">
                            <img className="relative w-4 h-4" alt="Heart"
                                 src="https://c.animaapp.com/me09936stTuvMn/img/heart-2.svg"/>
                            <div
                                className="font-normal text-sm leading-5 relative w-fit [font-family:'Roboto',Helvetica] text-gray-40 tracking-[0] whitespace-nowrap">{post.likes ?? 0}</div>
                        </div>
                    </div>
                    <p className="relative w-[800px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl tracking-[0] leading-[60px]">{post.title}</p>
                </div>
                <div className="relative self-stretch w-full h-[456px] rounded-3xl overflow-hidden"
                     style={{background: `url(${buildMediaUrl(post.image?.url)}) 50% 50% / cover`}}>
                    <div
                        className="inline-flex items-center justify-center gap-2.5 px-3 py-1.5 relative top-4 left-4 bg-[#ffffff33] rounded-[100px] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]">
                        <div
                            className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap">{post.category?.name}</div>
                    </div>
                </div>
                <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start justify-center gap-10 relative flex-1 grow">
                        <div
                            className="flex items-center justify-center gap-2.5 p-10 relative self-stretch w-full flex-[0_0_auto] bg-[#f9fafd] rounded-[32px]">
                            <p className="flex-1 mt-[-1.00px] text-2xl leading-8 relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 tracking-[0]">{post.description}</p>
                        </div>
                        <div>
                            <div dangerouslySetInnerHTML={{__html: post.ckeditor || ''}}/>
                        </div>
                        <div
                            className="flex items-center justify-between p-8 relative self-stretch w-full flex-[0_0_auto] bg-[#f9fafd] rounded-3xl">
                            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                                <div
                                    className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-base tracking-[0] leading-6 whitespace-nowrap">Оцените
                                    статью:
                                </div>
                                <button onClick={handleLike}
                                        className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                                    <img className="relative w-8 h-8" alt="Heart"
                                         src="https://c.animaapp.com/me09936stTuvMn/img/heart.svg"/>
                                    <div
                                        className="font-medium text-base leading-6 relative w-fit [font-family:'Roboto',Helvetica] text-gray-40 tracking-[0] whitespace-nowrap">{post.likes ?? 0}</div>
                                </button>
                            </div>
                            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                                <div
                                    className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-base tracking-[0] leading-6 whitespace-nowrap">Поделитесь:
                                </div>
                                <a href={vkShare} target="_blank" rel="noopener noreferrer" aria-label="Поделиться VK"
                                   className="rounded-full p-2 size-12 flex items-center justify-center transition-colors hover:bg-[#e9efff] active:bg-[#dbe7ff]">
                                    <svg width="28" height="17" viewBox="0 0 28 17" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.33 16.4329H14.9584C14.9584 16.4329 15.4502 16.3771 15.7017 16.0986C15.9328 15.8426 15.9254 15.3622 15.9254 15.3622C15.9254 15.3622 15.8935 13.1129 16.9075 12.7817C17.9075 12.4552 19.1912 14.9556 20.5518 15.9171C21.5807 16.6444 22.3626 16.4852 22.3626 16.4852L26.001 16.4329C26.001 16.4329 27.9042 16.312 27.0017 14.7716C26.9278 14.6458 26.476 13.6321 24.2964 11.5495C22.0148 9.36971 22.3207 9.72236 25.0688 5.95184C26.7424 3.65563 27.4114 2.25384 27.2023 1.65351C27.0031 1.08153 25.7721 1.23261 25.7721 1.23261L21.6756 1.25869C21.6756 1.25869 21.3717 1.21609 21.1466 1.35474C20.9264 1.49036 20.7851 1.80719 20.7851 1.80719C20.7851 1.80719 20.1365 3.58396 19.2721 5.09521C17.448 8.28372 16.7185 8.45251 16.4203 8.25423C15.7266 7.79272 15.8999 6.40062 15.8999 5.41136C15.8999 2.3212 16.3552 1.03283 15.0132 0.699259C14.568 0.588654 14.24 0.515486 13.1011 0.503534C11.6394 0.488251 10.4024 0.508144 9.70191 0.861432C9.23585 1.09639 8.87627 1.61983 9.09539 1.64997C9.36618 1.68707 9.97921 1.8203 10.3043 2.27557C10.7242 2.86364 10.7095 4.18386 10.7095 4.18386C10.7095 4.18386 10.9508 7.82145 10.1462 8.27318C9.59405 8.5831 8.8365 7.95041 7.21019 5.0576C6.37704 3.57581 5.7478 1.93773 5.7478 1.93773C5.7478 1.93773 5.62663 1.63166 5.4102 1.46782C5.14771 1.26932 4.78092 1.2064 4.78092 1.2064L0.888011 1.23256C0.888011 1.23256 0.303719 1.24938 0.0890362 1.51093C-0.101968 1.7438 0.0737758 2.22489 0.0737758 2.22489C0.0737758 2.22489 3.1213 9.5648 6.57236 13.2637C9.73703 16.6555 13.33 16.4329 13.33 16.4329Z"
                                            fill="#3573FC"/>
                                    </svg>
                                </a>
                                <a href={tgShare} target="_blank" rel="noopener noreferrer"
                                   aria-label="Поделиться Telegram"
                                   className="rounded-full p-2 size-12 flex items-center justify-center transition-colors hover:bg-[#e8f7fd] active:bg-[#d3f0fb]">
                                    <svg width="23" height="20" viewBox="0 0 23 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M1.57478 8.62584C7.74753 5.81226 11.8568 3.94271 13.9203 3.0357C19.7932 0.46276 21.0278 0.0185104 21.8214 0C21.9978 0 22.3858 0.037021 22.6503 0.259146C22.8619 0.444249 22.9148 0.684885 22.9501 0.869989C22.9854 1.05509 23.0207 1.44381 22.9854 1.73998C22.6679 5.25695 21.2923 13.7902 20.5868 17.7144C20.287 19.3804 19.705 19.9357 19.1407 19.9912C17.9061 20.1023 16.9714 19.1397 15.7897 18.3253C13.9203 17.0481 12.8797 16.2521 11.0632 14.9934C8.96444 13.5496 10.3224 12.7537 11.5217 11.4579C11.8392 11.1247 17.2536 5.94183 17.3594 5.47907C17.377 5.42354 17.377 5.20142 17.2536 5.09035C17.1301 4.97929 16.9537 5.01631 16.8126 5.05333C16.6186 5.09035 13.6557 7.16352 7.88862 11.2543C7.04207 11.8652 6.2837 12.1613 5.59588 12.1428C4.83752 12.1243 3.39133 11.6986 2.29787 11.3283C0.975142 10.8841 -0.0830433 10.6435 0.00513875 9.86603C0.058048 9.4588 0.58714 9.05157 1.57478 8.62584Z"
                                              fill="#019AE3"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-20 relative self-stretch w-full flex-[0_0_auto]">
                            <div
                                className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                                {!!comments.length && <div
                                    className="flex w_[842px] items-start gap-3 relative flex_[0_0_auto] mr-[-26.00px]">
                                    <div
                                        className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking_[0] leading-8 whitespace-nowrap">Комментарии
                                    </div>
                                    <div
                                        className="mt-[-1.00px] font-medium text-2xl leading-8 relative w-fit [font-family:'Roboto',Helvetica] text-gray-40 tracking_[0] whitespace-nowrap">{comments.length}</div>
                                </div>}
                                <div className="flex w-full items-start gap-4 relative flex_[0_0_auto]">
                                    <div
                                        className="flex flex-col items_center justify_center relative flex-1 grow w-full">
                                        {comments.map((c) => (
                                            <div key={c.id}
                                                 className="flex flex-col items-start gap-2.5 self-stretch w-full">
                                                <div
                                                    className="flex items-center justify_center gap-4 relative self-stretch w-full flex_[0_0_auto]">
                                                    <div
                                                        className="relative w-11 h-11 flex justify-center items-center bg-[#3573fc14] rounded-[100px] overflow-hidden">
                                                        <div
                                                            className="absolute w-5 top_[11px] left-3 [font-family:'Roboto',Helvetica] font-medium text-blue-30 text-xl text-center tracking_[0] leading-5">{(c.authorName || 'Г').charAt(0).toUpperCase()}</div>
                                                    </div>
                                                    <div
                                                        className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-XL tracking_[0] leading-7">{c.authorName || 'Гость'}</div>
                                                    <div
                                                        className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-base tracking_[0] leading-6 whitespace-nowrap">{format(new Date(c.createdAt), 'dd MMMM yyyy HH:mm')}</div>
                                                </div>
                                                <div
                                                    className="flex flex-col items-start gap-4 pl-14 pr-0 py-0 relative self-stretch w-full flex_[0_0_auto]">
                                                    <div
                                                        className="flex flex-col items-start gap-4 p-6 relative self-stretch w-full flex_[0_0_auto] bg-[#f9fafd] rounded-3xl">
                                                        <p className="self-stretch font-normal text-gray-70 text-xl leading-7 relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking_[0]">{c.content}</p>
                                                        <div
                                                            className="flex items-center justify-between gap-4 relative self-stretch w-full flex_[0_0_auto]">
                                                            <button onClick={() => setReplyTo(c.id)}
                                                                    className="relative [font-family:'Inter',Helvetica] font-normal text-blue-50 text-base tracking_[0] leading-6">Ответить
                                                            </button>
                                                            <button onClick={() => handleLikeComment(c.id)}
                                                                    className="inline-flex items-center gap-2">
                                                                <img className="relative w-7 h-7" alt="Heart"
                                                                     src="https://c.animaapp.com/me09936stTuvMn/img/heart.svg"/>
                                                                <div
                                                                    className="font-medium text-base leading-6 w-fit [font-family:'Roboto',Helvetica] text-gray-40 tracking_[0] whitespace-nowrap">{c.likes ?? 0}</div>
                                                            </button>
                                                        </div>
                                                        {replyTo === c.id && (
                                                            <div className="w-full mt-2">
                                                                <div
                                                                    className="w_[818px] bg-white rounded-2xl border border-[#e3e4e7] p-3">
                                                                    <textarea className="w-full h-[90px] outline-none"
                                                                              placeholder="Ваш ответ" value={replyText}
                                                                              onChange={(e) => setReplyText(e.target.value)}/>
                                                                </div>
                                                                <div className="mt-2 flex gap-2">
                                                                    <button onClick={() => handleSendReply(c.id)}
                                                                            className="px-4 py-2 rounded-full bg-blue-50 text-white">Ответить
                                                                    </button>
                                                                    <button onClick={() => {
                                                                        setReplyTo(null);
                                                                        setReplyText('');
                                                                    }}
                                                                            className="px-4 py-2 rounded-full bg-[#e8eaf2] text-[#55607a]">Отмена
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {!!(c.replies && c.replies.length) && (
                                                            <div
                                                                className="mt-3 pl-4 border-l border-[#e8eaf2] flex flex-col gap-3">
                                                                {c.replies!.map((r) => (
                                                                    <div key={r.id} className="text-[#1c222f]">
                                                                        <div
                                                                            className="text-sm text-[#7a86a2]">{r.authorName || 'Гость'} · {format(new Date(r.createdAt), 'dd MMMM yyyy HH:mm')}</div>
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
                            <div className="w-full inline-flex flex-col items-start gap-8 relative flex_[0_0_auto]">
                                <div className="w-full inline-flex flex-col items-start gap-6 relative flex_[0_0_auto]">
                                    <div
                                        className="relative mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking_[0] leading-8">Ваш
                                        комментарий
                                    </div>
                                    <textarea
                                        className="relative flex w-full items-center justify-center gap-2.5 rounded-2xl bg-white px-5 py-4 border border-solid border-[#e3e4e7]"
                                        placeholder="Введите комментарий" value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}/>
                                    <div className="flex w-full h-[60px] items-start gap-6 relative">
                                        <div className="flex-1">
                                            <div
                                                className="relative flex w-full items-center justify-center gap-2.5 rounded-2xl bg-white px-5 py-4 border border-solid border-[#e3e4e7]">
                                                <input className="w-full outline-none"
                                                       placeholder="Ваше имя (необязательно)" value={authorName}
                                                       onChange={(e) => setAuthorName(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div
                                                className="relative flex w-full items-center justify-center gap-2.5 rounded-2xl bg-white px-5 py-4 border border-solid border-[#e3e4e7]">
                                                <input className="w-full outline-none" placeholder="example@mail.ru"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleSend}
                                        className="all-[unset] box-border flex w-full h-[60px] items-center justify-center gap-2.5 px-8 py-4 relative bg-blue-50 rounded-[100px]">
                                    <div
                                        className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-white text-xl tracking_[0] leading-7 whitespace-nowrap">Отправить
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="inline-flex flex-col items-start justify-center gap-4 relative flex_[0_0_auto]">
                        {related.map((rel) => (
                            <Link to={`/blog/${rel.documentId}`} key={rel.documentId}
                                  className="flex w_[352px] items-start p-3 relative flex_[0_0_auto] bg-[#f9fafd] rounded-[32px]">
                                <div className="relative w_[100px] h_[100px] rounded-3xl"
                                     style={{background: `url(${buildMediaUrl(rel.image?.url)}) 50% 50% / cover`}}/>
                                <div
                                    className="flex flex-col items-start justify-center gap-6 px-5 py-3 relative flex-1 self-stretch grow">
                                    <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#1c222f] text-base tracking_[0] leading-6">{rel.title}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};