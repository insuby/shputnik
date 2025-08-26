import { motion } from 'framer-motion';

import { useRef, useState } from 'react';
import Slider from 'react-slick';

import slide1 from './images/slide1.png';
import slide2 from './images/slide2.png';
import slide3 from './images/slide3.png';

export const Works = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch md:gap-12">
      <div className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-5xl md:leading-[60px]">
        Примеры работ
      </div>

      <div className="relative flex w-full flex-[0_0_auto]  flex-col items-center gap-6 rounded-3xl md:h-[648px] md:w-[1376px] md:!flex-row">
        <div className="relative flex-1 grow self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd]">
          <Slider
            ref={sliderRef}
            dots={false}
            infinite={true}
            speed={500}
            centerMode={true}
            centerPadding="0px"
            arrows={false}
            className="p2p-slider"
            afterChange={(current) => setCurrentSlideIndex(current)}
          >
            <div className="overflow-hidden md:px-3">
              <div className="relative h-[350px] w-full bg-[url(/img/development/vector-1-3.svg)] bg-[100%_100%] md:left-[-231px] md:top-[-98px] md:h-[1035px]">
                <img
                  className="absolute w-full md:left-[291px] md:top-[158px] md:h-[588px]"
                  alt="Image"
                  src={slide1}
                />
              </div>
            </div>
            <div className="overflow-hidden md:px-3">
              <div className="relative h-[350px] w-full bg-[url(/img/development/vector-1-3.svg)] bg-[100%_100%] md:left-[-231px] md:top-[-98px] md:h-[1035px]">
                <img
                  className="absolute w-full md:left-[291px] md:top-[158px] md:h-[588px]"
                  alt="Image"
                  src={slide2}
                />
              </div>
            </div>
            <div className="overflow-hidden md:px-3">
              <div className="relative h-[350px] w-full bg-[url(/img/development/vector-1-3.svg)] bg-[100%_100%] md:left-[-231px] md:top-[-98px] md:h-[1035px]">
                <img
                  className="absolute w-full md:left-[291px] md:top-[158px] md:h-[588px]"
                  alt="Image"
                  src={slide3}
                />
              </div>
            </div>
          </Slider>
        </div>

        <div className="relative flex h-[648px] flex-1 grow flex-col items-start justify-between overflow-hidden rounded-3xl px-3 md:py-12 md:pl-12 md:pr-[68px]">
          {currentSlideIndex + 1 === 3 && (
            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-7">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="relative mt-[-1.00px] w-full text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[480px]"
              >
                VPN-сервис
              </motion.p>
              <p className="relativew-full text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica] md:w-[560px]">
                Создали мультиплатформенное VPN-решение с упором на
                конфиденциальность, скорость и стабильность подключения.
                Интеграция с крипто-оплатами, управление подписками, выбор стран
                и автоматическое подключение — всё в удобном мобильном
                приложении.
              </p>
            </div>
          )}
          {currentSlideIndex + 1 === 1 && (
            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-7">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="relative mt-[-1.00px] w-full text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[480px]"
              >
                Pax
              </motion.div>
              <p className="relativew-full text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica] md:w-[560px]">
                Платформа Pax помогает пациентам, врачам и аптекам соблюдать
                назначенное лечение. Мы разработали, протестировали и внедрили
                цифровую систему с персонализированной фасовкой препаратов,
                логированием приёма и связкой с ЛК врача и пациента.
              </p>
            </div>
          )}
          {currentSlideIndex + 1 === 2 && (
            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-7">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="relative mt-[-1.00px] w-full text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[480px]"
              >
                Ascro
              </motion.p>
              <p className="relativew-full text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica] md:w-[560px]">
                Децентрализованная платформа для безопасных сделок с
                крипто-активами. Реализовали Web3-приложение с подключением
                через TronLink, созданием сделок между пользователями и
                гарантами, механизмом депонирования и логикой споров.
              </p>
            </div>
          )}

          <div className="bottom-[-80px] mt-5 flex w-full  flex-[0_0_auto] items-center justify-between self-stretch pr-10 md:mt-20">
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
