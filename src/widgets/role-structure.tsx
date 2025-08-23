import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

import { useFeedbackForm } from './feedback-form';

export const RoleStructure = () => {
  const { setIsOpen } = useFeedbackForm();

  const ref14 = useRef<HTMLDivElement>(null);
  const ref15 = useRef<HTMLDivElement>(null);
  const ref16 = useRef<HTMLDivElement>(null);
  const ref17 = useRef<HTMLDivElement>(null);

  const inView14 = useInView(ref14, { once: true, margin: '-100px' });
  const inView15 = useInView(ref15, { once: true, margin: '-100px' });
  const inView16 = useInView(ref16, { once: true, margin: '-100px' });
  const inView17 = useInView(ref17, { once: true, margin: '-100px' });

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <motion.div
      ref={ref14}
      initial={{ opacity: 0, y: 50 }}
      animate={inView14 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative flex w-full flex-[0_0_auto] items-center gap-20 self-stretch px-0 py-20"
    >
      <div className="relative flex w-[432px] flex-col items-start gap-12">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
          <div className="relative mt-[-1.00px] self-stretch text-[36px] md:text-5xl font-medium leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            Ролевая структура программного обеспечения
          </div>
        </div>

        <button
          onClick={onClick}
          className="all-[unset]  w-full md:w-fit  relative box-border inline-flex flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 transition-opacity hover:opacity-90"
        >
          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
            Демо-версия
          </div>
        </button>
      </div>

      <div className="relative flex flex-1 grow items-start justify-center gap-6 self-stretch">
        <motion.div
          ref={ref15}
          initial={{ opacity: 0, x: -50 }}
          animate={inView15 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative flex flex-1 grow flex-col items-center justify-center gap-8 self-stretch overflow-hidden rounded-3xl bg-[#f9fafd] p-10"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-4">
            <img className="relative size-7" alt="User" src="/img/user-4.svg" />
          </div>

          <div className="relative self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            Личный кабинет клиента
          </div>
        </motion.div>

        <motion.div
          ref={ref16}
          initial={{ opacity: 0, y: 50 }}
          animate={inView16 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative flex flex-1 grow flex-col items-center justify-center gap-8 self-stretch overflow-hidden rounded-3xl bg-[#f9fafd] p-10"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-4">
            <img
              className="relative size-7"
              alt="Circles four"
              src="/img/circlesfour.svg"
            />
          </div>

          <div className="relative self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            Мульткабинет сотрудника
          </div>
        </motion.div>

        <motion.div
          ref={ref17}
          initial={{ opacity: 0, x: 50 }}
          animate={inView17 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="relative flex flex-1 grow flex-col items-center justify-center gap-8 self-stretch overflow-hidden rounded-3xl bg-[#f9fafd] p-10"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#e6485014] p-4">
            <img className="relative size-7" alt="Nut" src="/img/nut.svg" />
          </div>

          <div className="relative self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            Кабинет супер- администратора
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
