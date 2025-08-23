import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

import { Graph } from '../../../components/ui/graph.tsx';
import { useFeedbackForm } from '../../../widgets/feedback-form';

export const Frame = () => {
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };

  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const inViews = refs.map((ref) =>
    useInView(ref, { once: true, margin: '-100px' }),
  );
  const delays = [0, 0.15, 0.3, 0.45, 0.6, 0.75];

  return (
    <div className="w-full overflow-hidden rounded-[24px] bg-[#ffffff] md:rounded-[32px]">
      <div className="relative flex min-h-[520px] w-full flex-col items-center gap-8 overflow-hidden rounded-[24px] px-4 pb-0 md:pt-8 md:h-[900px] md:gap-20 md:rounded-[32px] md:px-10 md:pt-[88px] xl:px-20">
        <img
          className="absolute left-1/2 top-[220px] hidden h-[560px] w-[600px] -translate-x-1/2 md:left-[113px] md:top-[272px] md:block md:h-[1060px] md:w-[1108px] md:translate-x-0"
          alt="Vector"
          src="/img/vector-1-6.svg"
        />

        <div className="relative flex w-full max-w-[980px] flex-col items-center justify-center gap-4 px-0 md:gap-8 md:px-0">
          <motion.p
            id="animate_1"
            ref={refs[0]}
            initial={{ opacity: 0, y: 40 }}
            animate={inViews[0] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: delays[0], ease: 'easeOut' }}
            className="relative mt-[-1.00px] self-stretch text-center text-[28px] font-normal leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-4xl md:leading-[48px] xl:text-6xl xl:leading-[60px]"
          >
            <span className="font-medium text-[#1c222f] md:leading-[56px] xl:leading-[68px]">
              Программное обеспечение для{' '}
            </span>

            <span className="font-medium text-[#3573fc] md:leading-[56px] xl:leading-[68px]">
              автоматизации{' '}
            </span>

            <span className="font-medium text-[#1c222f] md:leading-[56px] xl:leading-[68px]">
              кредитования
            </span>
          </motion.p>

          <motion.p
            id="animate_2"
            ref={refs[1]}
            initial={{ opacity: 0, y: 40 }}
            animate={inViews[1] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: delays[1], ease: 'easeOut' }}
            className="relative w-full text-center text-[#929cb3] [font-family:'Roboto',Helvetica] md:w-[600px]"
          ></motion.p>
        </div>

        <motion.img
          id="animate_3"
          ref={refs[2]}
          initial={{ opacity: 0, y: 40 }}
          animate={inViews[2] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: delays[2], ease: 'easeOut' }}
          className="relative w-[220px] flex-[0_0_auto] md:w-[320px] xl:w-[412px]"
          alt="Iphone pro max"
          src="/img/iphone-16-pro-max---3.png"
        />

        <motion.div
          id="animate_6"
          ref={refs[5]}
          initial={{ opacity: 0, y: 40 }}
          animate={inViews[5] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: delays[5], ease: 'easeOut' }}
          className="absolute left-[854px] top-[730px] hidden items-center gap-4 rounded-[32px] bg-white py-4 pl-4 pr-6 md:inline-flex"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-8 rounded-3xl bg-[#f2f5ff] p-4">
            <img className="relative size-8" alt="Money" src="/img/money.svg" />
          </div>

          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
              Ежемесячный платеж
            </div>

            <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              4 950₽
            </div>
          </div>
        </motion.div>

        <motion.div
          id="animate_4"
          ref={refs[3]}
          initial={{ opacity: 0, y: 40 }}
          animate={inViews[3] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: delays[3], ease: 'easeOut' }}
          className="absolute left-[94px] top-[559px] hidden w-[472px] items-center justify-center gap-5 rounded-[32px] bg-white p-4 md:flex"
        >
          <Graph />

          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start justify-between self-stretch rounded-[20px] bg-[#f6f8ff] p-5">
            <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
              <div className="relative size-2 rounded bg-blue-50" />

              <div className="relative mt-[-1.00px] w-[72px] text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                Текущее
              </div>

              <div className="relative mt-[-1.00px] w-[72px] text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                23,456₽
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
              <div className="relative size-2 rounded bg-green-50" />

              <div className="relative mt-[-1.00px] w-[72px] text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                Основная
              </div>

              <div className="relative mt-[-1.00px] w-[72px] text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                42,000₽
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
              <div className="relative size-2 rounded bg-yellow-50" />

              <div className="relative mt-[-1.00px] w-[72px] text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                Проценты
              </div>

              <div className="relative mt-[-1.00px] w-[72px] text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                4,000₽
              </div>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
              <div className="relative size-2 rounded bg-red-50" />

              <div className="relative mt-[-1.00px] w-[72px] text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                Штраф
              </div>

              <div className="relative mt-[-1.00px] w-[72px] text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                2,700₽
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="animate_5"
          ref={refs[4]}
          initial={{ opacity: 0, y: 40 }}
          animate={inViews[4] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: delays[4], ease: 'easeOut' }}
          className="absolute left-[957px] top-[458px] hidden w-[324px] flex-col items-center justify-center gap-5 rounded-[32px] bg-white p-4 md:flex"
        >
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="w/full relative flex flex-[0_0_auto] flex-col items-start gap-6 self-stretch p-4">
              <div className="w/full relative flex flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                <div className="w/full relative flex h-6 items-center justify-between self-stretch">
                  <div className="relative w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    Сумма
                  </div>

                  <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    42 000₽
                  </div>
                </div>

                <div className="w/full relative h-3.5 self-stretch">
                  <div className="relative -left-0.5 top-px h-3 w-[260px]">
                    <img
                      className="absolute left-0 top-1 h-1 w-[260px]"
                      alt="Vector"
                      src="/img/vector-136.svg"
                    />

                    <img
                      className="absolute left-0 top-1 h-1 w-[167px]"
                      alt="Vector"
                      src="/img/vector-136.svg"
                    />
                  </div>
                </div>

                <div className="w/full relative flex items-center justify-between self-stretch">
                  <div className="relative w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    Срок
                  </div>

                  <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    18 месяцев
                  </div>
                </div>

                <div className="w/full relative h-3.5 self-stretch">
                  <div className="relative -left-0.5 top-px h-3 w-[260px]">
                    <img
                      className="absolute left-0 top-1 h-1 w-[260px]"
                      alt="Vector"
                      src="/img/vector-137-2.svg"
                    />

                    <img
                      className="w/[110px] absolute left-0 top-1 h-1"
                      alt="Vector"
                      src="/img/vector-137-3.svg"
                    />
                  </div>
                </div>

                <div className="w/full relative flex items-center justify-between self-stretch">
                  <div className="relative w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    Ставка
                  </div>

                  <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    8%
                  </div>
                </div>
              </div>

              <button
                onClick={onClick}
                className="inline-flex items-center justify-center gap-2 rounded-[32px] bg-gray-90 px-4 py-3 text-base font-medium leading-6 tracking-normal text-white [font-family:'Roboto',Helvetica]"
              >
                Рассчитать
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
