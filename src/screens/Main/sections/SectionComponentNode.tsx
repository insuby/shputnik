import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '../../../routes-path.tsx';

export const SectionComponentNode = () => {
  const navigate = useNavigate();
  
  const handleP2PClick = () => {
    navigate(RoutesPath.P2P);
  };

  const handleIslamFinansClick = () => {
    navigate(RoutesPath.ISLAMFINANCE);
  };

  const ref32 = useRef<HTMLSpanElement>(null);
  const ref33 = useRef<HTMLSpanElement>(null);
  const ref34 = useRef<HTMLDivElement>(null);
  const ref34r = useRef<HTMLDivElement>(null);
  const ref35 = useRef<HTMLDivElement>(null);
  const ref36 = useRef<HTMLDivElement>(null);
  const inView32 = useInView(ref32, { once: true, margin: '-100px' });
  const inView33 = useInView(ref33, { once: true, margin: '-100px' });
  const inView34 = useInView(ref34, { once: true, margin: '-100px' });
  const inView34r = useInView(ref34r, { once: true, margin: '-100px' });
  const inView35 = useInView(ref35, { once: true, margin: '-100px' });
  const inView36 = useInView(ref36, { once: true, margin: '-100px' });
  return (
    <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
      <p className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[40px] leading-10 relative tracking-[0]">
        <motion.span
          id="animate_32"
          ref={ref32}
          initial={{ opacity: 0, x: -40 }}
          animate={inView32 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-medium text-[#9ea7bb] leading-[0.1px]"
        >
          Альтернативные
          <br />
        </motion.span>
        <motion.span
          id="animate_33"
          ref={ref33}
          initial={{ opacity: 0, x: 40 }}
          animate={inView33 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-medium text-[#1c222f] leading-[48px]"
        >
          и этичные модели
        </motion.span>
      </p>

      <div className="flex w-full h-[520px] items-start gap-4 relative">
        <div className="relative self-stretch w-[686px] bg-[#f9fafd] rounded-[32px] overflow-hidden">
          <div className="relative h-[682px]">
            <img
              className="absolute w-[686px] h-[520px] top-0 left-0"
              alt="Vector"
              src="/img/vector-1-5.svg"
            />

            <motion.div
              id="animate_33"
              ref={ref34}
              initial={{ opacity: 0, y: 40 }}
              animate={inView34 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex w-[304px] top-[66px] left-[62px] bg-green-50 rounded-[32px] overflow-hidden flex-col items-center justify-center absolute"
            >
              <div className="flex-col items-center justify-center gap-5 p-5 self-stretch w-full flex-[0_0_auto] flex relative">
                <img
                  className="absolute w-[345px] h-[330px] top-3 left-[-49px]"
                  alt="Vector"
                  src="/img/vector-1-2.svg"
                />

                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <p className="w-fit opacity-0 [font-family:'Inter',Helvetica] font-semibold text-gray-90 text-base leading-4 relative tracking-[0]">
                    <span className="text-[#9ea7bb] leading-6">Привет,</span>

                    <span className="text-[#1c222f] leading-6"> Давид</span>
                  </p>

                  <div className="relative w-8 h-8 rounded-3xl [background:url(/img/frame-1948755022.png)_50%_50%_/_cover]" />
                </div>

                <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                  <div className="w-fit mt-[-1.00px] opacity-80 [font-family:'Inter',Helvetica] font-normal text-[#ffffff] text-sm leading-5 whitespace-nowrap relative tracking-[0]">
                    Баланс
                  </div>

                  <div className="w-fit [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-[28px] text-center leading-10 whitespace-nowrap relative tracking-[0]">
                    122,000₽
                  </div>
                </div>

                <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-2 px-2.5 py-1.5 relative flex-[0_0_auto] bg-[#ffffff29] rounded-2xl">
                    <img
                      className="relative w-3.5 h-3.5"
                      alt="Arrow line down"
                      src="/img/arrowlinedown-1.svg"
                    />

                    <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] text-white text-xs leading-4 whitespace-nowrap relative font-normal tracking-[0]">
                      Вывести
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center gap-2 px-2.5 py-1.5 relative flex-[0_0_auto] bg-[#ffffff29] rounded-2xl">
                    <img
                      className="relative w-3.5 h-3.5"
                      alt="Arrow line down"
                      src="/img/arrowlinedown.svg"
                    />

                    <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] text-white text-xs leading-4 whitespace-nowrap relative font-normal tracking-[0]">
                      Пополнить
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] rounded-3xl">
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex h-[72px] items-start gap-4 p-1 relative self-stretch w-full bg-[#f2f5ff] rounded-2xl overflow-hidden">
                    <div className="flex flex-col items-start p-3 relative flex-1 grow">
                      <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-xs tracking-[0] leading-4 whitespace-nowrap">
                        Мои инвестиции
                      </div>

                      <div className="relative w-fit font-medium text-gray-90 text-base leading-6 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                        42 000₽
                      </div>
                    </div>

                    <div className="flex flex-col w-[88px] items-start p-3 relative bg-[#eaedf7] rounded-xl">
                      <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-xs tracking-[0] leading-4 whitespace-nowrap">
                        Интерес
                      </div>

                      <div className="relative w-fit font-medium text-gray-90 text-base leading-6 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                        1 200₽
                      </div>
                    </div>
                  </div>

                  <div className="h-[72px] gap-4 p-1 bg-[#f2f5ff] rounded-2xl flex items-start relative self-stretch w-full">
                    <div className="flex flex-col items-start p-3 relative flex-1 grow">
                      <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] text-[#7a86a2] text-xs leading-4 whitespace-nowrap relative font-normal tracking-[0]">
                        Мои займы
                      </div>

                      <div className="w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base leading-6 whitespace-nowrap relative tracking-[0]">
                        134 000₽
                      </div>
                    </div>

                    <div className="flex flex-col w-[88px] items-start p-3 relative bg-[#eaedf7] rounded-xl">
                      <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] text-[#7a86a2] text-xs leading-4 whitespace-nowrap relative font-normal tracking-[0]">
                        Платеж
                      </div>

                      <div className="relative w-fit font-medium text-gray-90 text-base leading-6 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                        9 000₽
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-70 text-xs leading-4 whitespace-nowrap relative tracking-[0]">
                    Инвестиции
                  </div>

                  <div className="h-24 items-start gap-4 p-1 self-stretch w-full bg-[#f2f5ff] rounded-2xl flex relative">
                    <div className="flex flex-col items-start gap-2 p-3 relative flex-1 grow">
                      <div className="relative w-fit mt-[-1.00px] font-medium text-gray-90 text-base leading-6 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                        80 000₽
                      </div>

                      <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-start relative flex-1 grow">
                          <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] text-[#7a86a2] text-xs leading-4 whitespace-nowrap relative font-normal tracking-[0]">
                            Интерес
                          </div>

                          <div className="w-fit font-normal text-gray-90 text-xs leading-4 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                            14%
                          </div>
                        </div>

                        <div className="flex flex-col items-start relative flex-1 grow">
                          <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] text-[#7a86a2] text-xs leading-4 whitespace-nowrap relative font-normal tracking-[0]">
                            Интерес
                          </div>

                          <div className="w-fit font-normal text-gray-90 text-xs leading-4 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                            14%
                          </div>
                        </div>

                        <div className="inline-flex items-center justify-center gap-2 px-2.5 py-1.5 relative flex-[0_0_auto] bg-gray-90 rounded-2xl">
                          <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] text-white text-xs leading-4 whitespace-nowrap relative font-normal tracking-[0]">
                            Вложить
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-60 h-24 items-start gap-4 p-1 relative bg-[#f2f5ff] rounded-2xl">
                    <div className="flex flex-col items-start gap-2 p-3 relative flex-1 grow">
                      <div className="relative w-fit mt-[-1.00px] font-medium text-gray-90 text-base leading-6 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                        80 000₽
                      </div>

                      <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-start relative flex-1 grow">
                          <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] text-[#7a86a2] text-xs leading-4 whitespace-nowrap relative font-normal tracking-[0]">
                            Интерес
                          </div>

                          <div className="w-fit font-normal text-gray-90 text-xs leading-4 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                            14%
                          </div>
                        </div>

                        <div className="flex flex-col items-start relative flex-1 grow">
                          <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] text-[#7a86a2] text-xs leading-4 whitespace-nowrap relative font-normal tracking-[0]">
                            Интерес
                          </div>

                          <div className="w-fit font-normal text-gray-90 text-xs leading-4 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                            14%
                          </div>
                        </div>

                        <div className="inline-flex items-center justify-center gap-2 px-2.5 py-1.5 relative flex-[0_0_auto] bg-gray-90 rounded-2xl">
                          <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] text-white text-xs leading-4 whitespace-nowrap relative font-normal tracking-[0]">
                            Вложить
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <img
              className="w-[629px] h-[520px] left-[57px] absolute top-0"
              alt="Vector"
              src="/img/vector-4-3.svg"
            />

            <motion.div
              id="animate_34_right"
              ref={ref34r}
              initial={{ opacity: 0, x: 40 }}
              animate={inView34r ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="inline-flex flex-col items-start justify-center gap-4 p-8 absolute top-[138px] left-[298px] bg-white rounded-[32px]"
            >
              <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                <div className="w-[180px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm leading-5 relative tracking-[0]">
                  Общий доход
                </div>

                <div className="w-[264px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl leading-7 relative tracking-[0]">
                  1,567,000₽
                </div>
              </div>

              <div className="inline-flex h-[154px] items-end relative">
                <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="w-8 h-[76px] bg-[#f2f4fb] relative rounded-3xl" />

                  <div className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                    01.05
                  </div>
                </div>

                <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="w-8 h-[86px] bg-[#f2f4fb] relative rounded-3xl" />

                  <div className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                    02.05
                  </div>
                </div>

                <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="w-8 h-[105px] bg-[#f2f4fb] relative rounded-3xl" />

                  <div className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                    03.05
                  </div>
                </div>

                <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="w-8 h-[120px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)] relative rounded-3xl" />

                  <div className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                    04.05
                  </div>
                </div>

                <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="w-8 h-[91px] bg-[#f2f4fb] relative rounded-3xl" />

                  <div className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                    06.05
                  </div>
                </div>

                <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="w-8 h-[98px] bg-[#f2f4fb] relative rounded-3xl" />

                  <div className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                    07.05
                  </div>
                </div>
              </div>

              <img
                className="absolute w-[328px] h-[104px] top-[106px] left-0"
                alt="Vector"
                src="/img/vector-147-1.svg"
              />

              <div className="absolute w-3 h-3 top-[131px] left-[180px] bg-[#ffffff] rounded-md border-2 border-solid border-[#00cb82]" />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-5 relative flex-1 self-stretch grow">
          <motion.div
            id="animate_35_left"
            ref={ref35}
            initial={{ opacity: 0, x: -40 }}
            animate={inView35 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            onClick={handleP2PClick}
            className="group flex items-center gap-8 p-10 w-full mt-[-2.00px] ml-[-2.00px] mr-[-2.00px] bg-[#f9fafd] hover:bg-[#f5f7ff] cursor-pointer border-2 border-solid hover:border-[#3573fc] border-transparent relative flex-1 self-stretch grow rounded-[32px] overflow-hidden"
          >
            <div className="flex flex-col items-start gap-2 relative flex-1 grow">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                P2P-кредитование
              </div>

              <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]">
                Готовая платформа для запуска собственной P2P-площадки кредитования — для бизнеса и физических лиц. Поддерживает разные модели и автоматизирует полный цикл — от подачи заявки до возврата и учёта.
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
            id="animate_36_right"
            ref={ref36}
            initial={{ opacity: 0, x: 40 }}
            animate={inView36 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            onClick={handleIslamFinansClick}
            className="group flex items-center gap-8 p-10 relative flex-1 self-stretch w-full grow bg-[#f9fafd] hover:bg-[#f5f7ff] cursor-pointer border-2 border-solid hover:border-[#3573fc] border-transparent  rounded-3xl overflow-hidden"
          >
            <div className="flex flex-col items-start gap-2 relative flex-1 grow">
              <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                Исламское финансирование
              </div>

              <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]">
                Готовая платформа для запуска собственной P2P-площадки кредитования — для бизнеса и физических лиц. Поддерживает разные модели и автоматизирует полный цикл — от подачи заявки до возврата и учёта.
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