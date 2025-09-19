import { isMobile } from 'app';
import { motion, useInView } from 'framer-motion';
import {
  Advantages,
  Analytics,
  CrmCapabilities,
  EmployeeWork,
  Feedback,
  Integrations,
  RoleStructure,
  Trust,
  Zaim,
  ZaimChecker,
  useFeedbackForm,
} from 'widgets';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { Graph, HeroButtons } from 'shared/ui';

export const MicroCredit = () => {
  const { t } = useTranslation(['microcredit']);
  const { setIsOpen } = useFeedbackForm();

  const sliderRef = useRef<Slider>(null);

  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);
  const ref6 = useRef<HTMLDivElement>(null);

  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView4 = useInView(ref4, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref6, { once: true, margin: '-100px' });

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[88px] p-0 md:w-[1440px] md:gap-[136px] md:px-8 md:pb-[136px] md:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
        <div className="relative flex h-[1060px] w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-violet-50 px-4 py-10 md:h-auto md:p-12">
          <img
            className="absolute left-[441px] top-[-140px] h-[1060px] w-full md:w-[1108px]"
            alt=""
            aria-hidden="true"
            src="/img/vector-1-5.svg"
          />

          <HeroButtons buttonText={t('hero.buttonText')}>
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, y: 50 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 md:w-[624px]  md:gap-12"
            >
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 md:inline-flex">
                <h1 className="relative mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[44px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica] md:w-[624px] md:text-left md:text-6xl md:leading-[68px]">
                  {t('hero.title')}
                </h1>

                <p className="relative w-full text-center text-xl font-normal leading-7 tracking-normal text-[#ffffff99] [font-family:'Roboto',Helvetica] md:w-[624px] md:text-left">
                  {t('hero.description')}
                </p>
              </div>
            </motion.div>
            <svg
              className="absolute bottom-0 right-0"
              width="1229"
              height="600"
              viewBox="0 0 1229 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2" filter="url(#filter0_f_9140_707)">
                <path
                  d="M848.195 221.527C914.44 107.237 1082.96 126.282 1158.93 150.092C1550.22 396.24 1113.57 748.267 873.355 753.275C633.136 758.283 300.514 477.534 387.518 327.43C474.521 177.326 765.389 364.389 848.195 221.527Z"
                  fill="#FF2A9F"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_9140_707"
                  x="0.65683"
                  y="-240.667"
                  width="1687.5"
                  height="1366.71"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="186.349"
                    result="effect1_foregroundBlur_9140_707"
                  />
                </filter>
              </defs>
            </svg>
          </HeroButtons>

          <motion.div
            ref={ref4}
            initial={{ opacity: 0, x: 50 }}
            animate={inView4 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="left-[786px] top-[132px] flex flex-col items-center justify-center gap-6 rounded-[32px] bg-[#ffffff] p-4 md:absolute md:w-[324px]"
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
                        src="/img/vector-136-1.svg"
                      />

                      <img
                        className="h-1.5w-full absolute left-0 top-[3px] md:w-[169px]"
                        alt="Vector"
                        src="/img/vector-137.svg"
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
                        src="/img/vector-136.svg"
                      />

                      <img
                        className="h-1.5w-full absolute left-0 top-[3px] md:w-[95px]"
                        alt="Vector"
                        src="/img/vector-137-2.svg"
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
                    {t('application.amount')}
                  </div>

                  <div className="relative mr-[-2.33px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    42 000₽
                  </div>
                </div>

                <div className="relative flex flex-1 grow flex-col items-start rounded-[20px] bg-[#f6f8ff] px-4 py-3">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    {t('application.term')}
                  </div>

                  <div className="relative mr-[-0.33px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('application.termValue')}
                  </div>
                </div>

                <div className="relative flex flex-1 grow flex-col items-start rounded-[20px] bg-[#f6f8ff] px-4 py-3">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    {t('application.rate')}
                  </div>

                  <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    2.5%
                  </div>
                </div>
              </div>

              <button
                onClick={onClick}
                className="all-[unset] relative box-border flex h-12 w-full cursor-pointer items-center justify-center gap-7 self-stretch rounded-3xl bg-gray-90 px-8 py-3 transition-opacity hover:opacity-90"
              >
                <div className="relative mt-[-1.00px] w-full self-stretch whitespace-nowrap text-center text-base font-medium leading-6 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica] md:w-[164px]">
                  {t('application.applyLoan')}
                </div>
              </button>
            </div>
          </motion.div>

          <img
            className="absolute left-[559px] top-0 h-[600px] w-full md:w-[817px]"
            alt=""
            aria-hidden="true"
            src="/img/vector-3.svg"
          />

          <motion.div
            ref={ref5}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView5 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="absolute left-[130px] top-[740px] inline-flex flex-col items-center justify-center gap-3 rounded-[32px] bg-[#ffffff] p-4 md:left-[1062px] md:top-[242px]"
          >
            <Graph />

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
      </div>
      <Advantages />
      <motion.div
        ref={ref6}
        initial={{ opacity: 0, y: 50 }}
        animate={inView6 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative h-fit w-full  md:h-[652px] md:w-[1376px]"
      >
        <div className="relative  h-fit w-full  md:h-[568px] md:w-[1376px]">
          <div className="flex w-full flex-col items-center gap-[68px] md:w-[1472px] md:!flex-row">
            <div className="relative flex  w-full flex-col items-start justify-center gap-7 md:w-[496px]">
              <div className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-left md:text-5xl md:leading-[60px]">
                {t('mechanisms.title')}
              </div>

              <button
                onClick={onClick}
                className="all-[unset] relative box-border  inline-flex w-full flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 md:w-fit"
              >
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                  {t('mechanisms.try')}
                </div>
              </button>
            </div>

            <div className="w-full md:w-[915px]" id="microcredit-slider">
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
                  <div className="relative flex h-[580px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 md:w-[443px] md:gap-12 md:p-12">
                    <img
                      className="absolute left-0 top-0 h-[467px] w-full md:w-[443px]"
                      alt="Vector"
                      src="/img/microcredit/vector-1-1.svg"
                    />

                    <div className="relative w-full flex-1 grow self-stretch">
                      <div className="relative left-0 top-[27px] inline-flex flex-col items-center justify-center gap-6 rounded-[32px] bg-[#ffffff] p-4 md:left-10">
                        <div className="relative flex w-[230px] flex-[0_0_auto] flex-col items-start gap-5 px-4 pb-0 pt-3">
                          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                            <div className="relative h-3.5 w-full self-stretch">
                              <div className="h-3w-full relative left-0 top-px md:left-[-3px] md:w-[203px]">
                                <img
                                  className="h-1w-full absolute left-px top-1 md:w-[202px]"
                                  alt="Vector"
                                  src="/img/microcredit/vector-136.svg"
                                />

                                <img
                                  className="h-1.5w-full absolute left-0 top-[3px] md:w-[169px]"
                                  alt="Vector"
                                  src="/img/microcredit/vector-137.svg"
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
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                      <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('processes.applications')}
                      </div>

                      <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                        {t('processes.applicationsDesc')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="relative flex h-[580px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 md:w-[443px] md:gap-12 md:p-12">
                    <img
                      className="absolute left-0 top-0 h-[467px]  w-full md:w-[377px]"
                      alt="Vector"
                      src="/img/microcredit/vector-1-6.svg"
                    />

                    <div className="relative w-full self-stretch">
                      <div className="relative left-0 top-[26px] h-[200px] w-full md:left-7 md:h-[170px] md:w-[290px]">
                        <div className="absolute left-7 top-9 flex w-full items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] p-2 opacity-[0.24] md:w-[235px]">
                          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#fbab0014] p-2.5">
                            <div className="relative ml-[-7711.00px] mt-[-1968.00px] size-6 bg-[100%_100%] opacity-0">
                              <div className="relative left-[-7711px] top-[-1968px] h-[15px] w-4">
                                <img
                                  className="absolute left-0 top-0 h-[3px] w-1.5"
                                  alt="Vector"
                                />

                                <img
                                  className="absolute left-0 top-0 h-[15px] w-4"
                                  alt="Vector"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="relative flex-1 text-base font-medium leading-6 tracking-normal text-gray-90 opacity-0 [font-family:'Roboto',Helvetica]">
                            {t('processes.applicationApproved')}
                          </div>
                        </div>

                        <div className="absolute left-3 top-7 flex w-full items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] p-2 opacity-50 md:w-[266px]">
                          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#fbab0014] p-2.5">
                            <div className="relative ml-[-7695.00px] mt-[-1954.00px] size-6 bg-[100%_100%]">
                              <div className="h-5w-full relative left-[3px] top-0.5 md:w-[18px]">
                                <img
                                  className="absolute left-[5px] top-[15px] h-[5px] w-2"
                                  alt="Vector"
                                  src="/img/microcredit/vector.svg"
                                />

                                <img
                                  className="absolute left-0 top-0 h-[17px] w-full md:w-[18px]"
                                  alt="Vector"
                                  src="/img/microcredit/vector-2.svg"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="relative flex-1 text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            {t('processes.applicationApproved')}
                          </div>
                        </div>

                        <div className="absolute left-0 top-0 flex w-full items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] p-2 md:w-[290px]">
                          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#fbab0014] p-2.5">
                            <div className="relative size-6 bg-[100%_100%]">
                              <div className="h-5w-full relative left-[3px] top-0.5 md:w-[18px]">
                                <img
                                  className="absolute left-[5px] top-[15px] h-[5px] w-2"
                                  alt="Vector"
                                  src="/img/microcredit/vector.svg"
                                />

                                <img
                                  className="absolute left-0 top-0 h-[17px] w-full md:w-[18px]"
                                  alt="Vector"
                                  src="/img/microcredit/vector-2.svg"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="relative flex-1 text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            {t('processes.applicationApproved')}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                      <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('processes.autoNotification')}
                      </div>

                      <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                        {t('processes.autoNotificationDesc')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="relative flex h-[580px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 md:w-[443px] md:gap-12 md:p-12">
                    <img
                      className="absolute left-0 top-0 h-[467px] w-full md:w-[443px]"
                      alt="Vector"
                      src="/img/microcredit/vector-1-6-1.svg"
                    />

                    <img
                      className="relative w-full flex-1 grow self-stretch"
                      alt="Frame"
                      src="/img/microcredit/frame-1948755086-2.svg"
                    />

                    <div className="relative flex h-[300px] w-full flex-col items-start gap-3 self-stretch">
                      <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('processes.bonusSystem')}
                      </div>

                      <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                        {t('processes.bonusSystemDesc')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="relative flex h-[580px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 md:w-[443px] md:gap-12 md:p-12">
                    <img
                      className="absolute left-0 top-0 h-[467px] w-full md:w-[443px]"
                      alt="Vector"
                      src="/img/microcredit/vector-1-9.svg"
                    />

                    <div className="relative w-full flex-1 grow self-stretch">
                      <div className="relative left-[22px] top-1.5 flex w-full items-center gap-4 md:left-[42px] md:w-[264px]">
                        <div className="relative size-[124px] rounded-3xl [background:url(/img/microcredit/frame-1948755022.png)_50%_50%_/_cover]" />

                        <div className="relative flex size-[124px] items-center gap-[53px] rounded-3xl bg-[#ffffff] px-4 py-6">
                          <div className="relative flex flex-1 grow flex-col items-start justify-between self-stretch">
                            <div className="relative mt-[-1.00px] self-stretch text-center text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('processes.applicationApproved')}
                            </div>

                            <div className="relative self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                              42,000₽
                            </div>
                          </div>

                          <img
                            className="absolute -top-2 left-[100px] size-8"
                            alt="Frame"
                            src="/img/microcredit/frame-18-4.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="relative flex h-[300px] w-full flex-col items-start gap-3 self-stretch">
                      <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('processes.personalAccount')}
                      </div>

                      <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                        {t('processes.personalAccountDesc')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-3">
                  <div className="relative flex h-[580px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 md:w-[443px] md:gap-12 md:p-12">
                    <div className="relative w-full flex-1 grow self-stretch">
                      <div className="relative -left-12 -top-12 w-[120%] md:w-[443px]">
                        <div className="absolute left-[77px] top-[55px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] py-2 pl-2 pr-5">
                          <img
                            className="relative flex-[0_0_auto]"
                            alt="Frame"
                            src="/img/microcredit/frame-19-1.svg"
                          />

                          <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            {t('processes.loanApplication')}
                          </div>
                        </div>

                        <img
                          className="absolute left-0 top-0 h-[339px] w-full md:w-[443px]"
                          alt="Vector"
                          src="/img/microcredit/vector-4-1.svg"
                        />

                        <div className="absolute left-[119px] top-[101px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] py-2 pl-2 pr-5">
                          <img
                            className="relative flex-[0_0_auto]"
                            alt="Frame"
                            src="/img/microcredit/frame-19-6.svg"
                          />

                          <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            {t('processes.refinancing')}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                      <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('processes.autoDocumentation')}
                      </div>

                      <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                        {t('processes.autoDocumentationDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="h-14w-full absolute left-[725px] top-[592px] hidden items-center justify-between rounded-full bg-[#f9fafd] p-1 md:flex md:w-[120px]">
            <button
              aria-controls="microcredit-slider"
              aria-label={t('processes.previousSlide')}
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
              aria-controls="microcredit-slider"
              aria-label={t('processes.nextSlide')}
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
      </motion.div>
      <CrmCapabilities />
      <Zaim />
      <ZaimChecker />
      <Analytics />
      <Integrations />
      <Feedback />
      <EmployeeWork />
      <RoleStructure />
      <Trust />
    </div>
  );
};
