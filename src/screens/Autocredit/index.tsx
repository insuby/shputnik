import { Marquee } from '@devnomic/marquee';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

import { useRef } from 'react';

import { Advantages } from '../../widgets/advantages.tsx';
import { Analytics } from '../../widgets/analytics.tsx';
import { EmployeeWork } from '../../widgets/employe-work.tsx';
import { useFeedbackForm } from '../../widgets/feedback-form';
import { Feedback } from '../../widgets/feedback.tsx';
import { Integrations } from '../../widgets/integrations.tsx';
import { Trust } from '../../widgets/trust.tsx';
import { Zaim } from '../../widgets/zaim.tsx';

export const Autocredit = () => {
  const { setIsOpen } = useFeedbackForm();
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

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col w-[1440px] items-center gap-[136px] pt-8 pb-[136px] px-8 relative flex-[0_0_auto]">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]"
      >
        <div className="flex flex-col h-[628px] items-start gap-20 p-12 relative self-stretch w-full bg-blue-50 rounded-[32px] overflow-hidden">
          <img
            className="absolute w-[954px] h-[842px] -top-16 left-[430px]"
            alt="Vector"
            src="https://c.animaapp.com/mdbwdb25WGmSiu/img/vector-1-9.svg"
          />

          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 relative flex-[0_0_auto] bg-[#ffffff14] rounded-[100px]">
              <div className="w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[#ffffff] text-[length:var(--body-3-r-font-size)] leading-[var(--body-3-r-line-height)] whitespace-nowrap relative tracking-[var(--body-3-r-letter-spacing)] [font-style:var(--body-3-r-font-style)]">
                О продукте
              </div>
            </div>

            <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 relative flex-[0_0_auto] bg-[#ffffff14] rounded-[100px]">
                <img
                  className="relative w-5 h-5"
                  alt="File text"
                  src="/img/filetext.svg"
                />

                <div className="relative w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[#ffffff] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)]">
                  Спецификация
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col w-[624px] justify-center gap-12 flex-[0_0_auto] flex items-start relative">
            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
              <motion.div
                ref={ref2}
                initial={{ opacity: 0, y: 50 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                className="relative w-[624px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-6xl tracking-[0] leading-[68px]"
              >
                Займ под залог автомобиля
              </motion.div>

              <motion.p
                ref={ref3}
                initial={{ opacity: 0, y: 50 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                className="relative w-[624px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffcc] text-xl tracking-[0] leading-7"
              >
                Программное обеспечение для автоматизации залоговых займов.
                Программное обеспечение для автоматизации залоговых займов.
              </motion.p>
            </div>

            <motion.button
              ref={ref4}
              initial={{ opacity: 0, y: 20 }}
              animate={inView4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              className="all-[unset] box-border px-8 py-4 relative flex-[0_0_auto] bg-[#ffffff] inline-flex items-center justify-center gap-2.5 rounded-[100px]"
            >
              <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
                Записаться на презентацию
              </div>
            </motion.button>
          </div>

          <motion.div
            ref={ref5}
            initial={{ opacity: 0, x: 50 }}
            animate={inView5 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            className="inline-flex items-center absolute top-[154px] left-[704px] bg-[#f6f8fd] rounded-[23.92px_23.92px_0px_0px] overflow-hidden"
          >
            <div className="flex flex-col w-[393.9px] items-start gap-[23.92px] p-[29.9px] relative bg-[#ffffff]">
              <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[23.9px] leading-[29.9px] relative tracking-[0]">
                Калькулятор
              </div>

              <div className="flex items-center gap-[11.96px] p-[11.96px] relative self-stretch w-full flex-[0_0_auto] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0]">
                <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow">
                  <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                    Дилер
                  </div>

                  <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] tracking-[0] leading-[20.9px]">
                    Макс Моторс
                  </div>
                </div>

                <div className="relative w-[17.94px] h-[17.94px] rotate-90">
                  <img
                    className="absolute w-[18px] h-[18px] top-[13748px] left-[-758px] -rotate-90"
                    alt="Vector"
                  />

                  <img
                    className="absolute w-[13px] h-[7px] top-[5px] left-[3px] -rotate-90"
                    alt="Vector"
                    src="https://c.animaapp.com/mdbwdb25WGmSiu/img/vector.svg"
                  />
                </div>
              </div>

              <div className="inline-flex flex-col items-start gap-[11.96px] relative flex-[0_0_auto]">
                <div className="inline-flex items-start gap-[8.97px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-[7.47px] px-[14.95px] py-[7.47px] relative flex-[0_0_auto] bg-gray-90 rounded-[74.74px]">
                    <div className="relative w-fit mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffff] text-[14.9px] tracking-[0] leading-[20.9px] whitespace-nowrap">
                      Новая
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center gap-[7.47px] px-[14.95px] py-[7.47px] relative flex-[0_0_auto] bg-[#f7f9ff] rounded-[74.74px]">
                    <div className="relative w-fit mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] tracking-[0] leading-[20.9px] whitespace-nowrap">
                      Подержанная
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-start gap-[8.97px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-[7.47px] px-[14.95px] py-[7.47px] relative flex-[0_0_auto] bg-[#f7f9ff] rounded-[74.74px]">
                    <div className="relative w-fit mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] tracking-[0] leading-[20.9px] whitespace-nowrap">
                      С залогом
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center gap-[7.47px] px-[14.95px] py-[7.47px] relative flex-[0_0_auto] bg-gray-90 rounded-[74.74px]">
                    <div className="relative w-fit mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffff] text-[14.9px] tracking-[0] leading-[20.9px] whitespace-nowrap">
                      Без залога
                    </div>
                  </div>
                </div>
              </div>

              <div className="items-start gap-[14.95px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="h-[61.29px] items-center gap-[11.96px] p-[11.96px] flex-1 grow rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] flex relative">
                  <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow mt-[-0.06px] mb-[-0.06px]">
                    <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                      Марка
                    </div>

                    <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] tracking-[0] leading-[20.9px]">
                      Audi
                    </div>
                  </div>

                  <div className="relative w-[17.94px] h-[17.94px] rotate-90">
                    <img
                      className="absolute w-[18px] h-[18px] top-[13574px] left-[-951px] -rotate-90"
                      alt="Vector"
                    />

                    <img
                      className="absolute w-[13px] h-[7px] top-[5px] left-[3px] -rotate-90"
                      alt="Vector"
                      src="https://c.animaapp.com/mdbwdb25WGmSiu/img/vector.svg"
                    />
                  </div>
                </div>

                <div className="h-[61.29px] items-center gap-[11.96px] p-[11.96px] flex-1 grow rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] flex relative">
                  <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow mt-[-0.06px] mb-[-0.06px]">
                    <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                      Модель
                    </div>

                    <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] tracking-[0] leading-[20.9px]">
                      A7 Sportback
                    </div>
                  </div>

                  <div className="relative w-[17.94px] h-[17.94px] rotate-90">
                    <img
                      className="absolute w-[18px] h-[18px] top-[13748px] left-[-951px] -rotate-90"
                      alt="Vector"
                    />

                    <img
                      className="absolute w-[13px] h-[7px] top-[5px] left-[3px] -rotate-90"
                      alt="Vector"
                      src="https://c.animaapp.com/mdbwdb25WGmSiu/img/vector.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="items-start gap-[14.95px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="h-[61.29px] items-center gap-[11.96px] p-[11.96px] flex-1 grow rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] flex relative">
                  <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow mt-[-0.06px] mb-[-0.06px]">
                    <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                      Год выпуска
                    </div>

                    <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] tracking-[0] leading-[20.9px]">
                      2004
                    </div>
                  </div>

                  <div className="relative w-[17.94px] h-[17.94px] rotate-90">
                    <img
                      className="absolute w-[18px] h-[18px] top-[13574px] left-[-1036px] -rotate-90"
                      alt="Vector"
                    />

                    <img
                      className="absolute w-[13px] h-[7px] top-[5px] left-[3px] -rotate-90"
                      alt="Vector"
                      src="https://c.animaapp.com/mdbwdb25WGmSiu/img/vector.svg"
                    />
                  </div>
                </div>

                <div className="h-[61.29px] items-center gap-[11.96px] p-[11.96px] flex-1 grow rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] flex relative">
                  <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow mt-[-0.06px] mb-[-0.06px]">
                    <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                      Первый взнос (руб.)
                    </div>

                    <div className="font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative self-stretch [font-family:'Roboto',Helvetica] tracking-[0]">
                      150 000
                    </div>
                  </div>

                  <div className="relative w-[17.94px] h-[17.94px] rotate-90">
                    <img
                      className="absolute w-[18px] h-[18px] top-[13748px] left-[-1036px] -rotate-90"
                      alt="Vector"
                    />

                    <img
                      className="absolute w-[13px] h-[7px] top-[5px] left-[3px] -rotate-90"
                      alt="Vector"
                      src="https://c.animaapp.com/mdbwdb25WGmSiu/img/vector.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="items-start gap-[14.95px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="h-[61.29px] items-center gap-[11.96px] p-[11.96px] flex-1 grow rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] flex relative">
                  <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow mt-[-0.06px] mb-[-0.06px]">
                    <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                      Срок (месяцы)
                    </div>

                    <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] tracking-[0] leading-[20.9px]">
                      24
                    </div>
                  </div>

                  <div className="relative w-[17.94px] h-[17.94px] rotate-90">
                    <div className="relative w-[18px] h-[18px] top-[13574px] left-[-1121px]">
                      <img
                        className="absolute w-[18px] h-[18px] top-0 left-0 -rotate-90"
                        alt="Vector"
                      />

                      <img
                        className="absolute w-1.5 h-[11px] top-2.5 left-[3px] -rotate-90"
                        alt="Vector"
                        src="https://c.animaapp.com/mdbwdb25WGmSiu/img/vector.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="h-[61.29px] items-center gap-[11.96px] p-[11.96px] flex-1 grow rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] opacity-0 flex relative">
                  <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow mt-[-0.06px] mb-[-0.06px]">
                    <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                      Первый взнос (руб.)
                    </div>

                    <div className="font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative self-stretch [font-family:'Roboto',Helvetica] tracking-[0]">
                      150 000
                    </div>
                  </div>

                  <div className="relative w-[17.94px] h-[17.94px] rotate-90">
                    <div className="relative w-[18px] h-[18px] top-[13748px] left-[-1121px]">
                      <img
                        className="absolute w-[18px] h-[18px] top-0 left-0 -rotate-90"
                        alt="Vector"
                      />

                      <img
                        className="absolute w-1.5 h-[11px] top-2.5 left-[3px] -rotate-90"
                        alt="Vector"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[393.9px] items-start gap-[23.92px] p-[29.9px] relative self-stretch">
              <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[23.9px] leading-[29.9px] relative tracking-[0]">
                Выберите условия
              </div>

              <div className="inline-flex flex-col items-start gap-[20.5px] relative flex-[0_0_auto]">
                <div className="flex w-[337.09px] items-start justify-end gap-[11.96px] p-[17.94px] relative flex-[0_0_auto] mt-[-1.49px] ml-[-1.49px] mr-[-1.49px] bg-[#ffffff] rounded-[11.96px] border-[1.49px] border-solid border-[#3573fc]">
                  <div className="flex flex-col items-center justify-center gap-[11.96px] relative flex-1 self-stretch grow">
                    <div className="flex items-center justify-center gap-[7.47px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex-1 mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                        Ваши условия
                      </div>

                      <div className="relative w-[20.93px] h-[20.93px] mt-[-753.75px] ml-[-13855.74px] bg-[100%_100%]">
                        <img
                          className="absolute w-[15px] h-2.5 top-[-754px] left-[-14133px]"
                          alt="Vector"
                          src="https://c.animaapp.com/mdbwdb25WGmSiu/img/vector-7.svg"
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-[17.94px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow">
                        <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                          Ежемесячный платеж
                        </div>

                        <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                          187, 000 ₽
                        </div>
                      </div>

                      <div className="flex flex-col w-[91.19px] items-start gap-[1.49px] relative">
                        <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                          Сумма
                        </div>

                        <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                          2, 560, 000 ₽
                        </div>
                      </div>

                      <div className="flex-col w-[59.8px] items-start gap-[1.49px] flex relative">
                        <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                          Ставка
                        </div>

                        <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                          3,5%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[334.11px] items-start justify-end gap-[11.96px] p-[17.94px] flex-[0_0_auto] bg-[#ffffff] rounded-[11.96px] flex relative">
                  <div className="flex flex-col items-center justify-center gap-[11.96px] relative flex-1 grow">
                    <div className="flex items-center justify-center gap-[7.47px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex-1 mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                        Увеличенный первоначальный взнос
                      </div>
                    </div>

                    <div className="flex items-start gap-[17.94px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow">
                        <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                          Ежемесячный платеж
                        </div>

                        <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                          166, 000 ₽
                        </div>
                      </div>

                      <div className="flex flex-col w-[91.19px] items-start gap-[1.49px] relative">
                        <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                          Сумма
                        </div>

                        <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                          2, 450, 000 ₽
                        </div>
                      </div>

                      <div className="flex-col w-[59.8px] items-start gap-[1.49px] flex relative">
                        <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                          Ставка
                        </div>

                        <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#00b235] text-[14.9px] leading-[20.9px] relative tracking-[0]">
                          3,2%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[334.11px] items-start justify-end gap-[11.96px] p-[17.94px] flex-[0_0_auto] bg-[#ffffff] rounded-[11.96px] flex relative">
                  <div className="flex flex-col items-center justify-center gap-[11.96px] relative flex-1 grow">
                    <div className="flex items-center justify-center gap-[7.47px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex-1 mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                        Увеличенный срок
                      </div>
                    </div>

                    <div className="flex items-start gap-[17.94px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow">
                        <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                          Ежемесячный платеж
                        </div>

                        <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                          96, 000 ₽
                        </div>
                      </div>

                      <div className="flex flex-col w-[91.19px] items-start gap-[1.49px] relative">
                        <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                          Сумма
                        </div>

                        <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                          2, 640, 000 ₽
                        </div>
                      </div>

                      <div className="flex-col w-[59.8px] items-start gap-[1.49px] flex relative">
                        <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[10.5px] leading-[14.9px] relative tracking-[0]">
                          Ставка
                        </div>

                        <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
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
            className="absolute w-[619px] h-[568px] top-44 left-[1053px]"
            alt="Vector"
            src="https://c.animaapp.com/mdbwdb25WGmSiu/img/vector-4-3.svg"
          />
        </div>
      </motion.div>

      <Advantages />

      <motion.div
        ref={ref6}
        initial={{ opacity: 0, y: 50 }}
        animate={inView6 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]"
      >
        <motion.div
          ref={ref7}
          initial={{ opacity: 0, y: 50 }}
          animate={inView7 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]"
        >
          <motion.p
            ref={ref8}
            initial={{ opacity: 0, y: 50 }}
            animate={inView8 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center leading-[60px] relative tracking-[0]"
          >
            Управление, учёт <br />и проверка залоговых объектов
          </motion.p>

          <motion.p
            ref={ref9}
            initial={{ opacity: 0, y: 50 }}
            animate={inView9 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="w-[704px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl text-center leading-7 relative tracking-[0]"
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
          className="w-[1376px] items-center gap-6 flex-[0_0_auto] rounded-3xl flex relative"
        >
          <Marquee
            fade
            className="h-[609px] flex gap-1 w-full relative flex-1 self-stretch grow bg-[#f9fafd] rounded-[32px]"
            innerClassName="!w-full"
          >
            <div className="flex flex-col w-60 items-center justify-center gap-5 px-4 py-6 absolute top-44 left-[186px] bg-[#ffffff] rounded-[32px]">
              <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative self-stretch w-full h-[120px]"
                  alt="Screenshot"
                  src="/img/screenshot-11.png"
                />

                <div className="flex-col gap-3 p-2 self-stretch w-full flex-[0_0_auto] flex items-start relative">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-70 text-xl tracking-[0] leading-[26px]">
                    BMW 7 серии Long (электрический)
                  </p>

                  <div className="font-semibold text-[#9ea7bb] text-base leading-6 relative self-stretch [font-family:'Roboto',Helvetica] tracking-[0]">
                    8 876 000 ₽
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-60 items-center justify-center gap-5 px-4 py-6 absolute top-44 left-[296px] bg-[#ffffff] rounded-[32px]">
              <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative self-stretch w-full h-[120px]"
                  alt="Screenshot"
                  src="/img/screenshot-13.png"
                />

                <div className="flex-col gap-3 p-2 self-stretch w-full flex-[0_0_auto] flex items-start relative">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-70 text-xl tracking-[0] leading-[26px]">
                    Новый BMW M4 Coupe
                  </div>

                  <div className="self-stretch font-semibold text-[#9ea7bb] text-base leading-6 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                    12 324 000 ₽
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-60 items-center justify-center gap-5 px-4 py-6 absolute top-44 left-[552px] bg-[#ffffff] rounded-[32px]">
              <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative self-stretch w-full h-[120px]"
                  alt="Screenshot"
                  src="/img/screenshot-12.png"
                />

                <div className="flex-col gap-3 p-2 self-stretch w-full flex-[0_0_auto] flex items-start relative">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-70 text-xl tracking-[0] leading-[26px]">
                    BMW 218i Gran Coupe
                  </div>

                  <div className="self-stretch font-semibold text-[#9ea7bb] text-base leading-6 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                    9 453 000 ₽
                  </div>
                </div>
              </div>
            </div>
          </Marquee>

          <div className="flex flex-col items-start gap-7 pl-12 pr-[68px] py-12 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={inView10 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
              className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]"
              >
                Проверка
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
                className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]"
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
              className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.9 }}
                className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]"
              >
                Контроль
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 1.0 }}
                className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]"
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
              className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 1.2 }}
                className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]"
              >
                Управление
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={inView10 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 1.3 }}
                className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]"
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
