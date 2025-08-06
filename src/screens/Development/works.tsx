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
    <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
      <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center leading-[60px] relative tracking-[0]">
        Примеры работ
      </div>

      <div className="flex w-[1376px] h-[648px] items-center gap-6 relative flex-[0_0_auto] rounded-3xl">
        <div className="relative flex-1 self-stretch grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
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
            <div className="px-3 overflow-hidden">
              <div className="relative w-full h-[1035px] top-[-98px] left-[-231px] bg-[url(https://c.animaapp.com/mdzmydbo2FidHJ/img/vector-1-3.svg)] bg-[100%_100%]">
                <img
                  className="absolute w-full h-[588px] top-[158px] left-[291px]"
                  alt="Image"
                  src={slide1}
                />
              </div>
            </div>
            <div className="px-3 overflow-hidden">
              <div className="relative w-full h-[1035px] top-[-98px] left-[-231px] bg-[url(https://c.animaapp.com/mdzmydbo2FidHJ/img/vector-1-3.svg)] bg-[100%_100%]">
                <img
                  className="absolute w-full h-[588px] top-[158px] left-[291px]"
                  alt="Image"
                  src={slide2}
                />
              </div>
            </div>
            <div className="px-3 overflow-hidden">
              <div className="relative w-full h-[1035px] top-[-98px] left-[-231px] bg-[url(https://c.animaapp.com/mdzmydbo2FidHJ/img/vector-1-3.svg)] bg-[100%_100%]">
                <img
                  className="absolute w-full h-[588px] top-[158px] left-[291px]"
                  alt="Image"
                  src={slide3}
                />
              </div>
            </div>
          </Slider>
        </div>

        <div className="flex flex-col h-[648px] items-start justify-between pl-12 pr-[68px] py-12 relative flex-1 grow rounded-3xl overflow-hidden">
          {currentSlideIndex + 1 === 3 && (
            <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="w-[480px] mt-[-1.00px] font-medium text-gray-90 text-[40px] leading-[48px] relative [font-family:'Roboto',Helvetica] tracking-[0]"
              >
                VPN-сервис
              </motion.p>
              <p className="w-[560px] font-normal text-[#9ea7bb] text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                Создали мультиплатформенное VPN-решение с упором на
                конфиденциальность, скорость и стабильность подключения.
                Интеграция с крипто-оплатами, управление подписками, выбор стран
                и автоматическое подключение — всё в удобном мобильном
                приложении.
              </p>
            </div>
          )}
          {currentSlideIndex + 1 === 1 && (
            <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="w-[480px] mt-[-1.00px] font-medium text-gray-90 text-[40px] leading-[48px] relative [font-family:'Roboto',Helvetica] tracking-[0]"
              >
                Pax
              </motion.div>
              <p className="w-[560px] font-normal text-[#9ea7bb] text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                Платформа Pax помогает пациентам, врачам и аптекам соблюдать
                назначенное лечение. Мы разработали, протестировали и внедрили
                цифровую систему с персонализированной фасовкой препаратов,
                логированием приёма и связкой с ЛК врача и пациента.
              </p>
            </div>
          )}
          {currentSlideIndex + 1 === 2 && (
            <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="w-[480px] mt-[-1.00px] font-medium text-gray-90 text-[40px] leading-[48px] relative [font-family:'Roboto',Helvetica] tracking-[0]"
              >
                Ascro
              </motion.p>
              <p className="w-[560px] font-normal text-[#9ea7bb] text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                Децентрализованная платформа для безопасных сделок с
                крипто-активами. Реализовали Web3-приложение с подключением
                через TronLink, созданием сделок между пользователями и
                гарантами, механизмом депонирования и логикой споров.
              </p>
            </div>
          )}

          <div className="flex items-center justify-between  self-stretch w-full flex-[0_0_auto] mt-20 bottom-[-80px] pr-10">
            <div className="w-[120px] p-1 flex items-center justify-between bg-[#f9fafd] rounded-full">
              <button
                onClick={goToPrev}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center active:bg-white/90 transition-colors duration-200 cursor-pointer"
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
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 5.25L3.75 12L10.5 18.75"
                    stroke="#55607A"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center active:bg-white/90 transition-colors duration-200 cursor-pointer"
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
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 5.25L20.25 12L13.5 18.75"
                    stroke="#55607A"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
              <div className="w-fit [font-family:'Roboto',Helvetica] text-gray-90 text-xl leading-7 whitespace-nowrap relative mt-[-1.00px] font-normal tracking-[0]">
                {currentSlideIndex + 1}
              </div>

              <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 whitespace-nowrap relative tracking-[0]">
                /
              </div>

              <div className="w-fit [font-family:'Roboto',Helvetica] text-[#9ea7bb] text-xl leading-7 whitespace-nowrap relative mt-[-1.00px] font-normal tracking-[0]">
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
