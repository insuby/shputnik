import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check10 } from '../components/ui/check10.tsx';
import { useFeedbackForm } from './feedback-form/use-feedback-form.ts';

export const ZaimChecker = () => {
  const { setIsOpen } = useFeedbackForm();

  const handleDemoClick = () => {
    setIsOpen(true);
  };

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);
  const ref12 = useRef(null);
  const ref13 = useRef(null);
  const ref14 = useRef(null);
  const ref15 = useRef(null);
  const ref16 = useRef(null);
  const ref17 = useRef(null);
  const ref18 = useRef(null);
  const ref19 = useRef(null);
  const ref20 = useRef(null);
  const ref21 = useRef(null);
  const ref22 = useRef(null);
  const ref23 = useRef(null);
  const ref24 = useRef(null);
  const ref25 = useRef(null);
  const ref26 = useRef(null);
  const ref27 = useRef(null);
  const ref28 = useRef(null);


  const inView1 = useInView(ref1, { once: true, margin: '-100px' });
  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView4 = useInView(ref4, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref6, { once: true, margin: '-100px' });
  const inView7 = useInView(ref7, { once: true, margin: '-100px' });
  const inView8 = useInView(ref8, { once: true, margin: '-100px' });
  const inView9 = useInView(ref9, { once: true, margin: '-100px' });
  const inView10 = useInView(ref10, { once: true, margin: '-100px' });
  const inView11 = useInView(ref11, { once: true, margin: '-100px' });
  const inView12 = useInView(ref12, { once: true, margin: '-100px' });
  const inView13 = useInView(ref13, { once: true, margin: '-100px' });
  const inView14 = useInView(ref14, { once: true, margin: '-100px' });
  const inView15 = useInView(ref15, { once: true, margin: '-100px' });
  const inView16 = useInView(ref16, { once: true, margin: '-100px' });
  const inView17 = useInView(ref17, { once: true, margin: '-100px' });
  const inView18 = useInView(ref18, { once: true, margin: '-100px' });
  const inView19 = useInView(ref19, { once: true, margin: '-100px' });
  const inView20 = useInView(ref20, { once: true, margin: '-100px' });
  const inView21 = useInView(ref21, { once: true, margin: '-100px' });
  const inView22 = useInView(ref22, { once: true, margin: '-100px' });
  const inView23 = useInView(ref23, { once: true, margin: '-100px' });
  const inView24 = useInView(ref24, { once: true, margin: '-100px' });
  const inView25 = useInView(ref25, { once: true, margin: '-100px' });
  const inView26 = useInView(ref26, { once: true, margin: '-100px' });
  const inView27 = useInView(ref27, { once: true, margin: '-100px' });
  const inView28 = useInView(ref28, { once: true, margin: '-100px' });
  

  return (
    <div className="flex flex-col w-[1376px] items-center justify-center gap-9 p-8 relative flex-[0_0_auto] bg-[#f9fafd] rounded-[32px] overflow-hidden">
      <img
        className="absolute w-[1204px] h-[1060px] top-[-115px] left-[339px]"
        alt="Vector"
        src="/img/zain-checker/vector-1.svg"
      />

      <div className="flex items-center gap-[88px] p-12 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[520px] items-start gap-8 relative">
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/zain-checker/frame-18-2.svg"
          />

          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <motion.div 
                ref={ref1}
                initial={{ opacity: 0, x: 80 }}
                animate={inView1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative w-[520px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]"
              >
                Проверка заемщика
              </motion.div>

              <motion.p 
                ref={ref2}
                initial={{ opacity: 0, y: 80 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7"
              >
                В программу включены интеграции с большинством сторонних
                сервисов, а также наши собственные сервисы проверки
                потенциального заемщика (юридического лица):
              </motion.p>
            </div>

            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <motion.div 
                ref={ref3}
                initial={{ opacity: 0, y: 50 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="flex w-[520px] h-7 items-center justify-center gap-6 relative"
              >
                <motion.div 
                  ref={ref4}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView4 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                  className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]"
                >
                  <Check10 className="!relative !w-4 !h-4" />
                </motion.div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Антимошеннические сервисы
                </div>
              </motion.div>

              <motion.div 
                ref={ref5}
                initial={{ opacity: 0, y: 50 }}
                animate={inView5 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                className="flex w-[520px] h-7 items-center justify-center gap-6 relative"
              >
                <motion.div 
                  ref={ref6}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView6 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                  className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]"
                >
                  <Check10 className="!relative !w-4 !h-4" />
                </motion.div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Идентификация клиента
                </div>
              </motion.div>

              <motion.div 
                ref={ref7}
                initial={{ opacity: 0, y: 50 }}
                animate={inView7 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                className="flex w-[520px] h-7 items-center justify-center gap-6 relative"
              >
                <motion.div 
                  ref={ref8}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView8 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
                  className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]"
                >
                  <Check10 className="!relative !w-4 !h-4" />
                </motion.div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Бюро кредитных историй
                </div>
              </motion.div>

              <motion.div 
                ref={ref9}
                initial={{ opacity: 0, y: 50 }}
                animate={inView9 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                className="flex w-[520px] h-7 items-center justify-center gap-6 relative"
              >
                <motion.div 
                  ref={ref10}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView10 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
                  className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]"
                >
                  <Check10 className="!relative !w-4 !h-4" />
                </motion.div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Государственные сервисы
                </div>
              </motion.div>

              <motion.div 
                ref={ref11}
                initial={{ opacity: 0, y: 50 }}
                animate={inView11 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
                className="flex w-[520px] h-7 items-center justify-center gap-6 relative"
              >
                <motion.div 
                  ref={ref12}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView12 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 1.1 }}
                  className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]"
                >
                  <Check10 className="!relative !w-4 !h-4" />
                </motion.div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Социальные сети
                </div>
              </motion.div>

              <motion.div 
                ref={ref13}
                initial={{ opacity: 0, y: 50 }}
                animate={inView13 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
                className="flex w-[520px] h-7 items-center justify-center gap-6 relative"
              >
                <motion.div 
                  ref={ref14}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView14 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 1.3 }}
                  className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]"
                >
                  <Check10 className="!relative !w-4 !h-4" />
                </motion.div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Дополнительные источники информации
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <img
          className="relative w-px h-[528px]"
          alt="Vector"
          src="/img/zain-checker/vector-129.svg"
        />

        <div className="flex flex-col w-[520px] items-start justify-center gap-8 relative">
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/zain-checker/frame-18-4.svg"
          />

          <div className="flex flex-col w-[520px] items-start gap-6 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <motion.div 
                ref={ref15}
                initial={{ opacity: 0, x: 80 }}
                animate={inView15 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]"
              >
                Платежные системы
              </motion.div>

              <motion.p 
                ref={ref16}
                initial={{ opacity: 0, y: 80 }}
                animate={inView16 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7"
              >
                Интеграции с большинством платежных систем полностью
                автоматизировать процесс приема и выдачи займа, а интеграция с
                1С - учитывать даже те платежи, которые связаны только расчетным
                счетом:
              </motion.p>
            </div>

            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <motion.div 
                ref={ref17}
                initial={{ opacity: 0, y: 50 }}
                animate={inView17 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="flex w-[520px] h-7 items-center justify-center gap-6 relative"
              >
                <motion.div 
                  ref={ref18}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView18 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                  className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]"
                >
                  <Check10 className="!relative !w-4 !h-4" />
                </motion.div>

                <div className="text-gray-90 relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-xl tracking-[0] leading-7">
                  Выдача online
                </div>
              </motion.div>

              <motion.div 
                ref={ref19}
                initial={{ opacity: 0, y: 50 }}
                animate={inView19 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                className="flex w-[520px] h-7 items-center justify-center gap-6 relative"
              >
                <motion.div 
                  ref={ref20}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView20 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                  className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]"
                >
                  <Check10 className="!relative !w-4 !h-4" />
                </motion.div>

                <p className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Погашение займа через личный кабинет
                </p>
              </motion.div>

              <motion.div 
                ref={ref21}
                initial={{ opacity: 0, y: 50 }}
                animate={inView21 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                className="flex w-[520px] h-7 items-center justify-center gap-6 relative"
              >
                <motion.div 
                  ref={ref22}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView22 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
                  className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]"
                >
                  <Check10 className="!relative !w-4 !h-4" />
                </motion.div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Проверка статусов платежей
                </div>
              </motion.div>

              <motion.div 
                ref={ref23}
                initial={{ opacity: 0, y: 50 }}
                animate={inView23 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                className="flex w-[520px] h-7 items-center justify-center gap-6 relative"
              >
                <motion.div 
                  ref={ref24}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView24 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
                  className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]"
                >
                  <Check10 className="!relative !w-4 !h-4" />
                </motion.div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Отмена платежей
                </div>
              </motion.div>

              <motion.div 
                ref={ref25}
                initial={{ opacity: 0, y: 50 }}
                animate={inView25 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
                className="flex w-[520px] h-7 items-center justify-center gap-6 relative"
              >
                <motion.div 
                  ref={ref26}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView26 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 1.1 }}
                  className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]"
                >
                  <Check10 className="!relative !w-4 !h-4" />
                </motion.div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Работа с наличными
                </div>
              </motion.div>

              <motion.div 
                ref={ref27}
                initial={{ opacity: 0, y: 50 }}
                animate={inView27 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
                className="flex w-[520px] h-7 items-center justify-center gap-6 relative"
              >
                <motion.div 
                  ref={ref28}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView28 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 1.3 }}
                  className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]"
                >
                  <Check10 className="!relative !w-4 !h-4" />
                </motion.div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Интеграция с расчетным счетом
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 p-12 relative self-stretch w-full flex-[0_0_auto] bg-violet-50 rounded-[32px] overflow-hidden">
        <img
          className="absolute w-[1108px] h-[1060px] top-[-385px] left-[420px]"
          alt="Vector"
          src="/img/zain-checker/vector-1-1.svg"
        />

        <div className="flex flex-col items-start gap-3 relative flex-1 grow">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-[32px] tracking-[0] leading-10">
            Возможности CRM
          </div>

          <p className="relative w-[752px] opacity-60 [font-family:'Roboto',Helvetica] font-normal text-[#ffffff] text-xl tracking-[0] leading-7">
            Сохранение информации о коммуникациях и действиях в системе,
            автоматизация стратегии взаимодействия с клиентом, интеграция
            дополнительных сервисов для повышения продаж
          </p>
        </div>

        <button 
          onClick={handleDemoClick}
          className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-[#ffffff] rounded-[100px] items-center justify-center cursor-pointer"
        >
          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
            Демонстрация
          </div>
        </button>
      </div>
    </div>
  );
};
