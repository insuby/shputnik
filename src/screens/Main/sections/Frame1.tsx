import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

export const Frame1 = () => {
  const ref37l = useRef<HTMLSpanElement>(null);
  const ref37r = useRef<HTMLSpanElement>(null);
  const ref38 = useRef<HTMLParagraphElement>(null);
  const ref39 = useRef<HTMLParagraphElement>(null);
  const ref40 = useRef<HTMLDivElement>(null);
  const ref41l = useRef<HTMLDivElement>(null);
  const ref41 = useRef<HTMLDivElement>(null);
  const ref42 = useRef<HTMLDivElement>(null);
  const ref42r = useRef<HTMLDivElement>(null);
  const ref43r = useRef<HTMLDivElement>(null);
  const ref44 = useRef<HTMLDivElement>(null);
  const ref46l = useRef<HTMLDivElement>(null);
  const ref47r = useRef<HTMLParagraphElement>(null);
  const inView37l = useInView(ref37l, { once: false, margin: '-100px' });
  const inView37r = useInView(ref37r, { once: false, margin: '-100px' });
  const inView38 = useInView(ref38, { once: false, margin: '-100px' });
  const inView39 = useInView(ref39, { once: false, margin: '-100px' });
  const inView40 = useInView(ref40, { once: false, margin: '-100px' });
  const inView41l = useInView(ref41l, { once: false, margin: '-100px' });
  const inView41 = useInView(ref41, { once: false, margin: '-100px' });
  const inView42 = useInView(ref42, { once: false, margin: '-100px' });
  const inView42r = useInView(ref42r, { once: false, margin: '-100px' });
  const inView43r = useInView(ref43r, { once: false, margin: '-100px' });
  const inView44 = useInView(ref44, { once: false, margin: '-100px' });
  const inView46l = useInView(ref46l, { once: false, margin: '-100px' });
  const inView47r = useInView(ref47r, { once: false, margin: '-100px' });
  return (
    <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
      <p className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] leading-[48px] whitespace-nowrap relative tracking-[0]">
        <motion.span
          id="animate_37_left"
          ref={ref37l}
          initial={{ opacity: 0, x: -40 }}
          animate={inView37l ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-[#1c222f]"
        >
          Другое{' '}
        </motion.span>
        <motion.span
          id="animate_37_right"
          ref={ref37r}
          initial={{ opacity: 0, x: 40 }}
          animate={inView37r ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-[#9ea7bb]"
        >
          программное обеспечение
        </motion.span>
      </p>

      <div className="h-[600px] items-start gap-5 flex relative self-stretch w-full">
        <div className="flex items-center gap-5 relative flex-1 self-stretch grow">
          <div className="group flex flex-col items-start justify-center relative flex-1 self-stretch grow bg-[#f9fafd] hover:bg-[#f5f7ff] cursor-pointer border-2 border-solid hover:border-[#3573fc] border-transparent rounded-[32px] overflow-hidden">
            <div className="relative flex-1 self-stretch w-full grow rounded-[32px] overflow-hidden bg-[url(/img/vector-1-3.svg)] bg-[100%_100%]">
              <div className="relative w-[560px] h-[372px] top-[-49px] left-[59px]">
                <img
                  className="absolute w-[415px] h-[372px] top-0 left-[91px]"
                  alt="Vector"
                  src="/img/vector-151.svg"
                />

                <motion.div
                  id="animate_40"
                  ref={ref40}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView40 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="inline-flex flex-col items-start gap-2.5 p-2 absolute top-[100px] left-[177px] bg-[#ffffff5c] rounded-[32px]"
                >
                  <div className="flex flex-col items-start gap-2.5 p-6 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] rounded-3xl">
                    <div className="relative w-[142.55px] h-7">
                      <div className="w-[143px] h-7">
                        <div className="w-[142px] h-[29px]">
                          <div className="h-[29px]">
                            <div className="relative w-[142px] h-[29px]">
                              <img
                                className="absolute w-6 h-[29px] top-0 left-0"
                                alt="Group"
                                src="/img/group-3-1.png"
                              />

                              <img
                                className="absolute w-[23px] h-[25px] top-0.5 left-[30px]"
                                alt="Fill"
                                src="/img/fill-4.svg"
                              />

                              <img
                                className="absolute w-[22px] h-[25px] top-0.5 left-[60px]"
                                alt="Fill"
                                src="/img/fill-8.svg"
                              />

                              <img
                                className="absolute w-[23px] h-[25px] top-0.5 left-[88px]"
                                alt="Fill"
                                src="/img/fill-10.svg"
                              />

                              <img
                                className="absolute w-6 h-[25px] top-0.5 left-[117px]"
                                alt="Fill"
                                src="/img/fill-14.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute w-[560px] h-[104px] top-[262px] left-0">
                  <motion.div
                    id="animate_41_left"
                    ref={ref41l}
                    initial={{ opacity: 0, x: -40 }}
                    animate={inView41l ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="inline-flex flex-col items-start gap-2.5 p-6 absolute top-0 left-0 bg-[#ffffff] rounded-3xl"
                  >
                    <img
                      className="relative w-[57.34px] h-[58px] mt-[-1.32px] mb-[-0.67px] ml-[-0.67px] mr-[-0.67px]"
                      alt="Group"
                      src="/img/Group%2032.svg"
                    />
                  </motion.div>

                  <motion.div
                    id="animate_41"
                    ref={ref41}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView41 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="inline-flex flex-col items-start gap-2.5 p-6 absolute top-0 left-[152px] bg-[#ffffff] rounded-3xl"
                  >
                    <img
                      className="relative w-14 h-14"
                      alt="Clip path group"
                      src="/img/OKB_logo%201.svg"
                    />
                  </motion.div>

                  <motion.div
                    id="animate_42"
                    ref={ref42}
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView42 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="inline-flex flex-col items-start gap-2.5 p-6 absolute top-0 left-[456px] bg-[#ffffff] rounded-3xl"
                  >
                    <img
                      className="relative w-14 h-14"
                      alt="Clip path group"
                      src="/img/Clip%20path%20group.svg"
                    />
                  </motion.div>

                  <motion.div
                    id="animate_42_right"
                    ref={ref42r}
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView42r ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="inline-flex flex-col items-start gap-2.5 p-6 absolute top-0 left-[304px] bg-[#ffffff] rounded-3xl"
                  >
                    <img
                      className="relative w-14 h-14"
                      alt="Okb logo"
                      src="/img/nbki-logo%201.svg"
                    />
                  </motion.div>
                </div>

                <img
                  className="absolute w-0.5 h-10 top-[184px] left-[279px]"
                  alt="Vector"
                  src="/img/vector-148.svg"
                />

                <img
                  className="absolute w-[458px] h-[39px] top-[223px] left-[49px]"
                  alt="Vector"
                  src="/img/vector-149.svg"
                />

                <img
                  className="absolute w-[149px] h-[39px] top-[223px] left-[204px]"
                  alt="Vector"
                  src="/img/vector-150.svg"
                />
              </div>
            </div>

            <div className="flex items-end gap-8 p-10 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <motion.p
                  id="animate_38"
                  ref={ref38}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView38 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]"
                >
                  Выгрузка данных в кредитные бюро
                </motion.p>

                <motion.p
                  id="animate_39"
                  ref={ref39}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView39 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]"
                >
                  Готовое решение для передачи данных в кредитные бюро. Подходит для МФО, лизинговых, коллекторских и других компаний, обязанных направлять информацию в соответствии с требованиями законодательства
                </motion.p>
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
            </div>
          </div>
          <div className="flex flex-col items-start justify-center relative flex-1 self-stretch grow bg-[#f9fafd] hover:bg-[#f5f7ff] cursor-pointer border-2 border-solid hover:border-[#3573fc] border-transparent  rounded-[32px] overflow-hidden">
            <div className="relative flex-1 self-stretch w-full grow rounded-[32px] overflow-hidden">
              <div className="relative w-full h-[446px]">
                <motion.div
                  id="animate_44"
                  ref={ref44}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView44 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="flex flex-col items-start justify-center gap-1 p-3 absolute top-[84px] left-[49px] bg-white rounded-[32px]"
                >
                  <div className="inline-flex items-end justify-end gap-1 p-4 relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                      <div className="relative w-[180px] mt-[-1.00px] font-normal text-[#7a86a2] text-sm leading-5 [font-family:'Roboto',Helvetica] tracking-[0]">
                        ID 1232342345346
                      </div>

                      <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                        <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 whitespace-nowrap relative tracking-[0]">
                          Давид Иванов
                        </div>

                        <div className="w-6 h-6 justify-center gap-2.5 p-2 bg-green-50 rounded-[20px] flex items-center relative">
                          <img
                            className="relative w-4 h-4 mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] mr-[-4.00px]"
                            alt="Check"
                            src="/img/check-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center gap-[53px] p-4 relative flex-1 grow bg-blue-50 rounded-2xl">
                      <div className="flex items-start relative flex-1 grow flex-col gap-0.5">
                        <div className="self-stretch mt-[-1.00px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-white text-sm leading-5 relative tracking-[0]">
                          Балл
                        </div>

                        <div className="self-stretch [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-[28px] leading-10 relative tracking-[0]">
                          0.82
                        </div>
                      </div>
                    </div>

                    <img
                      className="relative flex-1 self-stretch grow"
                      alt="Frame"
                      src="/img/frame-31.svg"
                    />
                  </div>

                  <div className="flex-col gap-3 p-4 flex-[0_0_auto] flex items-start relative self-stretch w-full">
                    <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-sm tracking-[0] leading-5">
                        Пол
                      </div>

                      <div className="w-20 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-sm leading-5 relative tracking-[0]">
                        Мужской
                      </div>
                    </div>

                    <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-sm tracking-[0] leading-5">
                        Дата рождения
                      </div>

                      <div className="relative w-20 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-sm tracking-[0] leading-5">
                        13.10.2025
                      </div>
                    </div>

                    <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-sm tracking-[0] leading-5">
                        Семейное положение
                      </div>

                      <div className="w-20 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-sm leading-5 relative tracking-[0]">
                        Женат
                      </div>
                    </div>

                    <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-sm tracking-[0] leading-5">
                        Заработная плата
                      </div>

                      <div className="w-20 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-sm leading-5 relative tracking-[0]">
                        220,000₽
                      </div>
                    </div>
                  </div>
                </motion.div>

                <img
                  className="absolute w-[678px] h-[368px] top-0 left-0"
                  alt="Vector"
                  src="/img/vector-1-4.svg"
                />

                <motion.div
                  id="animate_43_right"
                  ref={ref43r}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView43r ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="flex flex-col w-80 items-start justify-center gap-3 p-6 absolute top-[38px] left-[312px] bg-white rounded-[32px]"
                >
                  <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto] rounded-3xl">
                    <div className="relative w-[68px] h-[148px] bg-green-50 rounded-[20px] overflow-hidden">
                      <div className="absolute top-[57px] left-3.5 font-medium text-white text-2xl leading-8 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                        900
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                        Одобрение
                      </div>

                      <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative self-stretch mt-[-1.00px] font-normal text-[#7a86a2] text-sm leading-5 [font-family:'Roboto',Helvetica] tracking-[0]">
                          850 будут возвращены
                        </div>

                        <div className="relative self-stretch font-normal text-[#7a86a2] text-sm leading-5 [font-family:'Roboto',Helvetica] tracking-[0]">
                          50 не будут возвращены
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto] rounded-3xl">
                    <div className="relative self-stretch w-[68px] bg-red-50 rounded-[20px] overflow-hidden">
                      <div className="absolute top-[29px] left-[13px] font-medium text-white text-2xl leading-8 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                        100
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                        Отказ
                      </div>

                      <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative self-stretch mt-[-1.00px] font-normal text-[#7a86a2] text-sm leading-5 [font-family:'Roboto',Helvetica] tracking-[0]">
                          90 по умолчанию
                        </div>

                        <div className="relative self-stretch font-normal text-[#7a86a2] text-sm leading-5 [font-family:'Roboto',Helvetica] tracking-[0]">
                          10 положительных
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="group flex items-end gap-8 p-10 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <motion.div
                  id="animate_46_left"
                  ref={ref46l}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView46l ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]"
                >
                  Модуль принятия решений
                </motion.div>

                <motion.p
                  id="animate_47_right"
                  ref={ref47r}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView47r ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]"
                >
                  Гибкое ПО для скоринга и проверки физлиц и юрлиц — с подключением десятков внешних источников для верификации и обогащения данных
                </motion.p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
