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
                                <a href={vkShare} target="_blank" rel="noopener noreferrer"
                                   className="px-3 py-1 rounded-full bg-[#f3f4fa] text-[#55607a]">VK</a>
                                <a href={tgShare} target="_blank" rel="noopener noreferrer"
                                   className="px-3 py-1 rounded-full bg-[#f3f4fa] text-[#55607a]">TG</a>
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