import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

import { useIsMobile } from 'shared/lib/use-is-mobile';

export const SocialParameters = () => {
  const isMobile = useIsMobile();
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

  const marginValue = isMobile ? '-10px' : '-100px';
  const inView1 = useInView(ref1, { once: true, margin: marginValue });
  const inView2 = useInView(ref2, { once: true, margin: marginValue });
  const inView3 = useInView(ref3, { once: true, margin: marginValue });
  const inView4 = useInView(ref4, { once: true, margin: marginValue });
  const inView5 = useInView(ref5, { once: true, margin: marginValue });
  const inView6 = useInView(ref6, { once: true, margin: marginValue });
  const inView7 = useInView(ref7, { once: true, margin: marginValue });
  const inView8 = useInView(ref8, { once: true, margin: marginValue });
  const inView9 = useInView(ref9, { once: true, margin: marginValue });
  const inView10 = useInView(ref10, { once: true, margin: marginValue });
  const inView11 = useInView(ref11, { once: true, margin: marginValue });
  const inView12 = useInView(ref12, { once: true, margin: marginValue });
  const inView13 = useInView(ref13, { once: true, margin: marginValue });

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-3xl bg-[#ffffff] lg:!flex-row">
      <div className="relative flex flex-1 grow flex-col items-center justify-center self-stretch overflow-hidden rounded-3xl ">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center self-stretch">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex w-full flex-[0_0_auto] items-center gap-1 self-stretch rounded-[32px] bg-[#f9fafd] p-3 lg:gap-5"
          >
            <motion.div
              ref={ref8}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView8 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="relative w-48 min-w-48 self-stretch rounded-3xl [background:url(/img/Frame-1948755022.png)_50%_50%_/_cover]"
            />

            <div className="relative flex flex-1 grow flex-col items-start gap-4 p-3">
              <motion.div
                ref={ref9}
                initial={{ opacity: 0, x: -30 }}
                animate={inView9 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="text-adaptive-24 relative mt-[-1.00px] font-medium leading-8 leading-tight tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica] lg:w-[293px]"
              >
                Социальные параметры
              </motion.div>

              <div className="relative flex flex-[0_0_auto] flex-col items-start gap-2 lg:w-[293px]">
                <motion.div
                  ref={ref10}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView10 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                  className="relative flex w-full flex-[0_0_auto] items-center gap-4 self-stretch"
                >
                  <div className="relative h-5 w-[34px] overflow-hidden rounded-[100px] bg-[#00cb82]">
                    <div className="relative left-4 top-0.5 size-4 rounded-lg bg-[#ffffff]" />
                  </div>

                  <div className="text-adaptive-16 relative mt-[-1.00px] flex-1 font-normal leading-6 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    Персональная информация
                  </div>
                </motion.div>

                <motion.div
                  ref={ref11}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView11 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                  className="relative flex w-full flex-[0_0_auto] items-center gap-4 self-stretch"
                >
                  <div className="relative h-5 w-[34px] overflow-hidden rounded-[100px] bg-[#00cb82]">
                    <div className="relative left-4 top-0.5 size-4 rounded-lg bg-[#ffffff]" />
                  </div>

                  <div className="text-adaptive-16 relative mt-[-1.00px] flex-1 font-normal leading-6 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    Банк и адрес
                  </div>
                </motion.div>

                <motion.div
                  ref={ref12}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView12 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                  className="relative flex w-full flex-[0_0_auto] items-center gap-4 self-stretch"
                >
                  <div className="relative h-5 w-[34px] overflow-hidden rounded-[100px] bg-[#00cb82]">
                    <div className="relative left-4 top-0.5 size-4 rounded-lg bg-[#ffffff]" />
                  </div>

                  <div className="text-adaptive-16 relative mt-[-1.00px] flex-1 font-normal leading-6 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    Банк и адрес
                  </div>
                </motion.div>

                <motion.div
                  ref={ref13}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView13 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                  className="relative flex w-full flex-[0_0_auto] items-center gap-4 self-stretch"
                >
                  <div className="relative h-5 w-[34px] overflow-hidden rounded-[100px] bg-[#00cb82]">
                    <div className="relative left-4 top-0.5 size-4 rounded-lg bg-[#ffffff]" />
                  </div>

                  <div className="text-adaptive-16 relative mt-[-1.00px] flex-1 font-normal leading-6 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    Документы
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.svg
            ref={ref2}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView2 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3.75V20.25"
              stroke="#9FA7BC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.25 13.5L12 20.25L18.75 13.5"
              stroke="#9FA7BC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>

          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="relative flex w-full flex-[0_0_auto] items-center gap-8 self-stretch rounded-[32px] bg-[#f9fafd] p-6"
          >
            <div className="flex size-14 items-center justify-center rounded-[100px] bg-white p-4">
              <svg
                className="mx-auto size-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                  stroke="#55607A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8037 15.8032L21.0003 20.9998"
                  stroke="#55607A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="text-adaptive-24 relative flex-1 font-medium leading-8 tracking-normal text-[#55607a] [font-family:'Roboto',Helvetica]">
              Проверка кредитной истории
            </div>
          </motion.div>

          <motion.svg
            ref={ref4}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView4 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3.75V20.25"
              stroke="#9FA7BC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.25 13.5L12 20.25L18.75 13.5"
              stroke="#9FA7BC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>

          <motion.div
            ref={ref5}
            initial={{ opacity: 0, y: 50 }}
            animate={inView5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
            className="relative flex w-full flex-[0_0_auto] items-center gap-8 self-stretch rounded-[32px] bg-green-50 p-6"
          >
            <div className="flex size-14 items-center justify-center rounded-[100px] bg-[#28d397] p-4">
              <svg
                className="mx-auto size-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 13.5L9 18.75L21 6.75"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="text-adaptive-24 relative flex-1 font-medium leading-8 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
              Одобрение заявки
            </div>
          </motion.div>
        </div>
      </div>
      <div className="relative flex w-full flex-1 grow flex-col items-start justify-center gap-9 overflow-hidden rounded-3xl p-7 lg:w-auto lg:py-12 lg:pl-12 lg:pr-[68px]">
        <motion.p
          ref={ref6}
          initial={{ opacity: 0, x: 80 }}
          animate={inView6 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-adaptive-40 relative m-auto mt-[-1.00px] max-w-[480px] text-center font-medium leading-tight tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica] lg:m-0 lg:text-start lg:leading-[48px]"
        >
          Многофункциональный <br />
          бэк-офис для банков
        </motion.p>

        <svg
          className="relative mx-auto h-px w-full max-w-[480px] self-stretch"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 0.5H100"
            stroke="#E3E5E8"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <motion.div
          ref={ref7}
          initial={{ opacity: 0, y: 80 }}
          animate={inView7 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="relative inline-flex w-full flex-[0_0_auto] flex-col items-start gap-4"
        >
          <div className="text-adaptive-24  relative m-auto mt-[-1.00px] text-center font-medium leading-8 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica] lg:m-0 lg:w-[500px] lg:text-start">
            Автоматизированное принятие решений
          </div>

          <p className="text-adaptive-20  relative m-auto text-center font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica] lg:m-0 lg:w-[500px] lg:text-start">
            Система упрощает обработку заявок, проверку данных и коммуникацию
            между подразделениями. Поддерживает автоматические сценарии принятия
            решений, контроль статусов и формирование отчётности в реальном
            времени.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
