import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ArrowLineDown } from 'shared/icons/ArrowLineDown.tsx';
import { RoutesPath } from 'shared/routes-path';

export const SectionComponentNode = () => {
  const { t } = useTranslation(['home']);
  const navigate = useNavigate();

  const handleP2PClick = () => {
    navigate(RoutesPath.P2P);
  };

  const handleIslamFinansClick = () => {
    navigate(RoutesPath.ISLAMFINANCE);
  };

  const ref32 = useRef<HTMLSpanElement>(null);
  const ref33 = useRef<HTMLSpanElement>(null);
  const ref34 = useRef<HTMLDivElement>(null);
  const ref34r = useRef<HTMLDivElement>(null);
  const ref35 = useRef<HTMLDivElement>(null);
  const ref36 = useRef<HTMLDivElement>(null);
  const inView32 = useInView(ref32, { once: true, margin: '-100px' });
  const inView33 = useInView(ref33, { once: true, margin: '-100px' });
  const inView34 = useInView(ref34, { once: true, margin: '-100px' });
  const inView34r = useInView(ref34r, { once: true, margin: '-100px' });
  const inView35 = useInView(ref35, { once: true, margin: '-100px' });
  const inView36 = useInView(ref36, { once: true, margin: '-100px' });
  return (
    <section
      className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-7"
      aria-labelledby="alt-ethical-models"
    >
      <h2
        id="alt-ethical-models"
        className="text-adaptive-40 relative mt-[-1.00px] w-fit font-normal leading-10 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
      >
        <motion.span
          id="animate_32"
          ref={ref32}
          initial={{ opacity: 0, x: -40 }}
          animate={inView32 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-medium leading-[0.1px] text-[#9ea7bb]"
        >
          {t('alternativeModels.title').split(' ')[0]}
          <br />
        </motion.span>
        <motion.span
          id="animate_33"
          ref={ref33}
          initial={{ opacity: 0, x: 40 }}
          animate={inView33 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="leading-adaptive-48 font-medium text-[#1c222f]"
        >
          {t('alternativeModels.title').split(' ').slice(1).join(' ')}
        </motion.span>
      </h2>

      <div className="relative flex h-[var(--size-520)] w-full items-start gap-4">
        <div className="relative w-1/2 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] xl:w-[var(--size-686)]">
          <div className="relative h-[var(--size-682)]">
            <svg
              width="1077"
              height="1131"
              viewBox="0 0 1077 1131"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-0 h-[var(--size-520)] w-full xl:w-[var(--size-686)]"
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

            <motion.div
              id="animate_33"
              ref={ref34}
              initial={{ opacity: 0, y: 40 }}
              animate={inView34 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute left-[var(--pos-62)] top-[var(--pos-80)] flex  min-w-[var(--size-304)] flex-col items-center justify-center overflow-hidden rounded-[32px] bg-green-60"
            >
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-5 self-stretch p-5">
                <svg
                  width="694"
                  height="594"
                  viewBox="0 0 694 594"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[-49px] top-3 h-[var(--size-330)] w-full xl:w-[var(--size-345)]"
                >
                  <g opacity="0.4" filter="url(#filter0_f_9017_4394)">
                    <path
                      d="M348.173 228.069C368.82 192.447 421.344 198.383 445.024 205.804C566.981 282.524 430.886 392.244 356.015 393.805C281.144 395.365 177.472 307.862 204.589 261.077C231.706 214.293 322.364 272.597 348.173 228.069Z"
                      fill="#3573FC"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_9017_4394"
                      x="0"
                      y="0"
                      width="693.986"
                      height="594"
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
                        result="effect1_foregroundBlur_9017_4394"
                      />
                    </filter>
                  </defs>
                </svg>

                <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                  <p className="relative w-fit text-base font-semibold leading-4 tracking-normal text-gray-90 opacity-0 [font-family:'Inter',Helvetica]">
                    <span className="leading-6 text-[#9ea7bb]">
                      {t('alternativeModels.p2pUI.greeting')}
                    </span>

                    <span className="leading-6 text-[#1c222f]">
                      {' '}
                      {t('alternativeModels.p2pUI.userName')}
                    </span>
                  </p>

                  <div className="relative size-8 rounded-3xl [background:url(/img/frame-1948755022.png)_50%_50%_/_cover]" />
                </div>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-center">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#ffffff] opacity-80 [font-family:'Inter',Helvetica]">
                    {t('alternativeModels.p2pUI.balance')}
                  </div>

                  <div className="text-adaptive-28 relative w-fit whitespace-nowrap text-center font-medium leading-10 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                    {t('alternativeModels.p2pUI.balanceAmount')}
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] items-start gap-3">
                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2 rounded-2xl bg-[#ffffff29] px-2.5 py-1.5">
                    <ArrowLineDown
                      className="relative size-3.5"
                      direction="up"
                      color="white"
                    />

                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-white [font-family:'Inter',Helvetica]">
                      {t('alternativeModels.p2pUI.withdraw')}
                    </div>
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2 rounded-2xl bg-[#ffffff29] px-2.5 py-1.5">
                    <ArrowLineDown
                      className="relative size-3.5"
                      direction="down"
                      color="white"
                    />

                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-white [font-family:'Inter',Helvetica]">
                      {t('alternativeModels.p2pUI.topUp')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch rounded-3xl bg-[#ffffff] p-2.5">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                  <div className="relative flex h-[var(--size-72)] w-full items-start gap-4 self-stretch overflow-hidden rounded-2xl bg-[#f2f5ff] p-1">
                    <div className="relative flex flex-1 grow flex-col items-start p-3">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                        {t('alternativeModels.p2pUI.myInvestments')}
                      </div>

                      <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('alternativeModels.p2pUI.investmentAmount')}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-col items-start rounded-xl bg-[#eaedf7] p-3 xl:w-[var(--size-88)]">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                        {t('alternativeModels.p2pUI.interest')}
                      </div>

                      <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        1 200₽
                      </div>
                    </div>
                  </div>

                  <div className="relative flex h-[var(--size-72)] w-full items-start gap-4 self-stretch rounded-2xl bg-[#f2f5ff] p-1">
                    <div className="relative flex flex-1 grow flex-col items-start p-3">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('alternativeModels.p2pUI.myLoans')}
                      </div>

                      <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        134 000₽
                      </div>
                    </div>

                    <div className="relative flex w-full flex-col items-start rounded-xl bg-[#eaedf7] p-3 xl:w-[var(--size-88)]">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('alternativeModels.p2pUI.payment')}
                      </div>

                      <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        9 000₽
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 [font-family:'Inter',Helvetica]">
                    {t('alternativeModels.p2pUI.investments')}
                  </div>

                  <div className="relative flex h-24 w-full items-start gap-4 self-stretch rounded-2xl bg-[#f2f5ff] p-1">
                    <div className="relative flex flex-1 grow flex-col items-start gap-2 p-3">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        80 000₽
                      </div>

                      <div className="relative flex w-full flex-[0_0_auto] items-center gap-3 self-stretch">
                        <div className="relative flex flex-1 grow flex-col items-start">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('alternativeModels.p2pUI.interest')}
                          </div>

                          <div className="relative w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            14%
                          </div>
                        </div>

                        <div className="relative flex flex-1 grow flex-col items-start">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('alternativeModels.p2pUI.interest')}
                          </div>

                          <div className="relative w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            14%
                          </div>
                        </div>

                        <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2 rounded-2xl bg-gray-90 px-2.5 py-1.5">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-white [font-family:'Inter',Helvetica]">
                            {t('alternativeModels.p2pUI.invest')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex h-24 w-60 items-start gap-4 rounded-2xl bg-[#f2f5ff] p-1">
                    <div className="relative flex flex-1 grow flex-col items-start gap-2 p-3">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        80 000₽
                      </div>

                      <div className="relative flex w-full flex-[0_0_auto] items-center gap-3 self-stretch">
                        <div className="relative flex flex-1 grow flex-col items-start">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('alternativeModels.p2pUI.interest')}
                          </div>

                          <div className="relative w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            14%
                          </div>
                        </div>

                        <div className="relative flex flex-1 grow flex-col items-start">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('alternativeModels.p2pUI.interest')}
                          </div>

                          <div className="relative w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            14%
                          </div>
                        </div>

                        <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2 rounded-2xl bg-gray-90 px-2.5 py-1.5">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-white [font-family:'Inter',Helvetica]">
                            {t('alternativeModels.p2pUI.invest')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <svg
              width="675"
              height="745"
              viewBox="0 0 675 745"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[var(--pos-57)] top-0 h-[var(--size-520)] w-full xl:w-[var(--size-629)]"
            >
              <g opacity="0.32" filter="url(#filter0_f_9018_4612)">
                <path
                  d="M399.512 346.545C450.592 351.671 470.87 414.38 474.623 445.094C450.225 623.077 255.595 524.946 215.306 440.711C175.017 356.477 221.07 193.713 288.157 200.445C355.245 207.177 335.661 340.138 399.512 346.545Z"
                  fill="#9FA7BC"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_9018_4612"
                  x="0"
                  y="0"
                  width="674.866"
                  height="745"
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
                    result="effect1_foregroundBlur_9018_4612"
                  />
                </filter>
              </defs>
            </svg>

            <motion.div
              id="animate_34_right"
              ref={ref34r}
              initial={{ opacity: 0, x: 40 }}
              animate={inView34r ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute left-[var(--pos-298)] top-[var(--pos-138)] inline-flex flex-col items-start justify-center gap-4 rounded-[32px] bg-white p-7"
            >
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] xl:w-[var(--size-180)]">
                  {t('alternativeModels.p2pUI.totalIncome')}
                </div>

                <div className="relative w-full text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[var(--size-264)]">
                  1,567,000₽
                </div>
              </div>

              <div className="relative inline-flex h-[var(--size-154)] items-end">
                <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                  <div className="relative h-[var(--size-76)] w-8 rounded-3xl bg-[#f2f4fb]" />

                  <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    01.05
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                  <div className="relative h-[var(--size-86)] w-8 rounded-3xl bg-[#f2f4fb]" />

                  <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    02.05
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                  <div className="relative h-[var(--size-105)] w-8 rounded-3xl bg-[#f2f4fb]" />

                  <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    03.05
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                  <div className="relative h-[var(--size-120)] w-8 rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />

                  <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    04.05
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                  <div className="relative h-[var(--size-91)] w-8 rounded-3xl bg-[#f2f4fb]" />

                  <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    06.05
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                  <div className="relative h-[var(--size-98)] w-8 rounded-3xl bg-[#f2f4fb]" />

                  <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    07.05
                  </div>
                </div>
              </div>

              <svg
                width="329"
                height="66"
                viewBox="0 0 329 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-[var(--pos-106)] h-[var(--size-104)] w-full xl:w-[var(--size-328)]"
              >
                <path
                  d="M0.246945 59.3598L24.7234 53.1256C29.1831 51.9896 33.916 52.8281 37.7141 55.427L46.9091 61.7187C53.991 66.5645 63.6343 64.9642 68.7713 58.0906L78.6249 44.9058C82.3248 39.9552 88.544 37.5767 94.6031 38.795L123.082 44.5216C128.474 45.6058 133.895 42.7984 136.121 37.7694L140.075 28.8355C142.413 23.5523 149.804 23.2668 152.543 28.3538V28.3538C155.376 33.6154 163.09 33.0811 165.171 27.4791L171.373 10.7801C176.263 -2.38534 194.943 -2.21709 199.596 11.0343L213.169 49.699C215.05 55.0563 222.63 55.0476 224.498 49.686V49.686C226.389 44.2592 234.091 44.3384 235.871 49.8029L237.582 55.0591C239.866 62.0732 249.68 62.3662 252.378 55.5009L262.421 29.9462C265.432 22.2846 275.8 21.1399 280.41 27.9602V27.9602C283.668 32.7804 290.285 33.9149 294.963 30.4551L328.405 5.71819"
                  stroke="url(#paint0_linear_9018_4609)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_9018_4609"
                    x1="0.246945"
                    y1="43.5681"
                    x2="328.405"
                    y2="43.5681"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="0.269231" stopColor="#00CB82" />
                    <stop offset="0.692308" stopColor="#00CB82" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute left-[var(--pos-180)] top-[var(--pos-131)] size-3 rounded-md border-2 border-solid border-[#00cb82] bg-[#ffffff]" />
            </motion.div>
          </div>
        </div>

        <div className="relative flex w-1/2 flex-1 grow flex-col items-start justify-center gap-5 self-stretch">
          <motion.div
            id="animate_35_left"
            ref={ref35}
            initial={{ opacity: 0, x: -40 }}
            animate={inView35 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            onClick={handleP2PClick}
            className="group relative mx-[-2.00px] mt-[-2.00px] flex w-full flex-1 grow cursor-pointer items-center gap-7 self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-transparent bg-[#f9fafd] p-8 hover:border-[#3573fc] hover:bg-[#f5f7ff] xl:p-10"
          >
            <div className="relative flex flex-1 grow flex-col items-start gap-2">
              <h3 className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                {t('cards.p2p.title')}
              </h3>

              <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                {t('cards.p2p.desc')}
              </p>
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
          </motion.div>

          <motion.div
            id="animate_36_right"
            ref={ref36}
            initial={{ opacity: 0, x: 40 }}
            animate={inView36 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            onClick={handleIslamFinansClick}
            className="group relative flex w-full flex-1 grow cursor-pointer items-center gap-7 self-stretch overflow-hidden rounded-3xl border-2 border-solid border-transparent bg-[#f9fafd] p-8 hover:border-[#3573fc]  hover:bg-[#f5f7ff] xl:p-10"
          >
            <div className="relative flex flex-1 grow flex-col items-start gap-2">
              <h3 className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                {t('cards.islamFinance.title')}
              </h3>

              <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                {t('cards.islamFinance.desc')}
              </p>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
