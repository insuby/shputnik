import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '../../../routes-path.tsx';


export const DivWrapper = () => {
  const navigate = useNavigate();
  
  const handleBankCreditClick = () => {
    navigate(RoutesPath.BANKCREDIT);
  };

  const handleAutocreditClick = () => {
    navigate(RoutesPath.AUTOCREDIT);
  };

  const ref14 = useRef<HTMLParagraphElement>(null);
  const ref15 = useRef<HTMLDivElement>(null);
  const ref16 = useRef<HTMLDivElement>(null);
  const ref17 = useRef<HTMLDivElement>(null);
  const ref18 = useRef<HTMLDivElement>(null);
  const ref19 = useRef<HTMLDivElement>(null);
  const inView14 = useInView(ref14, { once: true, margin: '-100px' });
  const inView15 = useInView(ref15, { once: true, margin: '-100px' });
  const inView16 = useInView(ref16, { once: true, margin: '-100px' });
  const inView17 = useInView(ref17, { once: true, margin: '-100px' });
  const inView18 = useInView(ref18, { once: true, margin: '-100px' });
  const inView19 = useInView(ref19, { once: true, margin: '-100px' });
  return (
    <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
      <motion.p
        id="animate_14_left"
        ref={ref14}
        initial={{ opacity: 0, x: -40 }}
        animate={inView14 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[40px] leading-10 whitespace-nowrap relative tracking-[0]"
      >
        <span className="font-medium text-[#1c222f] leading-[48px]">
          Классическое кредитование
        </span>
      </motion.p>
      <div className="h-[600px] items-start gap-5 flex relative self-stretch w-full">
        <motion.div
          id="animate_15"
          ref={ref15}
          initial={{ opacity: 0, y: 40 }}
          animate={inView15 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-blue-50 relative flex-1 self-stretch grow rounded-[32px] overflow-hidden"
        >
          <div className="relative w-[1265px] h-[904px] top-[-254px] left-[-222px]">
            <img
              className="absolute w-[611px] h-[571px] top-[333px] left-0"
              alt="Vector"
              src="/img/vector-1-8.svg"
            />
            <img
              className="absolute w-[716px] h-[682px] top-0 left-[398px]"
              alt="Vector"
              src="/img/vector-4.svg"
            />
            <motion.div
              id="animate_16"
              ref={ref16}
              initial={{ opacity: 0, y: 40 }}
              animate={inView16 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="inline-flex items-center absolute top-[317px] left-[284px] bg-[#f6f8fd] rounded-[23.92px_23.92px_0px_0px] overflow-hidden"
            >
              <div className="flex flex-col w-[393.9px] items-start gap-[23.92px] p-[29.9px] relative bg-[#ffffff]">
                <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[23.9px] leading-[29.9px] relative tracking-[0]">
                  Калькулятор
                </div>

                <div className="flex items-center gap-[11.96px] p-[11.96px] relative self-stretch w-full flex-[0_0_auto] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0]">
                  <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow">
                    <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                      Дилер
                    </div>

                    <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                      Макс Моторс
                    </div>
                  </div>

                  <img
                    className="relative w-[17.94px] h-[17.94px]"
                    alt="Caret right"
                    src="/img/caretright.svg"
                  />
                </div>

                <div className="inline-flex flex-col items-start gap-[11.96px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-start gap-[8.97px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-[7.47px] px-[14.95px] py-[7.47px] relative flex-[0_0_auto] bg-gray-90 rounded-[74.74px]">
                      <div className="text-white relative w-fit mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[14.9px] tracking-[0] leading-[20.9px] whitespace-nowrap">
                        Новая
                      </div>
                    </div>

                    <div className="inline-flex items-center justify-center gap-[7.47px] px-[14.95px] py-[7.47px] relative flex-[0_0_auto] bg-[#f7f9ff] rounded-[74.74px]">
                      <div className="text-gray-90 relative w-fit mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[14.9px] tracking-[0] leading-[20.9px] whitespace-nowrap">
                        Подержанная
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-start gap-[8.97px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-[7.47px] px-[14.95px] py-[7.47px] relative flex-[0_0_auto] bg-[#f7f9ff] rounded-[74.74px]">
                      <div className="text-gray-90 relative w-fit mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[14.9px] tracking-[0] leading-[20.9px] whitespace-nowrap">
                        С залогом
                      </div>
                    </div>

                    <div className="inline-flex items-center justify-center gap-[7.47px] px-[14.95px] py-[7.47px] relative flex-[0_0_auto] bg-gray-90 rounded-[74.74px]">
                      <div className="text-white relative w-fit mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-[14.9px] tracking-[0] leading-[20.9px] whitespace-nowrap">
                        Без залога
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-[14.95px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex h-[61.29px] items-center gap-[11.96px] p-[11.96px] relative flex-1 grow rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0]">
                    <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow mt-[-0.06px] mb-[-0.06px]">
                      <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                        Марка
                      </div>

                      <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] tracking-[0] leading-[20.9px]">
                        Audi
                      </div>
                    </div>

                    <img
                      className="relative w-[17.94px] h-[17.94px]"
                      alt="Caret right"
                      src="/img/caretright.svg"
                    />
                  </div>

                  <div className="flex h-[61.29px] items-center gap-[11.96px] p-[11.96px] relative flex-1 grow rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0]">
                    <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow mt-[-0.06px] mb-[-0.06px]">
                      <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                        Модель
                      </div>

                      <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] tracking-[0] leading-[20.9px]">
                        A7 Sportback
                      </div>
                    </div>

                    <img
                      className="relative w-[17.94px] h-[17.94px]"
                      alt="Caret right"
                      src="/img/caretright.svg"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-[14.95px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex h-[61.29px] items-center gap-[11.96px] p-[11.96px] relative flex-1 grow rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0]">
                    <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow mt-[-0.06px] mb-[-0.06px]">
                      <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                        Год выпуска
                      </div>

                      <div className="relative self-stretch font-normal text-gray-90 text-[14.9px] leading-[20.9px] [font-family:'Roboto',Helvetica] tracking-[0]">
                        2004
                      </div>
                    </div>

                    <img
                      className="relative w-[17.94px] h-[17.94px]"
                      alt="Caret right"
                      src="/img/caretright.svg"
                    />
                  </div>

                  <div className="flex h-[61.29px] items-center gap-[11.96px] p-[11.96px] relative flex-1 grow rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0]">
                    <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow mt-[-0.06px] mb-[-0.06px]">
                      <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                        Первый взнос (руб.)
                      </div>

                      <div className="relative self-stretch font-normal text-gray-90 text-[14.9px] leading-[20.9px] [font-family:'Roboto',Helvetica] tracking-[0]">
                        150 000
                      </div>
                    </div>

                    <img
                      className="relative w-[17.94px] h-[17.94px]"
                      alt="Caret right"
                      src="/img/caretright.svg"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-[14.95px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex h-[61.29px] items-center gap-[11.96px] p-[11.96px] relative flex-1 grow rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0]">
                    <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow mt-[-0.06px] mb-[-0.06px]">
                      <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                        Срок (месяцы)
                      </div>

                      <div className="relative self-stretch font-normal text-gray-90 text-[14.9px] leading-[20.9px] [font-family:'Roboto',Helvetica] tracking-[0]">
                        24
                      </div>
                    </div>

                    <img
                      className="relative w-[17.94px] h-[17.94px]"
                      alt="Caret right"
                      src="/img/caretright.svg"
                    />
                  </div>

                  <div className="h-[61.29px] items-center gap-[11.96px] p-[11.96px] flex-1 grow rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] opacity-0 flex relative">
                    <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow mt-[-0.06px] mb-[-0.06px]">
                      <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                        Первый взнос (руб.)
                      </div>

                      <div className="relative self-stretch font-normal text-gray-90 text-[14.9px] leading-[20.9px] [font-family:'Roboto',Helvetica] tracking-[0]">
                        150 000
                      </div>
                    </div>

                    <img
                      className="relative w-[17.94px] h-[17.94px] mt-[-2948.30px] mr-[-988.89px]"
                      alt="Caret right"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[393.9px] items-start gap-[23.92px] p-[29.9px] relative self-stretch">
                <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[23.9px] leading-[29.9px] relative tracking-[0]">
                  Выберите условия
                </div>

                <div className="inline-flex flex-col items-start gap-[20.5px] relative flex-[0_0_auto]">
                  <div className="flex w-[337.09px] items-start justify-end gap-[11.96px] p-[17.94px] relative flex-[0_0_auto] mt-[-1.49px] ml-[-1.49px] mr-[-1.49px] bg-white rounded-[11.96px] border-[1.49px] border-solid border-[#3573fc]">
                    <div className="flex flex-col items-center justify-center gap-[11.96px] relative flex-1 self-stretch grow">
                      <div className="flex items-center justify-center gap-[7.47px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex-1 mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                          Ваши условия
                        </div>

                        <img
                          className="relative w-[20.93px] h-[20.93px] mt-[-2590.75px] mr-[-603.96px]"
                          alt="Check"
                          src="/img/check.svg"
                        />
                      </div>

                      <div className="flex items-start gap-[17.94px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow">
                          <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                            Ежемесячный платеж
                          </div>

                          <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                            187, 000 ₽
                          </div>
                        </div>

                        <div className="flex flex-col w-[91.19px] items-start gap-[1.49px] relative">
                          <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                            Сумма
                          </div>

                          <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                            2, 560, 000 ₽
                          </div>
                        </div>

                        <div className="flex-col w-[59.8px] items-start gap-[1.49px] flex relative">
                          <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                            Ставка
                          </div>

                          <div className="self-stretch font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative [font-family:'Roboto',Helvetica] tracking-[0]">
                            3,5%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-[334.11px] items-start justify-end gap-[11.96px] p-[17.94px] relative flex-[0_0_auto] bg-white rounded-[11.96px]">
                    <div className="flex flex-col items-center justify-center gap-[11.96px] relative flex-1 grow">
                      <div className="flex items-center justify-center gap-[7.47px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex-1 mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                          Увеличенный первоначальный взнос
                        </div>
                      </div>

                      <div className="flex items-start gap-[17.94px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow">
                          <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                            Ежемесячный платеж
                          </div>

                          <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                            166, 000 ₽
                          </div>
                        </div>

                        <div className="flex flex-col w-[91.19px] items-start gap-[1.49px] relative">
                          <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                            Сумма
                          </div>

                          <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                            2, 450, 000 ₽
                          </div>
                        </div>

                        <div className="flex-col w-[59.8px] items-start gap-[1.49px] flex relative">
                          <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                            Ставка
                          </div>

                          <div className="self-stretch font-normal text-[#00b235] text-[14.9px] leading-[20.9px] relative [font-family:'Roboto',Helvetica] tracking-[0]">
                            3,2%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-[334.11px] items-start justify-end gap-[11.96px] p-[17.94px] relative flex-[0_0_auto] bg-white rounded-[11.96px]">
                    <div className="flex flex-col items-center justify-center gap-[11.96px] relative flex-1 grow">
                      <div className="flex items-center justify-center gap-[7.47px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex-1 mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                          Увеличенный срок
                        </div>
                      </div>

                      <div className="flex items-start gap-[17.94px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-start gap-[1.49px] relative flex-1 grow">
                          <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                            Ежемесячный платеж
                          </div>

                          <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                            96, 000 ₽
                          </div>
                        </div>

                        <div className="flex flex-col w-[91.19px] items-start gap-[1.49px] relative">
                          <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                            Сумма
                          </div>

                          <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                            2, 640, 000 ₽
                          </div>
                        </div>

                        <div className="flex-col w-[59.8px] items-start gap-[1.49px] flex relative">
                          <div className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                            Ставка
                          </div>

                          <div className="self-stretch font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative [font-family:'Roboto',Helvetica] tracking-[0]">
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
              className="absolute w-[511px] h-[532px] top-[359px] left-[754px]"
              alt="Vector"
              src="/img/vector-3.svg"
            />
          </div>
        </motion.div>

        <div className="flex flex-col items-start justify-center gap-5 relative flex-1 self-stretch grow">
          <motion.div
            id="animate_17"
            ref={ref17}
            initial={{ opacity: 0, y: 40 }}
            animate={inView17 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            onClick={() => navigate(RoutesPath.BUSINESSCREDIT)}
            className="group flex items-center gap-8 p-10 relative flex-1 self-stretch w-full grow bg-[#f9fafd] hover:bg-[#f5f7ff] cursor-pointer border-2 border-solid hover:border-[#3573fc] border-transparent  rounded-[32px] overflow-hidden"
          >
            <div className="flex flex-col items-start gap-2 relative flex-1 grow">
              <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                Кредитование бизнеса
              </div>

              <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]">
                Предоставление финансирования банкам или другим финансовым институтам
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 p-4 relative flex-[0_0_auto] bg-white rounded-[100px]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-[#9FA7BC] group-hover:stroke-[#3573FC]"
              >
                <path
                  d="M12 6L22 16L12 26"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            id="animate_18"
            ref={ref18}
            initial={{ opacity: 0, y: 40 }}
            animate={inView18 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            onClick={handleBankCreditClick}
            className="group flex items-center gap-8 p-10 relative flex-1 self-stretch w-full grow bg-[#f9fafd] hover:bg-[#f5f7ff] cursor-pointer border-2 border-solid hover:border-[#3573fc] border-transparent  rounded-[32px] overflow-hidden"
          >
            <div className="flex flex-col items-start gap-2 relative flex-1 grow">
              <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                Банковское кредитование
              </div>

              <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]">
                Разновидность потребительского кредита для приобретения автотранспортных средств
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 p-4 relative flex-[0_0_auto] bg-white rounded-[100px]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-[#9FA7BC] group-hover:stroke-[#3573FC]"
              >
                <path
                  d="M12 6L22 16L12 26"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            id="animate_19"
            ref={ref19}
            initial={{ opacity: 0, y: 40 }}
            animate={inView19 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            onClick={handleAutocreditClick}
            className="group flex items-center gap-8 p-10 w-full mb-[-2.00px] ml-[-2.00px] mr-[-2.00px] bg-[#f9fafd] hover:bg-[#f5f7ff] cursor-pointer border-2 border-solid hover:border-[#3573fc] border-transparent  relative flex-1 self-stretch grow rounded-[32px] overflow-hidden"
          >
            <div className="flex flex-col items-start gap-2 relative flex-1 grow">
              <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                Автокредитование
              </div>

              <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]">
                Предоставление банком денежных средств физическим или юридическим лицам
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 p-4 relative flex-[0_0_auto] bg-white rounded-[100px]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-[#9FA7BC] group-hover:stroke-[#3573FC]"
              >
                <path
                  d="M12 6L22 16L12 26"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
