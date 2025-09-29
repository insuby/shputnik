import { Marquee } from '@devnomic/marquee';
import { motion, useInView } from 'framer-motion';
import {
  Advantages,
  Analytics,
  EmployeeWork,
  Feedback,
  Integrations,
  Trust,
  Zaim,
} from 'widgets';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { HeroButtons } from 'shared/ui';

export const Autocredit = () => {
  const { t } = useTranslation(['autocredit']);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);

  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref6, { once: true, margin: '-100px' });
  const inView7 = useInView(ref7, { once: true, margin: '-100px' });
  const inView8 = useInView(ref8, { once: true, margin: '-100px' });
  const inView9 = useInView(ref9, { once: true, margin: '-100px' });
  const inView10 = useInView(ref10, { once: true, margin: '-100px' });

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[88px] p-0 xl:w-[1440px] xl:gap-[136px] xl:px-8 xl:pb-[136px] xl:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
        <div className="relative flex w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-7 xl:h-[620px] xl:p-12">
          <svg
            width="1643"
            height="1443"
            viewBox="0 0 1643 1443"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-16 left-[430px] h-[842px] w-full xl:w-[954px]"
            aria-hidden={true}
          >
            <g opacity="0.3" filter="url(#filter0_f_9245_977)">
              <path
                d="M761.851 555.197C780.637 424.39 944.138 379.12 1023.54 372.836C1478.6 455.11 1204.88 944.896 983.821 1039.27C762.765 1133.65 349.219 997.349 373.892 825.552C398.565 653.755 738.368 718.706 761.851 555.197Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_9245_977"
                x="0.000580047"
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
                  result="effect1_foregroundBlur_9245_977"
                />
              </filter>
            </defs>
          </svg>

          <HeroButtons>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 xl:w-[624px]  xl:gap-12">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 xl:inline-flex">
                <motion.h1
                  ref={ref2}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                  className="relative mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[44px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica] xl:w-[624px] xl:text-left xl:text-6xl xl:leading-[68px]"
                >
                  {t('hero.title')}
                </motion.h1>

                <motion.p
                  ref={ref3}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                  className="relative w-full text-center text-xl font-normal leading-7 tracking-normal text-[#ffffffcc] [font-family:'Roboto',Helvetica] xl:w-[624px] xl:text-left"
                >
                  {t('hero.description')}
                </motion.p>
              </div>
            </div>
          </HeroButtons>

          <motion.div
            ref={ref5}
            initial={{ opacity: 0, x: 50 }}
            animate={inView5 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            className="absolute left-[704px] top-[154px] hidden items-center overflow-hidden rounded-[23.92px_23.92px_0px_0px] bg-[#f6f8fd] xl:inline-flex"
          >
            <div className="relative mt-2 flex w-full flex-col items-start gap-[23.92px] bg-[#ffffff] p-[29.9px] xl:w-[393.9px]">
              <div className="relative self-stretch text-[23.9px] font-medium leading-[29.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                {t('calculator.title')}
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-center gap-[11.96px] self-stretch rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                  <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    {t('calculator.dealer')}
                  </div>

                  <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('calculator.dealerName')}
                  </div>
                </div>

                <div className="relative size-[17.94px] rotate-90">
                  <img
                    className="absolute left-[-758px] top-[13748px] size-[18px] -rotate-90"
                    alt="Vector"
                  />

                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-[3px] top-[5px] h-[7px] w-full -rotate-90 xl:w-[13px]"
                  >
                    <path
                      d="M12.8898 1.1106L7.00017 7.00028L1.1105 1.1106"
                      stroke="#9FA7BC"
                      strokeWidth="1.49488"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[11.96px]">
                <div className="relative inline-flex flex-[0_0_auto] items-start gap-[8.97px]">
                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[7.47px] rounded-[74.74px] bg-gray-90 px-[14.95px] py-[7.47px]">
                    <div className="relative mt-[-0.75px] w-fit whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                      {t('form.new')}
                    </div>
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[7.47px] rounded-[74.74px] bg-[#f7f9ff] px-[14.95px] py-[7.47px]">
                    <div className="relative mt-[-0.75px] w-fit whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('form.used')}
                    </div>
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] items-start gap-[8.97px]">
                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[7.47px] rounded-[74.74px] bg-[#f7f9ff] px-[14.95px] py-[7.47px]">
                    <div className="relative mt-[-0.75px] w-fit whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('form.withCollateral')}
                    </div>
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[7.47px] rounded-[74.74px] bg-gray-90 px-[14.95px] py-[7.47px]">
                    <div className="relative mt-[-0.75px] w-fit whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                      {t('form.withoutCollateral')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-start gap-[14.95px] self-stretch">
                <div className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                  <div className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                    <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('form.brand')}
                    </div>

                    <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Audi
                    </div>
                  </div>

                  <div className="relative size-[17.94px] rotate-90">
                    <img
                      className="absolute left-[-951px] top-[13574px] size-[18px] -rotate-90"
                      alt="Vector"
                    />

                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-[3px] top-[5px] h-[7px] w-full -rotate-90 xl:w-[13px]"
                    >
                      <path
                        d="M12.8898 1.1106L7.00017 7.00028L1.1105 1.1106"
                        stroke="#9FA7BC"
                        strokeWidth="1.49488"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                  <div className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                    <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('form.model')}
                    </div>

                    <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      A7 Sportback
                    </div>
                  </div>

                  <div className="relative size-[17.94px] rotate-90">
                    <img
                      className="absolute left-[-951px] top-[13748px] size-[18px] -rotate-90"
                      alt="Vector"
                    />

                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-[3px] top-[5px] h-[7px] w-full -rotate-90 xl:w-[13px]"
                    >
                      <path
                        d="M12.8898 1.1106L7.00017 7.00028L1.1105 1.1106"
                        stroke="#9FA7BC"
                        strokeWidth="1.49488"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-start gap-[14.95px] self-stretch">
                <div className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                  <div className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                    <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('form.year')}
                    </div>

                    <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      2004
                    </div>
                  </div>

                  <div className="relative size-[17.94px] rotate-90">
                    <img
                      className="absolute left-[-1036px] top-[13574px] size-[18px] -rotate-90"
                      alt="Vector"
                    />

                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-[3px] top-[5px] h-[7px] w-full -rotate-90 xl:w-[13px]"
                    >
                      <path
                        d="M12.8898 1.1106L7.00017 7.00028L1.1105 1.1106"
                        stroke="#9FA7BC"
                        strokeWidth="1.49488"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                  <div className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                    <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('form.firstPayment')}
                    </div>

                    <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      150 000
                    </div>
                  </div>

                  <div className="relative size-[17.94px] rotate-90">
                    <img
                      className="absolute left-[-1036px] top-[13748px] size-[18px] -rotate-90"
                      alt="Vector"
                    />

                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-[3px] top-[5px] h-[7px] w-full -rotate-90 xl:w-[13px]"
                    >
                      <path
                        d="M12.8898 1.1106L7.00017 7.00028L1.1105 1.1106"
                        stroke="#9FA7BC"
                        strokeWidth="1.49488"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-start gap-[14.95px] self-stretch">
                <div className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                  <div className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                    <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('form.term')}
                    </div>

                    <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      24
                    </div>
                  </div>

                  <div className="relative size-[17.94px] rotate-90">
                    <div className="relative left-[-1121px] top-[13574px] size-[18px]">
                      <img
                        className="absolute left-0 top-0 size-[18px] -rotate-90"
                        alt="Vector"
                      />

                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-[3px] top-2.5 h-[11px] w-1.5 -rotate-90"
                      >
                        <path
                          d="M12.8898 1.1106L7.00017 7.00028L1.1105 1.1106"
                          stroke="#9FA7BC"
                          strokeWidth="1.49488"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px] opacity-0">
                  <div className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                    <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('form.firstPayment')}
                    </div>

                    <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      150 000
                    </div>
                  </div>

                  <div className="relative size-[17.94px] rotate-90">
                    <div className="relative left-[-1121px] top-[13748px] size-[18px]">
                      <img
                        className="absolute left-0 top-0 size-[18px] -rotate-90"
                        alt="Vector"
                      />

                      <img
                        className="absolute left-[3px] top-2.5 h-[11px] w-1.5 -rotate-90"
                        alt="Vector"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-col items-start gap-[23.92px] self-stretch p-[29.9px] xl:w-[393.9px]">
              <div className="relative self-stretch text-[23.9px] font-medium leading-[29.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                {t('form.selectConditions')}
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[20.5px]">
                <div className="relative mx-[-1.49px] mt-[-1.49px] flex w-full flex-[0_0_auto] items-start justify-end gap-[11.96px] rounded-[11.96px] border-[1.49px] border-solid border-[#3573fc] bg-[#ffffff] p-[17.94px] xl:w-[337.09px]">
                  <div className="relative flex w-full flex-1 grow flex-col items-center justify-center gap-[11.96px] self-stretch xl:w-auto">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[7.47px] self-stretch">
                      <div className="relative mt-[-0.75px] flex-1 text-[14.9px] font-medium leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('form.yourConditions')}
                      </div>

                      <div className="relative ml-[-13855.74px] mt-[-753.75px] size-[20.93px] bg-[100%_100%]">
                        <svg
                          width="18"
                          height="13"
                          viewBox="0 0 18 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-2.5w-full absolute left-[-14133px] top-[-754px] xl:w-[15px]"
                        >
                          <path
                            d="M1.10861 7.28462L5.91182 12.0878L16.8906 1.10905"
                            stroke="#3573FC"
                            strokeWidth="1.49488"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-[17.94px] self-stretch">
                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('form.monthlyPayment')}
                        </div>

                        <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          187, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex w-full flex-col items-start gap-[1.49px] xl:w-[91.19px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('form.amount')}
                        </div>

                        <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          2, 560, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex w-full flex-col items-start gap-[1.49px] xl:w-[59.8px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('form.rate')}
                        </div>

                        <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          3,5%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full flex-[0_0_auto] items-start justify-end gap-[11.96px] rounded-[11.96px] bg-[#ffffff] p-[17.94px] xl:w-[334.11px]">
                  <div className="relative flex w-full flex-1 grow flex-col items-center justify-center gap-[11.96px] xl:w-auto">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[7.47px] self-stretch">
                      <div className="relative mt-[-0.75px] flex-1 text-[14.9px] font-medium leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('form.increasedFirstPayment')}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-[17.94px] self-stretch">
                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('form.monthlyPayment')}
                        </div>

                        <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          166, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex w-full flex-col items-start gap-[1.49px] xl:w-[91.19px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('form.amount')}
                        </div>

                        <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          2, 450, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex w-full flex-col items-start gap-[1.49px] xl:w-[59.8px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('form.rate')}
                        </div>

                        <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-[#00b235] [font-family:'Roboto',Helvetica]">
                          3,2%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full flex-[0_0_auto] items-start justify-end gap-[11.96px] rounded-[11.96px] bg-[#ffffff] p-[17.94px] xl:w-[334.11px]">
                  <div className="relative flex w-full flex-1 grow flex-col items-center justify-center gap-[11.96px] xl:w-auto">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[7.47px] self-stretch">
                      <div className="relative mt-[-0.75px] flex-1 text-[14.9px] font-medium leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('form.increasedTerm')}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-[17.94px] self-stretch">
                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('form.monthlyPayment')}
                        </div>

                        <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          96, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex w-full flex-col items-start gap-[1.49px] xl:w-[91.19px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('form.amount')}
                        </div>

                        <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          2, 640, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex w-full flex-col items-start gap-[1.49px] xl:w-[59.8px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('form.rate')}
                        </div>

                        <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          3,6%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <svg
            width="847"
            height="880"
            viewBox="0 0 847 880"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[1053px] top-44 h-[568px] w-full xl:w-[619px]"
            aria-hidden={true}
          >
            <g opacity="0.12" filter="url(#filter0_f_9245_2387)">
              <path
                d="M507.31 503.032C531.657 577.593 456.513 644.621 415.897 668.816C152.064 744.51 169.163 411.923 262.05 303.644C354.938 195.364 610.856 159.328 642.832 257.254C674.808 355.18 476.877 409.83 507.31 503.032Z"
                fill="#9FA7BC"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_9245_2387"
                x="0"
                y="0"
                width="846.432"
                height="880"
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
                  result="effect1_foregroundBlur_9245_2387"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <Advantages />

      <motion.div
        ref={ref6}
        initial={{ opacity: 0, y: 50 }}
        animate={inView6 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch xl:gap-12"
      >
        <motion.div
          ref={ref7}
          initial={{ opacity: 0, y: 50 }}
          animate={inView7 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-4 self-stretch"
        >
          <motion.p
            ref={ref8}
            initial={{ opacity: 0, y: 50 }}
            animate={inView8 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:text-5xl xl:leading-[60px]"
          >
            {t('management.title')}
          </motion.p>

          <motion.p
            ref={ref9}
            initial={{ opacity: 0, y: 50 }}
            animate={inView9 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="relative w-full text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica] xl:w-[704px]"
          >
            {t('management.description')}
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref10}
          initial={{ opacity: 0, y: 50 }}
          animate={inView10 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-6 rounded-3xl xl:w-[1376px] xl:!flex-row"
        >
          <Marquee
            fade
            className="relative flex w-full flex-1 grow  !gap-4 self-stretch rounded-[32px] bg-[#f9fafd] p-7 xl:h-[609px] xl:p-0"
            innerClassName="!gap-[1rem] !w-[750px]"
          >
            <div className="left-0 top-44 flex w-60 flex-col items-center justify-center gap-5 rounded-[32px] bg-[#ffffff] px-4 py-6 xl:absolute">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-6 self-stretch">
                <img
                  className="relative h-[120px] w-full self-stretch"
                  alt="Screenshot"
                  src="/img/screenshot-11.png"
                />

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch p-2">
                  <p className="relative mt-[-1.00px] self-stretch text-xl font-medium leading-[26px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    {t('examples.bmw7')}
                  </p>

                  <div className="relative self-stretch text-base font-semibold leading-6 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    8 876 000 ₽
                  </div>
                </div>
              </div>
            </div>

            <div className="top-44 flex w-60 flex-col items-center justify-center gap-5 rounded-[32px] bg-[#ffffff] px-4 py-6 xl:absolute">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-6 self-stretch">
                <img
                  className="relative h-[120px] w-full self-stretch"
                  alt="Screenshot"
                  src="/img/screenshot-13.png"
                />

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch p-2">
                  <div className="relative mt-[-1.00px] self-stretch text-xl font-medium leading-[26px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    {t('examples.bmwM4')}
                  </div>

                  <div className="relative self-stretch text-base font-semibold leading-6 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    12 324 000 ₽
                  </div>
                </div>
              </div>
            </div>

            <div className="right-0 top-44 flex w-60 flex-col items-center justify-center gap-5 rounded-[32px] bg-[#ffffff]  px-4 py-6 xl:absolute">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-6 self-stretch">
                <img
                  className="relative h-[120px] w-full self-stretch"
                  alt="Screenshot"
                  src="/img/screenshot-12.png"
                />

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch p-2">
                  <div className="relative mt-[-1.00px] self-stretch text-xl font-medium leading-[26px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    BMW 218i Gran Coupe
                  </div>

                  <div className="relative self-stretch text-base font-semibold leading-6 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    9 453 000 ₽
                  </div>
                </div>
              </div>
            </div>
          </Marquee>

          <div className="flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 xl:relative xl:py-12 xl:pl-12 xl:pr-[68px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView10 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 self-stretch"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('verification.title')}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
              >
                {t('verification.description')}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView10 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 self-stretch"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.9 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('control.title')}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 1.0 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
              >
                {t('control.description')}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView10 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 1.1 }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 self-stretch"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 1.2 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('management2.title')}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 1.3 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
              >
                {t('management2.description')}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <Feedback />
      <Analytics />
      <Zaim />

      <Integrations />
      <EmployeeWork />
      <Trust />
    </div>
  );
};
