import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { isMobile } from '../App.tsx';

import { Check10 } from '../components/ui/check10.tsx';
import {CrmCapabilities} from "./crm-capabilities.tsx";

export const ZaimChecker = () => {
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

  const marginValue = isMobile ? '-10px' : '-100px';
  const inView1 = useInView(ref1, { once: true, margin: marginValue });
  const inView2 = useInView(ref2, { once: true, margin: marginValue });
  const inView3 = useInView(ref3, { once: true, margin: marginValue });
  const inView4 = useInView(ref4, { once: true, margin: marginValue });
  const inView5 = useInView(ref5, { once: true, margin: marginValue });
  const inView6 = useInView(ref6, { once: true, margin: marginValue });
  const inView7 = useInView(ref7, { once: true, margin: marginValue });
  const inView8 = useInView(ref8, { once: true, margin: marginValue });
  const inView9 = useInView(ref9, { once: true, margin: marginValue });
  const inView10 = useInView(ref10, { once: true, margin: marginValue });
  const inView11 = useInView(ref11, { once: true, margin: marginValue });
  const inView12 = useInView(ref12, { once: true, margin: marginValue });
  const inView13 = useInView(ref13, { once: true, margin: marginValue });
  const inView14 = useInView(ref14, { once: true, margin: marginValue });
  const inView15 = useInView(ref15, { once: true, margin: marginValue });
  const inView16 = useInView(ref16, { once: true, margin: marginValue });
  const inView17 = useInView(ref17, { once: true, margin: marginValue });
  const inView18 = useInView(ref18, { once: true, margin: marginValue });
  const inView19 = useInView(ref19, { once: true, margin: marginValue });
  const inView20 = useInView(ref20, { once: true, margin: marginValue });
  const inView21 = useInView(ref21, { once: true, margin: marginValue });
  const inView22 = useInView(ref22, { once: true, margin: marginValue });
  const inView23 = useInView(ref23, { once: true, margin: marginValue });
  const inView24 = useInView(ref24, { once: true, margin: marginValue });
  const inView25 = useInView(ref25, { once: true, margin: marginValue });
  const inView26 = useInView(ref26, { once: true, margin: marginValue });
  const inView27 = useInView(ref27, { once: true, margin: marginValue });
  const inView28 = useInView(ref28, { once: true, margin: marginValue });

  return (
    <div className="relative flex w-full md:w-[1376px] flex-[0_0_auto] flex-col items-center justify-center gap-9 overflow-hidden rounded-[32px] bg-[#f9fafd] p-7">
      <img
        className="absolute left-[339px] top-[-115px] h-[1060px] w-full md:w-[1204px]"
        alt="Vector"
        src="/img/zain-checker/vector-1.svg"
      />

      <div className="relative flex-col md:!flex-row flex w-full flex-[0_0_auto] items-center gap-[88px] self-stretch p-0 md:p-12">
        <div className="relative flex w-full md:w-[520px] flex-col items-start gap-7">
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/zain-checker/frame-18-2.svg"
          />

          <div className="relative w-full flex md:inline-flex flex-[0_0_auto] flex-col items-start gap-6">
            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, x: 80 }}
                animate={inView1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative mt-[-1.00px] w-full md:w-[520px] text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                Проверка заемщика
              </motion.div>

              <motion.p
                ref={ref2}
                initial={{ opacity: 0, y: 80 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
              >
                В программу включены интеграции с большинством сторонних
                сервисов, а также наши собственные сервисы проверки
                потенциального заемщика (юридического лица):
              </motion.p>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
              <motion.div
                ref={ref3}
                initial={{ opacity: 0, y: 50 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="relative flex h-fit md:h-7 w-full md:w-[520px] items-center justify-center gap-6"
              >
                <motion.div
                  ref={ref4}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView4 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Антимошеннические сервисы
                </div>
              </motion.div>

              <motion.div
                ref={ref5}
                initial={{ opacity: 0, y: 50 }}
                animate={inView5 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                className="relative flex h-fit md:h-7 w-full md:w-[520px] items-center justify-center gap-6"
              >
                <motion.div
                  ref={ref6}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView6 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Идентификация клиента
                </div>
              </motion.div>

              <motion.div
                ref={ref7}
                initial={{ opacity: 0, y: 50 }}
                animate={inView7 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                className="relative flex h-fit md:h-7 w-full md:w-[520px] items-center justify-center gap-6"
              >
                <motion.div
                  ref={ref8}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView8 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Бюро кредитных историй
                </div>
              </motion.div>

              <motion.div
                ref={ref9}
                initial={{ opacity: 0, y: 50 }}
                animate={inView9 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                className="relative flex h-fit md:h-7 w-full md:w-[520px] items-center justify-center gap-6"
              >
                <motion.div
                  ref={ref10}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView10 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Государственные сервисы
                </div>
              </motion.div>

              <motion.div
                ref={ref11}
                initial={{ opacity: 0, y: 50 }}
                animate={inView11 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
                className="relative flex h-fit md:h-7 w-full md:w-[520px] items-center justify-center gap-6"
              >
                <motion.div
                  ref={ref12}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView12 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 1.1 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Социальные сети
                </div>
              </motion.div>

              <motion.div
                ref={ref13}
                initial={{ opacity: 0, y: 50 }}
                animate={inView13 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
                className="relative flex h-fit md:h-7 w-full md:w-[520px] items-center justify-center gap-6"
              >
                <motion.div
                  ref={ref14}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView14 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 1.3 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Дополнительные источники информации
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <img
          className="relative hidden md:block md:h-[528px] w-px"
          alt="Vector"
          src="/img/zain-checker/vector-129.svg"
        />

        <div className="relative flex w-full md:w-[520px] flex-col items-start justify-center gap-7">
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/zain-checker/frame-18-4.svg"
          />

          <div className="relative flex w-full md:w-[520px] flex-[0_0_auto] flex-col items-start gap-6">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
              <motion.div
                ref={ref15}
                initial={{ opacity: 0, x: 80 }}
                animate={inView15 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative mt-[-1.00px] self-stretch text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                Платежные системы
              </motion.div>

              <motion.p
                ref={ref16}
                initial={{ opacity: 0, y: 80 }}
                animate={inView16 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
              >
                Интеграции с большинством платежных систем полностью
                автоматизировать процесс приема и выдачи займа, а интеграция с
                1С - учитывать даже те платежи, которые связаны только расчетным
                счетом:
              </motion.p>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
              <motion.div
                ref={ref17}
                initial={{ opacity: 0, y: 50 }}
                animate={inView17 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="relative flex h-fit md:h-7 w-full md:w-[520px] items-center justify-center gap-6"
              >
                <motion.div
                  ref={ref18}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView18 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Выдача online
                </div>
              </motion.div>

              <motion.div
                ref={ref19}
                initial={{ opacity: 0, y: 50 }}
                animate={inView19 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                className="relative flex h-fit md:h-7 w-full md:w-[520px] items-center justify-center gap-6"
              >
                <motion.div
                  ref={ref20}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView20 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <p className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Погашение займа через личный кабинет
                </p>
              </motion.div>

              <motion.div
                ref={ref21}
                initial={{ opacity: 0, y: 50 }}
                animate={inView21 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                className="relative flex h-fit md:h-7 w-full md:w-[520px] items-center justify-center gap-6"
              >
                <motion.div
                  ref={ref22}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView22 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Проверка статусов платежей
                </div>
              </motion.div>

              <motion.div
                ref={ref23}
                initial={{ opacity: 0, y: 50 }}
                animate={inView23 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                className="relative flex h-fit md:h-7 w-full md:w-[520px] items-center justify-center gap-6"
              >
                <motion.div
                  ref={ref24}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView24 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Отмена платежей
                </div>
              </motion.div>

              <motion.div
                ref={ref25}
                initial={{ opacity: 0, y: 50 }}
                animate={inView25 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
                className="relative flex h-fit md:h-7 w-full md:w-[520px] items-center justify-center gap-6"
              >
                <motion.div
                  ref={ref26}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView26 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 1.1 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Работа с наличными
                </div>
              </motion.div>

              <motion.div
                ref={ref27}
                initial={{ opacity: 0, y: 50 }}
                animate={inView27 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
                className="relative flex h-fit md:h-7 w-full md:w-[520px] items-center justify-center gap-6"
              >
                <motion.div
                  ref={ref28}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView28 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 1.3 }}
                  className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-1.5"
                >
                  <Check10 className="!relative !h-4 !w-4" />
                </motion.div>

                <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Интеграция с расчетным счетом
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    <CrmCapabilities />
    </div>
  );
};
