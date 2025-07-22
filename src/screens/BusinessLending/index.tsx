import { Advantages } from '../../widgets/advantages.tsx';
import { Analytics } from '../../widgets/analytics.tsx';
import { Feedback } from '../../widgets/feedback.tsx';
import { Integrations } from '../../widgets/integrations.tsx';
import { RoleStructure } from '../../widgets/role-structure.tsx';
import { Trust } from '../../widgets/trust.tsx';
import { Zaim } from '../../widgets/zaim.tsx';
import { ZaimChecker } from '../../widgets/zain-checker.tsx';

export const BusinessLending = () => {
  return (
    <div className="flex flex-col w-[1440px] items-center gap-[136px] pt-8 pb-[136px] px-8 relative flex-[0_0_auto]">
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col h-[600px] items-start gap-20 p-12 relative self-stretch w-full bg-violet-50 rounded-[32px] overflow-hidden">
          <img
            className="absolute w-[1108px] h-[1060px] top-[-140px] left-[441px]"
            alt="Vector"
            src="https://c.animaapp.com/mdextfbtMdhAnq/img/vector-1-8.svg"
          />

          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 relative flex-[0_0_auto] bg-[#ffffff14] rounded-[100px]">
              <div className="relative w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[#ffffff] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)]">
                О продукте
              </div>
            </div>

            <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 relative flex-[0_0_auto] bg-[#ffffff14] rounded-[100px]">
                <img
                  className="relative w-5 h-5"
                  alt="File text"
                  src="/img/filetext.svg"
                />

                <div className="relative w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[#ffffff] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)]">
                  Спецификация
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[624px] items-start justify-center gap-12 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
              <div className="relative w-[624px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-6xl tracking-[0] leading-[68px]">
                Кредитование бизнеса
              </div>

              <p className="relative w-[624px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffff99] text-xl tracking-[0] leading-7">
                Полная автоматизация кредитования юридических лиц. <br />
                Полная автоматизация кредитования юридических лиц.
              </p>
            </div>

            <button className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-[#ffffff] rounded-[100px] items-center justify-center">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
                Демо-версия
              </div>
            </button>
          </div>

          <img
            className="absolute w-[817px] h-[600px] top-0 left-[559px]"
            alt="Vector"
            src="https://c.animaapp.com/mdextfbtMdhAnq/img/vector-3.svg"
          />

          <div className="absolute w-[583px] h-[583px] top-[139px] left-[745px]">
            <div className="relative w-[631px] h-[583px]">
              <div className="flex w-[443px] items-start justify-end gap-[14.04px] p-8 absolute top-0 left-[108px] bg-[#ffffff] rounded-[32px]">
                <div className="flex flex-col items-center justify-center gap-[14.04px] relative flex-1 grow">
                  <div className="flex items-center justify-center gap-[8.78px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative flex-1 mt-[-0.88px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[17.6px] tracking-[0] leading-[24.6px]">
                      Расходы
                    </div>
                  </div>

                  <div className="flex h-[187.85px] items-end justify-between relative self-stretch w-full">
                    <div className="inline-flex flex-col items-center justify-end gap-[9.39px] relative self-stretch flex-[0_0_auto]">
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
              </div>

              <img
                className="absolute w-[494px] h-[500px] top-[83px] left-[45px]"
                alt="Vector"
                src="https://c.animaapp.com/mdextfbtMdhAnq/img/vector-5.svg"
              />

              <div className="flex w-[443px] items-start justify-end gap-[14.04px] p-8 absolute top-[213px] left-0 bg-[#ffffff] rounded-[32px]">
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
              </div>

              <img
                className="absolute w-[540px] h-[313px] top-[148px] left-[91px]"
                alt="Vector"
                src="https://c.animaapp.com/mdextfbtMdhAnq/img/vector-6-1.svg"
              />

              <div className="inline-flex items-center gap-4 pl-4 pr-6 py-4 absolute top-[307px] left-[272px] bg-[#ffffff] rounded-[32px]">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="https://c.animaapp.com/mdextfbtMdhAnq/img/frame-18.svg"
                />

                <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-sm tracking-[0] leading-5 whitespace-nowrap">
                    Персональное предложение
                  </div>

                  <div className="font-medium text-gray-90 text-xl leading-7 relative w-fit [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                    1 345 000₽
                  </div>
                </div>
              </div>
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
