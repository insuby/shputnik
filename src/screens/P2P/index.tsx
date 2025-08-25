import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import Slider from 'react-slick';

import { Check10 } from '../../components/ui/check10.tsx';
import { Graph } from '../../components/ui/graph.tsx';
import { HeroButtons } from '../../components/ui/hero-buttons.tsx';
import { Advantages } from '../../widgets/advantages.tsx';
import { useFeedbackForm } from '../../widgets/feedback-form';
import { Feedback } from '../../widgets/feedback.tsx';
import { Integrations } from '../../widgets/integrations.tsx';
import { RoleStructure } from '../../widgets/role-structure.tsx';
import { Trust } from '../../widgets/trust.tsx';
import { Zaim } from '../../widgets/zaim.tsx';
import {isMobile} from "../../App.tsx";

export const P2P = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);
  const ref12 = useRef(null);
  const ref13 = useRef(null);
  const ref14 = useRef(null);
  const ref15 = useRef(null);
  const ref16 = useRef(null);
  const ref17 = useRef(null);
  const ref18 = useRef(null);
  const ref19 = useRef(null);
  const ref20 = useRef(null);
  const sliderRef = useRef<Slider>(null);

  const inView1 = useInView(ref1, { once: true, margin: '-100px' });
  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView4 = useInView(ref4, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref6, { once: true, margin: '-100px' });
  const inView7 = useInView(ref7, { once: true, margin: '-100px' });
  const inView8 = useInView(ref8, { once: true, margin: '-100px' });
  const inView9 = useInView(ref9, { once: true, margin: '-100px' });
  const inView10 = useInView(ref10, { once: true, margin: '-100px' });
  const inView11 = useInView(ref11, { once: true, margin: '-100px' });
  const inView12 = useInView(ref12, { once: true, margin: '-100px' });
  const inView13 = useInView(ref13, { once: true, margin: '-100px' });
  const inView14 = useInView(ref14, { once: true, margin: '-100px' });
  const inView15 = useInView(ref15, { once: true, margin: '-100px' });
  const inView16 = useInView(ref16, { once: true, margin: '-100px' });
  const inView17 = useInView(ref17, { once: true, margin: '-100px' });
  const inView18 = useInView(ref18, { once: true, margin: '-100px' });
  const inView19 = useInView(ref19, { once: true, margin: '-100px' });
  const inView20 = useInView(ref20, { once: true, margin: '-100px' });

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const { setIsOpen } = useFeedbackForm();

  const handleTryClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative flex w-full md:w-[1440px] flex-[0_0_auto] flex-col items-center gap-[88px] md:gap-[136px] p-0 md:px-8 pb-[136px] md:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
        <div className="relative flex w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-green-60 p-7 md:p-12">
          <img
            className="absolute left-[441px] top-[-140px] h-[1060px] w-full md:w-[1108px]"
            alt="Vector"
            src="/img/p2p/vector-1-5.svg"
          />

          <HeroButtons>
            <div className="relative flex w-full md:w-[624px] flex-[0_0_auto] flex-col items-start justify-center gap-7  md:gap-12">
              <div className="relative w-full flex md:inline-flex flex-[0_0_auto] flex-col items-start gap-6">
                <motion.div
                  ref={ref1}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                  className="relative text-center md:text-left  mt-[-1.00px] w-full md:w-[624px] text-[36px] md:text-6xl font-medium leading-[44px] md:leading-[68px] tracking-normal text-white [font-family:'Roboto',Helvetica]"
                >
                  P2P-кредитование
                </motion.div>

                <motion.p
                  ref={ref2}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                  className="relative text-center md:text-left w-full md:w-[624px] text-xl font-normal leading-7 tracking-normal text-[#ffffffcc] [font-family:'Roboto',Helvetica]"
                >
                  Ядро, интеграции с сервисами и источниками информации, готовые
                  модули и библиотеки - все это позволяет быстро развернуть
                  P2P-площадку кредитования заточенную под требования вашего
                  бизнеса
                </motion.p>
              </div>
            </div>
          </HeroButtons>

          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: 50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="md:absolute md:left-[802px] top-[78px] flex w-full md:w-[304px] flex-col items-center justify-center overflow-hidden rounded-[32px] bg-green-50"
          >
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-5 self-stretch p-5">
              <img
                className="absolute left-[-13px] top-1.5 h-[330px] w-full md:w-[345px]"
                alt="Vector"
                src="/img/p2p/vector-1-1.svg"
              />

              <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                <p className="relative w-fit text-base font-semibold leading-4 tracking-normal text-gray-90 opacity-0 [font-family:'Inter',Helvetica]">
                  <span className="leading-6 text-[#9ea7bb]">Привет,</span>

                  <span className="leading-6 text-[#1c222f]"> Давид</span>
                </p>

                <div className="relative size-8 rounded-3xl [background:url(/img/p2p/frame-1948755022.png)_50%_50%_/_cover]" />
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-center">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#ffffff] opacity-80 [font-family:'Inter',Helvetica]">
                  Баланс
                </div>

                <div className="relative w-fit whitespace-nowrap text-center text-[28px] font-medium leading-10 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                  122,000₽
                </div>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] items-start gap-3">
                <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2 rounded-2xl bg-[#ffffff29] px-2.5 py-1.5">
                  <div className="relative size-3.5">
                    <div className="absolute left-0.5 top-[3px] h-2.5w-full md:w-[9px]">
                      <img
                        className="absolute left-1 top-0 h-2.5 w-px"
                        alt="Vector"
                        src="/img/p2p/vector-8.svg"
                      />

                      <img
                        className="absolute left-0 top-0 h-[5px] w-full md:w-[9px]"
                        alt="Vector"
                        src="/img/p2p/vector-5.svg"
                      />
                    </div>

                    <img
                      className="absolute left-0.5 top-0.5 h-pxw-full md:w-[11px]"
                      alt="Vector"
                      src="/img/p2p/vector.svg"
                    />
                  </div>

                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-white [font-family:'Inter',Helvetica]">
                    Вывести
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2 rounded-2xl bg-[#ffffff29] px-2.5 py-1.5">
                  <div className="relative size-3.5">
                    <div className="absolute left-0.5 top-px h-2.5w-full md:w-[9px]">
                      <img
                        className="absolute left-1 top-0 h-2.5 w-px"
                        alt="Vector"
                        src="/img/p2p/vector-21.svg"
                      />

                      <img
                        className="absolute left-0 top-1 h-[5px] w-full md:w-[9px]"
                        alt="Vector"
                        src="/img/p2p/vector-7.svg"
                      />
                    </div>

                    <img
                      className="absolute left-0.5 top-[11px] h-pxw-full md:w-[11px]"
                      alt="Vector"
                      src="/img/p2p/vector.svg"
                    />
                  </div>

                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-white [font-family:'Inter',Helvetica]">
                    Пополнить
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch rounded-3xl bg-[#ffffff] p-2.5">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative flex h-[72px] w-full items-start gap-4 self-stretch overflow-hidden rounded-2xl bg-[#f2f5ff] p-1">
                  <div className="relative flex flex-1 grow flex-col items-start p-3">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                      Мои инвестиции
                    </div>

                    <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      42 000₽
                    </div>
                  </div>

                  <div className="relative flex w-full md:w-[88px] flex-col items-start rounded-xl bg-[#eaedf7] p-3">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                      Интерес
                    </div>

                    <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      1 200₽
                    </div>
                  </div>
                </div>

                <div className="relative flex h-[72px] w-full items-start gap-4 self-stretch rounded-2xl bg-[#f2f5ff] p-1">
                  <div className="relative flex flex-1 grow flex-col items-start p-3">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      Мои займы
                    </div>

                    <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      134 000₽
                    </div>
                  </div>

                  <div className="relative flex w-full md:w-[88px] flex-col items-start rounded-xl bg-[#eaedf7] p-3">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      Платеж
                    </div>

                    <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      9 000₽
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 [font-family:'Inter',Helvetica]">
                  Инвестиции
                </div>

                <div className="relative flex h-24 w-full items-start gap-4 self-stretch rounded-2xl bg-[#f2f5ff] p-1">
                  <div className="relative flex flex-1 grow flex-col items-start gap-2 p-3">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      80 000₽
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-center gap-3 self-stretch">
                      <div className="relative flex flex-1 grow flex-col items-start">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          Интерес
                        </div>

                        <div className="relative w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          14%
                        </div>
                      </div>

                      <div className="relative flex flex-1 grow flex-col items-start">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          Интерес
                        </div>

                        <div className="relative w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          14%
                        </div>
                      </div>

                      <button
                        onClick={handleTryClick}
                        className="relative inline-flex flex-[0_0_auto] cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gray-90 px-2.5 py-1.5"
                      >
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-white [font-family:'Inter',Helvetica]">
                          Вложить
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <img
            className="absolute left-[739px] top-[46px] h-[554px] w-full md:w-[637px]"
            alt="Vector"
            src="/img/p2p/vector-4-1.svg"
          />

          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: -50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="absolute left-[100px] md:left-[1000px] top-[800px] md:top-[262px] inline-flex flex-col items-start justify-center gap-4 rounded-[32px] bg-white p-7"
          >
            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
              <div className="relative mt-[-1.00px] w-full md:w-[180px] text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                Общий доход
              </div>

              <div className="relativew-full md:w-[264px] text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                1,567,000₽
              </div>
            </div>

            <div className="relative inline-flex h-[154px] items-end">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                <div className="relative h-[76px] w-8 rounded-3xl bg-[#f2f4fb]" />

                <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                  01.05
                </div>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                <div className="relative h-[86px] w-8 rounded-3xl bg-[#f2f4fb]" />

                <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                  02.05
                </div>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                <div className="relative h-[105px] w-8 rounded-3xl bg-[#f2f4fb]" />

                <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                  03.05
                </div>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                <div className="relative h-[120px] w-8 rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />

                <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                  04.05
                </div>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                <div className="relative h-[91px] w-8 rounded-3xl bg-[#f2f4fb]" />

                <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                  06.05
                </div>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                <div className="relative h-[98px] w-8 rounded-3xl bg-[#f2f4fb]" />

                <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                  07.05
                </div>
              </div>
            </div>

            <img
              className="absolute left-0 top-[106px] h-[104px] w-full md:w-[328px]"
              alt="Vector"
              src="/img/p2p/vector-147.svg"
            />

            <div className="absolute left-[180px] top-[131px] size-3 rounded-md border-2 border-solid border-[#00cb82] bg-[#ffffff]" />
          </motion.div>
        </div>
      </div>
      <Advantages />

      <div className="relative flex-col flex md:!flex-row md:h-[568px] w-full md:w-[1376px]">
        <div className="flex flex-col md:!flex-row w-full md:w-[1472px] items-center gap-[68px]">
          <div className="relative flex  w-full md:w-[496px] flex-col items-start justify-center gap-7">
            <div className="relative mt-[-1.00px] text-center md:text-left self-stretch text-[36px] md:text-5xl font-medium leading-[44px] md:leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              Настраиваемые бизнес-процессы
              <br />
              под ваши запросы
            </div>

            <button
              onClick={handleTryClick}
              className="all-[unset]  w-full md:w-fit  relative box-border inline-flex flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4"
            >
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                Попробовать
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
                <div className="relative flex h-[480px] w-full md:w-[443px] flex-col items-center gap-7  md:gap-12 overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 md:p-12">
                  <img
                    className="absolute left-0 top-0 h-[406px] w-full md:w-[443px]"
                    alt="Vector"
                    src="/img/p2p/vector-1-3.svg"
                  />

                  <div className="relative w-full flex-1 grow self-stretch">
                    <div className="relative -left-12 -top-12 w-[120%] md:w-[443px]">
                      <div className="absolute left-[58px] top-[69px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-white py-2 pl-2 pr-5">
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="/img/p2p/frame-19-4.svg"
                        />

                        <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          Ваша заявка одобрена
                        </div>
                      </div>

                      <img
                        className="absolute left-0 top-0 h-[352px] w-full md:w-[443px]"
                        alt="Vector"
                        src="/img/p2p/vector-4-4.svg"
                      />

                      <div className="absolute left-[100px] top-[115px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-white py-2 pl-2 pr-5">
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="/img/p2p/frame-19-5.svg"
                        />

                        <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          Ваш пароль был изменен
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Сервисы и интеграции
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      Прием и учет заявок от инвесторов и заемщиков, кабинет
                      клиента, кабинет специалиста, CRM-система, интеграция с
                      телефонией, SMS и email-сервисами
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-3">
                <div className="relative flex h-[480px] w-full md:w-[443px] flex-col items-center gap-7  md:gap-12 overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 md:p-12">
                  <img
                    className="absolute left-0 top-0 h-[406px] w-full md:w-[377px]"
                    alt="Vector"
                    src="/img/p2p/vector-1-10.svg"
                  />

                  <div className="relative w-full flex-1 grow self-stretch">
                    <div className="relative left-0 md:left-4 top-5 h-[114px] w-full md:w-[313px]">
                      <div className="absolute left-px top-0 flex w-full md:w-[311px] items-center justify-between opacity-[0.08]">
                        <img
                          className="relative ml-[-0.50px] h-28 w-px"
                          alt="Vector"
                          src="/img/p2p/vector-152.svg"
                        />

                        <img
                          className="relative h-28 w-px"
                          alt="Vector"
                          src="/img/p2p/vector-152.svg"
                        />

                        <img
                          className="relative h-28 w-px"
                          alt="Vector"
                          src="/img/p2p/vector-152.svg"
                        />

                        <img
                          className="relative h-28 w-px"
                          alt="Vector"
                          src="/img/p2p/vector-152.svg"
                        />

                        <img
                          className="relative h-28 w-px"
                          alt="Vector"
                          src="/img/p2p/vector-152.svg"
                        />

                        <img
                          className="relative h-28 w-px"
                          alt="Vector"
                          src="/img/p2p/vector-152.svg"
                        />

                        <img
                          className="relative h-28 w-px"
                          alt="Vector"
                          src="/img/p2p/vector-152.svg"
                        />

                        <img
                          className="relative h-28 w-px"
                          alt="Vector"
                          src="/img/p2p/vector-152.svg"
                        />

                        <img
                          className="relative mr-[-0.50px] h-28 w-px"
                          alt="Vector"
                          src="/img/p2p/vector-152.svg"
                        />
                      </div>

                      <img
                        className="absolute left-px top-3 h-[102px] w-full md:w-[311px]"
                        alt="Vector"
                        src="/img/p2p/vector-160.svg"
                      />

                      <img
                        className="absolute left-0 top-[11px] h-[76px] w-full md:w-[313px]"
                        alt="Vector"
                        src="/img/p2p/vector-161.svg"
                      />

                      <div className="absolute left-[62px] top-[42px] size-2 rounded border-2 border-solid border-[#3573fc] bg-[#efeefa]" />

                      <div className="absolute left-[43px] top-2.5 flex w-full md:w-[46px] flex-col items-center">
                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-[#ffffff] px-2 py-1">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-medium leading-4 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            5,674
                          </div>
                        </div>

                        <img
                          className="relative h-1.5 w-2"
                          alt="Vector"
                          src="/img/p2p/vector-162.svg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Функции инвестора
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      Простое или пакетное инвестирование, торги, рейтинг,
                      пополнение счета, вывод денег со счета
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-3">
                <div className="relative flex h-[480px] w-full md:w-[443px] flex-col items-center gap-7  md:gap-12 overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 md:p-12">
                  <div className="relative w-full flex-1 grow self-stretch">
                    <div className="relative left-0 md:left-10 top-[27px] inline-flex flex-col items-center justify-center gap-6 rounded-[32px] bg-[#ffffff] p-4">
                      <div className="relative flex w-full md:w-[230px] flex-[0_0_auto] flex-col items-start gap-5 px-4 pb-0 pt-3">
                        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                          <img
                            className="relative ml-[-3.00px] mr-[-2.00px] mt-[-3.00px] h-7 w-full self-stretch"
                            alt="Frame"
                            src="/img/p2p/frame-83-4-1.svg"
                          />

                          <div className="relative h-6 w-full self-stretch">
                            <div className="absolute -top-px left-0 whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                              0
                            </div>

                            <div className="absolute -top-px left-[131px] whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              122 000
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Функции заёмщика
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Подача заявки на займ, торги, рейтинг, погашение займа,
                      получение займа
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-3">
                <div className="relative flex h-[480px] w-full md:w-[443px] flex-col items-center gap-7  md:gap-12 overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 md:p-12">
                  <div className="relative flex h-[480px] w-full md:w-[442px] flex-col items-center gap-7  md:gap-12 overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 md:p-12">
                    <img
                      className="absolute left-0 top-0 h-[406px] w-full md:w-[442px]"
                      alt="Vector"
                      src="/img/p2p/vector-1-11-1.svg"
                    />

                    <div className="relative w-full flex-1 grow self-stretch">
                      <div className="absolute left-[-32px] md:left-[23px] top-1 inline-flex items-center gap-2.5 rounded-[32px] bg-[#ffffff] p-3">
                        <div className="relative size-[120px]">
                          <div className="relative size-[120px]">
                            <div className="absolute left-0 top-0 size-[120px]">
                              <img
                                className="absolute left-0 top-0 h-[120px] w-[57px]"
                                alt="Subtract"
                                src="/img/p2p/subtract-5.svg"
                              />

                              <img
                                className="absolute left-[63px] top-[49px] h-[71px] w-[57px]"
                                alt="Subtract"
                                src="/img/p2p/subtract-9.svg"
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
                              src="/img/p2p/subtract-7.svg"
                            />

                            <img
                              className="absolute left-[63px] top-0 h-5 w-[39px]"
                              alt="Subtract"
                              src="/img/p2p/subtract-8.svg"
                            />
                          </div>
                        </div>
                      </div>

                      <img
                        className="absolute left-[120px] md:left-[179px] top-1 size-36"
                        alt="Frame"
                        src="/img/p2p/frame-31.svg"
                      />
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                      <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        Модули
                      </div>

                      <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                        Автоинвестирование, формирования статистики, история,
                        рейтингование
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="absolute left-[725px] top-[542px] hidden md:flex h-14 w-full md:w-[120px] items-center justify-between rounded-full bg-[#f9fafd] p-1">
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

      <div className="relative flex flex-col md:!flex-row md:h-[544px] w-full items-center gap-6 self-stretch rounded-3xl">
        <div className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl p-7 md:py-12 md:pl-12 md:pr-[68px]">
          <div className="relative mt-[-1.00px] w-full md:w-[480px] text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            Готовый модуль расчетов
          </div>

          <img
            className="relative h-px w-full self-stretch object-cover"
            alt="Vector"
            src="/img/p2p/vector-138.svg"
          />

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              Работа с процентами
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
              Начисление, списание и расчет процентов и штрафов. Соблюдение всех
              требований законодательства РФ
            </p>
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              Работа с продуктами
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
              Гибкая система позволяет создать и настроить необходимый кредитный
              продукт: от PDL до кредитной линии
            </p>
          </div>
        </div>

        <div className="relative flex-1 grow self-stretch overflow-hidden rounded-3xl bg-[#f9fafd]">
          <div className="relative left-[33px] top-5 h-[714px] w-full md:w-[688px] md:bg-[url(/img/p2p/vector-1-6.svg)] bg-[100%_100%]">
            <div className="relative md:left-[153px] top-4 inline-flex flex-col items-center justify-center gap-1 overflow-hidden rounded-[32px_32px_0px_0px] bg-[#ffffff] p-2">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                <div className="relative flex w-full md:w-[284px] flex-[0_0_auto] flex-col items-center justify-center gap-5 px-4 pb-2 pt-3">
                  <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Продукт
                    </div>

                    <div className="relative size-6">
                      <img
                        className="absolute left-[3px] top-[11px] h-0.5w-full md:w-[18px]"
                        alt="Vector"
                        src="/img/p2p/vector-9.svg"
                      />

                      <img
                        className="absolute left-[3px] top-[5px] h-0.5w-full md:w-[18px]"
                        alt="Vector"
                        src="/img/p2p/vector-9.svg"
                      />

                      <img
                        className="absolute left-[3px] top-[17px] h-0.5w-full md:w-[18px]"
                        alt="Vector"
                        src="/img/p2p/vector-9.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full md:w-[284px] flex-[0_0_auto] flex-col items-start gap-4 rounded-3xl p-2.5">
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2">
                    <div className="relative flex w-full md:w-[264px] flex-[0_0_auto] flex-col items-start gap-2 overflow-hidden rounded-2xl bg-[#f2f5ff] px-4 py-3.5">
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                          Сумма
                        </div>

                        <p className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          30 000 ₽ - 680 000 ₽
                        </p>
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                        <img
                          className="relative mt-[-6.00px] h-[30px] w-full md:w-[232px]"
                          alt="Frame"
                          src="/img/p2p/frame-83-4.svg"
                        />

                        <div className="relative flex h-4w-full md:w-[232px] items-start justify-between">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                            10 000 ₽
                          </div>

                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                            800 000 ₽
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-full md:w-[264px] flex-[0_0_auto] flex-col items-start gap-2 overflow-hidden rounded-2xl bg-[#f2f5ff] px-4 py-3.5">
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                          Период
                        </div>

                        <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          2 - 8 месяцев
                        </div>
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                        <img
                          className="relative mt-[-6.00px] h-[30px] w-full md:w-[232px]"
                          alt="Frame"
                          src="/img/p2p/frame-83-5.svg"
                        />

                        <div className="relative flex h-4w-full md:w-[232px] items-start justify-between">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                            1 месяц
                          </div>

                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                            24 месяца
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-full md:w-[264px] flex-[0_0_auto] flex-col items-start gap-2 overflow-hidden rounded-2xl bg-[#f2f5ff] px-4 py-3.5">
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                          Процентная ставка
                        </div>

                        <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          1,2% - 8%
                        </div>
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                        <img
                          className="relative mt-[-6.00px] h-[30px] w-full md:w-[232px]"
                          alt="Frame"
                          src="/img/p2p/frame-83-6.svg"
                        />

                        <div className="relative flex h-4w-full md:w-[232px] items-start justify-between">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                            0%
                          </div>

                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                            24%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleTryClick}
                    className="all-[unset] relative box-border flex h-12 w-full cursor-pointer items-center justify-center gap-7 self-stretch rounded-3xl bg-gray-90 px-8 py-3"
                  >
                    <div className="relative mt-[-1.00px] w-full md:w-[164px] self-stretch whitespace-nowrap text-center text-base font-medium leading-6 tracking-normal text-white [font-family:'Roboto',Helvetica]">
                      Создать продукт
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col-reverse md:!flex-row w-full flex-[0_0_auto] items-center gap-6 self-stretch rounded-3xl">
        <div className="relative flex-1 grow self-stretch overflow-hidden rounded-3xl bg-[#f9fafd]">
          <div className="relative md:left-[33px] top-5 h-[714px] w-full md:w-[688px] md:bg-[url(/img/p2p/vector-1-7.svg)] bg-[100%_100%]">
            <div className="relative left-9 md:left-[153px] top-5 inline-flex flex-col items-center justify-center gap-1 overflow-hidden rounded-[32px_32px_0px_0px] bg-[#ffffff] p-2">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                <div className="relative flex w-[284px] flex-[0_0_auto] flex-col items-center justify-center gap-5 px-4 py-3">
                  <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Платежи
                    </div>

                    <div className="relative size-6">
                      <img
                        className="absolute left-[3px] top-[11px] h-0.5 w-[18px]"
                        alt="Vector"
                        src="/img/p2p/vector-9.svg"
                      />

                      <img
                        className="absolute left-[3px] top-[5px] h-0.5 w-[18px]"
                        alt="Vector"
                        src="/img/p2p/vector-9.svg"
                      />

                      <img
                        className="absolute left-[3px] top-[17px] h-0.5 w-[18px]"
                        alt="Vector"
                        src="/img/p2p/vector-9.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full flex-[0_0_auto] items-start self-stretch px-2.5 py-2">
                  <div className="relative flex w-[264px] items-center justify-between rounded-[100px] bg-[#f9fafd]">
                    <div className="relative flex w-[132px] flex-col items-center justify-center gap-2 rounded-[100px] bg-gray-90 px-0 py-2">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-white [font-family:'Roboto',Helvetica]">
                        Продукты
                      </div>
                    </div>

                    <div className="relative flex w-[132px] flex-col items-center justify-center gap-2 px-0 py-2">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        Договоры
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex w-[284px] flex-[0_0_auto] flex-col items-start gap-4 rounded-3xl p-2.5">
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-3">
                    <div className="relative flex w-[264px] flex-[0_0_auto] items-center justify-between overflow-hidden rounded-2xl bg-[#f9fafd] p-3">
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                        <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] px-2 py-1.5">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#00ac6e] [font-family:'Roboto',Helvetica]">
                            Займ PRO
                          </div>
                        </div>
                      </div>

                      <div className="relative flex-1 text-right text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        +30 580 ₽
                      </div>
                    </div>

                    <div className="relative flex w-[264px] flex-[0_0_auto] items-center justify-between overflow-hidden rounded-2xl bg-[#f9fafd] p-3">
                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#3573fc14] px-2 py-1.5">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#3573fc] [font-family:'Roboto',Helvetica]">
                          Льготный
                        </div>
                      </div>

                      <div className="relative flex-1 text-right text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        +8 000 ₽
                      </div>
                    </div>

                    <div className="relative flex w-[264px] flex-[0_0_auto] items-center justify-between overflow-hidden rounded-2xl bg-[#f9fafd] p-3">
                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#3573fc14] px-2 py-1.5">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#3573fc] [font-family:'Roboto',Helvetica]">
                          Льготный
                        </div>
                      </div>

                      <div className="relative flex-1 text-right text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        +12 600 ₽
                      </div>
                    </div>

                    <div className="relative flex w-[264px] flex-[0_0_auto] items-center justify-between overflow-hidden rounded-2xl bg-[#f9fafd] p-3">
                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#e6485014] px-2 py-1.5">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#e64850] [font-family:'Roboto',Helvetica]">
                          Экспресс
                        </div>
                      </div>

                      <div className="relative flex-1 text-right text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        +22 000 ₽
                      </div>
                    </div>

                    <div className="relative flex w-[264px] flex-[0_0_auto] items-center justify-between overflow-hidden rounded-2xl bg-[#f9fafd] p-3">
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                        <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] px-2 py-1.5">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#00ac6e] [font-family:'Roboto',Helvetica]">
                            Займ PRO
                          </div>
                        </div>
                      </div>

                      <div className="relative flex-1 text-right text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        +30 580 ₽
                      </div>
                    </div>

                    <div className="relative flex w-[264px] flex-[0_0_auto] items-center justify-between overflow-hidden rounded-2xl bg-[#f9fafd] p-3">
                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#3573fc14] px-2 py-1.5">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#3573fc] [font-family:'Roboto',Helvetica]">
                          Льготный
                        </div>
                      </div>

                      <div className="relative flex-1 text-right text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        +7 300 ₽
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl p-7 md:py-12 md:pl-12 md:pr-[68px]">
          <div className="relative mt-[-1.00px] w-full md:w-[480px] text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            Интеллектуальная работа с платежами
          </div>

          <img
            className="relative h-px w-full self-stretch object-cover"
            alt="Vector"
            src="/img/p2p/vector-138.svg"
          />

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              Автоматизация
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
              Автоматическое разнесение входящих платежей, распределение
              процентов, ОД, штрафов, а также создание других операций
            </p>
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              Работа с продуктами
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
              Отправка исходящих платежей по событиям. Можно включить как
              полностью автоматический режим,
              <br />
              так и режим «с подтверждением»
            </p>
          </div>
        </div>
      </div>

      <Zaim />
      <Integrations />

      <div className="relative flex w-full flex-[0_0_auto] items-center gap-[88px] self-stretch overflow-hidden rounded-[32px] bg-green-60 p-7 md:p-20">
        <img
          className="absolute left-[386px] top-[15px] h-[1060px] w-full md:w-[1204px]"
          alt="Vector"
          src="/img/p2p/vector-1-11.svg"
        />

        <div className="relative flex w-full md:w-[640px] flex-col items-start gap-7">
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, x: 80 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mt-[-1.00px] w-full md:w-[530px] text-[36px] md:text-5xl font-medium leading-[44px] md:leading-[60px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]"
          >
            Гибкая настройка системы
          </motion.div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-5 self-stretch">
            <motion.div
              ref={ref4}
              initial={{ opacity: 0, y: 50 }}
              animate={inView18 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch"
            >
              <motion.div
                ref={ref5}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView18 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#ffffff1f] p-1.5"
              >
                <Check10 className="!relative !h-4 !w-4" color="#ffffff" />
              </motion.div>

              <motion.p
                ref={ref6}
                initial={{ opacity: 0, y: 50 }}
                animate={inView18 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-white [font-family:'Roboto',Helvetica]"
              >
                Бизнес-процессы под потребности вашего бизнеса
              </motion.p>
            </motion.div>

            <motion.div
              ref={ref7}
              initial={{ opacity: 0, y: 50 }}
              animate={inView18 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch"
            >
              <motion.div
                ref={ref8}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView18 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#ffffff1f] p-1.5"
              >
                <Check10 className="!relative !h-4 !w-4" color="#ffffff" />
              </motion.div>

              <motion.div
                ref={ref9}
                initial={{ opacity: 0, y: 50 }}
                animate={inView18 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-white [font-family:'Roboto',Helvetica]"
              >
                Правила расчета рейтинга
              </motion.div>
            </motion.div>

            <motion.div
              ref={ref10}
              initial={{ opacity: 0, y: 50 }}
              animate={inView18 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch"
            >
              <motion.div
                ref={ref11}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView18 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#ffffff1f] p-1.5"
              >
                <Check10 className="!relative !h-4 !w-4" color="#ffffff" />
              </motion.div>

              <motion.div
                ref={ref12}
                initial={{ opacity: 0, y: 50 }}
                animate={inView18 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-white [font-family:'Roboto',Helvetica]"
              >
                Условия выдачи займа
              </motion.div>
            </motion.div>

            <motion.div
              ref={ref13}
              initial={{ opacity: 0, y: 50 }}
              animate={inView18 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch"
            >
              <motion.div
                ref={ref14}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView18 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#ffffff1f] p-1.5"
              >
                <Check10 className="!relative !h-4 !w-4" color="#ffffff" />
              </motion.div>

              <motion.div
                ref={ref15}
                initial={{ opacity: 0, y: 50 }}
                animate={inView18 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-white [font-family:'Roboto',Helvetica]"
              >
                Автоматические сообщения
              </motion.div>
            </motion.div>

            <motion.div
              ref={ref16}
              initial={{ opacity: 0, y: 50 }}
              animate={inView18 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch"
            >
              <motion.div
                ref={ref17}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView18 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#ffffff1f] p-1.5"
              >
                <Check10 className="!relative !h-4 !w-4" color="#ffffff" />
              </motion.div>

              <motion.div
                ref={ref18}
                initial={{ opacity: 0, y: 50 }}
                animate={inView18 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
                className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-white [font-family:'Roboto',Helvetica]"
              >
                Интеллектуальная система формирования документов
              </motion.div>
            </motion.div>

            <motion.div
              ref={ref19}
              initial={{ opacity: 0, y: 50 }}
              animate={inView18 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
              className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch"
            >
              <motion.div
                ref={ref20}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView18 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
                className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#ffffff1f] p-1.5"
              >
                <Check10 className="!relative !h-4 !w-4" color="#ffffff" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView18 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-white [font-family:'Roboto',Helvetica]"
              >
                Роли сотрудников в системе
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView18 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
              className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView18 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#ffffff1f] p-1.5"
              >
                <Check10 className="!relative !h-4 !w-4" color="#ffffff" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={inView18 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
                className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-white [font-family:'Roboto',Helvetica]"
              >
                Управление правилами организации, контроль действий
                пользователей, работа с черными списками
              </motion.p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView20 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="absolute left-[810px] top-[102px] flex w-full md:w-[324px] flex-col items-center justify-center gap-6 rounded-[32px] bg-white p-4"
        >
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-5 self-stretch px-4 pb-4 pt-3">
              <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                Оформить заявку
              </div>

              <div className="relative flex w-64 flex-[0_0_auto] flex-col items-start gap-2">
                <div className="relative h-3.5 w-full self-stretch">
                  <div className="relative left-[-3px] top-px h-3w-full md:w-[261px]">
                    <img
                      className="absolute left-px top-1 h-1w-full md:w-[260px]"
                      alt="Vector"
                      src="/img/p2p/vector-136-1.svg"
                    />

                    <img
                      className="absolute left-0 top-[3px] h-1.5w-full md:w-[169px]"
                      alt="Vector"
                      src="/img/p2p/vector-137.svg"
                    />

                    <div className="absolute left-[158px] top-0 size-3 rounded-md bg-green-60 shadow-[0px_4px_8px_#04ca8333]" />
                  </div>
                </div>

                <div className="relative h-6 w-full self-stretch">
                  <div className="absolute -top-px left-0 whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    0
                  </div>

                  <div className="absolute -top-px left-[131px] whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    122 000
                  </div>
                </div>
              </div>

              <div className="relative flex w-64 flex-[0_0_auto] flex-col items-start gap-2">
                <div className="relative h-3.5 w-full self-stretch">
                  <div className="relative left-[-3px] top-px h-3w-full md:w-[261px]">
                    <img
                      className="absolute left-px top-1 h-1w-full md:w-[260px]"
                      alt="Vector"
                      src="/img/p2p/vector-136.svg"
                    />

                    <img
                      className="absolute left-0 top-[3px] h-1.5w-full md:w-[95px]"
                      alt="Vector"
                      src="/img/p2p/vector-137-1.svg"
                    />

                    <div className="absolute left-[86px] top-0 size-3 rounded-md bg-green-60 shadow-[0px_4px_8px_#04ca8333]" />
                  </div>
                </div>

                <div className="relative h-6 w-full self-stretch">
                  <div className="absolute -top-px left-0 whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    0
                  </div>

                  <div className="absolute -top-px left-20 whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    14
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] items-start gap-2 self-stretch">
              <div className="relative flex flex-1 grow flex-col items-start rounded-[20px] bg-[#f6f8ff] px-4 py-3">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                  Сумма
                </div>

                <div className="relative mr-[-2.33px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  42 000₽
                </div>
              </div>

              <div className="relative flex flex-1 grow flex-col items-start rounded-[20px] bg-[#f6f8ff] px-4 py-3">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                  Срок
                </div>

                <div className="relative mr-[-0.33px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  14 дней
                </div>
              </div>

              <div className="relative flex flex-1 grow flex-col items-start rounded-[20px] bg-[#f6f8ff] px-4 py-3">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                  Ставка
                </div>

                <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  2.5%
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleTryClick}
            className="all-[unset] relative box-border flex h-12 w-full cursor-pointer items-center justify-center gap-7 self-stretch rounded-3xl bg-gray-90 px-8 py-3"
          >
            <div className="relative mt-[-1.00px] w-full md:w-[164px] self-stretch whitespace-nowrap text-center text-base font-medium leading-6 tracking-normal text-white [font-family:'Roboto',Helvetica]">
              Оформить займ
            </div>
          </button>
        </motion.div>

        <img
          className="absolute left-[571px] top-0 h-[656px] w-full md:w-[805px]"
          alt="Vector"
          src="/img/p2p/vector-3-1.svg"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView20 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          className="absolute left-[1054px] top-[165px] inline-flex flex-col items-center justify-center gap-3 rounded-[32px] bg-white p-4"
        >
          <Graph sum="122,000" />

          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2.5 rounded-[20px] bg-[#f6f8ff] p-5">
            <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
              <div className="relative size-2 rounded bg-blue-50" />

              <div className="relative mt-[-1.00px] w-full md:w-[72px] text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                Текущее
              </div>

              <div className="relative mt-[-1.00px] w-full md:w-[72px] text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                48,456₽
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
              <div className="relative size-2 rounded bg-green-60" />

              <div className="relative mt-[-1.00px] w-full md:w-[72px] text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                Основная
              </div>

              <div className="relative mt-[-1.00px] w-full md:w-[72px] text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                122,000₽
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
              <div className="relative size-2 rounded bg-yellow-50" />

              <div className="relative mt-[-1.00px] w-full md:w-[72px] text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                Проценты
              </div>

              <div className="relative mt-[-1.00px] w-full md:w-[72px] text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                4,000₽
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
              <div className="relative size-2 rounded bg-red-50" />

              <div className="relative mt-[-1.00px] w-full md:w-[72px] text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                Штраф
              </div>

              <div className="relative mt-[-1.00px] w-full md:w-[72px] text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                2,700₽
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <RoleStructure />
      <Trust />
    </div>
  );
};
