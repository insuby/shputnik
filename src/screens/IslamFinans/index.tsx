import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { isMobile } from '../../App.tsx';
import { CheckIcon } from '../../components/ui/check-icon.tsx';
import { HeroButtons } from '../../components/ui/hero-buttons.tsx';
import { Advantages } from '../../widgets/advantages.tsx';
import { Analytics } from '../../widgets/analytics.tsx';
import { EmployeeWork } from '../../widgets/employe-work.tsx';
import { useFeedbackForm } from '../../widgets/feedback-form';
import { Feedback } from '../../widgets/feedback.tsx';
import { Integrations } from '../../widgets/integrations.tsx';
import { RoleStructure } from '../../widgets/role-structure.tsx';
import { Trust } from '../../widgets/trust.tsx';
import { Zaim } from '../../widgets/zaim.tsx';
import { ZaimChecker } from '../../widgets/zain-checker.tsx';

export const IslamFinance = () => {
  const { t } = useTranslation(['islamfinance']);
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);
  const ref12 = useRef(null);
  const ref13 = useRef(null);
  const ref14 = useRef(null);
  const ref15 = useRef(null);
  const ref16 = useRef(null);
  const ref17 = useRef(null);
  const ref18 = useRef(null);
  const ref19 = useRef(null);
  const ref20 = useRef(null);
  const ref21 = useRef(null);
  const ref22 = useRef(null);
  const ref23 = useRef(null);
  const ref24 = useRef(null);
  const ref25 = useRef(null);

  const marginValue = isMobile ? '-10px' : '-100px';
  const inView1 = useInView(ref1, { once: true, margin: marginValue });
  const inView2 = useInView(ref2, { once: true, margin: marginValue });
  const inView3 = useInView(ref3, { once: true, margin: marginValue });
  const inView4 = useInView(ref4, { once: true, margin: marginValue });
  const inView5 = useInView(ref5, { once: true, margin: marginValue });
  const inView6 = useInView(ref6, { once: true, margin: marginValue });
  const inView7 = useInView(ref7, { once: true, margin: marginValue });
  const inView8 = useInView(ref8, { once: true, margin: marginValue });
  const inView9 = useInView(ref9, { once: true, margin: marginValue });
  const inView10 = useInView(ref10, { once: true, margin: marginValue });
  const inView11 = useInView(ref11, { once: true, margin: marginValue });
  const inView12 = useInView(ref12, { once: true, margin: marginValue });
  const inView13 = useInView(ref13, { once: true, margin: marginValue });
  const inView14 = useInView(ref14, { once: true, margin: marginValue });
  const inView15 = useInView(ref15, { once: true, margin: marginValue });
  const inView16 = useInView(ref16, { once: true, margin: marginValue });
  const inView17 = useInView(ref17, { once: true, margin: marginValue });
  const inView18 = useInView(ref18, { once: true, margin: marginValue });
  const inView19 = useInView(ref19, { once: true, margin: marginValue });
  const inView20 = useInView(ref20, { once: true, margin: marginValue });
  const inView21 = useInView(ref21, { once: true, margin: marginValue });
  const inView22 = useInView(ref22, { once: true, margin: marginValue });
  const inView23 = useInView(ref23, { once: true, margin: marginValue });
  const inView24 = useInView(ref24, { once: true, margin: marginValue });
  const inView25 = useInView(ref25, { once: true, margin: marginValue });

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[88px] p-0 md:w-[1440px] md:gap-[136px] md:px-8 md:pb-[136px] md:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
        <div
          ref={ref1}
          className="relative flex w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-green-60 p-7 md:h-[620px] md:p-12"
        >
          <img
            className="absolute left-[539px] top-12 h-[842px] w-full md:w-[954px]"
            alt="Vector"
            src="/img/islamfinans/vector-1-7.svg"
          />

          <HeroButtons>
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 50 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 md:w-[624px]  md:gap-12"
            >
              <motion.div
                ref={ref3}
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
                className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 md:inline-flex"
              >
                <motion.h1
                  ref={ref4}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                  className="relative mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[44px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica] md:w-[624px] md:text-left md:text-6xl md:leading-[68px]"
                >
                  {t('hero.title')}
                </motion.h1>

                <motion.p
                  ref={ref5}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
                  className="relative w-full text-center text-xl font-normal leading-7 tracking-normal text-[#ffffffcc] [font-family:'Roboto',Helvetica] md:w-[624px] md:text-left"
                >
                  {t('hero.description')}
                </motion.p>
              </motion.div>
            </motion.div>
          </HeroButtons>

          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: 50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
            className="left-[745px] top-[136px] flex h-[538px] w-fit items-center overflow-hidden rounded-3xl bg-[#f6f8fd] md:absolute md:w-[871px]"
          >
            <div className="relative flex w-[242px] flex-col items-start gap-[23.92px] self-stretch bg-[#ffffff] p-6">
              <p className="relative mt-[-0.75px] self-stretch text-[23.9px] font-medium leading-[29.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                <span className="text-[#1c222f]">{t('app.title')}</span>

                <span className="text-[#00CB82]">
                  {t('app.titleHighlight')}
                </span>
              </p>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl p-2.5">
                  <div className="relative ml-[-18572.00px] mt-[-721.92px] size-5 bg-[100%_100%]">
                    <img
                      className="h-4w-full absolute left-[3px] top-0.5 md:w-[15px]"
                      alt="Vector"
                      src="/img/islamfinans/vector.svg"
                    />
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    {t('app.main')}
                  </div>
                </div>

                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl bg-gray-90 p-2.5">
                  <div className="relative size-5">
                    <div className="relative left-px top-1 h-[11px] w-full md:w-[19px]">
                      <img
                        className="absolute left-1.5 top-[3px] size-1.5"
                        alt="Vector"
                        src="/img/islamfinans/vector-1.svg"
                      />

                      <img
                        className="absolute left-0 top-0 h-[11px] w-full md:w-[19px]"
                        alt="Vector"
                        src="/img/islamfinans/vector-19.svg"
                      />

                      <img
                        className="absolute left-3.5 top-0 size-1"
                        alt="Vector"
                        src="/img/islamfinans/vector-17.svg"
                      />

                      <img
                        className="absolute left-3.5 top-[7px] size-1"
                        alt="Vector"
                        src="/img/islamfinans/vector-6.svg"
                      />

                      <img
                        className="absolute left-0 top-[7px] size-1"
                        alt="Vector"
                        src="/img/islamfinans/vector-20.svg"
                      />

                      <img
                        className="absolute left-0 top-0 size-1"
                        alt="Vector"
                        src="/img/islamfinans/vector-8.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                    {t('app.financing')}
                  </div>
                </div>

                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl p-2.5">
                  <div className="relative size-5">
                    <div className="relative left-0.5 top-0.5 size-4">
                      <img
                        className="absolute left-2 top-[11px] h-1.5 w-px"
                        alt="Vector"
                        src="/img/islamfinans/vector-18.svg"
                      />

                      <img
                        className="absolute left-0 top-0 size-4"
                        alt="Vector"
                        src="/img/islamfinans/vector-16.svg"
                      />

                      <img
                        className="h-0.5w-full absolute left-0 top-2 md:w-[5px]"
                        alt="Vector"
                        src="/img/islamfinans/vector-7.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    {t('app.reports')}
                  </div>
                </div>

                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl p-2.5">
                  <div className="relative size-5 bg-[100%_100%]">
                    <img
                      className="absolute left-[3px] top-[3px] size-1.5"
                      alt="Vector"
                      src="/img/islamfinans/vector-1.svg"
                    />

                    <img
                      className="absolute left-[11px] top-[3px] size-1.5"
                      alt="Vector"
                      src="/img/islamfinans/vector-1.svg"
                    />

                    <img
                      className="absolute left-[3px] top-[11px] size-1.5"
                      alt="Vector"
                      src="/img/islamfinans/vector-1.svg"
                    />

                    <img
                      className="absolute left-[11px] top-[11px] size-1.5"
                      alt="Vector"
                      src="/img/islamfinans/vector-1.svg"
                    />
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    {t('app.products')}
                  </div>
                </div>

                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl p-2.5">
                  <div className="relative size-5 bg-[100%_100%]">
                    <div className="h-4w-full relative left-[3px] top-0.5 md:w-[15px]">
                      <img
                        className="absolute left-1 top-3 h-1 w-1.5"
                        alt="Vector"
                        src="/img/islamfinans/vector-5.svg"
                      />

                      <img
                        className="h-3.5w-full absolute left-0 top-0 md:w-[15px]"
                        alt="Vector"
                        src="/img/islamfinans/vector-13.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    {t('app.notifications')}
                  </div>
                </div>

                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl p-2.5">
                  <div className="relative size-5">
                    <div className="relative left-0.5 top-px h-[17px] w-4">
                      <img
                        className="absolute left-1 top-[5px] size-[7px]"
                        alt="Vector"
                        src="/img/islamfinans/vector-1.svg"
                      />

                      <img
                        className="absolute left-0 top-0 h-[17px] w-4"
                        alt="Vector"
                        src="/img/islamfinans/vector-4.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    {t('app.settings')}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-1 grow flex-col items-start gap-5 self-stretch p-6">
              <div className="relative inline-flex flex-[0_0_auto] items-center gap-4">
                <div className="relative size-12 overflow-hidden rounded-3xl [background:url(/img/bnpl/frame-1948755022-1.png)_50%_50%_/_cover]">
                  <img
                    className="absolute left-0 top-0 size-12 object-cover"
                    alt="Side view business"
                    src="/img/islamfinans/business-man.png"
                  />
                </div>

                <p className="relative w-fit whitespace-nowrap text-xl font-semibold leading-5 tracking-normal text-gray-90 [font-family:'Inter',Helvetica]">
                  <span className="leading-6 text-[#9ea7bb]">
                    {t('app.greeting')}
                  </span>

                  <span className="leading-6 text-[#1c222f]">
                    {' '}
                    {t('app.userName')}
                  </span>
                </p>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[20.5px] self-stretch">
                <div className="relative flex w-full flex-[0_0_auto] items-start justify-end gap-[11.96px] self-stretch rounded-[11.96px] bg-[#ffffff] p-[17.94px]">
                  <div className="relative flex w-full flex-1 grow flex-col items-center justify-center gap-[11.96px] md:w-auto">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                      <div className="relative mt-[-0.75px] w-fit whitespace-nowrap text-[14.9px] font-medium leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('app.financingId')}
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-xl bg-green-60 px-1.5 py-[3px]">
                        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-[10px] font-semibold leading-[14px] tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                          {t('app.status')}
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-[17.94px] self-stretch">
                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          {t('app.cost')}
                        </div>

                        <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          187,000 ₽
                        </div>
                      </div>

                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          {t('app.advancePayment')}
                        </div>

                        <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          14 500 ₽
                        </div>
                      </div>

                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          {t('app.term')}
                        </div>

                        <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          {t('app.termValue')}
                        </div>
                      </div>

                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          {t('app.nextPayment')}
                        </div>

                        <div className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          2,500 ₽
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full flex-[0_0_auto] items-start justify-end gap-[11.96px] self-stretch rounded-[11.96px] bg-[#ffffff] p-[17.94px]">
                  <div className="relative flex flex-1 grow flex-col items-start gap-3">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-4 self-stretch">
                      <div className="relative mt-[-1.00px] flex-1 text-base font-medium leading-6 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                        {t('app.details')}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-7 self-stretch">
                      <div className="relative flex flex-1 grow flex-col items-start gap-1.5">
                        <div className="relative flex w-full flex-[0_0_auto] items-start justify-between self-stretch">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('app.cost')}
                          </div>

                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                            85 950₽
                          </div>
                        </div>

                        <img
                          className="relative h-px w-full self-stretch object-cover"
                          alt="Vector"
                          src="/img/islamfinans/vector-141.svg"
                        />

                        <div className="relative flex w-full flex-[0_0_auto] items-start justify-between self-stretch">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('app.interestRate')}
                          </div>

                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                            12%
                          </div>
                        </div>

                        <img
                          className="relative h-px w-full self-stretch object-cover"
                          alt="Vector"
                          src="/img/islamfinans/vector-141.svg"
                        />

                        <div className="relative flex w-full flex-[0_0_auto] items-start justify-between self-stretch">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-medium leading-5 tracking-normal text-[#7a86a2] [font-family:'Inter',Helvetica]">
                            {t('app.term')}
                          </div>

                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                            {t('app.termValue')}
                          </div>
                        </div>

                        <img
                          className="relative h-px w-full self-stretch object-cover"
                          alt="Vector"
                          src="/img/islamfinans/vector-141.svg"
                        />

                        <div className="relative flex w-full flex-[0_0_auto] items-start justify-between self-stretch">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('app.accountBalance')}
                          </div>

                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                            2 500 ₽
                          </div>
                        </div>

                        <img
                          className="relative h-px w-full self-stretch object-cover"
                          alt="Vector"
                          src="/img/islamfinans/vector-141.svg"
                        />

                        <div className="relative flex w-full flex-[0_0_auto] items-start justify-between self-stretch">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('app.overduePrincipal')}
                          </div>

                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-semibold leading-5 tracking-normal text-red-50 [font-family:'Roboto',Helvetica]">
                            12 ₽
                          </div>
                        </div>

                        <img
                          className="relative h-px w-full self-stretch object-cover"
                          alt="Vector"
                          src="/img/islamfinans/vector-141.svg"
                        />

                        <div className="relative flex w-full flex-[0_0_auto] items-start justify-between self-stretch">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('app.overduePayment')}
                          </div>

                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                            0 ₽
                          </div>
                        </div>
                      </div>

                      <div className="relative flex flex-1 grow flex-col items-start gap-1.5">
                        <div className="relative flex w-full flex-[0_0_auto] items-start justify-between self-stretch">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('app.installmentEndDate')}
                          </div>

                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                            20.09.2025
                          </div>
                        </div>

                        <img
                          className="relative h-px w-full self-stretch object-cover"
                          alt="Vector"
                          src="/img/islamfinans/vector-141.svg"
                        />

                        <div className="relative flex w-full flex-[0_0_auto] items-start justify-between self-stretch">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('app.nextPaymentDate')}
                          </div>

                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                            20.04.2025
                          </div>
                        </div>

                        <img
                          className="relative h-px w-full self-stretch object-cover"
                          alt="Vector"
                          src="/img/islamfinans/vector-141.svg"
                        />

                        <div className="relative flex w-full flex-[0_0_auto] items-start justify-between self-stretch">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('app.productName')}
                          </div>

                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                            {t('app.headphones')}
                          </div>
                        </div>

                        <img
                          className="relative h-px w-full self-stretch object-cover"
                          alt="Vector"
                          src="/img/islamfinans/vector-141.svg"
                        />

                        <div className="relative flex w-full flex-[0_0_auto] items-start justify-between self-stretch">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                            {t('app.financingType')}
                          </div>

                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                            {t('app.first')}
                          </div>
                        </div>

                        <img
                          className="relative mb-[-1.00px] h-px w-full self-stretch object-cover"
                          alt="Vector"
                          src="/img/islamfinans/vector-141.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <img
            className="absolute left-[1053px] top-44 h-[568px] w-full md:w-[619px]"
            alt=""
            aria-hidden="true"
            src="/img/islamfinans/vector-4-3.svg"
          />
        </div>
      </div>

      <Advantages />

      <motion.div
        ref={ref7}
        initial={{ opacity: 0, y: 50 }}
        animate={inView7 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-9 self-stretch"
      >
        <motion.div
          ref={ref8}
          initial={{ opacity: 0, y: 50 }}
          animate={inView8 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-[68px] self-stretch"
        >
          <motion.div
            ref={ref9}
            initial={{ opacity: 0, y: 50 }}
            animate={inView9 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
            className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch"
          >
            <motion.div
              ref={ref10}
              initial={{ opacity: 0, x: -50 }}
              animate={inView10 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.55 }}
              className="relative flex flex-1 grow flex-col items-center gap-7  overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 md:gap-12 md:p-12"
            >
              <motion.div
                ref={ref11}
                initial={{ opacity: 0, y: 50 }}
                animate={inView11 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch"
              >
                <motion.p
                  ref={ref12}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView12 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.65 }}
                  className="relative mt-[-1.00px] self-stretch text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.title')}
                </motion.p>

                <motion.div
                  ref={ref13}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView13 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
                  className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch"
                >
                  <motion.div
                    ref={ref14}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView14 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.75 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch md:h-7"
                  >
                    <motion.div
                      ref={ref15}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView15 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.8,
                      }}
                    >
                      <CheckIcon bgColor="#00CB8214" iconColor="#00CB82" />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('features.types.murabaha')}
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref16}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView16 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.85 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch md:h-7"
                  >
                    <motion.div
                      ref={ref17}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView17 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.9,
                      }}
                    >
                      <CheckIcon bgColor="#00CB8214" iconColor="#00CB82" />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('features.types.ijarah')}
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref18}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView18 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.95 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch md:h-7"
                  >
                    <motion.div
                      ref={ref19}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView19 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 1.0,
                      }}
                    >
                      <CheckIcon bgColor="#00CB8214" iconColor="#00CB82" />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('features.types.tawarruq')}
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref20}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView20 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 1.05 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch md:h-7"
                  >
                    <motion.div
                      ref={ref21}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView21 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 1.1,
                      }}
                    >
                      <CheckIcon bgColor="#00CB8214" iconColor="#00CB82" />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('features.types.wakala')}
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref22}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView22 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 1.15 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch md:h-7"
                  >
                    <motion.div
                      ref={ref23}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView23 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 1.2,
                      }}
                    >
                      <CheckIcon bgColor="#00CB8214" iconColor="#00CB82" />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('features.types.musharakah')}
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref24}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView24 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 1.25 }}
                    className="relative flex h-fit w-full items-center justify-center gap-6 self-stretch md:h-7"
                  >
                    <motion.div
                      ref={ref25}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView25 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 1.3,
                      }}
                    >
                      <CheckIcon bgColor="#00CB8214" iconColor="#00CB82" />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      {t('features.types.istisna')}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="relative flex-1 grow self-stretch rounded-[32px] [background:url(/img/frame-21.png)_50%_50%_/_cover]" />
          </motion.div>
        </motion.div>
      </motion.div>

      <EmployeeWork />
      <Zaim />
      <Feedback />
      <Analytics />

      <ZaimChecker />
      <Integrations />
      <RoleStructure />
      <Trust />
    </div>
  );
};
