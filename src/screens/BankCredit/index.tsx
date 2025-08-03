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
  // Добавляем отдельные refs для каждого блока в секции "Настройте свой процесс"
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);
  const ref6 = useRef<HTMLDivElement>(null);
  const ref15 = useRef<HTMLDivElement>(null);
  const ref16 = useRef<HTMLDivElement>(null);

  const inView1 = useInView(ref1, { once: true, margin: '-100px' });
  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView4 = useInView(ref4, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref6, { once: true, margin: '-100px' });
  const inView15 = useInView(ref15, { once: true, margin: '-100px' });
  const inView16 = useInView(ref16, { once: true, margin: '-100px' });

  // Добавляем refs для секции "Автоматизация различных кредитных продуктов"
  const refAuto1 = useRef<HTMLDivElement>(null);
  const refAuto2 = useRef<HTMLDivElement>(null);
  const refAuto3 = useRef<HTMLDivElement>(null);
  const refAuto4 = useRef<HTMLDivElement>(null);

  const inViewAuto1 = useInView(refAuto1, { once: true, margin: '-100px' });
  const inViewAuto4 = useInView(refAuto4, { once: true, margin: '-100px' });

  // Добавляем refs для секций "Система управления" и "Транзакции"
  const refSystem1 = useRef<HTMLDivElement>(null);
  const refSystem2 = useRef<HTMLDivElement>(null);
  const refSystem3 = useRef<HTMLDivElement>(null);
  const refSystem4 = useRef<HTMLDivElement>(null);
  const inViewSystem1 = useInView(refSystem1, { once: true, margin: '-100px' });
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

  return (
    <div className="flex flex-col w-[1440px] items-center gap-[136px] pt-8 pb-[136px] px-8 relative flex-[0_0_auto]">
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col h-[620px] items-start gap-20 p-12 relative self-stretch w-full bg-blue-50 rounded-[32px] overflow-hidden">
          <img
            className="absolute w-[954px] h-[842px] -top-16 left-[430px]"
            alt="Vector"
            src="/img/bankcredit/vector-1-9.svg"
          />

          <HeroButtons>
            <div
              className="flex flex-col w-[624px] items-start justify-center gap-12 relative flex-[0_0_auto]"
            >
              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <motion.div
                  ref={ref15}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView15 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative w-[624px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-6xl tracking-[0] leading-[68px]"
                >
                  Банковское кредитование
                </motion.div>

                <motion.p
                  ref={ref16}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView16 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative w-[624px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffcc] text-xl tracking-[0] leading-7"
                >
                  Программное обеспечение для автоматизации банковского
                  кредитования. Программное обеспечение для автоматизации
                  банковского кредитования.
                </motion.p>
              </div>
            </div>
          </HeroButtons>

          <motion.div
            variants={slideInRight}
            className="flex w-[669px] h-[538px] items-center absolute top-[152px] left-[720px] bg-[#f6f8fd] rounded-[24px_0px_0px_0px] overflow-hidden"
          >
            <div className="flex flex-col w-[242px] items-start gap-[23.92px] p-6 relative self-stretch bg-[#ffffff]">
              <p className="relative self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[23.9px] tracking-[0] leading-[29.9px]">
                <span className="text-[#1c222f]">Ваш</span>
                <span className="text-[#3573fc]">Банк</span>
              </p>

              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex h-[44.92px] items-center gap-3 p-2.5 relative self-stretch w-full bg-gray-90 rounded-xl">
                  <div className="relative w-5 h-5 bg-[100%_100%]">
                    <img
                      className="absolute w-[15px] h-4 top-0.5 left-[3px]"
                      alt="Vector"
                      src="/img/bankcredit/vector-10.svg"
                    />
                  </div>

                  <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-[#ffffff] text-[14.9px] tracking-[0] leading-[20.9px]">
                    Главная
                  </div>
                </div>

                <div className="flex h-[44.92px] items-center gap-3 p-2.5 relative self-stretch w-full rounded-xl">
                  <div className="relative w-5 h-5">
                    <div className="relative w-[19px] h-[11px] top-1 left-px">
                      <img
                        className="absolute w-1.5 h-1.5 top-[3px] left-1.5"
                        alt="Vector"
                        src="/img/bankcredit/vector-7.svg"
                      />

                      <img
                        className="absolute w-[19px] h-[11px] top-0 left-0"
                        alt="Vector"
                        src="/img/bankcredit/vector-11.svg"
                      />

                      <img
                        className="absolute w-1 h-1 top-0 left-3.5"
                        alt="Vector"
                        src="/img/bankcredit/vector-8.svg"
                      />

                      <img
                        className="absolute w-1 h-1 top-[7px] left-3.5"
                        alt="Vector"
                        src="/img/bankcredit/vector-44.svg"
                      />

                      <img
                        className="absolute w-1 h-1 top-[7px] left-0"
                        alt="Vector"
                        src="/img/bankcredit/vector-21.svg"
                      />

                      <img
                        className="absolute w-1 h-1 top-0 left-0"
                        alt="Vector"
                        src="/img/bankcredit/vector-15.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-[14.9px] tracking-[0] leading-[20.9px]">
                    Финансы
                  </div>
                </div>

                <div className="flex h-[44.92px] items-center gap-3 p-2.5 relative self-stretch w-full rounded-xl">
                  <div className="relative w-5 h-5">
                    <div className="relative w-[17px] h-3 top-1 left-px bg-[url(/img/bankcredit/vector-14.svg)] bg-[100%_100%]">
                      <img
                        className="absolute w-1 h-px top-[9px] left-[11px]"
                        alt="Vector"
                        src="/img/bankcredit/vector-5.svg"
                      />

                      <img
                        className="absolute w-0.5 h-px top-[9px] left-2"
                        alt="Vector"
                        src="/img/bankcredit/vector-23.svg"
                      />

                      <img
                        className="absolute w-[17px] h-px top-[3px] left-0"
                        alt="Vector"
                        src="/img/bankcredit/vector-18.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-[14.9px] tracking-[0] leading-[20.9px]">
                    Кредитные карты
                  </div>
                </div>

                <div className="flex h-[44.92px] items-center gap-3 p-2.5 relative self-stretch w-full rounded-xl">
                  <div className="relative w-5 h-5">
                    <div className="relative w-4 h-4 top-0.5 left-0.5">
                      <img
                        className="absolute w-px h-1.5 top-[11px] left-2"
                        alt="Vector"
                        src="/img/bankcredit/vector-16.svg"
                      />

                      <img
                        className="absolute w-4 h-4 top-0 left-0"
                        alt="Vector"
                        src="/img/bankcredit/vector-43.svg"
                      />

                      <img
                        className="absolute w-[5px] h-0.5 top-2 left-0"
                        alt="Vector"
                        src="/img/bankcredit/vector-17.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-[14.9px] tracking-[0] leading-[20.9px]">
                    Отчеты
                  </div>
                </div>

                <div className="flex h-[44.92px] items-center gap-3 p-2.5 relative self-stretch w-full rounded-xl">
                  <div className="relative w-5 h-5">
                    <div className="relative w-4 h-[15px] top-0.5 left-0.5">
                      <img
                        className="absolute w-4 h-3 top-0.5 left-0"
                        alt="Vector"
                        src="/img/bankcredit/vector-14.svg"
                      />

                      <img
                        className="absolute w-[7px] h-1 top-0 left-1"
                        alt="Vector"
                        src="/img/bankcredit/vector-24.svg"
                      />

                      <img
                        className="absolute w-4 h-[3px] top-[7px] left-0"
                        alt="Vector"
                        src="/img/bankcredit/vector-19.svg"
                      />

                      <img
                        className="absolute w-1 h-px top-1.5 left-1.5"
                        alt="Vector"
                        src="/img/bankcredit/vector-5.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-[14.9px] tracking-[0] leading-[20.9px]">
                    Бизнес
                  </div>
                </div>

                <div className="flex h-[44.92px] items-center gap-3 p-2.5 relative self-stretch w-full rounded-xl">
                  <div className="relative w-5 h-5">
                    <div className="relative w-4 h-[17px] top-px left-0.5">
                      <img
                        className="absolute w-[7px] h-[7px] top-[5px] left-1"
                        alt="Vector"
                        src="/img/bankcredit/vector-7.svg"
                      />

                      <img
                        className="absolute w-4 h-[17px] top-0 left-0"
                        alt="Vector"
                        src="/img/bankcredit/vector-20.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-[14.9px] tracking-[0] leading-[20.9px]">
                    Настройки
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 p-6 relative flex-1 self-stretch grow overflow-hidden">
              <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                <div className="relative w-12 h-12 rounded-3xl [background:url(/img/bankcredit/frame-1948755022-1.png)_50%_50%_/_cover]" />

                <p className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-gray-90 text-xl tracking-[0] leading-5 whitespace-nowrap">
                  <span className="text-[#9ea7bb] leading-6">Привет,</span>
                  <span className="text-[#1c222f] leading-6"> Давид</span>
                </p>
              </div>

              <div className="flex flex-col w-[429px] items-start gap-[20.5px] relative flex-[0_0_auto] mb-[-24.00px] mr-[-50.00px]">
                <div className="flex items-start justify-end gap-[11.96px] p-[17.94px] relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] rounded-[11.96px]">
                  <div className="flex flex-col items-center justify-center gap-[11.96px] relative flex-1 grow">
                    <div className="flex items-center justify-center gap-[7.47px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[14.9px] tracking-[0] leading-[20.9px]">
                        Рекомендуемый оффер
                      </div>
                    </div>

                    <div className="flex items-start gap-[17.94px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex-col items-start gap-[1.49px] flex-1 grow flex relative">
                        <div className="relative self-stretch mt-[-0.75px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[10.5px] tracking-[0] leading-[14.9px]">
                          Ставка
                        </div>

                        <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] tracking-[0] leading-[20.9px]">
                          187, 000 ₽
                        </div>
                      </div>

                      <div className="flex-col items-start gap-[1.49px] flex-1 grow flex relative">
                        <div className="relative self-stretch mt-[-0.75px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[10.5px] tracking-[0] leading-[14.9px]">
                          Заработок
                        </div>

                        <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] tracking-[0] leading-[20.9px]">
                          2, 560, 000 ₽
                        </div>
                      </div>

                      <div className="flex-col items-start gap-[1.49px] flex-1 grow flex relative">
                        <div className="relative self-stretch mt-[-0.75px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[10.5px] tracking-[0] leading-[14.9px]">
                          Окупаемость
                        </div>

                        <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] tracking-[0] leading-[20.9px]">
                          6 - 8 месяцев
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-end gap-[11.96px] p-[17.94px] relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] rounded-[11.96px]">
                  <div className="flex flex-col items-center justify-center gap-[11.96px] relative flex-1 grow">
                    <div className="flex items-center justify-center gap-[7.47px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[14.9px] tracking-[0] leading-[20.9px]">
                        Расходы
                      </div>
                    </div>

                    <div className="h-40 items-end justify-between self-stretch w-full flex relative">
                      <div className="inline-flex flex-col items-center justify-end gap-2 relative self-stretch flex-[0_0_auto]">
                        <div className="flex flex-col w-2 items-start justify-end gap-0.5 relative flex-1 grow bg-gray-10 rounded-[100px] overflow-hidden">
                          <div className="h-[19px] relative self-stretch w-full bg-blue-30 rounded-[100px]"></div>
                          <div className="h-[86px] relative self-stretch w-full bg-blue-50 rounded-[100px]"></div>
                        </div>
                        <div className="w-4 opacity-50 text-[10.5px] text-center leading-[14.9px] relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 tracking-[0]">
                          01
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-center justify-end gap-2 relative self-stretch flex-[0_0_auto]">
                        <div className="flex flex-col w-2 items-start justify-end gap-0.5 relative flex-1 grow bg-gray-10 rounded-[100px] overflow-hidden">
                          <div className="h-4 relative self-stretch w-full bg-blue-30 rounded-[100px]"></div>
                          <div className="relative self-stretch w-full h-[67px] bg-blue-50 rounded-[100px]"></div>
                        </div>
                        <div className="w-4 opacity-50 text-[10.5px] text-center leading-[14.9px] relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 tracking-[0]">
                          02
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-center justify-end gap-2 relative self-stretch flex-[0_0_auto]">
                        <div className="flex flex-col w-2 items-start justify-end gap-0.5 relative flex-1 grow bg-gray-10 rounded-[100px] overflow-hidden">
                          <div className="relative self-stretch w-full h-[29px] bg-blue-30 rounded-[100px]"></div>
                          <div className="h-[95px] relative self-stretch w-full bg-blue-50 rounded-[100px]"></div>
                        </div>
                        <div className="w-4 opacity-50 text-[10.5px] text-center leading-[14.9px] relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 tracking-[0]">
                          03
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-center justify-end gap-2 relative self-stretch flex-[0_0_auto]">
                        <div className="flex flex-col w-2 items-start justify-end gap-0.5 relative flex-1 grow bg-gray-10 rounded-[100px] overflow-hidden">
                          <div className="relative self-stretch w-full h-[29px] bg-blue-30 rounded-[100px]"></div>
                          <div className="h-12 relative self-stretch w-full bg-blue-50 rounded-[100px]"></div>
                        </div>
                        <div className="w-4 opacity-50 text-[10.5px] text-center leading-[14.9px] relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 tracking-[0]">
                          04
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-center justify-end gap-2 relative self-stretch flex-[0_0_auto]">
                        <div className="flex flex-col w-2 items-start justify-end gap-0.5 relative flex-1 grow bg-gray-10 rounded-[100px] overflow-hidden">
                          <div className="h-[43px] relative self-stretch w-full bg-blue-30 rounded-[100px]"></div>
                          <div className="relative self-stretch w-full h-[67px] bg-blue-50 rounded-[100px]"></div>
                        </div>
                        <div className="w-4 opacity-50 text-[10.5px] text-center leading-[14.9px] relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 tracking-[0]">
                          05
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-center justify-end gap-2 relative self-stretch flex-[0_0_auto]">
                        <div className="flex flex-col w-2 items-start justify-end gap-0.5 relative flex-1 grow bg-gray-10 rounded-[100px] overflow-hidden">
                          <div className="relative self-stretch w-full h-[29px] bg-blue-30 rounded-[100px]"></div>
                          <div className="h-[87px] relative self-stretch w-full bg-blue-50 rounded-[100px]"></div>
                        </div>
                        <div className="w-4 opacity-50 text-[10.5px] text-center leading-[14.9px] relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 tracking-[0]">
                          06
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-center justify-end gap-2 relative self-stretch flex-[0_0_auto]">
                        <div className="flex flex-col w-2 items-start justify-end gap-0.5 relative flex-1 grow bg-gray-10 rounded-[100px] overflow-hidden">
                          <div className="h-[18px] relative self-stretch w-full bg-blue-30 rounded-[100px]"></div>
                          <div className="relative self-stretch w-full h-[67px] bg-blue-50 rounded-[100px]"></div>
                        </div>
                        <div className="w-4 opacity-50 text-[10.5px] text-center leading-[14.9px] relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 tracking-[0]">
                          07
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-center justify-end gap-2 relative self-stretch flex-[0_0_auto]">
                        <div className="flex flex-col w-2 items-start justify-end gap-0.5 relative flex-1 grow bg-gray-10 rounded-[100px] overflow-hidden">
                          <div className="h-[21px] relative self-stretch w-full bg-blue-30 rounded-[100px]"></div>
                          <div className="h-[93px] relative self-stretch w-full bg-blue-50 rounded-[100px]"></div>
                        </div>
                        <div className="w-4 opacity-50 text-[10.5px] text-center leading-[14.9px] relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 tracking-[0]">
                          08
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-center justify-end gap-2 relative self-stretch flex-[0_0_auto]">
                        <div className="flex flex-col w-2 items-start justify-end gap-0.5 relative flex-1 grow bg-gray-10 rounded-[100px] overflow-hidden">
                          <div className="relative self-stretch w-full h-[29px] bg-blue-30 rounded-[100px]"></div>
                          <div className="relative self-stretch w-full h-[67px] bg-blue-50 rounded-[100px]"></div>
                        </div>
                        <div className="w-4 opacity-50 text-[10.5px] text-center leading-[14.9px] relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 tracking-[0]">
                          09
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-center justify-end gap-2 relative self-stretch flex-[0_0_auto]">
                        <div className="flex flex-col w-2 items-start justify-end gap-0.5 relative flex-1 grow bg-gray-10 rounded-[100px] overflow-hidden">
                          <div className="h-[52px] relative self-stretch w-full bg-blue-30 rounded-[100px]"></div>
                          <div className="h-11 relative self-stretch w-full bg-blue-50 rounded-[100px]"></div>
                        </div>
                        <div className="w-4 opacity-50 text-[10.5px] text-center leading-[14.9px] relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 tracking-[0]">
                          10
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Advantages />

      <div className="flex flex-col w-[1376px] items-center justify-center gap-9 relative flex-[0_0_auto] bg-[#ffffff]">
        <div className="flex flex-col items-center justify-center gap-[68px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <motion.div
              ref={refSystem1}
              variants={slideInLeft}
              initial="hidden"
              animate={inViewSystem1 ? 'visible' : 'hidden'}
            >
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

                <motion.div
                  ref={refSystem1}
                  variants={containerVariants}
                  initial="hidden"
                  animate={inViewSystem1 ? 'visible' : 'hidden'}
                  className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
                >
                  <motion.div
                    ref={refSystem2}
                    variants={itemVariants}
                    className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]"
                  >
                    Система управления
                  </motion.div>

                  <motion.p
                    ref={refSystem3}
                    variants={fadeInUp}
                    className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7"
                  >
                    Банки получают лёгкий доступ к атрибутам и параметрам
                    кредита, связанным с ним транзакциям и графикам погашения в
                    режиме реального времени с выплатами и начислением процентов
                    с помощью универсальной системы управления кредитами.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              ref={refSystem4}
              variants={slideInRight}
              initial="hidden"
              animate={inViewSystem4 ? 'visible' : 'hidden'}
            >
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

                <motion.div
                  ref={refSystem4}
                  variants={containerVariants}
                  initial="hidden"
                  animate={inViewSystem4 ? 'visible' : 'hidden'}
                  className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
                >
                  <motion.div
                    variants={itemVariants}
                    className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]"
                  >
                    Транзакции
                  </motion.div>

                  <motion.p
                    variants={fadeInUp}
                    className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7"
                  >
                    Список выплат и платёжных поручений со всеми данными,
                    введёнными вручную или полученными от платёжного провайдера,
                    помогает при автоматических выплатах, прямом дебетовании и
                    других финансовых операциях.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Analytics />

      <motion.div
        ref={refAuto1}
        variants={containerVariants}
        initial="hidden"
        animate={inViewAuto1 ? 'visible' : 'hidden'}
        className="flex flex-col items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]"
      >
        <motion.div
          ref={refAuto2}
          variants={itemVariants}
          className="flex flex-col w-[656px] items-center justify-center gap-2.5 relative flex-[0_0_auto]"
        >
          <motion.div
            ref={refAuto3}
            variants={fadeInUp}
            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center tracking-[0] leading-[60px]"
          >
            Автоматизация различных кредитных продуктов
          </motion.div>
        </motion.div>

        <motion.div
          ref={refAuto4}
          variants={containerVariants}
          initial="hidden"
          animate={inViewAuto4 ? 'visible' : 'hidden'}
          className="flex items-start justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="flex items-start gap-6 relative flex-1 grow">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-8 relative flex-1 grow">
                <div className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M14 17.5C17.866 17.5 21 14.366 21 10.5C21 6.63401 17.866 3.5 14 3.5C10.134 3.5 7 6.63401 7 10.5C7 14.366 10.134 17.5 14 17.5Z"
                      stroke="#00CB82"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.5 23.625C5.61859 19.9642 9.46641 17.5 14 17.5C18.5336 17.5 22.3814 19.9642 24.5 23.625"
                      stroke="#00CB82"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <motion.div
                  variants={fadeInUp}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8 min-h-[64px] flex items-center justify-center"
                >
                  Потребительские кредиты
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-8 relative flex-1 grow">
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-1.svg"
                />

                <motion.div
                  variants={fadeInUp}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8 min-h-[64px] flex items-center justify-center"
                >
                  Кредитная линия
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-start gap-6 relative flex-1 grow">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-8 relative flex-1 grow">
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-3.svg"
                />

                <motion.div
                  variants={fadeInUp}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8 min-h-[64px] flex items-center justify-center"
                >
                  Кредиты под залог имущества
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
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

      <ZaimChecker />

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
              variants={itemVariants}
              initial="hidden"
              animate={inView1 ? 'visible' : 'hidden'}
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

      <Zaim />
      <Feedback />
      <Integrations />
      <RoleStructure />
      <EmployeeWork />
      <Trust />
    </div>
  );
};
