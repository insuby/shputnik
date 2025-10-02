import { cx } from 'class-variance-authority';
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

import { useIsMobile } from 'shared/lib/use-is-mobile';
import { Graph, HeroButtons } from 'shared/ui';

export const MicroCredit = () => {
  const { t } = useTranslation(['microcredit']);
  const { setIsOpen } = useFeedbackForm();
  const isMobile = useIsMobile();

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
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[88px] p-0 lg:gap-[136px] lg:px-8 lg:pb-[136px] lg:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
        <div className="relative flex max-h-[857px] min-h-[600px] w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-violet-50 px-4 py-10 lg:h-auto lg:p-12">
          <svg
            width="1077"
            height="1131"
            viewBox="0 0 1077 1131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[var(--pos-441)] top-[var(--pos-minus140)] max-h-[857px]  w-full lg:w-[1108px]"
            aria-hidden={true}
          >
            <g opacity="0.32" filter="url(#filter0_f_9017_4482)">
              <path
                d="M464.894 521.819C440.801 465.832 494.232 408.667 523.96 387.083C722.805 309.922 732.997 568.509 668.74 658.847C604.482 749.185 408.97 795.098 377.327 721.567C345.684 648.036 495.01 591.802 464.894 521.819Z"
                fill="#3573FC"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_9017_4482"
                x="-3.05339e-05"
                y="-0.000152669"
                width="1076.87"
                height="1131"
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
                  result="effect1_foregroundBlur_9017_4482"
                />
              </filter>
            </defs>
          </svg>

          <HeroButtons buttonText={t('hero.buttonText')}>
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, y: 50 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 lg:w-[624px]  lg:gap-12"
            >
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 lg:inline-flex">
                <h1 className="relative mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[44px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica] lg:w-[624px] lg:text-left lg:text-6xl lg:leading-[68px]">
                  {t('hero.title')}
                </h1>

                <p className="relative text-center text-xl font-normal leading-7 tracking-normal text-[#ffffff99] [font-family:'Roboto',Helvetica] lg:max-w-[524px] lg:text-left">
                  {t('hero.description')}
                </p>
              </div>
            </motion.div>

            <svg
              className={cx('absolute bottom-0 right-0', {
                hidden: isMobile,
              })}
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
            className="left-[var(--pos-786)] top-[var(--pos-132)] hidden flex-col items-center justify-center gap-6 rounded-[32px] bg-[#ffffff] p-4 lg:absolute lg:flex lg:w-[324px]"
          >
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-5 self-stretch px-4 pb-4 pt-3">
                <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('application.title')}
                </div>

                <div className="relative flex w-64 flex-[0_0_auto] flex-col items-start gap-2">
                  <div className="relative h-3.5 w-full self-stretch">
                    <div className="relative left-[var(--pos-minus3)] top-px h-3 w-full lg:w-[261px]">
                      <svg
                        width="260"
                        height="4"
                        viewBox="0 0 260 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-px top-1 h-1 w-full lg:w-[260px]"
                      >
                        <path
                          d="M2 2H258"
                          stroke="#F2F5FF"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>

                      <svg
                        width="169"
                        height="6"
                        viewBox="0 0 169 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-1.5w-full absolute left-0 top-[3px] lg:w-[169px]"
                      >
                        <path
                          d="M3 3L166 3.00001"
                          stroke="#00CB82"
                          strokeWidth="6"
                          strokeLinecap="round"
                        />
                      </svg>

                      <div className="absolute left-[var(--pos-158)] top-0 size-3 rounded-md bg-green-60 shadow-[0px_4px_8px_#04ca8333]" />
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
                    <div className="relative left-[var(--pos-minus3)] top-px h-3 w-full lg:w-[261px]">
                      <svg
                        width="260"
                        height="4"
                        viewBox="0 0 260 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-px top-1 h-1 w-full lg:w-[260px]"
                      >
                        <path
                          d="M2 2L258 2.00002"
                          stroke="#F2F5FF"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>

                      <svg
                        width="95"
                        height="6"
                        viewBox="0 0 95 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-1.5w-full absolute left-0 top-[3px] lg:w-[95px]"
                      >
                        <path
                          d="M3 3H92"
                          stroke="#00CB82"
                          strokeWidth="6"
                          strokeLinecap="round"
                        />
                      </svg>

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
                <div className="relative mt-[-1.00px] w-full self-stretch whitespace-nowrap text-center text-base font-medium leading-6 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica] lg:w-[164px]">
                  {t('application.applyLoan')}
                </div>
              </button>
            </div>
          </motion.div>

          <svg
            width="964"
            height="720"
            viewBox="0 0 964 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[var(--pos-559)] top-0 h-[600px] w-full lg:w-[817px]"
            aria-hidden={true}
          >
            <g opacity="0.12" filter="url(#filter0_f_120_871)">
              <path
                d="M471.857 189.613C516.151 91.6805 654.128 93.3359 717.579 106.405C1054.45 273.715 729.711 594.357 535.654 618.03C341.596 641.702 49.3959 441.591 107.57 312.97C165.743 184.349 416.49 312.029 471.857 189.613Z"
                fill="#9FA7BC"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_120_871"
                x="0"
                y="0"
                width="963.789"
                height="720"
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
                  stdDeviation="50"
                  result="effect1_foregroundBlur_120_871"
                />
              </filter>
            </defs>
          </svg>

          <div className="relative left-[-30px] mx-auto flex w-fit justify-center lg:!hidden">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex w-full max-w-[324px] flex-col items-center justify-center gap-6 rounded-[32px] bg-[#ffffff] p-4"
            >
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-5 self-stretch px-4 pb-4 pt-3">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('application.title')}
                  </div>

                  <div className="relative flex w-64 flex-[0_0_auto] flex-col items-start gap-2">
                    <div className="relative h-3.5 w-full self-stretch">
                      <div className="relative left-[var(--pos-minus3)] top-px h-3 w-full lg:w-[261px]">
                        <svg
                          width="260"
                          height="4"
                          viewBox="0 0 260 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-px top-1 h-1 w-full lg:w-[260px]"
                        >
                          <path
                            d="M2 2H258"
                            stroke="#F2F5FF"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>

                        <svg
                          width="169"
                          height="6"
                          viewBox="0 0 169 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-1.5w-full absolute left-0 top-[3px] lg:w-[169px]"
                        >
                          <path
                            d="M3 3L166 3.00001"
                            stroke="#00CB82"
                            strokeWidth="6"
                            strokeLinecap="round"
                          />
                        </svg>

                        <div className="absolute left-[var(--pos-158)] top-0 size-3 rounded-md bg-green-60 shadow-[0px_4px_8px_#04ca8333]" />
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
                      <div className="relative left-[var(--pos-minus3)] top-px h-3 w-full lg:w-[261px]">
                        <svg
                          width="260"
                          height="4"
                          viewBox="0 0 260 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-px top-1 h-1 w-full lg:w-[260px]"
                        >
                          <path
                            d="M2 2L258 2.00002"
                            stroke="#F2F5FF"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>

                        <svg
                          width="95"
                          height="6"
                          viewBox="0 0 95 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-1.5w-full absolute left-0 top-[3px] lg:w-[95px]"
                        >
                          <path
                            d="M3 3H92"
                            stroke="#00CB82"
                            strokeWidth="6"
                            strokeLinecap="round"
                          />
                        </svg>

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
                  <div className="relative mt-[-1.00px] w-full self-stretch whitespace-nowrap text-center text-base font-medium leading-6 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica] lg:w-[164px]">
                    {t('application.applyLoan')}
                  </div>
                </button>
              </div>
            </motion.div>

            <div className="absolute left-1/2 top-1/4 inline-flex flex-col items-center justify-center gap-3 rounded-[32px] bg-[#ffffff] p-4 md:top-1/2">
              <Graph />

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2.5 rounded-[20px] bg-[#f6f8ff] p-5">
                <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
                  <div className="relative size-2 rounded bg-blue-50" />

                  <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] lg:w-[72px]">
                    {t('chart.current')}
                  </div>

                  <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:w-[72px]">
                    48,456₽
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
                  <div className="relative size-2 rounded bg-green-60" />

                  <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] lg:w-[72px]">
                    {t('chart.main')}
                  </div>

                  <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:w-[72px]">
                    122,000₽
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
                  <div className="relative size-2 rounded bg-yellow-50" />

                  <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] lg:w-[72px]">
                    {t('chart.interest')}
                  </div>

                  <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:w-[72px]">
                    4,000₽
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
                  <div className="relative size-2 rounded bg-red-50" />

                  <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] lg:w-[72px]">
                    {t('chart.penalty')}
                  </div>

                  <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:w-[72px]">
                    2,700₽
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            ref={ref5}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView5 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="absolute left-[var(--pos-130)] top-[var(--pos-740)] hidden flex-col items-center justify-center gap-3 rounded-[32px] bg-[#ffffff] p-4 lg:left-[var(--pos-1062)] lg:top-[var(--pos-242)] lg:inline-flex"
          >
            <Graph />

            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2.5 rounded-[20px] bg-[#f6f8ff] p-5">
              <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
                <div className="relative size-2 rounded bg-blue-50" />

                <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] lg:w-[72px]">
                  {t('chart.current')}
                </div>

                <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:w-[72px]">
                  48,456₽
                </div>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
                <div className="relative size-2 rounded bg-green-60" />

                <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] lg:w-[72px]">
                  {t('chart.main')}
                </div>

                <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:w-[72px]">
                  122,000₽
                </div>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
                <div className="relative size-2 rounded bg-yellow-50" />

                <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] lg:w-[72px]">
                  {t('chart.interest')}
                </div>

                <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:w-[72px]">
                  4,000₽
                </div>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
                <div className="relative size-2 rounded bg-red-50" />

                <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] lg:w-[72px]">
                  {t('chart.penalty')}
                </div>

                <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:w-[72px]">
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
        className="relative h-fit w-full  lg:h-[652px]"
      >
        <div className="relative h-fit w-full  lg:h-[568px]">
          <div className="flex w-full flex-col items-center gap-[68px] lg:!flex-row xl:w-fit">
            <div className="relative flex  w-full flex-col items-start justify-center gap-7 lg:w-[496px]">
              <div className="relative mt-[-1.00px] min-w-[400px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-left lg:text-5xl lg:leading-[60px]">
                {t('mechanisms.title')}
              </div>

              <button
                onClick={onClick}
                className="all-[unset] relative box-border  inline-flex w-full flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 lg:w-fit"
              >
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                  {t('mechanisms.try')}
                </div>
              </button>
            </div>

            <div className="w-full lg:w-[915px]" id="microcredit-slider">
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
                <div className="px-0 lg:px-3">
                  <div className="relative flex h-[580px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 lg:w-[443px] lg:gap-12 lg:p-12">
                    <svg
                      width="638"
                      height="682"
                      viewBox="0 0 638 682"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-0 top-0 h-[467px] w-full lg:w-[443px]"
                    >
                      <g opacity="0.16" filter="url(#filter0_f_9122_617)">
                        <path
                          d="M271.254 368.279C228.004 368.251 205.763 317.375 200.049 291.941C205.627 140.694 376.992 206.692 417.807 273.94C458.623 341.189 433.62 481.487 376.817 481.45C320.013 481.414 325.317 368.313 271.254 368.279Z"
                          fill="#725DD6"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_9122_617"
                          x="0"
                          y="0"
                          width="638"
                          height="681.5"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="100"
                            result="effect1_foregroundBlur_9122_617"
                          />
                        </filter>
                      </defs>
                    </svg>

                    <div className="relative w-full flex-1 grow self-stretch">
                      <div className="relative left-0 top-[var(--pos-27)] inline-flex flex-col items-center justify-center gap-6 rounded-[32px] bg-[#ffffff] p-4 lg:left-10">
                        <div className="relative flex w-[230px] flex-[0_0_auto] flex-col items-start gap-5 px-4 pb-0 pt-3">
                          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                            <div className="relative h-3.5 w-full self-stretch">
                              <div className="h-3w-full relative left-0 top-px lg:left-[var(--pos-minus3)] lg:w-[203px]">
                                <svg
                                  width="202"
                                  height="4"
                                  viewBox="0 0 202 4"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-1w-full absolute left-px top-1 lg:w-[202px]"
                                >
                                  <path
                                    d="M2 2L200 2.00002"
                                    stroke="#F2F5FF"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                  />
                                </svg>

                                <svg
                                  width="169"
                                  height="6"
                                  viewBox="0 0 169 6"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-1.5w-full absolute left-0 top-[3px] lg:w-[169px]"
                                >
                                  <path
                                    d="M3 3L166 3.00001"
                                    stroke="#00CB82"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                  />
                                </svg>

                                <div className="absolute left-[var(--pos-158)] top-0 size-3 rounded-md bg-green-60 shadow-[0px_4px_8px_#04ca8333]" />
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
                <div className="px-0 lg:px-3">
                  <div className="relative flex h-[580px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 lg:w-[443px] lg:gap-12 lg:p-12">
                    <svg
                      width="638"
                      height="682"
                      viewBox="0 0 638 682"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-0 top-0 h-[467px]  w-full lg:w-[377px]"
                    >
                      <g opacity="0.2" filter="url(#filter0_f_9122_622)">
                        <path
                          d="M271.254 368.279C228.004 368.251 205.763 317.375 200.049 291.941C205.627 140.694 376.992 206.692 417.807 273.94C458.623 341.189 433.62 481.487 376.817 481.45C320.013 481.414 325.317 368.313 271.254 368.279Z"
                          fill="#725DD6"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_9122_622"
                          x="0"
                          y="0"
                          width="638"
                          height="681.5"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="100"
                            result="effect1_foregroundBlur_9122_622"
                          />
                        </filter>
                      </defs>
                    </svg>

                    <div className="relative w-full self-stretch">
                      <div className="relative left-0 top-[26px] h-[200px] w-full lg:left-7 lg:h-[170px] lg:w-[290px]">
                        <div className="absolute left-7 top-9 flex w-full items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] p-2 opacity-[0.24] lg:w-[235px]">
                          <div className="relative flex-1 text-base font-medium leading-6 tracking-normal text-gray-90 opacity-0 [font-family:'Roboto',Helvetica]">
                            {t('processes.applicationApproved')}
                          </div>
                        </div>

                        <div className="absolute left-3 top-7 flex w-full items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] p-2 opacity-50 lg:w-[266px]">
                          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#fbab0014] p-2.5">
                            <div className="relative ml-[-7695.00px] mt-[-1954.00px] size-6 bg-[100%_100%]">
                              <div className="h-5w-full relative left-[3px] top-0.5 lg:w-[18px]">
                                <svg
                                  width="8"
                                  height="5"
                                  viewBox="0 0 8 5"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="absolute left-[var(--pos-5)] top-[var(--pos-15)] h-[5px] w-2"
                                >
                                  <path
                                    d="M0.841943 0.8422C0.841943 1.67977 1.17467 2.48303 1.76692 3.07528C2.35917 3.66753 3.16243 4.00026 4 4.00026C4.83757 4.00026 5.64083 3.66753 6.23308 3.07528C6.82533 2.48303 7.15806 1.67977 7.15806 0.8422"
                                    stroke="#FBAB00"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>

                                <svg
                                  width="19"
                                  height="17"
                                  viewBox="0 0 19 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="absolute left-0 top-0 h-[17px] w-full lg:w-[18px]"
                                >
                                  <path
                                    d="M2.35059 7.73193C2.35059 5.89859 3.07888 4.14034 4.37524 2.84398C5.67161 1.54761 7.42986 0.819322 9.2632 0.819322C11.0965 0.819322 12.8548 1.54761 14.1511 2.84398C15.4475 4.14034 16.1758 5.89859 16.1758 7.73193C16.1758 11.171 16.9727 13.9341 17.6063 15.0286C17.6736 15.1451 17.7091 15.2773 17.7092 15.4119C17.7094 15.5465 17.6741 15.6788 17.607 15.7955C17.5399 15.9122 17.4433 16.0092 17.327 16.0768C17.2106 16.1444 17.0785 16.1802 16.9439 16.1807H1.58252C1.44809 16.1799 1.31622 16.1438 1.20011 16.076C1.08399 16.0083 0.987683 15.9113 0.920818 15.7946C0.853953 15.678 0.818869 15.5459 0.819073 15.4115C0.819277 15.277 0.854762 15.145 0.921982 15.0286C1.55468 13.9341 2.35059 11.17 2.35059 7.73193Z"
                                    stroke="#FBAB00"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div className="relative flex-1 text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            {t('processes.applicationApproved')}
                          </div>
                        </div>

                        <div className="absolute left-0 top-0 flex w-full items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] p-2 lg:w-[290px]">
                          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#fbab0014] p-2.5">
                            <div className="relative size-6 bg-[100%_100%]">
                              <div className="h-5w-full relative left-[3px] top-0.5 lg:w-[18px]">
                                <svg
                                  width="8"
                                  height="5"
                                  viewBox="0 0 8 5"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="absolute left-[var(--pos-5)] top-[var(--pos-15)] h-[5px] w-2"
                                >
                                  <path
                                    d="M0.841943 0.8422C0.841943 1.67977 1.17467 2.48303 1.76692 3.07528C2.35917 3.66753 3.16243 4.00026 4 4.00026C4.83757 4.00026 5.64083 3.66753 6.23308 3.07528C6.82533 2.48303 7.15806 1.67977 7.15806 0.8422"
                                    stroke="#FBAB00"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>

                                <svg
                                  width="19"
                                  height="17"
                                  viewBox="0 0 19 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="absolute left-0 top-0 h-[17px] w-full lg:w-[18px]"
                                >
                                  <path
                                    d="M2.35059 7.73193C2.35059 5.89859 3.07888 4.14034 4.37524 2.84398C5.67161 1.54761 7.42986 0.819322 9.2632 0.819322C11.0965 0.819322 12.8548 1.54761 14.1511 2.84398C15.4475 4.14034 16.1758 5.89859 16.1758 7.73193C16.1758 11.171 16.9727 13.9341 17.6063 15.0286C17.6736 15.1451 17.7091 15.2773 17.7092 15.4119C17.7094 15.5465 17.6741 15.6788 17.607 15.7955C17.5399 15.9122 17.4433 16.0092 17.327 16.0768C17.2106 16.1444 17.0785 16.1802 16.9439 16.1807H1.58252C1.44809 16.1799 1.31622 16.1438 1.20011 16.076C1.08399 16.0083 0.987683 15.9113 0.920818 15.7946C0.853953 15.678 0.818869 15.5459 0.819073 15.4115C0.819277 15.277 0.854762 15.145 0.921982 15.0286C1.55468 13.9341 2.35059 11.17 2.35059 7.73193Z"
                                    stroke="#FBAB00"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
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
                <div className="px-0 lg:px-3">
                  <div className="relative flex h-[580px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 lg:w-[443px] lg:gap-12 lg:p-12">
                    <svg
                      width="638"
                      height="682"
                      viewBox="0 0 638 682"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-0 top-0 h-[467px] w-full lg:w-[443px]"
                    >
                      <g opacity="0.2" filter="url(#filter0_f_9668_11045)">
                        <path
                          d="M271.254 368.279C228.004 368.251 205.763 317.375 200.049 291.941C205.627 140.694 376.992 206.692 417.807 273.94C458.623 341.189 433.62 481.487 376.817 481.45C320.013 481.414 325.317 368.313 271.254 368.279Z"
                          fill="#725DD6"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_9668_11045"
                          x="0"
                          y="0"
                          width="638"
                          height="681.5"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="100"
                            result="effect1_foregroundBlur_9668_11045"
                          />
                        </filter>
                      </defs>
                    </svg>

                    <svg
                      width="347"
                      height="136"
                      viewBox="0 0 347 136"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative w-full flex-1 grow self-stretch"
                    >
                      <rect
                        x="128"
                        y="6"
                        width="92"
                        height="92"
                        rx="24"
                        fill="white"
                      />
                      <rect
                        x="148"
                        y="26"
                        width="52"
                        height="52"
                        rx="26"
                        fill="#3573FC"
                        fillOpacity="0.08"
                      />
                      <path
                        d="M174 56C176.209 56 178 54.2091 178 52C178 49.7909 176.209 48 174 48C171.791 48 170 49.7909 170 52C170 54.2091 171.791 56 174 56Z"
                        stroke="#3573FC"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M188 44H160V60H188V44Z"
                        stroke="#3573FC"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M188 49C186.751 48.7883 185.598 48.1933 184.703 47.2974C183.807 46.4015 183.212 45.2491 183 44"
                        stroke="#3573FC"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M183 60C183.212 58.7509 183.807 57.5985 184.703 56.7026C185.598 55.8067 186.751 55.2117 188 55"
                        stroke="#3573FC"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M160 55C161.249 55.2117 162.402 55.8067 163.297 56.7026C164.193 57.5985 164.788 58.7509 165 60"
                        stroke="#3573FC"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M165 44C164.788 45.2491 164.193 46.4015 163.297 47.2974C162.402 48.1933 161.249 48.7883 160 49"
                        stroke="#3573FC"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="8"
                        y="38"
                        width="92"
                        height="92"
                        rx="24"
                        fill="white"
                      />
                      <rect
                        x="28"
                        y="58"
                        width="52"
                        height="52"
                        rx="26"
                        fill="#E74951"
                        fillOpacity="0.08"
                      />
                      <path
                        d="M63 75L45 93"
                        stroke="#E74951"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M47.5 81C49.433 81 51 79.433 51 77.5C51 75.567 49.433 74 47.5 74C45.567 74 44 75.567 44 77.5C44 79.433 45.567 81 47.5 81Z"
                        stroke="#E74951"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M60.5 94C62.433 94 64 92.433 64 90.5C64 88.567 62.433 87 60.5 87C58.567 87 57 88.567 57 90.5C57 92.433 58.567 94 60.5 94Z"
                        stroke="#E74951"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="248"
                        y="38"
                        width="92"
                        height="92"
                        rx="24"
                        fill="white"
                      />
                      <rect
                        x="268"
                        y="58"
                        width="52"
                        height="52"
                        rx="26"
                        fill="#725DD6"
                        fillOpacity="0.08"
                      />
                      <path
                        d="M305 78H283C282.448 78 282 78.4477 282 79V83C282 83.5523 282.448 84 283 84H305C305.552 84 306 83.5523 306 83V79C306 78.4477 305.552 78 305 78Z"
                        stroke="#725DD6"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M304 84V93C304 93.2652 303.895 93.5196 303.707 93.7071C303.52 93.8946 303.265 94 303 94H285C284.735 94 284.48 93.8946 284.293 93.7071C284.105 93.5196 284 93.2652 284 93V84"
                        stroke="#725DD6"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M294 78V94"
                        stroke="#725DD6"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M300.099 71.9012C301.266 73.0687 301.335 75.0337 300.099 76.1287C297.985 78 294 78 294 78C294 78 294 74.015 295.875 71.9012C296.966 70.665 298.931 70.7337 300.099 71.9012Z"
                        stroke="#725DD6"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M287.901 71.9012C286.734 73.0687 286.665 75.0337 287.901 76.1287C290.015 78 294 78 294 78C294 78 294 74.015 292.125 71.9012C291.034 70.665 289.069 70.7337 287.901 71.9012Z"
                        stroke="#725DD6"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M100 68L128 68" stroke="white" strokeWidth="2" />
                      <path d="M220 68L248 68" stroke="white" strokeWidth="2" />
                    </svg>

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
                <div className="px-0 lg:px-3">
                  <div className="relative flex h-[580px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 lg:w-[443px] lg:gap-12 lg:p-12">
                    <svg
                      width="638"
                      height="682"
                      viewBox="0 0 638 682"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-0 top-0 h-[467px] w-full lg:w-[443px]"
                    >
                      <g opacity="0.2" filter="url(#filter0_f_9668_11877)">
                        <path
                          d="M271.254 368.279C228.004 368.251 205.763 317.375 200.049 291.941C205.627 140.694 376.992 206.692 417.807 273.94C458.623 341.189 433.62 481.487 376.817 481.45C320.013 481.414 325.317 368.313 271.254 368.279Z"
                          fill="#725DD6"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_9668_11877"
                          x="0"
                          y="0"
                          width="638"
                          height="681.5"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="100"
                            result="effect1_foregroundBlur_9668_11877"
                          />
                        </filter>
                      </defs>
                    </svg>

                    <div className="relative w-full flex-1 grow self-stretch">
                      <div className="relative left-[var(--pos-22)] top-1.5 flex w-full items-center gap-4 lg:left-[var(--pos-42)] lg:w-[264px]">
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

                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute -top-2 left-[100px] size-8"
                          >
                            <rect
                              width="32"
                              height="32"
                              rx="16"
                              fill="#00CB82"
                            />
                            <path
                              d="M10.5 17L14 20.5L22 12.5"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="square"
                              strokeLinejoin="round"
                            />
                          </svg>
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

                <div className="px-0 md:px-3">
                  <div className="relative flex h-[580px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 lg:w-[443px] lg:gap-12 lg:p-12">
                    <div className="relative w-full flex-1 grow self-stretch">
                      <div className="relative -left-12 -top-12 w-[120%] lg:w-[443px]">
                        <div className="absolute left-[var(--pos-77)] top-[var(--pos-55)] inline-flex items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] py-2 pl-2 pr-5">
                          <svg
                            width="44"
                            height="44"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative flex-[0_0_auto]"
                          >
                            <rect
                              width="44"
                              height="44"
                              rx="22"
                              fill="#3573FC"
                              fillOpacity="0.08"
                            />
                            <path
                              d="M25.75 31H15.25C15.0511 31 14.8603 30.921 14.7197 30.7803C14.579 30.6397 14.5 30.4489 14.5 30.25V16.75C14.5 16.5511 14.579 16.3603 14.7197 16.2197C14.8603 16.079 15.0511 16 15.25 16H22.75L26.5 19.75V30.25C26.5 30.4489 26.421 30.6397 26.2803 30.7803C26.1397 30.921 25.9489 31 25.75 31Z"
                              stroke="#3573FC"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.5 16V13.75C17.5 13.5511 17.579 13.3603 17.7197 13.2197C17.8603 13.079 18.0511 13 18.25 13H25.75L29.5 16.75V27.25C29.5 27.4489 29.421 27.6397 29.2803 27.7803C29.1397 27.921 28.9489 28 28.75 28H26.5"
                              stroke="#3573FC"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18.25 24.25H22.75"
                              stroke="#3573FC"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18.25 27.25H22.75"
                              stroke="#3573FC"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            {t('processes.loanApplication')}
                          </div>
                        </div>

                        <svg
                          width="524"
                          height="422"
                          viewBox="0 0 524 422"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-0 top-0 h-[339px] w-full lg:w-[443px]"
                        >
                          <g opacity="0.32" filter="url(#filter0_f_9670_11051)">
                            <path
                              d="M264.727 260.394C251.592 280.662 211.172 269.289 192.604 261.069C94.1848 193.639 189.84 141.57 246.73 151.25C303.62 160.929 388.901 232.775 371.65 259.395C354.399 286.014 281.146 235.059 264.727 260.394Z"
                              fill="#9FA7BC"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_f_9670_11051"
                              x="0"
                              y="0"
                              width="524"
                              height="421.855"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="75"
                                result="effect1_foregroundBlur_9670_11051"
                              />
                            </filter>
                          </defs>
                        </svg>

                        <div className="absolute left-[var(--pos-119)] top-[var(--pos-101)] inline-flex items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] py-2 pl-2 pr-5">
                          <svg
                            width="44"
                            height="44"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative flex-[0_0_auto]"
                          >
                            <rect
                              width="44"
                              height="44"
                              rx="22"
                              fill="#00CB82"
                              fillOpacity="0.08"
                            />
                            <path
                              d="M25.75 19H30.25V14.5"
                              stroke="#00CB82"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M30.25 19L27.5988 16.3488C26.0633 14.8134 23.9846 13.9453 21.8132 13.9326C19.6419 13.92 17.5532 14.7639 16 16.2813"
                              stroke="#00CB82"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18.25 25H13.75V29.5"
                              stroke="#00CB82"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.75 25L16.4012 27.6512C17.9367 29.1866 20.0154 30.0547 22.1868 30.0674C24.3581 30.08 26.4468 29.2361 28 27.7188"
                              stroke="#00CB82"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

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
          <div className="absolute left-[var(--pos-725)] top-[592px] hidden h-14 w-full items-center justify-between rounded-full bg-[#f9fafd] p-1 lg:flex lg:w-[120px]">
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
      <ZaimChecker />
      <CrmCapabilities />
      <Zaim />
      <Analytics />
      <Integrations />
      <Feedback />
      <EmployeeWork />
      <RoleStructure />
      <Trust />
    </div>
  );
};
