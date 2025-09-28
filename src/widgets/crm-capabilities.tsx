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
      <svg width="1225" height="986" viewBox="0 0 1225 986" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[420px] top-[-385px] h-[1060px] w-full md:w-[1108px]" alt="Vector">

<g opacity="0.08" filter="url(#filter0_f_0_9)">
<path d="M585.778 320.414C622.466 208.96 772.426 194.708 842.821 201.513C1227.94 343.938 912.747 729.754 704.859 778.022C496.971 826.29 156.523 643.066 204.707 496.686C252.892 350.307 539.918 459.731 585.778 320.414Z" fill="#3573FC"/>
</g>
<defs>
<filter id="filter0_f_0_9" x="-0.000122128" y="0" width="1224.62" height="986" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_0_9"/>
</filter>
</defs>

</svg>

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
