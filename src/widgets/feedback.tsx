import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useFeedbackForm } from './feedback-form';

export const Feedback = () => {
  const { t } = useTranslation('widgets');
  const { setIsOpen } = useFeedbackForm();

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
  const ref21 = useRef(null);

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
  const inView21 = useInView(ref21, { once: true, margin: '-100px' });

  return (
    <div className="relative flex size-full min-h-[349px] !flex-[0_0_auto] flex-col items-start gap-2.5 rounded-[40px] bg-[#3573fc1f] p-3 xl:w-[1376px]">
      <div className="relative flex size-full flex-[0_0_auto] items-center gap-2.5 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-7 xl:p-[60px]">
        <svg
          width="939"
          height="763"
          viewBox="0 0 939 763"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-14 top-[-306px] h-[590px] w-full xl:w-[620px]"
          aria-hidden={true}
        >
          <g opacity="0.4" filter="url(#filter0_f_0_4)">
            <path
              d="M464.944 503.537C498.131 571.515 595.163 567.495 639.531 556.988C873.053 432.314 637.967 213.464 500.958 200.826C363.949 188.189 162.528 335.014 206.115 424.295C249.702 513.575 423.459 418.564 464.944 503.537Z"
              fill="#00FF6A"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_0_4"
              x="0"
              y="0"
              width="938.566"
              height="763"
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
                result="effect1_foregroundBlur_0_4"
              />
            </filter>
          </defs>
        </svg>

        <svg
          width="1040"
          height="846"
          viewBox="0 0 1040 846"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[666px] top-[-109px] h-[675px] w-full xl:w-[727px]"
          aria-hidden={true}
        >
          <g opacity="0.3" filter="url(#filter0_f_0_5)">
            <path
              d="M504.648 285.206C536.839 200.58 652.934 194.855 706.958 202.571C998.824 325.867 742.328 612.212 580.387 642.126C418.446 672.04 162.443 518.86 204.721 407.715C246.998 296.571 464.411 390.989 504.648 285.206Z"
              fill="#FF2BB8"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_0_5"
              x="0"
              y="0.000122116"
              width="1039.93"
              height="846"
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
                result="effect1_foregroundBlur_0_5"
              />
            </filter>
          </defs>
        </svg>

        <div className="relative flex flex-col items-start gap-7 xl:w-[696px]">
          <div className="relative flex w-full flex-col items-start gap-4 self-stretch">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, x: 80 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative mt-[-1.00px] self-stretch text-[40px] font-medium leading-[48px] tracking-normal text-white [font-family:'Roboto',Helvetica]"
            >
              {t('feedback.title')}
            </motion.div>

            <motion.p
              ref={ref2}
              initial={{ opacity: 0, y: 80 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-white opacity-60 [font-family:'Roboto',Helvetica]"
            >
              {t('feedback.subtitle')}
            </motion.p>
          </div>

          <motion.button
            ref={ref3}
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            onClick={() => setIsOpen(true)}
            className="all-[unset] relative box-border inline-flex w-full flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-white px-8 py-4 md:w-fit"
          >
            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {t('feedback.contactButton')}
            </div>
          </motion.button>
        </div>

        <motion.div
          ref={ref4}
          initial={{ opacity: 0, x: 80 }}
          animate={inView4 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="absolute left-[789px] top-[65px] hidden flex-col  items-start justify-center gap-4 rounded-[32px_32px_0px_0px] bg-white p-7 xl:inline-flex"
        >
          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
            <motion.div
              ref={ref5}
              initial={{ opacity: 0, y: 50 }}
              animate={inView5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="relative mt-[-1.00px] w-full text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[264px]"
            >
              {t('feedback.paymentSchedule')}
            </motion.div>

            <motion.div
              ref={ref6}
              initial={{ opacity: 0, y: 50 }}
              animate={inView6 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              className="relative w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] xl:w-[180px]"
            >
              {t('feedback.contract')}
            </motion.div>
          </div>

          <motion.div
            ref={ref7}
            initial={{ opacity: 0, y: 50 }}
            animate={inView7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            className="relative inline-flex h-[154px] items-end"
          >
            <motion.div
              ref={ref8}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView8 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
              className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
            >
              <div className="relative h-[76px] w-2 rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />

              <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                {t('feedback.months.march')}
              </div>
            </motion.div>

            <motion.div
              ref={ref9}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView9 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
              className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
            >
              <div className="relative h-[86px] w-2 rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />

              <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                {t('feedback.months.april')}
              </div>
            </motion.div>

            <motion.div
              ref={ref10}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView10 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
              className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
            >
              <div className="relative h-[105px] w-2 rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />

              <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                {t('feedback.months.may')}
              </div>
            </motion.div>

            <motion.div
              ref={ref11}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView11 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
              className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
            >
              <div className="relative h-[120px] w-2 rounded-3xl bg-[#f2f4fb]" />

              <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                {t('feedback.months.june')}
              </div>
            </motion.div>

            <motion.div
              ref={ref12}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView12 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.1 }}
              className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
            >
              <div className="relative h-[91px] w-2 rounded-3xl bg-[#f2f4fb]" />

              <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                {t('feedback.months.july')}
              </div>
            </motion.div>

            <motion.div
              ref={ref13}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView13 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
              className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
            >
              <div className="relative h-[98px] w-2 rounded-3xl bg-[#f2f4fb]" />

              <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                {t('feedback.months.august')}
              </div>
            </motion.div>
          </motion.div>

          <svg
            width="329"
            height="62"
            viewBox="0 0 329 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 top-[109px] h-24 w-full xl:w-[328px]"
            aria-hidden={true}
          >
            <path
              d="M0.247285 55.6176L24.7332 49.381C29.1947 48.2446 33.9294 49.0834 37.729 51.6833L46.9276 57.9774C54.0122 62.8251 63.6592 61.2242 68.7982 54.3479L76.6352 43.8615C81.3036 37.6149 89.793 35.6394 96.7397 39.1831L117.269 49.6558C125.75 53.9821 136.11 49.9981 139.506 41.1042L152.056 8.2426C156.121 -2.39929 171.61 -0.959684 173.644 10.2489L175.739 21.7982C177.224 29.987 188.598 30.9118 191.387 23.0705V23.0705C193.933 15.9142 204.031 15.853 206.663 22.9778L209.006 29.3211C211.913 37.1908 222.387 38.7047 227.404 31.9804L233.005 24.4727C238.302 17.372 248.429 16.0749 255.345 21.6113L261.435 26.4867C266.413 30.4716 273.281 31.1237 278.92 28.1469L328.533 1.95518"
              stroke="url(#paint0_linear_0_35)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_35"
                x1="0.247285"
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

          <div className="absolute left-[156px] top-[133px] size-3 rounded-md border-2 border-solid border-[#00cb82] bg-[#ffffff]" />
        </motion.div>

        <svg
          width="669"
          height="732"
          viewBox="0 0 669 732"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[874px] top-6 h-[403px] w-full xl:w-[426px]"
          aria-hidden={true}
        >
          <g opacity="0.16" filter="url(#filter0_f_0_37)">
            <path
              d="M267.283 332.535C243.872 286.891 285.493 235.854 309.23 216.041C471.821 139.955 495.065 356.516 446.238 436.023C397.41 515.531 235.843 565.188 205.096 505.24C174.349 445.292 296.547 389.591 267.283 332.535Z"
              fill="#7C92C8"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_0_37"
              x="0"
              y="0"
              width="669"
              height="731.862"
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
                result="effect1_foregroundBlur_0_37"
              />
            </filter>
          </defs>
        </svg>

        <motion.div
          ref={ref14}
          initial={{ opacity: 0, x: 80 }}
          animate={inView14 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="absolute left-[1046px] top-[90px] inline-flex flex-col items-center justify-center gap-3 rounded-[32px_32px_0px_0px] bg-white p-4"
        >
          <motion.div
            ref={ref15}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView15 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="relative size-[212px] rounded-[100px]"
          >
            <div className="relative left-[7px] top-[7px] size-[198px]">
              <motion.div
                ref={ref16}
                initial={{ opacity: 0, y: 50 }}
                animate={inView16 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                className="absolute left-10 top-[68px] inline-flex h-[62px] flex-col items-center gap-0.5"
              >
                <motion.div
                  ref={ref17}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView17 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                  className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]"
                >
                  {t('feedback.currentBalance')}
                </motion.div>

                <motion.div
                  ref={ref18}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView18 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
                  className="relative w-fit whitespace-nowrap text-center text-[28px] font-medium leading-10 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]"
                >
                  44,000₽
                </motion.div>
              </motion.div>

              <div className="absolute left-0 top-0 size-[198px] rounded-[99px] border-[10px] border-solid border-neutral-50" />

              <svg
                width="198"
                height="198"
                viewBox="0 0 198 198"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-0 size-[198px]"
              >
                <path
                  d="M5 99C5 150.915 47.0852 193 99 193C150.915 193 193 150.915 193 99C193 47.0852 150.915 5 99 5"
                  stroke="url(#paint0_linear_0_44)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_44"
                    x1="99"
                    y1="5"
                    x2="43.5"
                    y2="-9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3573FC" />
                    <stop offset="1" stopColor="#3573FC" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          <motion.div
            ref={ref19}
            initial={{ opacity: 0, y: 50 }}
            animate={inView19 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
            className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch rounded-[20px] bg-[#f6f8ff] px-4 py-3"
          >
            <motion.div
              ref={ref20}
              initial={{ opacity: 0, x: -50 }}
              animate={inView20 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
              className="relative w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]"
            >
              {t('feedback.loanAmount')}
            </motion.div>

            <motion.div
              ref={ref21}
              initial={{ opacity: 0, x: 50 }}
              animate={inView21 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
              className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
            >
              122, 000₽
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
