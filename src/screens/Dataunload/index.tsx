import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

import { HeroButtons } from '../../components/ui/hero-buttons.tsx';
import { useFeedbackForm } from '../../widgets/feedback-form';
import { Feedback } from '../../widgets/feedback.tsx';
import { Integrations } from '../../widgets/integrations.tsx';
import { Trust } from '../../widgets/trust.tsx';

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
    <div className="relative flex w-full md:w-[1440px] flex-[0_0_auto] flex-col items-center gap-[88px] md:gap-[136px] p-0 md:px-8 pb-[136px] md:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-8 self-stretch">
        <div className="relative flex w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-violet-50 px-4 py-10 md:p-12">
          <img
            className="absolute left-[441px] top-[-140px] h-[1060px] w-[1108px]"
            alt="Vector"
            src="/img/vector-1-5.svg"
          />

          <HeroButtons buttonText="Узнать больше">
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, y: 50 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative flex w-full md:w-[624px] flex-[0_0_auto] flex-col items-start justify-center gap-12"
            >
              <div className="relative flex w-full md:w-[624px] flex-[0_0_auto] flex-col items-start justify-center gap-12">
                <div className="relative w-full flex md:inline-flex flex-[0_0_auto] flex-col items-start gap-6">
                  <p className="relative mt-[-1.00px] w-[624px] text-6xl font-medium leading-[68px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
                    Выгрузка данных <br />в кредитные бюро
                  </p>

                  <p className="relative w-full text-center md:text-left md:w-[624px] text-xl font-normal leading-7 tracking-normal text-[#ffffff99] [font-family:'Roboto',Helvetica]">
                    Программа для конвертации и выгрузки данных в кредитные бюро
                    Программа для конвертации и выгрузки данных в кредитные бюро
                  </p>
                </div>

                <button className="all-[unset] relative box-border inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-white px-8 py-4">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Связаться с нами
                  </div>
                </button>
              </div>
            </motion.div>
          </HeroButtons>

          <div className="absolute left-[768px] top-20 h-[462px] w-[540px]">
            <div className="relative left-[-33px] top-[-65px] h-[527px] w-[606px]">
              <motion.div
                ref={ref3}
                initial={{ opacity: 0, x: -150 }}
                animate={inView3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute left-[31px] top-[152px] flex w-[372px] items-center gap-4 rounded-[32px] bg-white py-4 pl-4 pr-6"
              >
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/dataunload/frame-18-5.svg"
                />

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Загруженный файл.pdf
                  </div>

                  <div className="relative w-[129px] text-sm font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    450 KB
                  </div>
                </div>
              </motion.div>

              <img
                className="absolute left-0 top-0 h-[503px] w-[606px]"
                alt="Vector"
                src="/img/dataunload/vector-5.svg"
              />

              <motion.div
                ref={ref3}
                initial={{ opacity: 0, y: -150 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute left-[173px] top-[219px] flex w-[400px] items-start justify-end gap-[14.04px] rounded-[32px] bg-white p-8"
              >
                <div className="relative flex flex-1 grow flex-col items-center justify-center gap-4">
                  <div className="relative mt-[-0.88px] self-stretch text-sm font-normal leading-5 tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                    Кредитные бюро
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2">
                    <motion.div
                      ref={ref3}
                      initial={{ opacity: 0, x: 150 }}
                      animate={inView3 ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 0.4,
                      }}
                      className="relative flex h-16 w-[336px] items-center justify-center gap-5 rounded-2xl bg-[#f9fafd] p-4"
                    >
                      <img
                        className="relative size-8"
                        alt="Clip path group"
                        src="/img/dataunload/clip-path-group.png"
                      />

                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        Скоринг бюро
                      </div>

                      <img
                        className="relative flex-[0_0_auto]"
                        alt="Frame"
                        src="/img/dataunload/frame-18-1.svg"
                      />
                    </motion.div>

                    <motion.div
                      ref={ref3}
                      initial={{ opacity: 0, x: 150 }}
                      animate={inView3 ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 0.5,
                      }}
                      className="relative flex h-16 w-[336px] items-center justify-center gap-5 rounded-2xl bg-[#f9fafd] p-4"
                    >
                      <img
                        className="relative size-8"
                        alt="Okb logo"
                        src="/img/dataunload/okb-logo-1.png"
                      />

                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        ОКБ
                      </div>

                      <img
                        className="relative flex-[0_0_auto]"
                        alt="Frame"
                        src="/img/dataunload/frame-18-1.svg"
                      />
                    </motion.div>

                    <motion.div
                      ref={ref3}
                      initial={{ opacity: 0, x: 150 }}
                      animate={inView3 ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 0.6,
                      }}
                      className="relative flex h-16 w-[336px] items-center justify-center gap-5 rounded-2xl bg-[#f9fafd] p-4"
                    >
                      <img
                        className="relative size-8"
                        alt="Frame"
                        src="/img/dataunload/frame-1948755067.svg"
                      />

                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        НБКИ
                      </div>

                      <img
                        className="relative size-8 animate-spin"
                        alt="Frame"
                        src="/img/dataunload/frame-1948755106.svg"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-12 self-stretch">
        <motion.div
          ref={ref11}
          initial={{ opacity: 0, y: 50 }}
          animate={inView11 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative flex w-full md:w-[656px] flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
        >
          <motion.div
            ref={ref12}
            initial={{ opacity: 0, y: 50 }}
            animate={inView12 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative mt-[-1.00px] self-stretch text-center text-[36px] md:text-5xl font-medium leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
          >
            Преимущества
          </motion.div>

          <motion.p
            ref={ref13}
            initial={{ opacity: 0, y: 50 }}
            animate={inView13 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
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
          className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch"
        >
          <motion.div
            ref={ref15}
            initial={{ opacity: 0, x: -50 }}
            animate={inView15 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            className="relative flex flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-3xl bg-[#f9fafd] p-10"
          >
            <motion.img
              ref={ref16}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView16 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/dataunload/frame-18-3.svg"
            />

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <motion.div
                ref={ref17}
                initial={{ opacity: 0, y: 30 }}
                animate={inView17 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                Единый формат обмена
              </motion.div>

              <motion.p
                ref={ref18}
                initial={{ opacity: 0, y: 30 }}
                animate={inView18 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
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
            className="relative flex flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-3xl bg-[#f9fafd] p-10"
          >
            <motion.img
              ref={ref20}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView20 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/dataunload/frame-18.svg"
            />

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <motion.div
                ref={ref21}
                initial={{ opacity: 0, y: 30 }}
                animate={inView21 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                Удобное решение
              </motion.div>

              <motion.p
                ref={ref22}
                initial={{ opacity: 0, y: 30 }}
                animate={inView22 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
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
            className="relative flex flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-3xl bg-[#f9fafd] p-10"
          >
            <motion.img
              ref={ref24}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView24 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/dataunload/frame-19.svg"
            />

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
              <motion.div
                ref={ref25}
                initial={{ opacity: 0, y: 30 }}
                animate={inView25 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.4 }}
                className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
              >
                Регулярные обновления
              </motion.div>

              <motion.p
                ref={ref26}
                initial={{ opacity: 0, y: 30 }}
                animate={inView26 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.5 }}
                className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
              >
                Программа регулярно обновляется, вам не потребуется следить за
                изменениями формата обмена.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-12 self-stretch">
        <motion.div
          ref={ref27}
          initial={{ opacity: 0, y: 50 }}
          animate={inView27 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative flex w-full md:w-[656px] flex-[0_0_auto] flex-col items-center justify-center gap-2.5"
        >
          <motion.div
            ref={ref28}
            initial={{ opacity: 0, y: 50 }}
            animate={inView28 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative mt-[-1.00px] self-stretch text-center text-[36px] md:text-5xl font-medium leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
          >
            Функциональные возможности
          </motion.div>
        </motion.div>

        <div className="relative flex w-[1376px] flex-[0_0_auto] items-center gap-6 rounded-3xl">
          <div className="relative flex flex-1 grow flex-col items-start gap-12 overflow-hidden rounded-3xl py-12 pl-12 pr-[68px]">
            <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-8">
              <motion.div
                ref={ref29}
                initial={{ opacity: 0, y: 50 }}
                animate={inView29 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                className="relative flex w-full md:w-[560px] flex-[0_0_auto] flex-col items-center justify-center gap-3"
              >
                <motion.div
                  ref={ref30}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView30 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  Контроль
                </motion.div>

                <motion.p
                  ref={ref31}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView31 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
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
                className="relative flex w-full md:w-[560px] flex-[0_0_auto] flex-col items-center justify-center gap-3"
              >
                <motion.div
                  ref={ref33}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView33 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  Актуальные данные
                </motion.div>

                <motion.p
                  ref={ref34}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView34 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
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
                className="relative flex w-full md:w-[560px] flex-[0_0_auto] flex-col items-center justify-center gap-3"
              >
                <motion.div
                  ref={ref36}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView36 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  Экономия времени
                </motion.div>

                <motion.p
                  ref={ref37}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView37 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
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
                className="relative flex w-full md:w-[560px] flex-[0_0_auto] flex-col items-center justify-center gap-3"
              >
                <motion.div
                  ref={ref39}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView39 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
                  className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  Автоматизация процессов
                </motion.div>

                <motion.p
                  ref={ref40}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView40 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
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
            className="relative flex-1 grow self-stretch"
            alt="Frame"
            src="/img/dataunload/frame-21.svg"
          />
        </div>
      </div>
      <motion.div
        ref={ref42}
        initial={{ opacity: 0, y: 50 }}
        animate={inView42 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative flex w-[1376px] flex-[0_0_auto] flex-col items-center justify-center gap-9 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8"
      >
        <motion.img
          ref={ref43}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView43 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="absolute left-[339px] top-[-115px] h-[1060px] w-[1204px]"
          alt="Vector"
          src="/img/dataunload/vector-1-1.svg"
        />

        <div className="relative flex w-full flex-[0_0_auto] items-start gap-[88px] self-stretch p-12">
          <motion.div
            ref={ref44}
            initial={{ opacity: 0, x: -50 }}
            animate={inView44 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative flex w-[520px] flex-col items-start gap-8"
          >
            <motion.img
              ref={ref45}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView45 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/dataunload/frame-18-6.svg"
            />

            <div className="relative w-full flex md:inline-flex flex-[0_0_auto] flex-col items-start gap-6">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                <motion.div
                  ref={ref46}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView46 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                  className="relative mt-[-1.00px] w-[520px] text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  Выгрузка во все КБ
                </motion.div>

                <motion.p
                  ref={ref47}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView47 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  Программа позволяет выгружать данные <br />
                  через API и интерфейс в четыре кредитных <br />
                  бюро.
                </motion.p>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                <div className="relative flex h-7 w-[520px] items-center justify-center gap-6">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5">
                    <img
                      className="relative size-4"
                      alt="Check"
                      src="/img/dataunload/check.svg"
                    />
                  </div>

                  <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Эквифакс
                  </div>
                </div>

                <div className="relative flex h-7 w-[520px] items-center justify-center gap-6">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5">
                    <img
                      className="relative size-4"
                      alt="Check"
                      src="/img/dataunload/check.svg"
                    />
                  </div>

                  <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    ОКБ
                  </div>
                </div>

                <div className="relative flex h-7 w-[520px] items-center justify-center gap-6">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#725dd614] p-1.5">
                    <img
                      className="relative size-4"
                      alt="Check"
                      src="/img/dataunload/check.svg"
                    />
                  </div>

                  <div className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    НБКИ
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <img
            className="relative w-px self-stretch"
            alt="Vector"
            src="/img/dataunload/vector-129.svg"
          />

          <motion.div
            ref={ref48}
            initial={{ opacity: 0, x: 50 }}
            animate={inView48 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
            className="relative flex w-[520px] flex-col items-start justify-center gap-8"
          >
            <motion.img
              ref={ref49}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView49 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/dataunload/frame-18-2.svg"
            />

            <div className="relative flex w-[520px] flex-[0_0_auto] flex-col items-start gap-6">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <motion.div
                  ref={ref50}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView50 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                  className="relative mt-[-1.00px] self-stretch text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  Стоимость использования
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView50 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  <span className="text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    Программа поставляется в формате{' '}
                  </span>

                  <a
                    href="https://sptnk.co/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="underline">SAAS</span>
                  </a>

                  <span className="text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    {'  '}без любых дополнительных платежей за настройку или
                    лицензию.
                  </span>
                </motion.p>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                <div className="relative flex w-[520px] flex-[0_0_auto] items-center justify-center gap-6">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-[#00cb8214] p-1.5">
                    <img
                      className="relative size-4"
                      alt="Check"
                      src="/img/dataunload/check.svg"
                    />
                  </div>

                  <p className="relative mt-[-1.00px] flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Платите только тогда, когда пользуетесь программой
                  </p>
                </div>
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-4">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                за 30 000 ₽
              </div>

              <div className="relative w-fit whitespace-nowrap text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                /месяц
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView42 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
          className="relative flex w-full flex-[0_0_auto] items-center gap-2.5 self-stretch overflow-hidden rounded-[32px] bg-violet-50 p-12"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView42 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
            className="absolute left-[420px] top-[-385px] h-[1060px] w-[1108px]"
            alt="Vector"
            src="/img/dataunload/vector-1-3.svg"
          />

          <div className="relative flex flex-1 grow flex-col items-start gap-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView42 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
              className="relative mt-[-1.00px] self-stretch text-[32px] font-medium leading-10 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]"
            >
              Воспользоваться сервисом
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView42 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
              className="relative w-full md:w-[752px] text-xl font-normal leading-7 tracking-normal text-[#ffffff] opacity-60 [font-family:'Roboto',Helvetica]"
            >
              Программа регулярно обновляет формат обмена в соответствие <br />с
              актуальными требованиями каждого КБ.
            </motion.p>
          </div>

          <button
            onClick={handleContactClick}
            className="all-[unset] relative box-border inline-flex flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-white px-8 py-4"
          >
            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
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
