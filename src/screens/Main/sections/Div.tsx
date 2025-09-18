import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import { RoutesPath } from '../../../routes-path.tsx';

export const Div = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(['home']);

  const handleBNPLClick = () => {
    navigate(RoutesPath.BNPL);
  };

  const ref20 = useRef<HTMLSpanElement>(null);
  const ref21 = useRef<HTMLSpanElement>(null);
  const ref22 = useRef<HTMLDivElement>(null);
  const ref23 = useRef<HTMLDivElement>(null);
  const ref24 = useRef<HTMLDivElement>(null);
  const ref25 = useRef<HTMLDivElement>(null);
  const ref26 = useRef<HTMLDivElement>(null);
  const ref27 = useRef<HTMLDivElement>(null);
  const ref28 = useRef<HTMLDivElement>(null);
  const ref29 = useRef<HTMLDivElement>(null);
  const ref30 = useRef<HTMLParagraphElement>(null);
  const ref31 = useRef<HTMLParagraphElement>(null);
  const inView20 = useInView(ref20, { once: true, margin: '-100px' });
  const inView21 = useInView(ref21, { once: true, margin: '-100px' });
  const inView22 = useInView(ref22, { once: true, margin: '-100px' });
  const inView23 = useInView(ref23, { once: true, margin: '-100px' });
  const inView24 = useInView(ref24, { once: true, margin: '-100px' });
  const inView25 = useInView(ref25, { once: true, margin: '-100px' });
  const inView26 = useInView(ref26, { once: true, margin: '-100px' });
  const inView27 = useInView(ref27, { once: true, margin: '-100px' });
  const inView28 = useInView(ref28, { once: true, margin: '-100px' });
  const inView29 = useInView(ref29, { once: true, margin: '-100px' });
  const inView30 = useInView(ref30, { once: true, margin: '-100px' });
  const inView31 = useInView(ref31, { once: true, margin: '-100px' });
  return (
    <section
      className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch"
      aria-labelledby="credit-in-store-online"
    >
      <h2
        id="credit-in-store-online"
        className="relative mt-[-1.00px] w-fit text-[40px] font-normal leading-10 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
      >
        <motion.span
          id="animate_20"
          ref={ref20}
          initial={{ opacity: 0, x: -40 }}
          animate={inView20 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-medium leading-[0.1px] text-[#9ea7bb]"
        >
          {t('lendingStoreOnline.headingLeft')}
          <br />
        </motion.span>
        <motion.span
          id="animate_21"
          ref={ref21}
          initial={{ opacity: 0, x: 40 }}
          animate={inView21 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-medium leading-[48px] text-[#1c222f]"
        >
          {t('lendingStoreOnline.headingRight')}
        </motion.span>
      </h2>
      <div className="relative flex h-[600px] w-full items-start gap-5 self-stretch">
        <div className="relative flex flex-1 grow items-center gap-5 self-stretch">
          <motion.div
            id="animate_24"
            ref={ref24}
            initial={{ opacity: 0, y: 40 }}
            animate={inView24 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="group relative flex flex-1 grow cursor-pointer flex-col items-start justify-center self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-transparent bg-[#f9fafd]  hover:border-[#3573fc] hover:bg-[#f5f7ff]"
          >
            <Link
              to={RoutesPath.BNPL}
              className="relative w-full flex-1 grow self-stretch rounded-[32px]"
            >
              <div className="relative h-[401px] w-full md:w-[678px]">
                <img
                  className="absolute left-[145px] top-[30px] h-[371px] w-full md:w-[388px]"
                  alt=""
                  aria-hidden="true"
                  src="/img/vector-1.svg"
                />
                <motion.div
                  id="animate_25"
                  ref={ref25}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView25 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute left-12 top-12 inline-flex items-center rounded-[32px] bg-white p-4"
                >
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start justify-center gap-2.5 p-3">
                    <div className="relative flex size-40 items-start gap-3">
                      <div className="relative size-[148px] [background:url(/img/frame-1948755020.png)_50%_50%_/_cover]" />
                    </div>
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4 self-stretch rounded-3xl bg-[#f6f8ff] p-6">
                    <div className="relative mt-[-1.00px] self-stretch text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('lendingStoreOnline.productName')}
                    </div>
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2.5">
                      <div className="h-5w-full relative flex items-center gap-3 md:w-[264px]">
                        <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('lendingStoreOnline.cost')}
                        </div>
                        <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[72px]">
                          23,456₽
                        </div>
                      </div>
                      <div className="h-5w-full relative flex items-center gap-3 md:w-[264px]">
                        <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('lendingStoreOnline.advancePayment')}
                        </div>
                        <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[72px]">
                          42,000₽
                        </div>
                      </div>
                      <div className="h-5w-full relative flex items-center gap-3 md:w-[264px]">
                        <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('calculator.term')}
                        </div>
                        <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[72px]">
                          4,000₽
                        </div>
                      </div>
                      <div className="h-5w-full relative flex items-center gap-3 md:w-[264px]">
                        <div className="relative mt-[-1.00px] flex-1 text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          {t('lendingStoreOnline.nextPayment')}
                        </div>
                        <div className="relative mt-[-1.00px] w-full text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[72px]">
                          2,700₽
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <img
                  className="absolute left-0 top-0 h-[368px] w-full md:w-[678px]"
                  alt=""
                  aria-hidden="true"
                  src="/img/vector-4-1.svg"
                />
                <motion.div
                  id="animate_27"
                  ref={ref27}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView27 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute left-[363px] top-[238px] inline-flex items-center gap-4 rounded-[32px] bg-white py-4 pl-4 pr-6"
                >
                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-7 rounded-3xl bg-[#f2f5ff] p-4">
                    <img
                      className="relative size-8"
                      alt="Money"
                      src="/img/money.svg"
                    />
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
              </div>
            </Link>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-end gap-7 self-stretch p-8 pt-0 md:p-10">
              <motion.div
                id="animate_28"
                ref={ref28}
                initial={{ opacity: 0, x: -40 }}
                animate={inView28 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('lendingStoreOnline.bnplTitle')}
              </motion.div>
              <motion.div
                id="animate_30"
                ref={ref30}
                initial={{ opacity: 0, y: 40 }}
                animate={inView30 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
              >
                <p className="w-10/12">{t('lendingStoreOnline.bnplDesc')}</p>
                <div className="absolute bottom-0 right-0 inline-flex h-[-99px] flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-white p-4">
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
          </motion.div>
          <motion.div
            id="animate_22"
            ref={ref22}
            initial={{ opacity: 0, y: 40 }}
            animate={inView22 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="group relative flex flex-1 grow cursor-pointer flex-col items-start justify-center self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-transparent bg-[#f9fafd]  hover:border-[#3573fc] hover:bg-[#f5f7ff]"
          >
            <Link
              to={RoutesPath.BNPL}
              className="relative w-full flex-1 grow self-stretch rounded-[32px]"
            >
              <div className="relative left-[67px] top-6 h-[416px] w-full md:w-[543px]">
                <img
                  className="absolute left-[78px] top-1.5 h-[371px] w-full md:w-[388px]"
                  alt=""
                  aria-hidden="true"
                  src="/img/vector-1-1.svg"
                />
                <motion.div
                  id="animate_26"
                  ref={ref26}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView26 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute left-[215px] top-[26px] inline-flex flex-col items-start justify-center gap-4 rounded-[32px] bg-white p-7"
                >
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                    <div className="relative mt-[-1.00px] w-full text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[264px]">
                      {t('lendingStoreOnline.paymentSchedule')}
                    </div>
                    <div className="relative w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[180px]">
                      {t('lendingStoreOnline.contract')}
                    </div>
                  </div>
                  <div className="relative inline-flex h-[154px] items-end">
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                      <div className="relative h-[76px] w-2 rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />
                      <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('lendingStoreOnline.months.march')}
                      </div>
                    </div>
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                      <div className="relative h-[86px] w-2 rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />
                      <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('lendingStoreOnline.months.april')}
                      </div>
                    </div>
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                      <div className="relative h-[105px] w-2 rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />
                      <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('lendingStoreOnline.months.may')}
                      </div>
                    </div>
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                      <div className="relative h-[120px] w-2 rounded-3xl bg-[#f2f4fb]" />
                      <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('lendingStoreOnline.months.june')}
                      </div>
                    </div>
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                      <div className="relative h-[91px] w-2 rounded-3xl bg-[#f2f4fb]" />
                      <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('lendingStoreOnline.months.july')}
                      </div>
                    </div>
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                      <div className="relative h-[98px] w-2 rounded-3xl bg-[#f2f4fb]" />
                      <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('lendingStoreOnline.months.august')}
                      </div>
                    </div>
                  </div>
                  <img
                    className="absolute left-0 top-[109px] h-24 w-full md:w-[328px]"
                    alt=""
                    aria-hidden="true"
                    src="/img/vector-147.svg"
                  />
                  <div className="absolute left-[156px] top-[133px] size-3 rounded-md border-2 border-solid border-[#00cb82] bg-[#ffffff]" />
                </motion.div>
                <img
                  className="absolute left-3 top-0 h-[416px] w-full md:w-[388px]"
                  alt=""
                  aria-hidden="true"
                  src="/img/vector-4-2.svg"
                />
                <motion.div
                  id="animate_23"
                  ref={ref23}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView23 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute left-0 top-14 inline-flex flex-col items-center justify-center gap-3 rounded-[32px_32px_0px_0px] bg-white p-4"
                >
                  <div className="relative size-[212px] rounded-[100px]">
                    <div className="relative left-[7px] top-[7px] size-[198px]">
                      <div className="absolute left-10 top-[68px] inline-flex h-[62px] flex-col items-center gap-0.5">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                          {t('lendingStoreOnline.currentBalance')}
                        </div>
                        <div className="relative w-fit whitespace-nowrap text-center text-[28px] font-medium leading-10 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                          44,000₽
                        </div>
                      </div>
                      <div className="absolute left-0 top-0 size-[198px] rounded-[99px] border-[10px] border-solid border-neutral-50" />
                      <img
                        className="absolute left-0 top-0 size-[198px]"
                        alt=""
                        aria-hidden="true"
                        src="/img/ellipse-32.svg"
                      />
                    </div>
                  </div>
                  <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch rounded-[20px] bg-[#f6f8ff] px-4 py-3">
                    <div className="relative w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                      {t('lendingStoreOnline.loanAmount')}
                    </div>
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      122, 000₽
                    </div>
                  </div>
                </motion.div>
              </div>
            </Link>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-end gap-7 self-stretch p-8 pt-0 md:p-10">
              <motion.div
                id="animate_29"
                ref={ref29}
                initial={{ opacity: 0, x: 40 }}
                animate={inView29 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('lendingStoreOnline.posTitle')}
              </motion.div>
              <motion.div
                id="animate_31"
                ref={ref31}
                initial={{ opacity: 0, y: 40 }}
                animate={inView31 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
              >
                <p className="w-10/12">{t('lendingStoreOnline.posDesc')}</p>
                <div className="absolute bottom-0 right-0 inline-flex  h-[-99px] flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-white p-4">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
