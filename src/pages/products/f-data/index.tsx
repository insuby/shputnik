import { motion, useInView } from 'framer-motion';
import { Feedback, useFeedbackForm } from 'widgets';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { HeroButtons } from 'shared/ui';

export const Fdata = () => {
  const { t } = useTranslation(['fdata']);
  const { setIsOpen } = useFeedbackForm();
  const sliderRef = useRef<Slider>(null);

  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref12 = useRef(null);
  const ref13 = useRef(null);
  const ref14 = useRef(null);
  const ref16 = useRef(null);
  const ref17 = useRef(null);
  const ref18 = useRef(null);
  const ref19 = useRef(null);
  const ref21 = useRef(null);
  const ref22 = useRef(null);
  const ref23 = useRef(null);
  const ref25 = useRef(null);
  const ref26 = useRef(null);
  const ref27 = useRef(null);
  const ref29 = useRef(null);
  const ref30 = useRef(null);
  const ref51 = useRef(null);
  const ref52 = useRef(null);
  const ref53 = useRef(null);
  const ref54 = useRef(null);
  const ref55 = useRef(null);
  const ref56 = useRef(null);
  const ref57 = useRef(null);

  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView4 = useInView(ref4, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref6, { once: true, margin: '-100px' });
  const inView7 = useInView(ref7, { once: true, margin: '-100px' });
  const inView8 = useInView(ref8, { once: true, margin: '-100px' });
  const inView9 = useInView(ref9, { once: true, margin: '-100px' });
  const inView10 = useInView(ref10, { once: true, margin: '-100px' });
  const inView12 = useInView(ref12, { once: true, margin: '-100px' });
  const inView13 = useInView(ref13, { once: true, margin: '-100px' });
  const inView14 = useInView(ref14, { once: true, margin: '-100px' });
  const inView16 = useInView(ref16, { once: true, margin: '-100px' });
  const inView17 = useInView(ref17, { once: true, margin: '-100px' });
  const inView18 = useInView(ref18, { once: true, margin: '-100px' });
  const inView19 = useInView(ref19, { once: true, margin: '-100px' });
  const inView21 = useInView(ref21, { once: true, margin: '-100px' });
  const inView22 = useInView(ref22, { once: true, margin: '-100px' });
  const inView23 = useInView(ref23, { once: true, margin: '-100px' });
  const inView25 = useInView(ref25, { once: true, margin: '-100px' });
  const inView26 = useInView(ref26, { once: true, margin: '-100px' });
  const inView27 = useInView(ref27, { once: true, margin: '-100px' });
  const inView29 = useInView(ref29, { once: true, margin: '-100px' });
  const inView30 = useInView(ref30, { once: true, margin: '-100px' });
  const inView51 = useInView(ref51, { once: true, margin: '-100px' });
  const inView52 = useInView(ref52, { once: true, margin: '-100px' });
  const inView53 = useInView(ref53, { once: true, margin: '-100px' });
  const inView54 = useInView(ref54, { once: true, margin: '-100px' });
  const inView55 = useInView(ref55, { once: true, margin: '-100px' });
  const inView56 = useInView(ref56, { once: true, margin: '-100px' });
  const inView57 = useInView(ref57, { once: true, margin: '-100px' });

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[88px] p-0 lg:w-full lg:gap-[136px] lg:px-8 lg:pb-[136px] lg:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
        <div className="relative flex w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-7 lg:p-12 xl:h-[636px]">
          <svg
            width="1643"
            height="1443"
            viewBox="0 0 1643 1443"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-16 left-[var(--pos-430)] h-[842px] w-full lg:w-[954px]"
          >
            <g opacity="0.3" filter="url(#filter0_f_9604_10514)">
              <path
                d="M761.85 555.197C780.636 424.39 944.137 379.12 1023.54 372.836C1478.6 455.11 1204.88 944.896 983.82 1039.27C762.764 1133.65 349.218 997.349 373.891 825.552C398.564 653.755 738.367 718.706 761.85 555.197Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_9604_10514"
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
                  result="effect1_foregroundBlur_9604_10514"
                />
              </filter>
            </defs>
          </svg>

          <HeroButtons buttonText={t('hero.buttonText')}>
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, y: 50 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 lg:w-[624px]  lg:gap-12"
            >
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 lg:w-[624px]  lg:gap-12">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 lg:inline-flex">
                  <h1 className="mx-auto mt-[-1.00px] md:w-3/5 text-center text-[36px] font-medium leading-[44px] tracking-normal text-white [font-family:'Roboto',Helvetica] lg:m-0 lg:w-[624px] lg:text-left lg:text-6xl lg:leading-[68px]">
                    {t('hero.title')}
                  </h1>

                  <p className="relative mx-auto w-full max-w-[80%] text-center text-xl font-normal leading-7 tracking-normal text-[#ffffffcc] [font-family:'Roboto',Helvetica] lg:m-0 lg:w-[624px] lg:text-left">
                    {t('static.heroDescription')}
                  </p>
                </div>
              </div>
            </motion.div>
          </HeroButtons>

          <svg
            width="847"
            height="880"
            viewBox="0 0 847 880"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[var(--pos-1053)] top-[var(--pos-176)] h-[568px] w-full lg:w-[619px]"
            aria-hidden={true}
          >
            <g opacity="0.12" filter="url(#filter0_f_9604_10535)">
              <path
                d="M507.31 503.032C531.657 577.593 456.513 644.621 415.897 668.816C152.064 744.51 169.163 411.923 262.05 303.644C354.938 195.364 610.856 159.328 642.832 257.254C674.808 355.18 476.877 409.83 507.31 503.032Z"
                fill="#9FA7BC"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_9604_10535"
                x="0"
                y="0"
                width="846.431"
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
                  result="effect1_foregroundBlur_9604_10535"
                />
              </filter>
            </defs>
          </svg>

          <motion.div
            ref={ref51}
            initial={{ opacity: 0, x: -50 }}
            animate={inView51 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
            className="left-[var(--pos-704)] top-[var(--pos-208)] flex max-w-[576px] items-start justify-end gap-[11.96px] rounded-[32px] bg-white p-6 lg:absolute lg:w-[576px]"
          >
            <div className="relative flex w-full flex-1 grow flex-col items-start gap-6 lg:w-auto">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                <div className="relative flex h-8 w-full items-center justify-center gap-3 self-stretch">
                  <div className="relative flex-1 text-base font-medium leading-6 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                    {t('dashboard.title')}
                  </div>

                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative flex-[0_0_auto]"
                  >
                    <rect width="32" height="32" rx="16" fill="#F9FAFD" />
                    <path
                      d="M10.13 11.8363C10.0649 11.7646 10.022 11.6757 10.0065 11.5802C9.99096 11.4847 10.0035 11.3868 10.0425 11.2983C10.0815 11.2097 10.1454 11.1344 10.2264 11.0815C10.3074 11.0286 10.402 11.0003 10.4987 11H21.4987C21.5956 11 21.6903 11.0281 21.7715 11.081C21.8526 11.1338 21.9167 11.2091 21.9559 11.2977C21.9951 11.3863 22.0077 11.4843 21.9922 11.5799C21.9767 11.6755 21.9338 11.7646 21.8687 11.8363L17.4987 16.5V20.1656C17.4988 20.248 17.4785 20.329 17.4397 20.4017C17.4008 20.4743 17.3447 20.5362 17.2762 20.5819L15.2762 21.915C15.201 21.9652 15.1135 21.994 15.0232 21.9985C14.9329 22.0029 14.843 21.9828 14.7633 21.9402C14.6835 21.8976 14.6167 21.8342 14.5702 21.7566C14.5236 21.6791 14.4989 21.5904 14.4987 21.5V16.5L10.13 11.8363Z"
                      stroke="#55607A"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative flex-[0_0_auto]"
                  >
                    <rect width="32" height="32" rx="16" fill="#F9FAFD" />
                    <path
                      d="M21 10.5H11C10.7239 10.5 10.5 10.7239 10.5 11V21C10.5 21.2761 10.7239 21.5 11 21.5H21C21.2761 21.5 21.5 21.2761 21.5 21V11C21.5 10.7239 21.2761 10.5 21 10.5Z"
                      stroke="#55607A"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 9.5V11.5"
                      stroke="#55607A"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 9.5V11.5"
                      stroke="#55607A"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 13.5H21.5"
                      stroke="#55607A"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="relative flex h-9 w-full items-center gap-4 self-stretch rounded-[100px] border border-solid border-[#e3e4e7] py-2 pl-4 pr-3">
                  <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('dashboard.search')}
                  </div>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative size-4"
                  >
                    <path
                      d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z"
                      stroke="#9FA7BC"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5352 10.5356L13.9995 14"
                      stroke="#9FA7BC"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                <div className="relative flex w-full flex-[0_0_auto] items-start gap-4 self-stretch px-3 py-1">
                  <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('dashboard.status')}
                  </div>

                  <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('dashboard.reconciliation')}
                  </div>

                  <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('dashboard.operator')}
                  </div>

                  <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('dashboard.lastRunTime')}
                  </div>

                  <div className="relative mt-[-1.00px] w-20 text-center text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('dashboard.mismatches')}
                  </div>
                </div>

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                  <div className="relative flex h-11 w-full items-start gap-4 self-stretch rounded-xl bg-[#f9fafd] p-3">
                    <div className="relative flex flex-1 grow items-center justify-center gap-2">
                      <div className="relative size-2 rounded bg-red-50" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        {t('dashboard.unreconciled')}
                      </div>
                    </div>

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('dashboard.dp1vsDp2')}
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('dashboard.johnSmith')}
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      25 may 07:16
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-center text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      54
                    </div>
                  </div>

                  <div className="relative flex h-11 w-full items-start gap-4 self-stretch rounded-xl bg-[#f9fafd] p-3">
                    <div className="relative flex flex-1 grow items-center justify-center gap-2">
                      <div className="relative size-2 rounded bg-green-60" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        Reconciled
                      </div>
                    </div>

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('dashboard.dp1vsDp2')}
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('dashboard.johnSmith')}
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('dashboard.may24')}
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-center text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      0
                    </div>
                  </div>

                  <div className="relative flex h-11 w-full items-start gap-4 self-stretch rounded-xl bg-[#f9fafd] p-3">
                    <div className="relative flex flex-1 grow items-center justify-center gap-2">
                      <div className="relative size-2 rounded bg-green-60" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        {t('filter.reconciled')}
                      </div>
                    </div>

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('dashboard.dp1vsDp2')}
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('dashboard.johnSmith')}
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('dashboard.may23')}
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-center text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      2
                    </div>
                  </div>

                  <div className="relative flex h-11 w-full items-start gap-4 self-stretch rounded-xl bg-[#f9fafd] p-3">
                    <div className="relative flex flex-1 grow items-center justify-center gap-2">
                      <div className="relative size-2 rounded bg-red-50" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        {t('dashboard.unreconciled')}
                      </div>
                    </div>

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('dashboard.dp1vsDp2')}
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('dashboard.johnSmith')}
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('dashboard.may22')}
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-center text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      12
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <svg
            width="743"
            height="629"
            viewBox="0 0 743 629"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[var(--pos-775)] top-[var(--pos-172)] h-[464px] w-full lg:w-[601px]"
          >
            <g opacity="0.32" filter="url(#filter0_f_9608_11091)">
              <path
                d="M349.686 227.346C364.12 164.996 444.875 149.861 483.449 150.088C699.665 208.466 547.475 433.579 436.93 470.047C326.386 506.515 132.422 423.772 151.379 341.884C170.337 259.995 331.643 305.284 349.686 227.346Z"
                fill="#9FA7BC"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_9608_11091"
                x="0"
                y="0"
                width="743"
                height="628.988"
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
                  result="effect1_foregroundBlur_9608_11091"
                />
              </filter>
            </defs>
          </svg>

          <motion.div
            ref={ref52}
            initial={{ opacity: 0, y: 50 }}
            animate={inView52 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="absolute -bottom-10 left-60 right-0 mx-auto mt-auto flex w-[368px] items-start justify-end gap-[11.96px] rounded-[32px_32px_0px_0px] bg-white p-6 lg:!bottom-0 lg:bottom-auto lg:left-[var(--pos-960)] lg:right-auto lg:top-[var(--pos-404)] lg:w-[368px]"
          >
            <div className="relative flex flex-1 grow flex-col items-start gap-3 self-stretch">
              <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-4 self-stretch">
                <div className="relative mt-[-1.00px] flex-1 text-base font-medium leading-6 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                  {t('filter.title')}
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch">
                <div className="relative flex flex-1 grow flex-col items-start gap-2">
                  <div className="relative mt-[-1.00px] self-stretch text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('filter.status')}
                  </div>

                  <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                    <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('filter.waiting')}
                    </div>
                  </div>

                  <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                    <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('filter.inProgress')}
                    </div>
                  </div>

                  <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                    <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('filter.reconciled')}
                    </div>
                  </div>

                  <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                    <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('dashboard.unreconciled')}
                    </div>
                  </div>

                  <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                    <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('filter.created')}
                    </div>
                  </div>

                  <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                    <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      {t('filter.failed')}
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-1 grow flex-col items-start justify-center gap-3">
                  <div className="relative mr-[-28.00px] flex h-[76px] w-44 flex-col items-start gap-2">
                    <div className="relative mt-[-1.00px] self-stretch text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      {t('filter.users')}
                    </div>

                    <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                      <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        {t('filter.byMe')}
                      </div>
                    </div>

                    <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                      <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        {t('filter.byOthers')}
                      </div>
                    </div>
                  </div>

                  <div className="relative mr-[-28.00px] flex w-44 flex-[0_0_auto] flex-col items-start gap-2">
                    <div className="relative mt-[-1.00px] self-stretch text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      {t('filter.projects')}
                    </div>

                    <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                      <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        {t('filter.payments')}
                      </div>
                    </div>

                    <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                      <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        {t('filter.finance')}
                      </div>
                    </div>

                    <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                      <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        {t('filter.trading')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <svg
            width="642"
            height="519"
            viewBox="0 0 642 519"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[var(--pos-980)] top-[var(--pos-454)] h-[401px] w-full lg:w-[410px]"
          >
            <g opacity="0.24" filter="url(#filter0_f_9608_11095)">
              <path
                d="M329.858 174.498C359.289 136.373 419.28 151.351 445.596 163.605C575.191 271.361 400.471 377.617 313.411 367.889C226.352 358.161 119.621 240.718 158.275 190.647C196.929 140.575 293.069 222.154 329.858 174.498Z"
                fill="#9FA7BC"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_9608_11095"
                x="0"
                y="6.10876e-05"
                width="642"
                height="518.638"
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
                  result="effect1_foregroundBlur_9608_11095"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 self-stretch lg:gap-12">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-6 rounded-3xl lg:!flex-row">
          <div className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl p-7 py-12 lg:gap-12 lg:pl-12 lg:pr-[68px]">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-6 lg:w-[560px]">
              <div className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-start lg:text-5xl lg:leading-[60px]">
                {t('details.title')}
              </div>

              <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica] lg:text-left">
                {t('details.description')}
              </p>
            </div>
          </div>

          <svg
            height="404"
            viewBox="0 0 676 404"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative h-[404px] flex-1 grow self-stretch"
          >
            <g clipPath="url(#clip0_9604_10769)">
              <rect width="676" height="404" rx="32" fill="#F9FAFD" />
              <rect
                width="910"
                height="607"
                transform="matrix(-1 0 0 1 676 -42)"
                fill="url(#pattern0_9604_10769)"
              />
              <rect
                x="306"
                y="170"
                width="64"
                height="64"
                rx="32"
                fill="white"
                fillOpacity="0.6"
              />
              <path
                d="M352 202C352.001 202.34 351.914 202.674 351.747 202.969C351.581 203.265 351.341 203.513 351.05 203.689L333.04 214.706C332.736 214.892 332.389 214.994 332.033 215C331.677 215.007 331.325 214.918 331.015 214.744C330.708 214.572 330.452 214.321 330.273 214.018C330.095 213.714 330.001 213.368 330 213.016V190.984C330.001 190.632 330.095 190.286 330.273 189.982C330.452 189.679 330.708 189.428 331.015 189.256C331.325 189.082 331.677 188.993 332.033 189C332.389 189.006 332.736 189.108 333.04 189.294L351.05 200.311C351.341 200.487 351.581 200.735 351.747 201.031C351.914 201.327 352.001 201.66 352 202Z"
                fill="url(#paint0_linear_9604_10769)"
              />
            </g>
            <defs>
              <pattern
                id="pattern0_9604_10769"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#image0_9604_10769"
                  transform="scale(0.000244245 0.000366166)"
                />
              </pattern>
              <linearGradient
                id="paint0_linear_9604_10769"
                x1="329.547"
                y1="221.176"
                x2="356.279"
                y2="219.821"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1C222F" />
                <stop offset="1" stopColor="#223562" />
              </linearGradient>
              <clipPath id="clip0_9604_10769">
                <rect width="676" height="404" rx="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <motion.div
        ref={ref4}
        initial={{ opacity: 0, y: 50 }}
        animate={inView4 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 self-stretch lg:gap-12"
      >
        <motion.div
          ref={ref5}
          initial={{ opacity: 0, y: 50 }}
          animate={inView5 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 lg:w-[656px]"
        >
          <motion.div
            ref={ref6}
            initial={{ opacity: 0, y: 30 }}
            animate={inView6 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-5xl lg:leading-[60px]"
          >
            {t('details.helpTitle')}
          </motion.div>
          <image
            id="image0_9604_10769"
            width="4096"
            height="2731"
            preserveAspectRatio="none"
          />
          <motion.p
            ref={ref7}
            initial={{ opacity: 0, y: 30 }}
            animate={inView7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
          >
            {t('details.philosophy')}
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref8}
          initial={{ opacity: 0, y: 50 }}
          animate={inView8 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 lg:inline-flex"
        >
          <motion.div
            ref={ref9}
            initial={{ opacity: 0, y: 50 }}
            animate={inView9 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
            className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 lg:!flex-row"
          >
            <motion.div
              ref={ref10}
              initial={{ opacity: 0, x: -50 }}
              animate={inView10 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              className="relative flex flex-1 grow flex-col items-start gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView12 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/fdata/frame-18-4.svg"
              />
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <motion.div
                  ref={ref12}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView12 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('details.lossReduction')}
                </motion.div>
                <motion.p
                  ref={ref13}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView13 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('details.confidence')}
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              ref={ref14}
              initial={{ opacity: 0, x: 50 }}
              animate={inView14 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              className="relative flex flex-1 grow flex-col items-start gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10"
            >
              {/* Removed missing SVG motion.img: /img/fdata/frame-20.svg */}
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView12 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/fdata/frame-20.svg"
              />
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <motion.div
                  ref={ref16}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView16 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('howWeHelp.resourceOptimization.title')}
                </motion.div>
                <motion.p
                  ref={ref17}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView17 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('details.automation')}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            ref={ref18}
            initial={{ opacity: 0, y: 50 }}
            animate={inView18 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
            className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 lg:!flex-row"
          >
            <motion.div
              ref={ref19}
              initial={{ opacity: 0, x: -50 }}
              animate={inView19 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              className="relative flex flex-1 grow flex-col items-start gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10"
            >
              {/* Removed missing SVG motion.img: /img/fdata/frame-19.svg */}
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView12 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/fdata/frame-19.svg"
              />
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <motion.div
                  ref={ref21}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView21 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('howWeHelp.transparentAnalytics.title')}
                </motion.div>
                <motion.p
                  ref={ref22}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView22 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('details.accuratePicture')}
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              ref={ref23}
              initial={{ opacity: 0, x: 0 }}
              animate={inView23 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              className="relative flex flex-1 grow flex-col items-start gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10"
            >
              {/* Removed missing SVG motion.img: /img/fdata/frame-19-2.svg */}
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView12 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/fdata/frame-19-2.svg"
              />
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <motion.div
                  ref={ref25}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView25 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('howWeHelp.adaptability.title')}
                </motion.div>
                <motion.p
                  ref={ref26}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView26 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('details.easyCreation')}
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              ref={ref27}
              initial={{ opacity: 0, x: 50 }}
              animate={inView27 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              className="relative flex flex-1 grow flex-col items-start gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10"
            >
              {/* Removed missing SVG motion.img: /img/fdata/frame-18-5.svg */}
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView12 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/fdata/frame-18-5.svg"
              />
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <motion.div
                  ref={ref29}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView29 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('howWeHelp.errorReduction.title')}
                </motion.div>
                <motion.p
                  ref={ref30}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView30 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('howWeHelp.errorReduction.description')}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <Feedback />
      <div className="relative flex w-full flex-col lg:h-[568px] lg:!flex-row">
        <div className="flex w-full flex-col items-center gap-[68px] lg:!flex-row">
          <div className="relative flex flex-col items-start justify-center gap-7 lg:w-[496px]">
            <div className="relative mt-[-1.00px] self-stretch text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-5xl lg:leading-[60px]">
              {t('details.features.title')}
            </div>

            <button
              onClick={onClick}
              className="all-[unset] relative box-border inline-flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 lg:w-fit"
            >
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                {t('details.features.try')}
              </div>
            </button>
          </div>

          <div className="w-full lg:w-[915px]" id="fdata-slider">
            <Slider
              ref={sliderRef}
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={window.innerWidth < 700 ? 1 : 2}
              slidesToScroll={1}
              centerMode={true}
              centerPadding="0px"
              arrows={false}
            >
              <div className="px-0 md:px-3">
                <div className="relative flex h-[480px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 lg:w-[443px] lg:gap-12 lg:p-12">
                  <svg
                    width="638"
                    height="682"
                    viewBox="0 0 638 682"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-0 h-[406px] w-full lg:w-[443px]"
                  >
                    <g opacity="0.12" filter="url(#filter0_f_9604_10676)">
                      <path
                        d="M271.253 368.278C228.003 368.25 205.762 317.375 200.048 291.94C205.626 140.693 376.99 206.691 417.806 273.939C458.622 341.188 433.619 481.485 376.815 481.449C320.012 481.413 325.316 368.312 271.253 368.278Z"
                        fill="#725DD6"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_9604_10676"
                        x="0"
                        y="0"
                        width="638"
                        height="681.498"
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
                          result="effect1_foregroundBlur_9604_10676"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <div className="relative w-full flex-1 self-stretch">
                    <div className="relative left-0 top-1 flex w-full flex-col items-center justify-center gap-2.5 rounded-[32px] bg-white p-6 lg:left-6 lg:w-[299px]">
                      <div className="relative self-stretch text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                        {t('details.features.rules')}
                      </div>

                      <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch">
                        <div className="relative mt-[-1.00px] flex-1 text-base font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          {t('details.features.autoUpload')}
                        </div>

                        <div className="relative h-4 w-7 overflow-hidden rounded-[100px] bg-[#e8ebf4]">
                          <div className="relative left-0.5 top-0.5 size-3 rounded-md bg-[#ffffff]" />
                        </div>
                      </div>

                      <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch">
                        <div className="relative mt-[-1.00px] flex-1 text-base font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          {t('details.features.fileStorage')}
                        </div>

                        <div className="relative h-4 w-7 overflow-hidden rounded-[100px] bg-green-60">
                          <div className="relative left-3.5 top-0.5 size-3 rounded-md bg-[#ffffff]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-1 flex-col items-start gap-3 self-stretch">
                    <div className="relative self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('details.dataProcessing.title')}
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      {t('details.dataProcessing.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-0 md:px-3">
                <div className="relative flex h-[480px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 lg:w-[442px] lg:gap-12 lg:p-12">
                  <svg
                    width="638"
                    height="682"
                    viewBox="0 0 638 682"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-0 h-[406px] w-full lg:w-[377px]"
                  >
                    <g opacity="0.2" filter="url(#filter0_f_9604_10711)">
                      <path
                        d="M271.253 368.278C228.003 368.25 205.762 317.375 200.048 291.94C205.626 140.693 376.99 206.691 417.806 273.939C458.622 341.188 433.619 481.485 376.815 481.449C320.012 481.413 325.316 368.312 271.253 368.278Z"
                        fill="#725DD6"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_9604_10711"
                        x="0"
                        y="0"
                        width="638"
                        height="681.498"
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
                          result="effect1_foregroundBlur_9604_10711"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <div className="relative w-full flex-1 self-stretch">
                    <div className="absolute left-[23px] top-1 inline-flex items-center gap-2.5 rounded-[32px] bg-[#ffffff] p-3">
                      <div className="relative size-[120px]">
                        <div className="relative size-[120px]">
                          <div className="absolute left-0 top-0 size-[120px]">
                            <svg
                              width="58"
                              height="120"
                              viewBox="0 0 58 120"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute left-0 top-0 h-[120px] w-[57px]"
                            >
                              <path
                                d="M57.3913 2.56931C57.3913 3.97047 56.2923 5.11764 54.9023 5.24638C27.0368 7.82735 5.2174 31.3556 5.21739 60C5.21739 88.6443 27.0366 112.172 54.902 114.753C56.2922 114.882 57.3913 116.029 57.3913 117.43C57.3913 118.924 56.1495 120.121 54.6678 119.99C24.0285 117.282 0 91.4584 0 60C4.64946e-06 28.5416 24.0287 2.71798 54.6681 0.00980902C56.1497 -0.121146 57.3913 1.07638 57.3913 2.56931Z"
                                fill="#00CB82"
                              />
                            </svg>

                            <svg
                              width="58"
                              height="71"
                              viewBox="0 0 58 71"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute left-[63px] top-[49px] h-[71px] w-[57px]"
                            >
                              <path
                                d="M53.8023 0.0907039C55.2772 -0.305988 56.7826 0.637786 56.9984 2.15508C57.399 4.97052 57.6065 7.84847 57.6065 10.775C57.6065 42.3513 33.4879 68.2716 2.73377 70.9901C1.24645 71.1216 0 69.9194 0 68.4207C0 67.0141 1.10326 65.8625 2.49863 65.7332C30.4685 63.1425 52.3695 39.5267 52.3695 10.775C52.3695 8.17936 52.1905 5.62561 51.8449 3.12536C51.6566 1.76297 52.4787 0.446698 53.8023 0.0907039Z"
                                fill="#3573FC"
                              />
                            </svg>

                            <div className="absolute left-[29px] top-[37px] inline-flex flex-col items-center">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                                {t('dataLoading.total')}
                              </div>

                              <div className="relative -mt-0.5 w-fit whitespace-nowrap text-center text-xl font-medium leading-8 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                                88,000
                              </div>
                            </div>
                          </div>

                          <svg
                            width="14"
                            height="22"
                            viewBox="0 0 14 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-[103px] top-[22px] h-[22px] w-3.5"
                          >
                            <path
                              d="M0.77269 0.768161C1.8597 -0.322948 3.64835 -0.249792 4.5827 0.975536C8.58698 6.22685 11.7511 12.1577 13.8739 18.566C14.3346 19.9567 13.5009 21.4235 12.0906 21.8028C10.7108 22.1739 9.29563 21.3629 8.83918 20.0042C6.92674 14.3114 4.11299 9.03492 0.568127 4.34576C-0.251086 3.2621 -0.185595 1.73006 0.77269 0.768161Z"
                              fill="#E74951"
                            />
                          </svg>

                          <svg
                            width="39"
                            height="20"
                            viewBox="0 0 39 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-[63px] top-0 h-5 w-[39px]"
                          >
                            <path
                              d="M0 2.57386C0 1.07834 1.2428 -0.121327 2.72696 0.00982073C16.2362 1.20357 28.4624 6.88264 37.9182 15.5554C38.9851 16.534 38.9828 18.2021 37.9608 19.2279C36.9415 20.2511 35.2935 20.2476 34.2253 19.2759C25.6692 11.4927 14.656 6.38192 2.49243 5.2555C1.10003 5.12656 0 3.97745 0 2.57386Z"
                              fill="#FBAB00"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <svg
                      width="144"
                      height="144"
                      viewBox="0 0 144 144"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-[179px] top-1"
                    >
                      <rect width="144" height="144" rx="24" fill="white" />
                      <path
                        d="M16 116V88.7266M28.4444 116V81.5135M40.8889 116V68.5299M53.3333 116V28M65.7778 116V42.2703M78.2222 116V74.3784V32.7568M90.6667 116V51.7838M103.111 116V81.5135M115.556 116V62.4865M128 116V81.5135"
                        stroke="url(#paint0_linear_9608_11155)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_9608_11155"
                          x1="12.08"
                          y1="97.96"
                          x2="132.478"
                          y2="98.6727"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3573FC" stopOpacity="0" />
                          <stop offset="0.29049" stopColor="#3573FC" />
                          <stop offset="0.685619" stopColor="#3573FC" />
                          <stop
                            offset="1"
                            stopColor="#3573FC"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="relative flex w-full flex-1 flex-col items-start gap-3 self-stretch">
                    <div className="relative self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('details.reporting.title')}
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      {t('details.reporting.description')}
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="absolute left-[var(--pos-725)] top-[542px] hidden h-14 w-full items-center justify-between rounded-full bg-[#f9fafd] p-1 lg:flex lg:w-[120px]">
          <button
            aria-controls="fdata-slider"
            aria-label={t('details.navigation.previousSlide')}
            onClick={goToPrev}
            className="active:bg-white/90 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 12H3.75"
                stroke="#55607A"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 5.25L3.75 12L10.5 18.75"
                stroke="#55607A"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            aria-controls="fdata-slider"
            aria-label={t('details.navigation.nextSlide')}
            onClick={goToNext}
            className="active:bg-white/90 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12H20.25"
                stroke="#55607A"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 5.25L20.25 12L13.5 18.75"
                stroke="#55607A"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 self-stretch lg:gap-12">
        <div
          ref={ref53}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 lg:w-[656px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView53 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-5xl lg:leading-[60px]"
          >
            {t('details.testimonials.title')}
          </motion.div>
        </div>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch">
          <motion.div
            ref={ref53}
            initial={{ opacity: 0, y: -100 }}
            animate={inView53 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="relative flex w-full flex-[0_0_auto] items-center gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 xl:!p-[60px]"
          >
            <div className="relative hidden size-[140px] rounded-[100px] [background:url(/img/fdata/frame-18.png)_50%_50%_/_cover] lg:block" />

            <motion.div className="relative flex flex-1 grow flex-col items-center gap-7 lg:!flex-row  lg:gap-12">
              <div className="relative flex w-full flex-col items-start gap-4 lg:w-[421px]">
                <div className="relative m-auto size-[140px] rounded-[100px] [background:url(/img/fdata/frame-18.png)_50%_50%_/_cover] lg:hidden" />

                <div className="relative mt-[-1.00px] self-stretch text-center text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-left">
                  {t('details.testimonials.author')}
                </div>

                <div className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica] lg:text-left">
                  {t('details.testimonials.position')}
                  <br />
                  {t('details.testimonials.company')}
                </div>
              </div>

              <svg
                width="1"
                height="140"
                viewBox="0 0 1 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative hidden w-px self-stretch lg:block"
              >
                <path d="M0.5 0V140" stroke="#E3E5E8" />
              </svg>

              <p className="relative mt-[-1.00px] flex-1 text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica] lg:text-left">
                {t('details.testimonials.quote')}

                <br />
              </p>
            </motion.div>

            <svg
              width="670"
              height="640"
              viewBox="0 0 670 640"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[178px] top-[-105px] h-[348px] w-full lg:w-[323px]"
            >
              <g opacity="0.12" filter="url(#filter0_f_9606_11018)">
                <path
                  d="M302.062 369.547C261.674 385.012 222.688 345.481 208.243 323.782C159.277 180.58 342.902 180.817 405.094 228.981C467.287 277.145 494.195 417.082 441.151 437.394C388.106 457.706 352.548 350.215 302.062 369.547Z"
                  fill="#3573FC"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_9606_11018"
                  x="0"
                  y="0"
                  width="669.494"
                  height="640"
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
                    result="effect1_foregroundBlur_9606_11018"
                  />
                </filter>
              </defs>
            </svg>

            <svg
              width="670"
              height="640"
              viewBox="0 0 670 640"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[1005px] top-[11px] h-[348px] w-full lg:w-[323px]"
            >
              <g opacity="0.12" filter="url(#filter0_f_9606_11020)">
                <path
                  d="M302.062 270.453C261.674 254.988 222.688 294.519 208.243 316.218C159.277 459.42 342.902 459.183 405.094 411.019C467.287 362.855 494.195 222.918 441.151 202.606C388.106 182.294 352.548 289.785 302.062 270.453Z"
                  fill="#3573FC"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_9606_11020"
                  x="0"
                  y="0"
                  width="669.494"
                  height="640"
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
                    result="effect1_foregroundBlur_9606_11020"
                  />
                </filter>
              </defs>
            </svg>
          </motion.div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch lg:!flex-row">
              <motion.div
                ref={ref54}
                initial={{ opacity: 0, y: 30 }}
                animate={inView54 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                className="relative flex flex-1 grow flex-col items-start gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10"
              >
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
                    fill="#FBAB00"
                    fillOpacity="0.08"
                  />
                  <path
                    d="M22 42V33H28"
                    stroke="#FBAB00"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M44 42H20"
                    stroke="#FBAB00"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 42V27H35"
                    stroke="#FBAB00"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35 42V21H42V42"
                    stroke="#FBAB00"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                  <p className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('details.final.title')}
                  </p>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('details.final.description')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={ref55}
                initial={{ opacity: 0, y: 30 }}
                animate={inView55 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                className="relative flex flex-1 grow flex-col items-start gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10"
              >
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
                    d="M40 31C41.1645 30.9991 42.3131 31.2698 43.3547 31.7906C44.3963 32.3114 45.302 33.0679 46 34"
                    stroke="#00CB82"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 34C18.698 33.0679 19.6037 32.3114 20.6453 31.7906C21.6869 31.2698 22.8355 30.9991 24 31"
                    stroke="#00CB82"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 39C34.7614 39 37 36.7614 37 34C37 31.2386 34.7614 29 32 29C29.2386 29 27 31.2386 27 34C27 36.7614 29.2386 39 32 39Z"
                    stroke="#00CB82"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25 43C25.7179 41.7818 26.7412 40.772 27.9689 40.0705C29.1965 39.369 30.586 39 32 39C33.414 39 34.8035 39.369 36.0311 40.0705C37.2588 40.772 38.2821 41.7818 39 43"
                    stroke="#00CB82"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36.125 26C36.312 25.2757 36.6984 24.6184 37.2402 24.1026C37.7821 23.5869 38.4577 23.2334 39.1903 23.0824C39.923 22.9313 40.6833 22.9888 41.3849 23.2481C42.0866 23.5075 42.7014 23.9584 43.1596 24.5497C43.6179 25.141 43.9011 25.8489 43.9772 26.5931C44.0533 27.3372 43.9192 28.0878 43.5902 28.7596C43.2611 29.4314 42.7502 29.9974 42.1156 30.3935C41.481 30.7895 40.748 30.9996 40 31"
                    stroke="#00CB82"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.0019 31C23.2538 30.9996 22.5209 30.7895 21.8863 30.3935C21.2516 29.9974 20.7408 29.4314 20.4117 28.7596C20.0827 28.0878 19.9486 27.3372 20.0247 26.5931C20.1008 25.8489 20.384 25.141 20.8422 24.5497C21.3005 23.9584 21.9153 23.5075 22.617 23.2481C23.3186 22.9888 24.0789 22.9313 24.8116 23.0824C25.5442 23.2334 26.2198 23.5869 26.7617 24.1026C27.3035 24.6184 27.6899 25.2757 27.8769 26"
                    stroke="#00CB82"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('details.risks.title')}
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('details.risks.description')}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch lg:!flex-row">
              <motion.div
                ref={ref56}
                initial={{ opacity: 0, x: 50 }}
                animate={inView56 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                className="relative flex flex-1 grow flex-col items-start gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10"
              >
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
                    fill="#3573FC"
                    fillOpacity="0.08"
                  />
                  <path
                    d="M39.8888 30.1112C42.8888 27.1112 43.0763 23.5424 42.9825 21.9512C42.9669 21.7087 42.8635 21.4801 42.6917 21.3083C42.5198 21.1364 42.2913 21.033 42.0487 21.0174C40.4575 20.9237 36.8913 21.1087 33.8888 24.1112L26 31.9999L32 37.9999L39.8888 30.1112Z"
                    stroke="#3573FC"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.9984 25H25.2921C25.0273 25.0001 24.7733 25.1053 24.5859 25.2925L20.2921 29.5863C20.161 29.7176 20.0691 29.8829 20.0266 30.0636C19.9841 30.2442 19.9927 30.4332 20.0515 30.6092C20.1102 30.7853 20.2168 30.9415 20.3593 31.0604C20.5018 31.1793 20.6746 31.2562 20.8584 31.2825L25.9984 32"
                    stroke="#3573FC"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M39 31V38.7062C38.9999 38.9711 38.8947 39.2251 38.7075 39.4125L34.4137 43.7062C34.2824 43.8373 34.1171 43.9293 33.9364 43.9718C33.7558 44.0143 33.5668 44.0057 33.3908 43.9469C33.2147 43.8881 33.0585 43.7815 32.9396 43.639C32.8207 43.4965 32.7438 43.3237 32.7175 43.14L32 38"
                    stroke="#3573FC"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.82 39.4777C27.3362 40.5389 25.7063 43.0002 21 43.0002C21 38.2939 23.4613 36.6639 24.5225 36.1802"
                    stroke="#3573FC"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('details.speed.title')}
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('details.speed.description')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={ref57}
                initial={{ opacity: 0, x: -50 }}
                animate={inView57 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                className="relative flex flex-1 grow flex-col items-start gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10"
              >
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
                    fill="#E74951"
                    fillOpacity="0.08"
                  />
                  <path
                    d="M33.7994 21.0275L44.7319 40.0112C45.4982 41.3487 44.5082 43 42.9307 43H21.0657C19.4882 43 18.4982 41.3487 19.2644 40.0112L30.1969 21.0275C30.9844 19.6575 33.0119 19.6575 33.7994 21.0275Z"
                    stroke="#E74951"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 34V29"
                    stroke="#E74951"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 40C32.8284 40 33.5 39.3284 33.5 38.5C33.5 37.6716 32.8284 37 32 37C31.1716 37 30.5 37.6716 30.5 38.5C30.5 39.3284 31.1716 40 32 40Z"
                    fill="#E74951"
                  />
                </svg>

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('howWeHelp.errorReduction.title')}
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('howWeHelp.errorReduction.description')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
