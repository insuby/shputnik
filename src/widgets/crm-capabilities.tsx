import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useFeedbackForm } from './feedback-form';

export const CrmCapabilities = () => {
  const { t } = useTranslation('widgets');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-7 self-stretch overflow-hidden rounded-[32px] bg-violet-50 p-7 pb-10 md:!flex-row md:gap-2.5 md:p-12"
    >
      <img
        className="absolute left-[420px] top-[-385px] h-[1060px] w-full md:w-[1108px]"
        alt="Vector"
        src="/img/vector-1-1.svg"
      />

      <div className="relative flex flex-1 grow flex-col items-start gap-3">
        <div className="relative mt-[-1.00px] self-stretch text-[32px] font-medium leading-10 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
          {t('crmCapabilities.title')}
        </div>

        <p className="relative w-full text-xl font-normal leading-7 tracking-normal text-[#ffffff] opacity-60 [font-family:'Roboto',Helvetica] md:w-[752px]">
          {t('crmCapabilities.subtitle')}
        </p>
      </div>

      <button
        onClick={onClick}
        className="all-[unset] relative box-border inline-flex w-full flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-[#ffffff] px-8 py-4 transition-opacity hover:opacity-90 md:w-fit"
      >
        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
          {t('crmCapabilities.demo')}
        </div>
      </button>
    </motion.div>
  );
};
