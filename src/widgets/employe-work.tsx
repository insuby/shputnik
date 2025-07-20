import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import { Check10 } from '../components/ui/check10.tsx';

export const EmployeeWork = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const inView1 = useInView(ref1, { once: true, margin: '-100px' });
  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView4 = useInView(ref4, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });

  return (
    <div className="flex flex-col items-center justify-center gap-9 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex-col items-center justify-center gap-[68px] flex-[0_0_auto] flex relative self-stretch w-full">
        <motion.div 
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center leading-[60px] relative tracking-[0]">
            Работа сотрудников
          </div>

          <p className="w-[704px] text-[#9ea7bb] text-xl text-center leading-7 relative [font-family:'Roboto',Helvetica] font-normal tracking-[0]">
            Гибкая настройка прав для всех категорий сотрудников, возможность
            совершать любые действия через кабинет сотрудника, контактировать{" "}
            <br />с клиентом через СМС, email или по телефону
          </p>
        </motion.div>

        <motion.div 
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
        >
          <motion.div 
            ref={ref3}
            initial={{ opacity: 0, x: -50 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col items-center gap-12 p-12 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
          >
            <img
              className="absolute w-[623px] h-[448px] top-0 left-[53px]"
              alt="Vector"
              src="/img/widgets/vector-1-3.svg"
            />

            <img
              className="h-[222px] mt-[-11.00px] relative self-stretch w-full"
              alt="Frame"
              src="/img/widgets/frame-1948755086.svg"
            />

            <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
              <p className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                Индивидуальная политика доступа для всех категорий сотрудников,
                возможность настройки ролей
              </p>

              <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                  <div className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full">
                    <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
                      <Check10 className="!relative !w-4 !h-4" />
                    </div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Кредитный менеджер
                    </div>
                  </div>

                  <div className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full">
                    <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
                      <Check10 className="!relative !w-4 !h-4" />
                    </div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Аналитик
                    </div>
                  </div>

                  <div className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full">
                    <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
                      <Check10 className="!relative !w-4 !h-4" />
                    </div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Риск-менджер
                    </div>
                  </div>

                  <div className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full">
                    <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
                      <Check10 className="!relative !w-4 !h-4" />
                    </div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Верификатор
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                  <div className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full">
                    <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
                      <Check10 className="!relative !w-4 !h-4" />
                    </div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Коллектор
                    </div>
                  </div>

                  <div className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full">
                    <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
                      <Check10 className="!relative !w-4 !h-4" />
                    </div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Оператор
                    </div>
                  </div>

                  <div className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full">
                    <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
                      <Check10 className="!relative !w-4 !h-4" />
                    </div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Супервайзер
                    </div>
                  </div>

                  <div className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full">
                    <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
                      <Check10 className="!relative !w-4 !h-4" />
                    </div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      Руководитель
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            ref={ref4}
            initial={{ opacity: 0, x: 50 }}
            animate={inView4 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-col items-center gap-12 p-12 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-[32px] overflow-hidden"
          >
            <img
              className="absolute w-[608px] h-[488px] top-0 left-0"
              alt="Vector"
              src="/img/widgets/vector-1-4.svg"
            />

            <div className="h-[210px] relative self-stretch w-full">
              <div className="flex flex-col w-[434px] items-start relative top-1 left-[73px]">
                <div className="flex items-end justify-end pl-16 pr-2 py-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col w-[296px] items-start gap-1 relative">
                    <div className="self-stretch font-normal text-[#9ea7bb] text-xs leading-4 relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking-[0]">
                      Вы
                    </div>

                    <div className="flex flex-col items-start gap-2.5 px-3 py-2 relative self-stretch w-full flex-[0_0_auto] bg-violet-50 rounded-[16px_16px_0px_16px]">
                      <p className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffff] text-base leading-6 whitespace-nowrap relative tracking-[0]">
                        Могу ли я досрочно показить заем?
                      </p>
                    </div>
                  </div>

                  <img
                    className="relative w-3 h-3"
                    alt="Subtract"
                    src="/img/widgets/subtract-5.svg"
                  />
                </div>

                <div className="flex items-end pl-2 pr-20 py-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-2 p-5 relative flex-[0_0_auto] rounded-[100px] [background:url(/img/widgets/frame-3.png)_50%_50%_/_cover]" />

                  <img
                    className="relative w-3 h-3"
                    alt="Subtract"
                    src="/img/widgets/subtract-6.svg"
                  />

                  <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                    <div className="self-stretch font-normal text-[#9ea7bb] text-xs leading-4 relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking-[0]">
                      Менеджер Руслана
                    </div>

                    <div className="flex items-start px-3 py-2 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] rounded-[16px_16px_16px_0px]">
                      <p className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-base leading-6 relative tracking-[0]">
                        Да, конечно, итоговая сумма для погашения задолженности
                        на сегодняшний день 14 456 ₽
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              ref={ref5}
              initial={{ opacity: 0, y: 20 }}
              animate={inView5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]"
            >
              <p className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                Сохранение действий сотрудников, <br />
                контактов с клиентами и других операций
              </p>

              <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                  <div className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full">
                    <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                      <Check10 className="!relative !w-4 !h-4" />
                    </div>

                    <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                      История взаимодействия с клиентом
                    </div>
                  </div>

                  <div className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full">
                    <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                      <Check10 className="!relative !w-4 !h-4" />
                    </div>

                    <p className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                      Online-чат для коммуникации с клиентом
                    </p>
                  </div>

                  <div className="flex h-7 items-center justify-center gap-6 relative self-stretch w-full">
                    <div
                      className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                      <svg
                        className="!relative !w-4 !h-4"
                        fill="none"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 9L6 12.5L14 4.5"
                          stroke="#3573FC"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    <p
                      className="flex-1 mt-[-1.00px] text-[#9ea7bb] text-xl leading-7 relative [font-family:'Roboto',Helvetica] font-normal tracking-[0]">
                      Интеграция с телефонией, email и СМС сервисами
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};