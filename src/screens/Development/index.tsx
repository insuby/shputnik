import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import Slider from 'react-slick';

import { HeroButtons } from '../../components/ui/hero-buttons.tsx';
import { useFeedbackForm } from '../../widgets/feedback-form';
import { Feedback } from '../../widgets/feedback.tsx';
import { Trust } from '../../widgets/trust.tsx';
// @ts-ignore
import vector from './images/Vector 1.png';
// @ts-ignore
import code from './images/code.png';
import { Technoligies } from './technoligies.tsx';
import { Works } from './works.tsx';
import {isMobile} from "../../App.tsx";

export const Development = () => {
  const sliderRef = useRef<Slider>(null);
  const { setIsOpen } = useFeedbackForm();
  const ref15 = useRef<HTMLDivElement>(null);
  const ref16 = useRef<HTMLDivElement>(null);

  const inView15 = useInView(ref15, { once: true, margin: '-100px' });
  const inView16 = useInView(ref16, { once: true, margin: '-100px' });

  const onClick = () => {
    setIsOpen(true);
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[88px] pb-[136px] md:w-[1440px] md:gap-[136px] md:px-8 md:md:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-8 self-stretch">
        <div className=" relative -mt-7 flex w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-4 py-10 md:mt-0 md:h-[628px] md:p-12">
          <img
            className="absolute -top-16 left-[430px] h-[842px] w-full md:w-[954px]"
            alt="Vector"
            src="/img/development/vector-1-5.svg"
          />

          <HeroButtons>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-8  md:gap-12 md:w-[624px]">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 md:inline-flex">
                <motion.div
                  ref={ref15}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView15 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[44px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica] md:w-[624px] md:text-left md:text-6xl md:leading-[68px]"
                >
                  Разработка
                  <br />
                  на заказ
                </motion.div>

                <motion.p
                  ref={ref16}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView16 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative w-full text-center text-xl font-normal leading-7 tracking-normal text-[#ffffffcc] [font-family:'Roboto',Helvetica] md:w-[624px] md:text-left"
                >
                  Создаем и развиваем проекты для финансовых проектов,
                  blockchain-проектов, медицинских и маркетинговых проектов.
                </motion.p>
              </div>
            </div>
          </HeroButtons>

          <img
            className="absolute left-[1053px] top-44 h-[568px] w-full md:w-[619px]"
            alt="Vector"
            src={vector}
          />

          <div className="absolute left-[727px] top-[188px] h-[280px] w-full md:w-[464px] overflow-hidden rounded-3xl bg-[#ffffff]">
            <div className="absolute left-0 top-0 h-10w-full md:w-[528px] bg-[#f9fafd]">
              <div className="absolute left-[15px] top-[15px] size-2.5 rounded-[5px] bg-[#e64850]" />

              <div className="absolute left-[31px] top-[15px] size-2.5 rounded-[5px] bg-[#fbab00]" />

              <div className="absolute left-[47px] top-[15px] size-2.5 rounded-[5px] bg-[#00cb82]" />
            </div>

            <div className="absolute left-0 top-12 flex w-full md:w-[464px] flex-col items-start">
              <img className="size-full" alt="Vector" src={code} />
            </div>
          </div>
        </div>
        <div className="absolute left-[590px] top-[-41px] size-[738px]">
          <div className="relative -left-px -top-px size-[740px] rounded-[370px] border-2 border-solid border-[#ffffff0a]">
            <div className="absolute left-[82px] top-[82px] size-[572px] rounded-[286px] border-2 border-solid border-[#ffffff] opacity-[0.08]" />

            <div className="absolute left-[178px] top-[178px] size-[380px] rounded-[190px] border-2 border-solid border-[#ffffff] opacity-[0.12]" />

            <div className="absolute left-[221px] top-[536px] inline-flex items-center justify-center gap-2 rounded-[100px] bg-red-40 px-4 py-2 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                FinTech
              </div>
            </div>

            <div className="absolute left-[232px] top-32 inline-flex items-center justify-center gap-2 rounded-[100px] bg-green-50 px-4 py-2 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                Blockchain
              </div>
            </div>

            <div className="absolute left-[469px] top-[569px] inline-flex items-center justify-center gap-2 rounded-[100px] bg-blue-50 px-4 py-2 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                MedTech
              </div>
            </div>

            <div className="absolute left-[577px] top-[341px] inline-flex items-center justify-center gap-2 rounded-[100px] bg-violet-50 px-4 py-2 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                MarTech
              </div>
            </div>

            <div className="absolute left-[34px] top-[276px] inline-flex items-center justify-center gap-2 rounded-[100px] bg-yellow-50 px-4 py-2 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                Enterprise
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-8 md:gap-12 self-stretch">
        <div className="relative flex w-full md:w-[656px] flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
          <div className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] md:leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-5xl">
            Разработка&nbsp;&nbsp;проектов
          </div>
        </div>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 md:inline-flex">
          <div className="relative grid w-full flex-[0_0_auto] grid-cols-1 items-start gap-6 md:flex md:w-[1376px]">
            <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10">
              <img
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/development/frame-20-3.svg"
              />

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Анализ
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  Досконально анализируем и прорабатываем требования перед
                  началом работ. Разрабатываем приложение в соответствии с
                  вашими бизнес-целями.
                </p>
              </div>
            </div>

            <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10">
              <img
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/development/frame-18-3.svg"
              />

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  MVP
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  Разработаем МѴР в кратчайшие сроки, чтобы вы начали
                  тестировать бизнес-модель как можно раньше.
                </p>
              </div>
            </div>

            <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10">
              <img
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/development/frame-19-2.svg"
              />

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Масштабируемость
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  Закладываем возможность масштабирования на раннем этапе
                  создания системы. Развивайте продукт без кардинальных
                  переработок.
                </p>
              </div>
            </div>
          </div>

          <div className="relative grid w-full flex-[0_0_auto] grid-cols-1 items-start gap-6 md:flex md:w-[1376px]">
            <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10">
              <img
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/development/frame-19-1.svg"
              />

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Кроссплатформенность
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  Приложение работает на всех популярных мобильных платформах.
                </p>
              </div>
            </div>

            <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10">
              <img
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/development/frame-18-2.svg"
              />

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Высокая нагрузка
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  Ваш сервис выдержит тысячи одновременных обращений
                  пользователей.
                </p>
              </div>
            </div>

            <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10">
              <img
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/development/frame-20-1.svg"
              />

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Дизайн
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  Интерфейс соответствует <br />
                  современным трендам мобильной разработки, а также гайдлайнам
                  платформ Android и iOS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[568px] w-full md:w-[1376px]">
        <div className="absolute left-0 top-0 flex w-full items-center gap-[68px] md:w-[1472px]">
          <div className="relative flex  w-full flex-col items-start justify-center gap-8 md:w-[496px]">
            <p className="relative mt-[-1.00px] self-stretch text-[36px] font-medium leading-[44px] md:leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-5xl">
              Разработаем платформы и решения для вашего бизнеса
            </p>

            <button
              onClick={onClick}
              className="all-[unset] box-border inline-flex cursor-pointer items-center justify-center  gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 transition-opacity hover:opacity-90"
            >
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                попробовать
              </div>
            </button>
          </div>

          <div className="w-full md:w-[915px]">
            <Slider
              ref={sliderRef}
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={isMobile ? 1 : 2}
              slidesToScroll={1}
              centerMode={true}
              centerPadding="0px"
              arrows={false}

            >
              <div className="px-3">
                <div className="relative flex h-[480px] w-full flex-col items-center gap-8  md:gap-12 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-12 md:w-[443px]">
                  <img
                    className="absolute left-0 top-0 h-[406px] w-full md:w-[443px]"
                    alt="Vector"
                    src="/img/development/vector-1-5-1.svg"
                  />

                  <div className="relative w-full flex-1 grow self-stretch">
                    <div className="relative -left-12 -top-12w-full md:w-[443px]">
                      <div className="absolute left-[140px] top-[46px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] py-2 pl-2 pr-5">
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="/img/development/frame-19-3.svg"
                        />

                        <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          landing page
                        </div>
                      </div>

                      <img
                        className="absolute left-0 top-0 h-[349px] w-full md:w-[443px]"
                        alt="Vector"
                        src="/img/development/vector-4-3.svg"
                      />

                      <div className="absolute left-[58px] top-[92px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] py-2 pl-2 pr-5">
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="/img/development/frame-20.svg"
                        />

                        <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          corporate portal
                        </div>
                      </div>

                      <img
                        className="absolute left-0 top-0 h-[349px] w-full md:w-[443px]"
                        alt="Vector"
                        src="/img/development/vector-5.svg"
                      />

                      <div className="absolute left-32 top-[138px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] py-2 pl-2 pr-5">
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="/img/development/frame-20-2.svg"
                        />

                        <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          multifunctional system
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Enterprise
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Создаем системы под любые корпоративные задачи.
                      Интегрируем сторонние сервисы.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-3">
                <div className="relative flex h-[480px] w-full md:w-[442px] flex-col items-center gap-8  md:gap-12 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-12">
                  <img
                    className="absolute left-0 top-0 h-[406px] w-full md:w-[377px]"
                    alt="Vector"
                    src="/img/development/vector-1.svg"
                  />

                  <div className="relative w-full flex-1 grow self-stretch">
                    <div className="absolute left-[23px] top-1 inline-flex items-center gap-2.5 rounded-[32px] bg-[#ffffff] p-3">
                      <div className="relative size-[120px]">
                        <div className="relative size-[120px]">
                          <div className="absolute left-0 top-0 size-[120px]">
                            <img
                              className="absolute left-0 top-0 h-[120px] w-full md:w-[57px]"
                              alt="Subtract"
                              src="/img/development/subtract-2.svg"
                            />

                            <img
                              className="absolute left-[63px] top-[49px] h-[71px] w-full md:w-[57px]"
                              alt="Subtract"
                              src="/img/development/subtract.svg"
                            />

                            <div className="absolute left-[22px] top-[37px] inline-flex flex-col items-center">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                                Вся сумма
                              </div>

                              <div className="relative -mt-0.5 w-fit whitespace-nowrap text-center text-xl font-medium leading-8 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                                88,000₽
                              </div>
                            </div>
                          </div>

                          <img
                            className="absolute left-[103px] top-[22px] h-[22px] w-3.5"
                            alt="Subtract"
                            src="/img/development/subtract-1.svg"
                          />

                          <img
                            className="absolute left-[63px] top-0 h-5w-full md:w-[39px]"
                            alt="Subtract"
                            src="/img/development/subtract-3.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <img
                      className="absolute left-[179px] top-1 size-36"
                      alt="Frame"
                      src="/img/development/frame-31.svg"
                    />
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      FinTech
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Создаём и развиваем финансовые системы: от цифровых
                      платёжных решений и CRM для банков и МФО — до
                      аналитических платформ и scoring-сервисов.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-3">
                <div className="relative flex h-[480px] w-full flex-col items-center gap-8  md:gap-12 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-12 md:w-[443px]">
                  <img
                    className="absolute left-0 top-0 h-[406px] w-full md:w-[442px]"
                    alt="Vector"
                    src="/img/development/vector-1-16.svg"
                  />

                  <img
                    className="relative w-full flex-1 grow self-stretch"
                    alt="Frame"
                    src="/img/development/frame-1948755086-4.svg"
                  />

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Blockchain
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Разрабатываем децентрализованные приложения,
                      смарт-контракты и платформы для управления цифровыми
                      активами. Интегрируем Web3 и обеспечиваем безопасность
                      данных.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-3">
                <div className="relative flex h-[480px] w-full flex-col items-center gap-8  md:gap-12 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-12 md:w-[443px]">
                  <img
                    className="absolute left-0 top-0 h-[406px] w-full md:w-[442px]"
                    alt="Vector"
                    src="/img/development/vector-1-12.svg"
                  />

                  <div className="relative w-full flex-1 grow self-stretch">
                    <div className="relative -left-12 -top-12w-full md:w-[442px]">
                      <div className="absolute left-[77px] top-[55px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] py-2 pl-2 pr-5">
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="/img/development/frame-19-5.svg"
                        />

                        <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          Выбор препаратов
                        </div>
                      </div>

                      <img
                        className="absolute left-0 top-0 h-[339px] w-full md:w-[442px]"
                        alt="Vector"
                        src="/img/development/vector-4-2.svg"
                      />

                      <div className="absolute left-[119px] top-[101px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] py-2 pl-2 pr-5">
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="/img/development/frame-19-4.svg"
                        />

                        <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          Оформление заказа
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      MedTech
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Разрабатываем медицинские информационные системы, ЛК
                      пациента, платформы для телемедицины и учёта истории
                      лечения. Интегрируемся с ЕГИСЗ, БМИС и страховыми
                      сервисами.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-3">
                <div className="relative flex h-[480px] w-full flex-col items-center gap-8  md:gap-12 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-12 md:w-[443px]">
                  <img
                    className="absolute left-0 top-0 h-[406px] w-full md:w-[442px]"
                    alt="Vector"
                    src="/img/development/vector-1-15.svg"
                  />

                  <img
                    className="relative w-full flex-1 grow self-stretch"
                    alt="Frame"
                    src="/img/development/frame-1948755086-1.svg"
                  />

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      MarTech
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Создаём решения для автоматизации маркетинга: CDP, системы
                      аналитики, платформы управления кампаниями и
                      персонализации коммуникаций.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="absolute left-[725px] top-[512px] hidden h-14w-full md:w-[120px] items-center justify-between rounded-full bg-[#f9fafd] p-1 md:flex">
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
      </div>

      <Feedback />
      <Technoligies />

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-8 md:gap-12 self-stretch">
        <div className="relative flex w-full md:w-[656px] flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
          <div className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] md:leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-5xl">
            С нами комфортно
          </div>
        </div>
        <div className="relative grid w-full flex-[0_0_auto] grid-cols-1 items-start gap-6 md:flex md:w-[1376px]">
          <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10">
            <img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/development/frame-18-1.svg"
            />
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                План работ
              </div>
              <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                Составляем и показываем детализированный план работ по
                разработке на старте проекта. Наши клиенты знают, за что платят.
              </p>
            </div>
          </div>
          <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10">
            <img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/development/frame-18.svg"
            />
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                Команда
              </div>
              <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                Сформируем полноценную команду для разработки системы. Командой
                руководит опытный проектный менеджер.
              </p>
            </div>
          </div>
          <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10">
            <img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/development/frame-19.svg"
            />
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                Надежный партнер
              </div>
              <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                Не бросаем проект на полпути. Сопровождаем и поддерживаем на
                протяжении всего жизненного цикла.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Works />
      <Trust />
    </div>
  );
};
