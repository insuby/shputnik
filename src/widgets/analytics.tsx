import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { useRef } from 'react';

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
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 md:gap-12 self-stretch">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mt-[-1.00px] self-stretch text-[36px] md:text-5xl font-medium leading-[44px] md:leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
      >
        {t('analytics.title')}
      </motion.div>

      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="relative flex w-full flex-col-reverse md:!flex-row flex-[0_0_auto] items-start self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd]"
      >
        <img
          className="absolute left-[450px] top-0 h-[668px] w-full md:w-[926px]"
          alt="Vector"
          src="/img/widgets/vector-2-1.svg"
        />

        <motion.div
          ref={ref3}
          initial={{ opacity: 0, x: -50 }}
          animate={inView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl pt-0 pb-8 px-8 md:p-20"
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
          <div className="relative scale-95 md:scale-100 left-[-95px] md:left-[57px] top-[-73px] md:top-[17px] h-[574px] w-full md:!size-[574px] rounded-[287px]">
            <div className="absolute left-[140px] top-[140px] size-[294px] rounded-[147px] bg-[#ffffff] blur-[6px]" />

            <div className="absolute left-[65px] top-[65px] size-[444px] rounded-[222px] border-2 border-solid border-[#ffffff] opacity-80" />

            <div className="absolute left-0 top-0 size-[574px] rounded-[287px] border-2 border-solid border-[#ffffff] opacity-40" />

            <div className="absolute left-32 top-[127px] size-[319px]">
              <div className="absolute left-[-29px] top-[-18px] h-[337px] w-[356px]">
                <div className="absolute left-0 top-[76px] h-[260px] w-[356px]">
                  <div className="absolute left-0 top-[7px] h-[253px] w-[356px]">
                    <img
                      className="absolute left-[29px] top-0 h-[253px] w-[152px]"
                      alt="Subtract"
                      src="/img/graph-big/subtract.svg"
                    />

                    <img
                      className="absolute left-[197px] top-[103px] size-[151px]"
                      alt="Subtract"
                      src="/img/graph-big/subtract-1.svg"
                    />

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

                  <img
                    className="absolute left-[295px] top-0 h-[94px] w-[53px]"
                    alt="Subtract"
                    src="/img/graph-big/subtract-2.svg"
                  />
                </div>

                <div className="absolute left-[81px] top-0 h-[78px] w-[145px]">
                  <img
                    className="absolute left-0 top-[18px] h-[60px] w-[145px]"
                    alt="Subtract"
                    src="/img/graph-big/subtract-4.svg"
                  />

                  <div className="absolute left-3.5 top-0 inline-flex items-center justify-center gap-2 rounded-[100px] border-[none] bg-[#ffffff33] px-3 py-1.5 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-[#1c222f] [font-family:'Inter',Helvetica]">
                      20%
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-0.5 left-[211px] h-[57px] w-[70px]">
                <img
                  className="absolute left-0 top-4 h-[41px] w-[51px]"
                  alt="Subtract"
                  src="/img/graph-big/subtract-3.svg"
                />

                <div className="absolute left-[22px] top-0 inline-flex items-center justify-center gap-2 rounded-[100px] border-[none] bg-[#ffffff33] px-3 py-1.5 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-[#1c222f] [font-family:'Inter',Helvetica]">
                    8%
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-[427px] top-[204px] inline-flex items-center justify-center gap-2 rounded-[100px] border-[none] bg-[#ffffff33] px-3 py-1.5 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-[#1c222f] [font-family:'Inter',Helvetica]">
                12%
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
