import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import Slider from 'react-slick';

import { HeroButtons } from '../../components/ui/hero-buttons.tsx';
import { useFeedbackForm } from '../../widgets/feedback-form';
import { Cta } from './Cta.tsx';

export const Fdata = () => {
  const { setIsOpen } = useFeedbackForm();
  const sliderRef = useRef<Slider>(null);

  const ref3 = useRef(null);
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col w-[1440px] items-center gap-[136px] pt-8 pb-[136px] px-8 relative flex-[0_0_auto]">
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col h-[636px] items-start gap-20 p-12 relative self-stretch w-full bg-blue-50 rounded-[32px] overflow-hidden">
          <img
            className="absolute w-[954px] h-[842px] -top-16 left-[430px]"
            alt="Vector"
            src="https://c.animaapp.com/mdvl6goomkbGpL/img/vector-1-5.svg"
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
                  <div className="w-[624px] mt-[-1.00px] font-medium text-white text-6xl leading-[68px] relative [font-family:'Roboto',Helvetica] tracking-[0]">
                    ПО для <br />
                    реконсиляции данных
                  </div>

                  <p className="relative w-[624px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffcc] text-xl tracking-[0] leading-7">
                    Автоматизация всех ваших процессов обработки <br />
                    финансовых данных с минимальной зависимостью <br />
                    от персонала.
                  </p>
                </div>

                <button className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-white rounded-[100px] items-center justify-center">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
                    Связаться с нами
                  </div>
                </button>
              </div>
            </motion.div>
          </HeroButtons>

          <img
            className="absolute w-[619px] h-[568px] top-44 left-[1053px]"
            alt="Vector"
            src="https://c.animaapp.com/mdvl6goomkbGpL/img/vector-4-2.svg"
          />

          <motion.div
            ref={ref3}
            initial={{ opacity: 0, x: -50 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
            className="flex w-[576px] items-start justify-end gap-[11.96px] p-6 absolute top-[168px] left-[704px] bg-white rounded-[32px]"
          >
            <div className="flex flex-col items-start gap-6 relative flex-1 grow">
              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex h-8 items-center justify-center gap-3 relative self-stretch w-full">
                  <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-medium text-[#1c222f] text-base tracking-[0] leading-6">
                    Dashboard
                  </div>

                  <img
                    className="relative flex-[0_0_auto]"
                    alt="Frame"
                    src="https://c.animaapp.com/mdvl6goomkbGpL/img/frame-84.svg"
                  />

                  <img
                    className="relative flex-[0_0_auto]"
                    alt="Frame"
                    src="https://c.animaapp.com/mdvl6goomkbGpL/img/frame-85.svg"
                  />
                </div>

                <div className="flex h-9 items-center gap-4 pl-4 pr-3 py-2 relative self-stretch w-full rounded-[100px] border border-solid border-[#e3e4e7]">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xs tracking-[0] leading-5">
                    Search
                  </div>

                  <img
                    className="relative w-4 h-4"
                    alt="Magnifying glass"
                    src="https://c.animaapp.com/mdvl6goomkbGpL/img/magnifyingglass.svg"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start gap-4 px-3 py-1 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex-1 relative mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xs tracking-[0] leading-5">
                    Status
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xs tracking-[0] leading-5">
                    Reconciliation
                  </div>

                  <div className="relative w-20 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xs tracking-[0] leading-5">
                    Operator
                  </div>

                  <div className="relative w-20 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xs tracking-[0] leading-5">
                    Last run time
                  </div>

                  <div className="relative w-20 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xs text-center tracking-[0] leading-5">
                    Mismatches
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex h-11 items-start gap-4 p-3 relative self-stretch w-full bg-[#f9fafd] rounded-xl">
                    <div className="flex items-center justify-center gap-2 relative flex-1 grow">
                      <div className="relative w-2 h-2 bg-red-50 rounded" />

                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                        Unreconciled
                      </div>
                    </div>

                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                      DP1 vs DP2
                    </div>

                    <div className="relative w-20 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                      John Smith
                    </div>

                    <div className="w-20 mt-[-1.00px] font-normal text-[#55607a] text-xs leading-5 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      25 may 07:16
                    </div>

                    <div className="relative w-20 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs text-center tracking-[0] leading-5">
                      54
                    </div>
                  </div>

                  <div className="flex h-11 items-start gap-4 p-3 relative self-stretch w-full bg-[#f9fafd] rounded-xl">
                    <div className="flex items-center justify-center gap-2 relative flex-1 grow">
                      <div className="relative w-2 h-2 bg-green-50 rounded" />

                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                        Reconciled
                      </div>
                    </div>

                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                      DP1 vs DP2
                    </div>

                    <div className="relative w-20 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                      John Smith
                    </div>

                    <div className="w-20 mt-[-1.00px] font-normal text-[#55607a] text-xs leading-5 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      24 may 12:44
                    </div>

                    <div className="relative w-20 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs text-center tracking-[0] leading-5">
                      0
                    </div>
                  </div>

                  <div className="flex h-11 items-start gap-4 p-3 relative self-stretch w-full bg-[#f9fafd] rounded-xl">
                    <div className="flex items-center justify-center gap-2 relative flex-1 grow">
                      <div className="relative w-2 h-2 bg-green-50 rounded" />

                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                        Reconciled
                      </div>
                    </div>

                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                      DP1 vs DP2
                    </div>

                    <div className="relative w-20 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                      John Smith
                    </div>

                    <div className="w-20 mt-[-1.00px] font-normal text-[#55607a] text-xs leading-5 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      23 may 05:38
                    </div>

                    <div className="relative w-20 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs text-center tracking-[0] leading-5">
                      2
                    </div>
                  </div>

                  <div className="flex h-11 items-start gap-4 p-3 relative self-stretch w-full bg-[#f9fafd] rounded-xl">
                    <div className="flex items-center justify-center gap-2 relative flex-1 grow">
                      <div className="relative w-2 h-2 bg-red-50 rounded" />

                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                        Unreconciled
                      </div>
                    </div>

                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                      DP1 vs DP2
                    </div>

                    <div className="relative w-20 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                      John Smith
                    </div>

                    <div className="w-20 mt-[-1.00px] font-normal text-[#55607a] text-xs leading-5 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      22 may 07:16
                    </div>

                    <div className="relative w-20 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs text-center tracking-[0] leading-5">
                      12
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <img
            className="absolute w-[601px] h-[464px] top-[172px] left-[775px]"
            alt="Vector"
            src="https://c.animaapp.com/mdvl6goomkbGpL/img/vector-5.svg"
          />

          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="flex w-[368px] items-start justify-end gap-[11.96px] p-6 absolute top-[364px] left-[960px] bg-white rounded-[32px_32px_0px_0px]"
          >
            <div className="flex-col gap-3 flex-1 self-stretch grow flex items-start relative">
              <div className="flex items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#1c222f] text-base tracking-[0] leading-6">
                  Filter
                </div>
              </div>

              <div className="gap-6 self-stretch w-full flex-[0_0_auto] flex items-start relative">
                <div className="flex-col gap-2 flex-1 grow flex items-start relative">
                  <div className="self-stretch relative mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xs tracking-[0] leading-5">
                    Status
                  </div>

                  <div className="h-5 items-center justify-center gap-2 flex relative self-stretch w-full">
                    <div className="relative w-4 h-4 bg-[#ffffff] rounded border border-solid border-[#bdc7e0]" />

                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                      Waiting
                    </div>
                  </div>

                  <div className="h-5 items-center justify-center gap-2 flex relative self-stretch w-full">
                    <div className="relative w-4 h-4 bg-[#ffffff] rounded border border-solid border-[#bdc7e0]" />

                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                      In progress
                    </div>
                  </div>

                  <div className="h-5 items-center justify-center gap-2 flex relative self-stretch w-full">
                    <div className="relative w-4 h-4 bg-[#ffffff] rounded border border-solid border-[#bdc7e0]" />

                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                      Reconciled
                    </div>
                  </div>

                  <div className="h-5 items-center justify-center gap-2 flex relative self-stretch w-full">
                    <div className="relative w-4 h-4 bg-[#ffffff] rounded border border-solid border-[#bdc7e0]" />

                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                      Unreconciled
                    </div>
                  </div>

                  <div className="h-5 items-center justify-center gap-2 flex relative self-stretch w-full">
                    <div className="relative w-4 h-4 bg-[#ffffff] rounded border border-solid border-[#bdc7e0]" />

                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                      Created
                    </div>
                  </div>

                  <div className="h-5 items-center justify-center gap-2 flex relative self-stretch w-full">
                    <div className="relative w-4 h-4 bg-[#ffffff] rounded border border-solid border-[#bdc7e0]" />

                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                      Failed
                    </div>
                  </div>
                </div>

                <div className="flex-col justify-center gap-3 flex-1 grow flex items-start relative">
                  <div className="flex flex-col w-44 h-[76px] items-start gap-2 relative mr-[-28.00px]">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xs tracking-[0] leading-5">
                      Users
                    </div>

                    <div className="h-5 items-center justify-center gap-2 flex relative self-stretch w-full">
                      <div className="relative w-4 h-4 bg-[#ffffff] rounded border border-solid border-[#bdc7e0]" />

                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                        By me
                      </div>
                    </div>

                    <div className="h-5 items-center justify-center gap-2 flex relative self-stretch w-full">
                      <div className="relative w-4 h-4 bg-[#ffffff] rounded border border-solid border-[#bdc7e0]" />

                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                        By others
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-44 items-start gap-2 relative flex-[0_0_auto] mr-[-28.00px]">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xs tracking-[0] leading-5">
                      Projects
                    </div>

                    <div className="h-5 items-center justify-center gap-2 flex relative self-stretch w-full">
                      <div className="relative w-4 h-4 bg-[#ffffff] rounded border border-solid border-[#bdc7e0]" />

                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                        Payments
                      </div>
                    </div>

                    <div className="h-5 items-center justify-center gap-2 flex relative self-stretch w-full">
                      <div className="relative w-4 h-4 bg-[#ffffff] rounded border border-solid border-[#bdc7e0]" />

                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                        Finance
                      </div>
                    </div>

                    <div className="h-5 items-center justify-center gap-2 flex relative self-stretch w-full">
                      <div className="relative w-4 h-4 bg-[#ffffff] rounded border border-solid border-[#bdc7e0]" />

                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5">
                        Trading
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <img
            className="absolute w-[410px] h-[401px] top-[454px] left-[980px]"
            alt="Vector"
            src="https://c.animaapp.com/mdvl6goomkbGpL/img/vector-6.svg"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
        <div className="w-[1376px] gap-6 relative flex-[0_0_auto] rounded-3xl flex items-center">
          <div className="flex-col items-start gap-12 pl-12 pr-[68px] py-12 flex-1 grow rounded-3xl overflow-hidden flex relative">
            <div className="flex flex-col w-[560px] items-center justify-center gap-6 relative flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl tracking-[0] leading-[60px]">
                f.Data в деталях
              </div>

              <p className="self-stretch relative [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                f.Data автоматизирует все ваши процессы обработки финансовых
                данных с минимальной зависимостью от персонала. Наша
                инновационная платформа загружает и реконсилирует данные,
                обрабатывает исключения и определяет причины расхождений,
                вычисляет и аудирует ключевые метрики и показатели, строит
                кроссотчетность и аналитику.
              </p>
            </div>
          </div>

          <img
            className="relative flex-1 self-stretch grow"
            alt="Frame"
            src="https://c.animaapp.com/mdvl6goomkbGpL/img/frame-21.svg"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[656px] items-center justify-center gap-2.5 relative flex-[0_0_auto]">
          <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center leading-[60px] relative tracking-[0]">
            Как мы помогаем финансам
          </div>

          <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl text-center leading-7 relative tracking-[0]">
            Философия и архитектура f.Data позволяет нашим клиентам уверенно
            управлять финансовыми данными, делать это быстро
            <br />и с высокой точностью
          </p>
        </div>

        <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
          <div className="flex w-[1376px] items-start gap-6 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
              <img
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="https://c.animaapp.com/mdvl6goomkbGpL/img/frame-18-4.svg"
              />

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                  Сокращение финансовых потерь
                </div>

                <p className="self-stretch font-normal text-gray-40 text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                  Собственники бизнеса, CFO, COO, CIO получают уверенность
                  <br />в корректности финансовых данных, передаваемых
                  технологическими платформами
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
              <img
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="https://c.animaapp.com/mdvl6goomkbGpL/img/frame-20.svg"
              />

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                  Оптимизация ресурсов
                </div>

                <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]">
                  Автоматизация экономит рабочее время
                  <br />и в разы увеличивает доступные ресурсы
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-[1376px] items-start gap-6 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
              <img
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="https://c.animaapp.com/mdvl6goomkbGpL/img/frame-19.svg"
              />

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                  Прозрачная аналитика
                </div>

                <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]">
                  Получайте точную картину состояния ваших финансовых данных за
                  считанные минуты
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
              <img
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="https://c.animaapp.com/mdvl6goomkbGpL/img/frame-19-2.svg"
              />

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                  Адаптивность
                </div>

                <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]">
                  Теперь легко создавать и изменять процессы обработки
                  финансовых данных
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
              <img
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="https://c.animaapp.com/mdvl6goomkbGpL/img/frame-18-5.svg"
              />

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                  Сокращение ошибок
                </div>

                <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]">
                  Сокращайте количество ошибок
                  <br />и улучшайте качество финансовых данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cta
        className="!flex-[0_0_auto]"
        hasDiv={false}
        text="Защитите ваши финансовые данные сегодня"
        text1="Заказать демо"
      />
      <div className="relative w-[1376px] h-[568px]">
        <div className="w-[1472px] gap-[68px] absolute top-0 left-0 flex items-center">
          <div className="flex flex-col w-[496px] items-start justify-center gap-8 relative">
            <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl leading-[60px] relative tracking-[0]">
              Инновационная технология
              <br />
              для вашего бизнеса
            </div>

            <button
              onClick={onClick}
              className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-blue-50 rounded-[100px] items-center justify-center"
            >
              <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-xl leading-7 whitespace-nowrap relative tracking-[0]">
                Попробовать
              </div>
            </button>
          </div>

          <div className="w-[915px]">
            <Slider
              ref={sliderRef}
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={2}
              slidesToScroll={1}
              centerMode={true}
              centerPadding="0px"
              arrows={false}
              className="p2p-slider"
            >
              <div className="px-3">
                <div className="flex flex-col w-[443px] h-[480px] items-center gap-12 p-12 relative bg-[#f9fafd] rounded-[32px] overflow-hidden">
                  <img
                    className="absolute w-[443px] h-[406px] top-0 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/mdvl6goomkbGpL/img/vector-1-1.svg"
                  />

                  <div className="relative flex-1 self-stretch w-full grow">
                    <div className="flex flex-col w-[299px] items-center justify-center gap-2.5 p-6 relative top-1 left-6 bg-white rounded-[32px]">
                      <div className="self-stretch [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-sm leading-5 relative tracking-[0]">
                        Настройка правил
                      </div>

                      <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-base leading-6 relative tracking-[0]">
                          Автоматическая загрузка
                        </div>

                        <div className="relative w-7 h-4 bg-[#e8ebf4] rounded-[100px] overflow-hidden">
                          <div className="relative w-3 h-3 top-0.5 left-0.5 bg-[#ffffff] rounded-md" />
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-base leading-6 relative tracking-[0]">
                          Хранение файлов
                        </div>

                        <div className="relative w-7 h-4 bg-green-50 rounded-[100px] overflow-hidden">
                          <div className="relative w-3 h-3 top-0.5 left-3.5 bg-[#ffffff] rounded-md" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
                      Загрузка и реконсиляция данных
                    </div>

                    <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl text-center leading-7 relative tracking-[0]">
                      Поддержка любых форматов интеграций и файлов, гибкая
                      настройка правил обработки данных
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3">
                <div className="flex flex-col w-[442px] h-[480px] items-center gap-12 p-12 relative bg-[#f9fafd] rounded-[32px] overflow-hidden">
                  <img
                    className="absolute w-[377px] h-[406px] top-0 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/mdvl6goomkbGpL/img/vector-1-4.svg"
                  />

                  <div className="relative flex-1 self-stretch w-full grow">
                    <div className="inline-flex items-center gap-2.5 p-3 absolute top-1 left-[23px] bg-[#ffffff] rounded-[32px]">
                      <div className="relative w-[120px] h-[120px]">
                        <div className="relative w-[120px] h-[120px]">
                          <div className="absolute w-[120px] h-[120px] top-0 left-0">
                            <img
                              className="absolute w-[57px] h-[120px] top-0 left-0"
                              alt="Subtract"
                              src="https://c.animaapp.com/mdvl6goomkbGpL/img/subtract-2.svg"
                            />

                            <img
                              className="absolute w-[57px] h-[71px] top-[49px] left-[63px]"
                              alt="Subtract"
                              src="https://c.animaapp.com/mdvl6goomkbGpL/img/subtract.svg"
                            />

                            <div className="inline-flex flex-col items-center absolute top-[37px] left-[29px]">
                              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-xs tracking-[0] leading-4 whitespace-nowrap">
                                Total
                              </div>

                              <div className="w-fit -mt-0.5 [font-family:'Roboto',Helvetica] font-medium text-[#1c222f] text-xl text-center leading-8 whitespace-nowrap relative tracking-[0]">
                                88,000
                              </div>
                            </div>
                          </div>

                          <img
                            className="absolute w-3.5 h-[22px] top-[22px] left-[103px]"
                            alt="Subtract"
                            src="https://c.animaapp.com/mdvl6goomkbGpL/img/subtract-1.svg"
                          />

                          <img
                            className="absolute w-[39px] h-5 top-0 left-[63px]"
                            alt="Subtract"
                            src="https://c.animaapp.com/mdvl6goomkbGpL/img/subtract-3.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <img
                      className="absolute w-36 h-36 top-1 left-[179px]"
                      alt="Frame"
                      src="https://c.animaapp.com/mdvl6goomkbGpL/img/frame-31.svg"
                    />
                  </div>

                  <div className="flex-col h-[188px] items-start gap-3 self-stretch w-full flex relative">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
                      Отчетность
                    </div>

                    <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl text-center leading-7 relative tracking-[0]">
                      Легко создавать отчеты и дашборды используя данные из всех
                      подключенных источников
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="absolute w-[120px] h-14 top-[512px] p-1 left-[725px] flex items-center justify-between bg-[#f9fafd] rounded-full">
          <button
            onClick={goToPrev}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 12H3.75"
                stroke="#55607A"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 5.25L3.75 12L10.5 18.75"
                stroke="#55607A"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12H20.25"
                stroke="#55607A"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
              <path
                d="M13.5 5.25L20.25 12L13.5 18.75"
                stroke="#55607A"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[656px] items-center justify-center gap-2.5 relative flex-[0_0_auto]">
          <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center leading-[60px] relative tracking-[0]">
            Нашим клиентам
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-8 p-[60px] relative self-stretch w-full flex-[0_0_auto] bg-[#f9fafd] rounded-[32px] overflow-hidden">
            <div className="relative w-[140px] h-[140px] rounded-[100px] [background:url(https://c.animaapp.com/mdvl6goomkbGpL/img/frame-18.png)_50%_50%_/_cover]" />

            <div className="items-center gap-12 flex-1 grow flex relative">
              <div className="flex-col w-[421px] gap-4 flex items-start relative">
                <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] leading-[48px] relative tracking-[0]">
                  Константин Гризов
                </div>

                <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                  Управляющий партнер
                  <br />
                  PLUS Consulting
                </div>
              </div>

              <img
                className="relative self-stretch w-px"
                alt="Vector"
                src="https://c.animaapp.com/mdvl6goomkbGpL/img/vector-166.svg"
              />

              <p className="flex-1 mt-[-1.00px] relative [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                f.Data легко масштабируется для бизнеса любого размера, <br />
                что позволяет автоматизировать работу сфинансовыми данными как в
                банках, страховых и инвестиционных компаниях, платежных
                провайдерах, биржах, брокерах так
                <br />и в традиционном и онлайн ритейле.
              </p>
            </div>

            <img
              className="absolute w-[323px] h-[348px] top-[-105px] left-[178px]"
              alt="Vector"
              src="https://c.animaapp.com/mdvl6goomkbGpL/img/vector-1-2.svg"
            />

            <img
              className="absolute w-[323px] h-[348px] top-[11px] left-[1005px]"
              alt="Vector"
              src="https://c.animaapp.com/mdvl6goomkbGpL/img/vector-2-1.svg"
            />
          </div>

          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="gap-6 self-stretch w-full flex-[0_0_auto] flex items-start relative">
              <div className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="https://c.animaapp.com/mdvl6goomkbGpL/img/frame-19.svg"
                />

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                    Контролируйте финансы и будьте готовы к аудиту
                  </p>

                  <p className="self-stretch font-normal text-gray-40 text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                    Своевременно и без рутины выявляйте расхождения в финансовых
                    транзакциях и предотвращайте потери. Процессы в f.Data
                    документированы и могут быть использованы для аудиторских
                    проверок
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="https://c.animaapp.com/mdvl6goomkbGpL/img/frame-18-2.svg"
                />

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                    Откажитесь от рисков персонала
                  </div>

                  <p className="self-stretch font-normal text-gray-40 text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                    Управление процессами в f.Data можно легко передать новому
                    сотруднику
                  </p>
                </div>
              </div>
            </div>

            <div className="gap-6 self-stretch w-full flex-[0_0_auto] flex items-start relative">
              <div className="flex flex-col items-start gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="https://c.animaapp.com/mdvl6goomkbGpL/img/frame-18-3.svg"
                />

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                    Работайте быстрее
                  </div>

                  <p className="self-stretch relative [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                    Процессы с f.Data выполняются до 100 раз быстрее
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="https://c.animaapp.com/mdvl6goomkbGpL/img/frame-18-1.svg"
                />

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                    Избавьтесь от ошибок
                  </div>

                  <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]">
                    Автоматические проверки качества и целостности данных
                    <br />
                    на всех этапах
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
