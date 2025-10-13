import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const Analytics = () => {
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

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 self-stretch lg:gap-12">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mt-[-1.00px] self-stretch text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-5xl lg:leading-[60px]"
      >
        {t('analytics.title')}
      </motion.div>

      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="relative flex w-full flex-[0_0_auto] flex-col-reverse items-start self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] lg:!flex-row"
      >
        <svg
          width="1071"
          height="1128"
          viewBox="0 0 1071 1128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[450px] top-0 h-[668px] w-full lg:w-[926px]"

        >
          <g opacity="0.16" filter="url(#filter0_f_9163_2232)">
            <path
              d="M449.585 626.233C366.332 632.956 315.553 538.514 300.57 490.453C287.61 198.456 627.796 298.643 716.894 421.69C805.992 544.736 779.845 818.701 670.504 827.53C561.162 836.36 553.652 617.83 449.585 626.233Z"
              fill="#725DD6"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_9163_2232"
              x="0"
              y="0"
              width="1070.79"
              height="1128"
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
                stdDeviation="150"
                result="effect1_foregroundBlur_9163_2232"
              />
            </filter>
          </defs>
        </svg>

        <motion.div
          ref={ref3}
          initial={{ opacity: 0, x: -50 }}
          animate={inView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl p-8 lg:!p-20"
        >
          <motion.div
            ref={ref6}
            initial={{ opacity: 0, y: 50 }}
            animate={inView6 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch"
          >
            <motion.div
              ref={ref7}
              initial={{ opacity: 0, y: 50 }}
              animate={inView7 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
            >
              {t('analytics.reports.title')}
            </motion.div>

            <motion.p
              ref={ref8}
              initial={{ opacity: 0, y: 50 }}
              animate={inView8 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
              className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
            >
              {t('analytics.reports.description')}
            </motion.p>
          </motion.div>

          <motion.div
            ref={ref9}
            initial={{ opacity: 0, y: 50 }}
            animate={inView9 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
            className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch"
          >
            <motion.div
              ref={ref10}
              initial={{ opacity: 0, y: 50 }}
              animate={inView10 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
              className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
            >
              {t('analytics.analyticalServices.title')}
            </motion.div>

            <motion.p
              ref={ref11}
              initial={{ opacity: 0, y: 50 }}
              animate={inView11 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
              className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
            >
              {t('analytics.analyticalServices.description')}
            </motion.p>
          </motion.div>

          <motion.div
            ref={ref12}
            initial={{ opacity: 0, y: 50 }}
            animate={inView12 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
            className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch"
          >
            <motion.div
              ref={ref13}
              initial={{ opacity: 0, y: 50 }}
              animate={inView13 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
              className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
            >
              {t('analytics.integration1c.title')}
            </motion.div>

            <motion.p
              ref={ref14}
              initial={{ opacity: 0, y: 50 }}
              animate={inView14 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
              className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
            >
              {t('analytics.integration1c.description')}
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          ref={ref4}
          initial={{ opacity: 0, x: 50 }}
          animate={inView4 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="relative flex-1 grow self-stretch overflow-hidden rounded-3xl"
        >
          <div className="relative h-[574px] w-full scale-95 rounded-[287px] lg:left-[57px] lg:top-[17px] lg:!size-[574px] lg:scale-100">
            <div className="absolute left-32 top-[127px] size-[319px]">
              <div className="absolute left-[-29px] top-[-18px] h-[337px] w-[356px]">
                <div className="absolute left-0 top-[76px] h-[260px] w-[356px]">
                  <div className="absolute left-0 top-[7px] h-[253px] w-[356px]">
                    <svg
                      width="152"
                      height="254"
                      viewBox="0 0 152 254"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-[29px] top-0 h-[253px] w-[152px]"
                    >
                      <path
                        d="M0 94.6916C0 61.4144 10.159 30.5099 27.5448 4.91039C31.5149 -0.935399 39.6922 -1.59216 44.9727 3.10376C49.9157 7.49956 50.4675 14.9768 46.7605 20.4554C32.3813 41.7066 24 67.2347 24 94.6916C24 161.914 74.2376 217.575 139.738 227.215C146.582 228.222 152 233.871 152 240.788C152 248.247 145.738 254.239 138.347 253.239C60.2225 242.669 0 175.713 0 94.6916Z"
                        fill="#FBAB00"
                      />
                    </svg>

                    <svg
                      width="151"
                      height="151"
                      viewBox="0 0 151 151"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-[197px] top-[103px] size-[151px]"
                    >
                      <path
                        d="M0 138.303C-4.37857e-06 145.773 6.26982 151.774 13.6722 150.773C85.1633 141.101 141.686 84.2824 150.908 12.6495C151.79 5.7986 146.244 0 139.337 0C132.943 0 127.715 4.99903 126.788 11.3256C118.231 69.7474 71.4792 115.998 12.278 124.71C5.42407 125.718 4.06083e-06 131.375 0 138.303Z"
                        fill="#725DD6"
                      />
                    </svg>

                    <div className="absolute left-[87px] top-[55px] inline-flex flex-col items-center gap-0.5">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                        {t('analytics.balance')}
                      </div>

                      <div className="relative w-fit whitespace-nowrap text-[40px] font-normal leading-[52px] tracking-normal text-[#1c222f] [font-family:'Poppins',Helvetica]">
                        4,385.40 ₽
                      </div>
                    </div>

                    <div className="absolute left-[298px] top-[188px] inline-flex items-center justify-center gap-2 rounded-[100px] border-[none] bg-[#ffffff33] px-3 py-1.5 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-[#1c222f] [font-family:'Inter',Helvetica]">
                        24%
                      </div>
                    </div>

                    <div className="absolute left-0 top-40 inline-flex items-center justify-center gap-2 rounded-[100px] border-[none] bg-[#ffffff33] px-3 py-1.5 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-[#1c222f] [font-family:'Inter',Helvetica]">
                        36%
                      </div>
                    </div>
                  </div>

                  <svg
                    width="54"
                    height="94"
                    viewBox="0 0 54 94"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-[295px] top-0 h-[94px] w-[53px]"
                  >
                    <path
                      d="M28.9318 82.6617C29.8596 88.9978 35.0949 94 41.4985 94C48.4163 94 53.9708 88.1992 53.0878 81.3381C49.3932 52.6285 38.1119 26.2948 21.3193 4.41219C16.9839 -1.23726 8.71824 -1.41731 3.68279 3.61814C-1.02951 8.33043 -1.14418 15.883 2.90633 21.175C16.3961 38.7993 25.584 59.8 28.9318 82.6617Z"
                      fill="#00CB82"
                    />
                  </svg>
                </div>

                <div className="absolute left-[81px] top-0 h-[78px] w-[145px]">
                  <svg
                    width="146"
                    height="60"
                    viewBox="0 0 146 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-[18px] h-[60px] w-[145px]"
                  >
                    <path
                      d="M144.753 18.2371C146.994 11.0992 142.802 3.48745 135.425 2.24234C126.688 0.767734 117.711 0 108.555 0C68.5936 0 32.0478 14.6232 3.97678 38.8105C-1.51509 43.5425 -1.20713 51.9545 4.20999 56.7719C9.16902 61.1819 16.6527 60.9671 21.7981 56.7759C45.3628 37.5809 75.5918 26.0473 108.555 26.0473C115.538 26.0473 122.398 26.5648 129.098 27.5632C135.902 28.5771 142.692 24.801 144.753 18.2371Z"
                      fill="#3573FC"
                    />
                  </svg>

                  <div className="absolute left-3.5 top-0 inline-flex items-center justify-center gap-2 rounded-[100px] border-[none] bg-[#ffffff33] px-3 py-1.5 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-[#1c222f] [font-family:'Inter',Helvetica]">
                      20%
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-0.5 left-[211px] h-[57px] w-[70px]">
                <svg
                  width="51"
                  height="41"
                  viewBox="0 0 51 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 top-4 h-[41px] w-[51px]"
                >
                  <path
                    d="M0.596022 8.8467C-1.47122 15.4312 2.02133 22.4221 8.25319 25.3875C15.7704 28.9645 22.9048 33.1995 29.5793 38.0165C35.0067 41.9335 42.5549 41.7102 47.2878 36.9773C52.4549 31.8102 52.2707 23.3272 46.4649 18.8896C37.4258 11.9806 27.6327 6.00817 17.2305 1.11719C10.5266 -2.03491 2.815 1.77884 0.596022 8.8467Z"
                    fill="#FF8068"
                  />
                </svg>

                <div className="absolute left-[22px] top-0 inline-flex items-center justify-center gap-2 rounded-[100px] border-[none] bg-[#ffffff33] px-3 py-1.5 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-[#1c222f] [font-family:'Inter',Helvetica]">
                    8%
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              ref={ref5}
              initial={{ opacity: 0, y: 20 }}
              animate={inView5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              className="absolute left-[143px] top-[497px] flex w-72 items-start rounded-[100px] bg-[#ffffff] p-1"
            >
              <div className="relative flex flex-1 grow items-center justify-center gap-2 rounded-[100px] bg-[#1c222f] px-3 py-2">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap font-body-2-r text-[length:var(--body-2-r-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-[#ffffff] [font-style:var(--body-2-r-font-style)]">
                  {t('analytics.periods.week')}
                </div>
              </div>

              <div className="relative flex flex-1 grow items-center justify-center gap-2 rounded-[100px] px-3 py-2">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap font-body-2-r text-[length:var(--body-2-r-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-[#9ea7bb] [font-style:var(--body-2-r-font-style)]">
                  {t('analytics.periods.month')}
                </div>
              </div>

              <div className="relative flex flex-1 grow items-center justify-center gap-2 rounded-[100px] px-3 py-2">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap font-body-2-r text-[length:var(--body-2-r-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-[#9ea7bb] [font-style:var(--body-2-r-font-style)]">
                  {t('analytics.periods.year')}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
