import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { isMobile } from '../../App.tsx';
import { HeroButtons } from '../../components/ui/hero-buttons.tsx';
import { useFeedbackForm } from '../../widgets/feedback-form';
import { Feedback } from '../../widgets/feedback.tsx';
import { Integrations } from '../../widgets/integrations.tsx';
import { Trust } from '../../widgets/trust.tsx';

export const Dataunload = () => {
  const { t } = useTranslation(['dataunload']);
  const ref3 = useRef(null);
  const refTop = useRef(null);
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
  const ref31 = useRef(null);
  const ref32 = useRef(null);
  const ref33 = useRef(null);
  const ref34 = useRef(null);
  const ref35 = useRef(null);
  const ref36 = useRef(null);
  const ref37 = useRef(null);
  const ref38 = useRef(null);
  const ref39 = useRef(null);
  const ref40 = useRef(null);
  const ref41 = useRef(null);
  const ref42 = useRef(null);
  const ref43 = useRef(null);
  const ref44 = useRef(null);
  const ref45 = useRef(null);
  const ref46 = useRef(null);
  const ref47 = useRef(null);
  const ref48 = useRef(null);
  const ref49 = useRef(null);
  const ref50 = useRef(null);

  const marginValue = isMobile ? '-10px' : '-100px';
  const inView3 = useInView(ref3, { once: true, margin: marginValue });
  const inViewTop = useInView(refTop, { once: true, margin: marginValue });
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
  const inView31 = useInView(ref31, { once: true, margin: '-100px' });
  const inView32 = useInView(ref32, { once: true, margin: '-100px' });
  const inView33 = useInView(ref33, { once: true, margin: '-100px' });
  const inView34 = useInView(ref34, { once: true, margin: '-100px' });
  const inView35 = useInView(ref35, { once: true, margin: '-100px' });
  const inView36 = useInView(ref36, { once: true, margin: '-100px' });
  const inView37 = useInView(ref37, { once: true, margin: '-100px' });
  const inView38 = useInView(ref38, { once: true, margin: '-100px' });
  const inView39 = useInView(ref39, { once: true, margin: '-100px' });
  const inView40 = useInView(ref40, { once: true, margin: '-100px' });
  const inView41 = useInView(ref41, { once: true, margin: '-100px' });
  const inView42 = useInView(ref42, { once: true, margin: '-100px' });
  const inView43 = useInView(ref43, { once: true, margin: '-100px' });
  const inView44 = useInView(ref44, { once: true, margin: '-100px' });
  const inView45 = useInView(ref45, { once: true, margin: '-100px' });
  const inView46 = useInView(ref46, { once: true, margin: '-100px' });
  const inView47 = useInView(ref47, { once: true, margin: '-100px' });
  const inView48 = useInView(ref48, { once: true, margin: '-100px' });
  const inView49 = useInView(ref49, { once: true, margin: '-100px' });
  const inView50 = useInView(ref50, { once: true, margin: '-100px' });

  const { setIsOpen } = useFeedbackForm();

  const handleContactClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[88px] p-0 md:w-[1440px] md:gap-[136px] md:px-8 md:pb-[136px] md:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
        <div
          ref={refTop}
          className="w/full relative flex flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-violet-50 px-4 py-10 md:p-12"
        >
          <img
            className="absolute left-[441px] top-[-140px] h-[1060px] w-full md:w-[1108px]"
            alt="Vector"
            src="/img/vector-1-5.svg"
          />

          <HeroButtons buttonText={t('hero.buttonText')}>
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, y: 50 }}
              animate={inViewTop ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 md:w-[624px]  md:gap-12"
            >
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-7 md:w-[624px]  md:gap-12">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 md:inline-flex">
                  <h1 className="relative mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[44px] tracking-normal text-white [font-family:'Roboto',Helvetica] md:w-[624px] md:text-left md:text-6xl md:leading-[68px]">
                    {t('hero.title')}
                  </h1>

                  <p className="relative w-full text-center text-xl font-normal leading-7 tracking-normal text-[#ffffff99] [font-family:'Roboto',Helvetica] md:w-[624px] md:text-left">
                    {t('static.heroDescription')}
                  </p>
                </div>
              </div>
            </motion.div>
          </HeroButtons>

          <div className="left-[768px] h-[292px] w-full md:absolute md:top-20 md:h-[462px] md:w-[540px]">
            <div className="relative left-[-33px] top-[-65px] h-[527px] w-full md:w-[606px]">
              <motion.div
                ref={ref3}
                initial={{ opacity: 0, x: -150 }}
                animate={inView3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute left-[31px] flex w-full items-center gap-4 rounded-[32px] bg-white py-4 pl-4 pr-6 md:top-[152px] md:w-[372px]"
              >
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/dataunload/frame-18-5.svg"
                />

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('static.fileName')}
                  </div>

                  <div className="relativew-full text-sm font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica] md:w-[129px]">
                    {t('static.fileSize')}
                  </div>
                </div>
              </motion.div>

              <img
                className="absolute left-0 top-0 h-[503px] w-full md:w-[606px]"
                alt=""
                aria-hidden="true"
                src="/img/dataunload/vector-5.svg"
              />

              <motion.div
                ref={ref3}
                initial={{ opacity: 0, y: -150 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute left-12 top-[80px] flex w-full items-start justify-end gap-[14.04px] rounded-[32px] bg-white p-7 md:left-[173px] md:top-[239px] md:w-[400px]"
              >
                <div className="relative flex flex-1 grow flex-col items-center justify-center gap-4">
                  <div className="relative mt-[-0.88px] self-stretch text-sm font-normal leading-5 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                    {t('static.bureausTitle')}
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2">
                    <motion.div
                      ref={ref11}
                      initial={{ opacity: 0, x: 150 }}
                      animate={inView11 ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 0.4,
                      }}
                      className="relative flex h-16 w-full items-center justify-center gap-5 rounded-2xl bg-[#f9fafd] p-4 md:w-[336px]"
                    >
                      <img
                        className="relative size-8"
                        alt="Clip path group"
                        src="/img/dataunload/clip-path-group.png"
                      />

                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('static.scoring')}
                      </div>

                      <img
                        className="relative flex-[0_0_auto]"
                        alt="Frame"
                        src="/img/dataunload/frame-18-1.svg"
                      />
                    </motion.div>

                    <motion.div
                      ref={ref12}
                      initial={{ opacity: 0, x: 150 }}
                      animate={inView12 ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 0.5,
                      }}
                      className="relative flex h-16 w-full items-center justify-center gap-5 rounded-2xl bg-[#f9fafd] p-4 md:w-[336px]"
                    >
                      <img
                        className="relative size-8"
                        alt="Okb logo"
                        src="/img/dataunload/okb-logo-1.png"
                      />

                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('static.okb')}
                      </div>

                      <img
                        className="relative flex-[0_0_auto]"
                        alt="Frame"
                        src="/img/dataunload/frame-18-1.svg"
                      />
                    </motion.div>

                    <motion.div
                      ref={ref13}
                      initial={{ opacity: 0, x: 150 }}
                      animate={inView13 ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 0.6,
                      }}
                      className="relative flex h-16 w-full items-center justify-center gap-5 rounded-2xl bg-[#f9fafd] p-4 md:w-[336px]"
                    >
                      <img
                        className="relative size-8"
                        alt="Frame"
                        src="/img/dataunload/frame-1948755067.svg"
                      />

                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('static.nbki')}
                      </div>

                      <img
                        className="relative size-8 animate-spin"
                        alt="Frame"
                        src="/img/dataunload/frame-1948755106.svg"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 self-stretch md:gap-12">
        <motion.div
          ref={ref11}
          initial={{ opacity: 0, y: 50 }}
          animate={inView11 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 md:w-[656px]"
        >
          <motion.div
            ref={ref12}
            initial={{ opacity: 0, y: 50 }}
            animate={inView12 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-5xl md:leading-[60px]"
          >
            {t('advantages.title')}
          </motion.div>

          <motion.p
            ref={ref13}
            initial={{ opacity: 0, y: 50 }}
            animate={inView13 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
          >
            {t('static.advantagesDescription')}
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref14}
          initial={{ opacity: 0, y: 50 }}
          animate={inView14 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch md:!flex-row items-stretch"
        >
          <motion.div
            ref={ref15}
            initial={{ opacity: 0, x: -50 }}
            animate={inView15 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl bg-[#f9fafd] p-8 md:p-10"
          >
            <motion.img
              ref={ref16}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView16 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/dataunload/frame-18-3.svg"
            />

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <motion.div
                ref={ref17}
                initial={{ opacity: 0, y: 30 }}
                animate={inView17 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('advantages.unifiedFormat.title')}
              </motion.div>

              <motion.p
                ref={ref18}
                initial={{ opacity: 0, y: 30 }}
                animate={inView18 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
              >
                {t('advantages.unifiedFormat.description')}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            ref={ref19}
            initial={{ opacity: 0, y: 50 }}
            animate={inView19 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
            className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl bg-[#f9fafd] p-8 md:p-10"
          >
            <motion.img
              ref={ref20}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView20 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/dataunload/frame-18.svg"
            />

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <motion.div
                ref={ref21}
                initial={{ opacity: 0, y: 30 }}
                animate={inView21 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('advantages.convenientSolution.title')}
              </motion.div>

              <motion.p
                ref={ref22}
                initial={{ opacity: 0, y: 30 }}
                animate={inView22 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
              >
                {t('advantages.convenientSolution.description')}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            ref={ref23}
            initial={{ opacity: 0, x: 50 }}
            animate={inView23 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
            className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl bg-[#f9fafd] p-8 md:p-10"
          >
            <motion.img
              ref={ref24}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView24 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/dataunload/frame-19.svg"
            />

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <motion.div
                ref={ref25}
                initial={{ opacity: 0, y: 30 }}
                animate={inView25 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.4 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                {t('advantages.regularUpdates.title')}
              </motion.div>

              <motion.p
                ref={ref26}
                initial={{ opacity: 0, y: 30 }}
                animate={inView26 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.5 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
              >
                {t('advantages.regularUpdates.description')}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 self-stretch md:gap-12">
        <motion.div
          ref={ref27}
          initial={{ opacity: 0, y: 50 }}
          animate={inView27 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 md:w-[656px]"
        >
          <motion.div
            ref={ref28}
            initial={{ opacity: 0, y: 50 }}
            animate={inView28 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-5xl md:leading-[60px]"
          >
            {t('features.title')}
          </motion.div>
        </motion.div>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-6 rounded-3xl md:w-[1376px] md:!flex-row">
          <div className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl py-12 pl-12 pr-[68px] md:gap-12">
            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-7">
              <motion.div
                ref={ref29}
                initial={{ opacity: 0, y: 50 }}
                animate={inView29 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 md:w-[560px]"
              >
                <motion.div
                  ref={ref30}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView30 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.control.title')}
                </motion.div>

                <motion.p
                  ref={ref31}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView31 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.control.description')}
                </motion.p>
              </motion.div>

              <motion.div
                ref={ref32}
                initial={{ opacity: 0, y: 50 }}
                animate={inView32 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 md:w-[560px]"
              >
                <motion.div
                  ref={ref33}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView33 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.actualData.title')}
                </motion.div>

                <motion.p
                  ref={ref34}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView34 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.actualData.description')}
                </motion.p>
              </motion.div>

              <motion.div
                ref={ref35}
                initial={{ opacity: 0, y: 50 }}
                animate={inView35 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 md:w-[560px]"
              >
                <motion.div
                  ref={ref36}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView36 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.timeSaving.title')}
                </motion.div>

                <motion.p
                  ref={ref37}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView37 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.timeSaving.description')}
                </motion.p>
              </motion.div>

              <motion.div
                ref={ref38}
                initial={{ opacity: 0, y: 50 }}
                animate={inView38 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
                className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 md:w-[560px]"
              >
                <motion.div
                  ref={ref39}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView39 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.processAutomation.title')}
                </motion.div>

                <motion.p
                  ref={ref40}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView40 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('features.processAutomation.description')}
                </motion.p>
              </motion.div>
            </div>
          </div>

          <motion.img
            ref={ref41}
            initial={{ opacity: 0, x: 100 }}
            animate={inView41 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 1.4 }}
            className="relative flex-1 grow self-stretch"
            alt="Frame"
            src="/img/dataunload/frame-21.svg"
          />
        </div>
      </div>
      <motion.div
        ref={ref42}
        initial={{ opacity: 0, y: 50 }}
        animate={inView42 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-9 overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 md:w-[1376px]"
      >
        <motion.img
          ref={ref43}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView43 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="absolute left-[339px] top-[-115px] h-[1060px] w-full md:w-[1204px]"
          alt="Vector"
          src="/img/dataunload/vector-1-1.svg"
        />

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[88px] self-stretch p-7 md:!flex-row md:p-12">
          <motion.div
            ref={ref44}
            initial={{ opacity: 0, x: -50 }}
            animate={inView44 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative flex w-full flex-col items-start gap-7 md:w-[520px]"
          >
            <motion.img
              ref={ref45}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView45 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/dataunload/frame-18-6.svg"
            />

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 md:inline-flex">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                <motion.div
                  ref={ref46}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView46 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                  className="relative mt-[-1.00px] w-full text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[520px]"
                >
                  {t('static.exportTitle')}
                </motion.div>

                <motion.p
                  ref={ref47}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView47 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('static.exportDescription')}
                </motion.p>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                <div className="h-7w-full relative flex items-center justify-center gap-6 md:w-[520px]">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5">
                    <img
                      className="relative size-4"
                      alt="Check"
                      src="/img/dataunload/check.svg"
                    />
                  </div>

                  <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('static.equifax')}
                  </div>
                </div>

                <div className="h-7w-full relative flex items-center justify-center gap-6 md:w-[520px]">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5">
                    <img
                      className="relative size-4"
                      alt="Check"
                      src="/img/dataunload/check.svg"
                    />
                  </div>

                  <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('static.okb')}
                  </div>
                </div>

                <div className="h-7w-full relative flex items-center justify-center gap-6 md:w-[520px]">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5">
                    <img
                      className="relative size-4"
                      alt="Check"
                      src="/img/dataunload/check.svg"
                    />
                  </div>

                  <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('static.nbki')}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <img
            className="relative hidden w-px self-stretch md:block"
            alt="Vector"
            src="/img/dataunload/vector-129.svg"
          />

          <motion.div
            ref={ref48}
            initial={{ opacity: 0, x: 50 }}
            animate={inView48 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
            className="relative flex w-full flex-col items-start justify-center gap-7 md:w-[520px]"
          >
            <motion.img
              ref={ref49}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView49 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/dataunload/frame-18-2.svg"
            />

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 md:w-[520px]">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <motion.div
                  ref={ref50}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView50 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="relative mt-[-1.00px] self-stretch text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  {t('pricing.title')}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView50 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  <span className="text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    {t('pricing.description')}
                  </span>

                  <a
                    href="https://sptnk.co/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="underline">SAAS</span>
                  </a>

                  <span className="text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"></span>
                </motion.p>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-6 md:w-[520px]">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-1.5">
                    <img
                      className="relative size-4"
                      alt="Check"
                      src="/img/dataunload/check.svg"
                    />
                  </div>

                  <p className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('pricing.payOnlyWhenUsing')}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-4">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                {t('pricing.price')}
              </div>

              <div className="relative w-fit whitespace-nowrap text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                {t('pricing.perMonth')}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView42 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-2.5 self-stretch overflow-hidden rounded-[32px] bg-violet-50 p-7 md:!flex-row md:p-12"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView42 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
            className="absolute left-[420px] top-[-385px] h-[1060px] w-full md:w-[1108px]"
            alt="Vector"
            src="/img/dataunload/vector-1-3.svg"
          />

          <div className="relative flex flex-1 grow flex-col items-start gap-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView42 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
              className="relative mt-[-1.00px] self-stretch text-[32px] font-medium leading-10 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]"
            >
              {t('cta.title')}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView42 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
              className="relative w-full text-xl font-normal leading-7 tracking-normal text-[#ffffff] opacity-60 [font-family:'Roboto',Helvetica] md:w-[752px]"
            >
              {t('cta.description')}
            </motion.p>
          </div>

          <button
            onClick={handleContactClick}
            className="all-[unset] relative mt-3 box-border inline-flex w-full flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-white px-8 py-4 md:mt-0 md:w-fit"
          >
            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {t('cta.buttonText')}
            </div>
          </button>
        </motion.div>
      </motion.div>
      <Integrations />
      <Feedback />
      <Trust />
    </div>
  );
};
