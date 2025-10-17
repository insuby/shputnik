import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import { RoutesPath } from 'shared/routes-path';

export const Div = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(['home']);

  const handleBNPLClick = () => {
    navigate(RoutesPath.BNPL);
  };

  const ref20 = useRef<HTMLSpanElement>(null);
  const ref21 = useRef<HTMLSpanElement>(null);
  const ref22 = useRef<HTMLDivElement>(null);
  const ref23 = useRef<HTMLDivElement>(null);
  const ref24 = useRef<HTMLDivElement>(null);
  const ref25 = useRef<HTMLDivElement>(null);
  const ref26 = useRef<HTMLDivElement>(null);
  const ref27 = useRef<HTMLDivElement>(null);
  const ref28 = useRef<HTMLDivElement>(null);
  const ref29 = useRef<HTMLDivElement>(null);
  const ref30 = useRef<HTMLParagraphElement>(null);
  const ref31 = useRef<HTMLParagraphElement>(null);
  const inView20 = useInView(ref20, { once: true, margin: '-100px' });
  const inView21 = useInView(ref21, { once: true, margin: '-100px' });
  const inView22 = useInView(ref22, { once: true, margin: '-100px' });
  const inView23 = useInView(ref23, { once: true, margin: '-100px' });
  const inView24 = useInView(ref24, { once: true, margin: '-100px' });
  const inView25 = useInView(ref25, { once: true, margin: '-100px' });
  const inView26 = useInView(ref26, { once: true, margin: '-100px' });
  const inView27 = useInView(ref27, { once: true, margin: '-100px' });
  const inView28 = useInView(ref28, { once: true, margin: '-100px' });
  const inView29 = useInView(ref29, { once: true, margin: '-100px' });
  const inView30 = useInView(ref30, { once: true, margin: '-100px' });
  const inView31 = useInView(ref31, { once: true, margin: '-100px' });
  return (
    <section
      className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch"
      aria-labelledby="credit-in-store-online"
    >
      <h2
        id="credit-in-store-online"
        className="text-adaptive-40 relative mt-[-1.00px] w-fit font-normal leading-10 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
      >
        <motion.span
          id="animate_20"
          ref={ref20}
          initial={{ opacity: 0, x: -40 }}
          animate={inView20 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-medium leading-[0.1px] text-[#9ea7bb]"
        >
          {t('lendingStoreOnline.headingLeft')}
          <br />
        </motion.span>
        <motion.span
          id="animate_21"
          ref={ref21}
          initial={{ opacity: 0, x: 40 }}
          animate={inView21 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="leading-adaptive-48 font-medium text-[#1c222f]"
        >
          {t('lendingStoreOnline.headingRight')}
        </motion.span>
      </h2>
      <div className="relative flex min-h-[var(--size-600)] w-full items-start gap-5 self-stretch">
        <div className="relative flex flex-1 grow items-center gap-5 self-stretch">
          <motion.div
            id="animate_24"
            ref={ref24}
            initial={{ opacity: 0, y: 40 }}
            animate={inView24 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="group relative transition-colors flex flex-1 grow cursor-pointer flex-col items-start justify-center self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-transparent bg-[#f9fafd]  hover:border-[#acc5ff] hover:bg-[#f5f7ff]"
          >
            <Link
              to={RoutesPath.BNPL}
              className="relative w-full flex-1 grow self-stretch rounded-[32px]"
            >
              <div className="relative h-[var(--size-368)] w-full xl:w-[var(--size-678)]">
                <svg
                  className="absolute z-10"
                  width="720"
                  height="368"
                  viewBox="0 0 720 368"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.24" filter="url(#filter0_f_9016_1953)">
                    <path
                      d="M470.658 360.722C458.687 410.579 393.891 422.177 362.989 421.744C190.149 373.561 313.547 194.205 402.348 165.711C491.149 137.217 646.003 204.774 630.28 270.256C614.558 335.737 485.622 298.4 470.658 360.722Z"
                      fill="#9FA7BC"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_9016_1953"
                      x="-96.6599"
                      y="-213.69"
                      width="1100.75"
                      height="1008.14"
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
                        result="effect1_foregroundBlur_9016_1953"
                      />
                    </filter>
                  </defs>
                </svg>
                <svg
                  width="720"
                  height="368"
                  viewBox="0 0 720 368"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.32" filter="url(#filter0_f_9016_1842)">
                    <path
                      d="M338.986 156.537C362.125 116.459 421.171 123.031 447.802 131.326C585.024 217.324 432.267 340.906 348.117 342.803C263.967 344.701 147.275 246.548 177.665 193.911C208.054 141.275 310.062 206.633 338.986 156.537Z"
                      fill="#3573FC"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_9016_1842"
                      x="-199.963"
                      y="-247.627"
                      width="1075.43"
                      height="963.156"
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
                        result="effect1_foregroundBlur_9016_1842"
                      />
                    </filter>
                  </defs>
                </svg>
                <motion.div
                  id="animate_25"
                  ref={ref25}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView25 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute left-12 top-12 inline-flex items-center rounded-[32px] bg-white p-4"
                >
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start justify-center gap-2.5 p-3">
                    <div className="relative flex size-40 items-start gap-3">
                      <div className="relative size-[var(--size-148)] [background:url(/img/frame-1948755020.png)_50%_50%_/_cover]" />
                    </div>
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4 self-stretch rounded-3xl bg-[#f6f8ff] p-6">
                    <div className="relative mt-[-1.00px] self-stretch text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('lendingStoreOnline.productName')}
                    </div>
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2.5">
                      <div className="h-5w-full relative flex items-center gap-3 xl:w-[var(--size-264)]">
                        <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('lendingStoreOnline.cost')}
                        </div>
                        <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[var(--size-72)]">
                          23,456₽
                        </div>
                      </div>
                      <div className="h-5w-full relative flex items-center gap-3 xl:w-[var(--size-264)]">
                        <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('lendingStoreOnline.advancePayment')}
                        </div>
                        <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[var(--size-72)]">
                          42,000₽
                        </div>
                      </div>
                      <div className="h-5w-full relative flex items-center gap-3 xl:w-[var(--size-264)]">
                        <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('calculator.term')}
                        </div>
                        <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[var(--size-72)]">
                          4,000₽
                        </div>
                      </div>
                      <div className="h-5w-full relative flex items-center gap-3 xl:w-[var(--size-264)]">
                        <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('lendingStoreOnline.nextPayment')}
                        </div>
                        <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[var(--size-72)]">
                          2,700₽
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  id="animate_27"
                  ref={ref27}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView27 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute left-[var(--pos-363)] top-[var(--pos-238)] inline-flex items-center gap-4 rounded-[32px] bg-white py-4 pl-4 pr-6"
                >
                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-7 rounded-3xl bg-[#f2f5ff] p-4">
                    <svg
                      className="relative size-8"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Money"
                    >
                      <path
                        d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 14C10.5 15.933 12.067 17.5 14 17.5Z"
                        stroke="#3573FCFF"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.25 7H1.75V21H26.25V7Z"
                        stroke="#3573FCFF"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.25 11.375C25.157 11.1897 24.1487 10.6691 23.3648 9.88521C22.5809 9.10132 22.0603 8.093 21.875 7"
                        stroke="#3573FCFF"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.875 21C22.0603 19.907 22.5809 18.8987 23.3648 18.1148C24.1487 17.3309 25.157 16.8103 26.25 16.625"
                        stroke="#3573FCFF"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.75 16.625C2.843 16.8103 3.85132 17.3309 4.63521 18.1148C5.4191 18.8987 5.93975 19.907 6.125 21"
                        stroke="#3573FCFF"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.125 7C5.93975 8.093 5.4191 9.10132 4.63521 9.88521C3.85132 10.6691 2.843 11.1897 1.75 11.375"
                        stroke="#3573FCFF"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      {t('hero.monthlyPayment')}
                    </div>
                    <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      4 950₽
                    </div>
                  </div>
                </motion.div>
              </div>
            </Link>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-end gap-7 self-stretch p-8 pt-0 xl:p-10">
              <motion.div
                id="animate_28"
                ref={ref28}
                initial={{ opacity: 0, x: -40 }}
                animate={inView28 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('lendingStoreOnline.bnplTitle')}
              </motion.div>
              <motion.div
                id="animate_30"
                ref={ref30}
                initial={{ opacity: 0, y: 40 }}
                animate={inView30 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
              >
                <span className="inline-block w-10/12">
                  {t('lendingStoreOnline.bnplDesc')}
                </span>
                <div className="absolute bottom-0 right-0 inline-flex h-[-99px] flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-white p-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-[#9FA7BC] group-hover:stroke-[#3573FC]"
                  >
                    <path
                      d="M12 6L22 16L12 26"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            id="animate_22"
            ref={ref22}
            initial={{ opacity: 0, y: 40 }}
            animate={inView22 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="group relative transition-colors flex flex-1 grow cursor-pointer flex-col items-start justify-center self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-transparent bg-[#f9fafd]  hover:border-[#acc5ff] hover:bg-[#f5f7ff]"
          >
            <Link
              to={RoutesPath.BNPL}
              className="relative w-full flex-1 grow self-stretch rounded-[32px]"
            >
              <div className="relative left-[var(--pos-67)] h-[var(--size-368)] w-full xl:w-[var(--size-678)]">
                <svg
                  className="absolute z-10"
                  width="700"
                  height="368"
                  viewBox="0 0 700 368"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.24" filter="url(#filter0_f_9016_1953)">
                    <path
                      d="M470.658 360.722C458.687 410.579 393.891 422.177 362.989 421.744C190.149 373.561 313.547 194.205 402.348 165.711C491.149 137.217 646.003 204.774 630.28 270.256C614.558 335.737 485.622 298.4 470.658 360.722Z"
                      fill="#9FA7BC"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_9016_1953"
                      x="-96.6599"
                      y="-213.69"
                      width="1100.75"
                      height="1008.14"
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
                        result="effect1_foregroundBlur_9016_1953"
                      />
                    </filter>
                  </defs>
                </svg>
                <svg
                  width="700"
                  height="368"
                  viewBox="0 0 700 368"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.32" filter="url(#filter0_f_9016_1842)">
                    <path
                      d="M338.986 156.537C362.125 116.459 421.171 123.031 447.802 131.326C585.024 217.324 432.267 340.906 348.117 342.803C263.967 344.701 147.275 246.548 177.665 193.911C208.054 141.275 310.062 206.633 338.986 156.537Z"
                      fill="#3573FC"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_9016_1842"
                      x="-199.963"
                      y="-247.627"
                      width="1075.43"
                      height="963.156"
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
                        result="effect1_foregroundBlur_9016_1842"
                      />
                    </filter>
                  </defs>
                </svg>
                <motion.div
                  id="animate_26"
                  ref={ref26}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView26 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute left-[var(--pos-215)] top-[var(--pos-26)] inline-flex flex-col items-start justify-center gap-4 rounded-[32px] bg-white p-7"
                >
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                    <div className="relative mt-[-1.00px] w-full text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[var(--size-264)]">
                      {t('lendingStoreOnline.paymentSchedule')}
                    </div>
                    <div className="relative w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] xl:w-[var(--size-180)]">
                      {t('lendingStoreOnline.contract')}
                    </div>
                  </div>
                  <div className="relative inline-flex h-[var(--size-154)] items-end">
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                      <div className="relative h-[var(--size-76)] w-2 rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />
                      <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('lendingStoreOnline.months.march')}
                      </div>
                    </div>
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                      <div className="relative h-[var(--size-86)] w-2 rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />
                      <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('lendingStoreOnline.months.april')}
                      </div>
                    </div>
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                      <div className="relative h-[var(--size-105)] w-2 rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />
                      <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('lendingStoreOnline.months.may')}
                      </div>
                    </div>
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                      <div className="relative h-[var(--size-120)] w-2 rounded-3xl bg-[#f2f4fb]" />
                      <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('lendingStoreOnline.months.june')}
                      </div>
                    </div>
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                      <div className="relative h-[var(--size-91)] w-2 rounded-3xl bg-[#f2f4fb]" />
                      <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('lendingStoreOnline.months.july')}
                      </div>
                    </div>
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                      <div className="relative h-[var(--size-98)] w-2 rounded-3xl bg-[#f2f4fb]" />
                      <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('lendingStoreOnline.months.august')}
                      </div>
                    </div>
                  </div>
                  <svg
                    className="absolute left-0 top-[var(--pos-109)] h-24 w-full xl:w-[var(--size-328)]"
                    width="329"
                    height="62"
                    viewBox="0 0 329 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden={true}
                  >
                    <path
                      d="M0.247041 55.6176L24.733 49.381C29.1945 48.2446 33.9292 49.0834 37.7288 51.6833L46.9274 57.9775C54.012 62.8252 63.659 61.2242 68.798 54.3479L76.635 43.8616C81.3034 37.6149 89.7928 35.6394 96.7395 39.1831L117.269 49.6559C125.75 53.9822 136.109 49.9982 139.506 41.1042L152.056 8.24261C156.12 -2.39929 171.61 -0.959684 173.643 10.2489L175.739 21.7982C177.224 29.987 188.598 30.9118 191.387 23.0705V23.0705C193.932 15.9142 204.031 15.853 206.663 22.9778L209.006 29.3211C211.913 37.1908 222.387 38.7047 227.404 31.9804L233.005 24.4727C238.302 17.372 248.429 16.0749 255.345 21.6113L261.435 26.4867C266.413 30.4716 273.281 31.1237 278.919 28.1469L328.533 1.95518"
                      stroke="url(#paint0_linear_9016_2129)"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_9016_2129"
                        x1="0.247041"
                        y1="39.8198"
                        x2="328.533"
                        y2="39.8198"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="0.269231" stopColor="#00CB82" />
                        <stop offset="0.692308" stopColor="#00CB82" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute left-[var(--pos-156)] top-[var(--pos-133)] size-3 rounded-md border-2 border-solid border-[#00cb82] bg-[#ffffff]" />
                </motion.div>
                <motion.div
                  id="animate_23"
                  ref={ref23}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView23 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute bottom-0 left-0 top-14 inline-flex flex-col items-center justify-center gap-3 rounded-[32px_32px_0px_0px] bg-white p-4"
                >
                  <div className="relative size-[var(--size-212)] rounded-[100px]">
                    <div className="relative left-[var(--pos-7)] top-[var(--pos-7)] size-[var(--size-198)]">
                      <div className="absolute left-10 top-[var(--pos-68)] inline-flex h-[var(--size-62)] flex-col items-center gap-0.5">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                          {t('lendingStoreOnline.currentBalance')}
                        </div>
                        <div className="text-adaptive-28 relative w-fit whitespace-nowrap text-center font-medium leading-10 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                          44,000₽
                        </div>
                      </div>
                      <div className="absolute left-0 top-0 size-[var(--size-198)] rounded-[99px] border-[10px] border-solid border-neutral-50" />
                      <svg
                        className="absolute left-0 top-0 size-[var(--size-198)]"
                        width="198"
                        height="198"
                        viewBox="0 0 198 198"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden={true}
                      >
                        <path
                          d="M5 99C5 150.915 47.0852 193 99 193C150.915 193 193 150.915 193 99C193 47.0852 150.915 5 99 5"
                          stroke="url(#paint0_linear_9017_4475)"
                          strokeWidth="10"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_9017_4475"
                            x1="99"
                            y1="5"
                            x2="43.5"
                            y2="-9"
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
                    </div>
                  </div>
                  <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch rounded-[20px] bg-[#f6f8ff] px-4 py-3">
                    <div className="relative w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                      {t('lendingStoreOnline.loanAmount')}
                    </div>
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      122, 000₽
                    </div>
                  </div>
                </motion.div>
              </div>
            </Link>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-end gap-7 self-stretch p-8 pt-0 xl:p-10">
              <motion.div
                id="animate_29"
                ref={ref29}
                initial={{ opacity: 0, x: 40 }}
                animate={inView29 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('lendingStoreOnline.posTitle')}
              </motion.div>
              <motion.div
                id="animate_31"
                ref={ref31}
                initial={{ opacity: 0, y: 40 }}
                animate={inView31 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
              >
                <span className="inline-block w-10/12">
                  {t('lendingStoreOnline.posDesc')}
                </span>
                <div className="absolute bottom-0 right-0 inline-flex  h-[-99px] flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-white p-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-[#9FA7BC] group-hover:stroke-[#3573FC]"
                  >
                    <path
                      d="M12 6L22 16L12 26"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
