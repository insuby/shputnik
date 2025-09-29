import { useTranslation } from 'react-i18next';

type Props = {
  className: any;
  text: string;
  hasDiv: boolean;
  text1: string;
};

export const Cta = ({
  className,
  text = '{t("cta.title")}',
  hasDiv = true,
  text1 = '{t("cta.contact")}',
}: Props): JSX.Element => {
  const { t } = useTranslation('fdata');
  return (
    <div
      className={`relative flex w-full flex-col items-start gap-2.5 rounded-[40px] bg-[#3573fc1f] p-3 xl:w-[1376px] ${className}`}
    >
      <div className="relative flex w-full flex-[0_0_auto] items-center gap-2.5 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-7 xl:p-[60px]">
        <svg
          width="939"
          height="763"
          viewBox="0 0 939 763"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-14 top-[-306px] h-[590px] w-full xl:w-[620px]"
          alt="Vector"
        >
          <g opacity="0.4" filter="url(#filter0_f_0_4)">
            <path
              d="M464.944 503.537C498.131 571.515 595.163 567.495 639.531 556.988C873.053 432.314 637.967 213.464 500.958 200.826C363.949 188.189 162.528 335.014 206.115 424.295C249.702 513.575 423.459 418.564 464.944 503.537Z"
              fill="#00FF6A"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_0_4"
              x="0"
              y="0"
              width="938.568"
              height="763"
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
                result="effect1_foregroundBlur_0_4"
              />
            </filter>
          </defs>
        </svg>

        <svg
          width="1040"
          height="846"
          viewBox="0 0 1040 846"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[666px] top-[-109px] h-[675px] w-full xl:w-[727px]"
          alt="Vector"
        >
          <g opacity="0.3" filter="url(#filter0_f_0_5)">
            <path
              d="M504.647 285.206C536.838 200.58 652.933 194.855 706.957 202.57C998.823 325.867 742.327 612.212 580.386 642.126C418.445 672.04 162.442 518.86 204.72 407.715C246.997 296.571 464.41 390.989 504.647 285.206Z"
              fill="#FF2BB8"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_0_5"
              x="0"
              y="0"
              width="1039.94"
              height="846"
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
                result="effect1_foregroundBlur_0_5"
              />
            </filter>
          </defs>
        </svg>

        <div className="relative flex w-full flex-col items-start gap-7 xl:w-[696px]">
          <div className="relative flex w-full flex-col items-start gap-4 self-stretch xl:h-[120px]">
            <div className="relative mt-[-1.00px] self-stretch text-center text-[40px] font-medium leading-tight tracking-normal text-white [font-family:'Roboto',Helvetica] xl:text-left xl:leading-[48px]">
              {text}
            </div>

            {hasDiv && (
              <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-white opacity-60 [font-family:'Roboto',Helvetica]">
                {t('cta.description')}
              </p>
            )}
          </div>

          <button className="all-[unset] relative box-border inline-flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-white px-8 py-4 xl:w-fit">
            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {text1}
            </div>
          </button>
        </div>

        <div className="absolute left-[789px] top-12 flex w-full flex-col items-start gap-3 rounded-[32px] bg-[#ffffff] p-6 xl:w-[328px]">
          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            {t('calculator.title')}
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch overflow-hidden rounded-2xl bg-[#f2f5ff] p-4">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                  {t('calculator.amount')}
                </div>

                <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  160 000 ₽
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                <svg
                  width="248"
                  height="30"
                  viewBox="0 0 248 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative mt-[-6.00px] h-[30px] w-full self-stretch"
                  alt="Frame"
                >
                  <path
                    d="M4 13L245 13"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 13L163 13"
                    stroke="#3573FC"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <g filter="url(#filter0_d_0_21)">
                    <rect
                      x="154"
                      y="6"
                      width="18"
                      height="14"
                      rx="7"
                      fill="white"
                    />
                  </g>
                  <path d="M161 11V15" stroke="#E3E5E8" strokeLinecap="round" />
                  <path d="M163 11V15" stroke="#E3E5E8" strokeLinecap="round" />
                  <path d="M165 11V15" stroke="#E3E5E8" strokeLinecap="round" />
                  <defs>
                    <filter
                      id="filter0_d_0_21"
                      x="146"
                      y="0"
                      width="34"
                      height="30"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="4" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.251433 0 0 0 0 0.339361 0 0 0 0 0.533654 0 0 0 0.24 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_21"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_21"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>

                <div className="relative flex h-4 w-full items-start justify-between self-stretch">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                    10 000 ₽
                  </div>

                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                    200 000 ₽
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch overflow-hidden rounded-2xl bg-[#f2f5ff] p-4">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                  {t('calculator.period')}
                </div>

                <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('calculator.periodValue')}
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                <svg
                  width="248"
                  height="30"
                  viewBox="0 0 248 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative mb-[-10.00px] mt-[-6.00px] h-[30px] w-full self-stretch"
                  alt="Frame"
                >
                  <path
                    d="M4 13L243 13"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 13.0001L84.5 13"
                    stroke="#3573FC"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <g filter="url(#filter0_d_0_38)">
                    <rect
                      x="75"
                      y="6"
                      width="18"
                      height="14"
                      rx="7"
                      fill="white"
                    />
                  </g>
                  <path d="M82 11V15" stroke="#E3E5E8" strokeLinecap="round" />
                  <path d="M84 11V15" stroke="#E3E5E8" strokeLinecap="round" />
                  <path d="M86 11V15" stroke="#E3E5E8" strokeLinecap="round" />
                  <defs>
                    <filter
                      id="filter0_d_0_38"
                      x="67"
                      y="0"
                      width="34"
                      height="30"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="4" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.251433 0 0 0 0 0.339361 0 0 0 0 0.533654 0 0 0 0.24 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_38"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_38"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <button className="all-[unset] relative box-border flex h-12 w-full items-center justify-center gap-7 self-stretch rounded-3xl bg-gray-90 px-8 py-3">
            <div className="relative mt-[-1.00px] w-full self-stretch whitespace-nowrap text-center text-base font-medium leading-6 tracking-normal text-white [font-family:'Roboto',Helvetica] xl:w-[164px]">
              {t('calculator.submit')}
            </div>
          </button>
        </div>

        <svg
          width="669"
          height="732"
          viewBox="0 0 669 732"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[874px] top-6 h-[403px] w-full xl:w-[426px]"
          alt="Vector"
        >
          <g opacity="0.16" filter="url(#filter0_f_0_76)">
            <path
              d="M267.282 332.536C243.871 286.891 285.493 235.854 309.23 216.041C471.821 139.955 495.065 356.516 446.237 436.024C397.41 515.532 235.842 565.189 205.095 505.241C174.348 445.293 296.546 389.592 267.282 332.536Z"
              fill="#7C92C8"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_0_76"
              x="0"
              y="0"
              width="669"
              height="731.863"
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
                result="effect1_foregroundBlur_0_76"
              />
            </filter>
          </defs>
        </svg>

        <div className="absolute left-[1044px] top-[90px] inline-flex flex-col items-center justify-center gap-3 rounded-[32px_32px_0px_0px] bg-white p-4">
          <div className="relative size-[212px] rounded-[100px]">
            <div className="relative left-[7px] top-[7px] size-[198px]">
              <div className="absolute left-10 top-[68px] inline-flex h-[62px] flex-col items-center gap-0.5">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                  {t('balance.currentBalance')}
                </div>

                <div className="relative w-fit whitespace-nowrap text-center text-[28px] font-medium leading-10 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                  86,000₽
                </div>
              </div>

              <div className="absolute left-0 top-0 size-[198px] rounded-[99px] border-[10px] border-solid border-neutral-50" />

              <svg
                width="198"
                height="198"
                viewBox="0 0 198 198"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-0 size-[198px]"
                alt="Ellipse"
              >
                <path
                  d="M5 99C5 150.915 47.0852 193 99 193C150.915 193 193 150.915 193 99C193 47.0852 150.915 5 99 5"
                  stroke="url(#paint0_linear_0_83)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_83"
                    x1="99"
                    y1="5"
                    x2="43.5"
                    y2="-9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#04CA84" />
                    <stop offset="1" stopColor="#04CA84" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch rounded-[20px] bg-[#f6f8ff] px-4 py-3">
            <div className="relative w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
              {t('calculator.loanAmount')}
            </div>

            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              122, 000₽
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
