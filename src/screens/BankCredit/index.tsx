import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

import { useRef } from 'react';

import { HeroButtons } from '../../components/ui/hero-buttons.tsx';
import { Advantages } from '../../widgets/advantages.tsx';
import { Analytics } from '../../widgets/analytics.tsx';
import { EmployeeWork } from '../../widgets/employe-work.tsx';
import { Feedback } from '../../widgets/feedback.tsx';
import { Integrations } from '../../widgets/integrations.tsx';
import { RoleStructure } from '../../widgets/role-structure.tsx';
import { Trust } from '../../widgets/trust.tsx';
import { Zaim } from '../../widgets/zaim.tsx';
import { ZaimChecker } from '../../widgets/zain-checker.tsx';

export const BankCredit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Добавляем отдельные refs для каждого блока в секции "Настройте свой процесс"
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);
  const ref6 = useRef<HTMLDivElement>(null);

  const inView1 = useInView(ref1, { once: true, margin: '-100px' });
  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView4 = useInView(ref4, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref6, { once: true, margin: '-100px' });

  // Добавляем refs для секции "Автоматизация различных кредитных продуктов"
  const refAuto1 = useRef<HTMLDivElement>(null);
  const refAuto2 = useRef<HTMLDivElement>(null);
  const refAuto3 = useRef<HTMLDivElement>(null);
  const refAuto4 = useRef<HTMLDivElement>(null);

  const inViewAuto1 = useInView(refAuto1, { once: true, margin: '-100px' });
  const inViewAuto2 = useInView(refAuto2, { once: true, margin: '-100px' });
  const inViewAuto3 = useInView(refAuto3, { once: true, margin: '-100px' });
  const inViewAuto4 = useInView(refAuto4, { once: true, margin: '-100px' });

  // Добавляем refs для секций "Система управления" и "Транзакции"
  const refSystem1 = useRef<HTMLDivElement>(null);
  const refSystem2 = useRef<HTMLDivElement>(null);
  const refSystem3 = useRef<HTMLDivElement>(null);
  const refSystem4 = useRef<HTMLDivElement>(null);

  const inViewSystem1 = useInView(refSystem1, { once: true, margin: '-100px' });
  const inViewSystem2 = useInView(refSystem2, { once: true, margin: '-100px' });
  const inViewSystem3 = useInView(refSystem3, { once: true, margin: '-100px' });
  const inViewSystem4 = useInView(refSystem4, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const slideInTop = {
    hidden: { opacity: 0, y: -80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const slideInBottom = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="flex flex-col w-[1440px] items-center gap-[136px] pt-8 pb-[136px] px-8 relative flex-[0_0_auto]"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]"
      >
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="flex flex-col h-[628px] items-start gap-20 p-12 relative self-stretch w-full bg-blue-50 rounded-[32px] overflow-hidden"
        >
          <img
            className="absolute w-[954px] h-[842px] -top-16 left-[430px]"
            alt="Vector"
            src="/img/bankcredit/vector-1-9.svg"
          />

          <HeroButtons />

          <motion.div
            variants={slideInLeft}
            className="flex flex-col w-[624px] items-start justify-center gap-12 relative flex-[0_0_auto]"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]"
            >
              <motion.div
                variants={fadeInUp}
                className="relative w-[624px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-6xl tracking-[0] leading-[68px]"
              >
                Банковское кредитование
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="relative w-[624px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffcc] text-xl tracking-[0] leading-7"
              >
                Программное обеспечение для автоматизации банковского
                кредитования. Программное обеспечение для автоматизации
                банковского кредитования.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            className="flex w-[669px] h-[538px] items-center absolute top-[152px] left-[720px] bg-[#f6f8fd] rounded-[24px_0px_0px_0px] overflow-hidden"
          >
            <div className="flex flex-col w-[242px] items-start gap-[23.92px] p-6 relative self-stretch bg-[#ffffff]">
              <p className="relative self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[23.9px] tracking-[0] leading-[29.9px]">
                <span className="text-[#1c222f]">Ваш</span>
                <span className="text-[#3573fc]">Банк</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div variants={slideInLeft}>
        <Advantages />
      </motion.div>

      <motion.div
        variants={slideInRight}
        className="flex flex-col w-[1376px] items-center justify-center gap-9 relative flex-[0_0_auto] bg-[#ffffff]"
      >
        <div className="flex flex-col items-center justify-center gap-[68px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="items-center p-12 relative flex-1 grow bg-[#f9fafd] rounded-3xl overflow-hidden flex flex-col gap-12">
              <img
                className="absolute w-[623px] h-[448px] top-0 left-[53px]"
                alt="Vector"
                src="/img/bankcredit/vector-1-3.svg"
              />

              <div className="relative self-stretch w-full h-80">
                <div className="flex flex-col w-96 items-center justify-center gap-1 p-2 relative top-[29px] left-[98px] bg-[#ffffff] rounded-[32px] overflow-hidden">
                  <div className="flex flex-col items-start gap-4 p-2 relative self-stretch w-full flex-[0_0_auto] rounded-3xl">
                    <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex items-center justify-between p-3 relative self-stretch w-full flex-[0_0_auto] bg-[#f9fafd] rounded-2xl overflow-hidden">
                        <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                          <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                            <div className="w-fit mt-[-1.00px] opacity-50 font-normal text-xs leading-4 whitespace-nowrap relative [font-family:'Roboto',Helvetica] text-gray-90 tracking-[0]">
                              #123234555
                            </div>

                            <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xs tracking-[0] leading-4 whitespace-nowrap">
                              •
                            </div>

                            <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xs tracking-[0] leading-4 whitespace-nowrap">
                              Иван Петров
                            </div>
                          </div>

                          <div className="gap-2.5 px-2 py-1 bg-[#00cb8214] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[100px]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#00ac6e] text-xs tracking-[0] leading-4 whitespace-nowrap">
                              Погашен
                            </div>
                          </div>
                        </div>

                        <div className="inline-flex flex-col items-end justify-between relative self-stretch flex-[0_0_auto]">
                          <div className="w-fit mt-[-1.00px] opacity-50 font-normal text-gray-90 text-xs leading-4 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                            2 месяца
                          </div>

                          <div className="w-[120px] font-medium text-base text-right leading-6 relative [font-family:'Roboto',Helvetica] text-gray-90 tracking-[0]">
                            30 580 ₽
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 relative self-stretch w-full flex-[0_0_auto] bg-[#f9fafd] rounded-2xl overflow-hidden">
                        <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                          <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                            <div className="w-fit mt-[-1.00px] opacity-50 font-normal text-xs leading-4 whitespace-nowrap relative [font-family:'Roboto',Helvetica] text-gray-90 tracking-[0]">
                              #123234555
                            </div>

                            <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xs tracking-[0] leading-4 whitespace-nowrap">
                              •
                            </div>

                            <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xs tracking-[0] leading-4 whitespace-nowrap">
                              Иван Петров
                            </div>
                          </div>

                          <div className="inline-flex items-center justify-center gap-2.5 px-2 py-1 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#3573fc] text-xs tracking-[0] leading-4 whitespace-nowrap">
                              Рефинансирование
                            </div>
                          </div>
                        </div>

                        <div className="inline-flex flex-col items-end justify-between relative self-stretch flex-[0_0_auto]">
                          <div className="w-fit mt-[-1.00px] opacity-50 font-normal text-gray-90 text-xs leading-4 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                            2 месяца
                          </div>

                          <div className="w-[120px] font-medium text-gray-90 text-base text-right leading-6 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                            56 320 ₽
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 relative self-stretch w-full flex-[0_0_auto] bg-[#f9fafd] rounded-2xl overflow-hidden">
                        <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                          <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                            <div className="w-fit mt-[-1.00px] opacity-50 font-normal text-xs leading-4 whitespace-nowrap relative [font-family:'Roboto',Helvetica] text-gray-90 tracking-[0]">
                              #123234555
                            </div>

                            <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xs tracking-[0] leading-4 whitespace-nowrap">
                              •
                            </div>

                            <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xs tracking-[0] leading-4 whitespace-nowrap">
                              Иван Петров
                            </div>
                          </div>

                          <div className="gap-2.5 px-2 py-1 bg-[#e6485014] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[100px]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#e64850] text-xs tracking-[0] leading-4 whitespace-nowrap">
                              Просрочен
                            </div>
                          </div>
                        </div>

                        <div className="inline-flex flex-col items-end justify-between relative self-stretch flex-[0_0_auto]">
                          <div className="w-fit mt-[-1.00px] opacity-50 font-normal text-gray-90 text-xs leading-4 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                            2 месяца
                          </div>

                          <div className="w-[120px] font-medium text-gray-90 text-base text-right leading-6 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                            120 850 ₽
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]">
                  Система управления
                </div>

                <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                  Банки получают лёгкий доступ к атрибутам и параметрам кредита,
                  связанным с ним транзакциям и графикам погашения в режиме
                  реального времени с выплатами и начислением процентов с
                  помощью универсальной системы управления кредитами.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-12 p-12 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-3xl overflow-hidden">
              <img
                className="absolute w-[608px] h-[488px] top-0 left-0"
                alt="Vector"
                src="/img/bankcredit/vector-1-4.svg"
              />

              <div className="relative self-stretch w-full h-80">
                <div className="flex w-[524px] items-start justify-end gap-[11.96px] p-6 relative top-[34px] left-7 bg-[#ffffff] rounded-[32px]">
                  <div className="flex flex-col items-center justify-center gap-3 relative flex-1 grow">
                    <div className="relative self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6">
                      Выплаты
                    </div>

                    <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex-col items-start gap-3.5 flex-1 grow flex relative">
                        <div className="relative self-stretch mt-[-0.75px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xs tracking-[0] leading-4">
                          ID
                        </div>

                        <div className="self-stretch text-sm leading-6 relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 tracking-[0]">
                          12334
                        </div>

                        <div className="self-stretch text-sm leading-6 relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 tracking-[0]">
                          23489
                        </div>

                        <div className="self-stretch text-sm leading-6 relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 tracking-[0]">
                          34566
                        </div>

                        <div className="self-stretch font-normal text-sm leading-6 relative [font-family:'Roboto',Helvetica] text-gray-90 tracking-[0]">
                          89654
                        </div>
                      </div>

                      <div className="flex-col items-start gap-3.5 flex-1 grow flex relative">
                        <div className="relative self-stretch mt-[-0.75px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xs tracking-[0] leading-4">
                          Статус
                        </div>

                        <div className="gap-2.5 px-2 py-1 bg-[#00cb8214] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[100px]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#00ac6e] text-xs tracking-[0] leading-4 whitespace-nowrap">
                            Принято
                          </div>
                        </div>

                        <div className="gap-2.5 px-2 py-1 bg-[#00cb8214] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[100px]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#00ac6e] text-xs tracking-[0] leading-4 whitespace-nowrap">
                            Принято
                          </div>
                        </div>

                        <div className="gap-2.5 px-2 py-1 bg-[#e6485014] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[100px]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#e64850] text-xs tracking-[0] leading-4 whitespace-nowrap">
                            Отклонено
                          </div>
                        </div>

                        <div className="gap-2.5 px-2 py-1 bg-[#00cb8214] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[100px]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#00ac6e] text-xs tracking-[0] leading-4 whitespace-nowrap">
                            Принято
                          </div>
                        </div>
                      </div>

                      <div className="flex-col items-start gap-3.5 flex-1 grow flex relative">
                        <div className="relative self-stretch mt-[-0.75px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xs tracking-[0] leading-4">
                          Дата
                        </div>

                        <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-sm tracking-[0] leading-6">
                          11.10.2025 16:45
                        </div>

                        <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-sm tracking-[0] leading-6">
                          09.10.2025 12:43
                        </div>

                        <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-sm tracking-[0] leading-6">
                          09.10.2025 10:34
                        </div>

                        <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-sm tracking-[0] leading-6">
                          08.10.2025 09:05
                        </div>
                      </div>

                      <div className="flex-col items-start gap-3.5 flex-1 grow flex relative">
                        <div className="relative self-stretch mt-[-0.75px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xs text-right tracking-[0] leading-4">
                          Сумма
                        </div>

                        <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-sm text-right tracking-[0] leading-6">
                          78 278 ₽
                        </div>

                        <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-sm text-right tracking-[0] leading-6">
                          30 580 ₽
                        </div>

                        <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-sm text-right tracking-[0] leading-6">
                          45 789 ₽
                        </div>

                        <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-sm text-right tracking-[0] leading-6">
                          120 580 ₽
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]">
                  Транзакции
                </div>

                <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                  Список выплат и платёжных поручений со всеми данными,
                  введёнными вручную или полученными от платёжного провайдера,
                  помогает при автоматических выплатах, прямом дебетовании и
                  других финансовых операциях.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={slideInTop}>
        <Analytics />
      </motion.div>

      <motion.div
        ref={refAuto1}
        initial={{ opacity: 0, y: 50 }}
        animate={inViewAuto1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="flex flex-col items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]"
      >
        <motion.div
          ref={refAuto2}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewAuto2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col w-[656px] items-center justify-center gap-2.5 relative flex-[0_0_auto]"
        >
          <motion.div
            ref={refAuto3}
            initial={{ opacity: 0, y: 50 }}
            animate={inViewAuto3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center tracking-[0] leading-[60px]"
          >
            Автоматизация различных кредитных продуктов
          </motion.div>
        </motion.div>

        <motion.div
          ref={refAuto4}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewAuto4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          className="flex items-start justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="flex items-start gap-6 relative flex-1 grow">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inViewAuto4 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-8 relative flex-1 grow">
                <div
                  className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M14 17.5C17.866 17.5 21 14.366 21 10.5C21 6.63401 17.866 3.5 14 3.5C10.134 3.5 7 6.63401 7 10.5C7 14.366 10.134 17.5 14 17.5Z"
                      stroke="#00CB82" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.5 23.625C5.61859 19.9642 9.46641 17.5 14 17.5C18.5336 17.5 22.3814 19.9642 24.5 23.625"
                          stroke="#00CB82" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inViewAuto4 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8 min-h-[64px] flex items-center justify-center"
                >
                  Потребительские кредиты
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inViewAuto4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-8 relative flex-1 grow">
                <motion.img
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inViewAuto4 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-1.svg"
                />

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inViewAuto4 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8 min-h-[64px] flex items-center justify-center"
                >
                  Кредитная линия
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-start gap-6 relative flex-1 grow">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inViewAuto4 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-8 relative flex-1 grow">
                <motion.img
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inViewAuto4 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 1.1 }}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-3.svg"
                />

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inViewAuto4 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8 min-h-[64px] flex items-center justify-center"
                >
                  Кредиты под залог имущества
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inViewAuto4 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-8 relative flex-1 grow">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-2.svg"
                />

                <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
                  Ипотечное кредитование
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div variants={slideInLeft}>
        <ZaimChecker />
      </motion.div>

      <motion.div
        variants={slideInRight}
        className="flex flex-col w-[1376px] items-center justify-center gap-12 relative flex-[0_0_auto] bg-[#ffffff]"
      >
        <motion.div
          variants={fadeInUp}
          className="relative w-[832px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center tracking-[0] leading-[60px]"
        >
          Настройте свой процесс
          <br />
          принятия решения
        </motion.div>

        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, x: -50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start justify-center gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-8 relative flex-1 grow">
                <motion.div
                  variants={scaleIn}
                  className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]"
                >
                  <svg
                    className={`!relative !w-7 !h-7`}
                    fill="none"
                    height="28"
                    viewBox="0 0 28 28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 4.375H23.625V8.3125"
                      stroke="#00CB82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                    />

                    <path
                      d="M19.6875 23.625H23.625V19.6875"
                      stroke="#00CB82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                    />

                    <path
                      d="M8.3125 23.625H4.375V19.6875"
                      stroke="#00CB82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                    />

                    <path
                      d="M8.3125 4.375H4.375V8.3125"
                      stroke="#00CB82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                    />

                    <path
                      d="M14 15.75C15.933 15.75 17.5 14.183 17.5 12.25C17.5 10.317 15.933 8.75 14 8.75C12.067 8.75 10.5 10.317 10.5 12.25C10.5 14.183 12.067 15.75 14 15.75Z"
                      stroke="#00CB82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                    />

                    <path
                      d="M8.75 18.375C9.36128 17.56 10.1539 16.8984 11.0652 16.4428C11.9764 15.9872 12.9812 15.75 14 15.75C15.0188 15.75 16.0236 15.9872 16.9348 16.4428C17.8461 16.8984 18.6387 17.56 19.25 18.375"
                      stroke="#00CB82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8 min-h-[64px] flex items-center justify-center"
                >
                  Верификация
                  <br />
                  пользователя
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-8 relative flex-1 grow">
                <motion.div
                  variants={scaleIn}
                  className="inline-flex items-center gap-2.5 p-4 flex-[0_0_auto] bg-[#e6485014] rounded-[100px] justify-center relative"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    className="m-auto"
                  >
                    <path
                      d="M21.4249 21.4244L6.57617 6.57568"
                      stroke="#E74951"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z"
                      stroke="#E74951"
                      stroke-width="1.6"
                      stroke-miterlimit="10"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8 min-h-[64px] flex items-center justify-center"
                >
                  Чёрный список
                  <br />и стоп-факторы
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              ref={ref3}
              initial={{ opacity: 0, x: 50 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start justify-center gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-8 relative flex-1 grow">
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-6.svg"
                />

                <motion.div
                  variants={fadeInUp}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8 min-h-[64px] flex items-center justify-center"
                >
                  Обогащение
                  <br />
                  данных
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <motion.div
              ref={ref4}
              initial={{ opacity: 0, x: -50 }}
              animate={inView4 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start justify-center gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-8 relative flex-1 grow">
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-10.svg"
                />

                <motion.p
                  variants={fadeInUp}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8 min-h-[64px] flex items-center justify-center"
                >
                  Внутренняя, внешняя и итоговая скоринговая оценка
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              ref={ref5}
              initial={{ opacity: 0, y: 50 }}
              animate={inView5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start justify-center gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-8 relative flex-1 grow">
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-5.svg"
                />

                <motion.div
                  variants={fadeInUp}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8 min-h-[64px] flex items-center justify-center"
                >
                  Подбор/предложение кредитного продукта
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              ref={ref6}
              initial={{ opacity: 0, x: 50 }}
              animate={inView6 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start justify-center gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-8 relative flex-1 grow">
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-4.svg"
                />

                <motion.div
                  variants={fadeInUp}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8 min-h-[64px] flex items-center justify-center"
                >
                  Андеррайтинг
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={slideInTop}>
        <Zaim />
      </motion.div>
      <motion.div variants={slideInLeft}>
        <Feedback />
      </motion.div>
      <motion.div variants={slideInRight}>
        <Integrations />
      </motion.div>
      <motion.div variants={slideInBottom}>
        <RoleStructure />
      </motion.div>
      <motion.div variants={slideInTop}>
        <EmployeeWork />
      </motion.div>
      <motion.div variants={slideInLeft}>
        <Trust />
      </motion.div>
    </motion.div>
  );
};
