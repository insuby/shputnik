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
      className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]"
    >
      <div className="flex flex-col w-[656px] items-center justify-center gap-2.5 relative flex-[0_0_auto]">
        <div
          className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl tracking-[0] leading-[60px]">
          Управление займами
        </div>
      </div>

      <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <motion.div
          ref={ref11}
          initial={{ opacity: 0, x: -50 }}
          animate={inView11 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-3xl overflow-hidden"
        >
          <div
            className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#fbab0014] rounded-[100px]">
            <img
              className="relative w-8 h-8"
              alt="Pencil"
              src="/img/pencil.svg"
            />
          </div>

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div
              className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
              Редактирование условий
            </div>

            <p
              className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
              Расчёт условий выдачи займа и при необходимости предложение
              альтернативных.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref12}
          initial={{ opacity: 0, y: 50 }}
          animate={inView12 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-3xl overflow-hidden"
        >
          <div
            className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
            <img
              className="relative w-8 h-8"
              alt="Plus circle"
              src="/img/pluscircle.svg"
            />
          </div>

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div
              className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
              Создание и настройка
            </div>

            <p
              className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
              Создание и редактирование кредитных продуктов, настройка ручных
              и автоматических действий.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref13}
          initial={{ opacity: 0, x: 50 }}
          animate={inView13 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-3xl overflow-hidden"
        >
          <div
            className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#e6485014] rounded-[100px]">
            <img
              className="relative w-8 h-8"
              alt="Percent"
              src="/img/percent.svg"
            />
          </div>

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div
              className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
              Проценты и штрафы
            </div>

            <p
              className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
              Автоматическое начисление процентов по займу и штрафов за
              нарушение сроков возврата.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}