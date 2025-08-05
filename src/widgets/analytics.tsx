import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Subtract from '../icons/Subtract';

export const Analytics = () => {
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
  const ref11 = useRef(null);
  const ref12 = useRef(null);
  const ref13 = useRef(null);
  const ref14 = useRef(null);
  const ref15 = useRef(null);
  const ref16 = useRef(null);
  const ref17 = useRef(null);

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
  const inView11 = useInView(ref11, { once: true, margin: '-100px' });
  const inView12 = useInView(ref12, { once: true, margin: '-100px' });
  const inView13 = useInView(ref13, { once: true, margin: '-100px' });
  const inView14 = useInView(ref14, { once: true, margin: '-100px' });
  const inView15 = useInView(ref15, { once: true, margin: '-100px' });
  const inView16 = useInView(ref16, { once: true, margin: '-100px' });
  const inView17 = useInView(ref17, { once: true, margin: '-100px' });

  return (
    <div className="flex flex-col items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
      <motion.div 
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl leading-[60px] relative tracking-[0]"
      >
        Отчётность и аналитика
      </motion.div>

      <motion.div 
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
        className="items-start flex-[0_0_auto] bg-[#f9fafd] rounded-[32px] overflow-hidden flex relative self-stretch w-full"
      >
        <img
          className="absolute w-[926px] h-[668px] top-0 left-[450px]"
          alt="Vector"
          src="/img/widgets/vector-2-1.svg"
        />

        <motion.div 
          ref={ref3}
          initial={{ opacity: 0, x: -50 }}
          animate={inView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col items-start gap-8 p-20 relative flex-1 grow rounded-3xl overflow-hidden"
        >
          <motion.div 
            ref={ref6}
            initial={{ opacity: 0, y: 50 }}
            animate={inView6 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]"
          >
            <motion.div 
              ref={ref7}
              initial={{ opacity: 0, y: 50 }}
              animate={inView7 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
              className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]"
            >
              Отчеты и статистика
            </motion.div>

            <motion.p 
              ref={ref8}
              initial={{ opacity: 0, y: 50 }}
              animate={inView8 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
              className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]"
            >
              Более 25 отчетов, которые покрывают основные потребности
              организации.
            </motion.p>
          </motion.div>

          <motion.div 
            ref={ref9}
            initial={{ opacity: 0, y: 50 }}
            animate={inView9 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.6 }}
            className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]"
          >
            <motion.div 
              ref={ref10}
              initial={{ opacity: 0, y: 50 }}
              animate={inView10 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.7 }}
              className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]"
            >
              Аналитические сервисы
            </motion.div>

            <motion.p 
              ref={ref11}
              initial={{ opacity: 0, y: 50 }}
              animate={inView11 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.8 }}
              className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]"
            >
              Описание базы данных для работы с Tableau, Microsoft Power BI,
              Deductor и др.
            </motion.p>
          </motion.div>

          <motion.div 
            ref={ref12}
            initial={{ opacity: 0, y: 50 }}
            animate={inView12 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.9 }}
            className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]"
          >
            <motion.div 
              ref={ref13}
              initial={{ opacity: 0, y: 50 }}
              animate={inView13 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 1.0 }}
              className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]"
            >
              Интеграция с 1С
            </motion.div>

            <motion.p 
              ref={ref14}
              initial={{ opacity: 0, y: 50 }}
              animate={inView14 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
              className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]"
            >
              Позволяет полностью автоматизировать процесс обмена данными с
              программой 1С для ведения бухгалтерского учета.
            </motion.p>
          </motion.div>

          {/*<motion.div */}
          {/*  ref={ref15}*/}
          {/*  initial={{ opacity: 0, y: 50 }}*/}
          {/*  animate={inView15 ? { opacity: 1, y: 0 } : {}}*/}
          {/*  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}*/}
          {/*  className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]"*/}
          {/*>*/}
          {/*  <motion.div */}
          {/*    ref={ref16}*/}
          {/*    initial={{ opacity: 0, y: 50 }}*/}
          {/*    animate={inView16 ? { opacity: 1, y: 0 } : {}}*/}
          {/*    transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}*/}
          {/*    className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8"*/}
          {/*  >*/}
          {/*    ЕПС ready*/}
          {/*  </motion.div>*/}

          {/*  <motion.p */}
          {/*    ref={ref17}*/}
          {/*    initial={{ opacity: 0, y: 50 }}*/}
          {/*    animate={inView17 ? { opacity: 1, y: 0 } : {}}*/}
          {/*    transition={{ duration: 0.7, ease: 'easeOut', delay: 1.4 }}*/}
          {/*    className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]"*/}
          {/*  >*/}
          {/*    Система готова к переходу бухгалтерского учета на единый план*/}
          {/*    счетов (ЕПС).*/}
          {/*  </motion.p>*/}
          {/*</motion.div>*/}
        </motion.div>

        <motion.div 
          ref={ref4}
          initial={{ opacity: 0, x: 50 }}
          animate={inView4 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="relative flex-1 self-stretch grow rounded-3xl overflow-hidden"
        >
          <div className="relative w-[574px] h-[574px] top-[17px] left-[57px] rounded-[287px]">
            <div className="absolute w-[294px] h-[294px] top-[140px] left-[140px] bg-[#ffffff] rounded-[147px] blur-[6px]" />

            <div className="absolute w-[444px] h-[444px] top-[65px] left-[65px] rounded-[222px] border-2 border-solid border-[#ffffff] opacity-80" />

            <div className="absolute w-[574px] h-[574px] top-0 left-0 rounded-[287px] border-2 border-solid border-[#ffffff] opacity-40" />

            <div className="absolute w-[319px] h-[319px] top-[127px] left-32">
              <div className="absolute w-[356px] h-[337px] top-[-18px] left-[-29px]">
                <div className="absolute w-[356px] h-[260px] top-[76px] left-0">
                  <div className="absolute w-[356px] h-[253px] top-[7px] left-0">
                    <Subtract
                      className="absolute w-[152px] h-[253px] top-0 left-[29px]"
                      color="#00CB82"
                    />

                    <Subtract
                      className="absolute w-[151px] h-[151px] top-[103px] left-[197px]"
                      color="#00CB82"
                    />

                    <div className="inline-flex flex-col items-center gap-0.5 absolute top-[55px] left-[87px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-base tracking-[0] leading-6 whitespace-nowrap">
                        Баланс
                      </div>

                      <div className="w-fit [font-family:'Poppins',Helvetica] font-normal text-[#1c222f] text-[40px] leading-[52px] whitespace-nowrap relative tracking-[0]">
                        4,385.40 ₽
                      </div>
                    </div>

                    <div className="inline-flex px-3 py-1.5 absolute top-[188px] left-[298px] bg-[#ffffff33] border-[none] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] items-center justify-center gap-2 rounded-[100px]">
                      <div className="[font-family:'Inter',Helvetica] font-medium text-[#1c222f] text-base leading-6 relative w-fit mt-[-1.00px] tracking-[0] whitespace-nowrap">
                        24%
                      </div>
                    </div>

                    <div className="inline-flex px-3 py-1.5 absolute top-40 left-0 bg-[#ffffff33] border-[none] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] items-center justify-center gap-2 rounded-[100px]">
                      <div className="[font-family:'Inter',Helvetica] font-medium text-[#1c222f] text-base leading-6 relative w-fit mt-[-1.00px] tracking-[0] whitespace-nowrap">
                        36%
                      </div>
                    </div>
                  </div>

                  <Subtract
                    className="absolute w-[53px] h-[94px] top-0 left-[295px]"
                    color="#00CB82"
                  />
                </div>

                <div className="absolute w-[145px] h-[78px] top-0 left-[81px]">
                  <Subtract
                    className="absolute w-[145px] h-[60px] top-[18px] left-0"
                    color="#00CB82"
                  />

                  <div className="inline-flex px-3 py-1.5 absolute top-0 left-3.5 bg-[#ffffff33] border-[none] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] items-center justify-center gap-2 rounded-[100px]">
                    <div className="[font-family:'Inter',Helvetica] font-medium text-[#1c222f] text-base leading-6 relative w-fit mt-[-1.00px] tracking-[0] whitespace-nowrap">
                      20%
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute w-[70px] h-[57px] -top-0.5 left-[211px]">
                <Subtract
                  className="absolute w-[51px] h-[41px] top-4 left-0"
                  color="#00CB82"
                />

                <div className="inline-flex px-3 py-1.5 absolute top-0 left-[22px] bg-[#ffffff33] border-[none] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] items-center justify-center gap-2 rounded-[100px]">
                  <div className="[font-family:'Inter',Helvetica] font-medium text-[#1c222f] text-base leading-6 relative w-fit mt-[-1.00px] tracking-[0] whitespace-nowrap">
                    8%
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex px-3 py-1.5 absolute top-[204px] left-[427px] bg-[#ffffff33] border-[none] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] items-center justify-center gap-2 rounded-[100px]">
              <div className="[font-family:'Inter',Helvetica] font-medium text-[#1c222f] text-base leading-6 relative w-fit mt-[-1.00px] tracking-[0] whitespace-nowrap">
                12%
              </div>
            </div>

            <motion.div 
              ref={ref5}
              initial={{ opacity: 0, y: 20 }}
              animate={inView5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              className="flex w-72 items-start p-1 absolute top-[497px] left-[143px] bg-[#ffffff] rounded-[100px]"
            >
              <div className="flex px-3 py-2 relative flex-1 grow bg-[#1c222f] items-center justify-center gap-2 rounded-[100px]">
                <div className="w-fit mt-[-1.00px] font-body-2-r font-[number:var(--body-2-r-font-weight)] text-[#ffffff] text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] whitespace-nowrap relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                  Неделя
                </div>
              </div>

              <div className="flex px-3 py-2 relative flex-1 grow items-center justify-center gap-2 rounded-[100px]">
                <div className="relative w-fit mt-[-1.00px] font-body-2-r font-[number:var(--body-2-r-font-weight)] text-[#9ea7bb] text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)] whitespace-nowrap [font-style:var(--body-2-r-font-style)]">
                  Месяц
                </div>
              </div>

              <div className="flex px-3 py-2 relative flex-1 grow items-center justify-center gap-2 rounded-[100px]">
                <div className="relative w-fit mt-[-1.00px] font-body-2-r font-[number:var(--body-2-r-font-weight)] text-[#9ea7bb] text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)] whitespace-nowrap [font-style:var(--body-2-r-font-style)]">
                  Год
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
