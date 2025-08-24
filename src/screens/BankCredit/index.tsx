import { motion, useInView } from 'framer-motion';

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
    <div className="relative flex w-full md:w-[1440px] flex-[0_0_auto] flex-col items-center gap-[88px] md:gap-[136px] p-0 md:px-8 pb-[136px] md:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-8 self-stretch">
        <div className="relative flex md:h-[620px] w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-8 md:p-12">
          <img
            className="absolute -top-16 left-[430px] h-[842px]w-full md:w-[954px]"
            alt="Vector"
            src="/img/bankcredit/vector-1-9.svg"
          />

          <HeroButtons>
            <div className="relative flex w-full md:w-[624px] flex-[0_0_auto] flex-col items-start justify-center gap-8  md:gap-12">
              <div className="relative w-full flex md:inline-flex flex-[0_0_auto] flex-col items-start gap-6">
                <motion.div
                  ref={ref15}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView15 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative mt-[-1.00px] text-center md:text-left w-full md:w-[624px] text-[36px] md:text-6xl font-medium leading-[44px] md:leading-[68px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]"
                >
                  Банковское кредитование
                </motion.div>

                <motion.p
                  ref={ref16}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView16 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative text-center md:text-left w-full md:w-[624px] text-xl font-normal leading-7 tracking-normal text-[#ffffffcc] [font-family:'Roboto',Helvetica]"
                >
                  Программное обеспечение для автоматизации банковского
                  кредитования Программное обеспечение для автоматизации
                  банковского кредитования
                </motion.p>
              </div>
            </div>
          </HeroButtons>

          <motion.div
            variants={slideInRight}
            className="md:absolute relative left-0 md:left-[720px] top-[45px] md:top-[205px] flex md:w-[669px] items-center overflow-hidden rounded-[24px_0px_0px_0px] bg-[#f6f8fd]"
          >
            <div className="relative flexw-full md:w-[242px] flex-col items-start gap-[23.92px] self-stretch bg-[#ffffff] p-6">
              <p className="relative mt-[-0.75px] self-stretch text-[23.9px] font-medium leading-[29.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                <span className="text-[#1c222f]">Ваш</span>
                <span className="text-[#3573fc]">Банк</span>
              </p>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl bg-gray-90 p-2.5">
                  <div className="relative size-5 bg-[100%_100%]">
                    <img
                      className="absolute left-[3px] top-0.5 h-4w-full md:w-[15px]"
                      alt="Vector"
                      src="/img/bankcredit/vector-10.svg"
                    />
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                    Главная
                  </div>
                </div>

                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl p-2.5">
                  <div className="relative size-5">
                    <div className="relative left-px top-1 h-[11px]w-full md:w-[19px]">
                      <img
                        className="absolute left-1.5 top-[3px] size-1.5"
                        alt="Vector"
                        src="/img/bankcredit/vector-7.svg"
                      />

                      <img
                        className="absolute left-0 top-0 h-[11px]w-full md:w-[19px]"
                        alt="Vector"
                        src="/img/bankcredit/vector-11.svg"
                      />

                      <img
                        className="absolute left-3.5 top-0 size-1"
                        alt="Vector"
                        src="/img/bankcredit/vector-8.svg"
                      />

                      <img
                        className="absolute left-3.5 top-[7px] size-1"
                        alt="Vector"
                        src="/img/bankcredit/vector-44.svg"
                      />

                      <img
                        className="absolute left-0 top-[7px] size-1"
                        alt="Vector"
                        src="/img/bankcredit/vector-21.svg"
                      />

                      <img
                        className="absolute left-0 top-0 size-1"
                        alt="Vector"
                        src="/img/bankcredit/vector-15.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    Финансы
                  </div>
                </div>

                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl p-2.5">
                  <div className="relative size-5">
                    <div className="relative left-px top-1 h-3w-full md:w-[17px] bg-[url(/img/bankcredit/vector-14.svg)] bg-[100%_100%]">
                      <img
                        className="absolute left-[11px] top-[9px] h-px w-1"
                        alt="Vector"
                        src="/img/bankcredit/vector-5.svg"
                      />

                      <img
                        className="absolute left-2 top-[9px] h-px w-0.5"
                        alt="Vector"
                        src="/img/bankcredit/vector-23.svg"
                      />

                      <img
                        className="absolute left-0 top-[3px] h-pxw-full md:w-[17px]"
                        alt="Vector"
                        src="/img/bankcredit/vector-18.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    Кредитные карты
                  </div>
                </div>

                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl p-2.5">
                  <div className="relative size-5">
                    <div className="relative left-0.5 top-0.5 size-4">
                      <img
                        className="absolute left-2 top-[11px] h-1.5 w-px"
                        alt="Vector"
                        src="/img/bankcredit/vector-16.svg"
                      />

                      <img
                        className="absolute left-0 top-0 size-4"
                        alt="Vector"
                        src="/img/bankcredit/vector-43.svg"
                      />

                      <img
                        className="absolute left-0 top-2 h-0.5w-full md:w-[5px]"
                        alt="Vector"
                        src="/img/bankcredit/vector-17.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    Отчеты
                  </div>
                </div>

                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl p-2.5">
                  <div className="relative size-5">
                    <div className="relative left-0.5 top-0.5 h-[15px] w-4">
                      <img
                        className="absolute left-0 top-0.5 h-3 w-4"
                        alt="Vector"
                        src="/img/bankcredit/vector-14.svg"
                      />

                      <img
                        className="absolute left-1 top-0 h-1w-full md:w-[7px]"
                        alt="Vector"
                        src="/img/bankcredit/vector-24.svg"
                      />

                      <img
                        className="absolute left-0 top-[7px] h-[3px] w-4"
                        alt="Vector"
                        src="/img/bankcredit/vector-19.svg"
                      />

                      <img
                        className="absolute left-1.5 top-1.5 h-px w-1"
                        alt="Vector"
                        src="/img/bankcredit/vector-5.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    Бизнес
                  </div>
                </div>

                <div className="relative flex h-[44.92px] w-full items-center gap-3 self-stretch rounded-xl p-2.5">
                  <div className="relative size-5">
                    <div className="relative left-0.5 top-px h-[17px] w-4">
                      <img
                        className="absolute left-1 top-[5px] size-[7px]"
                        alt="Vector"
                        src="/img/bankcredit/vector-7.svg"
                      />

                      <img
                        className="absolute left-0 top-0 h-[17px] w-4"
                        alt="Vector"
                        src="/img/bankcredit/vector-20.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex-1 text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    Настройки
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-1 grow flex-col items-start gap-5 self-stretch overflow-hidden p-6">
              <div className="relative inline-flex flex-[0_0_auto] items-center gap-4">
                <div className="relative size-12 rounded-3xl [background:url(/img/bankcredit/frame-1948755022-1.png)_50%_50%_/_cover]" />

                <p className="relative w-fit whitespace-nowrap text-xl font-semibold leading-5 tracking-normal text-gray-90 [font-family:'Inter',Helvetica]">
                  <span className="leading-6 text-[#9ea7bb]">Привет,</span>
                  <span className="leading-6 text-[#1c222f]"> Давид</span>
                </p>
              </div>

              <div className="relative mb-[-24.00px] mr-[-50.00px] flexw-full md:w-[429px] flex-[0_0_auto] flex-col items-start gap-[20.5px]">
                <div className="relative flex w-full flex-[0_0_auto] items-start justify-end gap-[11.96px] self-stretch rounded-[11.96px] bg-[#ffffff] p-[17.94px]">
                  <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[11.96px]">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[7.47px] self-stretch">
                      <div className="relative mt-[-0.75px] flex-1 text-[14.9px] font-medium leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        Рекомендуемый оффер
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-[17.94px] self-stretch">
                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          Ставка
                        </div>

                        <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          187, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          Заработок
                        </div>

                        <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          2, 560, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          Окупаемость
                        </div>

                        <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          6 - 8 месяцев
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full flex-[0_0_auto] items-start justify-end gap-[11.96px] self-stretch rounded-[11.96px] bg-[#ffffff] p-[17.94px]">
                  <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[11.96px]">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[7.47px] self-stretch">
                      <div className="relative mt-[-0.75px] flex-1 text-[14.9px] font-medium leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        Расходы
                      </div>
                    </div>

                    <div className="relative flex h-40 w-full items-end justify-between self-stretch">
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[19px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[86px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          01
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-4 w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[67px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          02
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[29px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[95px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          03
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[29px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-12 w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          04
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[43px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[67px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          05
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[29px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[87px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          06
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[18px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[67px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          07
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[21px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[93px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          08
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[29px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-[67px] w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                          09
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-2 self-stretch">
                        <div className="relative flex w-2 flex-1 grow flex-col items-start justify-end gap-0.5 overflow-hidden rounded-[100px] bg-gray-10">
                          <div className="relative h-[52px] w-full self-stretch rounded-[100px] bg-blue-30"></div>
                          <div className="relative h-11 w-full self-stretch rounded-[100px] bg-blue-50"></div>
                        </div>
                        <div className="relative w-4 text-center text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
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

      <div className="relative flex w-full md:w-[1376px] flex-[0_0_auto] flex-col items-center justify-center gap-9 bg-[#ffffff]">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-[68px] self-stretch">
          <div className="flex-col md:!flex-row relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch">
            <motion.div
              ref={refSystem1}
              variants={slideInLeft}
              initial="hidden"
              animate={inViewSystem1 ? 'visible' : 'hidden'}
            >
              <div className="relative flex flex-1 grow flex-col items-center gap-8  md:gap-12 overflow-hidden rounded-3xl bg-[#f9fafd] p-7 md:p-12">
                <img
                  className="absolute left-[53px] top-0 h-[448px]w-full md:w-[623px]"
                  alt="Vector"
                  src="/img/bankcredit/vector-1-3.svg"
                />

                <div className="relative h-80 w-full self-stretch">
                  <div className="relative left-[-15px] md:left-[98px] top-[29px] flex w-96 flex-col items-center justify-center gap-1 overflow-hidden rounded-[32px] bg-[#ffffff] p-2">
                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch rounded-3xl p-2">
                      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch overflow-hidden rounded-2xl bg-[#f9fafd] p-3">
                          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1.5">
                            <div className="relative inline-flex flex-[0_0_auto] items-start gap-1">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                #123234555
                              </div>

                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                •
                              </div>

                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                Иван Петров
                              </div>
                            </div>

                            <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] px-2 py-1">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#00ac6e] [font-family:'Roboto',Helvetica]">
                                Погашен
                              </div>
                            </div>
                          </div>

                          <div className="relative inline-flex flex-[0_0_auto] flex-col items-end justify-between self-stretch">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                              2 месяца
                            </div>

                            <div className="relativew-full md:w-[120px] text-right text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              30 580 ₽
                            </div>
                          </div>
                        </div>

                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch overflow-hidden rounded-2xl bg-[#f9fafd] p-3">
                          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1.5">
                            <div className="relative inline-flex flex-[0_0_auto] items-start gap-1">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                #123234555
                              </div>

                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                •
                              </div>

                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                Иван Петров
                              </div>
                            </div>

                            <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#3573fc14] px-2 py-1">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#3573fc] [font-family:'Roboto',Helvetica]">
                                Рефинансирование
                              </div>
                            </div>
                          </div>

                          <div className="relative inline-flex flex-[0_0_auto] flex-col items-end justify-between self-stretch">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                              2 месяца
                            </div>

                            <div className="relativew-full md:w-[120px] text-right text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              56 320 ₽
                            </div>
                          </div>
                        </div>

                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch overflow-hidden rounded-2xl bg-[#f9fafd] p-3">
                          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1.5">
                            <div className="relative inline-flex flex-[0_0_auto] items-start gap-1">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                #123234555
                              </div>

                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                •
                              </div>

                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                                Иван Петров
                              </div>
                            </div>

                            <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#e6485014] px-2 py-1">
                              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#e64850] [font-family:'Roboto',Helvetica]">
                                Просрочен
                              </div>
                            </div>
                          </div>

                          <div className="relative inline-flex flex-[0_0_auto] flex-col items-end justify-between self-stretch">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                              2 месяца
                            </div>

                            <div className="relativew-full md:w-[120px] text-right text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
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
                  className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch"
                >
                  <motion.div
                    ref={refSystem2}
                    variants={itemVariants}
                    className="relative mt-[-1.00px] self-stretch text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                  >
                    Система управления
                  </motion.div>

                  <motion.p
                    ref={refSystem3}
                    variants={fadeInUp}
                    className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
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
              <div className="relative flex flex-1 grow flex-col items-center gap-8  md:gap-12 self-stretch overflow-hidden rounded-3xl bg-[#f9fafd] p-8 md:p-12">
                <img
                  className="absolute left-0 top-0 h-[488px]w-full md:w-[608px]"
                  alt="Vector"
                  src="/img/bankcredit/vector-1-4.svg"
                />

                <div className="relative h-80 w-full self-stretch">
                  <div className="relative left-[-30px] top-[-10px] md:left-7 md:top-[34px] flex w-[120%] md:w-[524px] items-start justify-end gap-[11.96px] rounded-[32px] bg-[#ffffff] p-6">
                    <div className="relative flex flex-1 grow flex-col items-center justify-center gap-3">
                      <div className="relative mt-[-0.75px] self-stretch text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        Выплаты
                      </div>

                      <div className="relative flex w-full flex-[0_0_auto] items-start gap-3 self-stretch">
                        <div className="relative flex flex-1 grow flex-col items-start gap-3.5">
                          <div className="relative mt-[-0.75px] self-stretch text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                            ID
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            12334
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            23489
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            34566
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            89654
                          </div>
                        </div>

                        <div className="relative flex flex-1 grow flex-col items-start gap-3.5">
                          <div className="relative mt-[-0.75px] self-stretch text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                            Статус
                          </div>

                          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] px-2 py-1">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#00ac6e] [font-family:'Roboto',Helvetica]">
                              Принято
                            </div>
                          </div>

                          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] px-2 py-1">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#00ac6e] [font-family:'Roboto',Helvetica]">
                              Принято
                            </div>
                          </div>

                          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#e6485014] px-2 py-1">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#e64850] [font-family:'Roboto',Helvetica]">
                              Отклонено
                            </div>
                          </div>

                          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] px-2 py-1">
                            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-[#00ac6e] [font-family:'Roboto',Helvetica]">
                              Принято
                            </div>
                          </div>
                        </div>

                        <div className="relative flex flex-1 grow flex-col items-start gap-3.5">
                          <div className="relative mt-[-0.75px] self-stretch text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                            Дата
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            11.10.2025 16:45
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            09.10.2025 12:43
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            09.10.2025 10:34
                          </div>

                          <div className="relative self-stretch text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            08.10.2025 09:05
                          </div>
                        </div>

                        <div className="relative flex flex-1 grow flex-col items-start gap-3.5">
                          <div className="relative mt-[-0.75px] self-stretch text-right text-xs font-normal leading-4 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                            Сумма
                          </div>

                          <div className="relative self-stretch text-right text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            78 278 ₽
                          </div>

                          <div className="relative self-stretch text-right text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            30 580 ₽
                          </div>

                          <div className="relative self-stretch text-right text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            45 789 ₽
                          </div>

                          <div className="relative self-stretch text-right text-sm font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
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
                  className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch"
                >
                  <motion.div
                    variants={itemVariants}
                    className="relative mt-[-1.00px] self-stretch text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                  >
                    Транзакции
                  </motion.div>

                  <motion.p
                    variants={fadeInUp}
                    className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
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
        className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-8 md:gap-12 self-stretch"
      >
        <motion.div
          ref={refAuto2}
          variants={itemVariants}
          className="relative flex w-full md:w-[656px] flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
        >
          <motion.div
            ref={refAuto3}
            variants={fadeInUp}
            className="relative mt-[-1.00px] self-stretch text-center text-[36px] md:text-5xl font-medium leading-[44px] md:leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
          >
            Автоматизация различных кредитных продуктов
          </motion.div>
        </motion.div>

        <motion.div
          ref={refAuto4}
          variants={containerVariants}
          initial="hidden"
          animate={inViewAuto4 ? 'visible' : 'hidden'}
          className="relative flex flex-col md:!flex-row w-full flex-[0_0_auto] items-start justify-center gap-6 self-stretch"
        >
          <div className="relative flex-col md:!flex-row flex flex-1 grow items-start gap-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-1 grow items-center justify-center gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10 w-full"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-8">
                <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-4">
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
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 23.625C5.61859 19.9642 9.46641 17.5 14 17.5C18.5336 17.5 22.3814 19.9642 24.5 23.625"
                      stroke="#00CB82"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <motion.div
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  Потребительские кредиты
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-1 grow items-center justify-center gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10 w-full"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-8">
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-1.svg"
                />

                <motion.div
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  Кредитная линия
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="relative flex-col md:!flex-row flex flex-1 grow items-start gap-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-1 grow items-center justify-center gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10 w-full"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-8">
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-3.svg"
                />

                <motion.div
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  Кредиты под залог имущества
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-1 grow items-center justify-center gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10 w-full"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-8">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-2.svg"
                />

                <div className="relative self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
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
        className="relative flex w-full md:w-[1376px] flex-[0_0_auto] flex-col items-center justify-center gap-8  md:gap-12 bg-[#ffffff]"
      >
        <motion.div
          variants={fadeInUp}
          className="relative mt-[-1.00px]w-full md:w-[832px] text-center text-[36px] md:text-5xl font-medium leading-[44px] md:leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
        >
          Настройте свой процесс
          <br />
          принятия решения
        </motion.div>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch">
          <div className="flex-col md:!flex-row relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch">
            <motion.div
              ref={ref1}
              variants={itemVariants}
              initial="hidden"
              animate={inView1 ? 'visible' : 'hidden'}
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-1 grow items-start justify-center gap-8 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-10"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-8">
                <motion.div
                  variants={scaleIn}
                  className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-4"
                >
                  <svg
                    className="!relative !h-7 !w-7"
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
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
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
              className="relative flex flex-1 grow items-center justify-center gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10 w-full"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-8">
                <motion.div
                  variants={scaleIn}
                  className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#e6485014] p-4"
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
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z"
                      stroke="#E74951"
                      strokeWidth="1.6"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
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
              className="relative flex flex-1 grow items-start justify-center gap-8 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-10"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-8">
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-6.svg"
                />

                <motion.div
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  Обогащение
                  <br />
                  данных
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="flex-col md:!flex-row relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch">
            <motion.div
              ref={ref4}
              initial={{ opacity: 0, x: -50 }}
              animate={inView4 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-1 grow items-start justify-center gap-8 overflow-hidden rounded-[32px] bg-[#f9fafd] p-10"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-8">
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-10.svg"
                />

                <motion.p
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
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
              className="relative flex flex-1 grow items-start justify-center gap-8 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-10"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-8">
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-5.svg"
                />

                <motion.div
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
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
              className="relative flex flex-1 grow items-start justify-center gap-8 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafd] p-10"
            >
              <div className="relative flex flex-1 grow flex-col items-center justify-center gap-8">
                <motion.img
                  variants={scaleIn}
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/bankcredit/frame-19-4.svg"
                />

                <motion.div
                  variants={fadeInUp}
                  className="relative flex min-h-[64px] items-center justify-center self-stretch text-center text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
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
