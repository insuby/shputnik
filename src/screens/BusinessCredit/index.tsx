import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

import { useRef } from 'react';

import { HeroButtons } from '../../components/ui/hero-buttons.tsx';
import { Advantages } from '../../widgets/advantages.tsx';
import { Analytics } from '../../widgets/analytics.tsx';
import { useFeedbackForm } from '../../widgets/feedback-form';
import { Feedback } from '../../widgets/feedback.tsx';
import { Integrations } from '../../widgets/integrations.tsx';
import { RoleStructure } from '../../widgets/role-structure.tsx';
import { Trust } from '../../widgets/trust.tsx';
import { Zaim } from '../../widgets/zaim.tsx';
import { ZaimChecker } from '../../widgets/zain-checker.tsx';

export const BusinessCredit = () => {
  const { setIsOpen } = useFeedbackForm();

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

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col w-[1440px] items-center gap-[136px] pt-8 pb-[136px] px-8 relative flex-[0_0_auto]">
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col h-[600px] items-start gap-20 p-12 relative self-stretch w-full bg-violet-50 rounded-[32px] overflow-hidden">
          <img
            className="absolute w-[1108px] h-[1060px] top-[-140px] left-[441px]"
            alt="Vector"
            src="/img/businesscredit/vector-1-8.svg"
          />

          <HeroButtons>
            <div className="flex flex-col w-[624px] items-start justify-center gap-12 relative flex-[0_0_auto]">
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]"
              >
                <motion.div
                  ref={ref2}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                  className="relative w-[624px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-6xl tracking-[0] leading-[68px]"
                >
                  Кредитование бизнеса
                </motion.div>

                <motion.p
                  ref={ref3}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                  className="relative w-[624px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffff99] text-xl tracking-[0] leading-7"
                >
                  Полная автоматизация кредитования юридических лиц.
                </motion.p>
              </motion.div>
            </div>
          </HeroButtons>

          <img
            className="absolute w-[817px] h-[600px] top-0 left-[559px]"
            alt="Vector"
            src="/img/businesscredit/vector-3.svg"
          />

          <div
            className="absolute w-[583px] h-[583px] top-[139px] left-[745px]"
          >
            <div className="relative w-[631px] h-[583px]">
              <motion.div
                ref={ref4}
                initial={{ opacity: 0, x: 50 }}
                animate={inView4 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                className="flex w-[443px] items-start justify-end gap-[14.04px] p-8 absolute top-0 left-[108px] bg-[#ffffff] rounded-[32px]"
              >
                <div className="flex flex-col items-center justify-center gap-[14.04px] relative flex-1 grow">
                  <div
                    className="flex items-center justify-center gap-[8.78px] relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className="relative flex-1 mt-[-0.88px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[17.6px] tracking-[0] leading-[24.6px]">
                      Расходы
                    </div>
                  </div>

                  <div className="flex h-[187.85px] items-end justify-between relative self-stretch w-full">
                    <div
                      className="inline-flex flex-col items-center justify-end gap-[9.39px] relative self-stretch flex-[0_0_auto]">
                      <div className="flex flex-col w-[9.39px] items-start justify-end gap-[2.35px] relative flex-1 grow bg-gray-10 rounded-[117.41px] overflow-hidden">
                        <div className="h-[22.31px] relative self-stretch w-full bg-[#cbc1f8] rounded-[117.41px]" />

                        <div className="h-[100.97px] relative self-stretch w-full bg-blue-30 rounded-[117.41px]" />
                      </div>

                      <div className="relative w-[18.78px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[12.3px] text-center tracking-[0] leading-[17.6px]">
                        01
                      </div>
                    </div>

                    <div className="inline-flex flex-col items-center justify-end gap-[9.39px] relative self-stretch flex-[0_0_auto]">
                      <div className="flex flex-col w-[9.39px] items-start justify-end gap-[2.35px] relative flex-1 grow bg-gray-10 rounded-[117.41px] overflow-hidden">
                        <div className="h-[18.78px] relative self-stretch w-full bg-[#cbc1f8] rounded-[117.41px]" />

                        <div className="relative self-stretch w-full h-[78.66px] bg-blue-30 rounded-[117.41px]" />
                      </div>

                      <div className="relative w-[18.78px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[12.3px] text-center tracking-[0] leading-[17.6px]">
                        02
                      </div>
                    </div>

                    <div className="inline-flex flex-col items-center justify-end gap-[9.39px] relative self-stretch flex-[0_0_auto]">
                      <div className="flex flex-col w-[9.39px] items-start justify-end gap-[2.35px] relative flex-1 grow bg-gray-10 rounded-[117.41px] overflow-hidden">
                        <div className="relative self-stretch w-full h-[34.05px] bg-[#cbc1f8] rounded-[117.41px]" />

                        <div className="h-[111.54px] relative self-stretch w-full bg-blue-30 rounded-[117.41px]" />
                      </div>

                      <div className="relative w-[18.78px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[12.3px] text-center tracking-[0] leading-[17.6px]">
                        03
                      </div>
                    </div>

                    <div className="inline-flex flex-col items-center justify-end gap-[9.39px] relative self-stretch flex-[0_0_auto]">
                      <div className="flex flex-col w-[9.39px] items-start justify-end gap-[2.35px] relative flex-1 grow bg-gray-10 rounded-[117.41px] overflow-hidden">
                        <div className="relative self-stretch w-full h-[34.05px] bg-[#cbc1f8] rounded-[117.41px]" />

                        <div className="h-[56.35px] relative self-stretch w-full bg-blue-30 rounded-[117.41px]" />
                      </div>

                      <div className="relative w-[18.78px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[12.3px] text-center tracking-[0] leading-[17.6px]">
                        04
                      </div>
                    </div>

                    <div className="inline-flex flex-col items-center justify-end gap-[9.39px] relative self-stretch flex-[0_0_auto]">
                      <div className="flex flex-col w-[9.39px] items-start justify-end gap-[2.35px] relative flex-1 grow bg-gray-10 rounded-[117.41px] overflow-hidden">
                        <div className="h-[50.48px] relative self-stretch w-full bg-[#cbc1f8] rounded-[117.41px]" />

                        <div className="relative self-stretch w-full h-[78.66px] bg-blue-30 rounded-[117.41px]" />
                      </div>

                      <div className="relative w-[18.78px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[12.3px] text-center tracking-[0] leading-[17.6px]">
                        05
                      </div>
                    </div>

                    <div className="inline-flex flex-col items-center justify-end gap-[9.39px] relative self-stretch flex-[0_0_auto]">
                      <div className="flex flex-col w-[9.39px] items-start justify-end gap-[2.35px] relative flex-1 grow bg-gray-10 rounded-[117.41px] overflow-hidden">
                        <div className="relative self-stretch w-full h-[34.05px] bg-[#cbc1f8] rounded-[117.41px]" />

                        <div className="h-[102.14px] relative self-stretch w-full bg-blue-30 rounded-[117.41px]" />
                      </div>

                      <div className="relative w-[18.78px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[12.3px] text-center tracking-[0] leading-[17.6px]">
                        06
                      </div>
                    </div>

                    <div className="inline-flex flex-col items-center justify-end gap-[9.39px] relative self-stretch flex-[0_0_auto]">
                      <div className="flex flex-col w-[9.39px] items-start justify-end gap-[2.35px] relative flex-1 grow bg-gray-10 rounded-[117.41px] overflow-hidden">
                        <div className="h-[21.13px] relative self-stretch w-full bg-[#cbc1f8] rounded-[117.41px]" />

                        <div className="relative self-stretch w-full h-[78.66px] bg-blue-30 rounded-[117.41px]" />
                      </div>

                      <div className="relative w-[18.78px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[12.3px] text-center tracking-[0] leading-[17.6px]">
                        07
                      </div>
                    </div>

                    <div className="inline-flex flex-col items-center justify-end gap-[9.39px] relative self-stretch flex-[0_0_auto]">
                      <div className="flex flex-col w-[9.39px] items-start justify-end gap-[2.35px] relative flex-1 grow bg-gray-10 rounded-[117.41px] overflow-hidden">
                        <div className="h-[24.66px] relative self-stretch w-full bg-[#cbc1f8] rounded-[117.41px]" />

                        <div className="h-[109.19px] relative self-stretch w-full bg-blue-30 rounded-[117.41px]" />
                      </div>

                      <div className="relative w-[18.78px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[12.3px] text-center tracking-[0] leading-[17.6px]">
                        08
                      </div>
                    </div>

                    <div className="inline-flex flex-col items-center justify-end gap-[9.39px] relative self-stretch flex-[0_0_auto]">
                      <div className="flex flex-col w-[9.39px] items-start justify-end gap-[2.35px] relative flex-1 grow bg-gray-10 rounded-[117.41px] overflow-hidden">
                        <div className="relative self-stretch w-full h-[34.05px] bg-[#cbc1f8] rounded-[117.41px]" />

                        <div className="relative self-stretch w-full h-[78.66px] bg-blue-30 rounded-[117.41px]" />
                      </div>

                      <div className="relative w-[18.78px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[12.3px] text-center tracking-[0] leading-[17.6px]">
                        09
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <img
                className="absolute w-[494px] h-[50px] top-[83px] left-[45px]"
                alt="Vector"
                src="/img/businesscredit/vector-5.svg"
              />

              <motion.div
                ref={ref5}
                initial={{ opacity: 0, x: -50 }}
                animate={inView5 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                className="flex w-[443px] items-start justify-end gap-[14.04px] p-8 absolute top-[213px] left-0 bg-[#ffffff] rounded-[32px]"
              >
                <div className="flex flex-col items-center justify-center gap-[14.04px] relative flex-1 grow">
                  <div className="flex items-center justify-center gap-[8.78px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative flex-1 mt-[-0.88px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[17.6px] tracking-[0] leading-[24.6px]">
                      Рекомендуемый оффер
                    </div>
                  </div>

                  <div className="flex items-start gap-[21.06px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start gap-[1.76px] relative flex-1 grow">
                      <div className="mt-[-0.88px] opacity-50 font-normal text-[12.3px] leading-[17.6px] relative self-stretch [font-family:'Roboto',Helvetica] text-gray-90 tracking-[0]">
                        Ставка
                      </div>

                      <div className="font-normal text-[17.6px] leading-[24.6px] relative self-stretch [font-family:'Roboto',Helvetica] text-gray-90 tracking-[0]">
                        187, 000 ₽
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-[1.76px] relative flex-1 grow">
                      <div className="mt-[-0.88px] opacity-50 font-normal text-[12.3px] leading-[17.6px] relative self-stretch [font-family:'Roboto',Helvetica] text-gray-90 tracking-[0]">
                        Заработок
                      </div>

                      <div className="font-normal text-[17.6px] leading-[24.6px] relative self-stretch [font-family:'Roboto',Helvetica] text-gray-90 tracking-[0]">
                        2, 560, 000 ₽
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-[1.76px] relative flex-1 grow">
                      <div className="mt-[-0.88px] opacity-50 font-normal text-[12.3px] leading-[17.6px] relative self-stretch [font-family:'Roboto',Helvetica] text-gray-90 tracking-[0]">
                        Окупаемость
                      </div>

                      <div className="font-normal text-[17.6px] leading-[24.6px] relative self-stretch [font-family:'Roboto',Helvetica] text-gray-90 tracking-[0]">
                        6 - 8 месяцев
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <img
                className="absolute w-[540px] h-[313px] top-[148px] left-[91px]"
                alt="Vector"
                src="/img/businesscredit/vector-6-1.svg"
              />

              <motion.div
                ref={ref6}
                initial={{ opacity: 0, x: 50 }}
                animate={inView6 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4   }}
                className="inline-flex items-center gap-4 pl-4 pr-6 py-4 absolute top-[307px] left-[272px] bg-[#ffffff] rounded-[32px]"
              >
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/businesscredit/frame-18.svg"
                />

                <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-sm tracking-[0] leading-5 whitespace-nowrap">
                    Персональное предложение
                  </div>

                  <div className="font-medium text-gray-90 text-xl leading-7 relative w-fit [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
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
      <RoleStructure />
      <Trust />
    </div>
  );
};
