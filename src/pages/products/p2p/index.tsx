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

import { PAGE_META } from 'shared/lib/page-meta-config';
import { useIsMobile } from 'shared/lib/use-is-mobile';
import { usePageMeta } from 'shared/lib/use-page-meta';
import { Check10, Graph, HeroButtons } from 'shared/ui';

export const P2P = () => {
  const { t } = useTranslation(['p2p']);
  const isMobile = useIsMobile();
  const pageMeta = usePageMeta(PAGE_META.p2p);
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

  const inView1 = useInView(ref1, { once: true, margin: '-30px' });
  const inView3 = useInView(ref3, { once: true, margin: '-30px' });
  const inView18 = useInView(ref18, { once: true, margin: '-30px' });
  const inView20 = useInView(ref20, { once: true, margin: '-30px' });

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
    <>
      {pageMeta}
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[88px] p-0 lg:w-full lg:gap-[136px] lg:px-8 lg:pb-[136px] lg:pt-8">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
          <div className="relative flex min-h-[600px] w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-green-60 p-7 lg:p-12">
            <svg
              width="1688"
              height="1367"
              viewBox="0 0 1688 1367"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[var(--pos-441)] top-[var(--pos-minus-140)] h-[1060px] w-full lg:w-[1108px]"
            >
              <g opacity="0.2" filter="url(#filter0_f_9267_12262)">
                <path
                  d="M847.72 462.293C913.979 347.979 1082.53 367.028 1158.53 390.843C1549.9 637.044 1113.16 989.147 872.885 994.155C632.615 999.164 299.921 718.356 386.944 568.219C473.966 418.083 764.896 605.186 847.72 462.293Z"
                  fill="#3573FC"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_9267_12262"
                  x="0.000579958"
                  y="-3.05241e-05"
                  width="1687.86"
                  height="1367"
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
                    result="effect1_foregroundBlur_9267_12262"
                  />
                </filter>
              </defs>
            </svg>

            <HeroButtons>
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 lg:w-[624px]  lg:gap-12">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 lg:inline-flex">
                  <motion.h1
                    ref={ref1}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                    className="relative mt-[-1.00px] w-full  text-center text-[36px] font-medium leading-[44px] tracking-normal text-white [font-family:'Roboto',Helvetica] lg:w-[624px] lg:text-left lg:text-6xl lg:leading-[68px]"
                  >
                    {t('hero.title')}
                  </motion.h1>

                  <motion.p
                    ref={ref2}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    className="relative mx-auto w-full max-w-[80%] text-center text-xl font-normal leading-7 tracking-normal text-[#ffffffcc] [font-family:'Roboto',Helvetica] lg:m-0 lg:w-[624px] lg:text-left"
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
              className="relative left-[-40px] right-0 top-[var(--pos-78)] mx-auto flex w-[274px] flex-col items-center justify-center overflow-hidden rounded-[32px] bg-green-50 lg:absolute lg:left-[var(--pos-802)] lg:right-auto"
            >
              <div className="relative flex w-fit flex-[0_0_auto] flex-col items-center justify-center gap-5 self-stretch p-5">
                <svg
                  width="694"
                  height="594"
                  viewBox="0 0 694 594"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[-13px] top-1.5 h-[330px] w-full lg:w-[345px]"
                >
                  <g opacity="0.4" filter="url(#filter0_f_9267_13639)">
                    <path
                      d="M348.174 228.069C368.821 192.447 421.344 198.383 445.025 205.804C566.982 282.524 430.887 392.244 356.016 393.804C281.144 395.365 177.473 307.862 204.59 261.077C231.707 214.293 322.365 272.596 348.174 228.069Z"
                      fill="#00CB82"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_9267_13639"
                      x="0"
                      y="-3.05443e-05"
                      width="693.986"
                      height="594"
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
                        stdDeviation="100"
                        result="effect1_foregroundBlur_9267_13639"
                      />
                    </filter>
                  </defs>
                </svg>

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
                      <div className="h-2.5w-full absolute left-0.5 top-[3px] lg:w-[9px]">
                        <svg
                          width="2"
                          height="10"
                          viewBox="0 0 2 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-1 top-0 h-2.5 w-1"
                        >
                          <path
                            d="M0.630342 9.36927V0.630727"
                            stroke="white"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-0 top-0 h-[5px] w-full lg:w-[11px]"
                        >
                          <path
                            d="M0.660783 5.0004L5 0.661187L9.33922 5.0004"
                            stroke="white"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <svg
                        width="11"
                        height="2"
                        viewBox="0 0 11 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-pxw-full absolute left-0.5 top-0.5 lg:w-[11px]"
                      >
                        <path
                          d="M0.609347 0.609719H10.3907"
                          stroke="white"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-white [font-family:'Inter',Helvetica]">
                      {t('dashboard.withdraw')}
                    </div>
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2 rounded-2xl bg-[#ffffff29] px-2.5 py-1.5">
                    <div className="relative size-3.5">
                      <div className="h-2.5w-full absolute left-0.5 top-px lg:w-[9px]">
                        <svg
                          width="2"
                          height="10"
                          viewBox="0 0 2 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-1 top-0 h-2.5 w-px"
                        >
                          <path
                            d="M0.630342 0.630727V9.36927"
                            stroke="white"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-0 top-1 h-[5px] w-full lg:w-[9px]"
                        >
                          <path
                            d="M0.660783 0.661187L5 5.0004L9.33922 0.661187"
                            stroke="white"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <svg
                        width="11"
                        height="2"
                        viewBox="0 0 11 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-pxw-full absolute left-0.5 top-[11px] lg:w-[11px]"
                      >
                        <path
                          d="M0.609347 0.609719H10.3907"
                          stroke="white"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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

                    <div className="relative flex w-full flex-col items-start rounded-xl bg-[#eaedf7] p-3 lg:w-[88px]">
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

                    <div className="relative flex w-full flex-col items-start rounded-xl bg-[#eaedf7] p-3 lg:w-[88px]">
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

            <svg
              width="675"
              height="745"
              viewBox="0 0 675 745"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[var(--pos-739)] top-[var(--pos-46)] h-[554px] w-full lg:w-[637px]"
              aria-hidden={true}
            >
              <g opacity="0.32" filter="url(#filter0_f_9267_13714)">
                <path
                  d="M399.512 346.545C450.592 351.671 470.87 414.38 474.624 445.094C450.225 623.077 255.595 524.946 215.306 440.712C175.017 356.477 221.07 193.713 288.157 200.445C355.245 207.177 335.661 340.138 399.512 346.545Z"
                  fill="#9FA7BC"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_9267_13714"
                  x="0"
                  y="0"
                  width="674.867"
                  height="745"
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
                    stdDeviation="100"
                    result="effect1_foregroundBlur_9267_13714"
                  />
                </filter>
              </defs>
            </svg>

            <motion.div
              ref={ref2}
              initial={{ opacity: 0, x: -50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              className="absolute bottom-10 left-[130px] right-0 mx-auto mt-auto inline-flex h-72 w-fit flex-col items-start justify-center gap-4 rounded-[32px] bg-white p-7 lg:left-[var(--pos-1000)] lg:right-auto lg:top-[var(--pos-228)]"
            >
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] lg:w-[180px]">
                  {t('dashboard.totalIncome')}
                </div>

                <div className="relative w-full text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:w-[264px]">
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

              <svg
                width="329"
                height="66"
                viewBox="0 0 329 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-[106px] h-[104px] w-full lg:w-[328px]"
              >
                <path
                  d="M0.246214 59.3603L24.7228 53.1261C29.1825 51.9902 33.9154 52.8286 37.7136 55.4275L46.9086 61.7193C53.9906 66.5651 63.6339 64.9648 68.7709 58.0911L78.6246 44.9062C82.3245 39.9556 88.5437 37.5771 94.6028 38.7955L123.082 44.5221C128.473 45.6063 133.895 42.7989 136.121 37.7698L140.075 28.8359C142.413 23.5527 149.804 23.2671 152.543 28.3542V28.3542C155.376 33.6158 163.09 33.0815 165.171 27.4795L171.374 10.7804C176.264 -2.38511 194.944 -2.21685 199.596 11.0346L213.17 49.6995C215.05 55.0568 222.63 55.0481 224.498 49.6865V49.6865C226.39 44.2596 234.092 44.3388 235.871 49.8034L237.582 55.0596C239.866 62.0738 249.68 62.3668 252.379 55.5014L262.421 29.9466C265.432 22.2849 275.801 21.1403 280.411 27.9606V27.9606C283.669 32.7809 290.286 33.9153 294.964 30.4555L328.406 5.71847"
                  stroke="url(#paint0_linear_9267_13738)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_9267_13738"
                    x1="0.246214"
                    y1="43.5685"
                    x2="328.406"
                    y2="43.5685"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="0.269231" stopColor="#00CB82" />
                    <stop offset="0.692308" stopColor="#00CB82" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute left-[180px] top-[131px] size-3 rounded-md border-2 border-solid border-[#00cb82] bg-[#ffffff]" />
            </motion.div>
          </div>
        </div>
        <Advantages />

        <div className="relative flex w-full flex-col lg:h-[568px] lg:w-full lg:!flex-row">
          <div className="flex w-full flex-col items-center gap-[68px] lg:w-[1472px] lg:!flex-row">
            <div className="relative flex  w-[496px] w-full flex-col items-start justify-center gap-7">
              <div className="relative mt-[-1.00px] self-stretch text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-5xl lg:leading-[60px]">
                {t('customizableProcesses.title')}
              </div>

              <button
                onClick={handleTryClick}
                className="all-[unset]  relative box-border  inline-flex w-full flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 lg:w-fit"
              >
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                  {t('customizableProcesses.tryButton')}
                </div>
              </button>
            </div>

            <div className="w-full lg:w-[915px]" id="p2p-slider">
              <Slider
                ref={sliderRef}
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={window.innerWidth < 700 ? 1 : 2}
                slidesToScroll={1}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                <div className="px-0 md:px-3">
                  <div className="relative flex h-[500px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 lg:w-[443px] lg:gap-12 lg:p-12">
                    <svg
                      width="638"
                      height="682"
                      viewBox="0 0 638 682"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-0 top-0 h-[406px] w-full lg:w-[443px]"
                    >
                      <g opacity="0.16" filter="url(#filter0_f_9267_13346)">
                        <path
                          d="M271.254 368.279C228.004 368.251 205.763 317.376 200.049 291.941C205.626 140.694 376.991 206.692 417.807 273.94C458.623 341.189 433.62 481.487 376.817 481.451C320.013 481.415 325.317 368.313 271.254 368.279Z"
                          fill="#725DD6"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_9267_13346"
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
                            result="effect1_foregroundBlur_9267_13346"
                          />
                        </filter>
                      </defs>
                    </svg>

                    <div className="relative w-full flex-[2] grow self-stretch">
                      <div className="relative -left-12 -top-12 w-[120%] lg:w-[443px]">
                        <div className="absolute left-[58px] top-[69px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-white py-2 pl-2 pr-5">
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
                              d="M31 15.25L22 23.5L13 15.25"
                              stroke="#3573FC"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13 15.25H31V28C31 28.1989 30.921 28.3897 30.7803 28.5303C30.6397 28.671 30.4489 28.75 30.25 28.75H13.75C13.5511 28.75 13.3603 28.671 13.2197 28.5303C13.079 28.3897 13 28.1989 13 28V15.25Z"
                              stroke="#3573FC"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.3649 22L13.2324 28.5381"
                              stroke="#3573FC"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M30.7692 28.5381L23.6367 22"
                              stroke="#3573FC"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            {t('notifications.applicationApproved')}
                          </div>
                        </div>

                        <svg
                          width="524"
                          height="422"
                          viewBox="0 0 524 422"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-0 top-0 h-[352px] w-full lg:w-[443px]"
                        >
                          <g opacity="0.32" filter="url(#filter0_f_9281_847)">
                            <path
                              d="M264.727 260.394C251.592 280.662 211.173 269.288 192.605 261.068C94.1856 193.639 189.84 141.569 246.73 151.249C303.621 160.929 388.901 232.775 371.65 259.394C354.399 286.013 281.146 235.059 264.727 260.394Z"
                              fill="#9FA7BC"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_f_9281_847"
                              x="0"
                              y="0"
                              width="524"
                              height="421.854"
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
                                result="effect1_foregroundBlur_9281_847"
                              />
                            </filter>
                          </defs>
                        </svg>

                        <div className="absolute left-[100px] top-[115px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-white py-2 pl-2 pr-5">
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
                              d="M22 23.125C22.6213 23.125 23.125 22.6213 23.125 22C23.125 21.3787 22.6213 20.875 22 20.875C21.3787 20.875 20.875 21.3787 20.875 22C20.875 22.6213 21.3787 23.125 22 23.125Z"
                              fill="#00CB82"
                            />
                            <path
                              d="M17.875 23.125C18.4963 23.125 19 22.6213 19 22C19 21.3787 18.4963 20.875 17.875 20.875C17.2537 20.875 16.75 21.3787 16.75 22C16.75 22.6213 17.2537 23.125 17.875 23.125Z"
                              fill="#00CB82"
                            />
                            <path
                              d="M26.125 23.125C26.7463 23.125 27.25 22.6213 27.25 22C27.25 21.3787 26.7463 20.875 26.125 20.875C25.5037 20.875 25 21.3787 25 22C25 22.6213 25.5037 23.125 26.125 23.125Z"
                              fill="#00CB82"
                            />
                            <path
                              d="M17.4926 29.7916C19.3831 30.8857 21.607 31.255 23.7496 30.8305C25.8923 30.4061 27.8075 29.2169 29.1381 27.4847C30.4687 25.7525 31.124 23.5955 30.9817 21.4158C30.8394 19.2362 29.9093 17.1827 28.3648 15.6381C26.8202 14.0936 24.7667 13.1635 22.5871 13.0212C20.4074 12.8789 18.2504 13.5342 16.5182 14.8648C14.786 16.1954 13.5968 18.1106 13.1724 20.2533C12.7479 22.3959 13.1172 24.6198 14.2113 26.5103L13.0385 30.0119C12.9945 30.144 12.9881 30.2858 13.0201 30.4214C13.052 30.557 13.1212 30.681 13.2197 30.7795C13.3182 30.878 13.4422 30.9471 13.5777 30.9791C13.7133 31.0111 13.8551 31.0047 13.9873 30.9606L17.4926 29.7916Z"
                              stroke="#00CB82"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            {t('notifications.passwordChanged')}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[1] flex-col items-start gap-3 self-stretch">
                      <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('services.title')}
                      </div>

                      <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                        {t('services.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-0 md:px-3">
                  <div className="relative flex h-[500px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 lg:w-[443px] lg:gap-12 lg:p-12">
                    <svg
                      width="638"
                      height="682"
                      viewBox="0 0 638 682"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-0 top-0 h-[406px] w-full lg:w-[377px]"
                    >
                      <g opacity="0.2" filter="url(#filter0_f_9267_13362)">
                        <path
                          d="M271.254 368.279C228.004 368.251 205.763 317.376 200.049 291.941C205.626 140.694 376.991 206.692 417.807 273.94C458.623 341.189 433.62 481.487 376.817 481.451C320.013 481.415 325.317 368.313 271.254 368.279Z"
                          fill="#725DD6"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_9267_13362"
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
                            result="effect1_foregroundBlur_9267_13362"
                          />
                        </filter>
                      </defs>
                    </svg>

                    <div className="relative w-full flex-[2] grow self-stretch">
                      <div className="relative left-0 top-5 mx-auto h-[114px] w-[313px] lg:left-4">
                        <div className="absolute left-px top-0 flex w-full items-center justify-between opacity-[0.08] lg:w-[311px]">
                          <svg
                            width="1"
                            height="112"
                            viewBox="0 0 1 112"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative ml-[-0.50px] h-28 w-px"
                          >
                            <path d="M0.5 0V112" stroke="#55607A" />
                          </svg>

                          <svg
                            width="1"
                            height="112"
                            viewBox="0 0 1 112"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative h-28 w-px"
                          >
                            <path d="M0.5 0V112" stroke="#55607A" />
                          </svg>

                          <svg
                            width="1"
                            height="112"
                            viewBox="0 0 1 112"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative h-28 w-px"
                          >
                            <path d="M0.5 0V112" stroke="#55607A" />
                          </svg>

                          <svg
                            width="1"
                            height="112"
                            viewBox="0 0 1 112"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative h-28 w-px"
                          >
                            <path d="M0.5 0V112" stroke="#55607A" />
                          </svg>

                          <svg
                            width="1"
                            height="112"
                            viewBox="0 0 1 112"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative h-28 w-px"
                          >
                            <path d="M0.5 0V112" stroke="#55607A" />
                          </svg>

                          <svg
                            width="1"
                            height="112"
                            viewBox="0 0 1 112"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative h-28 w-px"
                          >
                            <path d="M0.5 0V112" stroke="#55607A" />
                          </svg>

                          <svg
                            width="1"
                            height="112"
                            viewBox="0 0 1 112"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative h-28 w-px"
                          >
                            <path d="M0.5 0V112" stroke="#55607A" />
                          </svg>

                          <svg
                            width="1"
                            height="112"
                            viewBox="0 0 1 112"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative h-28 w-px"
                          >
                            <path d="M0.5 0V112" stroke="#55607A" />
                          </svg>

                          <svg
                            width="1"
                            height="112"
                            viewBox="0 0 1 112"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative mr-[-0.50px] h-28 w-px"
                          >
                            <path d="M0.5 0V112" stroke="#55607A" />
                          </svg>
                        </div>

                        <svg
                          width="311"
                          height="102"
                          viewBox="0 0 311 102"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-px top-3 h-[102px] w-full lg:w-[311px]"
                        >
                          <path
                            opacity="0.24"
                            d="M7.54673 70.4189L0 61.5V101.5H311V55.5L306.607 40.5654C306.208 39.2074 305.496 37.9621 304.528 36.9294C301.173 33.3513 295.579 33.0966 291.913 36.355L289.5 38.5L280.156 47.844C279.719 48.2807 279.317 48.7504 278.953 49.2491L275.984 53.3114C272.529 58.0393 266.198 59.5001 260.785 57.2679C258.593 56.3644 256.625 55.6607 255.5 55.5C253.095 55.1564 250.763 48.6394 249.52 44.0617C249.151 42.7029 248.606 41.3965 247.837 40.2171L245.051 35.9448C242.836 32.5481 239.055 30.5 235 30.5H230.675C226.8 30.5 223.163 28.6284 220.911 25.4749L217.84 21.1762C217.282 20.3949 216.82 19.5494 216.463 18.658L212.017 7.54331C210.195 2.98741 205.782 0 200.876 0H194.799C192.327 0 189.915 0.763574 187.893 2.18632L180.178 7.61563C178.425 8.84933 177.034 10.5301 176.15 12.4833L168.819 28.6889C168.277 29.8881 167.541 30.9899 166.64 31.9502L162.442 36.4287C161.165 37.7908 159.588 38.8361 157.836 39.4815L155.549 40.3242C152.651 41.3918 149.437 41.1918 146.694 39.7729C141.136 36.8979 134.302 39.234 131.667 44.9099L130 48.5L120.769 67.6995C118.771 71.8564 114.567 74.5 109.954 74.5H106.595C101.703 74.5 97.3006 71.53 95.4686 66.9936L88 48.5L86.1768 42.8279C84.5817 37.8653 79.9652 34.5 74.7525 34.5H62.666C59.9676 34.5 57.3481 35.4094 55.2302 37.0814L51.3621 40.1352C49.8114 41.3594 48.5869 42.9476 47.7975 44.7588L41.0894 60.1477C40.698 61.0459 40.1979 61.8927 39.6006 62.6692L35.2967 68.2642C32.5111 71.8856 27.5498 73.0249 23.4633 70.9817L19.6807 69.0904C17.8292 68.1646 15.5819 68.6685 14.3029 70.2963C12.5975 72.4668 9.32977 72.5261 7.54673 70.4189Z"
                            fill="url(#paint0_linear_9281_858)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_9281_858"
                              x1="142.5"
                              y1="40"
                              x2="142.5"
                              y2="102"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#3573FC" />
                              <stop
                                offset="1"
                                stopColor="#3573FC"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>

                        <svg
                          width="313"
                          height="77"
                          viewBox="0 0 313 77"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-0 top-[11px] h-[76px] w-full lg:w-[313px]"
                        >
                          <path
                            d="M1 62.5L8.54673 71.4189C10.3298 73.5261 13.5975 73.4668 15.3029 71.2963V71.2963C16.5819 69.6685 18.8292 69.1646 20.6807 70.0904L24.4633 71.9817C28.5498 74.0249 33.5111 72.8856 36.2967 69.2642L40.6006 63.6692C41.1979 62.8927 41.698 62.0459 42.0894 61.1477L48.7975 45.7588C49.5869 43.9476 50.8114 42.3594 52.3621 41.1352L56.2302 38.0814C58.3481 36.4094 60.9676 35.5 63.6659 35.5H75.7525C80.9652 35.5 85.5817 38.8653 87.1768 43.8279L89 49.5L96.4686 67.9936C98.3006 72.53 102.703 75.5 107.595 75.5H110.954C115.567 75.5 119.771 72.8564 121.769 68.6995L131 49.5L132.667 45.9099C135.302 40.234 142.136 37.8979 147.694 40.7729V40.7729C150.437 42.1918 153.651 42.3918 156.549 41.3242L158.836 40.4815C160.588 39.8361 162.165 38.7908 163.442 37.4287L167.64 32.9502C168.541 31.9899 169.277 30.8881 169.819 29.6889L177.15 13.4833C178.034 11.5301 179.425 9.84933 181.178 8.61563L188.893 3.18632C190.915 1.76357 193.327 1 195.799 1H201.876C206.782 1 211.195 3.98741 213.017 8.54331L217.463 19.658C217.82 20.5494 218.282 21.3949 218.84 22.1762L221.911 26.4749C224.163 29.6284 227.8 31.5 231.675 31.5H236C240.055 31.5 243.836 33.5481 246.051 36.9448L248.837 41.2171C249.606 42.3965 250.151 43.7029 250.52 45.0617C251.763 49.6394 254.095 56.1564 256.5 56.5C257.625 56.6607 259.593 57.3644 261.785 58.2679C267.198 60.5001 273.529 59.0393 276.984 54.3114L279.953 50.2491C280.317 49.7504 280.719 49.2807 281.156 48.844L290.5 39.5L292.913 37.355C296.579 34.0966 302.173 34.3513 305.528 37.9294V37.9294C306.496 38.9621 307.208 40.2074 307.607 41.5654L312 56.5"
                            stroke="url(#paint0_linear_9281_859)"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_9281_859"
                              x1="1"
                              y1="38.25"
                              x2="312"
                              y2="38.25"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#3573FC" stopOpacity="0" />
                              <stop offset="0.144088" stopColor="#3573FC" />
                              <stop offset="0.859" stopColor="#3573FC" />
                              <stop
                                offset="1"
                                stopColor="#3573FC"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>

                        <div className="absolute left-[62px] top-[42px] size-2 rounded border-2 border-solid border-[#3573fc] bg-[#efeefa]" />

                        <div className="absolute left-[43px] top-2.5 flex w-full flex-col items-center lg:w-[46px]">
                          <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-[#ffffff] px-2 py-1">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-medium leading-4 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              5,674
                            </div>
                          </div>

                          <svg
                            width="8"
                            height="5"
                            viewBox="0 0 8 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative h-1.5 w-2"
                          >
                            <path
                              d="M2.3359 3.50385L0 0H8L5.6641 3.50385C4.87246 4.69132 3.12754 4.69132 2.3359 3.50385Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[1] flex-col items-start gap-3 self-stretch">
                      <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('investorFunctions.title')}
                      </div>

                      <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                        {t('investorFunctions.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-0 md:px-3">
                  <div className="relative flex h-[500px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 lg:w-[443px] lg:gap-12 lg:p-12">
                    <div className="relative w-full flex-[2] grow self-stretch">
                      <div className="relative left-0 top-[27px] inline-flex flex-col items-center justify-center gap-6 rounded-[32px] bg-[#ffffff] p-4 lg:left-10">
                        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-5 px-4 pb-0 pt-3 lg:w-[230px]">
                          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                            <svg
                              width="203"
                              height="28"
                              viewBox="0 0 203 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="relative ml-[-3.00px] mr-[-2.00px] mt-[-3.00px] h-7 w-full self-stretch"
                            >
                              <path
                                d="M3 10L201 10"
                                stroke="#F2F5FF"
                                strokeWidth="4"
                                strokeLinecap="round"
                              />
                              <path
                                d="M3 10L166 10"
                                stroke="#00CB82"
                                strokeWidth="6"
                                strokeLinecap="round"
                              />
                              <g filter="url(#filter0_d_9281_6391)">
                                <circle cx="164" cy="10" r="6" fill="#00CB82" />
                              </g>
                              <defs>
                                <filter
                                  id="filter0_d_9281_6391"
                                  x="150"
                                  y="0"
                                  width="28"
                                  height="28"
                                  filterUnits="userSpaceOnUse"
                                  colorInterpolationFilters="sRGB"
                                >
                                  <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  />
                                  <feOffset dy="4" />
                                  <feGaussianBlur stdDeviation="4" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0156863 0 0 0 0 0.792157 0 0 0 0 0.513726 0 0 0 0.2 0"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_9281_6391"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_9281_6391"
                                    result="shape"
                                  />
                                </filter>
                              </defs>
                            </svg>

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

                    <div className="relative flex w-full flex-[1] flex-col items-start gap-3 self-stretch">
                      <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('borrowerFunctions.title')}
                      </div>

                      <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                        {t('borrowerFunctions.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-0 md:px-3">
                  <div className="relative flex h-[500px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 lg:w-[443px] lg:gap-12 lg:p-12">
                    <div className="relative flex size-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 lg:w-[442px] lg:gap-12 lg:p-12">
                      <svg
                        width="638"
                        height="682"
                        viewBox="0 0 638 682"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-0 top-0 h-[406px] w-full lg:w-[442px]"
                      >
                        <g opacity="0.2" filter="url(#filter0_f_9281_6366)">
                          <path
                            d="M271.254 368.279C228.004 368.251 205.763 317.375 200.049 291.941C205.627 140.694 376.992 206.692 417.807 273.94C458.623 341.189 433.62 481.486 376.817 481.45C320.013 481.414 325.317 368.313 271.254 368.279Z"
                            fill="#725DD6"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_9281_6366"
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
                              result="effect1_foregroundBlur_9281_6366"
                            />
                          </filter>
                        </defs>
                      </svg>

                      <div className="relative w-full flex-[2] grow self-stretch">
                        <div className="absolute left-[23px] top-[-30px] inline-flex items-center gap-2.5 rounded-[32px] bg-[#ffffff] p-3">
                          <div className="relative size-[120px]">
                            <div className="relative size-[120px]">
                              <div className="absolute left-0 top-0 size-[120px]">
                                <svg
                                  width="88"
                                  height="184"
                                  viewBox="0 0 88 184"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="absolute left-0 top-0 h-[120px] w-[57px]"
                                >
                                  <path
                                    d="M88 3.9396C88 6.08804 86.3148 7.84704 84.1835 8.04445C41.4563 12.0019 8.00001 48.0786 8 92C8 135.921 41.4561 171.997 84.1831 175.954C86.3147 176.152 88 177.911 88 180.06C88 182.349 86.0959 184.186 83.8239 183.985C36.8437 179.832 0 140.236 0 92C7.12916e-06 43.7637 36.844 4.16756 83.8244 0.0150405C86.0962 -0.185756 88 1.65045 88 3.9396Z"
                                    fill="#00CB82"
                                  />
                                </svg>

                                <svg
                                  width="88"
                                  height="109"
                                  viewBox="0 0 88 109"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="absolute left-[63px] top-[49px] h-[71px] w-[57px]"
                                >
                                  <path
                                    d="M82.1887 0.13856C84.4418 -0.46743 86.7414 0.974287 87.0712 3.29211C87.6831 7.59299 88 11.9894 88 16.46C88 64.6962 51.1563 104.292 4.17612 108.445C1.90409 108.646 0 106.809 0 104.52C0 102.371 1.68535 100.612 3.81693 100.415C46.5439 96.4569 80 60.3812 80 16.46C80 12.4948 79.7265 8.59373 79.1986 4.77432C78.9109 2.69312 80.1668 0.682378 82.1887 0.13856Z"
                                    fill="#3573FC"
                                  />
                                </svg>

                                <div className="absolute left-[22px] top-[37px] inline-flex flex-col items-center">
                                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                                    {t('total')}
                                  </div>

                                  <div className="relative -mt-0.5 w-fit whitespace-nowrap text-center text-xl font-medium leading-8 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                                    88,000₽
                                  </div>
                                </div>
                              </div>

                              <svg
                                width="22"
                                height="34"
                                viewBox="0 0 22 34"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute left-[103px] top-[22px] h-[22px] w-3.5"
                              >
                                <path
                                  d="M1.2 1.19297C2.88815 -0.501545 5.66596 -0.387931 7.11702 1.51503C13.3358 9.67043 18.2497 18.8812 21.5464 28.8333C22.2619 30.9931 20.9672 33.2712 18.777 33.8602C16.6341 34.4366 14.4363 33.1771 13.7274 31.0669C10.7574 22.2258 6.38755 14.0314 0.882313 6.74905C-0.389941 5.06611 -0.288233 2.68682 1.2 1.19297Z"
                                  fill="#E74951"
                                />
                              </svg>

                              <svg
                                width="60"
                                height="31"
                                viewBox="0 0 60 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute left-[63px] top-0 h-5 w-[39px]"
                              >
                                <path
                                  d="M0 3.98813C0 1.67086 1.92569 -0.187994 4.22536 0.015217C25.1577 1.8649 44.1019 10.6645 58.7533 24.1027C60.4064 25.619 60.4028 28.2038 58.8194 29.7932C57.24 31.3786 54.6864 31.3731 53.0313 29.8676C39.7737 17.8077 22.7091 9.88863 3.86196 8.14327C1.70446 7.94348 0 6.16296 0 3.98813Z"
                                  fill="#FBAB00"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <svg
                          width="144"
                          height="144"
                          viewBox="0 0 144 144"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-[179px] top-[-30px]"
                        >
                          <rect width="144" height="144" rx="24" fill="white" />
                          <path
                            d="M16 116V88.7266M28.4444 116V81.5135M40.8889 116V68.5299M53.3333 116V28M65.7778 116V42.2703M78.2222 116V74.3784V32.7568M90.6667 116V51.7838M103.111 116V81.5135M115.556 116V62.4865M128 116V81.5135"
                            stroke="url(#paint0_linear_9281_6409)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_9281_6409"
                              x1="12.08"
                              y1="97.96"
                              x2="132.478"
                              y2="98.6727"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#3573FC" stopOpacity="0" />
                              <stop offset="0.29049" stopColor="#3573FC" />
                              <stop offset="0.685619" stopColor="#3573FC" />
                              <stop
                                offset="1"
                                stopColor="#3573FC"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <div className="relative flex w-full flex-[1] flex-col items-start gap-3 self-stretch">
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

          <div className="absolute left-[var(--pos-725)] top-[542px] hidden h-14 w-full items-center justify-between rounded-full bg-[#f9fafd] p-1 lg:flex lg:w-[120px]">
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

        <div className="relative flex w-full flex-col items-center gap-6 self-stretch rounded-3xl lg:h-[544px] lg:!flex-row">
          <div className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl p-7 lg:py-12 lg:pl-12 lg:pr-[68px]">
            <div className="relative mt-[-1.00px] w-full text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:w-[480px]">
              {t('calculationModule.title')}
            </div>

            <svg
              width="560"
              height="1"
              viewBox="0 0 560 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative -mx-7 h-px w-full self-stretch object-cover lg:mr-[-68px]"
            >
              <path d="M0 0.5H560" stroke="#E3E5E8" />
            </svg>

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
            <svg
              className="absolute inset-0 m-auto"
              width="676"
              height="544"
              viewBox="0 0 676 544"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.16" filter="url(#filter0_f_9281_1576)">
                <path
                  d="M484.737 382.107C555.759 427.87 538.518 534.958 521.019 582.782C351.98 825.354 140.226 535.791 144.259 382.171C148.293 228.551 337.67 24.4999 430.948 84.6037C524.227 144.707 395.959 324.903 484.737 382.107Z"
                  fill="#3573FC"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_9281_1576"
                  x="-55.7969"
                  y="-126.171"
                  width="792.27"
                  height="1002.24"
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
                    stdDeviation="100"
                    result="effect1_foregroundBlur_9281_1576"
                  />
                </filter>
              </defs>
            </svg>

            <div className="relative h-[544px] w-full">
              <div className="absolute inset-x-0 bottom-0 mx-auto inline-flex h-[506px] w-[300px] flex-col items-center justify-center gap-1 overflow-hidden rounded-[32px_32px_0px_0px] bg-[#ffffff] p-2">
                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-5 px-4 pb-2 pt-3 lg:w-[284px]">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('product.title')}
                      </div>

                      <div className="relative size-6">
                        <svg
                          width="19"
                          height="2"
                          viewBox="0 0 19 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-0.5w-full absolute left-[3px] top-[11px] lg:w-[18px]"
                        >
                          <path
                            d="M1 1H17.5"
                            stroke="#9FA7BC"
                            strokeWidth="2"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <svg
                          width="19"
                          height="2"
                          viewBox="0 0 19 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-0.5w-full absolute left-[3px] top-[5px] lg:w-[18px]"
                        >
                          <path
                            d="M1 1H17.5"
                            stroke="#9FA7BC"
                            strokeWidth="2"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <svg
                          width="19"
                          height="2"
                          viewBox="0 0 19 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-0.5w-full absolute left-[3px] top-[17px] lg:w-[18px]"
                        >
                          <path
                            d="M1 1H17.5"
                            stroke="#9FA7BC"
                            strokeWidth="2"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 rounded-3xl p-2.5 lg:w-[284px]">
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2">
                      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 overflow-hidden rounded-2xl bg-[#f2f5ff] px-4 py-3.5 lg:w-[264px]">
                        <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                            {t('product.amount.label')}
                          </div>

                          <p className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            30 000 ₽ - 680 000 ₽
                          </p>
                        </div>

                        <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                          <svg
                            width="232"
                            height="30"
                            viewBox="0 0 232 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative mt-[-6.00px] h-[30px] w-full lg:w-[232px]"
                          >
                            <path
                              d="M4 13L228 13"
                              stroke="white"
                              strokeWidth="5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M58 13L163 13"
                              stroke="#3573FC"
                              strokeWidth="5"
                              strokeLinecap="round"
                            />
                            <g filter="url(#filter0_d_9281_1499)">
                              <rect
                                x="154"
                                y="6"
                                width="18"
                                height="14"
                                rx="7"
                                fill="white"
                              />
                            </g>
                            <path
                              d="M161 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <path
                              d="M163 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <path
                              d="M165 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <g filter="url(#filter1_d_9281_1499)">
                              <rect
                                x="49"
                                y="6"
                                width="18"
                                height="14"
                                rx="7"
                                fill="white"
                              />
                            </g>
                            <path
                              d="M56 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <path
                              d="M58 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <path
                              d="M60 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <defs>
                              <filter
                                id="filter0_d_9281_1499"
                                x="146"
                                y="0"
                                width="34"
                                height="30"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0.251433 0 0 0 0 0.339361 0 0 0 0 0.533654 0 0 0 0.24 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_9281_1499"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_9281_1499"
                                  result="shape"
                                />
                              </filter>
                              <filter
                                id="filter1_d_9281_1499"
                                x="41"
                                y="0"
                                width="34"
                                height="30"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0.251433 0 0 0 0 0.339361 0 0 0 0 0.533654 0 0 0 0.24 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_9281_1499"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_9281_1499"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>

                          <div className="h-4w-full relative flex items-start justify-between lg:w-[232px]">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                              10 000 ₽
                            </div>

                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                              800 000 ₽
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 overflow-hidden rounded-2xl bg-[#f2f5ff] px-4 py-3.5 lg:w-[264px]">
                        <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                            {t('product.period.label')}
                          </div>

                          <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            {t('product.period.value')}
                          </div>
                        </div>

                        <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                          <svg
                            width="232"
                            height="30"
                            viewBox="0 0 232 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative mt-[-6.00px] h-[30px] w-full lg:w-[232px]"
                          >
                            <path
                              d="M4 13L228 13"
                              stroke="white"
                              strokeWidth="5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M37 13L84 13"
                              stroke="#3573FC"
                              strokeWidth="5"
                              strokeLinecap="round"
                            />
                            <g filter="url(#filter0_d_9281_1516)">
                              <rect
                                x="75"
                                y="6"
                                width="18"
                                height="14"
                                rx="7"
                                fill="white"
                              />
                            </g>
                            <path
                              d="M82 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <path
                              d="M84 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <path
                              d="M86 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <g filter="url(#filter1_d_9281_1516)">
                              <rect
                                x="28"
                                y="6"
                                width="18"
                                height="14"
                                rx="7"
                                fill="white"
                              />
                            </g>
                            <path
                              d="M35 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <path
                              d="M37 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <path
                              d="M39 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <defs>
                              <filter
                                id="filter0_d_9281_1516"
                                x="67"
                                y="0"
                                width="34"
                                height="30"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0.251433 0 0 0 0 0.339361 0 0 0 0 0.533654 0 0 0 0.24 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_9281_1516"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_9281_1516"
                                  result="shape"
                                />
                              </filter>
                              <filter
                                id="filter1_d_9281_1516"
                                x="20"
                                y="0"
                                width="34"
                                height="30"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0.251433 0 0 0 0 0.339361 0 0 0 0 0.533654 0 0 0 0.24 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_9281_1516"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_9281_1516"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>

                          <div className="h-4w-full relative flex items-start justify-between lg:w-[232px]">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                              {t('product.period.min')}
                            </div>

                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                              {t('product.period.max')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 overflow-hidden rounded-2xl bg-[#f2f5ff] px-4 py-3.5 lg:w-[264px]">
                        <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                            {t('product.interestRate.label')}
                          </div>

                          <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            1,2% - 8%
                          </div>
                        </div>

                        <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                          <svg
                            width="232"
                            height="30"
                            viewBox="0 0 232 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative mt-[-6.00px] h-[30px] w-full lg:w-[232px]"
                          >
                            <path
                              d="M4 13L228 13"
                              stroke="white"
                              strokeWidth="5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M23 13L85 13"
                              stroke="#3573FC"
                              strokeWidth="5"
                              strokeLinecap="round"
                            />
                            <g filter="url(#filter0_d_9281_1816)">
                              <rect
                                x="75"
                                y="6"
                                width="18"
                                height="14"
                                rx="7"
                                fill="white"
                              />
                            </g>
                            <path
                              d="M82 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <path
                              d="M84 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <path
                              d="M86 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <g filter="url(#filter1_d_9281_1816)">
                              <rect
                                x="12"
                                y="6"
                                width="18"
                                height="14"
                                rx="7"
                                fill="white"
                              />
                            </g>
                            <path
                              d="M19 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <path
                              d="M21 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <path
                              d="M23 11V15"
                              stroke="#E3E5E8"
                              strokeLinecap="round"
                            />
                            <defs>
                              <filter
                                id="filter0_d_9281_1816"
                                x="67"
                                y="0"
                                width="34"
                                height="30"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0.251433 0 0 0 0 0.339361 0 0 0 0 0.533654 0 0 0 0.24 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_9281_1816"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_9281_1816"
                                  result="shape"
                                />
                              </filter>
                              <filter
                                id="filter1_d_9281_1816"
                                x="4"
                                y="0"
                                width="34"
                                height="30"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0.251433 0 0 0 0 0.339361 0 0 0 0 0.533654 0 0 0 0.24 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_9281_1816"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_9281_1816"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>

                          <div className="h-4w-full relative flex items-start justify-between lg:w-[232px]">
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
                      <div className="relative mt-[-1.00px] w-full self-stretch whitespace-nowrap text-center text-base font-medium leading-6 tracking-normal text-white [font-family:'Roboto',Helvetica] lg:w-[164px]">
                        {t('product.createProduct')}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex  w-full flex-[0_0_auto] flex-col-reverse items-center gap-6 self-stretch rounded-3xl lg:!flex-row">
          <div className="relative flex-1 grow self-stretch overflow-hidden rounded-3xl bg-[#f9fafd]">
            <svg
              className="absolute inset-0 m-auto"
              width="676"
              height="544"
              viewBox="0 0 676 544"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.16" filter="url(#filter0_f_9281_1576)">
                <path
                  d="M484.737 382.107C555.759 427.87 538.518 534.958 521.019 582.782C351.98 825.354 140.226 535.791 144.259 382.171C148.293 228.551 337.67 24.4999 430.948 84.6037C524.227 144.707 395.959 324.903 484.737 382.107Z"
                  fill="#3573FC"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_9281_1576"
                  x="-55.7969"
                  y="-126.171"
                  width="792.27"
                  height="1002.24"
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
                    stdDeviation="100"
                    result="effect1_foregroundBlur_9281_1576"
                  />
                </filter>
              </defs>
            </svg>

            <div className="relative h-[544px] w-full">
              <div className="absolute inset-x-0 bottom-0 mx-auto inline-flex h-[506px] w-[300px] flex-col items-center justify-center gap-1 overflow-hidden rounded-[32px_32px_0px_0px] bg-[#ffffff] p-2">
                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                  <div className="relative flex w-[284px] flex-[0_0_auto] flex-col items-center justify-center gap-5 px-4 py-3">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('payments.title')}
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

          <div className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl p-7 lg:py-12 lg:pl-12 lg:pr-[68px]">
            <div className="relative mt-[-1.00px] w-full text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:w-[480px]">
              {t('payments.title')}
            </div>

            <svg
              width="560"
              height="1"
              viewBox="0 0 560 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative -mx-7 h-px w-full self-stretch object-cover lg:mr-[-68px]"
            >
              <path d="M0 0.5H560" stroke="#E3E5E8" />
            </svg>

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

        <div className="relative flex w-full flex-[0_0_auto] items-center gap-[88px] self-stretch overflow-hidden rounded-[32px] bg-green-60 p-7 lg:!p-20">
          <svg
            width="1435"
            height="1361"
            viewBox="0 0 1435 1361"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[var(--pos-386)] top-[var(--pos-15)] h-[1060px] w-full lg:w-[1204px]"
          >
            <g opacity="0.12" filter="url(#filter0_f_9267_12444)">
              <path
                d="M580.201 516.863C557.553 350.888 741.074 238.781 835.665 203.475C1418.97 145.308 1255.87 837.593 1019.3 1029.59C782.722 1221.59 231.215 1199.45 201.47 981.467C171.726 763.481 608.51 724.332 580.201 516.863Z"
                fill="#3573FC"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_9267_12444"
                x="0"
                y="0"
                width="1435"
                height="1360.42"
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
                  stdDeviation="100"
                  result="effect1_foregroundBlur_9267_12444"
                />
              </filter>
            </defs>
          </svg>

          <div className="relative flex w-full flex-col items-start gap-7 lg:w-[640px]">
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, x: 80 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative mt-[-1.00px] w-full text-[36px] font-medium leading-[44px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica] lg:w-[530px] lg:text-5xl lg:leading-[60px]"
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
            className="absolute left-[var(--pos-810)] top-[var(--pos-102)] flex w-full flex-col items-center justify-center gap-6 rounded-[32px] bg-white p-4 lg:w-[324px]"
          >
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-5 self-stretch px-4 pb-4 pt-3">
                <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('application.title')}
                </div>

                <div className="relative flex w-64 flex-[0_0_auto] flex-col items-start gap-2">
                  <div className="relative h-3.5 w-full self-stretch">
                    <div className="relative left-[-3px] top-px h-3 w-full lg:w-[261px]">
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
                    <div className="relative left-[-3px] top-px h-3 w-full lg:w-[261px]">
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
              <div className="relative mt-[-1.00px] w-full self-stretch whitespace-nowrap text-center text-base font-medium leading-6 tracking-normal text-white [font-family:'Roboto',Helvetica] lg:w-[164px]">
                {t('application.applyLoan')}
              </div>
            </button>
          </motion.div>

          <svg
            width="1037"
            height="1134"
            viewBox="0 0 1037 1134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[var(--pos-571)] top-0 h-[656px] w-full lg:w-[805px]"
            aria-hidden={true}
          >
            <g opacity="0.24" filter="url(#filter0_f_9267_13819)">
              <path
                d="M603.167 599.549C634.286 648.936 592.233 710.965 567.317 735.806C390.662 838.373 342.571 595.238 389.933 500.215C437.296 405.192 615.444 332.684 656.314 397.547C697.185 462.41 564.268 537.816 603.167 599.549Z"
                fill="#9FA7BC"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_9267_13819"
                x="0.000579966"
                y="9.15736e-05"
                width="1037"
                height="1133.35"
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
                  result="effect1_foregroundBlur_9267_13819"
                />
              </filter>
            </defs>
          </svg>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView20 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
            className="absolute left-[var(--pos-1054)] top-[var(--pos-165)] inline-flex flex-col items-center justify-center gap-3 rounded-[32px] bg-white p-4"
          >
            <Graph sum="122,000" />

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

        <RoleStructure />
        <Trust />
      </div>
    </>
  );
};
