import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

export const Advantages = () => {
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
      className="relative mx-auto flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-12 self-stretch"
    >
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="relative flex w-[656px] flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
      >
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative mt-[-1.00px] self-stretch text-center text-5xl font-medium leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
        >
          Преимущества
        </motion.div>

        <motion.p
          ref={ref4}
          initial={{ opacity: 0, y: 50 }}
          animate={inView4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="relative self-stretch text-center text-xl  font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
        >
          Автоматизация процессов выдачи займов с учётом задач и масштаба вашего
          бизнеса
        </motion.p>
      </motion.div>

      <motion.div
        ref={ref5}
        initial={{ opacity: 0, y: 50 }}
        animate={inView5 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch"
      >
        <motion.div
          ref={ref6}
          initial={{ opacity: 0, x: -50 }}
          animate={inView6 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
          className="relative flex flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10"
        >
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/widgets/frame-18.svg"
          />

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              Гибкая настройка
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
              Используйте готовое решение или адаптируйте систему под ваши
              уникальные процессы и регламенты
            </p>
          </div>
        </motion.div>

        <div className="relative flex flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10">
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/widgets/frame-18-1.svg"
          />

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              Полная автоматизация
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
              Автоматизация всех этапов работы с возможностью подключения
              внешних сервисов и систем
            </p>
          </div>
        </div>

        <motion.div
          ref={ref7}
          initial={{ opacity: 0, x: 50 }}
          animate={inView7 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
          className="relative flex flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10"
        >
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/widgets/frame-19.svg"
          />

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              Оптимизация затрат
            </div>

            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
              Снижайте издержки за счёт автоматизации ключевых операций и
              повышения эффективности
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
