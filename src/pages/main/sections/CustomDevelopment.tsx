import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const CustomDevelopment = () => {
  const { t } = useTranslation(['home']);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const inViewTitle = useInView(titleRef, { once: true, margin: '-100px' });
  const inViewDesc = useInView(descRef, { once: true, margin: '-100px' });

  return (
    <section className="relative w-full overflow-hidden rounded-[24px] bg-[#ffffff] md:rounded-[32px]">
      <div className="relative flex w-full items-center gap-4 rounded-[24px] bg-[#F9FAFD] p-6 md:gap-6 md:rounded-[32px] md:p-12">
        <div className="relative flex flex-1 grow flex-col items-start gap-4">
          <motion.h2
            ref={titleRef}
            initial={{ opacity: 0, y: 40 }}
            animate={inViewTitle ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-[40px] font-medium leading-[48px] text-gray-90 [font-family:'Roboto',Helvetica]"
          >
            <span className="text-[#1c222f]">{t('other.development.title')}</span>
          </motion.h2>

          <motion.p
            ref={descRef}
            initial={{ opacity: 0, y: 40 }}
            animate={inViewDesc ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full max-w-[590px] text-xl leading-7 text-gray-40 [font-family:'Roboto',Helvetica]"
          >
            {t('other.development.fintech')}
          </motion.p>

          <div className="relative inline-flex items-center gap-2.5 rounded-[100px] bg-white p-4">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#9FA7BC]"
              aria-hidden="true"
            >
              <path d="M12 6L22 16L12 26" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

          <div className=" w-[464px] rounded-[24px] bg-white p-6 bg-cover bg-center h-full" style={{
              backgroundImage: "url('/img/Frame 29.png')",
          }}>
          </div>
      </div>
    </section>
  );
};


