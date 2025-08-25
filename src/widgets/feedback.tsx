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
    <div className="relative flex w-full !flex-[0_0_auto] flex-col items-start gap-2.5 rounded-[40px] bg-[#3573fc1f] p-3 md:w-[1376px]">
      <div className="relative flex w-full flex-[0_0_auto] items-center gap-2.5 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-7 md:p-[60px]">
        <img
          className="absolute left-14 top-[-306px] h-[590px] w-full md:w-[620px]"
          alt=""
          aria-hidden="true"
          src="/img/feedback/vector-1.svg"
        />

        <img
          className="absolute left-[666px] top-[-109px] h-[675px] w-full md:w-[727px]"
          alt=""
          aria-hidden="true"
          src="/img/feedback/vector-2-1.svg"
        />

        <div className="relative flex flex-col items-start gap-7 md:w-[696px]">
          <div className="relative flex w-full flex-col items-start gap-4 self-stretch">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, x: 80 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative mt-[-1.00px] self-stretch text-[40px] font-medium leading-[48px] tracking-normal text-white [font-family:'Roboto',Helvetica]"
            >
              Попробуйте, вам понравится!
            </motion.div>

            <motion.p
              ref={ref2}
              initial={{ opacity: 0, y: 80 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-white opacity-60 [font-family:'Roboto',Helvetica]"
            >
              Оставьте заявку на демонстрацию — мы покажем, как работает
              платформа и ответим на ваши вопросы
            </motion.p>
          </div>

          <motion.button
            ref={ref3}
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            onClick={() => setIsOpen(true)}
            className="w-full md:w-fit all-[unset] relative box-border inline-flex flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-white px-8 py-4"
          >
            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              Связаться с нами
            </div>
          </motion.button>
        </div>

        <motion.div
          ref={ref4}
          initial={{ opacity: 0, x: 80 }}
          animate={inView4 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="absolute left-[789px] top-[65px] hidden flex-col  items-start justify-center gap-4 rounded-[32px_32px_0px_0px] bg-white p-7 md:inline-flex"
        >
          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
            <motion.div
              ref={ref5}
              initial={{ opacity: 0, y: 50 }}
              animate={inView5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="relative mt-[-1.00px] w-full md:w-[264px] text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
            >
              График платежей
            </motion.div>

            <motion.div
              ref={ref6}
              initial={{ opacity: 0, y: 50 }}
              animate={inView6 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              className="relativew-full md:w-[180px] text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]"
            >
              Договор: 12345456322
            </motion.div>
          </div>

          <motion.div
            ref={ref7}
            initial={{ opacity: 0, y: 50 }}
            animate={inView7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            className="relative inline-flex h-[154px] items-end"
          >
            <motion.div
              ref={ref8}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView8 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
              className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
            >
              <div className="relative h-[76px] w-2 rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />

              <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                март
              </div>
            </motion.div>

            <motion.div
              ref={ref9}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView9 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
              className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
            >
              <div className="relative h-[86px] w-2 rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />

              <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                апр
              </div>
            </motion.div>

            <motion.div
              ref={ref10}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView10 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
              className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
            >
              <div className="relative h-[105px] w-2 rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />

              <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                май
              </div>
            </motion.div>

            <motion.div
              ref={ref11}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView11 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
              className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
            >
              <div className="relative h-[120px] w-2 rounded-3xl bg-[#f2f4fb]" />

              <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                июнь
              </div>
            </motion.div>

            <motion.div
              ref={ref12}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView12 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.1 }}
              className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
            >
              <div className="relative h-[91px] w-2 rounded-3xl bg-[#f2f4fb]" />

              <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                июль
              </div>
            </motion.div>

            <motion.div
              ref={ref13}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView13 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
              className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
            >
              <div className="relative h-[98px] w-2 rounded-3xl bg-[#f2f4fb]" />

              <div className="relative w-11 text-center text-xs font-normal leading-4 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                авг
              </div>
            </motion.div>
          </motion.div>

          <img
            className="absolute left-0 top-[109px] h-24 w-full md:w-[328px]"
            alt=""
            aria-hidden="true"
            src="/img/feedback/vector-147.svg"
          />

          <div className="absolute left-[156px] top-[133px] size-3 rounded-md border-2 border-solid border-[#00cb82] bg-[#ffffff]" />
        </motion.div>

        <img
          className="absolute left-[874px] top-6 h-[403px] w-full md:w-[426px]"
          alt=""
          aria-hidden="true"
          src="/img/feedback/vector-4.svg"
        />

        <motion.div
          ref={ref14}
          initial={{ opacity: 0, x: 80 }}
          animate={inView14 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="absolute left-[1046px] top-[90px] inline-flex flex-col items-center justify-center gap-3 rounded-[32px_32px_0px_0px] bg-white p-4"
        >
          <motion.div
            ref={ref15}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView15 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="relative size-[212px] rounded-[100px]"
          >
            <div className="relative left-[7px] top-[7px] size-[198px]">
              <motion.div
                ref={ref16}
                initial={{ opacity: 0, y: 50 }}
                animate={inView16 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                className="absolute left-10 top-[68px] inline-flex h-[62px] flex-col items-center gap-0.5"
              >
                <motion.div
                  ref={ref17}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView17 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                  className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]"
                >
                  Текущий остаток
                </motion.div>

                <motion.div
                  ref={ref18}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView18 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
                  className="relative w-fit whitespace-nowrap text-center text-[28px] font-medium leading-10 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]"
                >
                  44,000₽
                </motion.div>
              </motion.div>

              <div className="absolute left-0 top-0 size-[198px] rounded-[99px] border-[10px] border-solid border-neutral-50" />

              <img
                className="absolute left-0 top-0 size-[198px]"
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
            className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch rounded-[20px] bg-[#f6f8ff] px-4 py-3"
          >
            <motion.div
              ref={ref20}
              initial={{ opacity: 0, x: -50 }}
              animate={inView20 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
              className="relative w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]"
            >
              Сумма займа
            </motion.div>

            <motion.div
              ref={ref21}
              initial={{ opacity: 0, x: 50 }}
              animate={inView21 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
              className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
            >
              122, 000₽
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
