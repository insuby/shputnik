import { Marquee } from '@devnomic/marquee';
import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

import { HeroButtons } from '../../components/ui/hero-buttons.tsx';
import { Advantages } from '../../widgets/advantages.tsx';
import { Analytics } from '../../widgets/analytics.tsx';
import { EmployeeWork } from '../../widgets/employe-work.tsx';
import { Feedback } from '../../widgets/feedback.tsx';
import { Integrations } from '../../widgets/integrations.tsx';
import { Trust } from '../../widgets/trust.tsx';
import { Zaim } from '../../widgets/zaim.tsx';

export const Autocredit = () => {
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);

  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref6, { once: true, margin: '-100px' });
  const inView7 = useInView(ref7, { once: true, margin: '-100px' });
  const inView8 = useInView(ref8, { once: true, margin: '-100px' });
  const inView9 = useInView(ref9, { once: true, margin: '-100px' });
  const inView10 = useInView(ref10, { once: true, margin: '-100px' });

  return (
    <div className="relative flex w-full md:w-[1440px] flex-[0_0_auto] flex-col items-center gap-[88px] md:gap-[136px] p-0 md:px-8 pb-[136px] md:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch">
        <div className="relative flex md:h-[620px] w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-7 md:p-12">
          <img
            className="absolute -top-16 left-[430px] h-[842px] w-full md:w-[954px]"
            alt="Vector"
            src="/img/autocredit/vector-1-9.svg"
          />

          <HeroButtons>
            <div className="relative flex w-full md:w-[624px] flex-[0_0_auto] flex-col items-start justify-center gap-7  md:gap-12">
              <div className="relative w-full flex md:inline-flex flex-[0_0_auto] flex-col items-start gap-6">
                <motion.div
                  ref={ref2}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                  className="relative mt-[-1.00px] text-center md:text-left w-full md:w-[624px] text-[36px] md:text-6xl font-medium leading-[44px] md:leading-[68px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]"
                >
                  Займ под залог автомобиля
                </motion.div>

                <motion.p
                  ref={ref3}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                  className="relative text-center md:text-left w-full md:w-[624px] text-xl font-normal leading-7 tracking-normal text-[#ffffffcc] [font-family:'Roboto',Helvetica]"
                >
                  Программное обеспечение для автоматизации залоговых займов
                </motion.p>
              </div>
            </div>
          </HeroButtons>

          <motion.div
            ref={ref5}
            initial={{ opacity: 0, x: 50 }}
            animate={inView5 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            className="absolute left-[704px] top-[154px] hidden md:inline-flex items-center overflow-hidden rounded-[23.92px_23.92px_0px_0px] bg-[#f6f8fd]"
          >
            <div className="relative mt-2 flex w-full md:w-[393.9px] flex-col items-start gap-[23.92px] bg-[#ffffff] p-[29.9px]">
              <div className="relative self-stretch text-[23.9px] font-medium leading-[29.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                Калькулятор
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-center gap-[11.96px] self-stretch rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                  <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    Дилер
                  </div>

                  <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                    Макс Моторс
                  </div>
                </div>

                <div className="relative size-[17.94px] rotate-90">
                  <img
                    className="absolute left-[-758px] top-[13748px] size-[18px] -rotate-90"
                    alt="Vector"
                  />

                  <img
                    className="absolute left-[3px] top-[5px] h-[7px] w-full md:w-[13px] -rotate-90"
                    alt="Vector"
                    src="/img/autocredit/vector.svg"
                  />
                </div>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[11.96px]">
                <div className="relative inline-flex flex-[0_0_auto] items-start gap-[8.97px]">
                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[7.47px] rounded-[74.74px] bg-gray-90 px-[14.95px] py-[7.47px]">
                    <div className="relative mt-[-0.75px] w-fit whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                      Новая
                    </div>
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[7.47px] rounded-[74.74px] bg-[#f7f9ff] px-[14.95px] py-[7.47px]">
                    <div className="relative mt-[-0.75px] w-fit whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Подержанная
                    </div>
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] items-start gap-[8.97px]">
                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[7.47px] rounded-[74.74px] bg-[#f7f9ff] px-[14.95px] py-[7.47px]">
                    <div className="relative mt-[-0.75px] w-fit whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      С залогом
                    </div>
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[7.47px] rounded-[74.74px] bg-gray-90 px-[14.95px] py-[7.47px]">
                    <div className="relative mt-[-0.75px] w-fit whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                      Без залога
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-start gap-[14.95px] self-stretch">
                <div className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                  <div className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                    <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Марка
                    </div>

                    <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                      Audi
                    </div>
                  </div>

                  <div className="relative size-[17.94px] rotate-90">
                    <img
                      className="absolute left-[-951px] top-[13574px] size-[18px] -rotate-90"
                      alt="Vector"
                    />

                    <img
                      className="absolute left-[3px] top-[5px] h-[7px] w-full md:w-[13px] -rotate-90"
                      alt="Vector"
                      src="/img/autocredit/vector.svg"
                    />
                  </div>
                </div>

                <div className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                  <div className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                    <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Модель
                    </div>

                    <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                      A7 Sportback
                    </div>
                  </div>

                  <div className="relative size-[17.94px] rotate-90">
                    <img
                      className="absolute left-[-951px] top-[13748px] size-[18px] -rotate-90"
                      alt="Vector"
                    />

                    <img
                      className="absolute left-[3px] top-[5px] h-[7px] w-full md:w-[13px] -rotate-90"
                      alt="Vector"
                      src="/img/autocredit/vector.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-start gap-[14.95px] self-stretch">
                <div className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                  <div className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                    <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Год выпуска
                    </div>

                    <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                      2004
                    </div>
                  </div>

                  <div className="relative size-[17.94px] rotate-90">
                    <img
                      className="absolute left-[-1036px] top-[13574px] size-[18px] -rotate-90"
                      alt="Vector"
                    />

                    <img
                      className="absolute left-[3px] top-[5px] h-[7px] w-full md:w-[13px] -rotate-90"
                      alt="Vector"
                      src="/img/autocredit/vector.svg"
                    />
                  </div>
                </div>

                <div className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                  <div className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                    <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Первый взнос (руб.)
                    </div>

                    <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                      150 000
                    </div>
                  </div>

                  <div className="relative size-[17.94px] rotate-90">
                    <img
                      className="absolute left-[-1036px] top-[13748px] size-[18px] -rotate-90"
                      alt="Vector"
                    />

                    <img
                      className="absolute left-[3px] top-[5px] h-[7px] w-full md:w-[13px] -rotate-90"
                      alt="Vector"
                      src="/img/autocredit/vector.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-start gap-[14.95px] self-stretch">
                <div className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                  <div className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                    <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Срок (месяцы)
                    </div>

                    <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                      24
                    </div>
                  </div>

                  <div className="relative size-[17.94px] rotate-90">
                    <div className="relative left-[-1121px] top-[13574px] size-[18px]">
                      <img
                        className="absolute left-0 top-0 size-[18px] -rotate-90"
                        alt="Vector"
                      />

                      <img
                        className="absolute left-[3px] top-2.5 h-[11px] w-1.5 -rotate-90"
                        alt="Vector"
                        src="/img/autocredit/vector.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px] opacity-0">
                  <div className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                    <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                      Первый взнос (руб.)
                    </div>

                    <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                      150 000
                    </div>
                  </div>

                  <div className="relative size-[17.94px] rotate-90">
                    <div className="relative left-[-1121px] top-[13748px] size-[18px]">
                      <img
                        className="absolute left-0 top-0 size-[18px] -rotate-90"
                        alt="Vector"
                      />

                      <img
                        className="absolute left-[3px] top-2.5 h-[11px] w-1.5 -rotate-90"
                        alt="Vector"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex w-full md:w-[393.9px] flex-col items-start gap-[23.92px] self-stretch p-[29.9px]">
              <div className="relative self-stretch text-[23.9px] font-medium leading-[29.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                Выберите условия
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[20.5px]">
                <div className="relative mx-[-1.49px] mt-[-1.49px] flex w-full md:w-[337.09px] flex-[0_0_auto] items-start justify-end gap-[11.96px] rounded-[11.96px] border-[1.49px] border-solid border-[#3573fc] bg-[#ffffff] p-[17.94px]">
                  <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[11.96px] md:w-auto w-full self-stretch">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[7.47px] self-stretch">
                      <div className="relative mt-[-0.75px] flex-1 text-[14.9px] font-medium leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        Ваши условия
                      </div>

                      <div className="relative ml-[-13855.74px] mt-[-753.75px] size-[20.93px] bg-[100%_100%]">
                        <img
                          className="absolute left-[-14133px] top-[-754px] h-2.5w-full md:w-[15px]"
                          alt="Vector"
                          src="/img/autocredit/vector-7.svg"
                        />
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-[17.94px] self-stretch">
                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          Ежемесячный платеж
                        </div>

                        <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                          187, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex w-full md:w-[91.19px] flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          Сумма
                        </div>

                        <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                          2, 560, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex w-full md:w-[59.8px] flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          Ставка
                        </div>

                        <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                          3,5%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full md:w-[334.11px] flex-[0_0_auto] items-start justify-end gap-[11.96px] rounded-[11.96px] bg-[#ffffff] p-[17.94px]">
                  <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[11.96px] md:w-auto w-full">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[7.47px] self-stretch">
                      <div className="relative mt-[-0.75px] flex-1 text-[14.9px] font-medium leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        Увеличенный первоначальный взнос
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-[17.94px] self-stretch">
                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          Ежемесячный платеж
                        </div>

                        <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                          166, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex w-full md:w-[91.19px] flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          Сумма
                        </div>

                        <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                          2, 450, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex w-full md:w-[59.8px] flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          Ставка
                        </div>

                        <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-[#00b235] [font-family:'Roboto',Helvetica]">
                          3,2%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full md:w-[334.11px] flex-[0_0_auto] items-start justify-end gap-[11.96px] rounded-[11.96px] bg-[#ffffff] p-[17.94px]">
                  <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[11.96px] md:w-auto w-full">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[7.47px] self-stretch">
                      <div className="relative mt-[-0.75px] flex-1 text-[14.9px] font-medium leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        Увеличенный срок
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start gap-[17.94px] self-stretch">
                      <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          Ежемесячный платеж
                        </div>

                        <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                          96, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex w-full md:w-[91.19px] flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          Сумма
                        </div>

                        <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                          2, 640, 000 ₽
                        </div>
                      </div>

                      <div className="relative flex w-full md:w-[59.8px] flex-col items-start gap-[1.49px]">
                        <div className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          Ставка
                        </div>

                        <div className="relative self-stretch text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                          3,6%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <img
            className="absolute left-[1053px] top-44 h-[568px] w-full md:w-[619px]"
            alt="Vector"
            src="/img/autocredit/vector-4-3.svg"
          />
        </div>
      </div>

      <Advantages />

      <motion.div
        ref={ref6}
        initial={{ opacity: 0, y: 50 }}
        animate={inView6 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 md:gap-12 self-stretch"
      >
        <motion.div
          ref={ref7}
          initial={{ opacity: 0, y: 50 }}
          animate={inView7 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-4 self-stretch"
        >
          <motion.p
            ref={ref8}
            initial={{ opacity: 0, y: 50 }}
            animate={inView8 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative mt-[-1.00px] self-stretch text-center text-[36px] md:text-5xl font-medium leading-[44px] md:leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
          >
            Управление, учёт <br />и проверка залоговых объектов
          </motion.p>

          <motion.p
            ref={ref9}
            initial={{ opacity: 0, y: 50 }}
            animate={inView9 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="relative w-full md:w-[704px] text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
          >
            Отдельный интерфейс позволяет контролировать весь жизненный цикл
            залогов — от проверки до снятия с учёта.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref10}
          initial={{ opacity: 0, y: 50 }}
          animate={inView10 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          className="flex-col md:!flex-row relative flex w-full md:w-[1376px] flex-[0_0_auto] items-center gap-6 rounded-3xl"
        >
          <Marquee
            fade
            className="relative flex md:h-[609px] md:p-0 p-7 w-full flex-1 grow gap-1 self-stretch rounded-[32px] bg-[#f9fafd]"
            innerClassName="!w-[750px]"
          >
            <div className="md:absolute left-0 top-44 flex w-60 flex-col items-center justify-center gap-5 rounded-[32px] bg-[#ffffff] px-4 py-6">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-6 self-stretch">
                <img
                  className="relative h-[120px] w-full self-stretch"
                  alt="Screenshot"
                  src="/img/screenshot-11.png"
                />

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch p-2">
                  <p className="relative mt-[-1.00px] self-stretch text-xl font-medium leading-[26px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    BMW 7 серии Long (электрический)
                  </p>

                  <div className="relative self-stretch text-base font-semibold leading-6 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    8 876 000 ₽
                  </div>
                </div>
              </div>
            </div>

            <div className="md:absolute top-44 flex w-60 flex-col items-center justify-center gap-5 rounded-[32px] bg-[#ffffff] px-4 py-6">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-6 self-stretch">
                <img
                  className="relative h-[120px] w-full self-stretch"
                  alt="Screenshot"
                  src="/img/screenshot-13.png"
                />

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch p-2">
                  <div className="relative mt-[-1.00px] self-stretch text-xl font-medium leading-[26px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    Новый BMW M4 Coupe
                  </div>

                  <div className="relative self-stretch text-base font-semibold leading-6 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    12 324 000 ₽
                  </div>
                </div>
              </div>
            </div>

            <div className="md:absolute right-0 top-44 flex w-60 flex-col items-center justify-center gap-5 rounded-[32px]  bg-[#ffffff] px-4 py-6">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-6 self-stretch">
                <img
                  className="relative h-[120px] w-full self-stretch"
                  alt="Screenshot"
                  src="/img/screenshot-12.png"
                />

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch p-2">
                  <div className="relative mt-[-1.00px] self-stretch text-xl font-medium leading-[26px] tracking-normal text-gray-70 [font-family:'Roboto',Helvetica]">
                    BMW 218i Gran Coupe
                  </div>

                  <div className="relative self-stretch text-base font-semibold leading-6 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    9 453 000 ₽
                  </div>
                </div>
              </div>
            </div>
          </Marquee>

          <div className="md:relative flex flex-1 grow flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafd] p-7 md:py-12 md:pl-12 md:pr-[68px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView10 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 self-stretch"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                Проверка
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
              >
                Система подключается к внешним источникам и автоматически
                запрашивает до 100 параметров. Включены данные о регистрации,
                ДТП, страховке и ограничениях. Проверка проходит быстро и без
                участия оператора.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView10 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 self-stretch"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.9 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                Контроль
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 1.0 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
              >
                Модуль отслеживает постановку и снятие объектов с учёта. Видно,
                какие активы находятся в залоге, на каком этапе они находятся.
                Вся информация обновляется в режиме реального времени.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView10 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 1.1 }}
              className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 self-stretch"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 1.2 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                Управление
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 1.3 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]"
              >
                Интерфейс позволяет управлять залогами, назначать ответственных
                и повторно запускать проверки. Доступна история действий,
                формирование отчётов и полный контроль за статусом объектов.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <Feedback />
      <Analytics />
      <Zaim />

      <Integrations />
      <EmployeeWork />
      <Trust />
    </div>
  );
};
