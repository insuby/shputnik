import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const Advantages = () => {
  const { t } = useTranslation('widgets');
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  const inView1 = useInView(ref1, { once: true, margin: '-100px' });
  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView4 = useInView(ref4, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref6, { once: true, margin: '-100px' });
  const inView7 = useInView(ref7, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref1}
      initial={{ opacity: 0, y: 50 }}
      animate={inView1 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative mx-auto flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7  self-stretch md:gap-12"
    >
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 md:w-[656px]"
      >
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-5xl md:leading-[60px]"
        >
          {t('advantages.title')}
        </motion.div>

        <motion.p
          ref={ref4}
          initial={{ opacity: 0, y: 50 }}
          animate={inView4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="relative self-stretch text-center text-xl  font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
        >
          {t('advantages.subtitle')}
        </motion.p>
      </motion.div>

      <motion.div
        ref={ref5}
        initial={{ opacity: 0, y: 50 }}
        animate={inView5 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch md:!flex-row items-stretch"
      >
        <motion.div
          ref={ref6}
          initial={{ opacity: 0, x: -50 }}
          animate={inView6 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
          className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-10"
        >
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/widgets/frame-18.svg"
          />

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {t('advantages.flexibleSetup.title')}
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
              {t('advantages.flexibleSetup.description')}
            </p>
          </div>
        </motion.div>

        <div className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-10">
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/widgets/frame-18-1.svg"
          />

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {t('advantages.fullAutomation.title')}
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
              {t('advantages.fullAutomation.description')}
            </p>
          </div>
        </div>

        <motion.div
          ref={ref7}
          initial={{ opacity: 0, x: 50 }}
          animate={inView7 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
          className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-10"
        >
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/widgets/frame-19.svg"
          />

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {t('advantages.costOptimization.title')}
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
              {t('advantages.costOptimization.description')}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
