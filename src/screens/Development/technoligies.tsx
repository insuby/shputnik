import { useRef, useState } from 'react';
import Slider from 'react-slick';

export const Technoligies = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-centergap-12 self-stretch">
      <div className="relative flex w-full md:w-[656px] flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
        <div className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-5xl">
          Технологии разработки
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] items-center gap-6 rounded-3xl md:w-[1376px] ">
        <div className="w-full md:w-1/2">
          <Slider
            ref={sliderRef}
            dots={false}
            infinite={true}
            speed={500}
            centerMode={true}
            centerPadding="0px"
            arrows={false}
            afterChange={(current) => setCurrentSlideIndex(current)}
          >
            <div className="px-3">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-8">
                <div className="relative flex w-full md:w-[560px] flex-[0_0_auto] flex-col items-center justify-center gap-3">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Figma
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    Проектируем интерфейсы и интерактивные прототипы в Figma —
                    для согласования пользовательских сценариев на раннем этапе
                    и удобной демонстрации заказчику.
                  </p>
                </div>
                <div className="relative flex w-full md:w-[560px] flex-[0_0_auto] flex-col items-center justify-center gap-3">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    React.js
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    Создаём быстрые и масштабируемые веб-интерфейсы на React.js
                    — с чистыми компонентами и оптимизированной архитектурой под
                    высокие нагрузки.
                  </p>
                </div>
                <div className="relative flex w-full md:w-[560px] flex-[0_0_auto] flex-col items-center justify-center gap-3">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    React Native
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    Разрабатываем кроссплатформенные мобильные приложения с
                    нативным опытом пользователя — на React Native для Android и
                    iOS одновременно.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-3">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-8">
                <div className="relative flex w-full md:w-[560px] flex-[0_0_auto] flex-col items-center justify-center gap-3">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Java
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    Используем Java для построения надёжной backend-архитектуры:
                    от API и микросервисов до работы с высоконагруженными базами
                    данных и интеграциями.
                  </p>
                </div>
                <div className="relative flex w-full md:w-[560px] flex-[0_0_auto] flex-col items-center justify-center gap-3">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Python
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    На Python реализуем аналитические модули, обработку данных и
                    интеграции с ML/AI — особенно в задачах скоринга,
                    риск-аналитики и автоматизации процессов.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-3">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-8">
                <div className="relative flex w-full md:w-[560px] flex-[0_0_auto] flex-col items-center justify-center gap-3">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Blockchain / Web3
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    Реализуем смарт-контракты, NFT-механики, DAO и другие
                    децентрализованные решения. Работаем с Ethereum, BNB Chain,
                    Polygon, Solana и другими экосистемами.
                  </p>
                </div>
                <div className="relative flex w-full md:w-[560px] flex-[0_0_auto] flex-col items-center justify-center gap-3">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Криптопродукты
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    Разрабатываем криптокошельки, dApps, платформы для обмена и
                    управления цифровыми активами. Интегрируем KYC/AML,
                    поддержку токенов, мультисиг и DeFi-протоколы.
                  </p>
                </div>
              </div>
            </div>
          </Slider>

          <div className="bottom-[-80px] mt-20 flex  w-full flex-[0_0_auto] items-center justify-between self-stretch pr-10">
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

        <img
          className="relative hidden flex-1 grow self-stretch md:flex"
          alt="Frame"
          src="/img/development/frame-21.svg"
        />
      </div>
    </div>
  );
};
