import { motion, useInView } from 'framer-motion';
import { Feedback, Trust, useFeedbackForm } from 'widgets';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { HeroButtons } from 'shared/ui';

// @ts-ignore
import vector from './images/Vector 1.png';
// @ts-ignore
import code from './images/code.png';
import { Technoligies } from './technoligies.tsx';
import { Works } from './works.tsx';

export const Development = () => {
  const { t } = useTranslation(['development']);
  const sliderRef = useRef<Slider>(null);
  const { setIsOpen } = useFeedbackForm();
  const ref15 = useRef<HTMLDivElement>(null);
  const ref16 = useRef<HTMLDivElement>(null);

  const inView15 = useInView(ref15, { once: true, margin: '-100px' });
  const inView16 = useInView(ref16, { once: true, margin: '-100px' });

  const onClick = () => {
    setIsOpen(true);
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[88px] pb-[136px] lg:gap-[136px] lg:px-8 lg:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
        <div className=" relative -mt-7 flex w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-4 py-10 lg:mt-0 lg:h-[628px] lg:p-12">
          <HeroButtons>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7  lg:w-[624px] lg:gap-12">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 lg:inline-flex">
                <motion.h1
                  ref={ref15}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView15 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[44px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica] lg:w-[624px] lg:text-left lg:text-6xl lg:leading-[68px]"
                >
                  {t('hero.title')}
                </motion.h1>

                <motion.p
                  ref={ref16}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView16 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="lg:text-leftw-10/12 relative w-full text-center text-xl font-normal leading-7 tracking-normal text-[#ffffffcc] [font-family:'Roboto',Helvetica] lg:w-[624px] lg:text-start"
                >
                  {t('hero.subtitle')}
                </motion.p>
              </div>
            </div>
          </HeroButtons>

          <img
            className="absolute left-[1053px] top-44 h-[568px] w-full lg:w-[619px]"
            src={vector}
          />

          <div className="relative left-[-100px] top-[var(--pos-minus-41)] mx-auto hidden z-10 size-[var(--size-738)] lg:absolute lg:left-[var(--pos-590)] lg:m-0 lg:flex lg:scale-100">
            <div className="relative -left-px -top-px size-[740px] rounded-[370px] border-2 border-solid border-[#ffffff0a]">
              <div className="absolute left-[82px] top-[82px] size-[572px] rounded-[286px] border-2 border-solid border-[#ffffff] opacity-[0.08]" />

              <div className="absolute left-[178px] top-[178px] size-[380px] rounded-[190px] border-2 border-solid border-[#ffffff] opacity-[0.12]" />

              <div className="absolute left-[221px] top-[536px] inline-flex items-center justify-center gap-2 rounded-[100px] bg-red-40 px-4 py-2 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                  {t('technologies.fintech')}
                </div>
              </div>

              <div className="absolute left-[232px] top-32 inline-flex items-center justify-center gap-2 rounded-[100px] bg-green-60 px-4 py-2 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                  {t('technologies.blockchain')}
                </div>
              </div>

              <div className="absolute left-[469px] top-[569px] inline-flex items-center justify-center gap-2 rounded-[100px] bg-blue-50 px-4 py-2 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                  {t('technologies.medtech')}
                </div>
              </div>

              <div className="absolute left-[577px] top-[341px] inline-flex items-center justify-center gap-2 rounded-[100px] bg-violet-50 px-4 py-2 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                  {t('technologies.martech')}
                </div>
              </div>

              <div className="absolute left-[34px] top-[276px] inline-flex items-center justify-center gap-2 rounded-[100px] bg-yellow-50 px-4 py-2 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                  {t('technologies.enterprise')}
                </div>
              </div>
            </div>
          </div>
          <div className="relative inset-0 mx-auto h-[280px] w-full max-w-[464px] overflow-hidden rounded-3xl bg-[#ffffff] lg:absolute lg:left-[var(--pos-727)] lg:top-[var(--pos-190)]">
            <div className="h-10w-full absolute left-0 top-0 bg-[#f9fafd] lg:w-[528px]">
              <div className="absolute left-[15px] top-[15px] size-2.5 rounded-[5px] bg-[#e64850]" />

              <div className="absolute left-[31px] top-[15px] size-2.5 rounded-[5px] bg-[#fbab00]" />

              <div className="absolute left-[47px] top-[15px] size-2.5 rounded-[5px] bg-[#00cb82]" />
            </div>

            <div className="absolute left-0 top-12 flex w-full flex-col items-start lg:w-[464px]">
              <img className="size-full" src={code} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 self-stretch lg:gap-12">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 lg:w-[656px]">
          <div className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-5xl lg:leading-[60px]">
            {t('projectDevelopment.title')}
          </div>
        </div>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 lg:inline-flex">
          <div className="relative grid w-full flex-[0_0_auto] grid-cols-1 items-start gap-6 lg:flex ">
            <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10">
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
                  d="M32 37V44"
                  stroke="#725DD6"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.6077 26C20.2869 28.2876 19.7579 30.9472 20.1027 33.5661C20.4474 36.1851 21.6467 38.6171 23.5145 40.485C25.3823 42.3529 27.8142 43.5524 30.4332 43.8973C33.0521 44.2422 35.7117 43.7133 37.9994 42.3927C40.2871 41.072 42.0752 39.0334 43.0862 36.593C44.0973 34.1526 44.2749 31.4468 43.5914 28.8952C42.908 26.3436 41.4017 24.0888 39.3062 22.4805C37.2106 20.8722 34.643 20.0003 32.0015 20V27C33.1021 27.0002 34.1719 27.3636 35.0449 28.0338C35.918 28.704 36.5455 29.6436 36.8302 30.7067C37.1149 31.7699 37.0408 32.8973 36.6195 33.9141C36.1981 34.9309 35.4531 35.7802 34.4999 36.3304C33.5466 36.8806 32.4385 37.1009 31.3473 36.9572C30.2561 36.8134 29.2428 36.3136 28.4646 35.5353C27.6864 34.757 27.1867 33.7437 27.0431 32.6525C26.8995 31.5613 27.1199 30.4532 27.6702 29.5L21.6077 26Z"
                  stroke="#725DD6"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.1687 33.295L20.4062 35.1063"
                  stroke="#725DD6"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('projectDevelopment.analysis.title')}
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('projectDevelopment.analysis.description')}
                </p>
              </div>
            </div>

            <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10">
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
                  d="M35 29H29V35H35V29Z"
                  stroke="#00CB82"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41 22H23C22.4477 22 22 22.4477 22 23V41C22 41.5523 22.4477 42 23 42H41C41.5523 42 42 41.5523 42 41V23C42 22.4477 41.5523 22 41 22Z"
                  stroke="#00CB82"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42 29H45"
                  stroke="#00CB82"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42 35H45"
                  stroke="#00CB82"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 29H22"
                  stroke="#00CB82"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 35H22"
                  stroke="#00CB82"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35 42V45"
                  stroke="#00CB82"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29 42V45"
                  stroke="#00CB82"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35 19V22"
                  stroke="#00CB82"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29 19V22"
                  stroke="#00CB82"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  MVP
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('projectDevelopment.mvp.description')}
                </p>
              </div>
            </div>

            <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10">
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
                  d="M36 22H42V28"
                  stroke="#3573FC"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35 29L42 22"
                  stroke="#3573FC"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 42H22V36"
                  stroke="#3573FC"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29 35L22 42"
                  stroke="#3573FC"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42 36V42H36"
                  stroke="#3573FC"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35 35L42 42"
                  stroke="#3573FC"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 28V22H28"
                  stroke="#3573FC"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29 29L22 22"
                  stroke="#3573FC"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('projectDevelopment.scalability.title')}
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('projectDevelopment.scalability.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="relative grid w-full flex-[0_0_auto] grid-cols-1 items-start gap-6 lg:flex ">
            <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10">
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
                  d="M26 30C28.2091 30 30 28.2091 30 26C30 23.7909 28.2091 22 26 22C23.7909 22 22 23.7909 22 26C22 28.2091 23.7909 30 26 30Z"
                  stroke="#3573FC"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38 30C40.2091 30 42 28.2091 42 26C42 23.7909 40.2091 22 38 22C35.7909 22 34 23.7909 34 26C34 28.2091 35.7909 30 38 30Z"
                  stroke="#3573FC"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26 42C28.2091 42 30 40.2091 30 38C30 35.7909 28.2091 34 26 34C23.7909 34 22 35.7909 22 38C22 40.2091 23.7909 42 26 42Z"
                  stroke="#3573FC"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38 34V42"
                  stroke="#3573FC"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42 38H34"
                  stroke="#3573FC"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('projectDevelopment.crossPlatform.title')}
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('projectDevelopment.crossPlatform.description')}
                </p>
              </div>
            </div>

            <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10">
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
                  d="M20 31L32 19L44 31H38V35H26V31H20Z"
                  stroke="#E74951"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38 43H26"
                  stroke="#E74951"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38 39H26"
                  stroke="#E74951"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('projectDevelopment.highLoad.title')}
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('projectDevelopment.highLoad.description')}
                </p>
              </div>
            </div>

            <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10">
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
                  d="M27.5863 43H22C21.7348 43 21.4804 42.8947 21.2929 42.7071C21.1054 42.5196 21 42.2653 21 42V36.4138C21.0001 36.1489 21.1053 35.8949 21.2925 35.7075L36.7075 20.2925C36.895 20.1051 37.1493 19.9999 37.4144 19.9999C37.6795 19.9999 37.9337 20.1051 38.1213 20.2925L43.7075 25.875C43.8949 26.0626 44.0002 26.3168 44.0002 26.5819C44.0002 26.847 43.8949 27.1013 43.7075 27.2888L28.2925 42.7075C28.1051 42.8947 27.8511 42.9999 27.5863 43Z"
                  stroke="#FBAB00"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33 24L40 31"
                  stroke="#FBAB00"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36.5 27.5L24.5 39.5"
                  stroke="#FBAB00"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.935 42.9362L21.0625 36.0637"
                  stroke="#FBAB00"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('projectDevelopment.design.title')}
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('projectDevelopment.design.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-col lg:h-[568px]  lg:!flex-row">
        <div className="flex w-full  flex-col items-center gap-[68px] lg:!flex-row">
          <div className="relative flex w-full flex-col items-start justify-center gap-7 lg:w-[496px]">
            <p className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-left lg:text-5xl lg:leading-[60px]">
              {t('platforms.title')}
            </p>

            <button
              onClick={onClick}
              className="all-[unset] box-border inline-flex w-full cursor-pointer items-center justify-center gap-2.5  rounded-[100px] bg-blue-50 px-8 py-4 transition-opacity hover:opacity-90 lg:w-fit"
            >
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                {t('platforms.tryButton')}
              </div>
            </button>
          </div>

          <div className="w-full lg:w-[915px]">
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
                <div className="relative flex h-[480px] w-full flex-col items-center gap-7  overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 lg:w-[443px] lg:gap-12 lg:p-12">
                  <svg
                    width="638"
                    height="682"
                    viewBox="0 0 638 682"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-0 h-[406px] w-full lg:w-[443px]"
                  >
                    <g opacity="0.12" filter="url(#filter0_f_9535_12438)">
                      <path
                        d="M271.253 368.278C228.003 368.25 205.762 317.375 200.048 291.94C205.626 140.694 376.99 206.691 417.806 273.94C458.622 341.188 433.619 481.485 376.815 481.449C320.012 481.413 325.316 368.312 271.253 368.278Z"
                        fill="#725DD6"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_9535_12438"
                        x="0"
                        y="0.0001221"
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
                          result="effect1_foregroundBlur_9535_12438"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <div className="relative w-[382px] flex-1 grow self-stretch">
                    <div className="relative -top-12 w-full lg:-left-12 lg:w-[443px]">
                      <div className="absolute left-[140px] top-[46px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] py-2 pl-2 pr-5">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="relative flex-[0_0_auto]"
                        >
                          <rect
                            width="44"
                            height="44"
                            rx="22"
                            fill="#00CB82"
                            fillOpacity="0.08"
                          />
                          <path
                            d="M14.5 28L29.5 28C30.3284 28 31 27.3284 31 26.5V16C31 15.1716 30.3284 14.5 29.5 14.5L14.5 14.5C13.6716 14.5 13 15.1716 13 16V26.5C13 27.3284 13.6716 28 14.5 28Z"
                            stroke="#00CB82"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M25 31H19"
                            stroke="#00CB82"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          landing page
                        </div>
                      </div>

                      <svg
                        width="503"
                        height="411"
                        viewBox="0 0 503 411"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-0 top-0 h-[349px] w-full lg:w-[443px]"
                      >
                        <g opacity="0.32" filter="url(#filter0_f_9537_10855)">
                          <path
                            d="M253.968 250.047C242.074 268.401 205.47 258.101 188.655 250.657C99.5283 189.594 186.152 142.441 237.671 151.207C289.19 159.973 366.418 225.035 350.796 249.141C335.174 273.247 268.837 227.104 253.968 250.047Z"
                            fill="#9FA7BC"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_9537_10855"
                            x="0"
                            y="0"
                            width="503"
                            height="410.5"
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
                              stdDeviation="75"
                              result="effect1_foregroundBlur_9537_10855"
                            />
                          </filter>
                        </defs>
                      </svg>

                      <div className="absolute left-[58px] top-[92px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] py-2 pl-2 pr-5">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="relative flex-[0_0_auto]"
                        >
                          <rect
                            width="44"
                            height="44"
                            rx="22"
                            fill="#3573FC"
                            fillOpacity="0.08"
                          />
                          <path
                            d="M28.75 24.25L25 28L19 26.5L13.75 22.75"
                            stroke="#3573FC"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.8125 16.6216L21.9987 15.25L27.185 16.6216"
                            stroke="#3573FC"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.2217 15.6643L10.8292 20.4511C10.7403 20.6289 10.7256 20.8348 10.7884 21.0234C10.8511 21.212 10.9862 21.368 11.1639 21.4571L13.7495 22.7499L16.8133 16.6215L14.2286 15.3296C14.1405 15.2854 14.0446 15.259 13.9463 15.2519C13.848 15.2449 13.7493 15.2572 13.6558 15.2883C13.5623 15.3194 13.4758 15.3686 13.4013 15.4331C13.3269 15.4976 13.2658 15.5762 13.2217 15.6643Z"
                            stroke="#3573FC"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M30.2512 22.7499L32.8369 21.4571C33.0146 21.368 33.1497 21.212 33.2124 21.0234C33.2752 20.8348 33.2605 20.6289 33.1716 20.4511L30.7791 15.6643C30.735 15.5762 30.6739 15.4976 30.5994 15.4331C30.5249 15.3686 30.4385 15.3194 30.345 15.2883C30.2515 15.2572 30.1528 15.2449 30.0545 15.2519C29.9562 15.259 29.8603 15.2854 29.7722 15.3296L27.1875 16.6215L30.2512 22.7499Z"
                            stroke="#3573FC"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M27.2504 16.75H23.5004L19.2198 20.9022C19.1402 20.9817 19.0796 21.0781 19.0423 21.1843C19.0051 21.2905 18.9922 21.4037 19.0046 21.5155C19.017 21.6273 19.0544 21.7349 19.1141 21.8303C19.1737 21.9257 19.2541 22.0064 19.3492 22.0666C20.9907 23.1156 23.2192 23.0434 25.0004 21.25L28.7504 24.25L30.2504 22.75"
                            stroke="#3573FC"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.6306 30.25L17.7194 29.2722L15.25 27.5078"
                            stroke="#3573FC"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          corporate portal
                        </div>
                      </div>

                      <svg
                        width="503"
                        height="411"
                        viewBox="0 0 503 411"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-0 top-0 h-[349px] w-full lg:w-[443px]"
                      >
                        <g opacity="0.32" filter="url(#filter0_f_9537_10857)">
                          <path
                            d="M253.968 250.047C242.074 268.401 205.47 258.101 188.655 250.657C99.5283 189.594 186.152 142.441 237.671 151.207C289.19 159.973 366.418 225.035 350.796 249.141C335.174 273.247 268.837 227.104 253.968 250.047Z"
                            fill="#9FA7BC"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_9537_10857"
                            x="0"
                            y="0"
                            width="503"
                            height="410.5"
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
                              stdDeviation="75"
                              result="effect1_foregroundBlur_9537_10857"
                            />
                          </filter>
                        </defs>
                      </svg>

                      <div className="absolute left-32 top-[138px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] py-2 pl-2 pr-5">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="relative flex-[0_0_auto]"
                        >
                          <rect
                            width="44"
                            height="44"
                            rx="22"
                            fill="#E74951"
                            fillOpacity="0.08"
                          />
                          <path
                            d="M17.5 20.5C19.1569 20.5 20.5 19.1569 20.5 17.5C20.5 15.8431 19.1569 14.5 17.5 14.5C15.8431 14.5 14.5 15.8431 14.5 17.5C14.5 19.1569 15.8431 20.5 17.5 20.5Z"
                            stroke="#E74951"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M26.5 20.5C28.1569 20.5 29.5 19.1569 29.5 17.5C29.5 15.8431 28.1569 14.5 26.5 14.5C24.8431 14.5 23.5 15.8431 23.5 17.5C23.5 19.1569 24.8431 20.5 26.5 20.5Z"
                            stroke="#E74951"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.5 29.5C19.1569 29.5 20.5 28.1569 20.5 26.5C20.5 24.8431 19.1569 23.5 17.5 23.5C15.8431 23.5 14.5 24.8431 14.5 26.5C14.5 28.1569 15.8431 29.5 17.5 29.5Z"
                            stroke="#E74951"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M26.5 23.5V29.5"
                            stroke="#E74951"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M29.5 26.5H23.5"
                            stroke="#E74951"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          multifunctional system
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('platforms.enterprise.title')}
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('platforms.enterprise.description')}
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
                    <g opacity="0.2" filter="url(#filter0_f_9535_12463)">
                      <path
                        d="M271.253 368.278C228.003 368.25 205.762 317.375 200.048 291.94C205.626 140.694 376.99 206.691 417.806 273.94C458.622 341.188 433.619 481.485 376.815 481.449C320.012 481.413 325.316 368.312 271.253 368.278Z"
                        fill="#725DD6"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_9535_12463"
                        x="0"
                        y="0.0001221"
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
                          result="effect1_foregroundBlur_9535_12463"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <div className="relative w-full flex-1 grow self-stretch">
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
                              className="absolute left-0 top-0 h-[120px]  w-[57px]"
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
                              className="absolute left-[63px] top-[49px] h-[71px]  w-[57px]"
                            >
                              <path
                                d="M53.8023 0.0907039C55.2772 -0.305988 56.7826 0.637786 56.9984 2.15508C57.399 4.97052 57.6065 7.84847 57.6065 10.775C57.6065 42.3513 33.4879 68.2716 2.73377 70.9901C1.24645 71.1216 0 69.9194 0 68.4207C0 67.0141 1.10326 65.8625 2.49863 65.7332C30.4685 63.1425 52.3695 39.5267 52.3695 10.775C52.3695 8.17936 52.1905 5.62561 51.8449 3.12536C51.6566 1.76297 52.4787 0.446698 53.8023 0.0907039Z"
                                fill="#3573FC"
                              />
                            </svg>

                            <div className="absolute left-[22px] top-[37px] inline-flex flex-col items-center">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                                {t('platforms.enterprise.totalAmount')}
                              </div>

                              <div className="relative -mt-0.5 w-fit whitespace-nowrap text-center text-xl font-medium leading-8 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                                88,000₽
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
                        stroke="url(#paint0_linear_9537_10867)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_9537_10867"
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

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('platforms.fintech.title')}
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('platforms.fintech.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-0 md:px-3">
                <div className="relative flex h-[480px] w-full flex-col items-center gap-7  overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 lg:w-[443px] lg:gap-12 lg:p-12">
                  <svg
                    width="638"
                    height="682"
                    viewBox="0 0 638 682"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-0 h-[406px]  w-[442px]"
                  >
                    <g opacity="0.2" filter="url(#filter0_f_9535_12496)">
                      <path
                        d="M271.254 368.279C228.004 368.251 205.763 317.375 200.049 291.941C205.627 140.694 376.992 206.692 417.807 273.94C458.623 341.189 433.62 481.486 376.817 481.45C320.013 481.414 325.317 368.313 271.254 368.279Z"
                        fill="#725DD6"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_9535_12496"
                        x="0"
                        y="0"
                        width="638"
                        height="681.5"
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
                          result="effect1_foregroundBlur_9535_12496"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <svg
                    width="346"
                    height="124"
                    viewBox="0 0 346 124"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative w-full flex-1 grow self-stretch"
                  >
                    <rect x="7" width="92" height="92" rx="24" fill="white" />
                    <rect
                      x="27"
                      y="20"
                      width="52"
                      height="52"
                      rx="26"
                      fill="#3573FC"
                      fillOpacity="0.08"
                    />
                    <path
                      d="M41.0874 39.615L52.9999 46.135L64.9124 39.615"
                      stroke="#3573FC"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M53.48 33.1249L64.48 39.1474C64.6371 39.2334 64.7682 39.3599 64.8597 39.5138C64.9511 39.6677 64.9996 39.8434 65 40.0224V51.9774C64.9996 52.1565 64.9511 52.3321 64.8597 52.486C64.7682 52.64 64.6371 52.7665 64.48 52.8524L53.48 58.8749C53.3328 58.9555 53.1678 58.9977 53 58.9977C52.8322 58.9977 52.6672 58.9555 52.52 58.8749L41.52 52.8524C41.3629 52.7665 41.2318 52.64 41.1403 52.486C41.0489 52.3321 41.0004 52.1565 41 51.9774V40.0224C41.0004 39.8434 41.0489 39.6677 41.1403 39.5138C41.2318 39.3599 41.3629 39.2334 41.52 39.1474L52.52 33.1249C52.6672 33.0444 52.8322 33.0022 53 33.0022C53.1678 33.0022 53.3328 33.0444 53.48 33.1249Z"
                      stroke="#3573FC"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M53 46.1362V59"
                      stroke="#3573FC"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="127"
                      y="16"
                      width="92"
                      height="92"
                      rx="24"
                      fill="white"
                    />
                    <rect
                      x="147"
                      y="36"
                      width="52"
                      height="52"
                      rx="26"
                      fill="#E74951"
                      fillOpacity="0.08"
                    />
                    <path
                      d="M161.087 55.615L173 62.135L184.912 55.615"
                      stroke="#E74951"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M173.48 49.1249L184.48 55.1474C184.637 55.2334 184.768 55.3599 184.86 55.5138C184.951 55.6677 185 55.8434 185 56.0224V67.9774C185 68.1565 184.951 68.3321 184.86 68.486C184.768 68.64 184.637 68.7665 184.48 68.8524L173.48 74.8749C173.333 74.9555 173.168 74.9977 173 74.9977C172.832 74.9977 172.667 74.9555 172.52 74.8749L161.52 68.8524C161.363 68.7665 161.232 68.64 161.14 68.486C161.049 68.3321 161 68.1565 161 67.9774V56.0224C161 55.8434 161.049 55.6677 161.14 55.5138C161.232 55.3599 161.363 55.2334 161.52 55.1474L172.52 49.1249C172.667 49.0444 172.832 49.0022 173 49.0022C173.168 49.0022 173.333 49.0444 173.48 49.1249Z"
                      stroke="#E74951"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M173 62.1362V75"
                      stroke="#E74951"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="247"
                      y="32"
                      width="92"
                      height="92"
                      rx="24"
                      fill="white"
                    />
                    <rect
                      x="267"
                      y="52"
                      width="52"
                      height="52"
                      rx="26"
                      fill="#725DD6"
                      fillOpacity="0.08"
                    />
                    <path
                      d="M281.087 71.615L293 78.135L304.912 71.615"
                      stroke="#725DD6"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M293.48 65.1249L304.48 71.1474C304.637 71.2334 304.768 71.3599 304.86 71.5138C304.951 71.6677 305 71.8434 305 72.0224V83.9774C305 84.1565 304.951 84.3321 304.86 84.486C304.768 84.64 304.637 84.7665 304.48 84.8524L293.48 90.8749C293.333 90.9555 293.168 90.9977 293 90.9977C292.832 90.9977 292.667 90.9555 292.52 90.8749L281.52 84.8524C281.363 84.7665 281.232 84.64 281.14 84.486C281.049 84.3321 281 84.1565 281 83.9774V72.0224C281 71.8434 281.049 71.6677 281.14 71.5138C281.232 71.3599 281.363 71.2334 281.52 71.1474L292.52 65.1249C292.667 65.0444 292.832 65.0022 293 65.0022C293.168 65.0022 293.333 65.0444 293.48 65.1249Z"
                      stroke="#725DD6"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M293 78.1362V91"
                      stroke="#725DD6"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M99 62L127 62" stroke="white" strokeWidth="2" />
                    <path d="M219 62L247 62" stroke="white" strokeWidth="2" />
                  </svg>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('platforms.blockchain.title')}
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('platforms.blockchain.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-0 md:px-3">
                <div className="relative flex h-[480px] w-full flex-col items-center gap-7  overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 lg:w-[443px] lg:gap-12 lg:p-12">
                  <svg
                    width="638"
                    height="682"
                    viewBox="0 0 638 682"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-0 h-[406px]  w-[442px]"
                  >
                    <g opacity="0.2" filter="url(#filter0_f_9535_12502)">
                      <path
                        d="M271.254 368.279C228.004 368.251 205.763 317.375 200.049 291.941C205.627 140.694 376.992 206.692 417.807 273.94C458.623 341.189 433.62 481.486 376.817 481.45C320.013 481.414 325.317 368.313 271.254 368.279Z"
                        fill="#725DD6"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_9535_12502"
                        x="0"
                        y="0"
                        width="638"
                        height="681.5"
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
                          result="effect1_foregroundBlur_9535_12502"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <div className="relative w-full flex-1 grow self-stretch">
                    <div className="relative -left-12 -top-12 w-[442px]">
                      <div className="absolute left-[77px] top-[55px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] py-2 pl-2 pr-5">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="relative flex-[0_0_auto]"
                        >
                          <rect
                            width="44"
                            height="44"
                            rx="22"
                            fill="#3573FC"
                            fillOpacity="0.08"
                          />
                          <path
                            d="M23.7578 14.2427L14.2424 23.7581C12.5857 25.4148 12.5857 28.1008 14.2424 29.7575L14.243 29.7582C15.8997 31.4148 18.5857 31.4148 20.2424 29.7582L29.7578 20.2427C31.4145 18.586 31.4145 15.9 29.7578 14.2433L29.7572 14.2427C28.1005 12.586 25.4145 12.586 23.7578 14.2427Z"
                            stroke="#3573FC"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19 19L25 25"
                            stroke="#3573FC"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M25 20.5L27.25 18.25"
                            stroke="#3573FC"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          {t('platforms.medtech.drugSelection')}
                        </div>
                      </div>

                      <svg
                        width="524"
                        height="422"
                        viewBox="0 0 524 422"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-0 top-0 h-[339px]  w-[442px]"
                      >
                        <g opacity="0.32" filter="url(#filter0_f_9537_11048)">
                          <path
                            d="M264.727 260.394C251.592 280.662 211.172 269.289 192.604 261.069C94.1848 193.639 189.84 141.57 246.73 151.249C303.62 160.929 388.901 232.775 371.65 259.394C354.399 286.014 281.146 235.059 264.727 260.394Z"
                            fill="#9FA7BC"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_9537_11048"
                            x="0"
                            y="0"
                            width="524"
                            height="421.855"
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
                              stdDeviation="75"
                              result="effect1_foregroundBlur_9537_11048"
                            />
                          </filter>
                        </defs>
                      </svg>

                      <div className="absolute left-[119px] top-[101px] inline-flex items-center justify-center gap-4 rounded-[32px] bg-[#ffffff] py-2 pl-2 pr-5">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="relative flex-[0_0_auto]"
                        >
                          <rect
                            width="44"
                            height="44"
                            rx="22"
                            fill="#00CB82"
                            fillOpacity="0.08"
                          />
                          <path
                            d="M13.75 23.5L19 28.75L31 16.75"
                            stroke="#00CB82"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          {t('platforms.medtech.orderProcessing')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('platforms.medtech.title')}
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('platforms.medtech.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-0 md:px-3">
                <div className="relative flex h-[480px] w-full flex-col items-center gap-7  overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 lg:w-[443px] lg:gap-12 lg:p-12">
                  <svg
                    width="638"
                    height="682"
                    viewBox="0 0 638 682"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-0 h-[406px]  w-[442px]"
                  >
                    <g opacity="0.2" filter="url(#filter0_f_9535_12508)">
                      <path
                        d="M271.254 368.279C228.004 368.251 205.763 317.375 200.049 291.941C205.627 140.694 376.992 206.692 417.807 273.94C458.623 341.189 433.62 481.486 376.817 481.45C320.013 481.414 325.317 368.313 271.254 368.279Z"
                        fill="#725DD6"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_9535_12508"
                        x="0"
                        y="0"
                        width="638"
                        height="681.5"
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
                          result="effect1_foregroundBlur_9535_12508"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <svg
                    width="346"
                    height="152"
                    viewBox="0 0 346 152"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative w-full flex-1 grow self-stretch"
                  >
                    <rect
                      x="49"
                      y="59"
                      width="8"
                      height="77"
                      rx="4"
                      fill="url(#paint0_linear_9535_12509)"
                    />
                    <path
                      d="M89 53C89 50.7909 90.7909 49 93 49C95.2091 49 97 50.7909 97 53V132C97 134.209 95.2091 136 93 136C90.7909 136 89 134.209 89 132V53Z"
                      fill="url(#paint1_linear_9535_12509)"
                    />
                    <path
                      d="M129 67C129 64.7909 130.791 63 133 63C135.209 63 137 64.7909 137 67V132C137 134.209 135.209 136 133 136C130.791 136 129 134.209 129 132V67Z"
                      fill="url(#paint2_linear_9535_12509)"
                    />
                    <rect
                      x="169"
                      y="15"
                      width="8"
                      height="121"
                      rx="4"
                      fill="url(#paint3_linear_9535_12509)"
                    />
                    <path
                      d="M209 49C209 46.7909 210.791 45 213 45C215.209 45 217 46.7909 217 49V132C217 134.209 215.209 136 213 136C210.791 136 209 134.209 209 132V49Z"
                      fill="url(#paint4_linear_9535_12509)"
                    />
                    <path
                      d="M249 93C249 90.7909 250.791 89 253 89C255.209 89 257 90.7909 257 93V132C257 134.209 255.209 136 253 136C250.791 136 249 134.209 249 132V93Z"
                      fill="url(#paint5_linear_9535_12509)"
                    />
                    <path
                      d="M289 58C289 55.7909 290.791 54 293 54C295.209 54 297 55.7909 297 58V132C297 134.209 295.209 136 293 136C290.791 136 289 134.209 289 132V58Z"
                      fill="url(#paint6_linear_9535_12509)"
                    />
                    <path
                      d="M9 112.976L33.4646 106.745C37.9222 105.61 42.6528 106.448 46.4491 109.045L55.6397 115.334C62.7182 120.177 72.3568 118.578 77.4913 111.708L85.3215 101.23C89.9859 94.9892 98.4678 93.0154 105.408 96.556L125.92 107.02C134.393 111.342 144.744 107.362 148.138 98.4754L160.677 65.6424C164.738 55.0098 180.214 56.4481 182.245 67.647L184.339 79.1862C185.823 87.3679 197.187 88.2919 199.974 80.4574V80.4574C202.517 73.3074 212.607 73.2461 215.236 80.3648L217.577 86.7026C220.482 94.5654 230.947 96.078 235.959 89.3595L241.555 81.8584C246.848 74.7639 256.966 73.4679 263.876 78.9995L269.961 83.8707C274.934 87.8521 281.796 88.5036 287.43 85.5294L337 59.3605"
                      stroke="url(#paint7_linear_9535_12509)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="171"
                      cy="58"
                      r="5"
                      fill="white"
                      stroke="#3573FC"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_9535_12509"
                        x1="53"
                        y1="136"
                        x2="53"
                        y2="59"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3573FC" stopOpacity="0" />
                        <stop offset="1" stopColor="#3573FC" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_9535_12509"
                        x1="93"
                        y1="136"
                        x2="93"
                        y2="49"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3573FC" stopOpacity="0" />
                        <stop offset="1" stopColor="#3573FC" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_9535_12509"
                        x1="133"
                        y1="136"
                        x2="133"
                        y2="63"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3573FC" stopOpacity="0" />
                        <stop offset="1" stopColor="#3573FC" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_9535_12509"
                        x1="177"
                        y1="136"
                        x2="177"
                        y2="75.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_9535_12509"
                        x1="217"
                        y1="136"
                        x2="217"
                        y2="90.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_9535_12509"
                        x1="257"
                        y1="136"
                        x2="257"
                        y2="112.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                      <linearGradient
                        id="paint6_linear_9535_12509"
                        x1="297"
                        y1="136"
                        x2="297"
                        y2="95"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                      <linearGradient
                        id="paint7_linear_9535_12509"
                        x1="9"
                        y1="97.1921"
                        x2="337"
                        y2="97.1921"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3573FC" stopOpacity="0" />
                        <stop offset="0.269231" stopColor="#3573FC" />
                        <stop offset="0.692308" stopColor="#3573FC" />
                        <stop offset="1" stopColor="#3573FC" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('platforms.martech.title')}
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('platforms.martech.description')}
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="absolute left-[725px] top-[542px] hidden h-14 w-full items-center justify-between rounded-full bg-[#f9fafd] p-1 lg:flex lg:w-[120px]">
          <button
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

      <Feedback />
      <Technoligies />

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 self-stretch lg:gap-12">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 lg:w-[656px]">
          <div className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-5xl lg:leading-[60px]">
            {t('comfort.title')}
          </div>
        </div>
        <div className="relative grid w-full flex-[0_0_auto] grid-cols-1 items-start gap-6 lg:flex ">
          <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10">
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
                d="M32 32H43"
                stroke="#E74951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32 24H43"
                stroke="#E74951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32 40H43"
                stroke="#E74951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 24L23 26L27 22"
                stroke="#E74951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 32L23 34L27 30"
                stroke="#E74951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 40L23 42L27 38"
                stroke="#E74951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                {t('comfort.workPlan.title')}
              </div>
              <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                {t('comfort.workPlan.description')}
              </p>
            </div>
          </div>
          <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10">
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
                {t('comfort.team.title')}
              </div>
              <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                {t('comfort.team.description')}
              </p>
            </div>
          </div>
          <div className="relative flex h-[355px] flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:p-10">
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
                d="M41 35L36 40L28 38L21 33"
                stroke="#3573FC"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.0859 24.8287L32.0009 23L38.9159 24.8287"
                stroke="#3573FC"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.2956 23.5524L17.1056 29.9349C16.9871 30.1719 16.9675 30.4463 17.0511 30.6978C17.1348 30.9493 17.3149 31.1573 17.5519 31.2761L20.9994 32.9999L25.0844 24.8286L21.6381 23.1061C21.5207 23.0472 21.3928 23.012 21.2617 23.0026C21.1307 22.9931 20.9991 23.0096 20.8744 23.0511C20.7497 23.0925 20.6344 23.1581 20.5351 23.2441C20.4358 23.3301 20.3544 23.4349 20.2956 23.5524Z"
                stroke="#3573FC"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42.9991 32.9999L46.4466 31.2761C46.6835 31.1573 46.8636 30.9493 46.9473 30.6978C47.031 30.4463 47.0114 30.1719 46.8928 29.9349L43.7028 23.5524C43.644 23.4349 43.5626 23.3301 43.4633 23.2441C43.364 23.1581 43.2487 23.0925 43.124 23.0511C42.9994 23.0096 42.8677 22.9931 42.7367 23.0026C42.6056 23.012 42.4778 23.0472 42.3603 23.1061L38.9141 24.8286L42.9991 32.9999Z"
                stroke="#3573FC"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M39.0006 25H34.0006L28.2931 30.5363C28.187 30.6423 28.1061 30.7709 28.0564 30.9124C28.0067 31.054 27.9896 31.2049 28.0061 31.354C28.0227 31.5031 28.0726 31.6465 28.1521 31.7737C28.2316 31.9009 28.3388 32.0086 28.4656 32.0888C30.6543 33.4875 33.6256 33.3912 36.0006 31L41.0006 35L43.0006 33"
                stroke="#3573FC"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.5075 43L26.2925 41.6963L23 39.3438"
                stroke="#3573FC"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                {t('comfort.reliablePartner.title')}
              </div>
              <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                {t('comfort.reliablePartner.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Works />
      <Trust />
    </div>
  );
};
