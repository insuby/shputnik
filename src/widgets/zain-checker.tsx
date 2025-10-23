import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useIsMobile } from 'shared/lib/use-is-mobile';
import { RoutesPath } from 'shared/routes-path.tsx';
import { Check10 } from 'shared/ui';

import { CrmCapabilities } from './crm-capabilities.tsx';

type ZaimCheckerProps = {
  namespace?: string;
};

export const ZaimChecker = ({ namespace = 'widgets' }: ZaimCheckerProps) => {
  const { t } = useTranslation(namespace);
  const isMobile = useIsMobile();
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

  const marginValue = isMobile ? '-10px' : '-100px';
  const inView1 = useInView(ref1, { once: true, margin: marginValue });
  const inView2 = useInView(ref2, { once: true, margin: marginValue });
  const inView3 = useInView(ref3, { once: true, margin: marginValue });
  const inView5 = useInView(ref5, { once: true, margin: marginValue });
  const inView13 = useInView(ref13, { once: true, margin: marginValue });
  const inView15 = useInView(ref15, { once: true, margin: marginValue });
  const inView16 = useInView(ref16, { once: true, margin: marginValue });
  const inView17 = useInView(ref17, { once: true, margin: marginValue });
  const inView19 = useInView(ref19, { once: true, margin: marginValue });
  const inView20 = useInView(ref20, { once: true, margin: marginValue });
  const inView21 = useInView(ref21, { once: true, margin: marginValue });
  const inView22 = useInView(ref22, { once: true, margin: marginValue });
  const inView23 = useInView(ref23, { once: true, margin: marginValue });
  const inView24 = useInView(ref24, { once: true, margin: marginValue });

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-9 overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 xl:w-[1376px]">
      <svg
        width="1435"
        height="1361"
        viewBox="0 0 1435 1361"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[339px] top-[-115px] h-[1060px] w-full xl:w-[1204px]"
      >
        <g opacity="0.16" filter="url(#filter0_f_9321_96528)">
          <path
            d="M580.201 516.863C557.553 350.888 741.074 238.781 835.665 203.475C1418.97 145.308 1255.87 837.593 1019.3 1029.59C782.722 1221.59 231.215 1199.45 201.47 981.467C171.726 763.481 608.51 724.332 580.201 516.863Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_9321_96528"
            x="0"
            y="0"
            width="1435"
            height="1360.42"
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
              result="effect1_foregroundBlur_9321_96528"
            />
          </filter>
        </defs>
      </svg>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start  gap-[88px] self-stretch p-0 lg:!flex-row xl:p-12">
        <div className="relative flex w-full flex-col items-start gap-7 xl:w-[520px]">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative flex-[0_0_auto]"
          >
            <rect
              width="64"
              height="64"
              rx="32"
              fill="#725DD6"
              fillOpacity="0.08"
            />
            <path
              d="M38.5 21H43V25.5"
              stroke="#725DD6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38.5 43H43V38.5"
              stroke="#725DD6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.5 43H21V38.5"
              stroke="#725DD6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.5 21H21V25.5"
              stroke="#725DD6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32 34C34.2091 34 36 32.2091 36 30C36 27.7909 34.2091 26 32 26C29.7909 26 28 27.7909 28 30C28 32.2091 29.7909 34 32 34Z"
              stroke="#725DD6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26 37C26.6986 36.0685 27.6045 35.3125 28.6459 34.7918C29.6873 34.2711 30.8357 34 32 34C33.1643 34 34.3127 34.2711 35.3541 34.7918C36.3955 35.3125 37.3014 36.0685 38 37"
              stroke="#725DD6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 xl:inline-flex">
            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, x: 80 }}
                animate={inView1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative mt-[-1.00px] w-full text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[520px]"
              >
                {t('zainChecker.title')}
              </motion.div>

              <motion.p
                ref={ref2}
                initial={{ opacity: 0, y: 80 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
              >
                {t('zainChecker.subtitle')}
              </motion.p>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
              <motion.div
                ref={ref3}
                initial={{ opacity: 0, y: 50 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="relative flex h-fit w-full items-center justify-center gap-6 xl:h-7 xl:w-[520px]"
              >
                <motion.div
                  ref={ref4}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView3 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('zainChecker.services.identification')}
                </div>
              </motion.div>

              <motion.div
                ref={ref5}
                initial={{ opacity: 0, y: 50 }}
                animate={inView5 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                className="relative flex h-fit w-full items-center justify-center gap-6 xl:h-7 xl:w-[520px]"
              >
                <motion.div
                  ref={ref6}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView3 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('zainChecker.services.reliability')}
                </div>
              </motion.div>

              <motion.div
                ref={ref7}
                initial={{ opacity: 0, y: 50 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                className="relative flex h-fit w-full items-center justify-center gap-6 xl:h-7 xl:w-[520px]"
              >
                <motion.div
                  ref={ref8}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView3 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('zainChecker.services.governmentSources')}
                </div>
              </motion.div>

              <motion.div
                ref={ref9}
                initial={{ opacity: 0, y: 50 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                className="relative flex h-fit w-full items-center justify-center gap-6 xl:h-7 xl:w-[520px]"
              >
                <motion.div
                  ref={ref10}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView3 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('zainChecker.services.socialNetworks')}
                </div>
              </motion.div>

              <motion.div
                ref={ref13}
                initial={{ opacity: 0, y: 50 }}
                animate={inView13 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
                className="relative flex h-fit w-full items-center justify-center gap-6 xl:h-7 xl:w-[520px]"
              >
                <motion.div
                  ref={ref14}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView3 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 1.3 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('zainChecker.services.additionalSources')}
                </div>
              </motion.div>

              {location.pathname !== RoutesPath.ISLAMFINANCE && (
                <motion.div
                  ref={ref15}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView15 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 1.4 }}
                  className="relative flex h-fit w-full items-center justify-center gap-6 xl:h-7 xl:w-[520px]"
                >
                  <motion.div
                    ref={ref16}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView3 ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 1.5 }}
                    className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                  >
                    <Check10 className="!relative !h-4 !w-4" />
                  </motion.div>

                  <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('zainChecker.services.extraSources')}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <svg
          width="1"
          height="528"
          viewBox="0 0 1 528"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative hidden w-px xl:block xl:h-[528px]"
        >
          <path d="M0.5 0V528" stroke="#E3E5E8" />
        </svg>

        <div className="relative flex size-full flex-col items-start justify-center gap-7 xl:w-[520px]">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative flex-[0_0_auto]"
          >
            <rect
              width="64"
              height="64"
              rx="32"
              fill="#00CB82"
              fillOpacity="0.08"
            />
            <path
              d="M44 23H20C19.4477 23 19 23.4477 19 24V40C19 40.5523 19.4477 41 20 41H44C44.5523 41 45 40.5523 45 40V24C45 23.4477 44.5523 23 44 23Z"
              stroke="#00CB82"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M37 37H41"
              stroke="#00CB82"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M31 37H33"
              stroke="#00CB82"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 28H45"
              stroke="#00CB82"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 xl:w-[520px]">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
              <motion.div
                ref={ref15}
                initial={{ opacity: 0, x: 80 }}
                animate={inView15 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative mt-[-1.00px] self-stretch whitespace-nowrap text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('zainChecker.paymentSystems.title')}
              </motion.div>

              <motion.p
                ref={ref16}
                initial={{ opacity: 0, y: 80 }}
                animate={inView16 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
              >
                {t('zainChecker.paymentSystems.subtitle')}
              </motion.p>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
              <motion.div
                ref={ref17}
                initial={{ opacity: 0, y: 50 }}
                animate={inView17 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="relative flex h-fit w-full items-center justify-center gap-6 xl:h-7 xl:w-[520px]"
              >
                <motion.div
                  ref={ref18}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView3 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" color="#00CB82" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('zainChecker.paymentSystems.services.distribution')}
                </div>
              </motion.div>

              <motion.div
                ref={ref19}
                initial={{ opacity: 0, y: 50 }}
                animate={inView19 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                className="relative flex h-fit w-full items-center justify-center gap-6 xl:h-7 xl:w-[520px]"
              >
                <motion.div
                  ref={ref20}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView20 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" color="#00CB82" />
                </motion.div>

                <p className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('zainChecker.paymentSystems.services.repayment')}
                </p>
              </motion.div>

              <motion.div
                ref={ref21}
                initial={{ opacity: 0, y: 50 }}
                animate={inView21 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                className="relative flex h-fit w-full items-center justify-center gap-6 xl:h-7 xl:w-[520px]"
              >
                <motion.div
                  ref={ref22}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView22 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" color="#00CB82" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('zainChecker.paymentSystems.services.statusCheck')}
                </div>
              </motion.div>

              <motion.div
                ref={ref23}
                initial={{ opacity: 0, y: 50 }}
                animate={inView23 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                className="relative flex h-fit w-full items-center justify-center gap-6 xl:h-7 xl:w-[520px]"
              >
                <motion.div
                  ref={ref24}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView24 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" color="#00CB82" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('zainChecker.paymentSystems.services.assetManagement')}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <CrmCapabilities />
    </div>
  );
};
