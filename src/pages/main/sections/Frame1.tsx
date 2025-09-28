import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const Frame1 = () => {
  const { t } = useTranslation(['home']);
  const ref37l = useRef<HTMLSpanElement>(null);
  const ref37r = useRef<HTMLSpanElement>(null);
  const ref38 = useRef<HTMLParagraphElement>(null);
  const ref39 = useRef<HTMLParagraphElement>(null);
  const ref40 = useRef<HTMLDivElement>(null);
  const ref41l = useRef<HTMLDivElement>(null);
  const ref41 = useRef<HTMLDivElement>(null);
  const ref42 = useRef<HTMLDivElement>(null);
  const ref42r = useRef<HTMLDivElement>(null);
  const ref43r = useRef<HTMLDivElement>(null);
  const ref44 = useRef<HTMLDivElement>(null);
  const ref46l = useRef<HTMLDivElement>(null);
  const ref47r = useRef<HTMLParagraphElement>(null);
  const inView37l = useInView(ref37l, { once: true, margin: '-100px' });
  const inView37r = useInView(ref37r, { once: true, margin: '-100px' });
  const inView38 = useInView(ref38, { once: true, margin: '-100px' });
  const inView39 = useInView(ref39, { once: true, margin: '-100px' });
  const inView40 = useInView(ref40, { once: true, margin: '-100px' });
  const inView41l = useInView(ref41l, { once: true, margin: '-100px' });
  const inView41 = useInView(ref41, { once: true, margin: '-100px' });
  const inView42 = useInView(ref42, { once: true, margin: '-100px' });
  const inView42r = useInView(ref42r, { once: true, margin: '-100px' });
  const inView43r = useInView(ref43r, { once: true, margin: '-100px' });
  const inView44 = useInView(ref44, { once: true, margin: '-100px' });
  const inView46l = useInView(ref46l, { once: true, margin: '-100px' });
  const inView47r = useInView(ref47r, { once: true, margin: '-100px' });
  return (
    <section
      className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch"
      aria-labelledby="other-software"
    >
      <h2
        id="other-software"
        className="relative mt-[-1.00px] w-fit whitespace-nowrap text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
      >
        <motion.span
          id="animate_37_left"
          ref={ref37l}
          initial={{ opacity: 0, x: -40 }}
          animate={inView37l ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-[#1c222f]"
        >
          {t('otherSoftware').split(' ')[0]}{' '}
        </motion.span>
        <motion.span
          id="animate_37_right"
          ref={ref37r}
          initial={{ opacity: 0, x: 40 }}
          animate={inView37r ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-[#9ea7bb]"
        >
          {t('otherSoftware').split(' ').slice(1).join(' ')}
        </motion.span>
      </h2>

      <div className="relative flex h-[600px] w-full items-start gap-5 self-stretch">
        <div className="relative flex flex-1 grow items-center gap-5 self-stretch">
          <div className="group relative flex flex-1 grow cursor-pointer flex-col items-start justify-center self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-transparent bg-[#f9fafd] hover:border-[#3573fc] hover:bg-[#f5f7ff]">
            <div className="relative w-full flex-1 grow self-stretch overflow-hidden rounded-[32px] bg-gray-100 bg-[100%_100%]">
              <div className="relative left-[59px] top-[-49px] h-[372px] w-full md:w-[560px]">
                <svg
                  className="absolute left-[91px] top-0 h-[372px] w-full md:w-[415px]"
                  width="1078"
                  height="1072"
                  viewBox="0 0 1078 1072"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Vector"
                >
                  <g opacity="0.4" filter="url(#filter0_f_9062_7)">
                    <path
                      d="M589.852 586.159C601.21 640.449 543.216 681.763 512.799 695.634C321.503 728.473 359.197 496.013 432.848 427.072C506.499 358.132 689.17 352.558 704.086 423.86C719.003 495.162 575.655 518.297 589.852 586.159Z"
                      fill="#725DD6"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_9062_7"
                      x="0"
                      y="0"
                      width="1078"
                      height="1071.62"
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
                        result="effect1_foregroundBlur_9062_7"
                      />
                    </filter>
                  </defs>
                </svg>

                <motion.div
                  id="animate_40"
                  ref={ref40}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView40 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute left-[177px] top-[100px] inline-flex flex-col items-start gap-2.5 rounded-[32px] bg-[#ffffff5c] p-2"
                >
                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2.5 self-stretch rounded-3xl bg-[#ffffff] p-6">
                    <div className="h-7w-full relative md:w-[142.55px]">
                            <div className="relative h-[29px] w-full md:w-[142px] flex items-center justify-center">
                              <svg
                                width="112"
                                height="24"
                                viewBox="0 0 112 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g mask="url(#mask0_9587_14956)">
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7.46875 12.0009C7.46875 7.01586 11.51 2.97336 16.4963 2.97336C17.215 2.97336 17.9163 3.05836 18.5875 3.21711C16.6238 1.60086 14.11 0.630859 11.3687 0.630859C5.09 0.630859 0 5.72211 0 12.0009C0 18.2796 5.09 23.3696 11.3687 23.3696C14.11 23.3696 16.6238 22.3996 18.5875 20.7846C17.9163 20.9434 17.215 21.0284 16.4963 21.0284C11.51 21.0284 7.46875 16.9859 7.46875 12.0009Z"
                                    fill="#1C222F"
                                  ></path>
                                </g>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M23.7939 2.29688V6.68563C24.8814 8.17688 25.5239 10.0131 25.5239 12.0006C25.5239 13.9869 24.8814 15.8244 23.7939 17.3156V21.7169H29.8539V7.00438H36.0202V21.7169H42.0802V2.29688H23.7939Z"
                                  fill="#1C222F"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M46.8403 2.29688V6.93188H52.4478V21.7169H58.5078V6.93188H64.1153V2.29688H46.8403Z"
                                  fill="#1C222F"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M68.88 2.29688V21.7169H74.9413V13.8081H81.2138V21.7169H87.2738V2.29688H81.2138V9.03063H74.9413V2.29688H68.88Z"
                                  fill="#1C222F"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M92.03 2.2627V11.9902V21.7177H98.09V14.0277H99.6788L104.274 21.7177H111.238L105.213 11.9902L111.238 2.2627H104.274L99.6788 9.95269H98.09V2.2627H92.03Z"
                                  fill="#1C222F"
                                ></path>
                              </svg>
                            </div>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute left-0 top-[262px] h-[104px] w-full md:w-[560px]">
                  <motion.div
                    id="animate_41_left"
                    ref={ref41l}
                    initial={{ opacity: 0, x: -40 }}
                    animate={inView41l ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="absolute left-0 top-0 inline-flex flex-col items-start gap-2.5 rounded-3xl bg-[#ffffff] p-6"
                  >
                    <svg
                      width="58"
                      height="59"
                      viewBox="0 0 58 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative mx-[-0.67px] mb-[-0.67px] mt-[-1.32px] h-[58px] w-full md:w-[57.34px]"
                      alt="Group"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M29.0001 3.61905C14.4324 3.61905 2.62109 15.4303 2.62109 29.994C2.62109 44.5674 14.4324 56.3855 29.0001 56.3855C43.5737 56.3855 55.3849 44.5674 55.3849 29.994C55.3849 19.7828 49.5653 10.9425 41.0708 6.55863C40.9902 6.48515 40.9234 6.42048 40.8388 6.34405C40.8388 6.34405 40.8329 6.38324 40.8329 6.44301C39.7916 5.91856 38.716 5.46451 37.6135 5.08395C37.698 4.72532 37.8111 4.19423 37.8573 3.80131C37.9074 3.32118 37.523 2.81851 36.7317 3.00762C36.1841 3.12912 34.7774 3.62003 33.5466 4.03549C32.0662 3.77975 30.5533 3.61905 29.0001 3.61905Z"
                        fill="#1C222F"
                        stroke="white"
                        strokeWidth="4.57833"
                        strokeMiterlimit="2.613"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.62109 29.994C2.62109 15.4304 14.4324 3.61914 29.0001 3.61914C43.5737 3.61914 55.3849 15.4304 55.3849 29.994C55.3849 44.5675 43.5727 56.3856 29.0001 56.3856C14.4314 56.3856 2.62109 44.5675 2.62109 29.994Z"
                        fill="white"
                        stroke="#1C222F"
                        strokeWidth="1.23213"
                        strokeMiterlimit="2.613"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M38.6928 4.30757C49.0708 8.21918 56.4524 18.2461 56.4524 29.9936C56.4524 45.155 44.1605 57.4474 29 57.4474C13.8395 57.4474 1.55345 45.155 1.55345 29.9936C1.55345 14.8372 13.8395 2.54774 29 2.54774C30.6318 2.54774 32.2372 2.68884 33.7943 2.9632L34.7429 2.58498C32.8536 2.19582 30.9293 1.99981 29 2C13.5387 2 1 14.5314 1 29.9936C1 45.4597 13.5397 58 29 58C44.4662 58 57 45.4597 57 29.9936C57 17.8982 49.3293 7.59011 38.5798 3.67556L38.6928 4.30757Z"
                        fill="#1C222F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.6464 35.2195C15.9167 34.8864 16.4829 34.418 17.2281 34.0506C18.2898 33.5136 21.3175 33.1638 22.9946 33.1863C23.9885 33.1971 24.655 33.6498 25.119 34.1123C25.582 34.5758 24.7857 34.6434 24.3895 34.3102C23.9885 33.983 23.5481 33.8703 23.085 33.8703C22.622 33.8703 22.1305 34.0506 21.871 34.2426C21.6046 34.4454 21.5377 34.7169 20.8761 34.9089C20.075 35.1353 19.148 34.4121 19.148 34.4121C19.7978 35.6379 20.9155 35.5978 21.5377 35.4459C21.9899 35.3273 22.1315 35.1186 22.797 35.1068C23.8587 35.0902 24.3227 35.7055 24.3227 35.7055C22.9946 35.6379 20.7474 36.4679 19.6788 36.7001C18.3517 36.9941 17.0924 37.0333 17.0924 37.0333C17.9506 38.0954 19.2158 38.0954 20.1477 38.0954C21.0737 38.0954 24.0563 37.875 25.8474 38.0278C28.0956 38.214 29.8916 39.6887 29.8916 41.8747C29.8916 44.0598 28.3728 45.2523 28.3728 45.2523C30.2927 44.6595 31.09 43.1339 31.09 43.1339C32.1133 47.0768 29.988 50.229 28.0445 51.5166C26.4294 52.5895 21.582 53.6977 17.8602 51.9173C13.7422 49.9459 12.1831 48.0253 12.1831 48.0253C21.1357 48.7543 25.5141 46.2733 25.5141 46.2733C17.4247 46.7427 11.782 44.6977 8.13297 43.0996C6.65992 40.7637 5.59804 38.1941 4.99313 35.5017V35.5076C11.6867 40.5461 17.6233 41.4103 17.6233 41.4103C10.393 37.4958 6.79505 33.1128 4.40527 28.7417C4.52491 26.2713 5.02046 23.8333 5.87492 21.5113L5.89163 21.4721C8.57436 28.6094 11.5235 30.7347 11.5235 30.7347C8.60286 24.0962 8.62548 19.3438 8.89188 15.7615C9.99952 14.1909 11.2886 12.7557 12.7326 11.4854L12.7543 11.4599C11.6257 17.8319 12.9804 21.9728 12.9804 21.9728C12.9804 16.9344 15.8105 10.9376 18.0637 7.88242C19.4624 7.18064 20.9269 6.61778 22.4362 6.20195H22.4412C20.3856 8.78683 19.4812 11.2943 19.4812 11.2943C23.7014 7.27882 30.6879 4.86641 31.7496 4.59498C32.8113 4.33532 35.8676 3.20554 36.7316 3.01055C37.523 2.82144 37.9064 3.3241 37.8572 3.80423C37.7904 4.42841 37.523 5.4651 37.523 5.4651C39.8676 6.03636 40.883 7.18769 40.883 7.18769C40.7946 6.87708 40.8388 6.34697 40.8388 6.34697C44.0701 9.22188 44.9518 10.5917 45.0413 13.1982C45.1317 15.8075 46.278 16.2063 46.9386 16.5591C47.6051 16.9118 49.2448 17.8466 49.7707 18.2875C50.1639 18.6207 49.9958 18.993 49.7707 19.2586C49.5495 19.5212 49.5495 19.6113 49.5092 19.919C49.3116 21.2751 48.7071 21.8229 47.8695 22.1276C47.029 22.4353 46.0971 21.9522 46.0971 21.9522C45.1701 22.9693 44.9951 22.305 44.9509 21.9101C44.9106 21.5113 44.419 21.8219 44.0701 21.9522C43.7152 22.0845 43.5844 21.5995 43.5844 21.5995C41.9005 21.379 41.1671 22.3736 41.1671 22.3736C42.6279 22.5715 43.3633 23.5651 43.4252 23.9639C43.494 24.3705 44.1546 24.0962 44.1546 24.0962C44.1546 24.0962 44.2155 23.9639 44.4888 23.8336C44.7543 23.7003 44.8211 23.7659 44.7543 24.0962C44.6874 24.4264 44.6176 24.6949 44.6176 24.6949L45.3529 25.1613C45.0806 26.9554 44.2912 26.878 43.8902 26.684C41.3421 25.4102 36.7955 25.1613 36.7955 25.1613C37.061 24.7625 37.698 24.252 37.698 24.252C26.0283 24.252 24.0573 25.6688 23.4586 26.4174C23.0457 26.9368 23.4016 27.7422 23.4016 27.7422C22.0116 28.0078 18.4874 28.8975 17.1367 30.136C15.8381 31.3226 15.4036 34.1074 15.3573 35.1353C15.3465 35.3489 15.5559 35.343 15.6464 35.2195ZM35.9757 5.14958C36.1064 5.00358 35.9757 4.88404 35.6267 5.10745C35.2699 5.32498 33.7108 6.2627 32.6599 8.02253C32.5311 8.24594 32.6078 8.57518 33.1691 8.3841C33.7219 8.19685 34.2909 8.06072 34.8688 7.97746C35.1794 7.93141 35.1794 7.71388 34.9612 7.62961C34.74 7.53653 34.6889 7.45127 34.7842 7.09657C34.8678 6.74284 35.4901 5.72378 35.9757 5.14958ZM33.0551 9.91954C30.7557 11.7813 26.971 16.2328 25.1868 20.4031C25.0511 20.7147 25.1868 20.7617 25.6272 20.4942C26.0735 20.2257 27.3554 19.6104 27.9718 19.432C27.9718 19.432 27.3043 21.7425 27.085 23.0154C26.9101 24.0638 27.7801 23.9815 28.3227 23.8571C28.8653 23.7356 31.1126 23.6366 31.5078 23.5896C31.5078 23.5896 29.4296 23.1006 29.2094 22.2599C28.9892 21.4231 29.582 19.5535 30.0057 18.2856C30.0961 18.0142 29.9605 17.6212 29.52 17.7937C29.0737 17.9691 28.4584 18.1014 28.1477 18.2856C28.1477 18.2856 30.0961 13.5068 33.1003 10.0557L33.0551 9.91954L43.3632 12.0488C43.1371 13.792 42.4992 13.6362 42.2111 13.5519C41.9005 13.4617 41.8159 13.3314 40.8821 13.2442C40.5881 13.2168 39.2286 13.0639 39.957 13.6371C41.1258 14.5719 42.1207 16.4699 42.1207 16.4699C42.2554 15.8516 41.9398 14.9678 41.7697 14.6591C41.5948 14.3456 41.8159 14.2613 42.0312 14.3034C42.2563 14.3456 42.3802 14.4308 42.7882 14.6591C43.1833 14.8767 43.4488 14.8375 43.5412 14.3034C43.6139 13.8429 43.5913 12.9022 43.4989 12.0527C43.4891 11.991 43.3878 11.9596 43.3642 12.0498L33.0551 9.91954Z"
                        fill="#1C222F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M46.3133 47.6914C45.2723 44.2119 42.4038 41.9925 40.8102 40.0661C40.1614 39.2813 39.201 38.1789 39.201 38.1789C40.132 38.71 41.9004 38.9755 41.9004 38.9755C41.4148 38.5738 40.3069 37.252 39.8675 36.716C38.6348 35.2423 36.4996 33.5922 34.914 32.8749C31.7958 31.463 28.5478 31.2827 28.1074 31.1974C27.6611 31.1073 26.735 31.2817 27.3052 30.3949C27.8823 29.5101 31.2423 26.9027 31.2423 26.9027C30.5365 26.9027 27.4409 27.1741 26.5089 27.3005C25.5829 27.4357 25.3676 27.1251 25.3175 26.5098C25.3175 26.5098 23.4537 28.2637 24.3463 29.1583C24.4819 29.2916 24.8771 29.3367 25.3686 29.1162C25.8493 28.8928 26.8216 28.5831 27.1764 28.543C27.1764 28.543 26.3792 29.7786 26.2052 30.3097C26.0292 30.8407 25.984 31.1063 26.8206 31.3718C27.6611 31.6315 31.9098 32.9641 34.5139 34.7328C37.1229 36.5014 39.8223 38.76 41.8179 42.9126C43.8066 47.0761 42.7105 50.2283 42.3998 50.8034C43.8175 49.899 45.1372 48.8505 46.3379 47.6747L46.3133 47.6914ZM52.13 38.8795C49.5721 36.8003 45.0796 33.0895 39.6021 31.8137C39.6021 31.8137 47.4183 34.9375 50.2101 42.7999C50.9655 41.5525 51.608 40.2405 52.13 38.8795Z"
                        fill="#1C222F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M36.784 53.475C37.6196 51.527 38.5407 46.8942 37.5695 43.3079C37.5695 43.3079 37.7484 51.7465 31.9592 54.5322C33.5941 54.3391 35.2061 53.987 36.7722 53.4808L36.784 53.475ZM53.7739 29.6663C53.0229 29.3626 48.3957 28.0525 48.3957 28.0525C49.945 27.9682 50.5653 26.8218 50.5653 26.8218C49.1084 27.2137 46.8946 27.3921 45.0416 27.1265C45.0416 27.1265 49.3286 28.9824 53.5989 33.0341V32.9939C53.712 32.017 53.7798 31.0166 53.7798 29.9946C53.7798 29.8691 53.7798 29.8015 53.7739 29.6663Z"
                        fill="#1C222F"
                      />
                    </svg>
                  </motion.div>

                  <motion.div
                    id="animate_41"
                    ref={ref41}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView41 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="absolute left-[152px] top-0 inline-flex flex-col items-start gap-2.5 rounded-3xl bg-[#ffffff] p-6"
                  >
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      className="relative size-14"
                      alt="Clip path group"
                    >
                      <rect
                        width="56"
                        height="56"
                        fill="url(#pattern0_9569_17303)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_9569_17303"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_9569_17303"
                            transform="translate(-0.229296 -0.489859) scale(0.00394366)"
                          />
                        </pattern>
                        <image
                          id="image0_9569_17303"
                          width="834"
                          height="456"
                          preserveAspectRatio="none"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                  </motion.div>

                  <motion.div
                    id="animate_42"
                    ref={ref42}
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView42 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="absolute left-[456px] top-0 inline-flex flex-col items-start gap-2.5 rounded-3xl bg-[#ffffff] p-6"
                  >
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative size-14"
                      alt="Clip path group"
                    >
                      <mask
                        id="mask0_9569_17288"
                        style={{ maskType: 'luminance' }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="56"
                        height="56"
                      >
                        <path d="M56 0H0V56H56V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_9569_17288)">
                        <path
                          d="M8.16586 8.16586C3.12402 13.2049 0 20.1866 0 27.8798C0 28.7893 0.739102 29.5284 1.64856 29.5284C2.55802 29.5284 3.29711 28.7893 3.29711 27.8798C3.29711 21.0878 6.04471 14.9524 10.4958 10.4986C14.9497 6.04745 21.085 3.29986 27.8771 3.29986C34.6691 3.29986 40.8045 6.04745 45.2584 10.4986C49.7095 14.9524 52.457 21.0878 52.457 27.8798C52.457 34.6719 49.7095 40.8073 45.2584 45.2612C40.8045 49.7122 34.6691 52.4598 27.8771 52.4598C25.3713 52.4598 22.959 52.0779 20.6839 51.3827C21.3324 49.6848 21.978 47.9868 22.6265 46.286C24.297 46.7613 26.0582 47.0196 27.8771 47.0196C33.158 47.0196 37.9552 44.8737 41.4145 41.4117C44.8764 37.9525 47.0223 33.1553 47.0223 27.8743C47.0223 22.5935 44.8764 17.7962 41.4145 14.3369C37.9552 10.875 33.158 8.72911 27.8771 8.72911C22.5963 8.72911 17.7989 10.875 14.3396 14.3369C10.8777 17.7962 8.73186 22.5935 8.73186 27.8743C8.73186 28.7837 9.47096 29.5229 10.3804 29.5229C11.2899 29.5229 12.029 28.7837 12.029 27.8743C12.029 23.4919 13.8011 19.5409 16.6696 16.6696C19.5436 13.7984 23.4947 12.029 27.8743 12.029C32.2568 12.029 36.2078 13.8011 39.079 16.6696C41.9503 19.5436 43.7197 23.4947 43.7197 27.8743C43.7197 32.2568 41.9475 36.2078 39.079 39.079C36.205 41.9503 32.2541 43.7197 27.8743 43.7197C26.4648 43.7197 25.1021 43.5301 23.8023 43.1839C24.4536 41.4749 25.1048 39.7687 25.756 38.0597C26.4401 38.2026 27.1489 38.2795 27.8743 38.2795C30.7428 38.2795 33.3558 37.1117 35.2352 35.2296C37.1172 33.3503 38.285 30.7401 38.285 27.8689C38.285 25.0004 37.1172 22.3874 35.2352 20.508C33.3558 18.626 30.7456 17.4582 27.8743 17.4582C25.0058 17.4582 22.3928 18.626 20.5136 20.508C18.6315 22.3874 17.4637 24.9976 17.4637 27.8689C17.4637 28.7783 18.2029 29.5173 19.1123 29.5173C20.0217 29.5173 20.7608 28.7783 20.7608 27.8689C20.7608 25.8988 21.5549 24.1321 22.8434 22.8407C24.1348 21.5522 25.9043 20.758 27.8716 20.758C29.8416 20.758 31.6084 21.5522 32.8997 22.8407C34.1883 24.1321 34.9824 25.8988 34.9824 27.8689C34.9824 29.8389 34.1883 31.6056 32.8997 32.897C31.6084 34.1855 29.8389 34.9797 27.8716 34.9797C27.5584 34.9797 27.2534 34.9522 26.9511 34.9137C27.2974 34.0015 27.6463 33.092 27.9924 32.1798C29.1328 32.1496 30.1741 31.6743 30.9241 30.9214C31.7017 30.1466 32.188 29.0558 32.188 27.8689C32.188 26.6819 31.7017 25.5938 30.9241 24.8162C30.1494 24.0387 29.0585 23.5524 27.8716 23.5524C26.6847 23.5524 25.5966 24.0387 24.8191 24.8162C24.0415 25.5911 23.5552 26.6819 23.5552 27.8689C23.5552 29.0558 24.0415 30.1439 24.8191 30.9214C24.8493 30.9516 24.8822 30.9763 24.9124 31.0066C23.3079 35.2159 21.706 39.4224 20.1014 43.6318L19.5134 45.1733C18.6726 47.3823 17.8291 49.5914 16.9883 51.8004C16.6642 52.6521 17.09 53.6028 17.9418 53.9271C21.0274 55.103 24.3767 55.7514 27.8716 55.7514C35.5648 55.7514 42.5437 52.6274 47.5855 47.5855C52.6274 42.5465 55.7514 35.5648 55.7514 27.8716C55.7514 20.1784 52.6274 13.1995 47.5855 8.15761C42.5521 3.12402 35.5732 0 27.8798 0C20.1866 0 13.2049 3.12402 8.16586 8.16586ZM27.1573 28.5997C26.9704 28.4101 26.8605 28.1655 26.8577 27.8798C26.8577 27.5941 26.9704 27.3495 27.1573 27.16C27.3468 26.9731 27.5913 26.8632 27.8771 26.8605C28.1628 26.8605 28.4074 26.9731 28.597 27.16C28.7837 27.3495 28.8937 27.5941 28.8964 27.8798C28.8964 28.1655 28.7837 28.4101 28.597 28.5997C28.4074 28.7866 28.1628 28.8964 27.8771 28.8993C27.5913 28.8993 27.3468 28.7866 27.1573 28.5997Z"
                          fill="#FF6A28"
                        />
                      </g>
                    </svg>
                  </motion.div>

                  <motion.div
                    id="animate_42_right"
                    ref={ref42r}
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView42r ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="absolute left-[304px] top-0 inline-flex flex-col items-start gap-2.5 rounded-3xl bg-[#ffffff] p-6"
                  >
                    <svg
                      width="57"
                      height="53"
                      viewBox="0 0 57 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative size-14"
                      alt="Okb logo"
                    >
                      <g clipPath="url(#clip0_9569_17295)">
                        <path
                          d="M10.5758 40.4334C12.5957 40.4334 14.24 41.9933 14.24 43.9145C14.24 45.8358 12.5957 47.3957 10.5758 47.3957C8.55597 47.3957 6.91167 45.8358 6.91167 43.9145C6.91167 41.9979 8.55597 40.4334 10.5758 40.4334ZM10.5758 38.6709C7.53916 38.6709 5.07959 41.0195 5.07959 43.9145C5.07959 46.8095 7.53916 49.1582 10.5758 49.1582C13.6125 49.1582 16.0721 46.8095 16.0721 43.9145C16.0721 41.0195 13.6125 38.6709 10.5758 38.6709Z"
                          fill="#4563FF"
                        />
                        <path
                          d="M19.2793 52.8767H37.6001V0H19.2793V52.8767ZM28.4397 49.3514C25.403 49.3514 22.9435 46.9852 22.9435 44.064C22.9435 41.1425 25.403 38.7762 28.4397 38.7762C31.4764 38.7762 33.936 41.1425 33.936 44.064C33.936 46.9852 31.4764 49.3514 28.4397 49.3514Z"
                          fill="#4563FF"
                        />
                        <path
                          d="M51.3403 0H37.5996V52.8767H51.3403C53.8686 52.8767 55.9204 50.9026 55.9204 48.4702V4.4064C55.9204 1.97406 53.8686 0 51.3403 0ZM46.76 49.3514C43.7233 49.3514 41.2637 46.9852 41.2637 44.064C41.2637 41.1425 43.7233 38.7762 46.76 38.7762C49.7967 38.7762 52.2563 41.1425 52.2563 44.064C52.2563 46.9852 49.7967 49.3514 46.76 49.3514Z"
                          fill="#FF0029"
                        />
                        <path
                          d="M20.1949 1.76255V51.1142H5.08022C3.56417 51.1142 2.33209 49.9286 2.33209 48.4702V4.4064C2.33209 2.94786 3.56417 1.76255 5.08022 1.76255H20.1949ZM22.027 0H5.08022C2.55194 0 0.5 1.97406 0.5 4.4064V48.4702C0.5 50.9026 2.55194 52.8767 5.08022 52.8767H22.027V0Z"
                          fill="#4563FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_9569_17295">
                          <rect
                            width="56"
                            height="53"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </motion.div>
                </div>

                <svg
                  width="2"
                  height="40"
                  viewBox="0 0 2 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[279px] top-[184px] h-10 w-0.5"
                  alt="Vector"
                >
                  <path d="M1 0V40" stroke="white" strokeWidth="2" />
                </svg>

                <svg
                  width="458"
                  height="39"
                  viewBox="0 0 458 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[49px] top-[223px] h-[39px] w-full md:w-[458px]"
                  alt="Vector"
                >
                  <path
                    d="M457 39V25C457 11.7452 446.255 1 433 1H25C11.7452 1 1 11.7452 1 25V39"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>

                <svg
                  width="149"
                  height="39"
                  viewBox="0 0 149 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[204px] top-[223px] h-[39px] w-full md:w-[149px]"
                  alt="Vector"
                >
                  <path
                    d="M148 39V25C148 11.7452 137.255 1 124 1H25C11.7452 1 1 11.7452 1 25V39"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] items-end gap-7 self-stretch p-8 md:p-10">
              <div className="relative flex flex-1 grow flex-col items-start gap-2">
                <motion.h4
                  id="animate_38"
                  ref={ref38}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView38 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('dataUnload.title')}
                </motion.h4>

                <motion.p
                  id="animate_39"
                  ref={ref39}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView39 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('dataUnload.desc')}
                </motion.p>
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
            </div>
          </div>
          <div className="relative flex flex-1 grow cursor-pointer flex-col items-start justify-center self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-transparent bg-[#f9fafd]  hover:border-[#3573fc] hover:bg-[#f5f7ff]">
            <div className="relative w-full flex-1 grow self-stretch overflow-hidden rounded-[32px]">
              <div className="relative h-[446px] w-full">
                <motion.div
                  id="animate_44"
                  ref={ref44}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView44 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute left-[49px] top-[84px] flex flex-col items-start justify-center gap-1 rounded-[32px] bg-white p-3"
                >
                  <div className="relative inline-flex flex-[0_0_auto] items-end justify-end gap-1 p-4">
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                      <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[180px]">
                        {t('decisionsModule.ui.id')}
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-3">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          {t('decisionsModule.ui.name')}
                        </div>

                        <div className="relative flex size-6 items-center justify-center gap-2.5 rounded-[20px] bg-green-60 p-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative m-[-4.00px] size-4"
                            alt="Check"
                          >
                            <path
                              d="M2.5 9L6 12.5L14 4.5"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="square"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-3 self-stretch">
                    <div className="relative flex flex-1 grow items-center gap-[53px] rounded-2xl bg-blue-50 p-4">
                      <div className="relative flex flex-1 grow flex-col items-start gap-0.5">
                        <div className="relative mt-[-1.00px] self-stretch text-sm font-normal leading-5 tracking-normal text-white opacity-50 [font-family:'Roboto',Helvetica]">
                          {t('decisionsModule.ui.score')}
                        </div>

                        <div className="relative self-stretch text-[28px] font-medium leading-10 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                          {t('decisionsModule.ui.scoreValue')}
                        </div>
                      </div>
                    </div>

                    <svg
                      width="132"
                      height="94"
                      viewBox="0 0 132 94"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative flex-1 grow self-stretch"
                      alt="Frame"
                    >
                      <rect width="132" height="94" rx="16" fill="#F2F5FF" />
                      <path
                        d="M16 77V58.4045M27.1111 77V53.4865M38.2222 77V44.634M49.3333 77V17M60.4444 77V26.7297M82.6667 77V33.2162M93.7778 77V53.4865M104.889 77V40.5135M116 77V53.4865M71.5555 77V20.2432"
                        stroke="url(#paint0_linear_9041_100)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_9041_100"
                          x1="12.5"
                          y1="64.7"
                          x2="119.996"
                          y2="65.5333"
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

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch p-4">
                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-4 self-stretch">
                      <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.gender')}
                      </div>

                      <div className="relative mt-[-1.00px] w-20 text-sm font-normal leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.genderValue')}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-4 self-stretch">
                      <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.birthDate')}
                      </div>

                      <div className="relative mt-[-1.00px] w-20 text-sm font-normal leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.birthDateValue')}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-4 self-stretch">
                      <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.maritalStatus')}
                      </div>

                      <div className="relative mt-[-1.00px] w-20 text-sm font-normal leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.maritalStatusValue')}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-4 self-stretch">
                      <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.salary')}
                      </div>

                      <div className="relative mt-[-1.00px] w-20 text-sm font-normal leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.salaryValue')}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <svg
                  width="1435"
                  height="1361"
                  viewBox="0 0 1435 1361"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 top-0 h-[368px] w-full md:w-[678px]"
                  alt="Vector"
                >
                  <g opacity="0.16" filter="url(#filter0_f_36_2389)">
                    <path
                      d="M580.201 516.863C557.553 350.888 741.074 238.781 835.665 203.475C1418.97 145.308 1255.87 837.593 1019.3 1029.59C782.722 1221.59 231.215 1199.45 201.47 981.467C171.726 763.481 608.51 724.332 580.201 516.863Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_36_2389"
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
                        result="effect1_foregroundBlur_36_2389"
                      />
                    </filter>
                  </defs>
                </svg>

                <motion.div
                  id="animate_43_right"
                  ref={ref43r}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView43r ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute left-[312px] top-[38px] flex w-80 flex-col items-start justify-center gap-3 rounded-[32px] bg-white p-6"
                >
                  <div className="relative flex w-full flex-[0_0_auto] items-center gap-6 self-stretch rounded-3xl">
                    <div className="relative h-[148px] w-full overflow-hidden rounded-[20px] bg-green-60 md:w-[68px]">
                      <div className="absolute left-3.5 top-[57px] whitespace-nowrap text-2xl font-medium leading-8 tracking-normal text-white [font-family:'Roboto',Helvetica]">
                        900
                      </div>
                    </div>

                    <div className="relative flex flex-1 grow flex-col items-start gap-2">
                      <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.approval')}
                      </div>

                      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                        <div className="relative mt-[-1.00px] self-stretch text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('decisionsModule.ui.approvalReturned')}
                        </div>

                        <div className="relative self-stretch text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('decisionsModule.ui.approvalNotReturned')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-center gap-6 self-stretch rounded-3xl">
                    <div className="relative w-full self-stretch overflow-hidden rounded-[20px] bg-red-50 md:w-[68px]">
                      <div className="absolute left-[13px] top-[29px] whitespace-nowrap text-2xl font-medium leading-8 tracking-normal text-white [font-family:'Roboto',Helvetica]">
                        100
                      </div>
                    </div>

                    <div className="relative flex flex-1 grow flex-col items-start gap-2">
                      <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('decisionsModule.ui.rejection')}
                      </div>

                      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                        <div className="relative mt-[-1.00px] self-stretch text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('decisionsModule.ui.rejectionDefault')}
                        </div>

                        <div className="relative self-stretch text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('decisionsModule.ui.rejectionPositive')}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="group relative flex w-full flex-[0_0_auto] items-end gap-7 self-stretch p-8 md:p-10">
              <div className="relative flex flex-1 grow flex-col items-start gap-2">
                <motion.h4
                  id="animate_46_left"
                  ref={ref46l}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView46l ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('decisionsModule.title')}
                </motion.h4>

                <motion.p
                  id="animate_47_right"
                  ref={ref47r}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView47r ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('decisionsModule.desc')}
                </motion.p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
