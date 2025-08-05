import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
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
      className="flex flex-col items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto] mx-auto"
    >
      <motion.div 
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="flex flex-col w-[656px] items-center justify-center gap-2.5 relative flex-[0_0_auto]"
      >
        <motion.div 
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-center text-gray-90 text-5xl leading-[60px] relative tracking-[0]"
        >
          Преимущества
        </motion.div>

        <motion.p 
          ref={ref4}
          initial={{ opacity: 0, y: 50 }}
          animate={inView4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="self-stretch text-[#9ea7bb] text-xl leading-7  text-center relative [font-family:'Roboto',Helvetica] font-normal tracking-[0]"
        >
          Упрощение процессов выдачи займов online и в точках продаж благодаря
          полнофункциональной автоматизации
        </motion.p>
      </motion.div>

      <motion.div 
        ref={ref5}
        initial={{ opacity: 0, y: 50 }}
        animate={inView5 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
      >
        <motion.div 
          ref={ref6}
          initial={{ opacity: 0, x: -50 }}
          animate={inView6 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
          className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
        >
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/widgets/frame-18.svg"
          />

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div
              className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
              Гибкая настройка
            </div>

            <p
              className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
              Вы можете использовать типовое решение или настроить систему под
              ваши бизнес-процессы
            </p>
          </div>
        </motion.div>

        <div
          className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/widgets/frame-18-1.svg"
          />

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div
              className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
              Полная автоматизация
            </div>

            <p
              className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
              Автоматизация бизнес-процессов, наличие большого количества
              интеграций и сервисов
            </p>
          </div>
        </div>

        <motion.div 
          ref={ref7}
          initial={{ opacity: 0, x: 50 }}
          animate={inView7 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
          className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
        >
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/widgets/frame-19.svg"
          />

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div
              className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
              Оптимизация затрат
            </div>

            <p
              className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
              Сокращение ключевых расходов организации за счет оптимизации
              бизнес-процессов
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}