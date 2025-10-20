import { isMobile } from 'shared/lib/is-mobile.ts';

// Поддерживаем обратную совместимость: можно передать src или videoSrc
export type VideoIframeProps = {
  src?: string; // предпочтительно использовать этот проп
  videoSrc?: string; // старый проп, если передан — используем как src
  title?: string;
  className?: string;
  width?: number;
  height?: number;
};

export const VideoPlayerSimple = ({
  src,
  videoSrc,
  title = 'Видео',
  className = '',
  width = 676,
  height = 404,
}: VideoIframeProps) => {
  const iframeSrc = src ?? videoSrc ?? 'https://rutube.ru/play/embed/e1b7c43b3c4a047149a5f034117953cb/';

  return (
    <div
      className={`relative overflow-hidden rounded-[32px] bg-[#F9FAFD] ${className}`}
      style={!isMobile ? { width, height } : {}}
    >
      <iframe
        title={title}
        src={iframeSrc}
        className="size-full"
        frameBorder={0}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};
