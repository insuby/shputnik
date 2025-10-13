import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Subtract } from 'shared/icons/Subtract.tsx';
import { Check10 } from 'shared/ui/check10.tsx';

export const EmployeeWork = ({ color }: { color?: string }) => {
  const { t } = useTranslation('widgets');
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
  const ref22 = useRef(null);
  const ref23 = useRef(null);
  const ref24 = useRef(null);
  const ref25 = useRef(null);
  const ref26 = useRef(null);
  const ref27 = useRef(null);
  const ref28 = useRef(null);
  const ref29 = useRef(null);
  const ref30 = useRef(null);
  const ref40 = useRef(null);
  const ref41 = useRef(null);
  const ref42 = useRef(null);
  const ref43 = useRef(null);
  const ref44 = useRef(null);
  const ref45 = useRef(null);
  const ref46 = useRef(null);

  const inView1 = useInView(ref1, { once: true, margin: '-100px' });
  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView4 = useInView(ref4, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref6, { once: true, margin: '-100px' });
  const inView7 = useInView(ref7, { once: true, margin: '-100px' });
  const inView8 = useInView(ref8, { once: true, margin: '-100px' });
  const inView9 = useInView(ref9, { once: true, margin: '-100px' });
  const inView30 = useInView(ref30, { once: true, margin: '-100px' });
  const inView40 = useInView(ref40, { once: true, margin: '-100px' });
  const inView41 = useInView(ref41, { once: true, margin: '-100px' });
  const inView42 = useInView(ref42, { once: true, margin: '-100px' });
  const inView43 = useInView(ref43, { once: true, margin: '-100px' });
  const inView44 = useInView(ref44, { once: true, margin: '-100px' });
  const inView45 = useInView(ref45, { once: true, margin: '-100px' });
  const inView46 = useInView(ref46, { once: true, margin: '-100px' });

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-9 self-stretch">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-[68px] self-stretch">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-4 self-stretch"
        >
          <motion.div
            ref={ref6}
            initial={{ opacity: 0, y: 50 }}
            animate={inView6 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:text-5xl xl:leading-[60px]"
          >
            {t('employeeWork.title')}
          </motion.div>

          <motion.p
            ref={ref7}
            initial={{ opacity: 0, y: 50 }}
            animate={inView7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
            className="relative w-full max-w-[90%] text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica] xl:w-[704px]"
          >
            {t('employeeWork.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-start  gap-6 self-stretch lg:!flex-row"
        >
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, x: -50 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
            className="relative flex flex-1 grow flex-col items-center gap-7  overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 xl:gap-12 xl:p-12"
          >
            <svg
              width="638"
              height="682"
              viewBox="0 0 638 682"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[53px] top-0 h-[448px] w-full xl:w-[623px]"
            >
              <g opacity="0.16" filter="url(#filter0_f_9163_2532)">
                <path
                  d="M271.255 368.278C228.004 368.251 205.764 317.375 200.05 291.941C205.627 140.694 376.992 206.691 417.808 273.94C458.623 341.188 433.62 481.486 376.817 481.45C320.014 481.414 325.317 368.313 271.255 368.278Z"
                  fill="#3573FC"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_9163_2532"
                  x="0"
                  y="0"
                  width="638"
                  height="681.499"
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
                    result="effect1_foregroundBlur_9163_2532"
                  />
                </filter>
              </defs>
            </svg>

            <div className="relative h-[230px]">
              <svg
                width="580"
                height="222"
                viewBox="0 0 580 222"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative left-0 m-auto mt-[-11.00px] size-full h-[222px] w-full scale-150 self-stretch xl:scale-100"
                style={{
                  margin: 'auto',
                }}
              >
                <circle
                  opacity="0.8"
                  cx="290"
                  cy="111"
                  r="64"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.8"
                  cx="290"
                  cy="111"
                  r="22"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.4"
                  cx="290"
                  cy="111"
                  r="110"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle cx="185" cy="74" r="24" fill="white" />
                <path
                  d="M185 77.25C188.59 77.25 191.5 74.3399 191.5 70.75C191.5 67.1601 188.59 64.25 185 64.25C181.41 64.25 178.5 67.1601 178.5 70.75C178.5 74.3399 181.41 77.25 185 77.25Z"
                  stroke="#9FA7BC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M175.25 82.9375C177.217 79.5382 180.79 77.25 185 77.25C189.21 77.25 192.783 79.5382 194.75 82.9375"
                  stroke="#9FA7BC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="259" cy="175" r="24" fill="white" />
                <path
                  d="M259 178.25C262.59 178.25 265.5 175.34 265.5 171.75C265.5 168.16 262.59 165.25 259 165.25C255.41 165.25 252.5 168.16 252.5 171.75C252.5 175.34 255.41 178.25 259 178.25Z"
                  stroke="#9FA7BC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M249.25 183.938C251.217 180.538 254.79 178.25 259 178.25C263.21 178.25 266.783 180.538 268.75 183.938"
                  stroke="#9FA7BC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="307" cy="94" r="24" fill="#3573FC" />
                <path
                  d="M307 97.25C310.59 97.25 313.5 94.3399 313.5 90.75C313.5 87.1601 310.59 84.25 307 84.25C303.41 84.25 300.5 87.1601 300.5 90.75C300.5 94.3399 303.41 97.25 307 97.25Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M297.25 102.938C299.217 99.5382 302.79 97.25 307 97.25C311.21 97.25 314.783 99.5382 316.75 102.938"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="383" cy="46" r="24" fill="white" />
                <path
                  d="M383 49.25C386.59 49.25 389.5 46.3399 389.5 42.75C389.5 39.1601 386.59 36.25 383 36.25C379.41 36.25 376.5 39.1601 376.5 42.75C376.5 46.3399 379.41 49.25 383 49.25Z"
                  stroke="#9FA7BC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M373.25 54.9375C375.217 51.5382 378.79 49.25 383 49.25C387.21 49.25 390.783 51.5382 392.75 54.9375"
                  stroke="#9FA7BC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <motion.div
              ref={ref8}
              initial={{ opacity: 0, y: 50 }}
              animate={inView8 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch"
            >
              <motion.p
                ref={ref9}
                initial={{ opacity: 0, y: -50 }}
                animate={inView9 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.35 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('employeeWork.accessPolicy')}
              </motion.p>

              <motion.div
                ref={ref10}
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                className="relative flex w-full flex-[0_0_auto] flex-col items-start  gap-6 self-stretch xl:!flex-row"
              >
                <motion.div
                  ref={ref11}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView1 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
                  className="relative flex flex-1 grow flex-col items-start gap-4"
                >
                  <motion.div
                    ref={ref12}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch xl:h-7"
                  >
                    <motion.div
                      ref={ref13}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView1 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.55,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('employeeWork.roles.creditManager')}
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref14}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch xl:h-7"
                  >
                    <motion.div
                      ref={ref15}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView1 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.65,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('employeeWork.roles.analyst')}
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref16}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch xl:h-7"
                  >
                    <motion.div
                      ref={ref17}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView1 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.75,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('employeeWork.roles.riskManager')}
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref18}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch xl:h-7"
                  >
                    <motion.div
                      ref={ref19}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView1 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.85,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('employeeWork.roles.verifier')}
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  ref={ref20}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView2 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
                  className="relative flex flex-1 grow flex-col items-start gap-4"
                >
                  <motion.div
                    ref={ref21}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch xl:h-7"
                  >
                    <motion.div
                      ref={ref22}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.55,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('employeeWork.roles.collector')}
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref23}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch xl:h-7"
                  >
                    <motion.div
                      ref={ref24}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.65,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('employeeWork.roles.operator')}
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref25}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch xl:h-7"
                  >
                    <motion.div
                      ref={ref26}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.75,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('employeeWork.roles.supervisor')}
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref27}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch xl:h-7"
                  >
                    <motion.div
                      ref={ref28}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.85,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('employeeWork.roles.manager')}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            ref={ref4}
            initial={{ opacity: 0, x: 50 }}
            animate={inView4 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="relative flex flex-1 grow flex-col items-center gap-7  self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 lg:!p-12 xl:gap-12"
          >
            <svg
              width="665"
              height="714"
              viewBox="0 0 665 714"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-0 h-[488px] w-full xl:w-[608px]"
            >
              <g opacity="0.16" filter="url(#filter0_f_9163_2595)">
                <path
                  d="M279.361 387.345C231.225 387.315 206.472 330.692 200.113 302.384C206.32 134.052 397.043 207.505 442.469 282.35C487.896 357.195 460.068 513.341 396.848 513.301C333.628 513.261 339.531 387.384 279.361 387.345Z"
                  fill="#725DD6"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_9163_2595"
                  x="0"
                  y="0"
                  width="665"
                  height="713.413"
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
                    result="effect1_foregroundBlur_9163_2595"
                  />
                </filter>
              </defs>
            </svg>

            <div className="relative h-[230px] w-full self-stretch">
              <div className="relative top-1 flex w-full flex-col items-start xl:left-[73px] xl:w-[456px]">
                <div className="relative flex w-full flex-[0_0_auto] items-end justify-end self-stretch py-2 pl-0 pr-2 xl:left-0 xl:pl-16">
                  <div className="relative flex w-full flex-col items-start gap-1 xl:w-[296px]">
                    <div className="relative mt-[-1.00px] self-stretch text-xs font-normal leading-4 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('employeeWork.roles.you')}
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2.5 self-stretch rounded-[16px_16px_0px_16px] bg-violet-50 px-3 py-2">
                      <p className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                        {t('employeeWork.earlyRepayment.question')}
                      </p>
                    </div>
                  </div>

                  <Subtract className="relative size-3" color="#00CB82" />
                </div>

                <div className="relative flex w-full flex-[0_0_auto] items-end self-stretch py-2 pl-2 pr-20">
                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2 rounded-[100px] p-5 [background:url(/img/widgets/frame-3.png)_50%_50%_/_cover]" />

                  <Subtract className="relative size-3" color="#00CB82" />

                  <div className="relative flex flex-1 grow flex-col items-start gap-1.5">
                    <div className="relative mt-[-1.00px] self-stretch text-xs font-normal leading-4 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('static.managerName')}
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start self-stretch rounded-[16px_16px_16px_0px] bg-[#ffffff] px-3 py-2">
                      <p className="relative mt-[-1.00px] flex-1 text-base font-normal leading-6 tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                        {t('static.managerAnswer')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              ref={ref5}
              initial={{ opacity: 0, y: 20 }}
              animate={inView5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch"
            >
              <motion.p
                ref={ref29}
                initial={{ opacity: 0, y: 50 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('employeeWork.actionTracking')}
              </motion.p>

              <motion.div
                ref={ref30}
                initial={{ opacity: 0, y: 50 }}
                animate={inView30 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch"
              >
                <motion.div
                  ref={ref40}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView30 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                  className="relative flex flex-1 grow flex-col items-start gap-4"
                >
                  <motion.div
                    ref={ref41}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView30 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch xl:h-7"
                  >
                    <motion.div
                      ref={ref42}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView30 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 0.9,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                    >
                      <Check10
                        className="!relative !h-4 !w-4"
                        color={color ?? '#725DD6'}
                      />
                    </motion.div>

                    <p className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('employeeWork.interactionHistory')}
                    </p>
                  </motion.div>

                  <motion.div
                    ref={ref43}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView30 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch xl:h-7"
                  >
                    <motion.div
                      ref={ref44}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView30 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 1.1,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                    >
                      <Check10
                        className="!relative !h-4 !w-4"
                        color={color ?? '#725DD6'}
                      />
                    </motion.div>

                    <p className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('employeeWork.onlineChat')}
                    </p>
                  </motion.div>

                  <motion.div
                    ref={ref45}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView30 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch xl:h-7"
                  >
                    <motion.div
                      ref={ref46}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView30 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 1.3,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                    >
                      <Check10
                        className="!relative !h-4 !w-4"
                        color={color ?? '#725DD6'}
                      />
                    </motion.div>

                    <p className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('employeeWork.integration')}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
