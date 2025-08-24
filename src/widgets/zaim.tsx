import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

export const Zaim = () => {
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
      className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-8 md:gap-12 self-stretch"
    >
      <div className="relative flex w-full md:w-[656px] flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
        <div className="relative mt-[-1.00px] self-stretch text-[36px] md:text-5xl font-medium leading-[44px] md:leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
          Управление займами
        </div>
      </div>

      <div className="relative flex flex-col md:!flex-row w-full flex-[0_0_auto] items-start gap-6 self-stretch">
        <motion.div
          ref={ref11}
          initial={{ opacity: 0, x: -50 }}
          animate={inView11 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative flex flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-3xl bg-[#f9fafd] p-10"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#fbab0014] p-4">
            <img
              className="relative size-8"
              alt="Pencil"
              src="/img/pencil.svg"
            />
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              Редактирование условий
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
              Расчёт условий выдачи кредита и при необходимости предложение
              альтернативных.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref12}
          initial={{ opacity: 0, y: 50 }}
          animate={inView12 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative flex flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-3xl bg-[#f9fafd] p-10"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-4">
            <img
              className="relative size-8"
              alt="Plus circle"
              src="/img/pluscircle.svg"
            />
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              Создание и настройка
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
              Создание и редактирование кредитных продуктов, настройка ручных и
              автоматических действий.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref13}
          initial={{ opacity: 0, x: 50 }}
          animate={inView13 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="relative flex flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-3xl bg-[#f9fafd] p-10"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#e6485014] p-4">
            <img
              className="relative size-8"
              alt="Percent"
              src="/img/percent.svg"
            />
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              Проценты и штрафы
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
              Автоматическое начисление процентов по займу и штрафов за
              нарушение сроков возврата.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
