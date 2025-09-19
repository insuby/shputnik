import { motion, useInView } from 'framer-motion';
import {
  Advantages,
  Feedback,
  Integrations,
  RoleStructure,
  Trust,
  Zaim,
  useFeedbackForm,
} from 'widgets';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { isMobile } from 'shared/lib/is-mobile';
import { Check10, Graph, HeroButtons } from 'shared/ui';

export const P2P = () => {
  const { t } = useTranslation(['p2p']);
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
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView18 = useInView(ref18, { once: true, margin: '-100px' });
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
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[88px] p-0 md:w-[1440px] md:gap-[136px] md:px-8 md:pb-[136px] md:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
        <div className="relative flex min-h-[600px] w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-green-60 p-7 md:p-12">
          <img
            className="absolute left-[441px] top-[-140px] h-[1060px] w-full md:w-[1108px]"
            alt=""
            aria-hidden="true"
            src="/img/p2p/vector-1-5.svg"
          />

          <HeroButtons>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 md:w-[624px]  md:gap-12">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 md:inline-flex">
                <motion.h1
                  ref={ref1}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                  className="relative mt-[-1.00px] w-full  text-center text-[36px] font-medium leading-[44px] tracking-normal text-white [font-family:'Roboto',Helvetica] md:w-[624px] md:text-left md:text-6xl md:leading-[68px]"
                >
                  {t('hero.title')}
                </motion.h1>

                <motion.p
                  ref={ref2}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                  className="relative w-full text-center text-xl font-normal leading-7 tracking-normal text-[#ffffffcc] [font-family:'Roboto',Helvetica] md:w-[624px] md:text-left"
                >
                  {t('hero.subtitle')}
                </motion.p>
              </div>
            </div>
          </HeroButtons>

          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: 50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="top-[78px] flex w-full flex-col items-center justify-center overflow-hidden rounded-[32px] bg-green-50 md:absolute md:left-[802px] md:w-[304px]"
          >
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-5 self-stretch p-5">
              <img
                className="absolute left-[-13px] top-1.5 h-[330px] w-full md:w-[345px]"
                alt="Vector"
                src="/img/p2p/vector-1-1.svg"
              />

              <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                <p className="relative w-fit text-base font-semibold leading-4 tracking-normal text-gray-90 opacity-0 [font-family:'Inter',Helvetica]">
                  <span className="leading-6 text-[#9ea7bb]">
                    {t('dashboard.greeting')}
                  </span>

                  <span className="leading-6 text-[#1c222f]">
                    {' '}
                    {t('dashboard.userName')}
                  </span>
                </p>

                <div className="relative size-8 rounded-3xl [background:url(/img/p2p/frame-1948755022.png)_50%_50%_/_cover]" />
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-center">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#ffffff] opacity-80 [font-family:'Inter',Helvetica]">
                  {t('dashboard.balance')}
                </div>

                <div className="relative w-fit whitespace-nowrap text-center text-[28px] font-medium leading-10 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                  {t('dashboard.balanceAmount')}
                </div>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] items-start gap-3">
                <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2 rounded-2xl bg-[#ffffff29] px-2.5 py-1.5">
                  <div className="relative size-3.5">
                    <div className="h-2.5w-full absolute left-0.5 top-[3px] md:w-[9px]">
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
                      className="h-pxw-full absolute left-0.5 top-0.5 md:w-[11px]"
                      alt="Vector"
                      src="/img/p2p/vector.svg"
                    />
                  </div>

                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-white [font-family:'Inter',Helvetica]">
                    {t('dashboard.withdraw')}
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2 rounded-2xl bg-[#ffffff29] px-2.5 py-1.5">
                  <div className="relative size-3.5">
                    <div className="h-2.5w-full absolute left-0.5 top-px md:w-[9px]">
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
                      className="h-pxw-full absolute left-0.5 top-[11px] md:w-[11px]"
                      alt="Vector"
                      src="/img/p2p/vector.svg"
                    />
                  </div>

                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-white [font-family:'Inter',Helvetica]">
                    {t('dashboard.topUp')}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch rounded-3xl bg-[#ffffff] p-2.5">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative flex h-[72px] w-full items-start gap-4 self-stretch overflow-hidden rounded-2xl bg-[#f2f5ff] p-1">
                  <div className="relative flex flex-1 grow flex-col items-start p-3">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                      {t('dashboard.myInvestments')}
                    </div>

                    <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      42 000₽
                    </div>
                  </div>

                  <div className="relative flex w-full flex-col items-start rounded-xl bg-[#eaedf7] p-3 md:w-[88px]">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                      {t('dashboard.interest')}
                    </div>

                    <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      1 200₽
                    </div>
                  </div>
                </div>

                <div className="relative flex h-[72px] w-full items-start gap-4 self-stretch rounded-2xl bg-[#f2f5ff] p-1">
                  <div className="relative flex flex-1 grow flex-col items-start p-3">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      {t('dashboard.myLoans')}
                    </div>

                    <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      134 000₽
                    </div>
                  </div>

                  <div className="relative flex w-full flex-col items-start rounded-xl bg-[#eaedf7] p-3 md:w-[88px]">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      {t('dashboard.payment')}
                    </div>

                    <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      9 000₽
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 [font-family:'Inter',Helvetica]">
                  {t('dashboard.investments')}
                </div>

                <div className="relative flex h-24 w-full items-start gap-4 self-stretch rounded-2xl bg-[#f2f5ff] p-1">
                  <div className="relative flex flex-1 grow flex-col items-start gap-2 p-3">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      80 000₽
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-center gap-3 self-stretch">
                      <div className="relative flex flex-1 grow flex-col items-start">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('dashboard.interest')}
                        </div>

                        <div className="relative w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          14%
                        </div>
                      </div>

                      <div className="relative flex flex-1 grow flex-col items-start">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('dashboard.interest')}
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
                          {t('dashboard.invest')}
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
            alt=""
            aria-hidden="true"
            src="/img/p2p/vector-4-1.svg"
          />

          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: -50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="absolute left-[100px] top-[800px] inline-flex flex-col items-start justify-center gap-4 rounded-[32px] bg-white p-7 md:left-[1000px] md:top-[228px]"
          >
            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
              <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[180px]">
                {t('dashboard.totalIncome')}
              </div>

              <div className="relative w-full text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[264px]">
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

      <div className="relative flex w-full flex-col md:h-[568px] md:w-[1376px] md:!flex-row">
        <div className="flex w-full flex-col items-center gap-[68px] md:w-[1472px] md:!flex-row">
          <div className="relative flex  w-full flex-col items-start justify-center gap-7 md:w-[496px]">
            <div className="relative mt-[-1.00px] self-stretch text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-5xl md:leading-[60px]">
              {t('customizableProcesses.title')}
            </div>

            <button
              onClick={handleTryClick}
              className="all-[unset]  relative box-border  inline-flex w-full flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 md:w-fit"
            >
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                {t('customizableProcesses.tryButton')}
              </div>
            </button>
          </div>

          <div className="w-full md:w-[915px]" id="p2p-slider">
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
                <div className="relative flex h-[480px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 md:w-[443px] md:gap-12 md:p-12">
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
                          {t('notifications.applicationApproved')}
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
                          {t('notifications.passwordChanged')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('services.title')}
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      {t('services.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-3">
                <div className="relative flex h-[480px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 md:w-[443px] md:gap-12 md:p-12">
                  <img
                    className="absolute left-0 top-0 h-[406px] w-full md:w-[377px]"
                    alt="Vector"
                    src="/img/p2p/vector-1-10.svg"
                  />

                  <div className="relative w-full flex-1 grow self-stretch">
                    <div className="relative left-0 top-5 h-[114px] w-full md:left-4 md:w-[313px]">
                      <div className="absolute left-px top-0 flex w-full items-center justify-between opacity-[0.08] md:w-[311px]">
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

                      <div className="absolute left-[43px] top-2.5 flex w-full flex-col items-center md:w-[46px]">
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
                      {t('investorFunctions.title')}
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      {t('investorFunctions.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-3">
                <div className="relative flex h-[480px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 md:w-[443px] md:gap-12 md:p-12">
                  <div className="relative w-full flex-1 grow self-stretch">
                    <div className="relative left-0 top-[27px] inline-flex flex-col items-center justify-center gap-6 rounded-[32px] bg-[#ffffff] p-4 md:left-10">
                      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-5 px-4 pb-0 pt-3 md:w-[230px]">
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
                      {t('borrowerFunctions.title')}
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('borrowerFunctions.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-3">
                <div className="relative flex h-[480px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 md:w-[443px] md:gap-12 md:p-12">
                  <div className="relative flex h-[480px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 md:w-[442px] md:gap-12 md:p-12">
                    <img
                      className="absolute left-0 top-0 h-[406px] w-full md:w-[442px]"
                      alt="Vector"
                      src="/img/p2p/vector-1-11-1.svg"
                    />

                    <div className="relative w-full flex-1 grow self-stretch">
                      <div className="absolute left-[-32px] top-1 inline-flex items-center gap-2.5 rounded-[32px] bg-[#ffffff] p-3 md:left-[23px]">
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
                                  {t('total')}
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
                        className="absolute left-[120px] top-1 size-36 md:left-[179px]"
                        alt="Frame"
                        src="/img/p2p/frame-31.svg"
                      />
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                      <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('modules.title')}
                      </div>

                      <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                        {t('modules.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="absolute left-[725px] top-[542px] hidden h-14 w-full items-center justify-between rounded-full bg-[#f9fafd] p-1 md:flex md:w-[120px]">
          <button
            aria-controls="p2p-slider"
            aria-label={t('navigation.previousSlide')}
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
            aria-controls="p2p-slider"
            aria-label={t('navigation.nextSlide')}
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

      <div className="relative flex w-full flex-col items-center gap-6 self-stretch rounded-3xl md:h-[544px] md:!flex-row">
        <div className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl p-7 md:py-12 md:pl-12 md:pr-[68px]">
          <div className="md:w-[480px relative mt-[-1.00px] w-full text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            {t('calculationModule.title')}
          </div>

          <img
            className="relative h-px w-full self-stretch object-cover"
            alt="Vector"
            src="/img/p2p/vector-138.svg"
          />

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {t('calculationModule.interestWork.title')}
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
              {t('calculationModule.interestWork.description')}
            </p>
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {t('calculationModule.productWork.title')}
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
              {t('calculationModule.productWork.description')}
            </p>
          </div>
        </div>

        <div className="relative flex-1 grow self-stretch overflow-hidden rounded-3xl bg-[#f9fafd]">
          <div className="relative left-[33px] top-5 h-[490px] w-full bg-[100%_100%] md:h-[714px] md:w-[688px] md:bg-[url(/img/p2p/vector-1-6.svg)]">
            <div className="relative top-4 inline-flex flex-col items-center justify-center gap-1 overflow-hidden rounded-[32px_32px_0px_0px] bg-[#ffffff] p-2 md:left-[153px]">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-5 px-4 pb-2 pt-3 md:w-[284px]">
                  <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('product.title')}
                    </div>

                    <div className="relative size-6">
                      <img
                        className="h-0.5w-full absolute left-[3px] top-[11px] md:w-[18px]"
                        alt="Vector"
                        src="/img/p2p/vector-9.svg"
                      />

                      <img
                        className="h-0.5w-full absolute left-[3px] top-[5px] md:w-[18px]"
                        alt="Vector"
                        src="/img/p2p/vector-9.svg"
                      />

                      <img
                        className="h-0.5w-full absolute left-[3px] top-[17px] md:w-[18px]"
                        alt="Vector"
                        src="/img/p2p/vector-9.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 rounded-3xl p-2.5 md:w-[284px]">
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2">
                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 overflow-hidden rounded-2xl bg-[#f2f5ff] px-4 py-3.5 md:w-[264px]">
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                          {t('product.amount.label')}
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

                        <div className="h-4w-full relative flex items-start justify-between md:w-[232px]">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                            10 000 ₽
                          </div>

                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                            800 000 ₽
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 overflow-hidden rounded-2xl bg-[#f2f5ff] px-4 py-3.5 md:w-[264px]">
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                          {t('product.period.label')}
                        </div>

                        <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          {t('product.period.value')}
                        </div>
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                        <img
                          className="relative mt-[-6.00px] h-[30px] w-full md:w-[232px]"
                          alt="Frame"
                          src="/img/p2p/frame-83-5.svg"
                        />

                        <div className="h-4w-full relative flex items-start justify-between md:w-[232px]">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                            {t('product.period.min')}
                          </div>

                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                            {t('product.period.max')}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 overflow-hidden rounded-2xl bg-[#f2f5ff] px-4 py-3.5 md:w-[264px]">
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                          {t('product.interestRate.label')}
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

                        <div className="h-4w-full relative flex items-start justify-between md:w-[232px]">
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
                    <div className="relative mt-[-1.00px] w-full self-stretch whitespace-nowrap text-center text-base font-medium leading-6 tracking-normal text-white [font-family:'Roboto',Helvetica] md:w-[164px]">
                      {t('product.createProduct')}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col-reverse items-center gap-6 self-stretch rounded-3xl md:!flex-row">
        <div className="relative flex-1 grow self-stretch overflow-hidden rounded-3xl bg-[#f9fafd]">
          <div className="relative top-5 h-[714px] w-full bg-[100%_100%] md:left-[33px] md:w-[688px] md:bg-[url(/img/p2p/vector-1-7.svg)]">
            <div className="relative left-9 top-5 inline-flex flex-col items-center justify-center gap-1 overflow-hidden rounded-[32px_32px_0px_0px] bg-[#ffffff] p-2 md:left-[153px]">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                <div className="relative flex w-[284px] flex-[0_0_auto] flex-col items-center justify-center gap-5 px-4 py-3">
                  <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('payments.title')}
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
                        {t('payments.products')}
                      </div>
                    </div>

                    <div className="relative flex w-[132px] flex-col items-center justify-center gap-2 px-0 py-2">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('payments.contracts')}
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
                            {t('payments.loanPro')}
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
                          {t('payments.preferential')}
                        </div>
                      </div>

                      <div className="relative flex-1 text-right text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        +8 000 ₽
                      </div>
                    </div>

                    <div className="relative flex w-[264px] flex-[0_0_auto] items-center justify-between overflow-hidden rounded-2xl bg-[#f9fafd] p-3">
                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#3573fc14] px-2 py-1.5">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#3573fc] [font-family:'Roboto',Helvetica]">
                          {t('payments.preferential')}
                        </div>
                      </div>

                      <div className="relative flex-1 text-right text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        +12 600 ₽
                      </div>
                    </div>

                    <div className="relative flex w-[264px] flex-[0_0_auto] items-center justify-between overflow-hidden rounded-2xl bg-[#f9fafd] p-3">
                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#e6485014] px-2 py-1.5">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#e64850] [font-family:'Roboto',Helvetica]">
                          {t('payments.express')}
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
                            {t('payments.loanPro')}
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
                          {t('payments.preferential')}
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
          <div className="md:w-[480px relative mt-[-1.00px] w-full text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            {t('payments.title')}
          </div>

          <img
            className="relative h-px w-full self-stretch object-cover"
            alt="Vector"
            src="/img/p2p/vector-138.svg"
          />

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {t('intelligentPayments.automation.title')}
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
              {t('intelligentPayments.automation.description')}
            </p>
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {t('intelligentPayments.productWork.title')}
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
              {t('intelligentPayments.productWork.description')}
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

        <div className="relative flex w-full flex-col items-start gap-7 md:w-[640px]">
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, x: 80 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mt-[-1.00px] w-full text-[36px] font-medium leading-[44px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica] md:w-[530px] md:text-5xl md:leading-[60px]"
          >
            {t('flexibleSystem.title')}
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
                {t('flexibleSystem.businessProcesses')}
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
                {t('flexibleSystem.ratingRules')}
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
                {t('flexibleSystem.loanConditions')}
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
                {t('flexibleSystem.automaticMessages')}
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
                {t('flexibleSystem.documentFormation')}
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
                {t('flexibleSystem.employeeRoles')}
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
                {t('flexibleSystem.organizationRules')}
              </motion.p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView20 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="absolute left-[810px] top-[102px] flex w-full flex-col items-center justify-center gap-6 rounded-[32px] bg-white p-4 md:w-[324px]"
        >
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-5 self-stretch px-4 pb-4 pt-3">
              <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                {t('application.title')}
              </div>

              <div className="relative flex w-64 flex-[0_0_auto] flex-col items-start gap-2">
                <div className="relative h-3.5 w-full self-stretch">
                  <div className="h-3w-full relative left-[-3px] top-px md:w-[261px]">
                    <img
                      className="h-1w-full absolute left-px top-1 md:w-[260px]"
                      alt="Vector"
                      src="/img/p2p/vector-136-1.svg"
                    />

                    <img
                      className="h-1.5w-full absolute left-0 top-[3px] md:w-[169px]"
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
                  <div className="h-3w-full relative left-[-3px] top-px md:w-[261px]">
                    <img
                      className="h-1w-full absolute left-px top-1 md:w-[260px]"
                      alt="Vector"
                      src="/img/p2p/vector-136.svg"
                    />

                    <img
                      className="h-1.5w-full absolute left-0 top-[3px] md:w-[95px]"
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
                  {t('application.amount.label')}
                </div>

                <div className="relative mr-[-2.33px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  42 000₽
                </div>
              </div>

              <div className="relative flex flex-1 grow flex-col items-start rounded-[20px] bg-[#f6f8ff] px-4 py-3">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                  {t('application.term.label')}
                </div>

                <div className="relative mr-[-0.33px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('application.term.value')}
                </div>
              </div>

              <div className="relative flex flex-1 grow flex-col items-start rounded-[20px] bg-[#f6f8ff] px-4 py-3">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                  {t('application.rate.label')}
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
            <div className="relative mt-[-1.00px] w-full self-stretch whitespace-nowrap text-center text-base font-medium leading-6 tracking-normal text-white [font-family:'Roboto',Helvetica] md:w-[164px]">
              {t('application.applyLoan')}
            </div>
          </button>
        </motion.div>

        <img
          className="absolute left-[571px] top-0 h-[656px] w-full md:w-[805px]"
          alt=""
          aria-hidden="true"
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

              <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[72px]">
                {t('chart.current')}
              </div>

              <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[72px]">
                48,456₽
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
              <div className="relative size-2 rounded bg-green-60" />

              <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[72px]">
                {t('chart.main')}
              </div>

              <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[72px]">
                122,000₽
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
              <div className="relative size-2 rounded bg-yellow-50" />

              <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[72px]">
                {t('chart.interest')}
              </div>

              <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[72px]">
                4,000₽
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
              <div className="relative size-2 rounded bg-red-50" />

              <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[72px]">
                {t('chart.penalty')}
              </div>

              <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[72px]">
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
