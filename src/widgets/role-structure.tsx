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
      className="flex items-center gap-20 px-0 py-20 relative self-stretch w-full flex-[0_0_auto]"
    >
      <div className="flex flex-col w-[432px] items-start gap-12 relative">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div
            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl tracking-[0] leading-[60px]">
            Ролевая структура программного обеспечения
          </div>
        </div>

        <button
          onClick={onClick}
          className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-blue-50 rounded-[100px] items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div
            className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-xl tracking-[0] leading-7 whitespace-nowrap">
            Демо-версия
          </div>
        </button>
      </div>

      <div className="flex items-start justify-center gap-6 relative flex-1 self-stretch grow">
        <motion.div
          ref={ref15}
          initial={{ opacity: 0, x: -50 }}
          animate={inView15 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="flex flex-col items-center justify-center gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-3xl overflow-hidden"
        >
          <div
            className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
            <img
              className="relative w-7 h-7"
              alt="User"
              src="/img/user-4.svg"
            />
          </div>

          <div
            className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
            Личный кабинет клиента
          </div>
        </motion.div>

        <motion.div
          ref={ref16}
          initial={{ opacity: 0, y: 50 }}
          animate={inView16 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-3xl overflow-hidden"
        >
          <div
            className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
            <img
              className="relative w-7 h-7"
              alt="Circles four"
              src="/img/circlesfour.svg"
            />
          </div>

          <div
            className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
            Мульткабинет сотрудника
          </div>
        </motion.div>

        <motion.div
          ref={ref17}
          initial={{ opacity: 0, x: 50 }}
          animate={inView17 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-3xl overflow-hidden"
        >
          <div
            className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#e6485014] rounded-[100px]">
            <img className="relative w-7 h-7" alt="Nut" src="/img/nut.svg" />
          </div>

          <div
            className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
            Кабинет супер- администратора
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}