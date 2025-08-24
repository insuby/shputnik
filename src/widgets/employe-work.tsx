import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

import { Check10 } from '../components/ui/check10.tsx';
import Subtract from '../icons/Subtract';

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
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-9 self-stretch">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-[68px] self-stretch">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-4 self-stretch"
        >
          <motion.div
            ref={ref6}
            initial={{ opacity: 0, y: 50 }}
            animate={inView6 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="relative mt-[-1.00px] self-stretch text-center text-[36px] md:text-5xl font-medium leading-[44px] md:leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
          >
            Работа сотрудников
          </motion.div>

          <motion.p
            ref={ref7}
            initial={{ opacity: 0, y: 50 }}
            animate={inView7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
            className="relative w-full md:w-[704px] text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
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
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="relative flex-col md:!flex-row flex w-full flex-[0_0_auto] items-start gap-6 self-stretch"
        >
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, x: -50 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
            className="relative flex flex-1 grow flex-col items-center gap-8  md:gap-12 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 md:p-12"
          >
            <img
              className="absolute left-[53px] top-0 h-[448px]w-full md:w-[623px]"
              alt="Vector"
              src="/img/widgets/vector-1-3.svg"
            />

            <img
              className="relative mt-[-11.00px] h-[222px] w-full self-stretch md:left-0 left-[-40px] scale-150 md:scale-100"
              alt="Frame"
              src="/img/widgets/frame-1948755086.svg"
            />

            <motion.div
              ref={ref8}
              initial={{ opacity: 0, y: 50 }}
              animate={inView8 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-8 self-stretch"
            >
              <motion.p
                ref={ref9}
                initial={{ opacity: 0, y: 50 }}
                animate={inView9 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.35 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                Индивидуальная политика доступа для всех категорий сотрудников,
                возможность настройки ролей
              </motion.p>

              <motion.div
                ref={ref10}
                initial={{ opacity: 0, y: 50 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                className="relative md:!flex-row flex-col flex w-full flex-[0_0_auto] items-start gap-6 self-stretch"
              >
                <motion.div
                  ref={ref11}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView11 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
                  className="relative flex flex-1 grow flex-col items-start gap-4"
                >
                  <motion.div
                    ref={ref12}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView12 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                    className="relative flex h-fit md:h-7 w-full items-center justify-center gap-6 self-stretch"
                  >
                    <motion.div
                      ref={ref13}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView13 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.55,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Кредитный менеджер
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref14}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView14 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                    className="relative flex h-fit md:h-7 w-full items-center justify-center gap-6 self-stretch"
                  >
                    <motion.div
                      ref={ref15}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView15 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.65,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Аналитик
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref16}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView16 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
                    className="relative flex h-fit md:h-7 w-full items-center justify-center gap-6 self-stretch"
                  >
                    <motion.div
                      ref={ref17}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView17 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.75,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Риск-менджер
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref18}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView18 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
                    className="relative flex h-fit md:h-7 w-full items-center justify-center gap-6 self-stretch"
                  >
                    <motion.div
                      ref={ref19}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView19 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.85,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Верификатор
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  ref={ref20}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView20 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
                  className="relative flex flex-1 grow flex-col items-start gap-4"
                >
                  <motion.div
                    ref={ref21}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView21 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                    className="relative flex h-fit md:h-7 w-full items-center justify-center gap-6 self-stretch"
                  >
                    <motion.div
                      ref={ref22}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView22 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.55,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Коллектор
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref23}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView23 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                    className="relative flex h-fit md:h-7 w-full items-center justify-center gap-6 self-stretch"
                  >
                    <motion.div
                      ref={ref24}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView24 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.65,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Оператор
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref25}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView25 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
                    className="relative flex h-fit md:h-7 w-full items-center justify-center gap-6 self-stretch"
                  >
                    <motion.div
                      ref={ref26}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView26 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.75,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Супервайзер
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref27}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView27 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
                    className="relative flex h-fit md:h-7 w-full items-center justify-center gap-6 self-stretch"
                  >
                    <motion.div
                      ref={ref28}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView28 ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.85,
                      }}
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#3573fc14] p-1.5"
                    >
                      <Check10 className="!relative !h-4 !w-4" color={color} />
                    </motion.div>

                    <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
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
            className="relative flex flex-1 grow flex-col items-center gap-8  md:gap-12 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 nd:p-12"
          >
            <img
              className="absolute left-0 top-0 h-[488px] w-full md:w-[608px]"
              alt="Vector"
              src="/img/widgets/vector-1-4.svg"
            />

            <div className="relative h-[210px] w-full self-stretch">
              <div className="relative left-[-15px] md:left-[73px] top-1 flexw-full md:w-[434px] flex-col items-start">
                <div className="relative flex w-full flex-[0_0_auto] items-end justify-end self-stretch py-2 md:pl-16 pr-2 left-[-110px] md:left-0 pl-0">
                  <div className="relative flexw-full md:w-[296px] flex-col items-start gap-1">
                    <div className="relative mt-[-1.00px] self-stretch text-xs font-normal leading-4 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Вы
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2.5 self-stretch rounded-[16px_16px_0px_16px] bg-violet-50 px-3 py-2">
                      <p className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                        Могу ли я досрочно показить заем?
                      </p>
                    </div>
                  </div>

                  <Subtract className="relative size-3" color="#00CB82" />
                </div>

                <div className="relative flex w-full flex-[0_0_auto] items-end self-stretch py-2 pl-2 pr-20">
                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2 rounded-[100px] p-5 [background:url(/img/widgets/frame-3.png)_50%_50%_/_cover]" />

                  <Subtract className="relative size-3" color="#00CB82" />

                  <div className="relative flex flex-1 grow flex-col items-start gap-1.5">
                    <div className="relative mt-[-1.00px] self-stretch text-xs font-normal leading-4 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Менеджер Руслана
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start self-stretch rounded-[16px_16px_16px_0px] bg-[#ffffff] px-3 py-2">
                      <p className="relative mt-[-1.00px] flex-1 text-base font-normal leading-6 tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
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
              className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-8 self-stretch"
            >
              <motion.p
                ref={ref29}
                initial={{ opacity: 0, y: 50 }}
                animate={inView29 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                Сохранение действий сотрудников, <br />
                контактов с клиентами и других операций
              </motion.p>

              <motion.div
                ref={ref30}
                initial={{ opacity: 0, y: 50 }}
                animate={inView30 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch"
              >
                <motion.div
                  ref={ref40}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView40 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                  className="relative flex flex-1 grow flex-col items-start gap-4"
                >
                  <motion.div
                    ref={ref41}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView41 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                    className="relative flex h-fit md:h-7 w-full items-center justify-center gap-6 self-stretch"
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
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                    >
                      <Check10
                        className="!relative !h-4 !w-4"
                        color={color ?? '#725DD6'}
                      />
                    </motion.div>

                    <p className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      История взаимодействия с клиентом
                    </p>
                  </motion.div>

                  <motion.div
                    ref={ref43}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView43 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
                    className="relative flex h-fit md:h-7 w-full items-center justify-center gap-6 self-stretch"
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
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                    >
                      <Check10
                        className="!relative !h-4 !w-4"
                        color={color ?? '#725DD6'}
                      />
                    </motion.div>

                    <p className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Online-чат для коммуникации с клиентом
                    </p>
                  </motion.div>

                  <motion.div
                    ref={ref45}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView45 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
                    className="relative flex h-fit md:h-7 w-full items-center justify-center gap-6 self-stretch"
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
                      className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5"
                    >
                      <Check10
                        className="!relative !h-4 !w-4"
                        color={color ?? '#725DD6'}
                      />
                    </motion.div>

                    <p className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
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
