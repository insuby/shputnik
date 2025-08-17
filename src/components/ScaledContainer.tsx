import { useLayoutEffect, useRef, useState } from 'react';
import type { FC, ReactNode } from 'react';

type ScaledContainerProps = {
  baseWidth?: number;
  children: ReactNode;
};

export const ScaledContainer: FC<ScaledContainerProps> = ({
  baseWidth = 1440,
  children,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    const recalc = () => {
      const vw = window.innerWidth;
      const nextScale = Math.min(1, vw / baseWidth);
      setScale(nextScale);
      if (contentRef.current) {
        const nextHeight = contentRef.current.offsetHeight * nextScale;
        setHeight(nextHeight);
      }
    };

    recalc();
    window.addEventListener('resize', recalc, { passive: true });
    return () => {
      window.removeEventListener('resize', recalc);
    };
  }, [baseWidth]);

  return (
    <div
      className="flex w-full justify-center overflow-x-hidden"
      style={{ height: height ? `${height}px` : undefined }}
    >
      <div
        ref={contentRef}
        style={{
          width: baseWidth,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
        {children}
      </div>
    </div>
  );
};
