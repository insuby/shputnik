import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useFeedbackForm } from 'widgets/feedback-form';
import { Feedback } from 'widgets/feedback.tsx';

import { RoutesPath } from 'shared/routes-path';
import { CheckIcon } from 'shared/ui';

export const MainMobile = () => {
  const { t } = useTranslation(['home']);
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };

  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const inViews = refs.map((ref) =>
    useInView(ref, { once: true, margin: '-100px' }),
  );

  return (
    <>
      <div className="relative flex flex-col items-start">
        <div className="relative flex w-full  items-center gap-2.5 px-3 py-0">
          <div className="relative flex flex-1 grow flex-col items-center self-stretch overflow-hidden rounded-[32px] bg-[#ffffff] px-5 pt-9">
            <svg
              width="1688"
              height="1367"
              viewBox="0 0 1688 1367"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[-444px] top-[147px] h-[1060px] w-[1108px]"
            >
              <g opacity="0.12" filter="url(#filter0_f_9181_519)">
                <path
                  d="M847.72 462.293C913.979 347.979 1082.53 367.028 1158.53 390.843C1549.9 637.044 1113.16 989.147 872.885 994.155C632.615 999.164 299.921 718.356 386.943 568.219C473.966 418.083 764.896 605.186 847.72 462.293Z"
                  fill="#3573FC"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_9181_519"
                  x="1.52621e-05"
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
                    result="effect1_foregroundBlur_9181_519"
                  />
                </filter>
              </defs>
            </svg>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-6 self-stretch">
              <p className="relative  mx-auto mt-[-1.00px]  max-w-[500px] self-stretch text-center text-4xl font-normal leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                <span className="font-medium leading-[44px] text-[#1c222f]">
                  {t('hero.titleA')}{' '}
                </span>

                <span className="font-medium leading-[44px] text-[#3573fc]">
                  {t('hero.titleB')}{' '}
                </span>

                <span className="font-medium leading-[44px] text-[#1c222f]">
                  {t('hero.titleC')}
                </span>
              </p>

              <p className="relative mx-auto max-w-[500px] self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#929cb3] [font-family:'Roboto',Helvetica]">
                {t('hero.description')}
              </p>
            </div>

            <motion.div
              id="animate_phone"
              ref={refs[2]}
              initial={{ opacity: 0, y: 40 }}
              animate={inViews[2] ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.05,
                ease: 'easeOut',
              }}
              className="!scale-60 relative bottom-[-30px] left-0 flex flex-col gap-4 rounded-t-[40px] border-[6px] border-solid border-gray-90 bg-white p-7"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-[24px] font-semibold leading-[32px] text-gray-90 [font-family:'Inter',Helvetica]">
                  {t('heroCards.greeting')} {t('heroCards.userName')}
                </div>

                <div className="relative size-8">
                  <div className="absolute left-1 top-4 h-0.5 w-5 rounded bg-gray-40" />
                  <div className="absolute left-1 top-2 h-0.5 w-5 rounded bg-gray-40" />
                  <div className="absolute left-1 top-6 h-0.5 w-5 rounded bg-gray-40" />
                </div>
              </div>

              <div className="flex w-full flex-col gap-4 rounded-[32px] bg-[#F2F5FF] p-6">
                <div className="flex w-full items-stretch gap-4">
                  <div
                    className="flex size-[102px] items-center justify-center rounded-2xl bg-white bg-cover bg-center p-4 xl:size-[140px]"
                    style={{
                      backgroundImage: "url('/img/Frame 1948755022.png')",
                    }}
                  />
                  <div className="relative flex size-[102px] items-center justify-center gap-4 rounded-2xl bg-white p-4 xl:size-[140px]">
                    <div className="absolute -top-2 right-0 ">
                      <CheckIcon
                        className="inline-flex items-center justify-center rounded-[100px] p-1.5"
                        bgColor="#00CB82"
                        iconColor="#FFFFFF"
                      />
                    </div>

                    <div className="flex w-full flex-col items-center justify-around gap-3">
                      <div className="text-center text-sm text-gray-40 [font-family:'Roboto',Helvetica]">
                        {t('heroCards.approvalTitle')}
                      </div>
                      <div className="text-center text-[28px] font-medium leading-10 text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('heroCards.approvalAmount')}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full items-stretch gap-4">
                  <div className="flex size-[102px] flex-col justify-center gap-2 rounded-2xl bg-white p-4 xl:size-[140px]">
                    <div className="text-center text-sm text-gray-40 [font-family:'Roboto',Helvetica]">
                      {t('heroCards.scoreTitle')}
                    </div>
                    <div className="text-center text-[28px] font-medium leading-10 text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('heroCards.scoreValue')}
                    </div>
                  </div>
                  <div className="flex size-[102px] items-center justify-center rounded-2xl bg-white p-4 xl:size-[140px]">
                    <svg
                      width="112"
                      height="92"
                      viewBox="0 0 112 92"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 90V62.7266M14 90V55.5135M26 90V42.5299M38 90V2M50 90V16.2703M62 90V48.3784V6.75676M74 90V25.7838M86 90V55.5135M98 90V36.4865M110 90V55.5135"
                        stroke="url(#paint0_linear_8964_128)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_8964_128"
                          x1="-1.78"
                          y1="71.96"
                          x2="114.319"
                          y2="72.6227"
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
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-9 self-stretch p-4">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 self-stretch">
          <div className="relative mt-[-1.00px] self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
            {t('specialize.weSpecialize')}
          </div>

          <p className="relative self-stretch text-center text-4xl font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            <span className="leading-[44px] text-[#1c222f]">
              {t('specialize.software')}

              <br />
            </span>

            <span className="leading-[44px] text-[#9ea7bb]">
              {t('specialize.forLending')}
            </span>
          </p>
        </div>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
          <div className="relative h-[420px] w-full self-stretch overflow-hidden rounded-[32px] bg-[#f9fafc]">
            <svg
              width="1077"
              height="1131"
              viewBox="0 0 1077 1131"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[97px] top-[49px] h-[464px] w-[496px]"
            >
              <g opacity="0.32" filter="url(#filter0_f_9181_660)">
                <path
                  d="M464.894 521.819C440.801 465.832 494.233 408.667 523.96 387.083C722.805 309.922 732.997 568.509 668.74 658.847C604.482 749.185 408.97 795.098 377.327 721.567C345.684 648.036 495.01 591.802 464.894 521.819Z"
                  fill="#3573FC"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_9181_660"
                  x="-3.05339e-05"
                  y="9.16017e-05"
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
                    result="effect1_foregroundBlur_9181_660"
                  />
                </filter>
              </defs>
            </svg>

            <div className="relative  left-[-23px] m-auto w-fit">
              <div className="relative left-[-23px] top-[47px] flex h-[261px] w-[220px] flex-col items-center justify-center gap-[16.28px] rounded-[21.71px] bg-white p-[10.86px]">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[5.43px] self-stretch">
                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[13.57px] self-stretch px-[10.86px] pb-[10.86px] pt-[8.14px]">
                    <div className="relative mt-[-0.68px] self-stretch text-[16.3px] font-medium leading-[21.7px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('microcredit.apply')}
                    </div>

                    <div className="relative mr-[-0.11px] flex w-[173.69px] flex-[0_0_auto] flex-col items-start gap-[5.43px]">
                      <svg
                        width="178"
                        height="19"
                        viewBox="0 0 178 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative ml-[-2.04px] mr-[-1.36px] mt-[-2.04px] h-[19px] w-full self-stretch"
                      >
                        <path
                          d="M2.03574 6.78558L175.75 6.7856"
                          stroke="#F2F5FF"
                          strokeWidth="2.71392"
                          strokeLinecap="round"
                        />
                        <path
                          d="M2.03574 6.78558L112.643 6.78559"
                          stroke="#00CB82"
                          strokeWidth="4.07088"
                          strokeLinecap="round"
                        />
                        <g filter="url(#filter0_d_9181_667)">
                          <circle
                            cx="111.286"
                            cy="6.78566"
                            r="4.07143"
                            fill="#00CB82"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_9181_667"
                            x="101.786"
                            y="-5.26976e-05"
                            width="19"
                            height="19"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="2.71392" />
                            <feGaussianBlur stdDeviation="2.71392" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.0156863 0 0 0 0 0.792157 0 0 0 0 0.513726 0 0 0 0.2 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_9181_667"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_9181_667"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>

                      <div className="relative h-[16.28px] w-full self-stretch">
                        <div className="absolute left-0 top-0 whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          0
                        </div>

                        <div className="absolute left-[89px] top-0 whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          122 000
                        </div>
                      </div>
                    </div>

                    <div className="relative mr-[-0.11px] flex w-[173.69px] flex-[0_0_auto] flex-col items-start gap-[5.43px]">
                      <svg
                        width="178"
                        height="19"
                        viewBox="0 0 178 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative ml-[-2.04px] mr-[-1.36px] mt-[-2.04px] h-[19px] w-full self-stretch"
                      >
                        <path
                          d="M2.03574 6.78583H175.75"
                          stroke="#F2F5FF"
                          strokeWidth="2.71392"
                          strokeLinecap="round"
                        />
                        <path
                          d="M2.03574 6.78583H62.4286"
                          stroke="#00CB82"
                          strokeWidth="4.07088"
                          strokeLinecap="round"
                        />
                        <g filter="url(#filter0_d_9181_675)">
                          <circle
                            cx="62.4286"
                            cy="6.78566"
                            r="4.07143"
                            fill="#00CB82"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_9181_675"
                            x="52.9286"
                            y="-5.26976e-05"
                            width="19"
                            height="19"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="2.71392" />
                            <feGaussianBlur stdDeviation="2.71392" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.0156863 0 0 0 0 0.792157 0 0 0 0 0.513726 0 0 0 0.2 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_9181_675"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_9181_675"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>

                      <div className="relative h-[16.28px] w-full self-stretch">
                        <div className="absolute left-0 top-0 whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          0
                        </div>

                        <div className="absolute left-[54px] top-0 whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          14
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-[5.43px] self-stretch">
                    <div className="relative flex flex-1 grow flex-col items-start rounded-[13.57px] bg-[#f6f8ff] px-[10.86px] py-[8.14px]">
                      <div className="relative mt-[-0.68px] w-fit whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('microcredit.amount')}
                      </div>

                      <div className="relative mr-[-2.23px] w-fit whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        42 000₽
                      </div>
                    </div>

                    <div className="relative flex flex-1 grow flex-col items-start rounded-[13.57px] bg-[#f6f8ff] px-[10.86px] py-[8.14px]">
                      <div className="relative mt-[-0.68px] w-fit whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('microcredit.term')}
                      </div>

                      <div className="relative mr-[-0.23px] w-fit whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('microcredit.termValue')}
                      </div>
                    </div>

                    <div className="relative flex flex-1 grow flex-col items-start rounded-[13.57px] bg-[#f6f8ff] px-[10.86px] py-[8.14px]">
                      <div className="relative mt-[-0.68px] w-fit whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('microcredit.rate')}
                      </div>

                      <div className="relative w-fit whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        2.5%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex h-[32.57px] w-full items-center justify-center gap-[21.71px] self-stretch rounded-[16.28px] bg-gray-90 px-[21.71px] py-[8.14px]">
                  <div className="relative mt-[-0.68px] w-[111.27px] self-stretch whitespace-nowrap text-center text-[10.9px] font-medium leading-[16.3px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
                    {t('microcredit.applyLoan')}
                  </div>
                </div>
              </div>
              <div className="relative left-[115px] top-[-161px] flex h-[277px] w-[173px] flex-col items-center justify-center gap-[8.14px] rounded-[21.71px] bg-white p-[10.86px]">
                <div className="relative mt-[-0.24px] inline-flex flex-[0_0_auto] items-center gap-[6.78px] rounded-[67.85px] p-[8.14px]">
                  <div className="relative size-[124.84px]">
                    <svg
                      width="60"
                      height="125"
                      viewBox="0 0 60 125"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-0 top-0 h-[125px] w-[60px]"
                    >
                      <path
                        d="M59.7827 2.67636C59.7827 4.1359 58.6378 5.33088 57.1899 5.46498C28.1633 8.15349 5.43479 32.6621 5.43479 62.5C5.43479 92.3378 28.1631 116.846 57.1896 119.534C58.6377 119.669 59.7827 120.864 59.7827 122.323C59.7827 123.879 58.4891 125.126 56.9456 124.99C25.0297 122.169 0 95.2692 0 62.5C4.84319e-06 29.7308 25.0299 2.83123 56.946 0.0102177C58.4893 -0.126193 59.7827 1.12123 59.7827 2.67636Z"
                        fill="#00CB82"
                      />
                    </svg>

                    <svg
                      width="60"
                      height="74"
                      viewBox="0 0 60 74"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-[65px] top-[51px] h-[74px] w-[60px]"
                    >
                      <path
                        d="M56.0378 0.0944727C57.574 -0.318702 59.1419 0.664287 59.3668 2.24463C59.784 5.17705 60.0001 8.17458 60.0001 11.2228C60.0001 44.1111 34.8793 71.1084 2.84736 73.9398C1.29824 74.0767 0 72.8246 0 71.2636C0 69.7986 1.1491 68.5991 2.60245 68.4645C31.7345 65.7661 54.5455 41.1691 54.5455 11.2228C54.5455 8.51922 54.3591 5.85936 53.9991 3.25522C53.803 1.83622 54.6592 0.465258 56.0378 0.0944727Z"
                        fill="#3573FC"
                      />
                    </svg>

                    <svg
                      width="15"
                      height="23"
                      viewBox="0 0 15 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-[107px] top-[23px] h-[23px] w-[15px]"
                    >
                      <path
                        d="M0.811765 0.807007C1.95374 -0.33928 3.83285 -0.262424 4.81444 1.02487C9.02123 6.54175 12.3453 12.7726 14.5755 19.5049C15.0595 20.9659 14.1837 22.5069 12.7021 22.9054C11.2524 23.2953 9.76571 22.4433 9.28618 21.0158C7.27702 15.0351 4.32098 9.49182 0.596858 4.56553C-0.263783 3.42706 -0.194981 1.81755 0.811765 0.807007Z"
                        fill="#E74951"
                      />
                    </svg>

                    <svg
                      width="41"
                      height="21"
                      viewBox="0 0 41 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-[65px] top-0 h-[21px] w-10"
                    >
                      <path
                        d="M0 2.70254C0 1.13225 1.30493 -0.127393 2.86329 0.0103117C17.048 1.26374 29.8854 7.22673 39.8139 16.3331C40.9341 17.3606 40.9317 19.1122 39.8587 20.1892C38.7884 21.2635 37.058 21.2599 35.9364 20.2396C26.9525 12.0673 15.3887 6.70098 2.61704 5.51825C1.15502 5.38286 0 4.1763 0 2.70254Z"
                        fill="#FBAB00"
                      />
                    </svg>

                    <div className="absolute left-[22px] top-[41px] inline-flex h-[42px] flex-col items-center gap-[1.36px]">
                      <div className="relative mt-[-0.68px] w-fit whitespace-nowrap text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                        {t('microcredit.total')}
                      </div>

                      <div className="relative mb-[-0.45px] w-fit whitespace-nowrap text-center text-[19px] font-medium leading-[27.1px] tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                        122,000₽
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[6.78px] rounded-[13.57px] bg-[#f6f8ff] p-[13.57px]">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[8.14px]">
                    <div className="relative size-[5.43px] rounded-[2.71px] bg-blue-50" />

                    <div className="relative mt-[-0.68px] w-[48.85px] text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      {t('chart.current')}
                    </div>

                    <div className="relative mt-[-0.68px] w-[48.85px] text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      48,456₽
                    </div>
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[8.14px]">
                    <div className="relative size-[5.43px] rounded-[2.71px] bg-green-50" />

                    <div className="relative mt-[-0.68px] w-[48.85px] text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      {t('chart.main')}
                    </div>

                    <div className="relative mt-[-0.68px] w-[48.85px] text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      122,000₽
                    </div>
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[8.14px]">
                    <div className="relative size-[5.43px] rounded-[2.71px] bg-yellow-50" />

                    <div className="relative mt-[-0.68px] w-[48.85px] text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      {t('chart.interest')}
                    </div>

                    <div className="relative mt-[-0.68px] w-[48.85px] text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      4,000₽
                    </div>
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[8.14px]">
                    <div className="relative size-[5.43px] rounded-[2.71px] bg-red-50" />

                    <div className="relative mt-[-0.68px] w-[48.85px] text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      {t('chart.penalty')}
                    </div>

                    <div className="relative mt-[-0.68px] w-[48.85px] text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      2,700₽
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <svg
              width="669"
              height="744"
              viewBox="0 0 669 744"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-0 h-[420px] w-[380px]"
            >
              <g opacity="0.24" filter="url(#filter0_f_9181_694)">
                <path
                  d="M391.246 387.48C412.942 414.685 392.121 454.21 378.999 470.571C281.108 542.996 236.57 402.123 258.359 342.701C280.148 283.278 380.908 228.564 409.402 264.295C437.897 300.026 364.126 353.472 391.246 387.48Z"
                  fill="#9FA7BC"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_9181_694"
                  x="0"
                  y="0"
                  width="669"
                  height="743.726"
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
                    stdDeviation="126.434"
                    result="effect1_foregroundBlur_9181_694"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafc] p-8">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
              <p className="relative mt-[-1.00px] self-stretch text-[28px] font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                <span className="font-medium leading-9 text-[#1c222f]">
                  {t('products.microfinance.title').split('\n')[0]}
                  <br />
                  {t('products.microfinance.title').split('\n')[1]}
                </span>
              </p>

              <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                {t('products.microfinance.description')}
              </p>
            </div>

            <Link
              to={RoutesPath.MICROCREDIT}
              className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4"
            >
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]">
                {t('products.microfinance.more')}
              </div>

              <svg
                className="relative size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.5 3.75L13.75 10L7.5 16.25"
                  stroke="#3573FC"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-9 self-stretch p-4">
        <div className="relative mt-[-1.00px] self-stretch text-4xl font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
          {t('products.classic.title')}
        </div>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-4 self-stretch">
          <div className="relative h-[420px] w-full self-stretch overflow-hidden rounded-[32px] bg-blue-50">
            <div className="absolute left-[-222px] top-[-255px] h-[904px] w-full xl:w-[1114px]">
              <svg
                width="808"
                height="874"
                viewBox="0 0 808 874"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-[333px] h-[571px] w-full xl:w-[611px]"
              >
                <g opacity="0.32" filter="url(#filter0_f_9181_835)">
                  <path
                    d="M313.244 383.268C283.607 314.398 349.334 244.079 385.902 217.528C630.502 122.612 643.04 440.702 563.996 551.827C484.952 662.953 244.451 719.431 205.527 628.979C166.603 538.528 350.29 469.355 313.244 383.268Z"
                    fill="#1C222F"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_9181_835"
                    x="0"
                    y="0"
                    width="807.419"
                    height="874"
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
                      result="effect1_foregroundBlur_9181_835"
                    />
                  </filter>
                </defs>
              </svg>

              <svg
                width="1012"
                height="807"
                viewBox="0 0 1012 807"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[398px] top-0 h-[682px] w-full xl:w-[716px]"
              >
                <g opacity="0.32" filter="url(#filter0_f_9181_836)">
                  <path
                    d="M505.932 261.319C547.13 186.048 656.863 195.734 706.579 209.985C964.587 363.598 686.644 599.143 530.734 606.219C374.823 613.294 154.36 436.28 208.469 337.422C262.577 238.564 454.434 355.407 505.932 261.319Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_9181_836"
                    x="0"
                    y="0"
                    width="1012"
                    height="806.538"
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
                      result="effect1_foregroundBlur_9181_836"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="absolute left-[246px] top-[279px] inline-flex items-center overflow-hidden rounded-[17.55px_17.55px_0px_0px] bg-[#f6f8fd]">
                <div className="relative flex w-[439px] w-full flex-col items-start items-center justify-center gap-[17.55px] whitespace-nowrap bg-[#ffffff] p-[21.94px] xl:w-[289px]">
                  <div className="relative mt-[-0.55px] self-stretch text-[17.5px] font-medium leading-[21.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('products.classic.calculator')}
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-center gap-[8.77px] self-stretch rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                    <div className="relative flex flex-1 grow flex-col items-start gap-[1.1px]">
                      <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                        {t('products.classic.dealer')}
                      </div>

                      <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('products.classic.dealerName')}
                      </div>
                    </div>

                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative size-5 xl:size-[13.16px]"
                    >
                      <path
                        d="M11.375 5.25029L7.00001 9.62526L2.62504 5.25029"
                        stroke="#9FA7BC"
                        strokeWidth="1.09677"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="relative inline-flex w-full flex-[0_0_auto] flex-col items-start gap-[8.77px]">
                    <div className="relative inline-flex flex-[0_0_auto] items-start gap-[6.58px]">
                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[5.48px] rounded-[54.84px] bg-gray-90 px-[10.97px] py-[5.48px]">
                        <div className="relative mt-[-0.55px] w-fit whitespace-nowrap text-[11px] font-normal leading-[15.4px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
                          {t('products.classic.new')}
                        </div>
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[5.48px] rounded-[54.84px] bg-[#f7f9ff] px-[10.97px] py-[5.48px]">
                        <div className="relative mt-[-0.55px] w-fit whitespace-nowrap text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          {t('products.classic.used')}
                        </div>
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] items-start gap-[6.58px]">
                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[5.48px] rounded-[54.84px] bg-[#f7f9ff] px-[10.97px] py-[5.48px]">
                        <div className="relative mt-[-0.55px] w-fit whitespace-nowrap text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          {t('products.classic.withCollateral')}
                        </div>
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[5.48px] rounded-[54.84px] bg-gray-90 px-[10.97px] py-[5.48px]">
                        <div className="relative mt-[-0.55px] w-fit whitespace-nowrap text-[11px] font-normal leading-[15.4px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
                          {t('products.classic.withoutCollateral')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-[10.97px] self-stretch">
                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('products.classic.brand')}
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          Audi
                        </div>
                      </div>

                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative size-5 xl:size-[13.16px]"
                      >
                        <path
                          d="M11.375 5.25029L7.00001 9.62526L2.62504 5.25029"
                          stroke="#9FA7BC"
                          strokeWidth="1.09677"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('products.classic.model')}
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          A7 Sportback
                        </div>
                      </div>

                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative size-5 xl:size-[13.16px]"
                      >
                        <path
                          d="M11.375 5.25029L7.00001 9.62526L2.62504 5.25029"
                          stroke="#9FA7BC"
                          strokeWidth="1.09677"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-[10.97px] self-stretch">
                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('products.classic.year')}
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          2004
                        </div>
                      </div>

                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative size-5 xl:size-[13.16px]"
                      >
                        <path
                          d="M11.375 5.25029L7.00001 9.62526L2.62504 5.25029"
                          stroke="#9FA7BC"
                          strokeWidth="1.09677"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('products.classic.firstPayment')}
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          150 000
                        </div>
                      </div>

                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative size-5 xl:size-[13.16px]"
                      >
                        <path
                          d="M11.375 5.25029L7.00001 9.62526L2.62504 5.25029"
                          stroke="#9FA7BC"
                          strokeWidth="1.09677"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-[10.97px] self-stretch">
                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('application.termMonths')}
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          24
                        </div>
                      </div>

                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative size-5 xl:size-[13.16px]"
                      >
                        <path
                          d="M11.375 5.25029L7.00001 9.62526L2.62504 5.25029"
                          stroke="#9FA7BC"
                          strokeWidth="1.09677"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px] opacity-0">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('products.classic.firstPayment')}
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          150 000
                        </div>
                      </div>

                      <img className="relative mt-[-3094.74px] size-5 size-[13.16px] xl:ml-[-962.76px]" />
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full flex-col items-start gap-[17.55px] self-stretch p-[21.94px] xl:w-[289px]">
                  <div className="relative mt-[-0.55px] self-stretch text-[17.5px] font-medium leading-[21.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('products.classic.selectConditions')}
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[15.04px]">
                    <div className="relative mx-[-1.10px] mt-[-1.10px] flex w-full flex-[0_0_auto] items-start justify-end gap-[8.77px] rounded-[8.77px] border-[1.1px] border-solid border-[#3573fc] bg-white p-[13.16px] xl:w-[247.32px]">
                      <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[8.77px] self-stretch">
                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[5.48px] self-stretch">
                          <div className="relative mt-[-0.55px] flex-1 text-[11px] font-medium leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            {t('products.classic.yourConditions')}
                          </div>

                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative ml-[-1128.10px] mt-[-2830.65px] size-[15.35px]"
                          >
                            <path
                              d="M2.49997 9.00005L5.99997 12.5L14 4.50005"
                              stroke="#3573FC"
                              strokeWidth="1.09677"
                              strokeLinecap="square"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        <div className="relative flex w-full flex-[0_0_auto] items-start gap-[13.16px] self-stretch">
                          <div className="relative flex flex-1 grow flex-col items-start gap-[1.1px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('products.classic.monthlyPayment')}
                            </div>

                            <div className="relative self-stretch text-[9px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              187, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-full flex-col items-start gap-[1.1px] xl:w-[66.9px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('application.amount')}
                            </div>

                            <div className="relative self-stretch text-[9px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              2, 560, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-full flex-col items-start gap-[1.1px] xl:w-[43.87px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('application.rate')}
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              3,5%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start justify-end gap-[8.77px] rounded-[8.77px] bg-white p-[13.16px] xl:w-[245.13px]">
                      <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[8.77px]">
                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[5.48px] self-stretch">
                          <div className="relative mt-[-0.55px] flex-1 text-[11px] font-medium leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            {t('products.classic.increasedFirstPayment')}
                          </div>
                        </div>

                        <div className="relative flex w-full flex-[0_0_auto] items-start gap-[13.16px] self-stretch">
                          <div className="relative flex flex-1 grow flex-col items-start gap-[1.1px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('products.classic.monthlyPayment')}
                            </div>

                            <div className="relative self-stretch text-[9px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              166, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-full flex-col items-start gap-[1.1px] xl:w-[66.9px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('application.amount')}
                            </div>

                            <div className="relative self-stretch text-[9px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              2, 450, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-full flex-col items-start gap-[1.1px] xl:w-[43.87px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('application.rate')}
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-[#00b235] [font-family:'Roboto',Helvetica]">
                              3,2%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start justify-end gap-[8.77px] rounded-[8.77px] bg-white p-[13.16px] xl:w-[245.13px]">
                      <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[8.77px]">
                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[5.48px] self-stretch">
                          <div className="relative mt-[-0.55px] flex-1 text-[11px] font-medium leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            {t('products.classic.increasedTerm')}
                          </div>
                        </div>

                        <div className="relative flex w-full flex-[0_0_auto] items-start gap-[13.16px] self-stretch">
                          <div className="relative flex flex-1 grow flex-col items-start gap-[1.1px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('products.classic.monthlyPayment')}
                            </div>

                            <div className="relative self-stretch text-[9px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              96, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-full flex-col items-start gap-[1.1px] xl:w-[66.9px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('application.amount')}
                            </div>

                            <div className="relative self-stretch text-[9px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              2, 640, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-full flex-col items-start gap-[1.1px] xl:w-[43.87px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('application.rate')}
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              3,6%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <svg
              width="695"
              height="851"
              viewBox="0 0 695 851"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[-780px] top-[-2732px] h-[347px] w-full "
            >
              <g opacity="0.12" filter="url(#filter0_f_9181_951)">
                <path
                  d="M454.516 429.04C508.306 462.146 497.075 542.451 484.736 578.465C362.145 762.381 199.4 549.232 200.04 434.352C200.679 319.472 339.067 164.034 409.713 207.514C480.36 250.994 387.277 387.657 454.516 429.04Z"
                  fill="#9FA7BC"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_9181_951"
                  x="0"
                  y="0"
                  width="695"
                  height="850.476"
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
                    result="effect1_foregroundBlur_9181_951"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-4 self-stretch">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[32px] bg-[#f6f7f9] p-7">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('products.business.title')}
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('products.business.description')}
                </p>
              </div>

              <Link
                to={RoutesPath.BUSINESSCREDIT}
                className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4"
              >
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica] xl:text-xl">
                  {t('products.business.more')}
                </div>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative size-5 xl:size-12"
                >
                  <path
                    d="M7.5 3.75L13.75 10L7.5 16.25"
                    stroke="#3573FC"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[32px] bg-[#f6f7f9] p-7">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('products.bank.title')}
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('products.bank.description')}
                </p>
              </div>

              <Link
                to={RoutesPath.BANKCREDIT}
                className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4"
              >
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica] xl:text-xl">
                  {t('products.bank.more')}
                </div>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative size-5 xl:size-12"
                >
                  <path
                    d="M7.5 3.75L13.75 10L7.5 16.25"
                    stroke="#3573FC"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <div className="relative mx-[-2.00px] mb-[-2.00px] flex w-full flex-[0_0_auto] flex-col items-center gap-7 self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-none bg-[#f5f7ff] p-7">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('products.auto.title')}
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('products.auto.description')}
                </p>
              </div>

              <Link
                to={RoutesPath.AUTOCREDIT}
                className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4"
              >
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica] xl:text-xl">
                  {t('products.auto.more')}
                </div>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative size-5 xl:size-12"
                >
                  <path
                    d="M7.5 3.75L13.75 10L7.5 16.25"
                    stroke="#3573FC"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-9 self-stretch p-4">
        <p className="relative mt-[-1.00px] self-stretch text-4xl font-normal leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
          <span className="font-medium leading-[0.1px] text-[#1c222f]">
            {t('lendingStoreOnline.headingLeft')}
            <br />
          </span>

          <span className="font-medium leading-10 text-[#9ea7bb]">
            {t('lendingStoreOnline.headingRight')}
          </span>
        </p>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-5 self-stretch">
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-5 self-stretch">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd]">
              <div className="relative h-96 w-full self-stretch overflow-hidden rounded-[32px]">
                <svg
                  width="1076"
                  height="964"
                  viewBox="0 0 1076 964"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[145px] top-[30px] h-[371px] w-[388px]"
                >
                  <g opacity="0.32" filter="url(#filter0_f_9181_1108)">
                    <path
                      d="M539.233 404.377C562.384 364.278 621.461 370.853 648.106 379.153C785.401 465.196 632.563 588.843 548.369 590.742C464.174 592.64 347.421 494.435 377.827 441.771C408.232 389.107 510.294 454.5 539.233 404.377Z"
                      fill="#3573FC"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_9181_1108"
                      x="-3.05337e-05"
                      y="9.1601e-05"
                      width="1076"
                      height="963.664"
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
                        result="effect1_foregroundBlur_9181_1108"
                      />
                    </filter>
                  </defs>
                </svg>

                <div className="scale-80 relative mx-auto w-fit scale-90">
                  <div className="relative left-[-19px] top-[57px] inline-flex items-center rounded-[24.8px] bg-white p-[12.4px]">
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-start justify-center gap-[7.75px] p-[9.3px]">
                      <div className="relative flex size-[123.99px] items-start gap-[9.3px]">
                        <div className="relative size-[114.69px] [background:url(/img/main-mobile/frame-1948755020.png)_50%_50%_/_cover]" />
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[12.4px] self-stretch rounded-[18.6px] bg-[#f6f8ff] p-[18.6px]">
                      <div className="relative mt-[-0.77px] self-stretch text-[15.5px] font-medium leading-[21.7px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('lendingStoreOnline.productName')}
                      </div>

                      <div className="relative flex w-[167.42px] flex-[0_0_auto] flex-col items-start gap-[7.75px]">
                        <div className="relative flex h-[15.5px] w-full items-center gap-[9.3px] self-stretch">
                          <div className="relative mt-[-1.03px] flex-1 text-[10.8px] font-normal leading-[15.5px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('lendingStoreOnline.cost')}
                          </div>

                          <div className="relative mt-[-1.03px] w-[55.79px] text-right text-[10.8px] font-medium leading-[15.5px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            23,456₽
                          </div>
                        </div>

                        <div className="relative flex h-[15.5px] w-full items-center gap-[9.3px] self-stretch">
                          <div className="relative mt-[-1.03px] flex-1 text-[10.8px] font-normal leading-[15.5px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('lendingStoreOnline.advancePayment')}
                          </div>

                          <div className="relative mt-[-1.03px] w-[55.79px] text-right text-[10.8px] font-medium leading-[15.5px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            42,000₽
                          </div>
                        </div>

                        <div className="relative flex h-[15.5px] w-full items-center gap-[9.3px] self-stretch">
                          <div className="relative mt-[-1.03px] flex-1 text-[10.8px] font-normal leading-[15.5px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('calculator.term')}
                          </div>

                          <div className="relative mt-[-1.03px] w-[55.79px] text-right text-[10.8px] font-medium leading-[15.5px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            4,000₽
                          </div>
                        </div>

                        <div className="relative flex h-[15.5px] w-full items-center gap-[9.3px] self-stretch">
                          <div className="relative mt-[-1.03px] flex-1 text-[10.8px] font-normal leading-[15.5px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('lendingStoreOnline.nextPayment')}
                          </div>

                          <div className="relative mt-[-1.03px] w-[55.79px] text-right text-[10.8px] font-medium leading-[15.5px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            2,700₽
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[153px] top-[197px] inline-flex items-center gap-[14.72px] rounded-[29.43px] bg-white py-[14.72px] pl-[14.72px] pr-[22.08px]">
                    <svg
                      width="59"
                      height="59"
                      viewBox="0 0 59 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative flex-[0_0_auto]"
                    >
                      <rect
                        width="58.9999"
                        height="58.9999"
                        rx="22.0759"
                        fill="#F2F5FF"
                      />
                      <path
                        d="M29.4999 33.1876C31.5365 33.1876 33.1874 31.5367 33.1874 29.5001C33.1874 27.4636 31.5365 25.8126 29.4999 25.8126C27.4634 25.8126 25.8124 27.4636 25.8124 29.5001C25.8124 31.5367 27.4634 33.1876 29.4999 33.1876Z"
                        stroke="#3573FC"
                        strokeWidth="1.47173"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M42.4062 22.1252H16.5938V36.8752H42.4062V22.1252Z"
                        stroke="#3573FC"
                        strokeWidth="1.47173"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M42.4061 26.7346C41.2546 26.5394 40.1923 25.9909 39.3664 25.165C38.5405 24.3391 37.992 23.2768 37.7968 22.1252"
                        stroke="#3573FC"
                        strokeWidth="1.47173"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M37.7968 36.8748C37.992 35.7232 38.5405 34.6609 39.3664 33.835C40.1923 33.0091 41.2546 32.4606 42.4061 32.2654"
                        stroke="#3573FC"
                        strokeWidth="1.47173"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5938 32.2654C17.7453 32.4606 18.8076 33.0091 19.6335 33.835C20.4594 34.6609 21.0079 35.7232 21.2031 36.8748"
                        stroke="#3573FC"
                        strokeWidth="1.47173"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.2031 22.1252C21.0079 23.2768 20.4594 24.3391 19.6335 25.165C18.8076 25.9909 17.7453 26.5394 16.5938 26.7346"
                        stroke="#3573FC"
                        strokeWidth="1.47173"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[3.68px]">
                      <div className="relative mt-[-0.92px] w-fit whitespace-nowrap text-[12.9px] font-normal leading-[18.4px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                        {t('lendingStoreOnline.monthlyPayment')}
                      </div>

                      <div className="relative w-fit whitespace-nowrap text-[18.4px] font-medium leading-[25.8px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        4 950₽
                      </div>
                    </div>
                  </div>
                </div>

                <svg
                  width="1013"
                  height="928"
                  viewBox="0 0 1013 928"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 top-0 h-96 w-[380px]"
                >
                  <g opacity="0.24" filter="url(#filter0_f_9181_1132)">
                    <path
                      d="M522.093 528.62C511.076 574.504 451.445 585.177 423.006 584.778C263.945 540.436 377.506 375.379 459.228 349.156C540.95 322.934 683.459 385.105 668.99 445.366C654.52 505.627 535.864 471.267 522.093 528.62Z"
                      fill="#9FA7BC"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_9181_1132"
                      x="3.05326e-05"
                      y="-0.000396924"
                      width="1013"
                      height="927.777"
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
                        stdDeviation="171.409"
                        result="effect1_foregroundBlur_9181_1132"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-end gap-8 self-stretch p-8">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                  <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('lendingStoreOnline.bnplTitle')}
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    {t('lendingStoreOnline.bnplDesc')}
                  </p>
                </div>

                <Link
                  to={RoutesPath.BNPL}
                  className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4"
                >
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]">
                    {t('products.microfinance.more')}
                  </div>

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative size-5"
                  >
                    <path
                      d="M7.5 3.75L13.75 10L7.5 16.25"
                      stroke="#3573FC"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd]">
              <div className="relative h-[369px] w-full self-stretch overflow-hidden rounded-[32px]">
                <svg
                  width="1076"
                  height="964"
                  viewBox="0 0 1076 964"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[145px] top-[30px] h-[371px] w-[388px]"
                >
                  <g opacity="0.32" filter="url(#filter0_f_9181_1156)">
                    <path
                      d="M539.233 404.377C562.384 364.278 621.461 370.853 648.106 379.153C785.401 465.196 632.563 588.843 548.369 590.742C464.174 592.64 347.421 494.435 377.827 441.771C408.232 389.107 510.294 454.5 539.233 404.377Z"
                      fill="#3573FC"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_9181_1156"
                      x="-3.05337e-05"
                      y="9.1601e-05"
                      width="1076"
                      height="963.664"
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
                        result="effect1_foregroundBlur_9181_1156"
                      />
                    </filter>
                  </defs>
                </svg>

                <div className="relative left-[-81px] mx-auto w-fit scale-90">
                  <div className="relative left-[161px] top-[34px] flex h-[247px] w-[283px] flex-col items-start justify-center gap-[13.8px] rounded-[27.6px] bg-white p-[27.6px]">
                    <div className="relative mt-[-0.65px] inline-flex flex-[0_0_auto] flex-col items-start gap-[3.45px]">
                      <div className="relative mt-[-0.86px] w-[227.73px] text-[17.3px] font-medium leading-[24.2px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        График платежей
                      </div>

                      <div className="relative w-[155.27px] text-[12.1px] font-normal leading-[17.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        Договор: 12345456322
                      </div>
                    </div>

                    <div className="relative mb-[-0.65px] inline-flex h-[132.84px] items-end">
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-[8.63px]">
                        <div className="relative h-[65.56px] w-[6.9px] rounded-[20.7px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />

                        <div className="relative w-[37.96px] text-center text-[10.4px] font-normal leading-[13.8px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('lendingStoreOnline.months.march')}
                        </div>
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-[8.63px]">
                        <div className="relative h-[74.19px] w-[6.9px] rounded-[20.7px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />

                        <div className="relative w-[37.96px] text-center text-[10.4px] font-normal leading-[13.8px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('lendingStoreOnline.months.april')}
                        </div>
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-[8.63px]">
                        <div className="relative h-[90.57px] w-[6.9px] rounded-[20.7px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />

                        <div className="relative w-[37.96px] text-center text-[10.4px] font-normal leading-[13.8px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('lendingStoreOnline.months.may')}
                        </div>
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-[8.63px]">
                        <div className="relative h-[103.51px] w-[6.9px] rounded-[20.7px] bg-[#f2f4fb]" />

                        <div className="relative w-[37.96px] text-center text-[10.4px] font-normal leading-[13.8px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('lendingStoreOnline.months.june')}
                        </div>
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-[8.63px]">
                        <div className="relative h-[78.5px] w-[6.9px] rounded-[20.7px] bg-[#f2f4fb]" />

                        <div className="relative w-[37.96px] text-center text-[10.4px] font-normal leading-[13.8px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('lendingStoreOnline.months.july')}
                        </div>
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-[8.63px]">
                        <div className="relative h-[84.54px] w-[6.9px] rounded-[20.7px] bg-[#f2f4fb]" />

                        <div className="relative w-[37.96px] text-center text-[10.4px] font-normal leading-[13.8px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('lendingStoreOnline.months.august')}
                        </div>
                      </div>
                    </div>

                    <svg
                      width="284"
                      height="54"
                      viewBox="0 0 284 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-0 top-[94px] h-[83px] w-[283px]"
                    >
                      <path
                        d="M0.213225 48.0102L21.35 42.6266C25.2013 41.6457 29.2884 42.3697 32.5683 44.614L40.5087 50.0473C46.6243 54.2319 54.9518 52.8499 59.3879 46.9141L66.153 37.8621C70.1829 32.4698 77.5111 30.7645 83.5076 33.8236L101.229 42.8639C108.55 46.5984 117.493 43.1593 120.425 35.4819L131.258 7.11502C134.766 -2.07129 148.137 -0.828579 149.893 8.84694L151.701 18.8165C152.984 25.8853 162.802 26.6836 165.21 19.9148V19.9148C167.407 13.7374 176.124 13.6845 178.396 19.8348L180.419 25.3105C182.928 32.1037 191.969 33.4106 196.3 27.606L201.135 21.1252C205.707 14.9958 214.45 13.8761 220.419 18.6552L225.677 22.8638C229.974 26.3036 235.902 26.8665 240.769 24.2968L283.597 1.68759"
                        stroke="url(#paint0_linear_9181_1180)"
                        strokeWidth="1.72524"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_9181_1180"
                          x1="0.213225"
                          y1="34.3732"
                          x2="283.597"
                          y2="34.3732"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset="0.269231" stopColor="#00CB82" />
                          <stop offset="0.692308" stopColor="#00CB82" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="absolute left-[135px] top-[115px] size-2.5 rounded-[5.18px] border-[1.73px] border-solid border-[#00cb82] bg-[#ffffff]" />
                  </div>
                  <div className="absolute left-[18px] top-[105px] inline-flex flex-col items-center justify-center gap-[10.35px] rounded-[27.6px_27.6px_0px_0px] bg-white p-[13.8px]">
                    <div className="relative size-[182.88px] rounded-[86.26px]">
                      <div className="absolute left-[41px] top-[65px] inline-flex h-[54px] flex-col items-center gap-[1.73px]">
                        <div className="relative mt-[-0.86px] w-fit whitespace-nowrap text-[12.1px] font-normal leading-[17.3px] tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                          Текущий остаток
                        </div>

                        <div className="relative mb-[-0.18px] w-fit whitespace-nowrap text-center text-[24.2px] font-medium leading-[34.5px] tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                          44,000₽
                        </div>
                      </div>

                      <div className="absolute left-1.5 top-1.5 size-[171px] rounded-[85.4px] border-[8.63px] border-solid border-neutral-50" />

                      <svg
                        width="171"
                        height="171"
                        viewBox="0 0 171 171"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-1.5 top-1.5 size-[171px]"
                      >
                        <path
                          d="M4.3182 85.4999C4.3182 130.335 40.6645 166.682 85.5 166.682C130.335 166.682 166.682 130.335 166.682 85.4999C166.682 40.6644 130.335 4.31807 85.5 4.31807"
                          stroke="url(#paint0_linear_9181_1189)"
                          strokeWidth="8.62619"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_9181_1189"
                            x1="85.5"
                            y1="4.31807"
                            x2="37.5682"
                            y2="-7.77283"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3573FC" />
                            <stop
                              offset="1"
                              stopColor="#3573FC"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch rounded-[17.25px] bg-[#f6f8ff] px-[13.8px] py-[10.35px]">
                      <div className="relative w-fit whitespace-nowrap text-[12.1px] font-normal leading-[17.3px] tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                        Сумма займа
                      </div>

                      <div className="relative mt-[-0.86px] w-fit whitespace-nowrap text-[13.8px] font-medium leading-[20.7px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        122, 000₽
                      </div>
                    </div>
                  </div>
                </div>

                <svg
                  width="561"
                  height="659"
                  viewBox="0 0 561 659"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 top-0 h-[369px] w-[380px]"
                >
                  <g opacity="0.16" filter="url(#filter0_f_9181_1182)">
                    <path
                      d="M211.782 335.142C170.924 318.191 169.816 261.414 174.37 235.144C238.827 94.4075 374.929 223.83 387.182 303.348C399.434 382.865 320.906 505.654 267.245 483.391C213.583 461.128 262.854 356.331 211.782 335.142Z"
                      fill="#7C92C8"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_9181_1182"
                      x="0"
                      y="0.000122082"
                      width="561"
                      height="658.586"
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
                        stdDeviation="86.2619"
                        result="effect1_foregroundBlur_9181_1182"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-end gap-8 self-stretch p-8">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                  <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('lendingStoreOnline.posTitle')}
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    {t('lendingStoreOnline.posDesc')}
                  </p>
                </div>

                <Link
                  to={RoutesPath.BNPL}
                  className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4"
                >
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]">
                    {t('products.microfinance.more')}
                  </div>

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative size-5"
                  >
                    <path
                      d="M7.5 3.75L13.75 10L7.5 16.25"
                      stroke="#3573FC"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Feedback />

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-9 self-stretch p-4">
        <p className="relative mt-[-1.00px] self-stretch text-4xl font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
          {t('other.title')}
        </p>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-4 self-stretch">
          <svg
            width="380"
            height="420"
            viewBox="0 0 380 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative h-[420px] w-full self-stretch"
          >
            <g clipPath="url(#clip0_9587_15004)">
              <rect width="380" height="420" rx="32" fill="#F7F8FA" />
              <g opacity="0.32" filter="url(#filter0_f_9587_15004)">
                <path
                  d="M531.421 -23.3876C572.596 -98.6156 682.267 -88.9357 731.955 -74.6922C989.817 78.8337 712.031 314.246 556.209 321.317C400.387 328.388 180.049 151.474 234.126 52.6723C288.204 -46.1295 479.953 70.6475 531.421 -23.3876Z"
                  fill="white"
                />
              </g>
              <path
                opacity="0.12"
                d="M868.305 371.778C922.085 404.878 910.857 485.168 898.52 521.175C775.952 705.056 613.238 491.948 613.877 377.089C614.516 262.231 752.878 106.822 823.511 150.294C894.144 193.766 801.079 330.403 868.305 371.778Z"
                fill="#9FA7BC"
              />
              <g opacity="0.32" filter="url(#filter2_f_9587_15004)">
                <path
                  d="M301.344 0.855472C326.562 -45.2194 393.732 -39.2907 424.164 -30.567C582.097 63.4629 411.962 207.645 316.525 211.976C221.089 216.307 86.1387 107.953 119.26 47.4398C152.38 -13.0732 269.821 58.449 301.344 0.855472Z"
                  fill="white"
                />
              </g>
              <g opacity="0.4" filter="url(#filter3_f_9587_15004)">
                <path
                  d="M170.602 217.59C165.661 183.992 202.628 160.88 221.728 153.524C339.85 140.504 308.246 281.184 260.693 320.603C213.14 360.022 101.295 356.696 94.8061 312.57C88.3175 268.443 176.778 259.588 170.602 217.59Z"
                  fill="#3573FC"
                />
              </g>
              <g opacity="0.4" filter="url(#filter4_f_9587_15004)">
                <path
                  d="M223.831 184.747C230.785 217.987 195.277 243.282 176.654 251.775C59.5301 271.881 82.609 129.554 127.703 87.3444C172.797 45.1347 284.639 41.7219 293.772 85.3777C302.905 129.033 215.139 143.198 223.831 184.747Z"
                  fill="#725DD6"
                />
              </g>
              <rect
                x="127.407"
                y="129"
                width="126.503"
                height="56.3472"
                rx="19.599"
                fill="white"
                fillOpacity="0.36"
              />
              <rect
                x="132.307"
                y="133.9"
                width="116.703"
                height="46.5477"
                rx="14.6993"
                fill="white"
              />
              <mask
                id="mask0_9587_15004"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="147"
                y="148"
                width="15"
                height="19"
              >
                <path
                  d="M147.006 148.312H161.495V166.036H147.006V148.312Z"
                  fill="#1D2C62"
                />
              </mask>
              <g mask="url(#mask0_9587_15004)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M152.828 157.175C152.828 153.289 155.978 150.138 159.865 150.138C160.425 150.138 160.972 150.204 161.495 150.328C159.964 149.068 158.005 148.312 155.868 148.312C150.974 148.312 147.006 152.28 147.006 157.175C147.006 162.069 150.974 166.037 155.868 166.037C158.005 166.037 159.964 165.28 161.495 164.022C160.972 164.145 160.425 164.212 159.865 164.212C155.978 164.212 152.828 161.06 152.828 157.175Z"
                  fill="#1C222F"
                />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M165.554 149.611V153.032C166.401 154.194 166.902 155.626 166.902 157.175C166.902 158.723 166.401 160.156 165.554 161.318V164.749H170.277V153.28H175.084V164.749H179.808V149.611H165.554Z"
                fill="#1C222F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M183.518 149.611V153.224H187.889V164.749H192.613V153.224H196.984V149.611H183.518Z"
                fill="#1C222F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M200.698 149.611V164.749H205.423V158.584H210.313V164.749H215.037V149.611H210.313V154.86H205.423V149.611H200.698Z"
                fill="#1C222F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M218.744 149.583V157.166V164.748H223.468V158.754H224.706L228.288 164.748H233.716L229.02 157.166L233.716 149.583H228.288L224.706 155.577H223.468V149.583H218.744Z"
                fill="#1C222F"
              />
              <rect
                x="19"
                y="228.22"
                width="63.6968"
                height="63.6968"
                rx="14.6993"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50.8484 243.911C41.9262 243.911 34.6921 251.145 34.6921 260.065C34.6921 268.99 41.9262 276.229 50.8484 276.229C59.7743 276.229 67.0084 268.99 67.0084 260.065C67.0084 253.811 63.444 248.396 58.2414 245.711C58.1921 245.666 58.1511 245.627 58.0993 245.58C58.0993 245.58 58.0957 245.604 58.0957 245.64C57.4579 245.319 56.7992 245.041 56.1239 244.808C56.1757 244.588 56.2449 244.263 56.2732 244.022C56.3039 243.728 56.0685 243.42 55.5838 243.536C55.2485 243.611 54.3869 243.911 53.6331 244.166C52.7263 244.009 51.7997 243.911 50.8484 243.911Z"
                fill="#1C222F"
                stroke="white"
                strokeWidth="2.80408"
                strokeMiterlimit="2.613"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.6921 260.065C34.6921 251.145 41.9262 243.911 50.8484 243.911C59.7743 243.911 67.0084 251.145 67.0084 260.065C67.0084 268.991 59.7737 276.229 50.8484 276.229C41.9256 276.229 34.6921 268.991 34.6921 260.065Z"
                fill="white"
                stroke="#1C222F"
                strokeWidth="0.75464"
                strokeMiterlimit="2.613"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M56.785 244.333C63.1412 246.728 67.6622 252.87 67.6622 260.065C67.6622 269.351 60.1337 276.879 50.8484 276.879C41.5631 276.879 34.0383 269.351 34.0383 260.065C34.0383 250.782 41.5631 243.255 50.8484 243.255C51.8479 243.255 52.8311 243.341 53.7848 243.509L54.3658 243.278C53.2086 243.039 52.03 242.919 50.8484 242.919C41.3788 242.919 33.6993 250.595 33.6993 260.065C33.6993 269.537 41.3795 277.218 50.8484 277.218C60.321 277.218 67.9976 269.537 67.9976 260.065C67.9976 252.657 63.2995 246.343 56.7157 243.946L56.785 244.333Z"
                fill="#1C222F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.6697 263.265C42.8352 263.061 43.182 262.774 43.6384 262.549C44.2887 262.22 46.1431 262.006 47.1702 262.02C47.779 262.027 48.1872 262.304 48.4713 262.587C48.7549 262.871 48.2672 262.912 48.0246 262.708C47.779 262.508 47.5092 262.439 47.2256 262.439C46.9421 262.439 46.641 262.549 46.4821 262.667C46.3189 262.791 46.278 262.957 45.8728 263.075C45.3821 263.214 44.8143 262.771 44.8143 262.771C45.2123 263.521 45.8968 263.497 46.278 263.404C46.5549 263.331 46.6416 263.203 47.0492 263.196C47.6995 263.186 47.9837 263.563 47.9837 263.563C47.1702 263.521 45.7939 264.03 45.1394 264.172C44.3266 264.352 43.5553 264.376 43.5553 264.376C44.081 265.027 44.8558 265.027 45.4266 265.027C45.9938 265.027 47.8205 264.892 48.9175 264.985C50.2945 265.099 51.3945 266.002 51.3945 267.341C51.3945 268.68 50.4642 269.41 50.4642 269.41C51.6401 269.047 52.1284 268.112 52.1284 268.112C52.7552 270.527 51.4535 272.458 50.2631 273.247C49.2739 273.904 46.3051 274.583 44.0256 273.492C41.5034 272.285 40.5485 271.108 40.5485 271.108C46.0317 271.555 48.7134 270.035 48.7134 270.035C43.7588 270.323 40.3029 269.07 38.068 268.091C37.1658 266.661 36.5154 265.087 36.1449 263.438V263.442C40.2445 266.528 43.8805 267.057 43.8805 267.057C39.4521 264.659 37.2485 261.975 35.7849 259.298C35.8581 257.785 36.1616 256.291 36.685 254.869L36.6952 254.845C38.3383 259.217 40.1445 260.518 40.1445 260.518C38.3557 256.452 38.3696 253.542 38.5328 251.348C39.2112 250.386 40.0007 249.507 40.8851 248.729L40.8983 248.713C40.2072 252.616 41.0368 255.152 41.0368 255.152C41.0368 252.066 42.7702 248.393 44.1502 246.522C45.0068 246.092 45.9039 245.748 46.8283 245.493H46.8313C45.5723 247.076 45.0184 248.612 45.0184 248.612C47.6031 246.152 51.8822 244.675 52.5324 244.509C53.1826 244.35 55.0545 243.658 55.5838 243.538C56.0684 243.422 56.3032 243.73 56.2731 244.024C56.2322 244.407 56.0684 245.042 56.0684 245.042C57.5044 245.391 58.1264 246.097 58.1264 246.097C58.0722 245.906 58.0993 245.582 58.0993 245.582C60.0783 247.342 60.6184 248.181 60.6732 249.778C60.7286 251.376 61.4306 251.62 61.8352 251.836C62.2434 252.052 63.2477 252.625 63.5698 252.895C63.8106 253.099 63.7077 253.327 63.5698 253.49C63.4343 253.65 63.4343 253.706 63.4096 253.894C63.2886 254.725 62.9183 255.06 62.4054 255.247C61.8906 255.435 61.3198 255.139 61.3198 255.139C60.752 255.762 60.6449 255.355 60.6178 255.114C60.5931 254.869 60.292 255.06 60.0783 255.139C59.861 255.22 59.7809 254.923 59.7809 254.923C58.7495 254.788 58.3004 255.397 58.3004 255.397C59.1951 255.519 59.6454 256.127 59.6833 256.371C59.7255 256.621 60.1301 256.452 60.1301 256.452C60.1301 256.452 60.1674 256.371 60.3348 256.292C60.4974 256.21 60.5383 256.25 60.4974 256.452C60.4564 256.655 60.4137 256.819 60.4137 256.819L60.864 257.105C60.6973 258.204 60.2138 258.156 59.9681 258.037C58.4075 257.257 55.6229 257.105 55.6229 257.105C55.7855 256.861 56.1756 256.548 56.1756 256.548C49.0283 256.548 47.8211 257.416 47.4544 257.874C47.2016 258.192 47.4195 258.686 47.4195 258.686C46.5682 258.848 44.4097 259.393 43.5824 260.152C42.7871 260.878 42.521 262.584 42.4927 263.214C42.486 263.344 42.6143 263.341 42.6697 263.265ZM55.1208 244.848C55.2008 244.759 55.1208 244.686 54.907 244.822C54.6885 244.956 53.7336 245.53 53.0899 246.608C53.0111 246.745 53.058 246.946 53.4018 246.829C53.7404 246.715 54.0889 246.631 54.4428 246.58C54.6331 246.552 54.6331 246.419 54.4994 246.367C54.3639 246.31 54.3326 246.258 54.391 246.041C54.4422 245.824 54.8233 245.2 55.1208 244.848ZM53.332 247.77C51.9237 248.91 49.6057 251.636 48.5129 254.191C48.4298 254.381 48.5129 254.41 48.7826 254.246C49.056 254.082 49.8411 253.705 50.2186 253.596C50.2186 253.596 49.8098 255.011 49.6755 255.791C49.5683 256.433 50.1012 256.382 50.4335 256.306C50.7659 256.232 52.1422 256.171 52.3843 256.142C52.3843 256.142 51.1115 255.843 50.9766 255.328C50.8418 254.815 51.2048 253.67 51.4643 252.894C51.5197 252.727 51.4366 252.487 51.1669 252.592C50.8935 252.7 50.5166 252.781 50.3264 252.894C50.3264 252.894 51.5197 249.967 53.3597 247.853L53.332 247.77L59.6454 249.074C59.5069 250.141 59.1162 250.046 58.9398 249.994C58.7495 249.939 58.6977 249.859 58.1258 249.806C57.9457 249.789 57.113 249.696 57.5592 250.047C58.2751 250.619 58.8844 251.782 58.8844 251.782C58.9669 251.403 58.7736 250.862 58.6694 250.673C58.5623 250.481 58.6977 250.429 58.8296 250.455C58.9675 250.481 59.0433 250.533 59.2932 250.673C59.5352 250.806 59.6978 250.782 59.7544 250.455C59.7989 250.173 59.7851 249.597 59.7285 249.076C59.7225 249.038 59.6605 249.019 59.646 249.074L53.332 247.77Z"
                fill="#1C222F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M61.4522 270.904C60.8146 268.773 59.0577 267.414 58.0818 266.234C57.6844 265.753 57.0962 265.078 57.0962 265.078C57.6663 265.403 58.7495 265.566 58.7495 265.566C58.452 265.32 57.7735 264.51 57.5044 264.182C56.7494 263.28 55.4416 262.269 54.4705 261.83C52.5607 260.965 50.5714 260.854 50.3016 260.802C50.0283 260.747 49.4611 260.854 49.8103 260.311C50.1638 259.769 52.2217 258.172 52.2217 258.172C51.7894 258.172 49.8934 258.338 49.3227 258.415C48.7555 258.498 48.6236 258.308 48.5929 257.931C48.5929 257.931 47.4514 259.005 47.9981 259.553C48.0812 259.635 48.3232 259.663 48.6242 259.528C48.9187 259.391 49.5141 259.201 49.7315 259.176C49.7315 259.176 49.2432 259.933 49.1366 260.258C49.0288 260.584 49.0011 260.746 49.5135 260.909C50.0283 261.068 52.6305 261.884 54.2254 262.967C55.8234 264.051 57.4767 265.434 58.6989 267.977C59.9169 270.527 59.2456 272.458 59.0553 272.81C59.9236 272.256 60.7319 271.614 61.4673 270.894L61.4522 270.904ZM65.0148 265.507C63.4481 264.234 60.6966 261.961 57.3418 261.18C57.3418 261.18 62.129 263.093 63.8389 267.908C64.3015 267.144 64.695 266.341 65.0148 265.507Z"
                fill="#1C222F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M55.6158 274.446C56.1276 273.253 56.6917 270.416 56.0969 268.219C56.0969 268.219 56.2064 273.388 52.6608 275.094C53.6621 274.976 54.6494 274.76 55.6086 274.45L55.6158 274.446ZM66.0216 259.864C65.5616 259.678 62.7276 258.876 62.7276 258.876C63.6765 258.824 64.0564 258.122 64.0564 258.122C63.1641 258.362 61.8082 258.471 60.6733 258.309C60.6733 258.309 63.299 259.445 65.9144 261.927V261.902C65.9837 261.304 66.0252 260.691 66.0252 260.065C66.0252 259.988 66.0252 259.947 66.0216 259.864Z"
                fill="#1C222F"
              />
              <rect
                x="112.095"
                y="228.22"
                width="63.6968"
                height="63.6968"
                rx="14.6993"
                fill="white"
              />
              <mask
                id="mask1_9587_15004"
                style={{ maskType: 'luminance' }}
                maskUnits="userSpaceOnUse"
                x="126"
                y="242"
                width="36"
                height="36"
              >
                <path
                  d="M161.093 242.919H126.795V277.218H161.093V242.919Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask1_9587_15004)">
                <path
                  d="M131.796 247.921C128.708 251.007 126.795 255.283 126.795 259.995C126.795 260.552 127.247 261.005 127.804 261.005C128.361 261.005 128.814 260.552 128.814 259.995C128.814 255.835 130.497 252.077 133.223 249.349C135.951 246.623 139.708 244.94 143.868 244.94C148.028 244.94 151.786 246.623 154.514 249.349C157.24 252.077 158.923 255.835 158.923 259.995C158.923 264.155 157.24 267.913 154.514 270.641C151.786 273.367 148.028 275.049 143.868 275.049C142.334 275.049 140.856 274.816 139.463 274.39C139.86 273.35 140.255 272.31 140.653 271.268C141.676 271.559 142.754 271.717 143.868 271.717C147.103 271.717 150.041 270.403 152.16 268.283C154.28 266.164 155.594 263.226 155.594 259.992C155.594 256.757 154.28 253.819 152.16 251.7C150.041 249.58 147.103 248.266 143.868 248.266C140.634 248.266 137.696 249.58 135.577 251.7C133.457 253.819 132.143 256.757 132.143 259.992C132.143 260.549 132.595 261.001 133.152 261.001C133.709 261.001 134.162 260.549 134.162 259.992C134.162 257.307 135.247 254.888 137.004 253.129C138.764 251.371 141.184 250.287 143.867 250.287C146.551 250.287 148.971 251.372 150.729 253.129C152.488 254.889 153.572 257.309 153.572 259.992C153.572 262.676 152.486 265.096 150.729 266.854C148.969 268.613 146.549 269.696 143.867 269.696C143.003 269.696 142.169 269.58 141.373 269.368C141.772 268.322 142.17 267.277 142.569 266.23C142.988 266.317 143.422 266.364 143.867 266.364C145.624 266.364 147.224 265.649 148.375 264.496C149.528 263.345 150.243 261.747 150.243 259.988C150.243 258.231 149.528 256.631 148.375 255.48C147.224 254.327 145.625 253.612 143.867 253.612C142.11 253.612 140.509 254.327 139.358 255.48C138.206 256.631 137.491 258.23 137.491 259.988C137.491 260.545 137.943 260.998 138.5 260.998C139.057 260.998 139.51 260.545 139.51 259.988C139.51 258.782 139.996 257.7 140.785 256.909C141.576 256.119 142.66 255.633 143.865 255.633C145.072 255.633 146.154 256.119 146.945 256.909C147.734 257.7 148.22 258.782 148.22 259.988C148.22 261.195 147.734 262.277 146.945 263.068C146.154 263.857 145.07 264.343 143.865 264.343C143.673 264.343 143.486 264.327 143.301 264.303C143.513 263.744 143.727 263.187 143.939 262.629C144.637 262.61 145.275 262.319 145.735 261.858C146.211 261.383 146.509 260.715 146.509 259.988C146.509 259.261 146.211 258.595 145.735 258.119C145.26 257.642 144.592 257.345 143.865 257.345C143.138 257.345 142.472 257.642 141.995 258.119C141.519 258.593 141.221 259.261 141.221 259.988C141.221 260.715 141.519 261.382 141.995 261.858C142.014 261.876 142.034 261.891 142.053 261.91C141.07 264.488 140.089 267.064 139.106 269.643L138.746 270.587C138.231 271.94 137.714 273.293 137.199 274.646C137.001 275.167 137.262 275.75 137.783 275.948C139.673 276.668 141.725 277.065 143.865 277.065C148.577 277.065 152.851 275.152 155.939 272.064C159.027 268.978 160.941 264.702 160.941 259.99C160.941 255.278 159.027 251.004 155.939 247.916C152.856 244.833 148.582 242.919 143.87 242.919C139.158 242.919 134.882 244.833 131.796 247.921ZM143.428 260.436C143.313 260.32 143.246 260.17 143.244 259.995C143.244 259.82 143.313 259.67 143.428 259.554C143.544 259.44 143.693 259.372 143.868 259.371C144.043 259.371 144.193 259.44 144.309 259.554C144.424 259.67 144.491 259.82 144.493 259.995C144.493 260.17 144.424 260.32 144.309 260.436C144.193 260.55 144.043 260.618 143.868 260.619C143.693 260.619 143.544 260.55 143.428 260.436Z"
                  fill="#FF6A28"
                />
              </g>
              <rect
                x="298.286"
                y="228.22"
                width="63.6968"
                height="63.6968"
                rx="14.6993"
                fill="white"
              />
              <g clipPath="url(#clip1_9587_15004)">
                <path
                  d="M319.463 268.296C320.7 268.296 321.707 269.252 321.707 270.428C321.707 271.605 320.7 272.56 319.463 272.56C318.225 272.56 317.218 271.605 317.218 270.428C317.218 269.254 318.225 268.296 319.463 268.296ZM319.463 267.217C317.603 267.217 316.096 268.655 316.096 270.428C316.096 272.201 317.603 273.64 319.463 273.64C321.322 273.64 322.829 272.201 322.829 270.428C322.829 268.655 321.322 267.217 319.463 267.217Z"
                  fill="#4563FF"
                />
                <path
                  d="M324.793 275.917H336.014V243.532H324.793V275.917ZM330.404 273.758C328.544 273.758 327.037 272.309 327.037 270.52C327.037 268.73 328.544 267.281 330.404 267.281C332.264 267.281 333.77 268.73 333.77 270.52C333.77 272.309 332.264 273.758 330.404 273.758Z"
                  fill="#4563FF"
                />
                <path
                  d="M344.43 243.532H336.014V275.917H344.43C345.978 275.917 347.235 274.708 347.235 273.218V246.231C347.235 244.741 345.978 243.532 344.43 243.532ZM341.624 273.758C339.764 273.758 338.258 272.309 338.258 270.52C338.258 268.73 339.764 267.281 341.624 267.281C343.484 267.281 344.991 268.73 344.991 270.52C344.991 272.309 343.484 273.758 341.624 273.758Z"
                  fill="#FF0029"
                />
                <path
                  d="M325.354 244.611V274.838H316.097C315.168 274.838 314.414 274.111 314.414 273.218V246.231C314.414 245.337 315.168 244.611 316.097 244.611H325.354ZM326.476 243.532H316.097C314.548 243.532 313.292 244.741 313.292 246.231V273.218C313.292 274.708 314.548 275.917 316.097 275.917H326.476V243.532Z"
                  fill="#4563FF"
                />
              </g>
              <rect
                x="205.191"
                y="228.22"
                width="63.6968"
                height="63.6968"
                rx="14.6993"
                fill="white"
              />
              <rect
                x="219.89"
                y="242.919"
                width="34.2983"
                height="34.2983"
                fill="url(#pattern0_9587_15004)"
              />
              <path
                d="M190.491 180.447V204.946"
                stroke="white"
                strokeWidth="1.22494"
              />
              <path
                d="M328.909 228.22V219.646C328.909 211.527 322.328 204.946 314.21 204.946H64.3227C56.2045 204.946 49.6234 211.527 49.6234 219.646V228.22"
                stroke="white"
                strokeWidth="1.22494"
              />
              <path
                d="M234.589 228.22V219.646C234.589 211.527 228.008 204.946 219.89 204.946H159.255C151.137 204.946 144.556 211.527 144.556 219.646V228.22"
                stroke="white"
                strokeWidth="1.22494"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_9587_15004"
                x="25.7758"
                y="-284.559"
                width="1011.43"
                height="806.082"
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
                  result="effect1_foregroundBlur_9587_15004"
                />
              </filter>
              <filter
                id="filter2_f_9587_15004"
                x="-8.34878"
                y="-159.104"
                width="619.468"
                height="493.7"
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
                  stdDeviation="61.2469"
                  result="effect1_foregroundBlur_9587_15004"
                />
              </filter>
              <filter
                id="filter3_f_9587_15004"
                x="-133.801"
                y="-75.5902"
                width="665.437"
                height="651.917"
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
                  stdDeviation="114.133"
                  result="effect1_foregroundBlur_9587_15004"
                />
              </filter>
              <filter
                id="filter4_f_9587_15004"
                x="-137.314"
                y="-174.137"
                width="660.021"
                height="656.112"
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
                  stdDeviation="114.133"
                  result="effect1_foregroundBlur_9587_15004"
                />
              </filter>
              <pattern
                id="pattern0_9587_15004"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#image0_9587_15004"
                  transform="translate(-0.229296 -0.489859) scale(0.00394366)"
                />
              </pattern>
              <clipPath id="clip0_9587_15004">
                <rect width="380" height="420" rx="32" fill="white" />
              </clipPath>
              <clipPath id="clip1_9587_15004">
                <rect
                  width="34.2491"
                  height="32.5076"
                  fill="white"
                  transform="translate(313.292 243.532)"
                />
              </clipPath>
              <image
                id="image0_9587_15004"
                width="834"
                height="456"
                preserveAspectRatio="none"
                href="data:image/png;base64,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"
              />
            </defs>
          </svg>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-4 self-stretch">
            <div className="relative mx-[-2.00px] mt-[-2.00px] flex w-full flex-[0_0_auto] flex-col items-center gap-7 self-stretch overflow-hidden rounded-[32px] border-2 border-solid  border-none bg-[#f5f7ff] p-7">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <p className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('other.dataUnload.title')}
                </p>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('other.dataUnload.description')}
                </p>
              </div>

              <Link
                to={RoutesPath.DATAUNLOAD}
                className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4"
              >
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica] xl:text-xl">
                  {t('other.dataUnload.more')}
                </div>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative size-5 xl:size-12"
                >
                  <path
                    d="M7.5 3.75L13.75 10L7.5 16.25"
                    stroke="#3573FC"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[32px] bg-[#f6f7f9] p-7">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('other.decisionModule.title')}
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('other.decisionModule.description')}
                </p>
              </div>

              <Link
                to={RoutesPath.DEVELOPMENT}
                className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4"
              >
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica] xl:text-xl">
                  {t('other.decisionModule.more')}
                </div>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative size-5 xl:size-12"
                >
                  <path
                    d="M7.5 3.75L13.75 10L7.5 16.25"
                    stroke="#3573FC"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[32px] bg-[#f6f7f9] p-7">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('other.fdata.title')}
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('other.fdata.description')}
                </p>
              </div>

              <Link
                to={RoutesPath.FDATA}
                className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4"
              >
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica] xl:text-xl">
                  {t('other.fdata.more')}
                </div>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative size-5 xl:size-12"
                >
                  <path
                    d="M7.5 3.75L13.75 10L7.5 16.25"
                    stroke="#3573FC"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2.5 self-stretch bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(232,236,246,1)_64%)] p-4">
        <footer className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-10 self-stretch overflow-hidden rounded-[32px] bg-white p-7">
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-10 self-stretch">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch xl:gap-12">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                <svg
                  width="112"
                  height="23"
                  viewBox="0 0 112 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative mt-[-0.37px] h-[22.74px] w-28"
                >
                  <mask
                    id="mask0_9587_14956"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="19"
                    height="23"
                  >
                    <path d="M0 0H18.5875V22.7386H0V0Z" fill="#1D2C62" />
                  </mask>
                  <g mask="url(#mask0_9587_14956)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.46875 11.37C7.46875 6.385 11.51 2.3425 16.4963 2.3425C17.215 2.3425 17.9163 2.4275 18.5875 2.58625C16.6238 0.97 14.11 0 11.3687 0C5.09 0 0 5.09125 0 11.37C0 17.6488 5.09 22.7388 11.3687 22.7388C14.11 22.7388 16.6238 21.7688 18.5875 20.1538C17.9163 20.3125 17.215 20.3975 16.4963 20.3975C11.51 20.3975 7.46875 16.355 7.46875 11.37Z"
                      fill="#1C222F"
                    />
                  </g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.7939 1.66602V6.05477C24.8814 7.54602 25.5239 9.38227 25.5239 11.3698C25.5239 13.356 24.8814 15.1935 23.7939 16.6848V21.086H29.8539V6.37352H36.0202V21.086H42.0802V1.66602H23.7939Z"
                    fill="#1C222F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M46.8403 1.66602V6.30102H52.4478V21.086H58.5078V6.30102H64.1153V1.66602H46.8403Z"
                    fill="#1C222F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M68.88 1.66602V21.086H74.9413V13.1773H81.2138V21.086H87.2738V1.66602H81.2138V8.39977H74.9413V1.66602H68.88Z"
                    fill="#1C222F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M92.03 1.63184V11.3593V21.0868H98.09V13.3968H99.6788L104.274 21.0868H111.238L105.213 11.3593L111.238 1.63184H104.274L99.6788 9.32184H98.09V1.63184H92.03Z"
                    fill="#1C222F"
                  />
                </svg>

                <div className="relative w-full text-base font-normal leading-6 tracking-normal text-gray-90 opacity-40 [font-family:'Roboto',Helvetica] xl:w-[233px]">
                  {
                    'Программное обеспечение\nи разработка современных\nfintech-решений'
                  }
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 xl:w-[284px]">
              <div className="relative flex h-[132px] w-full flex-col items-center justify-center gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-base font-normal leading-7 tracking-normal text-gray-90 opacity-40 [font-family:'Roboto',Helvetica]">
                  {t('contacts.title')}
                </div>

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                  <div className="relative mt-[-1.00px] w-full text-xl font-bold leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[233px]">
                    +7 (495) 006-21-57
                  </div>

                  <p className="relative self-stretch text-base font-normal leading-6 tracking-normal text-gray-90 opacity-40 [font-family:'Roboto',Helvetica]">
                    {t('contacts.address')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="relative w-full text-base font-normal leading-6 tracking-normal text-gray-90 opacity-40 [font-family:'Roboto',Helvetica] xl:w-[233px]">
            © 2022 Sputnik – <br />
            {t('automation.title')}
          </p>
        </footer>
      </div>
    </>
  );
};
