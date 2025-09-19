import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const Zaim = () => {
  const { t } = useTranslation('widgets');
  const ref10 = useRef<HTMLDivElement>(null);
  const ref11 = useRef<HTMLDivElement>(null);
  const ref12 = useRef<HTMLDivElement>(null);
  const ref13 = useRef<HTMLDivElement>(null);

  const inView10 = useInView(ref10, { once: true, margin: '-100px' });
  const inView11 = useInView(ref11, { once: true, margin: '-100px' });
  const inView12 = useInView(ref12, { once: true, margin: '-100px' });
  const inView13 = useInView(ref13, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref10}
      initial={{ opacity: 0, y: 50 }}
      animate={inView10 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch md:gap-12"
    >
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 md:w-[656px]">
        <div className="relative mt-[-1.00px] self-stretch text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-5xl md:leading-[60px]">
          {t('zaim.title')}
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start  gap-6 self-stretch md:!flex-row">
        <motion.div
          ref={ref11}
          initial={{ opacity: 0, x: -50 }}
          animate={inView11 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl bg-[#f9fafd] p-8 md:p-10"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#fbab0014] p-4">
            <svg
              className="relative size-8"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Pencil"
            >
              <path d="M11.5863 26.9999H6C5.73478 26.9999 5.48043 26.8946 5.29289 26.707C5.10536 26.5195 5 26.2651 5 25.9999V20.4137C5.00012 20.1488 5.10532 19.8948 5.2925 19.7074L20.7075 4.29242C20.895 4.10502 21.1493 3.99976 21.4144 3.99976C21.6795 3.99976 21.9337 4.10502 22.1213 4.29242L27.7075 9.87492C27.8949 10.0624 28.0002 10.3167 28.0002 10.5818C28.0002 10.8469 27.8949 11.1011 27.7075 11.2887L12.2925 26.7074C12.1051 26.8946 11.8511 26.9998 11.5863 26.9999Z" stroke="#FBAB00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 8L24 15" stroke="#FBAB00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.5 11.5L8.5 23.5" stroke="#FBAB00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.9362 26.9362L5.06372 20.0637" stroke="#FBAB00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {t('zaim.editConditions.title')}
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
              {t('zaim.editConditions.description')}
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref12}
          initial={{ opacity: 0, y: 50 }}
          animate={inView12 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl bg-[#f9fafd] p-8 md:p-10"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-4">
            <svg
              className="relative size-8"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Plus circle"
            >
              <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#3573FC" strokeWidth="1.6" strokeMiterlimit="10"/>
              <path d="M11 16H21" stroke="#3573FC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 11V21" stroke="#3573FC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {t('zaim.createAndSetup.title')}
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
              {t('zaim.createAndSetup.description')}
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref13}
          initial={{ opacity: 0, x: 50 }}
          animate={inView13 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-3xl bg-[#f9fafd] p-8 md:p-10"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#e6485014] p-4">
            <svg
              className="relative size-8"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Percent"
            >
              <path d="M25 7L7 25" stroke="#E74951" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.5 13C11.433 13 13 11.433 13 9.5C13 7.567 11.433 6 9.5 6C7.567 6 6 7.567 6 9.5C6 11.433 7.567 13 9.5 13Z" stroke="#E74951" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22.5 26C24.433 26 26 24.433 26 22.5C26 20.567 24.433 19 22.5 19C20.567 19 19 20.567 19 22.5C19 24.433 20.567 26 22.5 26Z" stroke="#E74951" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {t('zaim.interestAndPenalties.title')}
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
              {t('zaim.interestAndPenalties.description')}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
