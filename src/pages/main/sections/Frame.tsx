import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useFeedbackForm } from 'widgets/feedback-form';

import { CheckIcon, Graph } from 'shared/ui';

export const Frame = () => {
  const { setIsOpen } = useFeedbackForm();
  const { t } = useTranslation(['home']);

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
    useInView(ref, { once: true, margin: '-30px' }),
  );
  const delays = [0, 0.15, 0.3, 0.45, 0.6, 0.75];

  return (
    <section className="w-full overflow-hidden rounded-[var(--spacing-1-67)] bg-[#ffffff] xl:rounded-[var(--spacing-2-22)]">
      <div className="relative flex !min-h-[800px] w-full flex-col items-center gap-[var(--spacing-1-94)] overflow-hidden rounded-[var(--spacing-1-67)] px-[var(--spacing-1-11)] pb-0 pt-[88px] xl:h-[var(--size-900)] xl:gap-[var(--spacing-5-56)] xl:rounded-[var(--spacing-2-22)] xl:px-[var(--spacing-5-56)] xl:pt-[var(--spacing-6-11)]">
        <svg
          className="absolute left-1/2 top-[var(--pos-220)] hidden h-[var(--size-560)] w-full -translate-x-1/2 lg:left-[var(--pos-113)] lg:top-[var(--pos-272)] lg:block lg:h-[var(--size-1060)] lg:w-[var(--size-1108)] lg:translate-x-0"
          width="1125"
          height="1073"
          viewBox="0 0 1125 1073"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <g opacity="0.2" filter="url(#filter0_f_50_350)">
            <path
              d="M466.34 421.979C450.478 305.734 579.011 227.218 645.26 202.49C1053.79 161.752 939.561 646.609 773.871 781.079C608.18 915.549 221.919 900.047 201.087 747.375C180.255 594.704 486.167 567.285 466.34 421.979Z"
              fill="#3573FC"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_50_350"
              x="0"
              y="0"
              width="1125"
              height="1072.76"
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
                result="effect1_foregroundBlur_50_350"
              />
            </filter>
          </defs>
        </svg>

        <div className="relative flex w-full max-w-[var(--size-980)] flex-col items-center justify-center gap-[var(--spacing-1-11)] px-0 xl:gap-[var(--spacing-1-94)] xl:px-0">
          <motion.h1
            id="animate_1"
            ref={refs[0]}
            initial={{ opacity: 0, y: 40 }}
            animate={inViews[0] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: delays[0], ease: 'easeOut' }}
            className="text-adaptive-28-to-60 leading-adaptive-68 relative mt-[-1.00px] self-stretch text-center font-normal tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
          >
            <span className="font-medium text-[#1c222f]">
              {t('hero.titleA')}
            </span>{' '}
            <span className="font-medium text-[#3573fc]">
              {t('hero.titleB')}{' '}
            </span>
            <span className="font-medium text-[#1c222f]">
              {t('hero.titleC')}
            </span>
          </motion.h1>

          <motion.p
            id="animate_2"
            ref={refs[1]}
            initial={{ opacity: 0, y: 40 }}
            animate={inViews[1] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: delays[1], ease: 'easeOut' }}
            className="relative w-full text-center text-xl font-normal leading-7 tracking-normal text-[#929cb3] [font-family:'Roboto',Helvetica] xl:w-[var(--size-786)]"
          >
            {t('hero.description')}
          </motion.p>
        </div>

        <motion.div
          id="animate_phone"
          ref={refs[2]}
          initial={{ opacity: 0, y: 40 }}
          animate={inViews[1] ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: delays[2] + 0.05,
            ease: 'easeOut',
          }}
          className="absolute bottom-[-0.42vw] left-[var(--spacing-37-5)] hidden w-[var(--spacing-27-78)] flex-col gap-[var(--spacing-1-11)] rounded-t-[var(--spacing-2-78)] border-solid border-[var(--spacing-0-42)] border-gray-90 bg-white p-[var(--spacing-1-94)] lg:flex"
        >
          <div className="flex w-full items-center justify-between">
            <div className="text-adaptive-24 leading-adaptive-32 font-semibold text-gray-90 [font-family:'Inter',Helvetica]">
              {t('heroCards.greeting')} {t('heroCards.userName')}
            </div>

            <div className="relative size-8">
              <div className="absolute left-1 top-4 h-0.5 w-5 rounded bg-gray-40" />
              <div className="absolute left-1 top-2 h-0.5 w-5 rounded bg-gray-40" />
              <div className="absolute left-1 top-6 h-0.5 w-5 rounded bg-gray-40" />
            </div>
          </div>

          <div className="flex w-full flex-col gap-[var(--spacing-1-11)] rounded-[var(--spacing-2-22)] bg-[#F2F5FF] p-[var(--spacing-1-67)]">
            <div className="flex w-full items-stretch gap-[var(--spacing-1-11)]">
              <div
                className="flex size-[var(--size-140)] items-center justify-center rounded-2xl bg-white bg-cover bg-center p-4"
                style={{
                  backgroundImage: "url('/img/Frame 1948755022.png')",
                }}
              />
              <div className="relative flex  size-[var(--size-140)] items-center justify-center gap-4 rounded-2xl bg-white p-4">
                <div className="absolute -top-2 right-0 ">
                  <CheckIcon
                    className="inline-flex items-center justify-center rounded-[100px] p-1.5"
                    bgColor="#00CB82"
                    iconColor="#FFFFFF"
                  />
                </div>

                <div className="flex w-full flex-col items-center justify-around gap-[var(--spacing-0-83)]">
                  <div className="text-center text-sm text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('heroCards.approvalTitle')}
                  </div>
                  <div className="text-adaptive-28 text-center font-medium leading-10 text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('heroCards.approvalAmount')}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full items-stretch gap-[var(--spacing-1-11)]">
              <div className="flex size-[var(--spacing-9-72)] flex-col justify-center gap-[var(--spacing-0-56)] rounded-[var(--spacing-1-11)] bg-white p-[var(--spacing-1-11)]">
                <div className="text-center text-sm text-gray-40 [font-family:'Roboto',Helvetica]">
                  {t('heroCards.scoreTitle')}
                </div>
                <div className="text-adaptive-28 text-center font-medium leading-10 text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('heroCards.scoreValue')}
                </div>
              </div>
              <div className="flex size-[var(--spacing-9-72)] items-center justify-center rounded-[var(--spacing-1-11)] bg-white p-[var(--spacing-1-11)]">
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
                      <stop offset="1" stopColor="#3573FC" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="animate_6"
          ref={refs[5]}
          initial={{ opacity: 0, y: 40 }}
          animate={inViews[1] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: delays[5], ease: 'easeOut' }}
          className="absolute left-[var(--spacing-62-08)] top-[var(--spacing-50-69)] hidden items-center gap-[var(--spacing-1-11)] rounded-[var(--spacing-2-22)] bg-white py-[var(--spacing-1-11)] pl-[var(--spacing-1-11)] pr-[var(--spacing-1-67)] lg:inline-flex"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[var(--spacing-1-94)] rounded-[var(--spacing-1-67)] bg-[#f2f5ff] p-[var(--spacing-1-11)]">
            <svg
              className="relative size-8"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Money"
            >
              <path
                d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 14C10.5 15.933 12.067 17.5 14 17.5Z"
                stroke="#3573FCFF"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.25 7H1.75V21H26.25V7Z"
                stroke="#3573FCFF"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.25 11.375C25.157 11.1897 24.1487 10.6691 23.3648 9.88521C22.5809 9.10132 22.0603 8.093 21.875 7"
                stroke="#3573FCFF"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.875 21C22.0603 19.907 22.5809 18.8987 23.3648 18.1148C24.1487 17.3309 25.157 16.8103 26.25 16.625"
                stroke="#3573FCFF"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.75 16.625C2.843 16.8103 3.85132 17.3309 4.63521 18.1148C5.4191 18.8987 5.93975 19.907 6.125 21"
                stroke="#3573FCFF"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.125 7C5.93975 8.093 5.4191 9.10132 4.63521 9.88521C3.85132 10.6691 2.843 11.1897 1.75 11.375"
                stroke="#3573FCFF"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
              {t('hero.monthlyPayment')}
            </div>

            <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              4 950₽
            </div>
          </div>
        </motion.div>

        <motion.div
          id="animate_4"
          ref={refs[3]}
          initial={{ opacity: 0, y: 40 }}
          animate={inViews[3] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: delays[3], ease: 'easeOut' }}
          className="hiddenw-full absolute left-[var(--spacing-9-72)] top-[var(--spacing-38-82)] items-center justify-center gap-[var(--spacing-1-39)] rounded-[var(--spacing-2-22)] bg-white p-[var(--spacing-1-11)] lg:flex lg:w-[var(--spacing-32-78)]"
        >
          <Graph />

          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start justify-between self-stretch rounded-[var(--spacing-1-39)] bg-[#f6f8ff] p-[var(--spacing-1-39)]">
            <div className="relative inline-flex flex-[0_0_auto] items-center gap-[var(--spacing-0-83)]">
              <div className="relative size-2 rounded bg-blue-50" />

              <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] xl:w-[var(--size-72)]">
                {t('chart.current')}
              </div>

              <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[var(--size-72)]">
                23,456₽
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-[var(--spacing-0-83)]">
              <div className="relative size-2 rounded bg-green-60" />

              <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] xl:w-[var(--size-72)]">
                {t('chart.main')}
              </div>

              <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[var(--size-72)]">
                42,000₽
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-[var(--spacing-0-83)]">
              <div className="relative size-2 rounded bg-yellow-50" />

              <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] xl:w-[var(--size-72)]">
                {t('chart.interest')}
              </div>

              <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[var(--size-72)]">
                4,000₽
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-[var(--spacing-0-83)]">
              <div className="relative size-2 rounded bg-red-50" />

              <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] xl:w-[var(--size-72)]">
                {t('chart.penalty')}
              </div>

              <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:w-[var(--size-72)]">
                2,700₽
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="animate_5"
          ref={refs[4]}
          initial={{ opacity: 0, y: 40 }}
          animate={inViews[4] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: delays[4], ease: 'easeOut' }}
          className="hiddenw-full absolute left-[var(--spacing-66-46)] top-[var(--spacing-31-81)] flex-col items-center justify-center gap-[var(--spacing-1-39)] rounded-[var(--spacing-2-22)] bg-white p-[var(--spacing-1-11)] lg:flex lg:w-[var(--spacing-22-5)]"
        >
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="w/full relative flex flex-[0_0_auto] flex-col items-start gap-[var(--spacing-1-67)] self-stretch p-[var(--spacing-1-11)]">
              <div className="w/full relative flex flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                <div className="w/full relative flex h-6 items-center justify-between self-stretch">
                  <div className="relative w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    {t('calculator.amount')}
                  </div>

                  <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    42 000₽
                  </div>
                </div>

                <div className="w/full relative h-3.5 self-stretch">
                  <div className="h-3w-full relative -left-0.5 top-px xl:w-[var(--size-260)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="260"
                      height="14"
                      viewBox="0 0 260 14"
                      fill="none"
                    >
                      <path
                        d="M2 7L258 7.00002"
                        stroke="#F2F5FF"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2 7L165 7.00001"
                        stroke="#3573FC"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <circle cx="163" cy="7" r="6" fill="#3573FC" />
                    </svg>
                  </div>
                </div>

                <div className="w/full relative flex items-center justify-between self-stretch">
                  <div className="relative w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    {t('calculator.term')}
                  </div>

                  <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('calculator.termValue')}
                  </div>
                </div>

                <div className="w/full relative h-3.5 self-stretch">
                  <div className="h-3w-full relative -left-0.5 top-px xl:w-[var(--size-260)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="260"
                      height="14"
                      viewBox="0 0 260 14"
                      fill="none"
                    >
                      <path
                        d="M2 7H258"
                        stroke="#F2F5FF"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2 7H91"
                        stroke="#3573FC"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <circle cx="91" cy="7" r="6" fill="#3573FC" />
                    </svg>
                  </div>
                </div>

                <div className="w/full relative flex items-center justify-between self-stretch">
                  <div className="relative w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    {t('calculator.rate')}
                  </div>

                  <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    8%
                  </div>
                </div>
              </div>

              <button
                onClick={onClick}
                className="inline-flex items-center justify-center gap-[var(--spacing-0-56)] rounded-[var(--spacing-2-22)] bg-gray-90 px-[var(--spacing-1-11)] py-[var(--spacing-0-83)] text-base font-medium leading-6 tracking-normal text-white [font-family:'Roboto',Helvetica]"
              >
                {t('calculator.calculate')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
