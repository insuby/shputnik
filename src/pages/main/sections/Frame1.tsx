import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const Frame1 = () => {
  const { t } = useTranslation(['home']);
  const ref37l = useRef<HTMLSpanElement>(null);
  const ref37r = useRef<HTMLSpanElement>(null);
  const ref38 = useRef<HTMLParagraphElement>(null);
  const ref39 = useRef<HTMLParagraphElement>(null);
  const ref40 = useRef<HTMLDivElement>(null);
  const ref41l = useRef<HTMLDivElement>(null);
  const ref41 = useRef<HTMLDivElement>(null);
  const ref42 = useRef<HTMLDivElement>(null);
  const ref42r = useRef<HTMLDivElement>(null);
  const ref43r = useRef<HTMLDivElement>(null);
  const ref44 = useRef<HTMLDivElement>(null);
  const ref46l = useRef<HTMLDivElement>(null);
  const ref47r = useRef<HTMLParagraphElement>(null);
  const inView37l = useInView(ref37l, { once: true, margin: '-100px' });
  const inView37r = useInView(ref37r, { once: true, margin: '-100px' });
  const inView38 = useInView(ref38, { once: true, margin: '-100px' });
  const inView39 = useInView(ref39, { once: true, margin: '-100px' });
  const inView40 = useInView(ref40, { once: true, margin: '-100px' });
  const inView41l = useInView(ref41l, { once: true, margin: '-100px' });
  const inView41 = useInView(ref41, { once: true, margin: '-100px' });
  const inView42 = useInView(ref42, { once: true, margin: '-100px' });
  const inView42r = useInView(ref42r, { once: true, margin: '-100px' });
  const inView43r = useInView(ref43r, { once: true, margin: '-100px' });
  const inView44 = useInView(ref44, { once: true, margin: '-100px' });
  const inView46l = useInView(ref46l, { once: true, margin: '-100px' });
  const inView47r = useInView(ref47r, { once: true, margin: '-100px' });
  return (
    <section
      className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch"
      aria-labelledby="other-software"
    >
      <h2
        id="other-software"
        className="relative mt-[-1.00px] w-fit whitespace-nowrap text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
      >
        <motion.span
          id="animate_37_left"
          ref={ref37l}
          initial={{ opacity: 0, x: -40 }}
          animate={inView37l ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-[#1c222f]"
        >
          {t('otherSoftware').split(' ')[0]}{' '}
        </motion.span>
        <motion.span
          id="animate_37_right"
          ref={ref37r}
          initial={{ opacity: 0, x: 40 }}
          animate={inView37r ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-[#9ea7bb]"
        >
          {t('otherSoftware').split(' ').slice(1).join(' ')}
        </motion.span>
      </h2>

      <div className="relative flex h-[600px] w-full items-start gap-5 self-stretch">
        <div className="relative flex flex-1 grow items-center gap-5 self-stretch">
          <div className="group relative flex flex-1 grow cursor-pointer flex-col items-start justify-center self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-transparent bg-[#f9fafd] hover:border-[#3573fc] hover:bg-[#f5f7ff]">
            <div className="relative w-full flex-1 grow self-stretch overflow-hidden rounded-[32px] bg-[url(/img/vector-1-3.svg)] bg-[100%_100%]">
              <div className="relative left-[59px] top-[-49px] h-[372px] w-full md:w-[560px]">
                <svg
                  className="absolute left-[91px] top-0 h-[372px] w-full md:w-[415px]"
                  width="1078"
                  height="1072"
                  viewBox="0 0 1078 1072"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Vector"
                >
                  <g opacity="0.4" filter="url(#filter0_f_9062_7)">
                    <path d="M589.852 586.159C601.21 640.449 543.216 681.763 512.799 695.634C321.503 728.473 359.197 496.013 432.848 427.072C506.499 358.132 689.17 352.558 704.086 423.86C719.003 495.162 575.655 518.297 589.852 586.159Z" fill="#725DD6" />
                  </g>
                  <defs>
                    <filter id="filter0_f_9062_7" x="0" y="0" width="1078" height="1071.62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="186.349" result="effect1_foregroundBlur_9062_7" />
                    </filter>
                  </defs>
                </svg>

                <motion.div
                  id="animate_40"
                  ref={ref40}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView40 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute left-[177px] top-[100px] inline-flex flex-col items-start gap-2.5 rounded-[32px] bg-[#ffffff5c] p-2"
                >
                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2.5 self-stretch rounded-3xl bg-[#ffffff] p-6">
                    <div className="h-7w-full relative md:w-[142.55px]">
                      <div className="h-7w-full md:w-[143px]">
                        <div className="h-[29px] w-full md:w-[142px]">
                          <div className="h-[29px]">
                            <div className="relative h-[29px] w-full md:w-[142px]">
                              <img
                                className="absolute left-0 top-0 h-[29px] w-6"
                                alt="Group"
                                src="/img/group-3-1.png"
                              />

                              <img
                                className="absolute left-[30px] top-0.5 h-[25px] w-full md:w-[23px]"
                                alt="Fill"
                                src="/img/fill-4.svg"
                              />

                              <img
                                className="absolute left-[60px] top-0.5 h-[25px] w-full md:w-[22px]"
                                alt="Fill"
                                src="/img/fill-8.svg"
                              />

                              <img
                                className="absolute left-[88px] top-0.5 h-[25px] w-full md:w-[23px]"
                                alt="Fill"
                                src="/img/fill-10.svg"
                              />

                              <img
                                className="absolute left-[117px] top-0.5 h-[25px] w-6"
                                alt="Fill"
                                src="/img/fill-14.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute left-0 top-[262px] h-[104px] w-full md:w-[560px]">
                  <motion.div
                    id="animate_41_left"
                    ref={ref41l}
                    initial={{ opacity: 0, x: -40 }}
                    animate={inView41l ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="absolute left-0 top-0 inline-flex flex-col items-start gap-2.5 rounded-3xl bg-[#ffffff] p-6"
                  >
                    <img
                      className="relative mx-[-0.67px] mb-[-0.67px] mt-[-1.32px] h-[58px] w-full md:w-[57.34px]"
                      alt="Group"
                      src="/img/Group%2032.svg"
                    />
                  </motion.div>

                  <motion.div
                    id="animate_41"
                    ref={ref41}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView41 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="absolute left-[152px] top-0 inline-flex flex-col items-start gap-2.5 rounded-3xl bg-[#ffffff] p-6"
                  >
                    <img
                      className="relative size-14"
                      alt="Clip path group"
                      src="/img/OKB_logo%201.svg"
                    />
                  </motion.div>

                  <motion.div
                    id="animate_42"
                    ref={ref42}
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView42 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="absolute left-[456px] top-0 inline-flex flex-col items-start gap-2.5 rounded-3xl bg-[#ffffff] p-6"
                  >
                    <img
                      className="relative size-14"
                      alt="Clip path group"
                      src="/img/Clip%20path%20group.svg"
                    />
                  </motion.div>

                  <motion.div
                    id="animate_42_right"
                    ref={ref42r}
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView42r ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="absolute left-[304px] top-0 inline-flex flex-col items-start gap-2.5 rounded-3xl bg-[#ffffff] p-6"
                  >
                    <img
                      className="relative size-14"
                      alt="Okb logo"
                      src="/img/nbki-logo%201.svg"
                    />
                  </motion.div>
                </div>

                <img
                  className="absolute left-[279px] top-[184px] h-10 w-0.5"
                  alt="Vector"
                  src="/img/vector-148.svg"
                />

                <img
                  className="absolute left-[49px] top-[223px] h-[39px] w-full md:w-[458px]"
                  alt="Vector"
                  src="/img/vector-149.svg"
                />

                <img
                  className="absolute left-[204px] top-[223px] h-[39px] w-full md:w-[149px]"
                  alt="Vector"
                  src="/img/vector-150.svg"
                />
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] items-end gap-7 self-stretch p-8 md:p-10">
              <div className="relative flex flex-1 grow flex-col items-start gap-2">
                <motion.h4
                  id="animate_38"
                  ref={ref38}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView38 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('dataUnload.title')}
                </motion.h4>

                <motion.p
                  id="animate_39"
                  ref={ref39}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView39 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('dataUnload.desc')}
                </motion.p>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-white p-4">
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
            </div>
          </div>
          <div className="relative flex flex-1 grow cursor-pointer flex-col items-start justify-center self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-transparent bg-[#f9fafd]  hover:border-[#3573fc] hover:bg-[#f5f7ff]">
            <div className="relative w-full flex-1 grow self-stretch overflow-hidden rounded-[32px]">
              <div className="relative h-[446px] w-full">
                <motion.div
                  id="animate_44"
                  ref={ref44}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView44 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute left-[49px] top-[84px] flex flex-col items-start justify-center gap-1 rounded-[32px] bg-white p-3"
                >
                  <div className="relative inline-flex flex-[0_0_auto] items-end justify-end gap-1 p-4">
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                      <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[180px]">
                        {t('decisionsModule.ui.id')}
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-3">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          {t('decisionsModule.ui.name')}
                        </div>

                        <div className="relative flex size-6 items-center justify-center gap-2.5 rounded-[20px] bg-green-60 p-2">
                          <img
                            className="relative m-[-4.00px] size-4"
                            alt="Check"
                            src="/img/check-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-3 self-stretch">
                    <div className="relative flex flex-1 grow items-center gap-[53px] rounded-2xl bg-blue-50 p-4">
                      <div className="relative flex flex-1 grow flex-col items-start gap-0.5">
                        <div className="relative mt-[-1.00px] self-stretch text-sm font-normal leading-5 tracking-normal text-white opacity-50 [font-family:'Roboto',Helvetica]">
                          {t('decisionsModule.ui.score')}
                        </div>

                        <div className="relative self-stretch text-[28px] font-medium leading-10 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                          {t('decisionsModule.ui.scoreValue')}
                        </div>
                      </div>
                    </div>

                    <img
                      className="relative flex-1 grow self-stretch"
                      alt="Frame"
                      src="/img/frame-31.svg"
                    />
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch p-4">
                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-4 self-stretch">
                      <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.gender')}
                      </div>

                      <div className="relative mt-[-1.00px] w-20 text-sm font-normal leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.genderValue')}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-4 self-stretch">
                      <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.birthDate')}
                      </div>

                      <div className="relative mt-[-1.00px] w-20 text-sm font-normal leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.birthDateValue')}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-4 self-stretch">
                      <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.maritalStatus')}
                      </div>

                      <div className="relative mt-[-1.00px] w-20 text-sm font-normal leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.maritalStatusValue')}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-4 self-stretch">
                      <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.salary')}
                      </div>

                      <div className="relative mt-[-1.00px] w-20 text-sm font-normal leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.salaryValue')}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <img
                  className="absolute left-0 top-0 h-[368px] w-full md:w-[678px]"
                  alt="Vector"
                  src="/img/vector-1-4.svg"
                />

                <motion.div
                  id="animate_43_right"
                  ref={ref43r}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView43r ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute left-[312px] top-[38px] flex w-80 flex-col items-start justify-center gap-3 rounded-[32px] bg-white p-6"
                >
                  <div className="relative flex w-full flex-[0_0_auto] items-center gap-6 self-stretch rounded-3xl">
                    <div className="relative h-[148px] w-full overflow-hidden rounded-[20px] bg-green-60 md:w-[68px]">
                      <div className="absolute left-3.5 top-[57px] whitespace-nowrap text-2xl font-medium leading-8 tracking-normal text-white [font-family:'Roboto',Helvetica]">
                        900
                      </div>
                    </div>

                    <div className="relative flex flex-1 grow flex-col items-start gap-2">
                      <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.approval')}
                      </div>

                      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                        <div className="relative mt-[-1.00px] self-stretch text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('decisionsModule.ui.approvalReturned')}
                        </div>

                        <div className="relative self-stretch text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('decisionsModule.ui.approvalNotReturned')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-center gap-6 self-stretch rounded-3xl">
                    <div className="relative w-full self-stretch overflow-hidden rounded-[20px] bg-red-50 md:w-[68px]">
                      <div className="absolute left-[13px] top-[29px] whitespace-nowrap text-2xl font-medium leading-8 tracking-normal text-white [font-family:'Roboto',Helvetica]">
                        100
                      </div>
                    </div>

                    <div className="relative flex flex-1 grow flex-col items-start gap-2">
                      <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.rejection')}
                      </div>

                      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                        <div className="relative mt-[-1.00px] self-stretch text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('decisionsModule.ui.rejectionDefault')}
                        </div>

                        <div className="relative self-stretch text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('decisionsModule.ui.rejectionPositive')}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="group relative flex w-full flex-[0_0_auto] items-end gap-7 self-stretch p-8 md:p-10">
              <div className="relative flex flex-1 grow flex-col items-start gap-2">
                <motion.h4
                  id="animate_46_left"
                  ref={ref46l}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView46l ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('decisionsModule.title')}
                </motion.h4>

                <motion.p
                  id="animate_47_right"
                  ref={ref47r}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView47r ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('decisionsModule.desc')}
                </motion.p>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-white p-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
