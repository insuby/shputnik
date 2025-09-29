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
      className="relative mx-auto flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7  self-stretch xl:gap-12"
    >
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 xl:w-[656px]"
      >
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:text-5xl xl:leading-[60px]"
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
        className="relative flex w-full flex-[0_0_auto] flex-col items-start  gap-6 self-stretch xl:!flex-row"
      >
        <motion.div
          ref={ref6}
          initial={{ opacity: 0, x: -50 }}
          animate={inView6 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
          className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 xl:p-10"
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative flex-[0_0_auto]"
            alt="Frame"
          >
            <rect
              width="64"
              height="64"
              rx="32"
              fill="#E74951"
              fillOpacity="0.08"
            />
            <path
              d="M29 29C30.6569 29 32 27.6569 32 26C32 24.3431 30.6569 23 29 23C27.3431 23 26 24.3431 26 26C26 27.6569 27.3431 29 29 29Z"
              stroke="#FF8068"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M37 41C38.6569 41 40 39.6569 40 38C40 36.3431 38.6569 35 37 35C35.3431 35 34 36.3431 34 38C34 39.6569 35.3431 41 37 41Z"
              stroke="#FF8068"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32 26H43"
              stroke="#FF8068"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 26H26"
              stroke="#FF8068"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M40 38H43"
              stroke="#FF8068"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 38H34"
              stroke="#FF8068"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {t('advantages.flexibleSetup.title')}
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
              {t('advantages.flexibleSetup.description')}
            </p>
          </div>
        </motion.div>

        <div className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 xl:p-10">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative flex-[0_0_auto]"
            alt="Frame"
          >
            <rect
              width="64"
              height="64"
              rx="32"
              fill="#00CB82"
              fillOpacity="0.08"
            />
            <path
              d="M35 29H29V35H35V29Z"
              stroke="#00CB82"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M41 22H23C22.4477 22 22 22.4477 22 23V41C22 41.5523 22.4477 42 23 42H41C41.5523 42 42 41.5523 42 41V23C42 22.4477 41.5523 22 41 22Z"
              stroke="#00CB82"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M42 29H45"
              stroke="#00CB82"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M42 35H45"
              stroke="#00CB82"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 29H22"
              stroke="#00CB82"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 35H22"
              stroke="#00CB82"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M35 42V45"
              stroke="#00CB82"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29 42V45"
              stroke="#00CB82"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M35 19V22"
              stroke="#00CB82"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29 19V22"
              stroke="#00CB82"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

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
          className="relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 xl:p-10"
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative flex-[0_0_auto]"
            alt="Frame"
          >
            <rect
              width="64"
              height="64"
              rx="32"
              fill="#725DD6"
              fillOpacity="0.08"
            />
            <path
              d="M32 37V44"
              stroke="#725DD6"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.6067 26C20.286 28.2876 19.7569 30.9472 20.1017 33.5661C20.4464 36.1851 21.6457 38.6171 23.5135 40.485C25.3813 42.3529 27.8133 43.5524 30.4322 43.8973C33.0511 44.2422 35.7107 43.7133 37.9984 42.3927C40.2861 41.072 42.0742 39.0334 43.0853 36.593C44.0963 34.1526 44.2739 31.4468 43.5904 28.8952C42.907 26.3436 41.4007 24.0888 39.3052 22.4805C37.2097 20.8722 34.642 20.0003 32.0005 20V27C33.1011 27.0002 34.1709 27.3636 35.0439 28.0338C35.917 28.704 36.5445 29.6436 36.8292 30.7067C37.1139 31.7699 37.0398 32.8973 36.6185 33.9141C36.1972 34.9309 35.4521 35.7802 34.4989 36.3304C33.5456 36.8806 32.4375 37.1009 31.3463 36.9572C30.2551 36.8134 29.2418 36.3136 28.4636 35.5353C27.6854 34.757 27.1857 33.7437 27.0421 32.6525C26.8985 31.5613 27.1189 30.4532 27.6692 29.5L21.6067 26Z"
              stroke="#725DD6"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.1687 33.2949L20.4062 35.1062"
              stroke="#725DD6"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

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
