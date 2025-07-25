import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useFeedbackForm } from '../../../widgets/feedback-form/use-feedback-form';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '../../../routes-path.tsx';

export const FrameWrapper = () => {
  const { setIsOpen } = useFeedbackForm();
  const navigate = useNavigate();
  
  const onClick = () => {
    setIsOpen(true);
  };

  const handleMicroCreditClick = () => {
    navigate(RoutesPath.MICROCREDIT);
  };

  const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const inViews = refs.map((ref) => useInView(ref, { once: true, margin: '-100px' }));
  const delays = [0, 0.15, 0.3, 0.45, 0.6];

  return (
    <div className="inline-flex flex-col w-full items-center gap-[88px] relative flex-[0_0_auto]">
      <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
        <motion.div
          id="animate_7"
          ref={refs[0]}
          initial={{ opacity: 0, y: 40 }}
          animate={inViews[0] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: delays[0], ease: 'easeOut' }}
          className="w-[590px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl text-center leading-7 relative tracking-[0]"
        >
          Специализируемся
        </motion.div>

        <motion.p
          id="animate_8"
          ref={refs[1]}
          initial={{ opacity: 0, y: 40 }}
          animate={inViews[1] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: delays[1], ease: 'easeOut' }}
          className="w-[1376px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-6xl text-center leading-[68px] relative tracking-[0]"
        >
          <span className="text-[#1c222f]">
            на программном обеспечении
            <br />
          </span>
          <span className="text-[#9ea7bb]">для кредитования</span>
        </motion.p>
      </div>

      <div className="group flex w-full h-[520px] items-start gap-4 relative">
        <motion.div
          id="animate_9_left"
          ref={refs[2]}
          initial={{ opacity: 0, x: -60 }}
          animate={inViews[2] ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: delays[2], ease: 'easeOut' }}
          onClick={handleMicroCreditClick}
          className="flex flex-col items-start justify-between p-12 relative self-stretch bg-[#f9fafd] hover:bg-[#f5f7ff] cursor-pointer border-2 border-solid hover:border-[#3573fc] border-transparent  rounded-[32px] overflow-hidden"
        >
          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <p id="animate_12_left" className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[40px] leading-10 relative tracking-[0]">
              <span className="font-medium text-[#1c222f] leading-[0.1px]">
                Микрофинансовое
                <br />
              </span>

              <span className="font-medium text-[#1c222f] leading-[48px]">
                кредитование
              </span>
            </p>

            <p  id="animate_13_left" className="w-[590px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]">
              Полный цикл автоматизации микрофинансового кредитования — от заявки до взыскания, с возможностью настройки сценариев и процессов под требования организации, включая полную цифровизацию всех этапов без ручного труда и с учётом регуляторных стандартов.
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

        <div className="relative flex-1 self-stretch grow bg-[#f9fafc] rounded-[32px] overflow-hidden">
          <div className="relative w-[690px] h-[548px]">
            <img
              className="absolute w-[690px] h-[520px] top-0 left-0"
              alt="Vector"
              src="/img/vector-1-7.svg"
            />

            <motion.div
              id="animate_10"
              ref={refs[3]}
              initial={{ opacity: 0, y: 40 }}
              animate={inViews[3] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: delays[3], ease: 'easeOut' }}
              className="flex flex-col w-[324px] items-center justify-center gap-6 p-4 absolute top-[69px] left-[75px] bg-white rounded-[32px]"
            >
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-5 pt-3 pb-4 px-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                    Оформить заявку
                  </div>

                  <div className="flex flex-col w-64 items-start gap-2 relative flex-[0_0_auto]">
                    <div className="relative self-stretch w-full h-3.5">
                      <div className="relative w-[261px] h-3 top-px left-[-3px]">
                        <img
                          className="absolute w-[260px] h-1 top-1 left-px"
                          alt="Vector"
                          src="/img/vector-136.svg"
                        />

                        <img
                          className="w-[169px] h-1.5 top-[3px] absolute left-0"
                          alt="Vector"
                          src="/img/vector-137-3.svg"
                        />

                        <div className="absolute w-3 h-3 top-0 left-[158px] bg-green-50 rounded-md shadow-[0px_4px_8px_#04ca8333]" />
                      </div>
                    </div>

                    <div className="relative self-stretch w-full h-6">
                      <div className="absolute -top-px left-0 font-normal text-[#7a86a2] text-base leading-6 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                        0
                      </div>

                      <div className="absolute -top-px left-[131px] font-medium text-gray-90 text-base leading-6 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                        122 000
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-64 items-start gap-2 relative flex-[0_0_auto]">
                    <div className="relative self-stretch w-full h-3.5">
                      <div className="relative w-[261px] h-3 top-px left-[-3px]">
                        <img
                          className="absolute w-[260px] h-1 top-1 left-px"
                          alt="Vector"
                          src="/img/vector-136-1.svg"
                        />

                        <img
                          className="w-[95px] h-1.5 top-[3px] absolute left-0"
                          alt="Vector"
                          src="/img/vector-137-2.svg"
                        />

                        <div className="absolute w-3 h-3 top-0 left-[86px] bg-green-50 rounded-md shadow-[0px_4px_8px_#04ca8333]" />
                      </div>
                    </div>

                    <div className="relative self-stretch w-full h-6">
                      <div className="absolute -top-px left-0 font-normal text-[#7a86a2] text-base leading-6 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                        0
                      </div>

                      <div className="absolute -top-px left-20 font-medium text-gray-90 text-base leading-6 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                        14
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start px-4 py-3 relative flex-1 grow bg-[#f6f8ff] rounded-[20px]">
                    <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-base leading-6 whitespace-nowrap relative tracking-[0]">
                      Сумма
                    </div>

                    <div className="relative w-fit mr-[-2.33px] font-medium text-gray-90 text-base leading-6 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                      42 000₽
                    </div>
                  </div>

                  <div className="flex flex-col items-start px-4 py-3 relative flex-1 grow bg-[#f6f8ff] rounded-[20px]">
                    <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-base leading-6 whitespace-nowrap relative tracking-[0]">
                      Срок
                    </div>

                    <div className="relative w-fit mr-[-0.33px] font-medium text-gray-90 text-base leading-6 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                      14 дней
                    </div>
                  </div>

                  <div className="flex flex-col items-start px-4 py-3 relative flex-1 grow bg-[#f6f8ff] rounded-[20px]">
                    <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-base leading-6 whitespace-nowrap relative tracking-[0]">
                      Ставка
                    </div>

                    <div className="w-fit font-medium text-gray-90 text-base leading-6 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      2.5%
                    </div>
                  </div>
                </div>
              </div>

              <button onClick={onClick} className="all-[unset] box-border flex h-12 gap-8 px-8 py-3 self-stretch w-full bg-gray-90 rounded-3xl items-center justify-center relative">
                <div className="self-stretch w-[164px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-white text-base text-center leading-6 whitespace-nowrap relative tracking-[0]">
                  Оформить займ
                </div>
              </button>
            </motion.div>

            <img
              className="absolute w-[690px] h-[520px] top-0 left-0"
              alt="Vector"
              src="/img/vector-3-1.svg"
            />

            <motion.div
              id="animate_11"
              ref={refs[4]}
              initial={{ opacity: 0, y: 40 }}
              animate={inViews[4] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: delays[4], ease: 'easeOut' }}
              className="inline-flex flex-col items-center justify-center gap-3 p-4 absolute top-[142px] left-[363px] bg-white rounded-[32px]"
            >
              <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] rounded-[100px]">
                <div className="relative w-[184px] h-[184px]">
                  <div className="relative h-[184px]">
                    <div className="absolute w-[184px] h-[184px] top-0 left-0">
                      <img
                        className="absolute w-[88px] h-[184px] top-0 left-0"
                        alt="Subtract"
                        src="/img/main/subtract-3.svg"
                      />

                      <img
                        className="absolute w-[88px] h-[108px] top-[76px] left-24"
                        alt="Subtract"
                        src="/img/main/subtract.svg"
                      />

                      <div className="inline-flex h-[62px] items-center absolute top-[61px] left-8 flex-col gap-0.5">
                        <div
                          className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-sm leading-5 whitespace-nowrap relative tracking-[0]">
                          Вся сумма
                        </div>

                        <div
                          className="w-fit [font-family:'Roboto',Helvetica] font-medium text-[#1c222f] text-[28px] text-center leading-10 whitespace-nowrap relative tracking-[0]">
                          122,000₽
                        </div>
                      </div>
                    </div>


                    <img
                      className="absolute w-[21px] h-[34px] top-[34px] left-[158px]"
                      alt="Subtract"
                      src="/img/main/subtract-1.svg"
                    />

                    <img
                      className="absolute w-[59px] h-[31px] top-0 left-24"
                      alt="Subtract"
                      src="/img/main/subtract-2.svg"
                    />
                  </div>
                </div>
              </div>

              <div
                className="inline-flex flex-col items-start gap-2.5 p-5 relative flex-[0_0_auto] bg-[#f6f8ff] rounded-[20px]">
                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <div className="relative w-2 h-2 bg-blue-50 rounded" />

                  <div
                    className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm leading-5 relative tracking-[0]">
                    Текущее
                  </div>

                  <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right leading-5 relative tracking-[0]">
                    48,456₽
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <div className="relative w-2 h-2 bg-green-50 rounded" />

                  <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm leading-5 relative tracking-[0]">
                    Основная
                  </div>

                  <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right leading-5 relative tracking-[0]">
                    122,000₽
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <div className="relative w-2 h-2 bg-yellow-50 rounded" />

                  <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm leading-5 relative tracking-[0]">
                    Проценты
                  </div>

                  <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right leading-5 relative tracking-[0]">
                    4,000₽
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <div className="relative w-2 h-2 bg-red-50 rounded" />

                  <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm leading-5 relative tracking-[0]">
                    Штраф
                  </div>

                  <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right leading-5 relative tracking-[0]">
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
