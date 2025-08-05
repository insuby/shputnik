import { motion, useInView } from 'framer-motion';



import { useRef } from 'react';



import { useFeedbackForm } from './feedback-form';


export const Feedback = () => {
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
  const ref11 = useRef(null);
  const ref12 = useRef(null);
  const ref13 = useRef(null);
  const ref14 = useRef(null);
  const ref15 = useRef(null);
  const ref16 = useRef(null);
  const ref17 = useRef(null);
  const ref18 = useRef(null);
  const ref19 = useRef(null);
  const ref20 = useRef(null);
  const ref21 = useRef(null);

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
  const inView18 = useInView(ref18, { once: true, margin: '-100px' });
  const inView19 = useInView(ref19, { once: true, margin: '-100px' });
  const inView20 = useInView(ref20, { once: true, margin: '-100px' });
  const inView21 = useInView(ref21, { once: true, margin: '-100px' });

  return (
    <div
      className="flex flex-col w-[1376px] items-start gap-2.5 p-3 relative bg-[#3573fc1f] rounded-[40px] !flex-[0_0_auto]">
      <div
        className="flex items-center gap-2.5 p-[60px] relative self-stretch w-full flex-[0_0_auto] bg-blue-50 rounded-[32px] overflow-hidden">
        <img
          className="absolute w-[620px] h-[590px] top-[-306px] left-14"
          alt="Vector"
          src="/img/feedback/vector-1.svg"
        />

        <img
          className="absolute w-[727px] h-[675px] top-[-109px] left-[666px]"
          alt="Vector"
          src="/img/feedback/vector-2-1.svg"
        />

        <div className="flex flex-col w-[696px] items-start gap-8 relative">
          <div className="flex flex-col h-[120px] items-start gap-4 relative self-stretch w-full">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, x: 80 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="self-stretch text-white text-[40px] leading-[48px] relative mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium tracking-[0]"
            >
              Попробуйте, вам понравится!
            </motion.div>

            <motion.p
              ref={ref2}
              initial={{ opacity: 0, y: 80 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="relative self-stretch opacity-60 [font-family:'Roboto',Helvetica] font-normal text-white text-xl tracking-[0] leading-7"
            >
              Оставьте заявку на демонстрацию — мы покажем, как работает
              платформа и ответим на ваши вопросы.
            </motion.p>
          </div>

          <motion.button
            ref={ref3}
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            onClick={() => setIsOpen(true)}
            className="all-[unset] cursor-pointer box-border inline-flex items-center justify-center gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-white rounded-[100px]"
          >
            <div
              className="w-fit text-gray-90 text-xl leading-7 whitespace-nowrap relative mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium tracking-[0]">
              Связаться с нами
            </div>
          </motion.button>
        </div>

        <motion.div
          ref={ref4}
          initial={{ opacity: 0, x: 80 }}
          animate={inView4 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="inline-flex flex-col items-start justify-center gap-4 p-8 absolute top-[50px] left-[789px] bg-white rounded-[32px_32px_0px_0px]"
        >
          <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
            <motion.div
              ref={ref5}
              initial={{ opacity: 0, y: 50 }}
              animate={inView5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="relative w-[264px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7"
            >
              График платежей
            </motion.div>

            <motion.div
              ref={ref6}
              initial={{ opacity: 0, y: 50 }}
              animate={inView6 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              className="relative w-[180px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm tracking-[0] leading-5"
            >
              Договор: 12345456322
            </motion.div>
          </div>

          <motion.div 
            ref={ref7}
            initial={{ opacity: 0, y: 50 }}
            animate={inView7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            className="inline-flex h-[154px] items-end relative"
          >
            <motion.div 
              ref={ref8}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView8 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
              className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]"
            >
              <div
                className="h-[76px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)] relative w-2 rounded-3xl" />

              <div
                className="relative w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center tracking-[0] leading-4">
                март
              </div>
            </motion.div>

            <motion.div 
              ref={ref9}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView9 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
              className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]"
            >
              <div
                className="h-[86px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)] relative w-2 rounded-3xl" />

              <div
                className="relative w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center tracking-[0] leading-4">
                апр
              </div>
            </motion.div>

            <motion.div 
              ref={ref10}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView10 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
              className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]"
            >
              <div
                className="h-[105px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)] relative w-2 rounded-3xl" />

              <div
                className="relative w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center tracking-[0] leading-4">
                май
              </div>
            </motion.div>

            <motion.div 
              ref={ref11}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView11 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
              className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]"
            >
              <div className="h-[120px] bg-[#f2f4fb] relative w-2 rounded-3xl" />

              <div
                className="relative w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center tracking-[0] leading-4">
                июнь
              </div>
            </motion.div>

            <motion.div 
              ref={ref12}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView12 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.1 }}
              className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]"
            >
              <div className="h-[91px] bg-[#f2f4fb] relative w-2 rounded-3xl" />

              <div
                className="relative w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center tracking-[0] leading-4">
                июль
              </div>
            </motion.div>

            <motion.div 
              ref={ref13}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView13 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
              className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]"
            >
              <div className="h-[98px] bg-[#f2f4fb] relative w-2 rounded-3xl" />

              <div
                className="relative w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center tracking-[0] leading-4">
                авг
              </div>
            </motion.div>
          </motion.div>

          <img
            className="absolute w-[328px] h-24 top-[109px] left-0"
            alt="Vector"
            src="/img/feedback/vector-147.svg"
          />

          <div
            className="absolute w-3 h-3 top-[133px] left-[156px] bg-[#ffffff] rounded-md border-2 border-solid border-[#00cb82]" />
        </motion.div>

        <img
          className="absolute w-[426px] h-[403px] top-6 left-[874px]"
          alt="Vector"
          src="/img/feedback/vector-4.svg"
        />

        <motion.div
          ref={ref14}
          initial={{ opacity: 0, x: 80 }}
          animate={inView14 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="inline-flex flex-col items-center justify-center gap-3 p-4 absolute top-[90px] left-[1046px] bg-white rounded-[32px_32px_0px_0px]"
        >
          <motion.div 
            ref={ref15}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView15 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="relative w-[212px] h-[212px] rounded-[100px]"
          >
            <div className="relative w-[198px] h-[198px] top-[7px] left-[7px]">
              <motion.div 
                ref={ref16}
                initial={{ opacity: 0, y: 50 }}
                animate={inView16 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                className="inline-flex flex-col h-[62px] items-center gap-0.5 absolute top-[68px] left-10"
              >
                <motion.div
                  ref={ref17}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView17 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                  className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-sm tracking-[0] leading-5 whitespace-nowrap"
                >
                  Текущий остаток
                </motion.div>

                <motion.div
                  ref={ref18}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView18 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
                  className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-[#1c222f] text-[28px] text-center tracking-[0] leading-10 whitespace-nowrap"
                >
                  44,000₽
                </motion.div>
              </motion.div>

              <div
                className="absolute w-[198px] h-[198px] top-0 left-0 rounded-[99px] border-[10px] border-solid border-neutral-50" />

              <img
                className="absolute w-[198px] h-[198px] top-0 left-0"
                alt="Ellipse"
                src="/img/feedback/ellipse-32.svg"
              />
            </div>
          </motion.div>

          <motion.div
            ref={ref19}
            initial={{ opacity: 0, y: 50 }}
            animate={inView19 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
            className="flex items-center justify-between px-4 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#f6f8ff] rounded-[20px]"
          >
            <motion.div
              ref={ref20}
              initial={{ opacity: 0, x: -50 }}
              animate={inView20 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
              className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-sm tracking-[0] leading-5 whitespace-nowrap"
            >
              Сумма займа
            </motion.div>

            <motion.div
              ref={ref21}
              initial={{ opacity: 0, x: 50 }}
              animate={inView21 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
              className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap"
            >
              122, 000₽
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}