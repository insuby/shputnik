import { motion, useInView } from 'framer-motion';
import {
  Advantages,
  Analytics,
  EmployeeWork,
  Feedback,
  Integrations,
  RoleStructure,
  Trust,
  Zaim,
  ZaimChecker,
} from 'widgets';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { HeroButtons } from 'shared/ui';

export const BankCredit = () => {
  const { t } = useTranslation(['bankcredit']);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);
  const ref6 = useRef<HTMLDivElement>(null);
  const ref15 = useRef<HTMLDivElement>(null);
  const ref16 = useRef<HTMLDivElement>(null);

  const inView1 = useInView(ref1, { once: true, margin: '-100px' });
  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView4 = useInView(ref4, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref6, { once: true, margin: '-100px' });
  const inView15 = useInView(ref15, { once: true, margin: '-100px' });
  const inView16 = useInView(ref16, { once: true, margin: '-100px' });

  const refAuto1 = useRef<HTMLDivElement>(null);
  const refAuto2 = useRef<HTMLDivElement>(null);
  const refAuto3 = useRef<HTMLDivElement>(null);
  const refAuto4 = useRef<HTMLDivElement>(null);

  const inViewAuto1 = useInView(refAuto1, { once: true, margin: '-100px' });
  const inViewAuto4 = useInView(refAuto4, { once: true, margin: '-100px' });

  const refSystem1 = useRef<HTMLDivElement>(null);
  const refSystem2 = useRef<HTMLDivElement>(null);
  const refSystem3 = useRef<HTMLDivElement>(null);
  const refSystem4 = useRef<HTMLDivElement>(null);
  const inViewSystem1 = useInView(refSystem1, { once: true, margin: '-100px' });
  const inViewSystem4 = useInView(refSystem4, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[88px] p-0 xl:w-[1440px] xl:gap-[136px] xl:px-8 xl:pb-[136px] xl:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
        <div className="relative flex w-full flex-col items-start gap-10 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-7 xl:h-[620px] xl:gap-16 xl:p-12">
          <svg
            width="1643"
            height="1443"
            viewBox="0 0 1643 1443"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-16 left-[430px] h-[842px] w-full xl:w-[954px]"
            aria-hidden={true}
          >
            <g opacity="0.3" filter="url(#filter0_f_9326_98080)">
              <path
                d="M761.85 555.197C780.636 424.39 944.137 379.12 1023.54 372.836C1478.6 455.11 1204.88 944.896 983.82 1039.27C762.764 1133.65 349.218 997.349 373.891 825.552C398.564 653.755 738.367 718.706 761.85 555.197Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_9326_98080"
                x="-0.0013738"
                y="1.52644e-05"
                width="1642.66"
                height="1443"
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
                  result="effect1_foregroundBlur_9326_98080"
                />
              </filter>
            </defs>
          </svg>

          <HeroButtons>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 xl:w-[624px]  xl:gap-12">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 xl:inline-flex">
                <motion.h1
                  ref={ref15}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView15 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[44px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica] xl:w-[624px] xl:text-left xl:text-6xl xl:leading-[68px]"
                >
                  {t('hero.title')}
                </motion.h1>

                <motion.p
                  ref={ref16}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView16 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative w-full text-center text-xl font-normal leading-7 tracking-normal text-[#ffffffcc] [font-family:'Roboto',Helvetica] xl:w-[624px] xl:text-left"
                >
                  {t('hero.description')}
                </motion.p>
              </div>
            </div>
          </HeroButtons>

          <motion.div
            variants={slideInRight}
            className="relative left-0 top-[45px] flex items-center overflow-hidden rounded-[24px_0px_0px_0px] bg-[#f6f8fd] xl:absolute xl:left-[720px] xl:top-[205px] xl:w-[669px]"
          >
            <div className="relative flex w-[242px] flex-col items-start gap-[23.92px] self-stretch bg-[#ffffff] p-6">
              <p className="relative mt-[-0.75px] self-stretch text-[23.9px] font-medium leading-[29.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                <span className="text-[#1c222f]">{t('bank.title')}</span>
                <span className="text-[#3573fc]">
                  {t('bank.titleHighlight')}
                </span>
              </p>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl bg-gray-90 p-2.5">
                  <div className="relative size-5 bg-[100%_100%]">
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4w-full absolute left-[3px] top-0.5 xl:w-[15px]"
                    >
                      <path
                        d="M5.61863 15.0263V10.0094H9.38137V15.0263H14.3984V7.50086C14.3984 7.41848 14.3823 7.3369 14.3508 7.26077C14.3193 7.18464 14.2731 7.11545 14.2149 7.05717L7.94369 0.78594C7.88545 0.727633 7.81628 0.681377 7.74015 0.649817C7.66402 0.618258 7.58241 0.602014 7.5 0.602014C7.41759 0.602014 7.33598 0.618258 7.25985 0.649817C7.18372 0.681377 7.11455 0.727633 7.05631 0.78594L0.78508 7.05717C0.726861 7.11545 0.680696 7.18464 0.649222 7.26077C0.617748 7.3369 0.601582 7.41848 0.601646 7.50086V15.0263H5.61863Z"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                    {t('bank.main')}
                  </div>
                </div>

                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl p-2.5">
                  <div className="relative size-5">
                    <div className="relative left-px top-1 h-[11px] w-full xl:w-[19px]">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-1.5 top-[3px] size-1.5"
                      >
                        <path
                          d="M3.49959 6.3226C5.05847 6.3226 6.32219 5.05888 6.32219 3.5C6.32219 1.94112 5.05847 0.677397 3.49959 0.677397C1.94071 0.677397 0.676984 1.94112 0.676984 3.5C0.676984 5.05888 1.94071 6.3226 3.49959 6.3226Z"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="19"
                        height="12"
                        viewBox="0 0 19 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-0 top-0 h-[11px] w-full xl:w-[19px]"
                      >
                        <path
                          d="M18.3907 0.609626H0.609254V10.7705H18.3907V0.609626Z"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-3.5 top-0 size-1"
                      >
                        <path
                          d="M4.30571 4.30628C3.40319 4.15331 2.5706 3.7234 1.92332 3.07612C1.27604 2.42884 0.846126 1.59624 0.693159 0.693723"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-3.5 top-[7px] size-1"
                      >
                        <path
                          d="M0.693159 4.30628C0.846126 3.40376 1.27604 2.57116 1.92332 1.92388C2.5706 1.2766 3.40319 0.846691 4.30571 0.693723"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-0 top-[7px] size-1"
                      >
                        <path
                          d="M0.693159 0.693723C1.59568 0.846691 2.42827 1.2766 3.07555 1.92388C3.72283 2.57116 4.15274 3.40376 4.30571 4.30628"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-0 top-0 size-1"
                      >
                        <path
                          d="M4.30571 0.693723C4.15274 1.59624 3.72283 2.42884 3.07555 3.07612C2.42827 3.7234 1.59568 4.15331 0.693159 4.30628"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    {t('navigation.finance')}
                  </div>
                </div>

                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl p-2.5">
                  <div className="relative size-5">
                    <div className="h-3w-full relative left-px top-1 bg-gray-100 bg-[100%_100%] xl:w-[17px]">
                      <svg
                        width="7"
                        height="2"
                        viewBox="0 0 7 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-[11px] top-[9px] h-px w-1"
                      >
                        <path
                          d="M0.677064 0.677477H6.32294"
                          stroke="white"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="3"
                        height="2"
                        viewBox="0 0 3 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-2 top-[9px] h-px w-0.5"
                      >
                        <path
                          d="M0.73445 0.734898H2.26555"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="18"
                        height="2"
                        viewBox="0 0 18 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-pxw-full absolute left-0 top-[3px] xl:w-[17px]"
                      >
                        <path
                          d="M0.618536 0.618914H17.3815"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    {t('navigation.creditCards')}
                  </div>
                </div>

                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl p-2.5">
                  <div className="relative size-5">
                    <div className="relative left-0.5 top-0.5 size-4">
                      <svg
                        width="2"
                        height="6"
                        viewBox="0 0 2 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-2 top-[11px] h-1.5 w-px"
                      >
                        <path
                          d="M0.645325 0.645719V5.35428"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-0 top-0 size-4"
                      >
                        <path
                          d="M1.68366 4.56479C0.817411 6.06517 0.470437 7.80946 0.696547 9.52714C0.922657 11.2448 1.70922 12.8399 2.93424 14.065C4.15926 15.2901 5.75429 16.0767 7.47195 16.303C9.18962 16.5292 10.9339 16.1823 12.4344 15.3161C13.9348 14.45 15.1075 13.1129 15.7706 11.5124C16.4338 9.91181 16.5502 8.13716 16.102 6.46365C15.6537 4.79015 14.6658 3.31131 13.2914 2.25649C11.9171 1.20167 10.233 0.629812 8.50054 0.629604V5.22065C9.2224 5.22081 9.92404 5.45915 10.4966 5.8987C11.0692 6.33825 11.4808 6.95446 11.6675 7.65175C11.8542 8.34904 11.8057 9.08846 11.5293 9.75533C11.253 10.4222 10.7643 10.9793 10.1391 11.3401C9.51396 11.701 8.78717 11.8455 8.0715 11.7512C7.35582 11.6569 6.69125 11.3291 6.18085 10.8187C5.67044 10.3082 5.34273 9.6436 5.24853 8.92791C5.15433 8.21223 5.2989 7.48546 5.65983 6.86031L1.68366 4.56479Z"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="6"
                        height="3"
                        viewBox="0 0 6 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-0.5w-full absolute left-0 top-2 xl:w-[5px]"
                      >
                        <path
                          d="M5.33693 0.663674L0.663067 1.91551"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    {t('navigation.reports')}
                  </div>
                </div>

                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl p-2.5">
                  <div className="relative size-5">
                    <div className="relative left-0.5 top-0.5 h-[15px] w-4">
                      <svg
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-0 top-0.5 h-3 w-4"
                      >
                        <path
                          d="M16.7367 0.618914H1.26326C0.90719 0.618914 0.618536 0.907568 0.618536 1.26364V11.5793C0.618536 11.9354 0.90719 12.224 1.26326 12.224H16.7367C17.0928 12.224 17.3815 11.9354 17.3815 11.5793V1.26364C17.3815 0.907568 17.0928 0.618914 16.7367 0.618914Z"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="8"
                        height="4"
                        viewBox="0 0 8 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-1w-full absolute left-1 top-0 xl:w-[7px]"
                      >
                        <path
                          d="M7.35606 3.32918V1.98676C7.35606 1.63073 7.21462 1.28928 6.96287 1.03752C6.71112 0.78577 6.36967 0.644337 6.01363 0.644337H1.98637C1.63033 0.644337 1.28888 0.78577 1.03713 1.03752C0.785377 1.28928 0.643943 1.63073 0.643943 1.98676V3.32918"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="17"
                        height="4"
                        viewBox="0 0 17 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-0 top-[7px] h-[3px] w-4"
                      >
                        <path
                          d="M16.3707 0.629762C13.9788 2.0137 11.2634 2.74036 8.5 2.73601C5.73667 2.74041 3.02132 2.01406 0.62925 0.630583"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="7"
                        height="2"
                        viewBox="0 0 7 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-1.5 top-1.5 h-px w-1"
                      >
                        <path
                          d="M0.677064 0.677477H6.32294"
                          stroke="white"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    {t('navigation.business')}
                  </div>
                </div>

                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl p-2.5">
                  <div className="relative size-5">
                    <div className="relative left-0.5 top-px h-[17px] w-4">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-1 top-[5px] size-[7px]"
                      >
                        <path
                          d="M3.49959 6.3226C5.05847 6.3226 6.32219 5.05888 6.32219 3.5C6.32219 1.94112 5.05847 0.677397 3.49959 0.677397C1.94071 0.677397 0.676984 1.94112 0.676984 3.5C0.676984 5.05888 1.94071 6.3226 3.49959 6.3226Z"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-0 top-0 h-[17px] w-4"
                      >
                        <path
                          d="M15.7572 13.4189L8.66498 17.3019C8.57009 17.3538 8.46367 17.381 8.35551 17.381C8.24734 17.381 8.14092 17.3538 8.04603 17.3019L0.953821 13.4189C0.852551 13.3635 0.768015 13.2819 0.70904 13.1827C0.650065 13.0834 0.618815 12.9702 0.618553 12.8547V5.1452C0.618815 5.02976 0.650065 4.91651 0.70904 4.81727C0.768015 4.71804 0.852551 4.63645 0.953821 4.58104L8.04603 0.698062C8.14092 0.646143 8.24734 0.618931 8.35551 0.618931C8.46367 0.618931 8.57009 0.646143 8.66498 0.698062L15.7572 4.58104C15.8585 4.63645 15.943 4.71804 16.002 4.81727C16.0609 4.91651 16.0922 5.02976 16.0925 5.1452V12.8531C16.0925 12.9688 16.0614 13.0824 16.0024 13.182C15.9434 13.2815 15.8587 13.3634 15.7572 13.4189Z"
                          stroke="#55607A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    {t('navigation.settings')}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-1 grow flex-col items-start gap-5 self-stretch overflow-hidden p-6">
              <div className="relative inline-flex flex-[0_0_auto] items-center gap-4">
                <div className="relative size-12 rounded-3xl [background:url(/img/bankcredit/frame-1948755022-1.png)_50%_50%_/_cover]" />

                <p className="relative w-fit whitespace-nowrap text-xl font-semibold leading-5 tracking-normal text-gray-90 [font-family:'Inter',Helvetica]">
                  <span className="leading-6 text-[#9ea7bb]">
                    {t('user.greeting')}
                  </span>
                  <span className="leading-6 text-[#1c222f]">
                    {' '}
                    {t('user.name')}
                  </span>
                </p>
              </div>

              <div className="relative mb-[-24.00px] mr-[-50.00px] flex w-full flex-[0_0_auto] flex-col items-start gap-[20.5px] xl:w-[429px]">
                <div className="relative flex w-full flex-[0_0_auto] items-start justify-end gap-[11.96px] self-stretch rounded-[11.96px] bg-[#ffffff] p-[17.94px]">
                  <div className="relative flex w-full flex-1 grow flex-col items-center justify-center gap-[11.96px] xl:w-auto">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[7.47px] self-stretch">
                      <div className="relative mt-[-0.75px] flex-1 text-[14.9px] font-medium leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('offers.recommended')}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-[17.94px] self-stretch">
                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          {t('metrics.rate')}
                        </div>

                        <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          187, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          {t('metrics.earnings')}
                        </div>

                        <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          2, 560, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          {t('metrics.payback')}
                        </div>

                        <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          {t('metrics.paybackPeriod')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full flex-[0_0_auto] items-start justify-end gap-[11.96px] self-stretch rounded-[11.96px] bg-[#ffffff] p-[17.94px]">
                  <div className="relative flex w-full flex-1 grow flex-col items-center justify-center gap-[11.96px] xl:w-auto">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[7.47px] self-stretch">
                      <div className="relative mt-[-0.75px] flex-1 text-[14.9px] font-medium leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('metrics.expenses')}
                      </div>
                    </div>

                    <div className="relative flex h-40 w-full items-end justify-between self-stretch">
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[19px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[86px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          01
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-4 w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[67px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          02
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[29px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[95px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          03
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[29px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-12 w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          04
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[43px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[67px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          05
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[29px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[87px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          06
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[18px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[67px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          07
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[21px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[93px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          08
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[29px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[67px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          09
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[52px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-11 w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          10
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Advantages />

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-9 bg-[#ffffff] xl:w-[1376px]">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-[68px] self-stretch">
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start  gap-6 self-stretch xl:!flex-row">
            <motion.div
              ref={refSystem1}
              variants={slideInLeft}
              initial="hidden"
              animate={inViewSystem1 ? 'visible' : 'hidden'}
            >
              <div className="relative flex flex-1 grow flex-col items-center gap-7 overflow-hidden rounded-3xl bg-[#f9fafd] xl:gap-12 xl:p-12">
                <svg
                  width="638"
                  height="682"
                  viewBox="0 0 638 682"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[53px] top-0 h-[448px] w-full xl:w-[623px]"
                >
                  <g opacity="0.16" filter="url(#filter0_f_9344_10626)">
                    <path
                      d="M271.254 368.279C228.004 368.251 205.763 317.376 200.049 291.941C205.626 140.694 376.991 206.692 417.807 273.94C458.623 341.189 433.62 481.487 376.817 481.451C320.013 481.415 325.317 368.313 271.254 368.279Z"
                      fill="#3573FC"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_9344_10626"
                      x="0"
                      y="0"
                      width="638"
                      height="681.5"
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
                        result="effect1_foregroundBlur_9344_10626"
                      />
                    </filter>
                  </defs>
                </svg>

                <div className="relative w-full self-stretch xl:h-80">
                  <div className="relative left-0 top-[29px] flex w-96 scale-95 flex-col items-center justify-center gap-1 overflow-hidden rounded-[32px] bg-[#ffffff] p-2 xl:left-[98px] xl:scale-100">
                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch rounded-3xl p-2">
                      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch overflow-hidden rounded-2xl bg-[#f9fafd] p-3">
                          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1.5">
                            <div className="relative inline-flex flex-[0_0_auto] items-start gap-1">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                #123234555
                              </div>

                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                •
                              </div>

                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                {t('loans.borrower')}
                              </div>
                            </div>

                            <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] px-2 py-1">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#00ac6e] [font-family:'Roboto',Helvetica]">
                                {t('loans.status.paid')}
                              </div>
                            </div>
                          </div>

                          <div className="relative inline-flex flex-[0_0_auto] flex-col items-end justify-between self-stretch">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                              {t('loans.period')}
                            </div>

                            <div className="relative w-full text-right text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[120px]">
                              30 580 ₽
                            </div>
                          </div>
                        </div>

                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch overflow-hidden rounded-2xl bg-[#f9fafd] p-3">
                          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1.5">
                            <div className="relative inline-flex flex-[0_0_auto] items-start gap-1">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                #123234555
                              </div>

                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                •
                              </div>

                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                {t('loans.borrower')}
                              </div>
                            </div>

                            <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#3573fc14] px-2 py-1">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#3573fc] [font-family:'Roboto',Helvetica]">
                                {t('loans.status.refinancing')}
                              </div>
                            </div>
                          </div>

                          <div className="relative inline-flex flex-[0_0_auto] flex-col items-end justify-between self-stretch">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                              {t('loans.period')}
                            </div>

                            <div className="relative w-full text-right text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[120px]">
                              56 320 ₽
                            </div>
                          </div>
                        </div>

                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch overflow-hidden rounded-2xl bg-[#f9fafd] p-3">
                          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1.5">
                            <div className="relative inline-flex flex-[0_0_auto] items-start gap-1">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                #123234555
                              </div>

                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                •
                              </div>

                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                {t('loans.borrower')}
                              </div>
                            </div>

                            <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#e6485014] px-2 py-1">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#e64850] [font-family:'Roboto',Helvetica]">
                                {t('loans.status.overdue')}
                              </div>
                            </div>
                          </div>

                          <div className="relative inline-flex flex-[0_0_auto] flex-col items-end justify-between self-stretch">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                              {t('loans.period')}
                            </div>

                            <div className="relative w-full text-right text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[120px]">
                              120 850 ₽
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  ref={refSystem1}
                  variants={containerVariants}
                  initial="hidden"
                  animate={inViewSystem1 ? 'visible' : 'hidden'}
                  className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch p-7 xl:p-0"
                >
                  <motion.div
                    ref={refSystem2}
                    variants={itemVariants}
                    className="relative mt-[-1.00px] self-stretch text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                  >
                    {t('management.title')}
                  </motion.div>

                  <motion.p
                    ref={refSystem3}
                    variants={fadeInUp}
                    className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
                  >
                    {t('management.description')}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              ref={refSystem4}
              variants={slideInRight}
              initial="hidden"
              animate={inViewSystem4 ? 'visible' : 'hidden'}
            >
              <div className="relative flex flex-1 grow flex-col items-center gap-7  self-stretch overflow-hidden rounded-3xl bg-[#f9fafd] p-7 xl:gap-12 xl:p-12">
                <svg
                  width="665"
                  height="714"
                  viewBox="0 0 665 714"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 top-0 h-[488px] w-full xl:w-[608px]"
                >
                  <g opacity="0.16" filter="url(#filter0_f_9344_10715)">
                    <path
                      d="M279.361 387.346C231.225 387.315 206.472 330.692 200.112 302.385C206.319 134.052 397.042 207.505 442.469 282.351C487.895 357.196 460.068 513.342 396.848 513.302C333.628 513.262 339.531 387.384 279.361 387.346Z"
                      fill="#725DD6"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_9344_10715"
                      x="0"
                      y="0"
                      width="665"
                      height="713.415"
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
                        result="effect1_foregroundBlur_9344_10715"
                      />
                    </filter>
                  </defs>
                </svg>

                <div className="relative w-full self-stretch xl:h-80">
                  <div className="relative left-[-30px] top-[-10px] flex w-[120%] scale-90 items-start justify-end gap-[11.96px] rounded-[32px] bg-[#ffffff] p-6 xl:left-7 xl:top-[34px] xl:w-[524px] xl:scale-100">
                    <div className="relative flex flex-1 grow flex-col items-center justify-center gap-3">
                      <div className="relative mt-[-0.75px] self-stretch text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('payments.title')}
                      </div>

                      <div className="relative flex w-full flex-[0_0_auto] items-start gap-3 self-stretch">
                        <div className="relative flex flex-1 grow flex-col items-start gap-3.5">
                          <div className="relative mt-[-0.75px] self-stretch text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                            ID
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            12334
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            23489
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            34566
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            89654
                          </div>
                        </div>

                        <div className="relative flex flex-1 grow flex-col items-start gap-3.5">
                          <div className="relative mt-[-0.75px] self-stretch text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                            {t('payments.status')}
                          </div>

                          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] px-2 py-1">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#00ac6e] [font-family:'Roboto',Helvetica]">
                              {t('payments.status.accepted')}
                            </div>
                          </div>

                          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] px-2 py-1">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#00ac6e] [font-family:'Roboto',Helvetica]">
                              {t('payments.status.accepted')}
                            </div>
                          </div>

                          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#e6485014] px-2 py-1">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#e64850] [font-family:'Roboto',Helvetica]">
                              {t('payments.status.rejected')}
                            </div>
                          </div>

                          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] px-2 py-1">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#00ac6e] [font-family:'Roboto',Helvetica]">
                              {t('payments.status.accepted')}
                            </div>
                          </div>
                        </div>

                        <div className="relative flex flex-1 grow flex-col items-start gap-3.5">
                          <div className="relative mt-[-0.75px] self-stretch text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                            {t('payments.date')}
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            11.10.2025 16:45
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            09.10.2025 12:43
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            09.10.2025 10:34
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            08.10.2025 09:05
                          </div>
                        </div>

                        <div className="relative flex flex-1 grow flex-col items-start gap-3.5">
                          <div className="relative mt-[-0.75px] self-stretch text-right text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                            {t('payments.amount')}
                          </div>

                          <div className="relative self-stretch text-right text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            78 278 ₽
                          </div>

                          <div className="relative self-stretch text-right text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            30 580 ₽
                          </div>

                          <div className="relative self-stretch text-right text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            45 789 ₽
                          </div>

                          <div className="relative self-stretch text-right text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            120 580 ₽
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  ref={refSystem4}
                  variants={containerVariants}
                  initial="hidden"
                  animate={inViewSystem4 ? 'visible' : 'hidden'}
                  className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch"
                >
                  <motion.div
                    variants={itemVariants}
                    className="relative mt-[-1.00px] self-stretch text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                  >
                    {t('transactions.title')}
                  </motion.div>

                  <motion.p
                    variants={fadeInUp}
                    className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
                  >
                    {t('transactions.description')}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Analytics />

      <motion.div
        ref={refAuto1}
        variants={containerVariants}
        initial="hidden"
        animate={inViewAuto1 ? 'visible' : 'hidden'}
        className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 self-stretch xl:gap-12"
      >
        <motion.div
          ref={refAuto2}
          variants={itemVariants}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 xl:w-[656px]"
        >
          <motion.div
            ref={refAuto3}
            variants={fadeInUp}
            className="relative mt-[-1.00px] self-stretch text-center text-[33px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:text-5xl xl:leading-[60px]"
          >
            {t('automation.title')}
          </motion.div>
        </motion.div>

        <motion.div
          ref={refAuto4}
          variants={containerVariants}
          initial="hidden"
          animate={inViewAuto4 ? 'visible' : 'hidden'}
          className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-6 self-stretch xl:!flex-row"
        >
          <div className="relative flex w-full flex-1 grow flex-col items-start gap-6 xl:w-fit xl:!flex-row">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative flex w-full flex-1 grow items-center justify-center gap-7  self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 xl:p-10"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-7">
                <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M14 17.5C17.866 17.5 21 14.366 21 10.5C21 6.63401 17.866 3.5 14 3.5C10.134 3.5 7 6.63401 7 10.5C7 14.366 10.134 17.5 14 17.5Z"
                      stroke="#00CB82"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 23.625C5.61859 19.9642 9.46641 17.5 14 17.5C18.5336 17.5 22.3814 19.9642 24.5 23.625"
                      stroke="#00CB82"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <motion.div
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('automation.products.consumer')}
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative flex w-full flex-1 grow items-center justify-center gap-7  self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 xl:p-10"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-7">
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-1.svg"
                />

                <motion.div
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('automation.products.creditLine')}
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="relative flex w-full flex-1 grow flex-col items-start gap-6 xl:w-fit xl:!flex-row">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative flex w-full flex-1 grow items-center justify-center gap-7  self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 xl:p-10"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-7">
                {/* Removed missing SVG motion.img: /img/bankcredit/frame-19-3.svg */}
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-3.svg"
                />

                <motion.div
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('automation.products.secured')}
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative flex w-full flex-1 grow items-center justify-center gap-7  self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 xl:p-10"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-7">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative flex-[0_0_auto]"
                >
                  <rect
                    width="60"
                    height="60"
                    rx="30"
                    fill="#E74951"
                    fillOpacity="0.08"
                  />
                  <path
                    d="M17.75 39.625H42.25"
                    stroke="#E74951"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.625 39.625V32.625H27.375V39.625"
                    stroke="#E74951"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.375 28.7629V39.625"
                    stroke="#E74951"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M39.625 39.625V28.7629"
                    stroke="#E74951"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.625 30.5129L29.3809 19.7559C29.4622 19.6745 29.5587 19.61 29.6649 19.566C29.7712 19.5219 29.885 19.4993 30 19.4993C30.115 19.4993 30.2288 19.5219 30.3351 19.566C30.4413 19.61 30.5378 19.6745 30.6191 19.7559L41.375 30.5129"
                    stroke="#E74951"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="relative self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('automation.products.mortgage')}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <ZaimChecker />

      <motion.div
        variants={slideInRight}
        className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 bg-[#ffffff]  xl:w-[1376px] xl:gap-12"
      >
        <motion.div
          variants={fadeInUp}
          className="relative mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[832px] xl:text-5xl xl:leading-[60px]"
        >
          {t('process.title')}
          <br />
          {t('process.decision')}
        </motion.div>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch">
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start  gap-6 self-stretch xl:!flex-row">
            <motion.div
              ref={ref1}
              variants={itemVariants}
              initial="hidden"
              animate={inView1 ? 'visible' : 'hidden'}
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-1 grow items-start justify-center gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 xl:p-10"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-7">
                <motion.div
                  variants={scaleIn}
                  className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-4"
                >
                  <svg
                    className="!relative !h-7 !w-7"
                    fill="none"
                    height="28"
                    viewBox="0 0 28 28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 4.375H23.625V8.3125"
                      stroke="#00CB82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                    />

                    <path
                      d="M19.6875 23.625H23.625V19.6875"
                      stroke="#00CB82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                    />

                    <path
                      d="M8.3125 23.625H4.375V19.6875"
                      stroke="#00CB82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                    />

                    <path
                      d="M8.3125 4.375H4.375V8.3125"
                      stroke="#00CB82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                    />

                    <path
                      d="M14 15.75C15.933 15.75 17.5 14.183 17.5 12.25C17.5 10.317 15.933 8.75 14 8.75C12.067 8.75 10.5 10.317 10.5 12.25C10.5 14.183 12.067 15.75 14 15.75Z"
                      stroke="#00CB82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                    />

                    <path
                      d="M8.75 18.375C9.36128 17.56 10.1539 16.8984 11.0652 16.4428C11.9764 15.9872 12.9812 15.75 14 15.75C15.0188 15.75 16.0236 15.9872 16.9348 16.4428C17.8461 16.8984 18.6387 17.56 19.25 18.375"
                      stroke="#00CB82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('process.verification.title')}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative flex w-full flex-1 grow items-center justify-center gap-7  self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 xl:p-10"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-7">
                <motion.div
                  variants={scaleIn}
                  className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#e6485014] p-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    className="m-auto"
                  >
                    <path
                      d="M21.4249 21.4244L6.57617 6.57568"
                      stroke="#E74951"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z"
                      stroke="#E74951"
                      strokeWidth="1.6"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('process.blacklist.title')}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              ref={ref3}
              initial={{ opacity: 0, x: 50 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-1 grow items-start justify-center gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 xl:p-10"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-7">
                {/* Removed missing SVG motion.img: /img/bankcredit/frame-19-6.svg */}
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-6.svg"
                />
                <motion.div
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('process.enrichment.title')}
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start  gap-6 self-stretch xl:!flex-row">
            <motion.div
              ref={ref4}
              initial={{ opacity: 0, x: -50 }}
              animate={inView4 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-1 grow items-start justify-center gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 xl:p-10"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-7">
                {/* Removed missing SVG motion.img: /img/bankcredit/frame-19-10.svg */}
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-10.svg"
                />
                <motion.p
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('process.scoring')}
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              ref={ref5}
              initial={{ opacity: 0, y: 50 }}
              animate={inView5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-1 grow items-start justify-center gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 xl:p-10"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-7">
                {/* Removed missing SVG motion.img: /img/bankcredit/frame-19-5.svg */}
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-5.svg"
                />

                <motion.div
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('process.productSelection')}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              ref={ref6}
              initial={{ opacity: 0, x: 50 }}
              animate={inView6 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-1 grow items-start justify-center gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 xl:p-10"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-7">
                {/* Removed missing SVG motion.img: /img/bankcredit/frame-19-4.svg */}
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-4.svg"
                />

                <motion.div
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('process.underwriting')}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Zaim />
      <Feedback />
      <Integrations />
      <RoleStructure />
      <EmployeeWork />
      <Trust />
    </div>
  );
};
