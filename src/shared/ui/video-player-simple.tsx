import { useEffect, useRef, useState } from 'react';

import { isMobile } from 'shared/lib/is-mobile.ts';

type VideoPlayerSimpleProps = {
  videoSrc: string;
  poster?: string;
  className?: string;
  width?: number;
  height?: number;
};

export const VideoPlayerSimple = ({
  videoSrc,
  poster,
  className = '',
  width = 676,
  height = 404,
}: VideoPlayerSimpleProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Принудительная загрузка метаданных для iOS
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[32px] bg-[#F9FAFD] ${className}`}
      style={!isMobile ? { width, height } : {}}
    >
        <video
          ref={videoRef}
          width={width}
          height={height}
          className="size-full object-cover"
          poster={poster}
          preload="metadata"
          playsInline
          webkit-playsinline="true"
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={videoSrc} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>

      {!isPlaying && <div className="absolute inset-0 bg-black/20" />}

      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={isPlaying ? handlePause : handlePlay}
          className="bg-white/90 flex size-16 items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:bg-white"
        >
          {isPlaying ? (
            <div className="flex gap-1">
              <div className="h-8 w-1.5 rounded-sm bg-gradient-to-b from-[#1C222F] to-[#223562]" />
              <div className="h-8 w-1.5 rounded-sm bg-gradient-to-b from-[#1C222F] to-[#223562]" />
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="26"
              viewBox="0 0 22 26"
              className="ml-1"
              fill="none"
            >
              <path
                d="M22 13C22.0008 13.3395 21.9138 13.6735 21.7473 13.9694C21.5808 14.2654 21.3406 14.5132 21.05 14.6888L3.04 25.7063C2.73636 25.8922 2.38858 25.9937 2.0326 26.0003C1.67661 26.0069 1.32532 25.9183 1.015 25.7438C0.707637 25.5719 0.451595 25.3213 0.273205 25.0177C0.0948143 24.7141 0.000513572 24.3684 0 24.0163V1.98376C0.000513572 1.63162 0.0948143 1.28597 0.273205 0.982353C0.451595 0.678737 0.707637 0.428117 1.015 0.256264C1.32532 0.0816992 1.67661 -0.00685976 2.0326 -0.000267419C2.38858 0.00632493 2.73636 0.10783 3.04 0.293764L21.05 11.3113C21.3406 11.4869 21.5808 11.7347 21.7473 12.0306C21.9138 12.3265 22.0008 12.6605 22 13Z"
                fill="url(#paint0_linear_9604_11545)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9604_11545"
                  x1="-0.452941"
                  y1="32.1759"
                  x2="26.2793"
                  y2="30.8215"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1C222F" />
                  <stop offset="1" stopColor="#223562" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
