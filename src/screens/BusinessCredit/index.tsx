import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

import { HeroButtons } from '../../components/ui/hero-buttons.tsx';
import { Advantages } from '../../widgets/advantages.tsx';
import { Analytics } from '../../widgets/analytics.tsx';
import { EmployeeWork } from '../../widgets/employe-work.tsx';
import { Feedback } from '../../widgets/feedback.tsx';
import { Integrations } from '../../widgets/integrations.tsx';
import { RoleStructure } from '../../widgets/role-structure.tsx';
import { Trust } from '../../widgets/trust.tsx';
import { Zaim } from '../../widgets/zaim.tsx';
import { ZaimChecker } from '../../widgets/zain-checker.tsx';

export const BusinessCredit = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const inView1 = useInView(ref1, { once: true, margin: '-100px' });
  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView4 = useInView(ref4, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref5, { once: true, margin: '-100px' });

  return (
    <div className="relative flex w-full md:w-[1440px] flex-[0_0_auto] flex-col items-center gap-[88px] md:gap-[136px] p-0 md:px-8 pb-[136px] md:pt-8">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-8 self-stretch">
        <div className="relative flex w-full flex-col items-start gap-20 self-stretch overflow-hidden rounded-[32px] bg-violet-50 px-4 py-10 md:p-12">
          <img
            className="absolute left-[441px] top-[-140px] h-[1060px] w-[1108px]"
            alt="Vector"
            src="/img/businesscredit/vector-1-8.svg"
          />

          <HeroButtons>
            <div className="relative flex w-full md:w-[624px] flex-[0_0_auto] flex-col items-start justify-center gap-8  md:gap-12">
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative w-full flex md:inline-flex flex-[0_0_auto] flex-col items-start gap-6"
              >
                <motion.div
                  ref={ref2}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                  className="relative mt-[-1.00px] text-center md:text-left w-full md:w-[624px] text-[36px] md:text-6xl font-medium leading-[44px] md:leading-[68px] tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]"
                >
                  Кредитование бизнеса
                </motion.div>

                <motion.p
                  ref={ref3}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                  className="relative w-full text-center md:text-left md:w-[624px] text-xl font-normal leading-7 tracking-normal text-[#ffffff99] [font-family:'Roboto',Helvetica]"
                >
                  Полная автоматизация кредитования юридических лиц
                </motion.p>
              </motion.div>
            </div>
          </HeroButtons>

          <img
            className="absolute left-[559px] top-0 h-[600px] w-[817px]"
            alt="Vector"
            src="/img/businesscredit/vector-3.svg"
          />

          <div className="absolute left-[745px] top-[139px] size-[583px]">
            <div className="relative h-[583px] w-[631px]">
              <motion.div
                ref={ref4}
                initial={{ opacity: 0, x: 50 }}
                animate={inView4 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                className="absolute left-[108px] top-0 flex w-[443px] items-start justify-end gap-[14.04px] rounded-[32px] bg-[#ffffff] p-8"
              >
                <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[14.04px]">
                  <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[8.78px] self-stretch">
                    <div className="relative mt-[-0.88px] flex-1 text-[17.6px] font-medium leading-[24.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Расходы
                    </div>
                  </div>

                  <div className="relative flex h-[187.85px] w-full items-end justify-between self-stretch">
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-[9.39px] flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10">
                        <div className="relative h-[22.31px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[100.97px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-[18.78px] text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                        01
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-[9.39px] flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10">
                        <div className="relative h-[18.78px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[78.66px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-[18.78px] text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                        02
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-[9.39px] flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10">
                        <div className="relative h-[34.05px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[111.54px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-[18.78px] text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                        03
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-[9.39px] flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10">
                        <div className="relative h-[34.05px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[56.35px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-[18.78px] text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                        04
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-[9.39px] flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10">
                        <div className="relative h-[50.48px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[78.66px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-[18.78px] text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                        05
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-[9.39px] flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10">
                        <div className="relative h-[34.05px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[102.14px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-[18.78px] text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                        06
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-[9.39px] flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10">
                        <div className="relative h-[21.13px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[78.66px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-[18.78px] text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                        07
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-[9.39px] flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10">
                        <div className="relative h-[24.66px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[109.19px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-[18.78px] text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                        08
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-end gap-[9.39px] self-stretch">
                      <div className="relative flex w-[9.39px] flex-1 grow flex-col items-start justify-end gap-[2.35px] overflow-hidden rounded-[117.41px] bg-gray-10">
                        <div className="relative h-[34.05px] w-full self-stretch rounded-[117.41px] bg-[#cbc1f8]" />

                        <div className="relative h-[78.66px] w-full self-stretch rounded-[117.41px] bg-blue-30" />
                      </div>

                      <div className="relative w-[18.78px] text-center text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                        09
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <img
                className="absolute left-[45px] top-[83px] h-[50px] w-[494px]"
                alt="Vector"
                src="/img/businesscredit/vector-5.svg"
              />

              <motion.div
                ref={ref5}
                initial={{ opacity: 0, x: -50 }}
                animate={inView5 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                className="absolute left-0 top-[213px] flex w-[443px] items-start justify-end gap-[14.04px] rounded-[32px] bg-[#ffffff] p-8"
              >
                <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[14.04px]">
                  <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[8.78px] self-stretch">
                    <div className="relative mt-[-0.88px] flex-1 text-[17.6px] font-medium leading-[24.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Рекомендуемый оффер
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-[21.06px] self-stretch">
                    <div className="relative flex flex-1 grow flex-col items-start gap-[1.76px]">
                      <div className="relative mt-[-0.88px] self-stretch text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                        Ставка
                      </div>

                      <div className="relative self-stretch text-[17.6px] font-normal leading-[24.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        187, 000 ₽
                      </div>
                    </div>

                    <div className="relative flex flex-1 grow flex-col items-start gap-[1.76px]">
                      <div className="relative mt-[-0.88px] self-stretch text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                        Заработок
                      </div>

                      <div className="relative self-stretch text-[17.6px] font-normal leading-[24.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        2, 560, 000 ₽
                      </div>
                    </div>

                    <div className="relative flex flex-1 grow flex-col items-start gap-[1.76px]">
                      <div className="relative mt-[-0.88px] self-stretch text-[12.3px] font-normal leading-[17.6px] tracking-normal text-gray-90 opacity-50 [font-family:'Roboto',Helvetica]">
                        Окупаемость
                      </div>

                      <div className="relative self-stretch text-[17.6px] font-normal leading-[24.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        6 - 8 месяцев
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <img
                className="absolute left-[91px] top-[148px] h-[313px] w-[540px]"
                alt="Vector"
                src="/img/businesscredit/vector-6-1.svg"
              />

              <motion.div
                ref={ref6}
                initial={{ opacity: 0, x: 50 }}
                animate={inView6 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                className="absolute left-[272px] top-[307px] inline-flex items-center gap-4 rounded-[32px] bg-[#ffffff] py-4 pl-4 pr-6"
              >
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/businesscredit/frame-18.svg"
                />

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-1">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    Персональное предложение
                  </div>

                  <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    1 345 000₽
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Advantages />
      <ZaimChecker />
      <Integrations />
      <Zaim />
      <Feedback />
      <Analytics />
      <EmployeeWork />
      <RoleStructure />
      <Trust />
    </div>
  );
};
