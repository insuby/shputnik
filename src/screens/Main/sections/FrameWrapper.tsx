import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Graph } from '../../../components/ui/graph.tsx';
import { RoutesPath } from '../../../routes-path.tsx';
import { useFeedbackForm } from '../../../widgets/feedback-form';

export const FrameWrapper = () => {
  const { setIsOpen } = useFeedbackForm();
  const navigate = useNavigate();

  const onClick = () => {
    setIsOpen(true);
  };

  const handleMicroCreditClick = () => {
    navigate(RoutesPath.MICROCREDIT);
  };

  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const inViews = refs.map((ref) =>
    useInView(ref, { once: true, margin: '-100px' }),
  );
  const delays = [0, 0.15, 0.3, 0.45, 0.6];

  return (
    <div className="relative inline-flex w-full flex-[0_0_auto] flex-col items-center gap-[88px]">
      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
        <motion.div
          id="animate_7"
          ref={refs[0]}
          initial={{ opacity: 0, y: 40 }}
          animate={inViews[0] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: delays[0], ease: 'easeOut' }}
          className="relative mt-[-1.00px] w-[590px] text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
        >
          специализируемся на
        </motion.div>

        <motion.p
          id="animate_8"
          ref={refs[1]}
          initial={{ opacity: 0, y: 40 }}
          animate={inViews[1] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: delays[1], ease: 'easeOut' }}
          className="relative w-[1376px] text-center text-6xl font-medium leading-[68px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
        >
          <span className="text-[#1c222f]">
            программном обеспечении
            <br />
          </span>
          <span className="text-[#9ea7bb]">для кредитования </span>
        </motion.p>
      </div>

      <div className="group relative flex w-full items-start gap-4">
        <motion.div
          id="animate_9_left"
          ref={refs[2]}
          initial={{ opacity: 0, x: -60 }}
          animate={inViews[2] ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: delays[2], ease: 'easeOut' }}
          onClick={handleMicroCreditClick}
          className="relative flex cursor-pointer flex-col items-start justify-between self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-transparent bg-[#f9fafd] p-12  hover:border-[#3573fc] hover:bg-[#f5f7ff]"
        >
          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-6">
            <p
              id="animate_12_left"
              className="relative mt-[-1.00px] w-fit text-[40px] font-normal leading-10 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
            >
              <span className="font-medium leading-[0.1px] text-[#1c222f]">
                Микрофинансовое
                <br />
              </span>

              <span className="font-medium leading-[48px] text-[#1c222f]">
                кредитование
              </span>
            </p>

            <p
              id="animate_13_left"
              className="relative w-[590px] text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
            >
              Полный цикл автоматизации микрофинансового кредитования — от
              заявки до взыскания, с возможностью настройки сценариев и
              процессов под требования организации, включая полную цифровизацию
              всех этапов без ручного труда и с учётом регуляторных стандартов
            </p>
          </div>

          <div className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-white p-4">
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
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>

        <div className="relative flex-1 grow self-stretch overflow-hidden rounded-[32px] bg-[#f9fafc]">
          <div className="relative h-[548px] w-[690px]">
            <img
              className="absolute left-0 top-0 h-[520px] w-[690px]"
              alt="Vector"
              src="/img/vector-1-7.svg"
            />

            <motion.div
              id="animate_10"
              ref={refs[3]}
              initial={{ opacity: 0, y: 40 }}
              animate={inViews[3] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: delays[3], ease: 'easeOut' }}
              className="absolute left-[75px] top-[69px] flex w-[324px] flex-col items-center justify-center gap-6 rounded-[32px] bg-white p-4"
            >
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-5 self-stretch px-4 pb-4 pt-3">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Оформить заявку
                  </div>

                  <div className="relative flex w-64 flex-[0_0_auto] flex-col items-start gap-2">
                    <div className="relative h-3.5 w-full self-stretch">
                      <div className="relative left-[-3px] top-px h-3 w-[261px]">
                        <img
                          className="absolute left-px top-1 h-1 w-[260px]"
                          alt="Vector"
                          src="/img/vector-136.svg"
                        />

                        <img
                          className="absolute left-0 top-[3px] h-1.5 w-[169px]"
                          alt="Vector"
                          src="/img/vector-137-3.svg"
                        />

                        <div className="absolute left-[158px] top-0 size-3 rounded-md bg-green-50 shadow-[0px_4px_8px_#04ca8333]" />
                      </div>
                    </div>

                    <div className="relative h-6 w-full self-stretch">
                      <div className="absolute -top-px left-0 whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        0
                      </div>

                      <div className="absolute -top-px left-[131px] whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        122 000
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-64 flex-[0_0_auto] flex-col items-start gap-2">
                    <div className="relative h-3.5 w-full self-stretch">
                      <div className="relative left-[-3px] top-px h-3 w-[261px]">
                        <img
                          className="absolute left-px top-1 h-1 w-[260px]"
                          alt="Vector"
                          src="/img/vector-136-1.svg"
                        />

                        <img
                          className="absolute left-0 top-[3px] h-1.5 w-[95px]"
                          alt="Vector"
                          src="/img/vector-137-2.svg"
                        />

                        <div className="absolute left-[86px] top-0 size-3 rounded-md bg-green-50 shadow-[0px_4px_8px_#04ca8333]" />
                      </div>
                    </div>

                    <div className="relative h-6 w-full self-stretch">
                      <div className="absolute -top-px left-0 whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        0
                      </div>

                      <div className="absolute -top-px left-20 whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        14
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full flex-[0_0_auto] items-start gap-2 self-stretch">
                  <div className="relative flex flex-1 grow flex-col items-start rounded-[20px] bg-[#f6f8ff] px-4 py-3">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      Сумма
                    </div>

                    <div className="relative mr-[-2.33px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      42 000₽
                    </div>
                  </div>

                  <div className="relative flex flex-1 grow flex-col items-start rounded-[20px] bg-[#f6f8ff] px-4 py-3">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      Срок
                    </div>

                    <div className="relative mr-[-0.33px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      14 дней
                    </div>
                  </div>

                  <div className="relative flex flex-1 grow flex-col items-start rounded-[20px] bg-[#f6f8ff] px-4 py-3">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      Ставка
                    </div>

                    <div className="relative w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      2.5%
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={onClick}
                className="all-[unset] relative box-border flex h-12 w-full items-center justify-center gap-8 self-stretch rounded-3xl bg-gray-90 px-8 py-3"
              >
                <div className="relative mt-[-1.00px] w-[164px] self-stretch whitespace-nowrap text-center text-base font-medium leading-6 tracking-normal text-white [font-family:'Roboto',Helvetica]">
                  Оформить займ
                </div>
              </button>
            </motion.div>

            <img
              className="absolute left-0 top-0 h-[520px] w-[690px]"
              alt="Vector"
              src="/img/vector-3-1.svg"
            />

            <motion.div
              id="animate_11"
              ref={refs[4]}
              initial={{ opacity: 0, y: 40 }}
              animate={inViews[4] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: delays[4], ease: 'easeOut' }}
              className="absolute left-[363px] top-[142px] inline-flex flex-col items-center justify-center gap-3 rounded-[32px] bg-white p-4"
            >
              <Graph sum="122,000" />

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2.5 rounded-[20px] bg-[#f6f8ff] p-5">
                <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
                  <div className="relative size-2 rounded bg-blue-50" />

                  <div className="relative mt-[-1.00px] w-[72px] text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    Текущее
                  </div>

                  <div className="relative mt-[-1.00px] w-[72px] text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    48,456₽
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] items-center gap-3">
                  <div className="relative size-2 rounded bg-green-50" />

                  <div className="relative mt-[-1.00px] w-[72px] text-sm font-normal leading-5 tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                    Основная
                  </div>

                  <div className="relative mt-[-1.00px] w-[72px] text-right text-sm font-medium leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    122,000₽
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
          </div>
        </div>
      </div>
    </div>
  );
};
