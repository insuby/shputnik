import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

import { HeroButtons } from '../../components/ui/hero-buttons.tsx';
import { Feedback } from '../../widgets/feedback.tsx';
import { Integrations } from '../../widgets/integrations.tsx';
import { Trust } from '../../widgets/trust.tsx';
import { useFeedbackForm } from '../../widgets/feedback-form';

export const Dataunload = () => {
  const ref3 = useRef(null);
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
  const ref22 = useRef(null);
  const ref23 = useRef(null);
  const ref24 = useRef(null);
  const ref25 = useRef(null);
  const ref26 = useRef(null);
  const ref27 = useRef(null);
  const ref28 = useRef(null);
  const ref29 = useRef(null);
  const ref30 = useRef(null);
  const ref31 = useRef(null);
  const ref32 = useRef(null);
  const ref33 = useRef(null);
  const ref34 = useRef(null);
  const ref35 = useRef(null);
  const ref36 = useRef(null);
  const ref37 = useRef(null);
  const ref38 = useRef(null);
  const ref39 = useRef(null);
  const ref40 = useRef(null);
  const ref41 = useRef(null);
  const ref42 = useRef(null);
  const ref43 = useRef(null);
  const ref44 = useRef(null);
  const ref45 = useRef(null);
  const ref46 = useRef(null);
  const ref47 = useRef(null);
  const ref48 = useRef(null);
  const ref49 = useRef(null);
  const ref50 = useRef(null);

  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
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
  const inView32 = useInView(ref32, { once: true, margin: '-100px' });
  const inView33 = useInView(ref33, { once: true, margin: '-100px' });
  const inView34 = useInView(ref34, { once: true, margin: '-100px' });
  const inView35 = useInView(ref35, { once: true, margin: '-100px' });
  const inView36 = useInView(ref36, { once: true, margin: '-100px' });
  const inView37 = useInView(ref37, { once: true, margin: '-100px' });
  const inView38 = useInView(ref38, { once: true, margin: '-100px' });
  const inView39 = useInView(ref39, { once: true, margin: '-100px' });
  const inView40 = useInView(ref40, { once: true, margin: '-100px' });
  const inView41 = useInView(ref41, { once: true, margin: '-100px' });
  const inView42 = useInView(ref42, { once: true, margin: '-100px' });
  const inView43 = useInView(ref43, { once: true, margin: '-100px' });
  const inView44 = useInView(ref44, { once: true, margin: '-100px' });
  const inView45 = useInView(ref45, { once: true, margin: '-100px' });
  const inView46 = useInView(ref46, { once: true, margin: '-100px' });
  const inView47 = useInView(ref47, { once: true, margin: '-100px' });
  const inView48 = useInView(ref48, { once: true, margin: '-100px' });
  const inView49 = useInView(ref49, { once: true, margin: '-100px' });
  const inView50 = useInView(ref50, { once: true, margin: '-100px' });

  const { setIsOpen } = useFeedbackForm();

  const handleContactClick = () => {
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
              <div className="flex flex-col w-[624px] items-start justify-center gap-12 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                  <p className="relative w-[624px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-white text-6xl tracking-[0] leading-[68px]">
                    Выгрузка данных <br />в кредитные бюро
                  </p>

                  <p className="relative w-[624px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffff99] text-xl tracking-[0] leading-7">
                    Программа для конвертации и выгрузки данных в кредитные
                    бюро. Программа для конвертации и выгрузки данных в
                    кредитные бюро.
                  </p>
                </div>

                <button className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-white rounded-[100px] items-center justify-center">
                  <div className="w-fit mt-[-1.00px] whitespace-nowrap relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    Связаться с нами
                  </div>
                </button>
              </div>
            </motion.div>
          </HeroButtons>

          <div className="absolute w-[540px] h-[462px] top-20 left-[768px]">
            <div className="relative w-[606px] h-[527px] top-[-65px] left-[-33px]">
              <motion.div
                ref={ref3}
                initial={{ opacity: 0, x: -150 }}
                animate={inView3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex w-[372px] items-center gap-4 pl-4 pr-6 py-4 absolute top-[152px] left-[31px] bg-white rounded-[32px]"
              >
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-18-5.svg"
                />

                <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
                    Загруженный файл.pdf
                  </div>

                  <div className="w-[129px] font-normal text-gray-40 text-sm leading-5 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                    450 KB
                  </div>
                </div>
              </motion.div>

              <img
                className="absolute w-[606px] h-[503px] top-0 left-0"
                alt="Vector"
                src="https://c.animaapp.com/mdvh9jkbMPb4br/img/vector-5.svg"
              />

              <motion.div
                ref={ref3}
                initial={{ opacity: 0, y: -150 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex w-[400px] items-start justify-end gap-[14.04px] p-8 absolute top-[219px] left-[173px] bg-white rounded-[32px]"
              >
                <div className="flex flex-col items-center justify-center gap-4 relative flex-1 grow">
                  <div className="relative self-stretch mt-[-0.88px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-sm tracking-[0] leading-5">
                    Кредитные бюро
                  </div>

                  <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
                    <motion.div
                      ref={ref3}
                      initial={{ opacity: 0, x: 150 }}
                      animate={inView3 ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: .4 }}
                      className="flex w-[336px] h-16 items-center justify-center gap-5 p-4 relative bg-[#f9fafd] rounded-2xl"
                    >
                      <img
                        className="relative w-8 h-8"
                        alt="Clip path group"
                        src="https://c.animaapp.com/mdvh9jkbMPb4br/img/clip-path-group.png"
                      />

                      <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                        Скоринг бюро
                      </div>

                      <img
                        className="relative flex-[0_0_auto]"
                        alt="Frame"
                        src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-18-1.svg"
                      />
                    </motion.div>

                    <motion.div
                      ref={ref3}
                      initial={{ opacity: 0, x: 150 }}
                      animate={inView3 ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: .5 }}
                      className="flex w-[336px] h-16 items-center justify-center gap-5 p-4 relative bg-[#f9fafd] rounded-2xl"
                    >
                      <img
                        className="relative w-8 h-8"
                        alt="Okb logo"
                        src="https://c.animaapp.com/mdvh9jkbMPb4br/img/okb-logo-1.png"
                      />

                      <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                        ОКБ
                      </div>

                      <img
                        className="relative flex-[0_0_auto]"
                        alt="Frame"
                        src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-18-1.svg"
                      />
                    </motion.div>

                    <motion.div
                      ref={ref3}
                      initial={{ opacity: 0, x: 150 }}
                      animate={inView3 ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: .6 }}
                      className="flex w-[336px] h-16 items-center justify-center gap-5 p-4 relative bg-[#f9fafd] rounded-2xl"
                    >
                      <img
                        className="relative w-8 h-8"
                        alt="Frame"
                        src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-1948755067.svg"
                      />

                      <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                        НБКИ
                      </div>

                      <img
                        className="relative w-8 h-8 animate-spin"
                        alt="Frame"
                        src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-1948755106.svg"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
        <motion.div
          ref={ref11}
          initial={{ opacity: 0, y: 50 }}
          animate={inView11 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col w-[656px] items-center justify-center gap-2.5 relative flex-[0_0_auto]"
        >
          <motion.div
            ref={ref12}
            initial={{ opacity: 0, y: 50 }}
            animate={inView12 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center tracking-[0] leading-[60px]"
          >
            Преимущества
          </motion.div>

          <motion.p
            ref={ref13}
            initial={{ opacity: 0, y: 50 }}
            animate={inView13 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl text-center tracking-[0] leading-7"
          >
            Система автоматически сконвертирует данные для отправки в кредитные
            бюро с учетом актуальных требований.
          </motion.p>
        </motion.div>

                  <motion.div
            ref={ref14}
            initial={{ opacity: 0, y: 50 }}
            animate={inView14 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
          >
            <motion.div
              ref={ref15}
              initial={{ opacity: 0, x: -50 }}
              animate={inView15 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-3xl overflow-hidden"
            >
              <motion.img
                ref={ref16}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView16 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-18-3.svg"
              />

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <motion.div
                  ref={ref17}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView17 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                  className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8"
                >
                  Единый формат обмена
                </motion.div>

                <motion.p
                  ref={ref18}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView18 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7"
                >
                  Загружая файл одного формата вы <br />
                  выгружаете данные во все кредитные бюро.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              ref={ref19}
              initial={{ opacity: 0, y: 50 }}
              animate={inView19 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
              className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-3xl overflow-hidden"
            >
              <motion.img
                ref={ref20}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView20 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-18.svg"
              />

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <motion.div
                  ref={ref21}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView21 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
                  className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8"
                >
                  Удобное решение
                </motion.div>

                <motion.p
                  ref={ref22}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView22 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7"
                >
                  Программа позволяет выгружать данные как файлом, так и через
                  АРІ.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              ref={ref23}
              initial={{ opacity: 0, x: 50 }}
              animate={inView23 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
              className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-3xl overflow-hidden"
            >
              <motion.img
                ref={ref24}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView24 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-19.svg"
              />

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <motion.div
                  ref={ref25}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView25 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.4 }}
                  className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8"
                >
                  Регулярные обновления
                </motion.div>

                <motion.p
                  ref={ref26}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView26 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.5 }}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7"
                >
                  Программа регулярно обновляется, вам не потребуется следить за
                  изменениями формата обмена.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
        <motion.div
          ref={ref27}
          initial={{ opacity: 0, y: 50 }}
          animate={inView27 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col w-[656px] items-center justify-center gap-2.5 relative flex-[0_0_auto]"
        >
          <motion.div
            ref={ref28}
            initial={{ opacity: 0, y: 50 }}
            animate={inView28 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center tracking-[0] leading-[60px]"
          >
            Функциональные возможности
          </motion.div>
        </motion.div>

        <div className="w-[1376px] gap-6 flex-[0_0_auto] rounded-3xl flex items-center relative">
          <div className="flex flex-col items-start gap-12 pl-12 pr-[68px] py-12 relative flex-1 grow rounded-3xl overflow-hidden">
            <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
              <motion.div
                ref={ref29}
                initial={{ opacity: 0, y: 50 }}
                animate={inView29 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                className="flex flex-col w-[560px] items-center justify-center gap-3 relative flex-[0_0_auto]"
              >
                <motion.div
                  ref={ref30}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView30 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                  className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8"
                >
                  Контроль
                </motion.div>

                <motion.p
                  ref={ref31}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView31 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7"
                >
                  Контролируйте статус вашей загрузки, получило ли конкретное
                  кредитное бюро ваши данные.
                </motion.p>
              </motion.div>

              <motion.div
                ref={ref32}
                initial={{ opacity: 0, y: 50 }}
                animate={inView32 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                className="flex flex-col w-[560px] items-center justify-center gap-3 relative flex-[0_0_auto]"
              >
                <motion.div
                  ref={ref33}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView33 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                  className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8"
                >
                  Актуальные данные
                </motion.div>

                <motion.p
                  ref={ref34}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView34 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7"
                >
                  Как прошла выгрузка, есть ли в ней ошибки и если есть то
                  какие.
                </motion.p>
              </motion.div>

              <motion.div
                ref={ref35}
                initial={{ opacity: 0, y: 50 }}
                animate={inView35 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                className="flex flex-col w-[560px] items-center justify-center gap-3 relative flex-[0_0_auto]"
              >
                <motion.div
                  ref={ref36}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView36 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8"
                >
                  Экономия времени
                </motion.div>

                <motion.p
                  ref={ref37}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView37 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7"
                >
                  Используя данный интерфейс, вы существенно сокращаете время на
                  процедуру выгрузки данных в КБ.
                </motion.p>
              </motion.div>

              <motion.div
                ref={ref38}
                initial={{ opacity: 0, y: 50 }}
                animate={inView38 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
                className="flex flex-col w-[560px] items-center justify-center gap-3 relative flex-[0_0_auto]"
              >
                <motion.div
                  ref={ref39}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView39 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
                  className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8"
                >
                  Автоматизация процессов
                </motion.div>

                <motion.p
                  ref={ref40}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView40 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7"
                >
                  Настраивайте автоматическую выгрузку во все кредитные бюро раз
                  в 5 дней, и вам не потребуется дальше контролировать процедуру
                  выгрузки.
                </motion.p>
              </motion.div>
            </div>
          </div>

          <motion.img
            ref={ref41}
            initial={{ opacity: 0, x: 100 }}
            animate={inView41 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 1.4 }}
            className="relative flex-1 self-stretch grow"
            alt="Frame"
            src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-21.svg"
          />
        </div>
      </div>
      <motion.div
        ref={ref42}
        initial={{ opacity: 0, y: 50 }}
        animate={inView42 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col w-[1376px] items-center justify-center gap-9 p-8 relative flex-[0_0_auto] bg-[#f9fafd] rounded-[32px] overflow-hidden"
      >
        <motion.img
          ref={ref43}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView43 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="absolute w-[1204px] h-[1060px] top-[-115px] left-[339px]"
          alt="Vector"
          src="https://c.animaapp.com/mdvh9jkbMPb4br/img/vector-1-1.svg"
        />

        <div className="flex items-start gap-[88px] p-12 relative self-stretch w-full flex-[0_0_auto]">
          <motion.div
            ref={ref44}
            initial={{ opacity: 0, x: -50 }}
            animate={inView44 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col w-[520px] items-start gap-8 relative"
          >
            <motion.img
              ref={ref45}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView45 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-18-6.svg"
            />

            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                <motion.div
                  ref={ref46}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView46 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                  className="relative w-[520px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]"
                >
                  Выгрузка во все КБ
                </motion.div>

                <motion.p
                  ref={ref47}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView47 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7"
                >
                  Программа позволяет выгружать данные <br />
                  через API и интерфейс в четыре кредитных <br />
                  бюро.
                </motion.p>
              </div>

              <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                    <img
                      className="relative w-4 h-4"
                      alt="Check"
                      src="https://c.animaapp.com/mdvh9jkbMPb4br/img/check.svg"
                    />
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    Эквифакс
                  </div>
                </div>

                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                    <img
                      className="relative w-4 h-4"
                      alt="Check"
                      src="https://c.animaapp.com/mdvh9jkbMPb4br/img/check.svg"
                    />
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    ОКБ
                  </div>
                </div>

                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                    <img
                      className="relative w-4 h-4"
                      alt="Check"
                      src="https://c.animaapp.com/mdvh9jkbMPb4br/img/check.svg"
                    />
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    НБКИ
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <img
            className="relative self-stretch w-px"
            alt="Vector"
            src="https://c.animaapp.com/mdvh9jkbMPb4br/img/vector-129.svg"
          />

          <motion.div
            ref={ref48}
            initial={{ opacity: 0, x: 50 }}
            animate={inView48 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
            className="flex flex-col w-[520px] items-start justify-center gap-8 relative"
          >
            <motion.img
              ref={ref49}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView49 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-18-2.svg"
            />

            <div className="flex flex-col w-[520px] items-start gap-6 relative flex-[0_0_auto]">
              <div className="gap-4 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <motion.div
                  ref={ref50}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView50 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]"
                >
                  Стоимость использования
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView50 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7"
                >
                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                    Программа поставляется в формате{' '}
                  </span>

                  <a
                    href="https://sptnk.co/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="underline">SAAS</span>
                  </a>

                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                    {'  '}без любых дополнительных платежей за настройку или
                    лицензию.
                  </span>
                </motion.p>
              </div>

              <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                <div className="flex w-[520px] items-center justify-center gap-6 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                    <img
                      className="relative w-4 h-4"
                      alt="Check"
                      src="https://c.animaapp.com/mdvh9jkbMPb4br/img/check.svg"
                    />
                  </div>

                  <p className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    Платите только тогда, когда пользуетесь программой
                  </p>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <div className="w-fit font-medium text-[40px] leading-[48px] whitespace-nowrap relative mt-[-1.00px] [font-family:'Roboto',Helvetica] text-gray-90 tracking-[0]">
                за 30 000 ₽
              </div>

              <div className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7 whitespace-nowrap">
                /месяц
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView42 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
          className="flex items-center gap-2.5 p-12 relative self-stretch w-full flex-[0_0_auto] bg-violet-50 rounded-[32px] overflow-hidden"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView42 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
            className="absolute w-[1108px] h-[1060px] top-[-385px] left-[420px]"
            alt="Vector"
            src="https://c.animaapp.com/mdvh9jkbMPb4br/img/vector-1-3.svg"
          />

          <div className="flex flex-col items-start gap-3 relative flex-1 grow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView42 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
              className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-[32px] tracking-[0] leading-10"
            >
              Воспользоваться сервисом
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView42 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
              className="relative w-[752px] opacity-60 [font-family:'Roboto',Helvetica] font-normal text-[#ffffff] text-xl tracking-[0] leading-7"
            >
              Программа регулярно обновляет формат обмена в соответствие <br />с
              актуальными требованиями каждого КБ.
            </motion.p>
          </div>

          <button 
            onClick={handleContactClick}
            className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-white rounded-[100px] items-center justify-center cursor-pointer"
          >
            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
              Связаться с нами
            </div>
          </button>
        </motion.div>
      </motion.div>
      <Integrations />
      <Feedback />
      <Trust />
    </div>
  );
};
