import { motion } from 'framer-motion';

import { useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

// @ts-ignore
import slide1 from './images/slide1.png';
// @ts-ignore
import slide2 from './images/slide2.png';
// @ts-ignore
import slide3 from './images/slide3.png';

export const Works = () => {
  const { t } = useTranslation('development');
  const sliderRef = useRef<Slider>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  // Обработка свайпов для правого блока
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrev();
    }
  }, [touchStart, touchEnd]);

  // Обработка мыши для правого блока
  const [mouseStart, setMouseStart] = useState<number | null>(null);
  const [mouseEnd, setMouseEnd] = useState<number | null>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setMouseEnd(null);
    setMouseStart(e.clientX);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (mouseStart !== null) {
      setMouseEnd(e.clientX);
    }
  }, [mouseStart]);

  const handleMouseUp = useCallback(() => {
    if (mouseStart !== null && mouseEnd !== null) {
      const distance = mouseStart - mouseEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isLeftSwipe) {
        goToNext();
      }
      if (isRightSwipe) {
        goToPrev();
      }
    }
    setMouseStart(null);
    setMouseEnd(null);
  }, [mouseStart, mouseEnd]);

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch lg:gap-12">
      <div className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-5xl lg:leading-[60px]">
        {t('works.title')}
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col  items-center gap-6 rounded-3xl lg:!flex-row xl:h-[640px]">
        <div className="relative flex-1 grow self-stretch overflow-hidden rounded-[32px] ">
          <Slider
            ref={sliderRef}
            dots={false}
            infinite={true}
            speed={500}
            centerMode={true}
            centerPadding="0px"
            arrows={false}
            className="size-full"
            afterChange={(current) => setCurrentSlideIndex(current)}
          >
            {[slide1, slide2, slide3].map((item, i) => (
              <div className="size-full overflow-hidden lg:px-3">
                <img
                  key={i}
                  className="size-full object-cover"
                  alt="Image"
                  src={item}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div 
          className="relative flex h-full flex-1 grow flex-col items-start justify-between overflow-hidden rounded-3xl px-3 lg:py-12 lg:pl-12 lg:pr-[68px] cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {currentSlideIndex + 1 === 3 && (
            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-7">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="relative mt-[-1.00px] w-full text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:w-[480px]"
              >
                {t('works.vpn.title')}
              </motion.p>
              <p className="relative w-full text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica] lg:w-[560px]">
                {t('works.vpn.description')}
              </p>
            </div>
          )}
          {currentSlideIndex + 1 === 1 && (
            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-7">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="relative mt-[-1.00px] w-full text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:w-[480px]"
              >
                {t('works.pax.title')}
              </motion.div>
              <p className="relative w-full text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica] lg:w-[560px]">
                {t('works.pax.description')}
              </p>
            </div>
          )}
          {currentSlideIndex + 1 === 2 && (
            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-7">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="relative mt-[-1.00px] w-full text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:w-[480px]"
              >
                {t('works.crypto.title')}
              </motion.p>
              <p className="relative w-full text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica] lg:w-[560px]">
                {t('works.crypto.description')}
              </p>
            </div>
          )}

          <div className="bottom-[-80px] mt-5 flex w-full  flex-[0_0_auto] items-center justify-between self-stretch pr-10 lg:mt-20">
            <div className="flex w-[120px] items-center justify-between rounded-full bg-[#f9fafd] p-1">
              <button
                onClick={goToPrev}
                className="active:bg-white/90 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-200"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 12H3.75"
                    stroke="#55607A"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 5.25L3.75 12L10.5 18.75"
                    stroke="#55607A"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="active:bg-white/90 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-200"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 12H20.25"
                    stroke="#55607A"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 5.25L20.25 12L13.5 18.75"
                    stroke="#55607A"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-3">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                {currentSlideIndex + 1}
              </div>

              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                /
              </div>

              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
