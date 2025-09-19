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
    useInView(ref, { once: true, margin: '-100px' }),
  );
  const delays = [0, 0.15, 0.3, 0.45, 0.6, 0.75];

  return (
    <section className="w-full overflow-hidden rounded-[24px] bg-[#ffffff] md:rounded-[32px]">
      <div className="relative flex min-h-[520px] w-full flex-col items-center gap-7 overflow-hidden rounded-[24px] px-4 pb-0 md:h-[900px] md:gap-20 md:rounded-[32px] md:px-10 md:pt-[88px] xl:px-20">
        <img
          className="absolute left-1/2 top-[220px] hidden h-[560px] w-full -translate-x-1/2 md:left-[113px] md:top-[272px] md:block md:h-[1060px] md:w-[1108px] md:translate-x-0"
          alt=""
          aria-hidden="true"
          src="/img/vector-1-6.svg"
        />

        <div className="relative flex w-full max-w-[980px] flex-col items-center justify-center gap-4 px-0 md:gap-7 md:px-0">
          <motion.h1
            id="animate_1"
            ref={refs[0]}
            initial={{ opacity: 0, y: 40 }}
            animate={inViews[0] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: delays[0], ease: 'easeOut' }}
            className="relative mt-[-1.00px] self-stretch text-center text-[28px] font-normal leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-4xl md:leading-[48px] xl:text-6xl xl:leading-[60px]"
          >
            <span className="font-medium text-[#1c222f] md:leading-[56px] xl:leading-[68px]">
              {t('hero.titleA')}
            </span>{' '}
            <span className="font-medium text-[#3573fc] md:leading-[56px] xl:leading-[68px]">
              {t('hero.titleB')}{' '}
            </span>
            <span className="font-medium text-[#1c222f] md:leading-[56px] xl:leading-[68px]">
              {t('hero.titleC')}
            </span>
          </motion.h1>

          <motion.p
            id="animate_2"
            ref={refs[1]}
            initial={{ opacity: 0, y: 40 }}
            animate={inViews[1] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: delays[1], ease: 'easeOut' }}
            className="relative w-full text-center text-[#929cb3] [font-family:'Roboto',Helvetica] md:w-[600px]"
          ></motion.p>
        </div>

        {/* Phone frame with inner cards */}
        <motion.div
          id="animate_phone"
          ref={refs[2]}
          initial={{ opacity: 0, y: 40 }}
          animate={inViews[2] ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: delays[2] + 0.05,
            ease: 'easeOut',
          }}
          className="absolute bottom-[-6px] left-[540px] hidden w-[400px] flex-col gap-4 rounded-t-[40px] border-[6px] border-solid border-gray-90 bg-white p-7 md:flex"
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
                className="flex size-[140px] items-center justify-center rounded-2xl bg-white bg-cover bg-center p-4"
                style={{
                  backgroundImage: "url('/img/Frame 1948755022.png')",
                }}
              />
              <div className="relative flex  size-[140px] items-center justify-center gap-4 rounded-2xl bg-white p-4">
                <div className="absolute -top-2 right-0 -translate-x-1/2">
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
              <div className="flex size-[140px] flex-col justify-center gap-2 rounded-2xl bg-white p-4">
                <div className="text-center text-sm text-gray-40 [font-family:'Roboto',Helvetica]">
                  {t('heroCards.scoreTitle')}
                </div>
                <div className="text-center text-[28px] font-medium leading-10 text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('heroCards.scoreValue')}
                </div>
              </div>
              <div className="flex size-[140px] items-center justify-center rounded-2xl bg-white p-4">
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
          animate={inViews[5] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: delays[5], ease: 'easeOut' }}
          className="absolute left-[894px] top-[730px] hidden items-center gap-4 rounded-[32px] bg-white py-4 pl-4 pr-6 md:inline-flex"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-7 rounded-3xl bg-[#f2f5ff] p-4">
            <img className="relative size-8" alt="Money" src="/img/money.svg" />
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
          className="hiddenw-full absolute left-[140px] top-[559px] items-center justify-center gap-5 rounded-[32px] bg-white p-4 md:flex md:w-[472px]"
        >
          <Graph />

          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start justify-between self-stretch rounded-[20px] bg-[#f6f8ff] p-5">
            <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
              <div className="relative size-2 rounded bg-blue-50" />

              <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[72px]">
                {t('chart.current')}
              </div>

              <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[72px]">
                23,456₽
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
              <div className="relative size-2 rounded bg-green-60" />

              <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[72px]">
                {t('chart.main')}
              </div>

              <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[72px]">
                42,000₽
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
              <div className="relative size-2 rounded bg-yellow-50" />

              <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[72px]">
                {t('chart.interest')}
              </div>

              <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[72px]">
                4,000₽
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
              <div className="relative size-2 rounded bg-red-50" />

              <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[72px]">
                {t('chart.penalty')}
              </div>

              <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[72px]">
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
          className="hiddenw-full absolute left-[957px] top-[458px] flex-col items-center justify-center gap-5 rounded-[32px] bg-white p-4 md:flex md:w-[324px]"
        >
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="w/full relative flex flex-[0_0_auto] flex-col items-start gap-6 self-stretch p-4">
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
                  <div className="h-3w-full relative -left-0.5 top-px md:w-[260px]">
                    <img
                      className="h-1w-full absolute left-0 top-1 md:w-[260px]"
                      alt="Vector"
                      src="/img/vector-136.svg"
                    />

                    <img
                      className="h-1w-full absolute left-0 top-1 md:w-[167px]"
                      alt="Vector"
                      src="/img/vector-136.svg"
                    />
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
                  <div className="h-3w-full relative -left-0.5 top-px md:w-[260px]">
                    <img
                      className="h-1w-full absolute left-0 top-1 md:w-[260px]"
                      alt="Vector"
                      src="/img/vector-137-2.svg"
                    />
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
                className="inline-flex items-center justify-center gap-2 rounded-[32px] bg-gray-90 px-4 py-3 text-base font-medium leading-6 tracking-normal text-white [font-family:'Roboto',Helvetica]"
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
