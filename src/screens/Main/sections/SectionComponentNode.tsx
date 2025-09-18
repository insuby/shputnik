import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import ArrowLineDown from '../../../icons/ArrowLineDown';
import { RoutesPath } from '../../../routes-path.tsx';

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
        className="relative mt-[-1.00px] w-fit text-[40px] font-normal leading-10 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
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
          className="font-medium leading-[48px] text-[#1c222f]"
        >
          {t('alternativeModels.title').split(' ').slice(1).join(' ')}
        </motion.span>
      </h2>

      <div className="relative flex h-[520px] w-full items-start gap-4">
        <div className="relative w-full self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] md:w-[686px]">
          <div className="relative h-[682px]">
            <img
              className="absolute left-0 top-0 h-[520px] w-full md:w-[686px]"
              alt="Vector"
              src="/img/vector-1-5.svg"
            />

            <motion.div
              id="animate_33"
              ref={ref34}
              initial={{ opacity: 0, y: 40 }}
              animate={inView34 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute left-[62px] top-[80px] flex w-full flex-col items-center justify-center overflow-hidden rounded-[32px] bg-green-60 md:w-[304px]"
            >
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-5 self-stretch p-5">
                <img
                  className="absolute left-[-49px] top-3 h-[330px] w-full md:w-[345px]"
                  alt="Vector"
                  src="/img/vector-1-2.svg"
                />

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

                  <div className="relative w-fit whitespace-nowrap text-center text-[28px] font-medium leading-10 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
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
                  <div className="relative flex h-[72px] w-full items-start gap-4 self-stretch overflow-hidden rounded-2xl bg-[#f2f5ff] p-1">
                    <div className="relative flex flex-1 grow flex-col items-start p-3">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                        {t('alternativeModels.p2pUI.myInvestments')}
                      </div>

                      <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('alternativeModels.p2pUI.investmentAmount')}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-col items-start rounded-xl bg-[#eaedf7] p-3 md:w-[88px]">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                        {t('alternativeModels.p2pUI.interest')}
                      </div>

                      <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        1 200₽
                      </div>
                    </div>
                  </div>

                  <div className="relative flex h-[72px] w-full items-start gap-4 self-stretch rounded-2xl bg-[#f2f5ff] p-1">
                    <div className="relative flex flex-1 grow flex-col items-start p-3">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('alternativeModels.p2pUI.myLoans')}
                      </div>

                      <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        134 000₽
                      </div>
                    </div>

                    <div className="relative flex w-full flex-col items-start rounded-xl bg-[#eaedf7] p-3 md:w-[88px]">
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

            <img
              className="absolute left-[57px] top-0 h-[520px] w-full md:w-[629px]"
              alt="Vector"
              src="/img/vector-4-3.svg"
            />

            <motion.div
              id="animate_34_right"
              ref={ref34r}
              initial={{ opacity: 0, x: 40 }}
              animate={inView34r ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute left-[298px] top-[138px] inline-flex flex-col items-start justify-center gap-4 rounded-[32px] bg-white p-7"
            >
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                <div className="relative mt-[-1.00px] w-full text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[180px]">
                  {t('alternativeModels.p2pUI.totalIncome')}
                </div>

                <div className="relative w-full text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[264px]">
                  1,567,000₽
                </div>
              </div>

              <div className="relative inline-flex h-[154px] items-end">
                <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                  <div className="relative h-[76px] w-8 rounded-3xl bg-[#f2f4fb]" />

                  <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    01.05
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                  <div className="relative h-[86px] w-8 rounded-3xl bg-[#f2f4fb]" />

                  <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    02.05
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                  <div className="relative h-[105px] w-8 rounded-3xl bg-[#f2f4fb]" />

                  <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    03.05
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                  <div className="relative h-[120px] w-8 rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />

                  <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    04.05
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                  <div className="relative h-[91px] w-8 rounded-3xl bg-[#f2f4fb]" />

                  <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    06.05
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
                  <div className="relative h-[98px] w-8 rounded-3xl bg-[#f2f4fb]" />

                  <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    07.05
                  </div>
                </div>
              </div>

              <img
                className="absolute left-0 top-[106px] h-[104px] w-full md:w-[328px]"
                alt="Vector"
                src="/img/vector-147-1.svg"
              />

              <div className="absolute left-[180px] top-[131px] size-3 rounded-md border-2 border-solid border-[#00cb82] bg-[#ffffff]" />
            </motion.div>
          </div>
        </div>

        <div className="relative flex flex-1 grow flex-col items-start justify-center gap-5 self-stretch">
          <motion.div
            id="animate_35_left"
            ref={ref35}
            initial={{ opacity: 0, x: -40 }}
            animate={inView35 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            onClick={handleP2PClick}
            className="group relative mx-[-2.00px] mt-[-2.00px] flex w-full flex-1 grow cursor-pointer items-center gap-7 self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-transparent bg-[#f9fafd] p-8 hover:border-[#3573fc] hover:bg-[#f5f7ff] md:p-10"
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
            className="group relative flex w-full flex-1 grow cursor-pointer items-center gap-7 self-stretch overflow-hidden rounded-3xl border-2 border-solid border-transparent bg-[#f9fafd] p-8 hover:border-[#3573fc]  hover:bg-[#f5f7ff] md:p-10"
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
