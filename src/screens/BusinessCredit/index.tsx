import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { isMobile } from '../../App.tsx';
import { HeroButtons } from '../../components/ui/hero-buttons.tsx';
import { Advantages } from '../../widgets/advantages.tsx';
import { Analytics } from '../../widgets/analytics.tsx';
import { EmployeeWork } from '../../widgets/employe-work.tsx';
import { Feedback } from '../../widgets/feedback.tsx';
import { Integrations } from '../../widgets/integrations.tsx';
import { RoleStructure } from '../../widgets/role-structure.tsx';
import { Trust } from '../../widgets/trust.tsx';
import { Zaim } from '../../widgets/zaim.tsx';
import { ZaimChecker } from '../../widgets/zain-checker.tsx';

export const BusinessCredit = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const { t } = useTranslation(['businesscredit']);

  const marginValue = isMobile ? '-10px' : '-100px';
  const inView1 = useInView(ref1, { once: true, margin: marginValue });
  const inView2 = useInView(ref2, { once: true, margin: marginValue });
  const inView3 = useInView(ref3, { once: true, margin: marginValue });
  const inView4 = useInView(ref4, { once: true, margin: marginValue });
  const inView5 = useInView(ref5, { once: true, margin: marginValue });
  const inView6 = useInView(ref6, { once: true, margin: marginValue });

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[88px] p-0 md:w-[1440px] md:gap-[136px] md:px-8 md:pb-[136px] md:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
        <div className="relative flex w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-violet-50 px-4 py-10 md:min-h-[600px] md:p-12">
          <svg
            className="absolute left-[441px] top-[-140px] h-[1060px] w-full md:w-[1108px]"
            width="1688"
            height="1367"
            viewBox="0 0 1688 1367"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2" filter="url(#filter0_f_9321_96338)">
              <path
                d="M847.72 462.293C913.979 347.979 1082.53 367.028 1158.53 390.843C1549.9 637.044 1113.16 989.147 872.885 994.155C632.615 999.164 299.921 718.356 386.944 568.219C473.966 418.083 764.896 605.186 847.72 462.293Z"
                fill="#FF2A9F"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_9321_96338"
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
                  result="effect1_foregroundBlur_9321_96338"
                />
              </filter>
            </defs>
          </svg>
          <HeroButtons>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 md:w-[624px]  md:gap-12">
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 md:inline-flex"
              >
                <motion.h1
                  ref={ref2}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                  className="relative mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[44px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica] md:w-[624px] md:text-left md:text-6xl md:leading-[68px]"
                >
                  {t('hero.title')}
                </motion.h1>

                <motion.p
                  ref={ref3}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                  className="relative w-full text-center text-xl font-normal leading-7 tracking-normal text-[#ffffff99] [font-family:'Roboto',Helvetica] md:w-[624px] md:text-left"
                >
                  {t('hero.desc')}
                </motion.p>
              </motion.div>
            </div>
          </HeroButtons>

          <img
            className="absolute left-[559px] top-0 h-[600px] w-full md:w-[817px]"
            alt="Vector"
            src="/img/businesscredit/vector-3.svg"
          />

          <div className="scale-60 left-[745px] top-[139px] h-[380px] w-full md:absolute md:size-[583px] md:w-auto md:scale-100">
            <div className="relative w-full md:h-[583px] md:w-[631px]">
              <motion.div
                ref={ref4}
                initial={{ opacity: 0, x: 50 }}
                animate={inView4 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                className="absolute left-3 top-0 flex w-full items-start justify-end gap-[14.04px] rounded-[32px] bg-[#ffffff] p-7 md:left-[108px] md:w-[443px]"
              >
                <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[14.04px]">
                  <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[8.78px] self-stretch">
                    <div className="relative mt-[-0.88px] flex-1 text-[17.6px] font-medium leading-[24.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('calculator.expenses')}
                    </div>
                  </div>

                  <div className="relative flex h-[187.85px] w-full items-end justify-between self-stretch">
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 md:w-[9.39px]">
                        <div className="relative h-[22.31px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[100.97px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] md:w-[18.78px]">
                        01
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 md:w-[9.39px]">
                        <div className="relative h-[18.78px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[78.66px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] md:w-[18.78px]">
                        02
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 md:w-[9.39px]">
                        <div className="relative h-[34.05px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[111.54px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] md:w-[18.78px]">
                        03
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 md:w-[9.39px]">
                        <div className="relative h-[34.05px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[56.35px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] md:w-[18.78px]">
                        04
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 md:w-[9.39px]">
                        <div className="relative h-[50.48px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[78.66px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] md:w-[18.78px]">
                        05
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 md:w-[9.39px]">
                        <div className="relative h-[34.05px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[102.14px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] md:w-[18.78px]">
                        06
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 md:w-[9.39px]">
                        <div className="relative h-[21.13px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[78.66px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] md:w-[18.78px]">
                        07
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 md:w-[9.39px]">
                        <div className="relative h-[24.66px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[109.19px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] md:w-[18.78px]">
                        08
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 md:w-[9.39px]">
                        <div className="relative h-[34.05px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[78.66px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] md:w-[18.78px]">
                        09
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <img
                className="absolute left-[45px] top-[83px] h-[50px] w-full md:w-[494px]"
                alt="Vector"
                src="/img/businesscredit/vector-5.svg"
              />

              <motion.div
                ref={ref5}
                initial={{ opacity: 0, x: -50 }}
                animate={inView5 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                className="w-[120%]] absolute left-0 top-[213px] flex items-start justify-end gap-[14.04px] rounded-[32px] bg-[#ffffff] p-7 md:w-[443px]"
              >
                <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[14.04px]">
                  <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[8.78px] self-stretch">
                    <div className="relative mt-[-0.88px] flex-1 text-[17.6px] font-medium leading-[24.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('calculator.recommendedOffer')}
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-[21.06px] self-stretch">
                    <div className="relative flex flex-1 grow flex-col items-start gap-[1.76px]">
                      <div className="relative mt-[-0.88px] self-stretch text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                        {t('calculator.rate')}
                      </div>

                      <div className="relative self-stretch whitespace-nowrap text-[17.6px] font-normal leading-[24.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        187, 000 ₽
                      </div>
                    </div>

                    <div className="relative flex flex-1 grow flex-col items-start gap-[1.76px]">
                      <div className="relative mt-[-0.88px] self-stretch text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                        {t('calculator.earnings')}
                      </div>

                      <div className="relative self-stretch whitespace-nowrap text-[17.6px] font-normal leading-[24.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        2, 560, 000 ₽
                      </div>
                    </div>

                    <div className="relative flex flex-1 grow flex-col items-start gap-[1.76px]">
                      <div className="relative mt-[-0.88px] self-stretch text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                        {t('calculator.payback')}
                      </div>

                      <div className="relative self-stretch whitespace-nowrap text-[17.6px] font-normal leading-[24.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('calculator.paybackPeriod')}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <img
                className="absolute left-[91px] top-[148px] h-[313px] w-full md:w-[540px]"
                alt="Vector"
                src="/img/businesscredit/vector-6-1.svg"
              />

              <motion.div
                ref={ref6}
                initial={{ opacity: 0, x: 50 }}
                animate={inView6 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                className="absolute left-8 top-[320px] inline-flex items-center gap-4 rounded-[32px] bg-[#ffffff] py-4 pl-4 pr-6 md:left-[272px] md:top-[307px]"
              >
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/businesscredit/frame-18.svg"
                />

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    {t('calculator.personalOffer')}
                  </div>

                  <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    1 345 000₽
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Advantages />
      <ZaimChecker />
      <Integrations />
      <Zaim />
      <Feedback />
      <Analytics />
      <EmployeeWork />
      <RoleStructure />
      <Trust />
    </div>
  );
};
