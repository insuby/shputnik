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

  const ref14 = useRef(null);
  const ref15 = useRef(null);
  const ref16 = useRef(null);
  const ref17 = useRef(null);
  const ref18 = useRef(null);

  const inView1 = useInView(ref1, { once: true, margin: '-30px' });
  const inView2 = useInView(ref2, { once: true, margin: '-30px' });
  const inView3 = useInView(ref3, { once: true, margin: '-30px' });
  const inView14 = useInView(ref14, { once: true, margin: '-30px' });
  const inView15 = useInView(ref15, { once: true, margin: '-30px' });
  const inView16 = useInView(ref16, { once: true, margin: '-30px' });
  const inView17 = useInView(ref17, { once: true, margin: '-30px' });
  const inView18 = useInView(ref18, { once: true, margin: '-30px' });

  return (
    <div className="relative flex size-full !flex-[0_0_auto] flex-col items-start gap-2.5 rounded-[40px] bg-[#3573fc1f] p-3 lg:w-full">
      <div className="relative flex min-h-[330px] w-full  flex-[0_0_auto] items-center gap-2.5 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-7 lg:!p-[60px]">
        <svg
          width="939"
          height="763"
          viewBox="0 0 939 763"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-14 top-[-306px] h-[590px] w-full lg:w-[620px]"
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
          className="absolute left-[666px] top-[-109px] h-[675px] w-full lg:w-[727px]"
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

        <div className="relative flex flex-col items-start gap-7 lg:w-[696px]">
          <div className="relative flex w-full max-w-[90%] flex-col items-start gap-4 self-stretch">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, x: 80 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative mt-[-1.00px] max-w-[70%] self-stretch text-[40px] font-medium leading-[48px] tracking-normal text-white [font-family:'Roboto',Helvetica] lg:whitespace-nowrap"
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

        <div className="absolute -bottom-6 left-[var(--pos-789)] hidden w-[328px] flex-col items-start gap-3 rounded-t-[32px] bg-[#ffffff] p-6 lg:flex">
          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            Калькулятор
          </div>
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch overflow-hidden rounded-2xl bg-[#f2f5ff] p-4">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                  Сумма
                </div>
                <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  160 000 ₽
                </div>
              </div>
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                <img
                  className="relative mt-[-6.00px] h-[30px] w-full self-stretch"
                  alt="Frame"
                  src="https://c.animaapp.com/mgauzfkjiazN02/img/frame-83-2.svg"
                />
                <div className="relative flex h-4 w-full items-start justify-between self-stretch">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                    10 000 ₽
                  </div>
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                    200 000 ₽
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch overflow-hidden rounded-2xl bg-[#f2f5ff] p-4">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                  Период
                </div>
                <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  8 месяцев
                </div>
              </div>
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                <img
                  className="relative mb-[-10.00px] mt-[-6.00px] h-[30px] w-full self-stretch"
                  alt="Frame"
                  src="https://c.animaapp.com/mgauzfkjiazN02/img/frame-83-4.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          ref={ref14}
          initial={{ opacity: 0, x: 80 }}
          animate={inView14 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="absolute bottom-0 left-[var(--pos-1046)] hidden flex-col items-center justify-center gap-3 rounded-[32px_32px_0px_0px] bg-white p-4 lg:inline-flex"
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
                  86,000₽
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
                  stroke="url(#paint0_linear_0_83)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_83"
                    x1="99"
                    y1="5"
                    x2="43.5"
                    y2="-9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#04CA84" />
                    <stop offset="1" stopColor="#04CA84" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
