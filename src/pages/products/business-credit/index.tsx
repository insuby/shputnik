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

import { useIsMobile } from 'shared/lib/use-is-mobile';
import { HeroButtons } from 'shared/ui';

export const BusinessCredit = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const { t } = useTranslation(['businesscredit']);
  const isMobile = useIsMobile();

  const marginValue = isMobile ? '-10px' : '-100px';
  const inView1 = useInView(ref1, { once: true, margin: marginValue });
  const inView2 = useInView(ref2, { once: true, margin: marginValue });
  const inView3 = useInView(ref3, { once: true, margin: marginValue });
  const inView4 = useInView(ref4, { once: true, margin: marginValue });
  const inView5 = useInView(ref5, { once: true, margin: marginValue });
  const inView6 = useInView(ref6, { once: true, margin: marginValue });

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[88px] p-0 xl:w-full xl:gap-[136px] xl:px-8 xl:pb-[136px] xl:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
        <div className="relative flex w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-violet-50 px-4 py-10 xl:min-h-[600px] xl:p-12">
          <svg
            className="absolute left-[441px] top-[-140px] h-[1060px] w-full xl:w-[1108px]"
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
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 xl:w-[624px]  xl:gap-12">
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 xl:inline-flex"
              >
                <motion.h1
                  ref={ref2}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                  className="relative mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[44px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica] xl:w-[624px] xl:text-left xl:text-6xl xl:leading-[68px]"
                >
                  {t('hero.title')}
                </motion.h1>

                <motion.p
                  ref={ref3}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                  className="relative w-full text-center text-xl font-normal leading-7 tracking-normal text-[#ffffff99] [font-family:'Roboto',Helvetica] xl:w-[624px] xl:text-left"
                >
                  {t('hero.desc')}
                </motion.p>
              </motion.div>
            </div>
          </HeroButtons>

          <svg
            width="1011"
            height="1099"
            viewBox="0 0 1011 1099"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[559px] top-0 h-[600px] w-full xl:w-[817px]"
            alt="Vector"
          >
            <g opacity="0.24" filter="url(#filter0_f_9321_96391)">
              <path
                d="M573.958 568.375C624.166 557.895 637.698 493.455 638.188 462.544C595.176 288.29 412.16 406.311 381.017 494.248C349.874 582.186 412.794 739.035 478.736 725.271C544.678 711.508 511.198 581.475 573.958 568.375Z"
                fill="#9FA7BC"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_9321_96391"
                x="-0.00137371"
                y="0"
                width="1011"
                height="1098.93"
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
                  result="effect1_foregroundBlur_9321_96391"
                />
              </filter>
            </defs>
          </svg>

          <div className="scale-60 left-[745px] top-[139px] h-[380px] w-full xl:absolute xl:size-[583px] xl:w-auto xl:scale-100">
            <div className="relative w-full xl:h-[583px] xl:w-[631px]">
              <motion.div
                ref={ref4}
                initial={{ opacity: 0, x: 50 }}
                animate={inView4 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                className="absolute left-3 top-0 flex w-full items-start justify-end gap-[14.04px] rounded-[32px] bg-[#ffffff] p-7 xl:left-[108px] xl:w-[443px]"
              >
                <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[14.04px]">
                  <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[8.78px] self-stretch">
                    <div className="relative mt-[-0.88px] flex-1 text-[17.6px] font-medium leading-[24.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('calculator.expenses')}
                    </div>
                  </div>

                  <div className="relative flex h-[187.85px] w-full items-end justify-between self-stretch">
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 xl:w-[9.39px]">
                        <div className="relative h-[22.31px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[100.97px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] xl:w-[18.78px]">
                        01
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 xl:w-[9.39px]">
                        <div className="relative h-[18.78px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[78.66px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] xl:w-[18.78px]">
                        02
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 xl:w-[9.39px]">
                        <div className="relative h-[34.05px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[111.54px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] xl:w-[18.78px]">
                        03
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 xl:w-[9.39px]">
                        <div className="relative h-[34.05px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[56.35px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] xl:w-[18.78px]">
                        04
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 xl:w-[9.39px]">
                        <div className="relative h-[50.48px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[78.66px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] xl:w-[18.78px]">
                        05
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 xl:w-[9.39px]">
                        <div className="relative h-[34.05px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[102.14px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] xl:w-[18.78px]">
                        06
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 xl:w-[9.39px]">
                        <div className="relative h-[21.13px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[78.66px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] xl:w-[18.78px]">
                        07
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 xl:w-[9.39px]">
                        <div className="relative h-[24.66px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[109.19px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] xl:w-[18.78px]">
                        08
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-full flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10 xl:w-[9.39px]">
                        <div className="relative h-[34.05px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[78.66px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-full text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica] xl:w-[18.78px]">
                        09
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <svg
                width="705"
                height="569"
                viewBox="0 0 705 569"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[45px] top-[83px] h-[50px] w-full xl:w-[494px]"
                alt="Vector"
              >
                <g opacity="0.32" filter="url(#filter0_f_9321_97914)">
                  <path
                    d="M376.303 184.943C420.705 146.535 488.739 178.973 517.205 199.992C645.894 360.14 411.409 444.711 309.765 411.982C208.122 379.252 109.096 213.076 167.413 162.632C225.73 112.189 320.799 232.953 376.303 184.943Z"
                    fill="#9FA7BC"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_9321_97914"
                    x="0"
                    y="0"
                    width="704.887"
                    height="569"
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
                      stdDeviation="75"
                      result="effect1_foregroundBlur_9321_97914"
                    />
                  </filter>
                </defs>
              </svg>

              <motion.div
                ref={ref5}
                initial={{ opacity: 0, x: -50 }}
                animate={inView5 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                className="w-[120%]] absolute left-0 top-[213px] flex items-start justify-end gap-[14.04px] rounded-[32px] bg-[#ffffff] p-7 xl:w-[443px]"
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

              <svg
                width="583"
                height="496"
                viewBox="0 0 583 496"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[91px] top-[148px] h-[313px] w-full xl:w-[540px]"
                alt="Vector"
              >
                <g opacity="0.32" filter="url(#filter0_f_9321_97929)">
                  <path
                    d="M285.105 186.734C299.738 149.589 350.956 147.667 374.736 151.349C502.784 207.227 388.206 332.15 316.648 344.499C245.09 356.848 133.009 287.98 152.227 239.194C171.444 190.408 266.815 233.167 285.105 186.734Z"
                    fill="#9FA7BC"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_9321_97929"
                    x="0"
                    y="0"
                    width="582.552"
                    height="496"
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
                      stdDeviation="75"
                      result="effect1_foregroundBlur_9321_97929"
                    />
                  </filter>
                </defs>
              </svg>

              <motion.div
                ref={ref6}
                initial={{ opacity: 0, x: 50 }}
                animate={inView6 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                className="absolute left-8 top-[320px] inline-flex items-center gap-4 rounded-[32px] bg-[#ffffff] py-4 pl-4 pr-6 xl:left-[272px] xl:top-[300px]"
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                >
                  <rect width="64" height="64" rx="24" fill="#F2F5FF" />
                  <path
                    d="M43 24H21C20.4477 24 20 24.4477 20 25V41C20 41.5523 20.4477 42 21 42H43C43.5523 42 44 41.5523 44 41V25C44 24.4477 43.5523 24 43 24Z"
                    stroke="#3573FC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M37 24V22C37 21.4696 36.7893 20.9609 36.4142 20.5858C36.0391 20.2107 35.5304 20 35 20H29C28.4696 20 27.9609 20.2107 27.5858 20.5858C27.2107 20.9609 27 21.4696 27 22V24"
                    stroke="#3573FC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M44 30.7888C40.3532 32.8988 36.2132 34.0066 32 34C27.7869 34.0067 23.647 32.8993 20 30.79"
                    stroke="#3573FC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30 30H34"
                    stroke="#3573FC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

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
