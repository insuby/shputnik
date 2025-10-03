import { motion, useInView } from 'framer-motion';
import { Feedback, Integrations, Trust, useFeedbackForm } from 'widgets';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useIsMobile } from 'shared/lib/use-is-mobile';
import { HeroButtons } from 'shared/ui';

export const Dataunload = () => {
  const { t } = useTranslation(['dataunload']);
  const isMobile = useIsMobile();
  const ref3 = useRef(null);
  const refTop = useRef(null);
  const ref11 = useRef(null);
  const ref12 = useRef(null);
  const ref13 = useRef(null);
  const ref14 = useRef(null);
  const ref15 = useRef(null);
  const ref17 = useRef(null);
  const ref18 = useRef(null);
  const ref19 = useRef(null);
  const ref21 = useRef(null);
  const ref22 = useRef(null);
  const ref23 = useRef(null);
  const ref25 = useRef(null);
  const ref26 = useRef(null);
  const ref27 = useRef(null);
  const ref28 = useRef(null);
  const ref29 = useRef(null);
  const ref30 = useRef(null);
  const ref31 = useRef(null);
  const ref32 = useRef(null);
  const ref33 = useRef(null);
  const ref34 = useRef(null);
  const ref35 = useRef(null);
  const ref36 = useRef(null);
  const ref37 = useRef(null);
  const ref38 = useRef(null);
  const ref39 = useRef(null);
  const ref40 = useRef(null);
  const ref42 = useRef(null);
  const ref44 = useRef(null);
  const ref46 = useRef(null);
  const ref47 = useRef(null);
  const ref48 = useRef(null);
  const ref49 = useRef(null);
  const ref16 = useRef(null);
  const ref20 = useRef(null);
  const ref24 = useRef(null);
  const ref50 = useRef(null);

  const marginValue = isMobile ? '-10px' : '-100px';
  const inView3 = useInView(ref3, { once: true, margin: marginValue });
  const inViewTop = useInView(refTop, { once: true, margin: marginValue });
  const inView11 = useInView(ref11, { once: true, margin: '-100px' });
  const inView12 = useInView(ref12, { once: true, margin: '-100px' });
  const inView13 = useInView(ref13, { once: true, margin: '-100px' });
  const inView14 = useInView(ref14, { once: true, margin: '-100px' });
  const inView15 = useInView(ref15, { once: true, margin: '-100px' });
  const inView17 = useInView(ref17, { once: true, margin: '-100px' });
  const inView18 = useInView(ref18, { once: true, margin: '-100px' });
  const inView19 = useInView(ref19, { once: true, margin: '-100px' });
  const inView21 = useInView(ref21, { once: true, margin: '-100px' });
  const inView22 = useInView(ref22, { once: true, margin: '-100px' });
  const inView23 = useInView(ref23, { once: true, margin: '-100px' });
  const inView25 = useInView(ref25, { once: true, margin: '-100px' });
  const inView26 = useInView(ref26, { once: true, margin: '-100px' });
  const inView27 = useInView(ref27, { once: true, margin: '-100px' });
  const inView28 = useInView(ref28, { once: true, margin: '-100px' });
  const inView29 = useInView(ref29, { once: true, margin: '-100px' });
  const inView30 = useInView(ref30, { once: true, margin: '-100px' });
  const inView31 = useInView(ref31, { once: true, margin: '-100px' });
  const inView32 = useInView(ref32, { once: true, margin: '-100px' });
  const inView33 = useInView(ref33, { once: true, margin: '-100px' });
  const inView34 = useInView(ref34, { once: true, margin: '-100px' });
  const inView35 = useInView(ref35, { once: true, margin: '-100px' });
  const inView36 = useInView(ref36, { once: true, margin: '-100px' });
  const inView37 = useInView(ref37, { once: true, margin: '-100px' });
  const inView38 = useInView(ref38, { once: true, margin: '-100px' });
  const inView39 = useInView(ref39, { once: true, margin: '-100px' });
  const inView40 = useInView(ref40, { once: true, margin: '-100px' });
  const inView42 = useInView(ref42, { once: true, margin: '-100px' });
  const inView44 = useInView(ref44, { once: true, margin: '-100px' });
  const inView46 = useInView(ref46, { once: true, margin: '-100px' });
  const inView47 = useInView(ref47, { once: true, margin: '-100px' });
  const inView48 = useInView(ref48, { once: true, margin: '-100px' });
  const inView49 = useInView(ref49, { once: true, margin: '-100px' });
  const inView16 = useInView(ref16, { once: true, margin: '-100px' });
  const inView24 = useInView(ref24, { once: true, margin: '-100px' });
  const inView50 = useInView(ref50, { once: true, margin: '-100px' });

  const { setIsOpen } = useFeedbackForm();

  const handleContactClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[88px] p-0 lg:w-full lg:gap-[136px] lg:px-8 lg:pb-[136px] lg:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
        <div
          ref={refTop}
          className="relative flex  w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-violet-50 px-4 py-10 lg:h-[600px] lg:p-12"
        >
          <svg
            width="1077"
            height="1131"
            viewBox="0 0 1077 1131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[var(--pos-441)] top-[var(--pos-minus-140)] h-[1060px] w-full lg:w-[1108px]"
          >
            <g opacity="0.32" filter="url(#filter0_f_9017_4482)">
              <path
                d="M464.894 521.819C440.801 465.832 494.232 408.667 523.96 387.083C722.805 309.922 732.997 568.509 668.74 658.847C604.482 749.185 408.97 795.098 377.327 721.567C345.684 648.036 495.01 591.802 464.894 521.819Z"
                fill="#3573FC"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_9017_4482"
                x="-3.05339e-05"
                y="-0.000152669"
                width="1076.87"
                height="1131"
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
                  result="effect1_foregroundBlur_9017_4482"
                />
              </filter>
            </defs>
          </svg>

          <HeroButtons buttonText={t('hero.buttonText')}>
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, y: 50 }}
              animate={inViewTop ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 lg:w-[624px]  lg:gap-12"
            >
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 lg:w-[624px]  lg:gap-12">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 lg:inline-flex">
                  <h1 className="relative mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[44px] tracking-normal text-white [font-family:'Roboto',Helvetica] lg:w-[624px] lg:text-left lg:text-6xl lg:leading-[68px]">
                    {t('hero.title')}
                  </h1>

                  <p className="relative w-full text-center text-xl font-normal leading-7 tracking-normal text-[#ffffff99] [font-family:'Roboto',Helvetica] lg:w-[624px] lg:text-left">
                    {t('static.heroDescription')}
                  </p>
                </div>
              </div>
            </motion.div>
          </HeroButtons>

          <div className="mx-auto  mt-10 h-[292px] lg:absolute lg:left-[var(--pos-768)] lg:top-20 lg:h-[462px]">
            <div className="relative left-[-33px] top-[-65px] h-[527px]">
              <motion.div
                ref={ref3}
                initial={{ opacity: 0, x: -150 }}
                animate={inView3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="left-[var(--pos-31)] flex  items-center gap-4 rounded-[32px] bg-white py-4 pl-4 pr-6 lg:absolute lg:top-[var(--pos-152)]"
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative flex-[0_0_auto]"
                >
                  <rect width="64" height="64" rx="24" fill="#F2F5FF" />
                  <path
                    d="M41 44H23C22.7348 44 22.4804 43.8946 22.2929 43.7071C22.1054 43.5196 22 43.2652 22 43V21C22 20.7348 22.1054 20.4804 22.2929 20.2929C22.4804 20.1054 22.7348 20 23 20H35L42 27V43C42 43.2652 41.8946 43.5196 41.7071 43.7071C41.5196 43.8946 41.2652 44 41 44Z"
                    stroke="#3573FC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35 20V27H42"
                    stroke="#3573FC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('static.fileName')}
                  </div>

                  <div className="relative w-full text-sm font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica] lg:w-[129px]">
                    {t('static.fileSize')}
                  </div>
                </div>
              </motion.div>

              <svg
                width="606"
                height="504"
                viewBox="0 0 606 504"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-0 h-[503px] w-full lg:w-[606px]"
              >
                <g opacity="0.32" filter="url(#filter0_f_9604_10448)">
                  <path
                    d="M302.786 180.876C323.257 143.164 378.148 147.817 403.035 154.858C532.323 231.227 393.741 349.499 315.787 353.308C237.833 357.116 127.279 268.979 154.165 219.449C181.051 169.919 277.196 228.016 302.786 180.876Z"
                    fill="#9FA7BC"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_9604_10448"
                    x="0"
                    y="0"
                    width="606"
                    height="503.473"
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
                      result="effect1_foregroundBlur_9604_10448"
                    />
                  </filter>
                </defs>
              </svg>

              <motion.div
                ref={ref3}
                initial={{ opacity: 0, y: -150 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative left-12 mx-auto flex w-[400px] items-start  justify-end gap-[14.04px] rounded-[32px] bg-white p-7 shadow lg:absolute lg:left-[var(--pos-173)] lg:top-[var(--pos-239)]"
              >
                <div className="relative flex flex-1 grow flex-col items-center justify-center gap-4">
                  <div className="relative mt-[-0.88px] self-stretch text-sm font-normal leading-5 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                    {t('static.bureausTitle')}
                  </div>

                  <div className="relative inline-flex w-full flex-[0_0_auto] flex-col items-start gap-2">
                    <motion.div
                      ref={ref11}
                      initial={{ opacity: 0, x: 150 }}
                      animate={inView3 ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 0.4,
                      }}
                      className="relative flex h-16 w-full items-center justify-center gap-5 rounded-2xl bg-[#f9fafd] p-4"
                    >
                      <svg
                        className="relative size-8"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6662 4.6662C1.78515 7.54567 0 11.5352 0 15.9313C0 16.4511 0.422344 16.8734 0.942035 16.8734C1.46172 16.8734 1.88406 16.4511 1.88406 15.9313C1.88406 12.0502 3.45412 8.54422 5.9976 5.99917C8.54266 3.45569 12.0486 1.88563 15.9297 1.88563C19.8109 1.88563 23.3168 3.45569 25.862 5.99917C28.4054 8.54422 29.9754 12.0502 29.9754 15.9313C29.9754 19.8125 28.4054 23.3185 25.862 25.8635C23.3168 28.407 19.8109 29.977 15.9297 29.977C14.4979 29.977 13.1194 29.7588 11.8194 29.3616C12.1899 28.3913 12.5589 27.421 12.9294 26.4491C13.884 26.7207 14.8904 26.8683 15.9297 26.8683C18.9474 26.8683 21.6887 25.6421 23.6654 23.6639C25.6437 21.6871 26.8699 18.9459 26.8699 15.9282C26.8699 12.9106 25.6437 10.1692 23.6654 8.19252C21.6887 6.21427 18.9474 4.98806 15.9297 4.98806C12.9121 4.98806 10.1708 6.21427 8.19408 8.19252C6.21584 10.1692 4.98963 12.9106 4.98963 15.9282C4.98963 16.4479 5.41197 16.8703 5.93166 16.8703C6.45135 16.8703 6.8737 16.4479 6.8737 15.9282C6.8737 13.4239 7.88636 11.1662 9.52551 9.52551C11.1678 7.8848 13.4256 6.8737 15.9282 6.8737C18.4324 6.8737 20.6902 7.88636 22.3309 9.52551C23.9716 11.1678 24.9827 13.4256 24.9827 15.9282C24.9827 18.4324 23.97 20.6902 22.3309 22.3309C20.6886 23.9716 18.4309 24.9827 15.9282 24.9827C15.1228 24.9827 14.344 24.8743 13.6013 24.6765C13.9735 23.6999 14.3456 22.725 14.7177 21.7484C15.1086 21.83 15.5137 21.874 15.9282 21.874C17.5673 21.874 19.0605 21.2067 20.1344 20.1312C21.2098 19.0573 21.8771 17.5658 21.8771 15.9251C21.8771 14.2859 21.2098 12.7928 20.1344 11.7188C19.0605 10.6434 17.5689 9.97611 15.9282 9.97611C14.289 9.97611 12.7959 10.6434 11.722 11.7188C10.6466 12.7928 9.97924 14.2844 9.97924 15.9251C9.97924 16.4447 10.4016 16.8671 10.9213 16.8671C11.441 16.8671 11.8633 16.4447 11.8633 15.9251C11.8633 14.7993 12.3171 13.7898 13.0534 13.0518C13.7913 12.3155 14.8025 11.8617 15.9266 11.8617C17.0524 11.8617 18.0619 12.3155 18.7999 13.0518C19.5361 13.7898 19.99 14.7993 19.99 15.9251C19.99 17.0508 19.5361 18.0604 18.7999 18.7983C18.0619 19.5346 17.0508 19.9884 15.9266 19.9884C15.7476 19.9884 15.5734 19.9727 15.4006 19.9507C15.5985 19.4294 15.7979 18.9097 15.9957 18.3885C16.6473 18.3712 17.2423 18.0996 17.6709 17.6694C18.1153 17.2266 18.3932 16.6033 18.3932 15.9251C18.3932 15.2468 18.1153 14.625 17.6709 14.1807C17.2282 13.7364 16.6049 13.4585 15.9266 13.4585C15.2484 13.4585 14.6266 13.7364 14.1823 14.1807C13.738 14.6235 13.4601 15.2468 13.4601 15.9251C13.4601 16.6033 13.738 17.2251 14.1823 17.6694C14.1996 17.6866 14.2184 17.7008 14.2357 17.718C13.3188 20.1234 12.4034 22.5271 11.4865 24.9325L11.1505 25.8133C10.6701 27.0756 10.1881 28.3379 9.70761 29.6002C9.52238 30.0869 9.76573 30.6302 10.2524 30.8155C12.0156 31.4874 13.9295 31.8579 15.9266 31.8579C20.3228 31.8579 24.3107 30.0728 27.1917 27.1917C30.0728 24.3123 31.8579 20.3228 31.8579 15.9266C31.8579 11.5305 30.0728 7.54255 27.1917 4.66149C24.3155 1.78515 20.3275 0 15.9313 0C11.5352 0 7.54567 1.78515 4.6662 4.6662ZM15.5184 16.3427C15.4116 16.2343 15.3488 16.0946 15.3473 15.9313C15.3473 15.768 15.4116 15.6283 15.5184 15.52C15.6267 15.4132 15.7665 15.3504 15.9297 15.3488C16.093 15.3488 16.2328 15.4132 16.3411 15.52C16.4479 15.6283 16.5107 15.768 16.5122 15.9313C16.5122 16.0946 16.4479 16.2343 16.3411 16.3427C16.2328 16.4495 16.093 16.5122 15.9297 16.5139C15.7665 16.5139 15.6267 16.4495 15.5184 16.3427Z"
                          fill="#FF6A28"
                        />
                      </svg>

                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('static.scoring')}
                      </div>

                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative flex-[0_0_auto]"
                      >
                        <path
                          d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                          fill="#04CA84"
                          fillOpacity="0.12"
                        />
                        <path
                          d="M10.5 17L14 20.5L22 12.5"
                          stroke="#04CA84"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>

                    <motion.div
                      ref={ref12}
                      initial={{ opacity: 0, x: 150 }}
                      animate={inView3 ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 0.5,
                      }}
                      className="relative flex h-16 w-full items-center justify-center gap-5 rounded-2xl bg-[#f9fafd] p-4"
                    >
                      <img
                        className="relative size-8"
                        alt="Okb logo"
                        src="/img/dataunload/okb-logo-1.png"
                      />

                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('static.okb')}
                      </div>

                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative flex-[0_0_auto]"
                      >
                        <path
                          d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                          fill="#04CA84"
                          fillOpacity="0.12"
                        />
                        <path
                          d="M10.5 17L14 20.5L22 12.5"
                          stroke="#04CA84"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>

                    <motion.div
                      ref={ref13}
                      initial={{ opacity: 0, x: 150 }}
                      animate={inView3 ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 0.6,
                      }}
                      className="relative flex h-16 w-full items-center justify-center gap-5 rounded-2xl bg-[#f9fafd] p-4"
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative size-8"
                      >
                        <g clipPath="url(#clip0_9604_10474)">
                          <path
                            d="M6.21737 23.2362C7.26337 23.2362 8.11489 24.0463 8.11489 25.0441C8.11489 26.0419 7.26337 26.852 6.21737 26.852C5.17136 26.852 4.31985 26.0419 4.31985 25.0441C4.31985 24.0487 5.17136 23.2362 6.21737 23.2362ZM6.21737 22.3209C4.6448 22.3209 3.37109 23.5406 3.37109 25.0441C3.37109 26.5476 4.6448 27.7674 6.21737 27.7674C7.78994 27.7674 9.06365 26.5476 9.06365 25.0441C9.06365 23.5406 7.78994 22.3209 6.21737 22.3209Z"
                            fill="#4563FF"
                          />
                          <path
                            d="M10.7266 29.6987H20.2141V2.2373H10.7266V29.6987ZM15.4703 27.8678C13.8978 27.8678 12.6241 26.639 12.6241 25.1218C12.6241 23.6045 13.8978 22.3757 15.4703 22.3757C17.0429 22.3757 18.3166 23.6045 18.3166 25.1218C18.3166 26.639 17.0429 27.8678 15.4703 27.8678Z"
                            fill="#4563FF"
                          />
                          <path
                            d="M27.3267 2.2373H20.2109V29.6987H27.3267C28.6359 29.6987 29.6985 28.6735 29.6985 27.4102V4.52576C29.6985 3.26253 28.6359 2.2373 27.3267 2.2373ZM24.9547 27.8678C23.3822 27.8678 22.1084 26.639 22.1084 25.1218C22.1084 23.6045 23.3822 22.3757 24.9547 22.3757C26.5273 22.3757 27.801 23.6045 27.801 25.1218C27.801 26.639 26.5273 27.8678 24.9547 27.8678Z"
                            fill="#FF0029"
                          />
                          <path
                            d="M11.1992 3.15268V28.7833H3.3719C2.5868 28.7833 1.94876 28.1676 1.94876 27.4102V4.52576C1.94876 3.76827 2.5868 3.15268 3.3719 3.15268H11.1992ZM12.1479 2.2373H3.3719C2.06261 2.2373 1 3.26253 1 4.52576V27.4102C1 28.6735 2.06261 29.6987 3.3719 29.6987H12.1479V2.2373Z"
                            fill="#4563FF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9604_10474">
                            <rect
                              width="29"
                              height="27.5254"
                              fill="white"
                              transform="translate(1 2.2373)"
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('static.nbki')}
                      </div>

                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative size-8 animate-spin"
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="9"
                          stroke="#FAFAFA"
                          strokeWidth="2"
                        />
                        <path
                          d="M7 16C7 20.9706 11.0294 25 16 25C20.9706 25 25 20.9706 25 16C25 11.0294 20.9706 7 16 7"
                          stroke="url(#paint0_linear_9604_10483)"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_9604_10483"
                            x1="16"
                            y1="7"
                            x2="10.6862"
                            y2="5.65957"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3674FB" />
                            <stop
                              offset="1"
                              stopColor="#3674FB"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 self-stretch lg:gap-12">
        <motion.div
          ref={ref11}
          initial={{ opacity: 0, y: 50 }}
          animate={inView11 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 lg:w-[656px]"
        >
          <motion.div
            ref={ref12}
            initial={{ opacity: 0, y: 50 }}
            animate={inView12 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-5xl lg:leading-[60px]"
          >
            {t('advantages.title')}
          </motion.div>

          <motion.p
            ref={ref13}
            initial={{ opacity: 0, y: 50 }}
            animate={inView13 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
          >
            {t('static.advantagesDescription')}
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref14}
          initial={{ opacity: 0, y: 50 }}
          animate={inView14 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-start  gap-6 self-stretch lg:!flex-row"
        >
          <motion.div
            ref={ref15}
            initial={{ opacity: 0, x: -50 }}
            animate={inView15 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            className="relative flex flex-1 grow flex-col items-start gap-7 self-stretch overflow-hidden rounded-3xl bg-[#f9fafd] p-8 lg:p-10"
          >
            <motion.img
              ref={ref16}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView16 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/dataunload/frame-18-3.svg"
            />

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <motion.div
                ref={ref17}
                initial={{ opacity: 0, y: 30 }}
                animate={inView17 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('advantages.unifiedFormat.title')}
              </motion.div>

              <motion.p
                ref={ref18}
                initial={{ opacity: 0, y: 30 }}
                animate={inView18 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
              >
                {t('advantages.unifiedFormat.description')}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            ref={ref19}
            initial={{ opacity: 0, y: 50 }}
            animate={inView19 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
            className="relative flex flex-1 grow flex-col items-start gap-7 self-stretch overflow-hidden rounded-3xl bg-[#f9fafd] p-8 lg:p-10"
          >
            <motion.img
              ref={ref20}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView19 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/dataunload/frame-18.svg"
            />

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <motion.div
                ref={ref21}
                initial={{ opacity: 0, y: 30 }}
                animate={inView21 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('advantages.convenientSolution.title')}
              </motion.div>

              <motion.p
                ref={ref22}
                initial={{ opacity: 0, y: 30 }}
                animate={inView22 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
              >
                {t('advantages.convenientSolution.description')}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            ref={ref23}
            initial={{ opacity: 0, x: 50 }}
            animate={inView23 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
            className="relative flex flex-1 grow flex-col items-start gap-7 self-stretch overflow-hidden rounded-3xl bg-[#f9fafd] p-8 lg:p-10"
          >
            <motion.img
              ref={ref24}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView24 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/dataunload/frame-19.svg"
            />

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <motion.div
                ref={ref25}
                initial={{ opacity: 0, y: 30 }}
                animate={inView25 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.4 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('advantages.regularUpdates.title')}
              </motion.div>

              <motion.p
                ref={ref26}
                initial={{ opacity: 0, y: 30 }}
                animate={inView26 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.5 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
              >
                {t('advantages.regularUpdates.description')}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 self-stretch lg:gap-12">
        <motion.div
          ref={ref27}
          initial={{ opacity: 0, y: 50 }}
          animate={inView27 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 lg:w-[656px]"
        >
          <motion.div
            ref={ref28}
            initial={{ opacity: 0, y: 50 }}
            animate={inView28 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-5xl lg:leading-[60px]"
          >
            {t('features.title')}
          </motion.div>
        </motion.div>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-6 rounded-3xl lg:!flex-row">
          <div className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl py-12 pl-12 pr-[68px] lg:gap-12">
            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-7">
              <motion.div
                ref={ref29}
                initial={{ opacity: 0, y: 50 }}
                animate={inView29 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 lg:w-[560px]"
              >
                <motion.div
                  ref={ref30}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView30 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.control.title')}
                </motion.div>

                <motion.p
                  ref={ref31}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView31 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.control.description')}
                </motion.p>
              </motion.div>

              <motion.div
                ref={ref32}
                initial={{ opacity: 0, y: 50 }}
                animate={inView32 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 lg:w-[560px]"
              >
                <motion.div
                  ref={ref33}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView33 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.actualData.title')}
                </motion.div>

                <motion.p
                  ref={ref34}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView34 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.actualData.description')}
                </motion.p>
              </motion.div>

              <motion.div
                ref={ref35}
                initial={{ opacity: 0, y: 50 }}
                animate={inView35 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 lg:w-[560px]"
              >
                <motion.div
                  ref={ref36}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView36 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.timeSaving.title')}
                </motion.div>

                <motion.p
                  ref={ref37}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView37 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.timeSaving.description')}
                </motion.p>
              </motion.div>

              <motion.div
                ref={ref38}
                initial={{ opacity: 0, y: 50 }}
                animate={inView38 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
                className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 lg:w-[560px]"
              >
                <motion.div
                  ref={ref39}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView39 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.processAutomation.title')}
                </motion.div>

                <motion.p
                  ref={ref40}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView40 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.processAutomation.description')}
                </motion.p>
              </motion.div>
            </div>
          </div>
          <div className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl py-12 pl-12 pr-[68px] lg:gap-12">
            <img
              className="relative size-full self-stretch"
              alt="Screenshot"
              src="/img/dataunload/frame-21.svg"
            />
          </div>
        </div>
      </div>
      <motion.div
        ref={ref42}
        initial={{ opacity: 0, y: 50 }}
        animate={inView42 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-9 overflow-hidden rounded-[32px] bg-[#f9fafd] p-7"
      >
        {/* Removed missing SVG motion.img: /img/dataunload/vector-1-1.svg */}

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[88px] self-stretch p-7 lg:!flex-row lg:p-12">
          <motion.div
            ref={ref44}
            initial={{ opacity: 0, x: -50 }}
            animate={inView44 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative flex w-full flex-col items-start gap-7 lg:w-[520px]"
          >
            <motion.img
              ref={ref20}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView19 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/dataunload/frame-18-6.svg"
            />

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 lg:inline-flex">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                <motion.div
                  ref={ref46}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView46 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                  className="relative mt-[-1.00px] w-full text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:w-[520px]"
                >
                  {t('static.exportTitle')}
                </motion.div>

                <motion.p
                  ref={ref47}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView47 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('static.exportDescription')}
                </motion.p>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                <div className="h-7w-full relative flex items-center justify-center gap-6 lg:w-[520px]">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative size-4"
                    >
                      <path
                        d="M2.5 9L6 12.5L14 4.5"
                        stroke="#725DD6"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('static.equifax')}
                  </div>
                </div>

                <div className="h-7w-full relative flex items-center justify-center gap-6 lg:w-[520px]">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative size-4"
                    >
                      <path
                        d="M2.5 9L6 12.5L14 4.5"
                        stroke="#725DD6"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('static.okb')}
                  </div>
                </div>

                <div className="h-7w-full relative flex items-center justify-center gap-6 lg:w-[520px]">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative size-4"
                    >
                      <path
                        d="M2.5 9L6 12.5L14 4.5"
                        stroke="#725DD6"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('static.nbki')}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <svg
            width="1"
            height="404"
            viewBox="0 0 1 404"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative hidden w-px self-stretch lg:block"
          >
            <path d="M0.5 0V404" stroke="#E3E5E8" />
          </svg>

          <motion.div
            ref={ref48}
            initial={{ opacity: 0, x: 50 }}
            animate={inView48 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
            className="relative flex w-full flex-col items-start justify-center gap-7 lg:w-[520px]"
          >
            <motion.img
              ref={ref49}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView49 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/dataunload/frame-18-2.svg"
            />

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 lg:w-[520px]">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <motion.div
                  ref={ref50}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView50 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="relative mt-[-1.00px] self-stretch text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('pricing.title')}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView50 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  <span className="text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    {t('pricing.description')}
                  </span>
                  <span className="text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"></span>
                </motion.p>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-6 lg:w-[520px]">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-1.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative size-4"
                    >
                      <path
                        d="M2.5 9L6 12.5L14 4.5"
                        stroke="#00CB82"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('pricing.payOnlyWhenUsing')}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-4">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                {t('pricing.price')}
              </div>

              <div className="relative w-fit whitespace-nowrap text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                {t('pricing.perMonth')}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView42 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-2.5 self-stretch overflow-hidden rounded-[32px] bg-violet-50 p-7 lg:!flex-row lg:p-12"
        >
          <div className="relative flex flex-1 grow flex-col items-start gap-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView42 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
              className="relative mt-[-1.00px] self-stretch text-[32px] font-medium leading-10 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]"
            >
              {t('cta.title')}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView42 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
              className="relative w-full text-xl font-normal leading-7 tracking-normal text-[#ffffff] opacity-60 [font-family:'Roboto',Helvetica] lg:w-[752px]"
            >
              {t('cta.description')}
            </motion.p>
          </div>

          <button
            onClick={handleContactClick}
            className="all-[unset] relative mt-3 box-border inline-flex w-full flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-white px-8 py-4 lg:mt-0 lg:w-fit"
          >
            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {t('cta.buttonText')}
            </div>
          </button>
        </motion.div>
      </motion.div>
      <Integrations />
      <Feedback />
      <Trust />
    </div>
  );
};
