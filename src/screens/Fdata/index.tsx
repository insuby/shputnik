import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { isMobile } from '../../App.tsx';
import { HeroButtons } from '../../components/ui/hero-buttons.tsx';
import { useFeedbackForm } from '../../widgets/feedback-form';
import { Cta } from './Cta.tsx';

export const Fdata = () => {
  const { t } = useTranslation(['fdata']);
  const { setIsOpen } = useFeedbackForm();
  const sliderRef = useRef<Slider>(null);

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
  const ref26 = useRef(null);
  const ref27 = useRef(null);
  const ref28 = useRef(null);
  const ref29 = useRef(null);
  const ref30 = useRef(null);
  const ref51 = useRef(null);
  const ref52 = useRef(null);
  const ref53 = useRef(null);
  const ref54 = useRef(null);

  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView4 = useInView(ref4, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref6, { once: true, margin: '-100px' });
  const inView7 = useInView(ref7, { once: true, margin: '-100px' });
  const inView8 = useInView(ref8, { once: true, margin: '-100px' });
  const inView9 = useInView(ref9, { once: true, margin: '-100px' });
  const inView10 = useInView(ref10, { once: true, margin: '-100px' });
  const inView11 = useInView(ref11, { once: true, margin: '-100px' });
  const inView12 = useInView(ref12, { once: true, margin: '-100px' });
  const inView13 = useInView(ref13, { once: true, margin: '-100px' });
  const inView14 = useInView(ref14, { once: true, margin: '-100px' });
  const inView15 = useInView(ref15, { once: true, margin: '-100px' });
  const inView16 = useInView(ref16, { once: true, margin: '-100px' });
  const inView17 = useInView(ref17, { once: true, margin: '-100px' });
  const inView18 = useInView(ref18, { once: true, margin: '-100px' });
  const inView19 = useInView(ref19, { once: true, margin: '-100px' });
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
  const inView51 = useInView(ref51, { once: true, margin: '-100px' });
  const inView52 = useInView(ref52, { once: true, margin: '-100px' });
  const inView53 = useInView(ref53, { once: true, margin: '-100px' });
  const inView54 = useInView(ref54, { once: true, margin: '-100px' });

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[88px] p-0 md:w-[1440px] md:gap-[136px] md:px-8 md:pb-[136px] md:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
        <div className="relative flex w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-7 md:p-12">
          <img
            className="absolute -top-16 left-[430px] h-[842px] w-full md:w-[954px]"
            alt="Vector"
            src="/img/fdata/vector-1-5.svg"
          />

          <HeroButtons buttonText={t('hero.buttonText')}>
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, y: 50 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 md:w-[624px]  md:gap-12"
            >
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 md:w-[624px]  md:gap-12">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 md:inline-flex">
                  <h1 className="mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[44px] tracking-normal text-white [font-family:'Roboto',Helvetica] md:w-[624px] md:text-left md:text-6xl md:leading-[68px]">
                    {t('hero.title')}
                  </h1>

                  <p className="relative w-full text-center text-xl font-normal leading-7 tracking-normal text-[#ffffffcc] [font-family:'Roboto',Helvetica] md:w-[624px] md:text-left">
                    {t('hero.description')}
                  </p>
                </div>
              </div>
            </motion.div>
          </HeroButtons>

          <img
            className="absolute left-[1053px] top-44 h-[568px] w-full md:w-[619px]"
            alt=""
            aria-hidden="true"
            src="/img/fdata/vector-4-2.svg"
          />

          <motion.div
            ref={ref51}
            initial={{ opacity: 0, x: -50 }}
            animate={inView51 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
            className="left-[704px] top-[208px] flex w-fit items-start justify-end gap-[11.96px] rounded-[32px] bg-white p-6 md:absolute md:w-[576px]"
          >
            <div className="relative flex w-full flex-1 grow flex-col items-start gap-6 md:w-auto">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                <div className="relative flex h-8 w-full items-center justify-center gap-3 self-stretch">
                  <div className="relative flex-1 text-base font-medium leading-6 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                    {t('dashboard.title')}
                  </div>

                  <img
                    className="relative flex-[0_0_auto]"
                    alt="Frame"
                    src="/img/fdata/frame-84.svg"
                  />

                  <img
                    className="relative flex-[0_0_auto]"
                    alt="Frame"
                    src="/img/fdata/frame-85.svg"
                  />
                </div>

                <div className="relative flex h-9 w-full items-center gap-4 self-stretch rounded-[100px] border border-solid border-[#e3e4e7] py-2 pl-4 pr-3">
                  <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('dashboard.search')}
                  </div>

                  <img
                    className="relative size-4"
                    alt="Magnifying glass"
                    src="/img/fdata/magnifyingglass.svg"
                  />
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                <div className="relative flex w-full flex-[0_0_auto] items-start gap-4 self-stretch px-3 py-1">
                  <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('dashboard.status')}
                  </div>

                  <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('dashboard.reconciliation')}
                  </div>

                  <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('dashboard.operator')}
                  </div>

                  <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('dashboard.lastRunTime')}
                  </div>

                  <div className="relative mt-[-1.00px] w-20 text-center text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('dashboard.mismatches')}
                  </div>
                </div>

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                  <div className="relative flex h-11 w-full items-start gap-4 self-stretch rounded-xl bg-[#f9fafd] p-3">
                    <div className="relative flex flex-1 grow items-center justify-center gap-2">
                      <div className="relative size-2 rounded bg-red-50" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        Unreconciled
                      </div>
                    </div>

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      DP1 vs DP2
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      John Smith
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      25 may 07:16
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-center text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      54
                    </div>
                  </div>

                  <div className="relative flex h-11 w-full items-start gap-4 self-stretch rounded-xl bg-[#f9fafd] p-3">
                    <div className="relative flex flex-1 grow items-center justify-center gap-2">
                      <div className="relative size-2 rounded bg-green-60" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        Reconciled
                      </div>
                    </div>

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      DP1 vs DP2
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      John Smith
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      24 may 12:44
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-center text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      0
                    </div>
                  </div>

                  <div className="relative flex h-11 w-full items-start gap-4 self-stretch rounded-xl bg-[#f9fafd] p-3">
                    <div className="relative flex flex-1 grow items-center justify-center gap-2">
                      <div className="relative size-2 rounded bg-green-60" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        Reconciled
                      </div>
                    </div>

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      DP1 vs DP2
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      John Smith
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      23 may 05:38
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-center text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      2
                    </div>
                  </div>

                  <div className="relative flex h-11 w-full items-start gap-4 self-stretch rounded-xl bg-[#f9fafd] p-3">
                    <div className="relative flex flex-1 grow items-center justify-center gap-2">
                      <div className="relative size-2 rounded bg-red-50" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        Unreconciled
                      </div>
                    </div>

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      DP1 vs DP2
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      John Smith
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      22 may 07:16
                    </div>

                    <div className="relative mt-[-1.00px] w-20 text-center text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      12
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <img
            className="absolute left-[775px] top-[172px] h-[464px] w-full md:w-[601px]"
            alt="Vector"
            src="/img/fdata/vector-5.svg"
          />

          <motion.div
            ref={ref52}
            initial={{ opacity: 0, y: 50 }}
            animate={inView52 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="absolute left-[960px] top-[404px] flex w-full items-start justify-end gap-[11.96px] rounded-[32px_32px_0px_0px] bg-white p-6 md:w-[368px]"
          >
            <div className="relative flex flex-1 grow flex-col items-start gap-3 self-stretch">
              <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-4 self-stretch">
                <div className="relative mt-[-1.00px] flex-1 text-base font-medium leading-6 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                  Filter
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch">
                <div className="relative flex flex-1 grow flex-col items-start gap-2">
                  <div className="relative mt-[-1.00px] self-stretch text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    Status
                  </div>

                  <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                    <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      Waiting
                    </div>
                  </div>

                  <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                    <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      In progress
                    </div>
                  </div>

                  <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                    <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      Reconciled
                    </div>
                  </div>

                  <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                    <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      Unreconciled
                    </div>
                  </div>

                  <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                    <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      Created
                    </div>
                  </div>

                  <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                    <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                    <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                      Failed
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-1 grow flex-col items-start justify-center gap-3">
                  <div className="relative mr-[-28.00px] flex h-[76px] w-44 flex-col items-start gap-2">
                    <div className="relative mt-[-1.00px] self-stretch text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      Users
                    </div>

                    <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                      <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        By me
                      </div>
                    </div>

                    <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                      <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        By others
                      </div>
                    </div>
                  </div>

                  <div className="relative mr-[-28.00px] flex w-44 flex-[0_0_auto] flex-col items-start gap-2">
                    <div className="relative mt-[-1.00px] self-stretch text-xs font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      Projects
                    </div>

                    <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                      <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        Payments
                      </div>
                    </div>

                    <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                      <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        Finance
                      </div>
                    </div>

                    <div className="relative flex h-5 w-full items-center justify-center gap-2 self-stretch">
                      <div className="relative size-4 rounded border border-solid border-[#bdc7e0] bg-[#ffffff]" />

                      <div className="relative mt-[-1.00px] flex-1 whitespace-nowrap text-xs font-normal leading-5 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
                        Trading
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <img
            className="absolute left-[980px] top-[454px] h-[401px] w-full md:w-[410px]"
            alt="Vector"
            src="/img/fdata/vector-6.svg"
          />
        </div>
      </div>
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 self-stretch md:gap-12">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-6 rounded-3xl md:w-[1376px] md:!flex-row">
          <div className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl p-7 py-12 md:gap-12 md:pl-12 md:pr-[68px]">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-6 md:w-[560px]">
              <div className="relative mt-[-1.00px] self-stretch text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-5xl md:leading-[60px]">
                {t('details.title')}
              </div>

              <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica] md:text-left">
                {t('details.description')}
              </p>
            </div>
          </div>

          <img
            className="relative h-[404px] flex-1 grow self-stretch"
            alt="Frame"
            src="/img/fdata/frame-21.svg"
          />
        </div>
      </div>
      <motion.div
        ref={ref4}
        initial={{ opacity: 0, y: 50 }}
        animate={inView4 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 self-stretch md:gap-12"
      >
        <motion.div
          ref={ref5}
          initial={{ opacity: 0, y: 50 }}
          animate={inView5 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 md:w-[656px]"
        >
          <motion.div
            ref={ref6}
            initial={{ opacity: 0, y: 30 }}
            animate={inView6 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-5xl md:leading-[60px]"
          >
            {t('details.helpTitle')}
          </motion.div>
          <motion.p
            ref={ref7}
            initial={{ opacity: 0, y: 30 }}
            animate={inView7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
          >
            {t('details.philosophy')}
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref8}
          initial={{ opacity: 0, y: 50 }}
          animate={inView8 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 md:inline-flex"
        >
          <motion.div
            ref={ref9}
            initial={{ opacity: 0, y: 50 }}
            animate={inView9 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
            className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 md:w-[1376px] md:!flex-row"
          >
            <motion.div
              ref={ref10}
              initial={{ opacity: 0, x: -50 }}
              animate={inView10 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-10"
            >
              <motion.img
                ref={ref11}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView11 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/fdata/frame-18-4.svg"
              />
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <motion.div
                  ref={ref12}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView12 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('details.lossReduction')}
                </motion.div>
                <motion.p
                  ref={ref13}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView13 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('details.confidence')}
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              ref={ref14}
              initial={{ opacity: 0, x: 50 }}
              animate={inView14 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-10"
            >
              <motion.img
                ref={ref15}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView15 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/fdata/frame-20.svg"
              />
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <motion.div
                  ref={ref16}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView16 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('details.resourceOptimization')}
                </motion.div>
                <motion.p
                  ref={ref17}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView17 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('details.automation')}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            ref={ref18}
            initial={{ opacity: 0, y: 50 }}
            animate={inView18 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
            className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 md:w-[1376px] md:!flex-row"
          >
            <motion.div
              ref={ref19}
              initial={{ opacity: 0, x: -50 }}
              animate={inView19 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-10"
            >
              <motion.img
                ref={ref20}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView20 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/fdata/frame-19.svg"
              />
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <motion.div
                  ref={ref21}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView21 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('details.transparentAnalytics')}
                </motion.div>
                <motion.p
                  ref={ref22}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView22 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('details.accuratePicture')}
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              ref={ref23}
              initial={{ opacity: 0, x: 0 }}
              animate={inView23 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-10"
            >
              <motion.img
                ref={ref24}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView24 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/fdata/frame-19-2.svg"
              />
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <motion.div
                  ref={ref25}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView25 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('details.adaptability')}
                </motion.div>
                <motion.p
                  ref={ref26}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView26 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('details.easyCreation')}
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              ref={ref27}
              initial={{ opacity: 0, x: 50 }}
              animate={inView27 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-10"
            >
              <motion.img
                ref={ref28}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView28 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/fdata/frame-18-5.svg"
              />
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <motion.div
                  ref={ref29}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView29 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('details.errorReduction')}
                </motion.div>
                <motion.p
                  ref={ref30}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView30 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('details.errorReduction')}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <Cta
        className="!flex-[0_0_auto]"
        hasDiv={false}
        text={t('details.cta.title')}
        text1={t('details.cta.button')}
      />
      <div className="relative flex w-full flex-col md:h-[568px] md:w-[1376px] md:!flex-row">
        <div className="flex w-full flex-col items-center gap-[68px] md:w-[1472px] md:!flex-row">
          <div className="relative flex  w-full flex-col items-start justify-center gap-7 md:w-[496px]">
            <div className="relative mt-[-1.00px] self-stretch text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-5xl md:leading-[60px]">
              {t('details.features.title')}
            </div>

            <button
              onClick={onClick}
              className="all-[unset] relative box-border inline-flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 md:w-fit"
            >
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                {t('details.features.try')}
              </div>
            </button>
          </div>

          <div className="w-full md:w-[915px]" id="fdata-slider">
            <Slider
              ref={sliderRef}
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={isMobile ? 1 : 2}
              slidesToScroll={1}
              centerMode={true}
              centerPadding="0px"
              arrows={false}
            >
              <div className="px-3">
                <div className="relative flex h-[480px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 md:w-[443px] md:gap-12 md:p-12">
                  <img
                    className="absolute left-0 top-0 h-[406px] w-full md:w-[443px]"
                    alt="Vector"
                    src="/img/fdata/vector-1-1.svg"
                  />

                  <div className="relative w-full flex-1 grow self-stretch">
                    <div className="relative left-0 top-1 flex w-full flex-col items-center justify-center gap-2.5 rounded-[32px] bg-white p-6 md:left-6 md:w-[299px]">
                      <div className="relative self-stretch text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                        {t('details.features.rules')}
                      </div>

                      <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch">
                        <div className="relative mt-[-1.00px] flex-1 text-base font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          {t('details.features.autoUpload')}
                        </div>

                        <div className="relative h-4 w-7 overflow-hidden rounded-[100px] bg-[#e8ebf4]">
                          <div className="relative left-0.5 top-0.5 size-3 rounded-md bg-[#ffffff]" />
                        </div>
                      </div>

                      <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch">
                        <div className="relative mt-[-1.00px] flex-1 text-base font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          {t('details.features.fileStorage')}
                        </div>

                        <div className="relative h-4 w-7 overflow-hidden rounded-[100px] bg-green-60">
                          <div className="relative left-3.5 top-0.5 size-3 rounded-md bg-[#ffffff]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('details.dataProcessing.title')}
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      {t('details.dataProcessing.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3">
                <div className="relative flex h-[480px] w-full flex-col items-center gap-7 overflow-hidden  rounded-[32px] bg-[#f9fafd] p-7 md:w-[442px] md:gap-12 md:p-12">
                  <img
                    className="absolute left-0 top-0 h-[406px] w-full md:w-[377px]"
                    alt="Vector"
                    src="/img/fdata/vector-1-4.svg"
                  />

                  <div className="relative w-full flex-1 grow self-stretch">
                    <div className="absolute left-[23px] top-1 inline-flex items-center gap-2.5 rounded-[32px] bg-[#ffffff] p-3">
                      <div className="relative size-[120px]">
                        <div className="relative size-[120px]">
                          <div className="absolute left-0 top-0 size-[120px]">
                            <img
                              className="absolute left-0 top-0 h-[120px] w-[57px]"
                              alt="Subtract"
                              src="/img/fdata/subtract-2.svg"
                            />

                            <img
                              className="absolute left-[63px] top-[49px] h-[71px] w-[57px]"
                              alt="Subtract"
                              src="/img/fdata/subtract.svg"
                            />

                            <div className="absolute left-[29px] top-[37px] inline-flex flex-col items-center">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                                Total
                              </div>

                              <div className="relative -mt-0.5 w-fit whitespace-nowrap text-center text-xl font-medium leading-8 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                                88,000
                              </div>
                            </div>
                          </div>

                          <img
                            className="absolute left-[103px] top-[22px] h-[22px] w-3.5"
                            alt="Subtract"
                            src="/img/fdata/subtract-1.svg"
                          />

                          <img
                            className="absolute left-[63px] top-0 h-5 w-[39px]"
                            alt="Subtract"
                            src="/img/fdata/subtract-3.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <img
                      className="absolute left-[179px] top-1 size-36"
                      alt="Frame"
                      src="/img/fdata/frame-31.svg"
                    />
                  </div>

                  <div className="relative flex h-[188px] w-full flex-col items-start gap-3 self-stretch">
                    <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('details.reporting.title')}
                    </div>

                    <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      {t('details.reporting.description')}
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="absolute left-[725px] top-[542px] hidden h-14 w-full items-center justify-between rounded-full bg-[#f9fafd] p-1 md:flex md:w-[120px]">
          <button
            aria-controls="fdata-slider"
            aria-label={t('details.navigation.previousSlide')}
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
            aria-controls="fdata-slider"
            aria-label={t('details.navigation.nextSlide')}
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
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 self-stretch md:gap-12">
        <div
          ref={ref53}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 md:w-[656px]"
        >
          <motion.div
            ref={ref54}
            initial={{ opacity: 0, y: 30 }}
            animate={inView54 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-5xl md:leading-[60px]"
          >
            {t('details.testimonials.title')}
          </motion.div>
        </div>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch">
          <motion.div
            ref={ref53}
            initial={{ opacity: 0, y: -100 }}
            animate={inView53 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="relative flex w-full flex-[0_0_auto] items-center gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-[60px]"
          >
            <div className="relative hidden size-[140px] rounded-[100px] [background:url(/img/fdata/frame-18.png)_50%_50%_/_cover] md:block" />

            <motion.div className="relative flex flex-1 grow flex-col items-center gap-7 md:!flex-row  md:gap-12">
              <div className="relative flex w-full flex-col items-start gap-4 md:w-[421px]">
                <div className="relative m-auto size-[140px] rounded-[100px] [background:url(/img/fdata/frame-18.png)_50%_50%_/_cover] md:hidden" />

                <div className="relative mt-[-1.00px] self-stretch text-center text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-left">
                  {t('details.testimonials.author')}
                </div>

                <div className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica] md:text-left">
                  {t('details.testimonials.position')}
                  <br />
                  PLUS Consulting
                </div>
              </div>

              <img
                className="relative hidden w-px self-stretch md:block"
                alt="Vector"
                src="/img/fdata/vector-166.svg"
              />

              <p className="relative mt-[-1.00px] flex-1 text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica] md:text-left">
                {t('details.testimonials.quote')}

                <br />
              </p>
            </motion.div>

            <img
              className="absolute left-[178px] top-[-105px] h-[348px] w-full md:w-[323px]"
              alt="Vector"
              src="/img/fdata/vector-1-2.svg"
            />

            <img
              className="absolute left-[1005px] top-[11px] h-[348px] w-full md:w-[323px]"
              alt="Vector"
              src="/img/fdata/vector-2-1.svg"
            />
          </motion.div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch md:!flex-row">
              <motion.div
                ref={ref54}
                initial={{ opacity: 0, y: 30 }}
                animate={inView54 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-10"
              >
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/fdata/frame-19.svg"
                />

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                  <p className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('details.final.title')}
                  </p>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('details.final.description')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={ref54}
                initial={{ opacity: 0, y: 30 }}
                animate={inView54 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                className="relative flex flex-1 grow flex-col items-start gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-10"
              >
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/fdata/frame-18-2.svg"
                />

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('details.risks.title')}
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('details.risks.description')}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch md:!flex-row">
              <motion.div
                ref={ref54}
                initial={{ opacity: 0, x: 50 }}
                animate={inView54 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                className="relative flex flex-1 grow flex-col items-start gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-10"
              >
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/fdata/frame-18-3.svg"
                />

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('details.speed.title')}
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('details.speed.description')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={ref54}
                initial={{ opacity: 0, x: -50 }}
                animate={inView54 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                className="relative flex flex-1 grow flex-col items-start gap-7 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-10"
              >
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/fdata/frame-18-1.svg"
                />

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('details.errorReduction')}
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    {t('details.errorReduction')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
