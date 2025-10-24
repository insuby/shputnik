import { Feedback, Trust, useFeedbackForm } from 'widgets';

import { useTranslation } from 'react-i18next';

import { isMobile } from 'shared/lib/is-mobile.ts';
import { PAGE_META } from 'shared/lib/page-meta-config';
import { usePageMeta } from 'shared/lib/use-page-meta';

export const About = () => {
  const { setIsOpen } = useFeedbackForm();
  const { t } = useTranslation(['about']);
  const pageMeta = usePageMeta(PAGE_META.about);

  const onClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      {pageMeta}
      <section
        className="relative flex w-full max-w-full flex-col items-start justify-center overflow-hidden"
        aria-labelledby="about-title"
      >
        <div className="relative flex w-full max-w-[1440px] flex-[0_0_auto] flex-col items-center gap-[72px] pt-0 lg:px-8 lg:pb-[88px] lg:pt-8">
          <div className="relative flex w-full max-w-full flex-[0_0_auto] flex-col items-center gap-[88px] lg:mx-[-8.00px] lg:inline-flex">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-8 self-stretch">
              <section className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-10 self-stretch overflow-hidden rounded-[32px] bg-[#ffffff] px-1 pb-10 pt-16 lg:!gap-20 lg:!px-20 lg:!pb-20 lg:pt-[88px]">
                <svg
                  width="1376"
                  height="772"
                  viewBox="0 0 1376 772"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 top-[37px] hidden h-[1060px] lg:left-[143px] lg:block lg:w-[1108px]"
                  aria-hidden={true}
                >
                  <g opacity="0.24" filter="url(#filter0_f_9263_2745)">
                    <path
                      d="M697.194 398.527C763.439 284.237 931.956 303.282 1007.93 327.092C1399.22 573.24 962.573 925.267 722.354 930.275C482.136 935.283 149.513 654.534 236.517 504.43C323.521 354.326 614.388 541.389 697.194 398.527Z"
                      fill="#3573FC"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_9263_2745"
                      x="-150.343"
                      y="-63.6674"
                      width="1687.5"
                      height="1366.71"
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
                        result="effect1_foregroundBlur_9263_2745"
                      />
                    </filter>
                  </defs>
                </svg>

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-6 lg:w-[980px] lg:gap-8">
                  <h1
                    id="about-title"
                    className="relative mt-[-1.00px] self-stretch text-center text-5xl font-medium tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-6xl lg:leading-[68px]"
                  >
                    {t('title', { ns: 'about' })}
                  </h1>

                  <p className="relative w-full px-2 text-center text-xl font-normal tracking-normal text-[#929cb3] [font-family:'Roboto',Helvetica] lg:w-[786px] lg:leading-7">
                    {t('subtitle', { ns: 'about' })}
                  </p>
                </div>

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch lg:!flex-row ">
                  <div className="relative inline-flex flex-[0_0_auto] items-start gap-8 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-6 lg:p-10">
                    <svg
                      width="753"
                      height="638"
                      viewBox="0 0 753 638"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-0 top-0 hidden h-[386px] w-[409px] lg:left-[-157px] lg:top-[-141px] lg:block"
                      aria-hidden={true}
                    >
                      <g opacity="0.4" filter="url(#filter0_f_9263_3599)">
                        <path
                          d="M373.657 398.938C395.397 443.469 458.961 440.836 488.025 433.953C640.999 352.282 487 208.919 397.249 200.641C307.498 192.362 175.553 288.544 204.106 347.029C232.659 405.514 346.482 343.275 373.657 398.938Z"
                          fill="#00FF6A"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_9263_3599"
                          x="0"
                          y="0"
                          width="753"
                          height="637.991"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="100"
                            result="effect1_foregroundBlur_9263_3599"
                          />
                        </filter>
                      </defs>
                    </svg>

                    <svg
                      width="819"
                      height="692"
                      viewBox="0 0 819 692"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-0 top-0 hidden h-[442px] w-[476px] lg:-top-2 lg:left-[189px] lg:block"
                      aria-hidden={true}
                    >
                      <g opacity="0.3" filter="url(#filter0_f_9263_3600)">
                        <path
                          d="M399.457 255.784C420.533 200.377 496.543 196.629 531.913 201.68C723.004 282.405 555.071 469.881 449.045 489.466C343.018 509.052 175.408 408.762 203.088 335.993C230.768 263.224 373.112 325.042 399.457 255.784Z"
                          fill="#FF2BB8"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_9263_3600"
                          x="0"
                          y="0"
                          width="818.974"
                          height="692"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="100"
                            result="effect1_foregroundBlur_9263_3600"
                          />
                        </filter>
                      </defs>
                    </svg>

                    <div className="relative flex w-full flex-col items-start gap-4 lg:w-[340px]">
                      <div className="relative mt-[-1.00px] self-stretch text-5xl font-normal leading-tight tracking-normal text-white [font-family:'Roboto',Helvetica] lg:text-[68px] lg:leading-[72px]">
                        12
                      </div>

                      <div className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-white [font-family:'Roboto',Helvetica]">
                        {t('yearsOnMarket', { ns: 'about' })
                          .split('\n')
                          .map((line, idx) => (
                            <span key={idx}>
                              {line}
                              <br />
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-1 grow flex-col items-start gap-8 rounded-[32px] bg-[#ffffff] p-5 lg:!flex-row lg:gap-[60px] lg:p-10">
                    <div className="relative flex flex-1 grow flex-col items-start gap-4">
                      <div className="relative mt-[-1.00px] self-stretch text-5xl font-normal leading-tight tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica] lg:text-[68px] lg:leading-[72px]">
                        200+
                      </div>

                      <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                        {t('projectsCompleted', { ns: 'about' })}
                      </p>

                      <div className="relative inline-flex flex-[0_0_auto] flex-wrap items-center gap-2 lg:mr-[-3.00px]">
                        <div className="relative inline-flex h-8 flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[52px] bg-[#ff8068] px-3 py-2 backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                          <div className="relative mb-[-1.50px] mt-[-2.50px] w-fit whitespace-nowrap text-sm font-medium leading-5 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                            Java
                          </div>
                        </div>

                        <div className="relative inline-flex h-8 flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[52px] bg-[#00cb82] px-3 py-2 backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                          <div className="relative mb-[-1.50px] mt-[-2.50px] w-fit whitespace-nowrap text-sm font-medium leading-5 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                            Python
                          </div>
                        </div>

                        <div className="relative inline-flex h-8 flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[52px] bg-[#fbab00] px-3 py-2 backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                          <div className="relative mb-[-1.50px] mt-[-2.50px] w-fit whitespace-nowrap text-sm font-medium leading-5 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                            React
                          </div>
                        </div>
                      </div>
                    </div>

                    <svg
                      width="1"
                      height="220"
                      viewBox="0 0 1 220"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative hidden w-px self-stretch lg:block"
                      aria-hidden={true}
                    >
                      <path d="M0.5 0V220" stroke="#E3E5E8" />
                    </svg>

                    <div className="relative flex flex-1 grow flex-col items-start justify-between self-stretch">
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                        <div className="relative mt-[-1.00px] w-full text-5xl font-normal leading-tight tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica] lg:w-[286px] lg:text-[68px] lg:leading-[72px]">
                          30+
                        </div>

                        <div className="relative w-full text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica] lg:w-[286px]">
                          {t('inHouseDevelopers', { ns: 'about' })}
                        </div>
                      </div>

                      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                        <div className="relative inline-flex flex-[0_0_auto] items-center gap-1">
                          <div className="relative mt-3 inline-flex flex-[0_0_auto] items-center">
                            <div className="relative my-[-3.00px] ml-[-3.00px] size-[54px] overflow-hidden rounded-full border-[3px] border-solid border-[#ffffff]">
                              <img
                                alt="Woman with tablet"
                                src="/img/woman-tablet.png"
                              />
                            </div>

                            <div className="relative my-[-3.00px] -ml-2.5 size-[54px] overflow-hidden rounded-full border-[3px] border-solid border-[#ffffff]">
                              <img
                                alt="Woman with tablet"
                                src="/img/woman-tablet-2.png"
                              />
                            </div>

                            <div className="relative my-[-3.00px] -ml-2.5 size-[54px] overflow-hidden rounded-full border-[3px] border-solid border-[#ffffff]">
                              <img
                                alt="Woman with tablet"
                                src="/img/woman-tablet-3.jpg"
                              />
                            </div>

                            <div className="relative my-[-3.00px] -ml-2.5 size-[54px] overflow-hidden rounded-full border-[3px] border-solid border-[#ffffff]">
                              <img
                                alt="Woman with tablet"
                                src="/img/woman-tablet-4.png"
                              />
                            </div>

                            <div className="relative my-[-3.00px] -ml-2.5 mr-[-3.00px] flex size-[54px] items-center justify-center gap-2.5 rounded-[52px] border-[3px] border-solid border-[#ffffff] bg-[#f7f8f9] p-2 backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                              <div className="relative w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#55607a] [font-family:'Inter',Helvetica]">
                                +3
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5 p-2 lg:p-0">
              <h2 className="relative mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]  lg:text-5xl lg:leading-[60px]">
                {t('offices', { ns: 'about' })}
              </h2>

              {!isMobile ? (
                <p className="relative text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                  {t('officesSubtitle', { ns: 'about' })}
                </p>
              ) : (
                <p className="relative text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                  {t('officesSubtitle', { ns: 'about' })}
                </p>
              )}
            </section>

            <section className="relative flex flex-[0_0_auto] flex-col items-stretch gap-4 self-stretch p-2 lg:!flex-row lg:p-0">
              <article
                aria-labelledby="office-murmansk"
                className="relative flex size-full flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafc] p-7 lg:!h-[412px] lg:gap-12 lg:p-12"
              >
                <div className="relative inline-flex w-full flex-[1_0_auto] flex-col items-start gap-6">
                  <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                    <h2
                      id="office-murmansk"
                      className="relative mt-[-1.00px] w-fit text-3xl font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:whitespace-nowrap lg:text-[40px]"
                    >
                      {t('murmansk', { ns: 'about' })}
                    </h2>

                    <svg
                      width="37"
                      height="48"
                      viewBox="0 0 37 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12w-full relative lg:w-[37px]"
                      aria-hidden={true}
                    >
                      <g clipPath="url(#clip0_9263_4176)">
                        <path
                          d="M0.128906 41.9929V0.129028H36.8697V42.1065C36.8697 42.1065 36.5691 44.8778 33.6663 44.8778C30.7635 44.8778 21.0496 44.8778 21.0496 44.8778C20.1995 44.3152 17.9862 46.0338 18.349 47.8658C18.349 47.8658 17.8462 44.8778 15.8454 44.8778C13.8445 44.8778 2.93319 44.8778 2.93319 44.8778C2.93319 44.8778 0.128906 43.985 0.128906 41.9929Z"
                          fill="#005197"
                        />
                        <path
                          d="M0.128906 41.993V28.3376H36.8697V42.1065C36.8697 42.1065 36.5691 44.8778 33.6663 44.8778C30.7635 44.8778 21.0496 44.8778 21.0496 44.8778C20.1062 44.2946 18.1417 46.1473 18.349 47.8659C18.349 47.8659 17.8462 44.8778 15.8454 44.8778C13.8445 44.8778 2.93319 44.8778 2.93319 44.8778C2.93319 44.8778 0.128906 44.3101 0.128906 41.993Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M16.5408 33.6893L15.5663 34.4996C9.84365 34.4325 8.73438 35.9239 8.73438 35.9239C9.60002 37.2915 14.3429 37.8128 14.3429 37.8128C14.3948 36.2387 13.498 35.4749 13.498 35.4749C13.498 35.4749 13.3995 35.4079 13.4721 35.2788C13.5447 35.1498 13.7779 35.2737 13.7779 35.2737C14.3326 35.7278 14.5607 36.12 14.6902 37.2502C14.8561 38.7262 15.3745 38.6075 15.3745 38.6075C15.2138 38.4114 15.3693 38.0037 15.3693 38.0037C20.0189 38.1379 23.5333 37.3122 24.0569 37.0541C24.5752 36.7961 24.7411 37.0232 24.9692 37.1831C25.1973 37.3431 26.1096 37.2812 26.3324 36.858C26.5605 36.4348 27.5039 36.3729 27.5039 36.3729C28.6443 36.3058 29.8469 36.8271 29.8469 36.8271C29.7795 36.1458 28.6443 35.4698 28.6443 35.4698C29.1626 35.0466 28.9242 34.128 28.9242 34.128C28.9242 34.128 28.0897 35.1137 26.5294 35.5317C24.9588 35.9549 21.9109 35.3356 21.9109 35.3356L21.8435 34.7215C18.298 34.9176 16.5408 33.6893 16.5408 33.6893ZM12.2903 34.9279C12.6013 34.9279 12.8501 35.1808 12.8501 35.4853C12.8501 35.7949 12.5961 36.0426 12.2903 36.0426C11.9844 36.0426 11.7305 35.7949 11.7305 35.4853C11.7305 35.1756 11.9793 34.9279 12.2903 34.9279Z"
                          fill="#005197"
                        />
                        <path
                          d="M14.3944 19.5541V23.1563H13.197L12.7202 22.6815H8.11719C8.11719 22.6815 8.4593 25.0296 10.0247 25.0296H27.4725L28.6232 24.2245V23.4453H24.2742V20.0856H23.6159V23.4453H21.7706V22.7124L21.3093 22.2531H19.9875V20.5501H18.987L18.5931 21.2262H16.784V23.1563H15.0476V19.5541H14.3944Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M6.92337 6.44805L6.42969 6.60535L9.60062 16.4699L10.0943 16.3126L6.92337 6.44805Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M8.53272 6.3465L8.03516 6.49121L10.9188 16.3195L11.4164 16.1748L8.53272 6.3465Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M9.9286 5.26211L9.42383 5.37952L11.7705 15.3803L12.2753 15.2629L9.9286 5.26211Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M11.1786 3.69235L10.6699 3.79138L12.8205 14.7414L13.3292 14.6423L11.1786 3.69235Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M12.4753 3.18288L11.9648 3.27283L13.92 14.2698L14.4304 14.1798L12.4753 3.18288Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M13.7448 3.77685L13.2324 3.85535L14.7966 13.9755L15.309 13.897L13.7448 3.77685Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M15.4798 6.5609L14.9648 6.61963L15.8691 14.4796L16.3841 14.4209L15.4798 6.5609Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M16.8533 6.64443L16.3359 6.67737L16.8735 15.0468L17.3909 15.0139L16.8533 6.64443Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M18.5827 14.6668L18.0747 14.5636C18.0747 14.5687 18.0695 14.5791 18.0695 14.5945C18.0799 14.3468 17.8103 9.13448 17.6289 5.69743L18.1473 5.67163C18.6138 14.512 18.5879 14.6255 18.5827 14.6668Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M19.784 4.88648L19.2656 4.88794L19.2901 13.5219L19.8084 13.5204L19.784 4.88648Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M21.2976 4.86078L20.7793 4.8623L20.8037 13.0834L21.3221 13.0818L21.2976 4.86078Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M22.3696 5.2896L22.125 12.175L22.643 12.1933L22.8877 5.30784L22.3696 5.2896Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M23.6867 5.71667L23.1738 12.3077L23.6906 12.3476L24.2035 5.75653L23.6867 5.71667Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M24.7632 6.29409L24.1523 12.4727L24.6682 12.5232L25.279 6.34465L24.7632 6.29409Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M25.9115 5.66666L25.3008 12.0629L25.8168 12.1117L26.4275 5.7155L25.9115 5.66666Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M27.2596 5.04705L26.502 11.2043L27.0165 11.2671L27.7741 5.1098L27.2596 5.04705Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M28.6502 4.43381L27.6484 10.88L28.1607 10.9589L29.1625 4.51271L28.6502 4.43381Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M29.5552 5.89065L28.5781 11.8496L29.0897 11.9327L30.0667 5.97379L29.5552 5.89065Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M30.5809 6.69077L29.5547 12.432L30.065 12.5224L31.0912 6.78118L30.5809 6.69077Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M31.9779 6.04622L30.707 12.0082L31.2141 12.1153L32.485 6.15336L31.9779 6.04622Z"
                          fill="#FDDC00"
                        />
                        <path
                          d="M18.1164 47.8916C18.1112 47.8607 17.6499 45.0119 15.846 45.0119H2.92351H2.91314C2.88204 45.0068 2.17708 44.9139 1.46175 44.4959C0.507986 43.9385 0 43.0715 0 41.9929V0H37V42.1219C36.9948 42.1529 36.9171 42.8547 36.4661 43.5618C36.0514 44.2223 35.2272 45.0068 33.667 45.0068H21.0555C19.1065 45.0068 18.5881 46.106 18.3756 47.8813L18.1164 47.8916ZM2.94424 44.7539H15.8512C17.2974 44.7539 17.9557 46.266 18.2201 47.1794C18.4585 45.9099 19.0391 44.7539 21.0555 44.7539H33.6722C34.8281 44.7539 35.6989 44.3101 36.2536 43.4276C36.6475 42.8031 36.7356 42.1684 36.746 42.1013V0.258037H0.259176V41.9929C0.259176 44.3101 2.78355 44.7281 2.94424 44.7539Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_9263_4176">
                          <rect width="37" height="48" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <address className="relative text-xl font-normal not-italic leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('murmanskAddress')}
                  </address>
                  <p className="relative text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    <a href="tel:+74950062157" className="hover:text-[#3573FC]">
                      + 7 (495) 006 21 57
                    </a>
                  </p>
                </div>

                <button
                  className="all-[unset] relative box-border inline-flex w-full flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 hover:bg-blue-600 lg:w-fit"
                  onClick={onClick}
                >
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                    {t('contact', { ns: 'about' })}
                  </div>
                </button>
              </article>

              <div
                className="size-full h-[412px] self-stretch rounded-[32px] bg-cover bg-center bg-no-repeat p-7 lg:gap-12 lg:p-12"
                style={{
                  backgroundImage:
                    "url('/img/about/photo_2025-08-01_16-05-04 1.png')",
                }}
              />
            </section>
          </div>

          <Feedback />
          <Trust />
        </div>
      </section>
    </>
  );
};
