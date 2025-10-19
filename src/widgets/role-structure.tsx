import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useFeedbackForm } from './feedback-form';

export const RoleStructure = () => {
  const { t } = useTranslation('widgets');
  const { setIsOpen } = useFeedbackForm();

  const ref14 = useRef<HTMLDivElement>(null);
  const ref15 = useRef<HTMLDivElement>(null);
  const ref16 = useRef<HTMLDivElement>(null);
  const ref17 = useRef<HTMLDivElement>(null);

  const inView14 = useInView(ref14, { once: true, margin: '-30px' });
  const inView15 = useInView(ref15, { once: true, margin: '-30px' });
  const inView16 = useInView(ref16, { once: true, margin: '-30px' });
  const inView17 = useInView(ref17, { once: true, margin: '-30px' });

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <motion.div
      ref={ref14}
      initial={{ opacity: 0, y: 50 }}
      animate={inView14 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-20 self-stretch px-0 lg:!flex-row xl:py-20"
    >
      <div className="relative flex w-full flex-col items-start gap-7 lg:w-[432px] xl:gap-12">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
          <div className="relative mt-[-1.00px] self-stretch text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:text-5xl xl:leading-[60px]">
            {t('roleStructure.title')}
          </div>
        </div>

        <button
          onClick={onClick}
          className="all-[unset]  relative box-border  inline-flex w-full flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 transition-opacity hover:opacity-90 xl:w-fit"
        >
          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
            {t('roleStructure.demo')}
          </div>
        </button>
      </div>
      <div className="relative flex flex-1 grow flex-col items-start justify-center gap-6 self-stretch xl:!flex-row">
        <motion.div
          ref={ref15}
          initial={{ opacity: 0, x: -50 }}
          animate={inView15 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative flex flex-1 grow flex-col items-center justify-center gap-7 self-stretch  overflow-hidden rounded-3xl bg-[#f9fafd] p-8 lg:!flex-row lg:justify-start xl:!flex-col xl:justify-center xl:p-10"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-4">
            <svg
              className="relative size-7"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="User"
            >
              <path
                d="M14 17.5C17.866 17.5 21 14.366 21 10.5C21 6.63401 17.866 3.5 14 3.5C10.134 3.5 7 6.63401 7 10.5C7 14.366 10.134 17.5 14 17.5Z"
                stroke="#00CB82"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 23.625C5.61859 19.9642 9.46641 17.5 14 17.5C18.5336 17.5 22.3814 19.9642 24.5 23.625"
                stroke="#00CB82"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative mx-auto flex items-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:m-0">
            {t('roleStructure.clientCabinet')}
          </div>
        </motion.div>

        <motion.div
          ref={ref16}
          initial={{ opacity: 0, y: 50 }}
          animate={inView16 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative flex flex-1 grow flex-col items-center justify-center gap-7 self-stretch overflow-hidden rounded-3xl bg-[#f9fafd] p-8 lg:!flex-row lg:justify-start xl:!flex-col xl:justify-center xl:p-10"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-4">
            <svg
              className="relative size-7"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Circles four"
            >
              <path
                d="M8.75 12.25C10.683 12.25 12.25 10.683 12.25 8.75C12.25 6.817 10.683 5.25 8.75 5.25C6.817 5.25 5.25 6.817 5.25 8.75C5.25 10.683 6.817 12.25 8.75 12.25Z"
                stroke="#3573FC"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.25 12.25C21.183 12.25 22.75 10.683 22.75 8.75C22.75 6.817 21.183 5.25 19.25 5.25C17.317 5.25 15.75 6.817 15.75 8.75C15.75 10.683 17.317 12.25 19.25 12.25Z"
                stroke="#3573FC"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.75 22.75C10.683 22.75 12.25 21.183 12.25 19.25C12.25 17.317 10.683 15.75 8.75 15.75C6.817 15.75 5.25 17.317 5.25 19.25C5.25 21.183 6.817 22.75 8.75 22.75Z"
                stroke="#3573FC"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.25 22.75C21.183 22.75 22.75 21.183 22.75 19.25C22.75 17.317 21.183 15.75 19.25 15.75C17.317 15.75 15.75 17.317 15.75 19.25C15.75 21.183 17.317 22.75 19.25 22.75Z"
                stroke="#3573FC"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative mx-auto flex items-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:m-0">
            {t('roleStructure.employeeCabinet')}
          </div>
        </motion.div>

        <motion.div
          ref={ref17}
          initial={{ opacity: 0, x: 50 }}
          animate={inView17 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="relative flex flex-1 grow flex-col items-center justify-center gap-7 self-stretch  overflow-hidden rounded-3xl bg-[#f9fafd] p-8 lg:!flex-row lg:justify-start xl:!flex-col xl:justify-center xl:p-10"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#e6485014] p-4">
            <svg
              className="relative size-7"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Nut"
            >
              <path
                d="M14 18.375C16.4162 18.375 18.375 16.4162 18.375 14C18.375 11.5838 16.4162 9.625 14 9.625C11.5838 9.625 9.625 11.5838 9.625 14C9.625 16.4162 11.5838 18.375 14 18.375Z"
                stroke="#E74951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.045 19.9981L14.42 25.2678C14.2912 25.3382 14.1468 25.3752 14 25.3752C13.8532 25.3752 13.7088 25.3382 13.58 25.2678L3.955 19.9981C3.81756 19.9229 3.70284 19.8122 3.6228 19.6775C3.54277 19.5428 3.50036 19.3891 3.5 19.2325V8.76966C3.50036 8.61299 3.54277 8.4593 3.6228 8.32462C3.70284 8.18995 3.81756 8.07923 3.955 8.00403L13.58 2.73434C13.7088 2.66388 13.8532 2.62695 14 2.62695C14.1468 2.62695 14.2912 2.66388 14.42 2.73434L24.045 8.00403C24.1824 8.07923 24.2972 8.18995 24.3772 8.32462C24.4572 8.4593 24.4996 8.61299 24.5 8.76966V19.2303C24.5 19.3873 24.4578 19.5415 24.3778 19.6766C24.2977 19.8117 24.1828 19.9227 24.045 19.9981Z"
                stroke="#E74951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative mx-auto flex items-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:m-0">
            {t('roleStructure.adminCabinet')}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
