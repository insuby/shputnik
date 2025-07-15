import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

export const Div = () => {
  const ref20 = useRef<HTMLSpanElement>(null);
  const ref21 = useRef<HTMLSpanElement>(null);
  const ref22 = useRef<HTMLDivElement>(null);
  const ref23 = useRef<HTMLDivElement>(null);
  const ref24 = useRef<HTMLDivElement>(null);
  const ref25 = useRef<HTMLDivElement>(null);
  const ref26 = useRef<HTMLDivElement>(null);
  const ref27 = useRef<HTMLDivElement>(null);
  const ref28 = useRef<HTMLDivElement>(null);
  const ref29 = useRef<HTMLDivElement>(null);
  const ref30 = useRef<HTMLParagraphElement>(null);
  const ref31 = useRef<HTMLParagraphElement>(null);
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
  const inView31 = useInView(ref31, { once: true, margin: '-100px' });
  return (
    <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
      <p className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[40px] leading-10 relative tracking-[0]">
        <motion.span
          id="animate_20"
          ref={ref20}
          initial={{ opacity: 0, x: -40 }}
          animate={inView20 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-medium text-[#9ea7bb] leading-[0.1px]"
        >
          Кредитование
          <br />
        </motion.span>
        <motion.span
          id="animate_21"
          ref={ref21}
          initial={{ opacity: 0, x: 40 }}
          animate={inView21 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-medium text-[#1c222f] leading-[48px]"
        >
          в точке продаж и онлайн
        </motion.span>
      </p>
      <div className="h-[600px] items-start gap-5 flex relative self-stretch w-full">
        <div className="flex items-center gap-5 relative flex-1 self-stretch grow">
          <motion.div
            id="animate_24"
            ref={ref24}
            initial={{ opacity: 0, y: 40 }}
            animate={inView24 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="group flex flex-col items-start justify-center relative flex-1 self-stretch grow bg-[#f9fafd] hover:bg-[#f5f7ff] cursor-pointer border-2 border-solid hover:border-[#3573fc] border-transparent  rounded-[32px] overflow-hidden"
          >
            <div className="relative flex-1 self-stretch w-full grow rounded-[32px]">
              <div className="relative w-[678px] h-[401px]">
                <img
                  className="absolute w-[388px] h-[371px] top-[30px] left-[145px]"
                  alt="Vector"
                  src="/img/vector-1.svg"
                />
                <motion.div
                  id="animate_25"
                  ref={ref25}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView25 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="inline-flex items-center p-4 absolute top-12 left-12 bg-white rounded-[32px]"
                >
                  <div className="inline-flex flex-col items-start justify-center gap-2.5 p-3 relative flex-[0_0_auto]">
                    <div className="flex w-40 h-40 items-start gap-3 relative">
                      <div className="relative w-[148px] h-[148px] [background:url(/img/frame-1948755020.png)_50%_50%_/_cover]" />
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start gap-4 p-6 relative self-stretch flex-[0_0_auto] bg-[#f6f8ff] rounded-3xl">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7">
                      Наушники Beyerdynamic Amiron
                    </div>
                    <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                      <div className="flex w-[264px] h-5 items-center gap-3 relative">
                        <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm leading-5 relative tracking-[0]">
                          Стоимость
                        </div>
                        <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right leading-5 relative tracking-[0]">
                          23,456₽
                        </div>
                      </div>
                      <div className="flex w-[264px] h-5 items-center gap-3 relative">
                        <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm leading-5 relative tracking-[0]">
                          Авансовый платеж
                        </div>
                        <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right leading-5 relative tracking-[0]">
                          42,000₽
                        </div>
                      </div>
                      <div className="flex w-[264px] h-5 items-center gap-3 relative">
                        <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm leading-5 relative tracking-[0]">
                          Срок
                        </div>
                        <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right leading-5 relative tracking-[0]">
                          4,000₽
                        </div>
                      </div>
                      <div className="flex w-[264px] h-5 items-center gap-3 relative">
                        <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm leading-5 relative tracking-[0]">
                          Следующий платеж
                        </div>
                        <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right leading-5 relative tracking-[0]">
                          2,700₽
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <img
                  className="absolute w-[678px] h-[368px] top-0 left-0"
                  alt="Vector"
                  src="/img/vector-4-1.svg"
                />
                <motion.div
                  id="animate_27"
                  ref={ref27}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView27 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="inline-flex items-center gap-4 pl-4 pr-6 py-4 absolute top-[238px] left-[363px] bg-white rounded-[32px]"
                >
                  <div className="inline-flex items-center justify-center gap-8 p-4 relative flex-[0_0_auto] bg-[#f2f5ff] rounded-3xl">
                    <img
                      className="relative w-8 h-8"
                      alt="Money"
                      src="/img/money.svg"
                    />
                  </div>
                  <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                    <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-sm leading-5 whitespace-nowrap relative tracking-[0]">
                      Ежемесячный платеж
                    </div>
                    <div className="relative w-fit font-medium text-gray-90 text-xl leading-7 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                      4 950₽
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-8 p-10 pt-0 relative self-stretch w-full flex-[0_0_auto]">
              <motion.div
                id="animate_28"
                ref={ref28}
                initial={{ opacity: 0, x: -40 }}
                animate={inView28 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-2xl leading-8 relative self-stretch text-gray-90 tracking-[0]"
              >
                BNPL
              </motion.div>
              <motion.p
                id="animate_30"
                ref={ref30}
                initial={{ opacity: 0, y: 40 }}
                animate={inView30 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]"
              >
                <p className="w-10/12">
                  Программное обеспечение для быстрого запуска BNPL-рассрочки
                  (покупай сейчас — плати позже) на этапе оформления покупки —
                  как в онлайн-магазинах, так и в розничных точках.
                </p>
                <div className="inline-flex items-center gap-2.5 p-4 flex-[0_0_auto] bg-white rounded-[100px] absolute bottom-0 h-[-99px] right-0">
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
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            id="animate_22"
            ref={ref22}
            initial={{ opacity: 0, y: 40 }}
            animate={inView22 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="group flex flex-col items-start justify-center relative flex-1 self-stretch grow bg-[#f9fafd] hover:bg-[#f5f7ff] cursor-pointer border-2 border-solid hover:border-[#3573fc] border-transparent  rounded-[32px] overflow-hidden"
          >
            <div className="relative flex-1 self-stretch w-full grow rounded-[32px]">
              <div className="relative w-[543px] h-[416px] top-6 left-[67px]">
                <img
                  className="absolute w-[388px] h-[371px] top-1.5 left-[78px]"
                  alt="Vector"
                  src="/img/vector-1-1.svg"
                />
                <motion.div
                  id="animate_26"
                  ref={ref26}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView26 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="inline-flex flex-col items-start justify-center gap-4 p-8 absolute top-[26px] left-[215px] bg-white rounded-[32px]"
                >
                  <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                    <div className="w-[264px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl leading-7 relative tracking-[0]">
                      График платежей
                    </div>
                    <div className="w-[180px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm leading-5 relative tracking-[0]">
                      Договор: 12345456322
                    </div>
                  </div>
                  <div className="inline-flex h-[154px] items-end relative">
                    <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                      <div className="relative w-2 h-[76px] rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />
                      <div className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                        март
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                      <div className="w-2 h-[86px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)] relative rounded-3xl" />
                      <div className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                        апр
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                      <div className="w-2 h-[105px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)] relative rounded-3xl" />
                      <div className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                        май
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                      <div className="w-2 h-[120px] bg-[#f2f4fb] relative rounded-3xl" />
                      <div className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                        июнь
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                      <div className="w-2 h-[91px] bg-[#f2f4fb] relative rounded-3xl" />
                      <div className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                        июль
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                      <div className="w-2 h-[98px] bg-[#f2f4fb] relative rounded-3xl" />
                      <div className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                        авг
                      </div>
                    </div>
                  </div>
                  <img
                    className="absolute w-[328px] h-24 top-[109px] left-0"
                    alt="Vector"
                    src="/img/vector-147.svg"
                  />
                  <div className="absolute w-3 h-3 top-[133px] left-[156px] bg-[#ffffff] rounded-md border-2 border-solid border-[#00cb82]" />
                </motion.div>
                <img
                  className="w-[388px] h-[416px] left-3 absolute top-0"
                  alt="Vector"
                  src="/img/vector-4-2.svg"
                />
                <motion.div
                  id="animate_23"
                  ref={ref23}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView23 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="inline-flex gap-3 p-4 top-14 left-0 bg-white rounded-[32px_32px_0px_0px] flex-col items-center justify-center absolute"
                >
                  <div className="relative w-[212px] h-[212px] rounded-[100px]">
                    <div className="relative w-[198px] h-[198px] top-[7px] left-[7px]">
                      <div className="inline-flex h-[62px] items-center absolute top-[68px] left-10 flex-col gap-0.5">
                        <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-sm leading-5 whitespace-nowrap relative tracking-[0]">
                          Текущий остаток
                        </div>
                        <div className="w-fit [font-family:'Roboto',Helvetica] font-medium text-[#1c222f] text-[28px] text-center leading-10 whitespace-nowrap relative tracking-[0]">
                          44,000₽
                        </div>
                      </div>
                      <div className="absolute w-[198px] h-[198px] top-0 left-0 rounded-[99px] border-[10px] border-solid border-neutral-50" />
                      <img
                        className="absolute w-[198px] h-[198px] top-0 left-0"
                        alt="Ellipse"
                        src="/img/ellipse-32.svg"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#f6f8ff] rounded-[20px]">
                    <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-sm leading-5 whitespace-nowrap relative tracking-[0]">
                      Сумма займа
                    </div>
                    <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base leading-6 whitespace-nowrap relative tracking-[0]">
                      122, 000₽
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-8 p-10 pt-0 relative self-stretch w-full flex-[0_0_auto]">
              <motion.div
                id="animate_29"
                ref={ref29}
                initial={{ opacity: 0, x: 40 }}
                animate={inView29 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-2xl leading-8 relative self-stretch text-gray-90 tracking-[0]"
              >
                POS-кредитование
              </motion.div>
              <motion.p
                id="animate_31"
                ref={ref31}
                initial={{ opacity: 0, y: 40 }}
                animate={inView31 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]"
              >
                <p className="w-10/12">
                  Программный продукт для POS-кредитования — помогает запускать
                  оформление займов прямо во время покупки, как в физических
                  точках продаж, так и онлайн.
                </p>
                <div className="inline-flex items-center gap-2.5 p-4  flex-[0_0_auto] bg-white rounded-[100px] absolute bottom-0 h-[-99px] right-0">
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
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
