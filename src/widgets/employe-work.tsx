import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

import { useRef } from 'react';

import { Check10 } from '../components/ui/check10.tsx';

export const EmployeeWork = ({ color }: { color?: string }) => {
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
  const ref29 = useRef(null);
  const ref30 = useRef(null);
  const ref40 = useRef(null);
  const ref41 = useRef(null);
  const ref42 = useRef(null);
  const ref43 = useRef(null);
  const ref44 = useRef(null);
  const ref45 = useRef(null);
  const ref46 = useRef(null);

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
  const inView29 = useInView(ref29, { once: true, margin: '-100px' });
  const inView30 = useInView(ref30, { once: true, margin: '-100px' });
  const inView40 = useInView(ref40, { once: true, margin: '-100px' });
  const inView41 = useInView(ref41, { once: true, margin: '-100px' });
  const inView42 = useInView(ref42, { once: true, margin: '-100px' });
  const inView43 = useInView(ref43, { once: true, margin: '-100px' });
  const inView44 = useInView(ref44, { once: true, margin: '-100px' });
  const inView45 = useInView(ref45, { once: true, margin: '-100px' });
  const inView46 = useInView(ref46, { once: true, margin: '-100px' });

  return (
    <div className="flex flex-col items-center justify-center gap-9 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex-col items-center justify-center gap-[68px] flex-[0_0_auto] flex relative self-stretch w-full">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]"
        >
          <motion.div
            ref={ref6}
            initial={{ opacity: 0, y: 50 }}
            animate={inView6 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center leading-[60px] relative tracking-[0]"
          >
            Работа сотрудников
          </motion.div>

          <motion.p
            ref={ref7}
            initial={{ opacity: 0, y: 50 }}
            animate={inView7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="w-[704px] text-[#9ea7bb] text-xl text-center leading-7 relative [font-family:'Roboto',Helvetica] font-normal tracking-[0]"
          >
            Гибкая настройка прав для всех категорий сотрудников, возможность
            совершать любые действия через кабинет сотрудника, контактировать{' '}
            <br />с клиентом через СМС, email или по телефону
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
        >
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, x: -50 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            className="flex flex-col items-center gap-12 p-12 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
          >
            <img
              className="absolute w-[623px] h-[448px] top-0 left-[53px]"
              alt="Vector"
              src="/img/widgets/vector-1-3.svg"
            />

            <img
              className="h-[222px] mt-[-11.00px] relative self-stretch w-full"
              alt="Frame"
              src="/img/widgets/frame-1948755086.svg"
            />

            <motion.div
              ref={ref8}
              initial={{ opacity: 0, y: 50 }}
              animate={inView8 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
              className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]"
            >
              <motion.p
                ref={ref9}
                initial={{ opacity: 0, y: 50 }}
                animate={inView9 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]"
              >
                Индивидуальная политика доступа для всех категорий сотрудников,
                возможность настройки ролей
              </motion.p>

              <motion.div
                ref={ref10}
                initial={{ opacity: 0, y: 50 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
              >
                <motion.div
                  ref={ref11}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView11 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="flex flex-col items-start gap-4 relative flex-1 grow"
                >
                  <motion.div
                    ref={ref12}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView12 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                    className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full"
                  >
                    <motion.div
                      ref={ref13}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView13 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 1.0,
                      }}
                      className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]"
                    >
                      <Check10 className="!relative !w-4 !h-4" color={color} />
                    </motion.div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Кредитный менеджер
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref14}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView14 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
                    className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full"
                  >
                    <motion.div
                      ref={ref15}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView15 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 1.2,
                      }}
                      className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]"
                    >
                      <Check10 className="!relative !w-4 !h-4" color={color} />
                    </motion.div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Аналитик
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref16}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView16 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
                    className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full"
                  >
                    <motion.div
                      ref={ref17}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView17 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 1.4,
                      }}
                      className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]"
                    >
                      <Check10 className="!relative !w-4 !h-4" color={color} />
                    </motion.div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Риск-менджер
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref18}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView18 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1.5 }}
                    className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full"
                  >
                    <motion.div
                      ref={ref19}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView19 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 1.6,
                      }}
                      className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]"
                    >
                      <Check10 className="!relative !w-4 !h-4" color={color} />
                    </motion.div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Верификатор
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  ref={ref20}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView20 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="flex flex-col items-start gap-4 relative flex-1 grow"
                >
                  <motion.div
                    ref={ref21}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView21 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                    className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full"
                  >
                    <motion.div
                      ref={ref22}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView22 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 1.0,
                      }}
                      className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]"
                    >
                      <Check10 className="!relative !w-4 !h-4" color={color} />
                    </motion.div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Коллектор
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref23}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView23 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
                    className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full"
                  >
                    <motion.div
                      ref={ref24}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView24 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 1.2,
                      }}
                      className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]"
                    >
                      <Check10 className="!relative !w-4 !h-4" color={color} />
                    </motion.div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Оператор
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref25}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView25 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
                    className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full"
                  >
                    <motion.div
                      ref={ref26}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView26 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 1.4,
                      }}
                      className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]"
                    >
                      <Check10 className="!relative !w-4 !h-4" color={color} />
                    </motion.div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Супервайзер
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref27}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView27 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1.5 }}
                    className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full"
                  >
                    <motion.div
                      ref={ref28}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView28 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 1.6,
                      }}
                      className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]"
                    >
                      <Check10 className="!relative !w-4 !h-4" color={color} />
                    </motion.div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Руководитель
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            ref={ref4}
            initial={{ opacity: 0, x: 50 }}
            animate={inView4 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-col items-center gap-12 p-12 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
          >
            <img
              className="absolute w-[608px] h-[488px] top-0 left-0"
              alt="Vector"
              src="/img/widgets/vector-1-4.svg"
            />

            <div className="h-[210px] relative self-stretch w-full">
              <div className="flex flex-col w-[434px] items-start relative top-1 left-[73px]">
                <div className="flex items-end justify-end pl-16 pr-2 py-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col w-[296px] items-start gap-1 relative">
                    <div className="self-stretch font-normal text-[#9ea7bb] text-xs leading-4 relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking-[0]">
                      Вы
                    </div>

                    <div className="flex flex-col items-start gap-2.5 px-3 py-2 relative self-stretch w-full flex-[0_0_auto] bg-violet-50 rounded-[16px_16px_0px_16px]">
                      <p className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffff] text-base leading-6 whitespace-nowrap relative tracking-[0]">
                        Могу ли я досрочно показить заем?
                      </p>
                    </div>
                  </div>

                  <img
                    className="relative w-3 h-3"
                    alt="Subtract"
                    src="/img/widgets/subtract-5.svg"
                  />
                </div>

                <div className="flex items-end pl-2 pr-20 py-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-2 p-5 relative flex-[0_0_auto] rounded-[100px] [background:url(/img/widgets/frame-3.png)_50%_50%_/_cover]" />

                  <img
                    className="relative w-3 h-3"
                    alt="Subtract"
                    src="/img/widgets/subtract-6.svg"
                  />

                  <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                    <div className="self-stretch font-normal text-[#9ea7bb] text-xs leading-4 relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking-[0]">
                      Менеджер Руслана
                    </div>

                    <div className="flex items-start px-3 py-2 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] rounded-[16px_16px_16px_0px]">
                      <p className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-base leading-6 relative tracking-[0]">
                        Да, конечно, итоговая сумма для погашения задолженности
                        на сегодняшний день 14 456 ₽
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              ref={ref5}
              initial={{ opacity: 0, y: 20 }}
              animate={inView5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]"
            >
              <motion.p
                ref={ref29}
                initial={{ opacity: 0, y: 50 }}
                animate={inView29 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]"
              >
                Сохранение действий сотрудников, <br />
                контактов с клиентами и других операций
              </motion.p>

              <motion.div
                ref={ref30}
                initial={{ opacity: 0, y: 50 }}
                animate={inView30 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
              >
                <motion.div
                  ref={ref40}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView40 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                  className="flex flex-col items-start gap-4 relative flex-1 grow"
                >
                  <motion.div
                    ref={ref41}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView41 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                    className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full"
                  >
                    <motion.div
                      ref={ref42}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView42 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 0.9,
                      }}
                      className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]"
                    >
                      <Check10
                        className="!relative !w-4 !h-4"
                        color={color ?? '#725DD6'}
                      />
                    </motion.div>

                    <p className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                      История взаимодействия с клиентом
                    </p>
                  </motion.div>

                  <motion.div
                    ref={ref43}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView43 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
                    className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full"
                  >
                    <motion.div
                      ref={ref44}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView44 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 1.1,
                      }}
                      className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]"
                    >
                      <Check10
                        className="!relative !w-4 !h-4"
                        color={color ?? '#725DD6'}
                      />
                    </motion.div>

                    <p className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                      Online-чат для коммуникации с клиентом
                    </p>
                  </motion.div>

                  <motion.div
                    ref={ref45}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView45 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
                    className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full"
                  >
                    <motion.div
                      ref={ref46}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView46 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 1.3,
                      }}
                      className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]"
                    >
                      <Check10
                        className="!relative !w-4 !h-4"
                        color={color ?? '#725DD6'}
                      />
                    </motion.div>

                    <p className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                      Интеграция с телефонией, email и СМС сервисами
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
