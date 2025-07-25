import { motion, useInView } from 'framer-motion';

import { useRef, useState } from 'react';
import Slider from 'react-slick';

import { HeroButtons } from '../../components/ui/hero-buttons.tsx';
import { Advantages } from '../../widgets/advantages.tsx';
import { Analytics } from '../../widgets/analytics.tsx';
import { EmployeeWork } from '../../widgets/employe-work.tsx';
import { useFeedbackForm } from '../../widgets/feedback-form';
import { Integrations } from '../../widgets/integrations.tsx';
import { RoleStructure } from '../../widgets/role-structure.tsx';
import { Trust } from '../../widgets/trust.tsx';
import { Zaim } from '../../widgets/zaim.tsx';

export const MicroCredit = () => {
  const { setIsOpen } = useFeedbackForm();

  const sliderRef = useRef<Slider>(null);

  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);
  const ref6 = useRef<HTMLDivElement>(null);
  const ref9 = useRef<HTMLDivElement>(null);

  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView4 = useInView(ref4, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref6, { once: true, margin: '-100px' });
  const inView9 = useInView(ref9, { once: true, margin: '-100px' });

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col w-[1440px] items-center gap-[136px] pt-8 pb-[136px] px-8 relative flex-[0_0_auto]">
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col h-[600px] items-start gap-20 p-12 relative self-stretch w-full bg-violet-50 rounded-[32px] overflow-hidden">
          <img
            className="absolute w-[1108px] h-[1060px] top-[-140px] left-[441px]"
            alt="Vector"
            src="/img/vector-1-5.svg"
          />

          <HeroButtons buttonText="Узнать больше">
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, y: 50 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col w-[624px] items-start justify-center gap-12 relative flex-[0_0_auto]"
            >
              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <div className="relative w-[624px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-6xl tracking-[0] leading-[68px]">
                  Микрофинансовое кредитование
                </div>

                <p className="relative w-[624px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffff99] text-xl tracking-[0] leading-7">
                  Программа для автоматизации всех бизнес-процессов МФО онлайн и
                  в точках продаж. Программа для автоматизации всех
                  бизнес-процессов МФО онлайн и в точках продаж.
                </p>
              </div>
            </motion.div>
          </HeroButtons>

          <motion.div
            ref={ref4}
            initial={{ opacity: 0, x: 50 }}
            animate={inView4 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex w-[324px] absolute top-[142px] left-[786px] flex-col items-center justify-center gap-6 p-4 bg-[#ffffff] rounded-[32px]"
          >
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-5 pt-3 pb-4 px-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                  Оформить заявку
                </div>

                <div className="flex flex-col w-64 items-start gap-2 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-full h-3.5">
                    <div className="relative w-[261px] h-3 top-px left-[-3px]">
                      <img
                        className="absolute w-[260px] h-1 top-1 left-px"
                        alt="Vector"
                        src="/img/vector-136-1.svg"
                      />

                      <img
                        className="absolute w-[169px] h-1.5 top-[3px] left-0"
                        alt="Vector"
                        src="/img/vector-137.svg"
                      />

                      <div className="absolute w-3 h-3 top-0 left-[158px] bg-green-50 rounded-md shadow-[0px_4px_8px_#04ca8333]" />
                    </div>
                  </div>

                  <div className="relative self-stretch w-full h-6">
                    <div className="left-0 font-normal text-[#7a86a2] absolute -top-px [font-family:'Roboto',Helvetica] text-base tracking-[0] leading-6 whitespace-nowrap">
                      0
                    </div>

                    <div className="absolute -top-px left-[131px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                      122 000
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-64 items-start gap-2 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-full h-3.5">
                    <div className="relative w-[261px] h-3 top-px left-[-3px]">
                      <img
                        className="absolute w-[260px] h-1 top-1 left-px"
                        alt="Vector"
                        src="/img/vector-136.svg"
                      />

                      <img
                        className="absolute w-[95px] h-1.5 top-[3px] left-0"
                        alt="Vector"
                        src="/img/vector-137-2.svg"
                      />

                      <div className="absolute w-3 h-3 top-0 left-[86px] bg-green-50 rounded-md shadow-[0px_4px_8px_#04ca8333]" />
                    </div>
                  </div>

                  <div className="relative self-stretch w-full h-6">
                    <div className="left-0 font-normal text-[#7a86a2] absolute -top-px [font-family:'Roboto',Helvetica] text-base tracking-[0] leading-6 whitespace-nowrap">
                      0
                    </div>

                    <div className="left-20 font-medium text-gray-90 absolute -top-px [font-family:'Roboto',Helvetica] text-base tracking-[0] leading-6 whitespace-nowrap">
                      14
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 self-stretch w-full relative flex-[0_0_auto]">
                <div className="flex flex-col items-start px-4 py-3 relative flex-1 grow bg-[#f6f8ff] rounded-[20px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-base tracking-[0] leading-6 whitespace-nowrap">
                    Сумма
                  </div>

                  <div className="relative w-fit mr-[-2.33px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                    42 000₽
                  </div>
                </div>

                <div className="flex flex-col items-start px-4 py-3 relative flex-1 grow bg-[#f6f8ff] rounded-[20px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-base tracking-[0] leading-6 whitespace-nowrap">
                    Срок
                  </div>

                  <div className="relative w-fit mr-[-0.33px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                    14 дней
                  </div>
                </div>

                <div className="flex flex-col items-start px-4 py-3 relative flex-1 grow bg-[#f6f8ff] rounded-[20px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-base tracking-[0] leading-6 whitespace-nowrap">
                    Ставка
                  </div>

                  <div className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                    2.5%
                  </div>
                </div>
              </div>

              <button
                onClick={onClick}
                className="all-[unset] box-border flex h-12 gap-8 px-8 py-3 relative self-stretch w-full bg-gray-90 rounded-3xl items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="self-stretch w-[164px] mt-[-1.00px] font-medium text-[#ffffff] text-base text-center leading-6 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                  Оформить займ
                </div>
              </button>
            </div>
          </motion.div>

          <img
            className="absolute w-[817px] h-[600px] top-0 left-[559px]"
            alt="Vector"
            src="/img/vector-3.svg"
          />

          <motion.div
            ref={ref5}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView5 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex flex-col items-center justify-center gap-3 p-4 absolute top-[254px] left-[1062px] bg-[#ffffff] rounded-[32px]"
          >
            <div className="inline-flex items-center gap-2.5 p-3 rounded-[100px] relative flex-[0_0_auto]">
              <div className="relative w-[184px] h-[184px]">
                <div className="relative h-[184px]">
                  <div className="absolute w-[184px] h-[184px] top-0 left-0">
                    <img
                      className="absolute w-[88px] h-[184px] top-0 left-0"
                      alt="Subtract"
                      src="/img/subtract-8.svg"
                    />

                    <img
                      className="absolute w-[88px] h-[108px] top-[76px] left-24"
                      alt="Subtract"
                      src="/img/subtract-7.svg"
                    />

                    <div className="inline-flex flex-col h-[62px] items-center gap-0.5 absolute top-[61px] left-8">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-sm tracking-[0] leading-5 whitespace-nowrap">
                        Вся сумма
                      </div>

                      <div className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[28px] text-center tracking-[0] leading-10 whitespace-nowrap">
                        122,000₽
                      </div>
                    </div>
                  </div>

                  <img
                    className="absolute w-[21px] h-[34px] top-[34px] left-[158px]"
                    alt="Subtract"
                    src="/img/subtract-9.svg"
                  />

                  <img
                    className="absolute w-[59px] h-[31px] top-0 left-24"
                    alt="Subtract"
                    src="/img/subtract-10.svg"
                  />
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-2.5 p-5 bg-[#f6f8ff] rounded-[20px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-2 h-2 bg-blue-50 rounded" />

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm tracking-[0] leading-5">
                  Текущее
                </div>

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right tracking-[0] leading-5">
                  48,456₽
                </div>
              </div>

              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-2 h-2 bg-green-50 rounded" />

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm tracking-[0] leading-5">
                  Основная
                </div>

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right tracking-[0] leading-5">
                  122,000₽
                </div>
              </div>

              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-2 h-2 bg-yellow-50 rounded" />

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm tracking-[0] leading-5">
                  Проценты
                </div>

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right tracking-[0] leading-5">
                  4,000₽
                </div>
              </div>

              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-2 h-2 bg-red-50 rounded" />

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm tracking-[0] leading-5">
                  Штраф
                </div>

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right tracking-[0] leading-5">
                  2,700₽
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Advantages />
      <motion.div
        ref={ref6}
        initial={{ opacity: 0, y: 50 }}
        animate={inView6 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative w-[1376px] h-[652px]"
      >
        <div className="relative w-[1376px] h-[568px]">
          <div className="w-[1472px] gap-[68px] absolute top-0 left-0 flex items-center">
            <div className="flex flex-col w-[496px] items-start justify-center gap-8 relative">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl tracking-[0] leading-[60px]">
                Основные механизмы работы
                <br />с клиентами
              </div>

              <button
                onClick={onClick}
                className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-blue-50 rounded-[100px] items-center justify-center cursor-pointer"
              >
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-xl tracking-[0] leading-7 whitespace-nowrap">
                  Попробовать
                </div>
              </button>
            </div>

            <div className="w-[915px]">
              <Slider
                ref={sliderRef}
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={2}
                slidesToScroll={1}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
                className="p2p-slider"
              >
                <div className="px-3">
                  <div className="w-[443px] h-[480px] items-center gap-12 p-12 relative bg-[#f9fafd] rounded-[32px] overflow-hidden flex flex-col">
                    <img
                      className="absolute w-[443px] h-[467px] top-0 left-0"
                      alt="Vector"
                      src="https://c.animaapp.com/mdjatawb8n1lvi/img/vector-1-1.svg"
                    />

                    <div className="relative flex-1 self-stretch w-full grow">
                      <div className="inline-flex flex-col gap-6 p-4 relative top-[27px] left-10 items-center justify-center bg-[#ffffff] rounded-[32px]">
                        <div className="flex flex-col w-[230px] items-start gap-5 pt-3 pb-0 px-4 relative flex-[0_0_auto]">
                          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative self-stretch w-full h-3.5">
                              <div className="relative w-[203px] h-3 top-px left-[-3px]">
                                <img
                                  className="absolute w-[202px] h-1 top-1 left-px"
                                  alt="Vector"
                                  src="https://c.animaapp.com/mdjatawb8n1lvi/img/vector-136.svg"
                                />

                                <img
                                  className="absolute w-[169px] h-1.5 top-[3px] left-0"
                                  alt="Vector"
                                  src="https://c.animaapp.com/mdjatawb8n1lvi/img/vector-137.svg"
                                />

                                <div className="absolute w-3 h-3 top-0 left-[158px] bg-green-50 rounded-md shadow-[0px_4px_8px_#04ca8333]" />
                              </div>
                            </div>

                            <div className="relative self-stretch w-full h-6">
                              <div className="left-0 font-normal text-[#7a86a2] absolute -top-px [font-family:'Roboto',Helvetica] text-base tracking-[0] leading-6 whitespace-nowrap">
                                0
                              </div>

                              <div className="absolute -top-px left-[131px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                                122 000
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="self-stretch mt-[-1.00px] text-2xl text-center leading-8 relative [font-family:'Roboto',Helvetica] font-medium text-gray-90 tracking-[0]">
                        Подача заявок
                      </div>

                      <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl text-center tracking-[0] leading-7">
                        Клиент может самостоятельно пройти регистрацию и подать
                        заявку на займ через сайт, менеджер может сделать эти
                        действия через специальный интерфейс. Если клиент ушел
                        со страницы он всегда может продолжить заполнение
                        заявки.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="w-[443px] h-[480px] items-center gap-12 p-12 relative bg-[#f9fafd] rounded-[32px] overflow-hidden flex flex-col">
                    <img
                      className="absolute w-[377px] h-[467px] top-0 left-0"
                      alt="Vector"
                      src="https://c.animaapp.com/mdjatawb8n1lvi/img/vector-1-6.svg"
                    />

                    <div className="relative flex-1 self-stretch w-full grow">
                      <div className="relative w-[290px] h-24 top-[26px] left-7">
                        <div className="flex w-[235px] items-center justify-center gap-4 p-2 absolute top-7 left-7 bg-[#ffffff] rounded-[32px] opacity-[0.24]">
                          <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#fbab0014] rounded-[100px]">
                            <div className="mt-[-1968.00px] ml-[-7711.00px] opacity-0 relative w-6 h-6 bg-[100%_100%]">
                              <div className="relative w-4 h-[15px] top-[-1968px] left-[-7711px]">
                                <img
                                  className="absolute w-1.5 h-[3px] top-0 left-0"
                                  alt="Vector"
                                />

                                <img
                                  className="absolute w-4 h-[15px] top-0 left-0"
                                  alt="Vector"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="relative flex-1 opacity-0 [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6">
                            Ваша заявка одобрена
                          </div>
                        </div>

                        <div className="flex w-[266px] items-center justify-center gap-4 p-2 absolute top-4 left-3 bg-[#ffffff] rounded-[32px] opacity-50">
                          <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#fbab0014] rounded-[100px]">
                            <div className="mt-[-1954.00px] ml-[-7695.00px] relative w-6 h-6 bg-[100%_100%]">
                              <div className="relative w-[18px] h-5 top-0.5 left-[3px]">
                                <img
                                  className="absolute w-2 h-[5px] top-[15px] left-[5px]"
                                  alt="Vector"
                                  src="https://c.animaapp.com/mdjatawb8n1lvi/img/vector.svg"
                                />

                                <img
                                  className="absolute w-[18px] h-[17px] top-0 left-0"
                                  alt="Vector"
                                  src="https://c.animaapp.com/mdjatawb8n1lvi/img/vector-2.svg"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex-1 text-base leading-6 relative [font-family:'Roboto',Helvetica] font-medium text-gray-90 tracking-[0]">
                            Ваша заявка одобрена
                          </div>
                        </div>

                        <div className="flex w-[290px] gap-4 p-2 absolute top-0 left-0 items-center justify-center bg-[#ffffff] rounded-[32px]">
                          <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#fbab0014] rounded-[100px]">
                            <div className="mt-[-1938.00px] ml-[-7683.00px] relative w-6 h-6 bg-[100%_100%]">
                              <div className="relative w-[18px] h-5 top-0.5 left-[3px]">
                                <img
                                  className="absolute w-2 h-[5px] top-[15px] left-[5px]"
                                  alt="Vector"
                                  src="https://c.animaapp.com/mdjatawb8n1lvi/img/vector.svg"
                                />

                                <img
                                  className="absolute w-[18px] h-[17px] top-0 left-0"
                                  alt="Vector"
                                  src="https://c.animaapp.com/mdjatawb8n1lvi/img/vector-2.svg"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex-1 text-base leading-6 relative [font-family:'Roboto',Helvetica] font-medium text-gray-90 tracking-[0]">
                            Ваша заявка одобрена
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="self-stretch mt-[-1.00px] text-2xl text-center leading-8 relative [font-family:'Roboto',Helvetica] font-medium text-gray-90 tracking-[0]">
                        Автооповещение
                      </div>

                      <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl text-center tracking-[0] leading-7">
                        Автоматическое информирование клиента об
                        одобрении/отказе, наступлении срока погашения, операциях
                        в личном кабинете и других важных событиях по СМС и
                        электронной почте.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="absolute w-[120px] h-14 top-[512px] p-1 left-[725px] flex items-center justify-between bg-[#f9fafd] rounded-full">
            <button
              onClick={goToPrev}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.25 12H3.75"
                  stroke="#55607A"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5 5.25L3.75 12L10.5 18.75"
                  stroke="#55607A"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="#55607A"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 5.25L20.25 12L13.5 18.75"
                  stroke="#55607A"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          ;
        </div>
      </motion.div>
      <motion.div
        ref={ref9}
        initial={{ opacity: 0, y: 50 }}
        animate={inView9 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex items-center gap-2.5 p-12 relative self-stretch w-full flex-[0_0_auto] bg-violet-50 rounded-[32px] overflow-hidden"
      >
        <img
          className="absolute w-[1108px] h-[1060px] top-[-385px] left-[420px]"
          alt="Vector"
          src="/img/vector-1-1.svg"
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
          onClick={onClick}
          className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-[#ffffff] rounded-[100px] items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
            Демонстрация
          </div>
        </button>
      </motion.div>
      ;
      <Zaim />;
      <Analytics />;
      <Integrations />;
      <EmployeeWork />;
      <RoleStructure />;
      <Trust />;
    </div>
  );
};
