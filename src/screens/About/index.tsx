import { Feedback } from '../../widgets/feedback.tsx';
import { Trust } from '../../widgets/trust.tsx';
import { useFeedbackForm } from '../../widgets/feedback-form/use-feedback-form';

export const About = () => {
  const { setIsOpen } = useFeedbackForm();
  
  const onClick = () => {
    setIsOpen(true);
  };
  return (
    <div
      className="inline-flex flex-col items-start justify-center relative"
      data-model-id="9263:2719"
    >
      <div className="flex flex-col w-[1440px] items-center gap-[136px] pt-8 pb-[136px] px-8 relative flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-20 pt-[88px] pb-20 px-20 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] rounded-[32px] overflow-hidden">
            <img
              className="absolute w-[1108px] h-[1060px] top-[37px] left-[143px]"
              alt="Vector"
              src="/img/about/vector-1-1.svg"
            />

            <div className="flex flex-col w-[980px] items-center justify-center gap-8 relative flex-[0_0_auto]">
              <div className="self-stretch mt-[-1.00px] font-medium text-gray-90 text-6xl text-center leading-[68px] relative [font-family:'Roboto',Helvetica] tracking-[0]">
                Разработка передового программного обеспечения для Fintech
              </div>

              <p className="w-[786px] text-[#929cb3] text-center relative [font-family:'Roboto',Helvetica] font-normal text-xl tracking-[0] leading-7">
                Наша команда занимается разработкой программного обеспечения. Мы создаём решения, адаптированные под специфику местного рынка, бизнес-потребности и технические требования наших партнёров
              </p>
            </div>

            <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-start gap-8 p-10 relative self-stretch flex-[0_0_auto] bg-blue-50 rounded-[32px] overflow-hidden">
                <img
                  className="absolute w-[409px] h-[386px] top-[-141px] left-[-157px]"
                  alt="Vector"
                  src="/img/about/vector-3.svg"
                />

                <img
                  className="absolute w-[476px] h-[442px] -top-2 left-[189px]"
                  alt="Vector"
                  src="/img/about/vector-2.svg"
                />

                <div className="flex-col w-[340px] gap-4 flex items-start relative">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-white text-[68px] tracking-[0] leading-[72px]">
                    12
                  </div>

                  <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-white text-xl tracking-[0] leading-7">
                    лет на рынке разработки
                    <br />
                    fintech-решений
                  </div>
                </div>
              </div>

              <div className="gap-[60px] p-10 flex-1 grow bg-[#ffffff] rounded-[32px] flex items-start relative">
                <div className="flex-col gap-4 flex-1 grow flex items-start relative">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#1c222f] text-[68px] tracking-[0] leading-[72px]">
                    200+
                  </div>

                  <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]">
                    реализованных проектов
                    {/*<br />в России, Казахстане и Испании*/}
                  </p>

                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mr-[-3.00px]">
                    <div className="inline-flex h-8 items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] bg-[#ff8068] rounded-[52px] backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                      <div className="relative w-fit mt-[-2.50px] mb-[-1.50px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-sm tracking-[0] leading-5 whitespace-nowrap">
                        Java
                      </div>
                    </div>

                    <div className="inline-flex h-8 items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] bg-[#00cb82] rounded-[52px] backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                      <div className="relative w-fit mt-[-2.50px] mb-[-1.50px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-sm tracking-[0] leading-5 whitespace-nowrap">
                        Python
                      </div>
                    </div>

                    <div className="inline-flex h-8 items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] bg-[#fbab00] rounded-[52px] backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                      <div className="relative w-fit mt-[-2.50px] mb-[-1.50px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-sm tracking-[0] leading-5 whitespace-nowrap">
                        React
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  className="relative self-stretch w-px"
                  alt="Vector"
                  src="/img/about/vector-3-1.svg"
                />

                <div className="flex flex-col items-start justify-between relative flex-1 self-stretch grow">
                  <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                    <div className="w-[286px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#1c222f] text-[68px] leading-[72px] relative tracking-[0]">
                      30+
                    </div>

                    <div className="relative w-[286px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                      in-house разработчиков
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <div className="ml-[-3.00px] relative w-[54px] h-[54px] mt-[-3.00px] mb-[-3.00px] rounded-3xl overflow-hidden border-[3px] border-solid border-[#ffffff]">
                          <img
                            className="absolute w-12 h-12 top-0 left-0 object-cover"
                            alt="Woman with tablet"
                            src="/img/woman-tablet.png"
                          />
                        </div>

                        <div className="-ml-1 relative w-[54px] h-[54px] mt-[-3.00px] mb-[-3.00px] rounded-3xl overflow-hidden border-[3px] border-solid border-[#ffffff]">
                          <img
                            className="absolute w-12 h-12 top-0 left-0 object-cover"
                            alt="Woman with tablet"
                            src="/img/woman-tablet-2.png"
                          />
                        </div>

                        <div className="relative w-[54px] h-[54px] mt-[-3.00px] mb-[-3.00px] -ml-1 rounded-[52px] border-[3px] border-solid border-[#ffffff] backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)] [background:url(/img/about-frame-2.png)_50%_50%_/_cover]" />

                        <div className="relative w-[54px] h-[54px] mt-[-3.00px] mb-[-3.00px] -ml-1 rounded-[52px] border-[3px] border-solid border-[#ffffff] backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)] [background:url(/img/about-frame-6.png)_50%_50%_/_cover]" />

                        <div className="flex w-[54px] h-[54px] items-center justify-center gap-2.5 p-2 relative mt-[-3.00px] mb-[-3.00px] mr-[-3.00px] -ml-1 bg-[#f7f8f9] rounded-[52px] border-[3px] border-solid border-[#ffffff] backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                          <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-[#55607a] text-base leading-6 whitespace-nowrap relative tracking-[0]">
                            +3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-center gap-[88px] relative flex-[0_0_auto] ml-[-8.00px] mr-[-8.00px]">
          <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="w-[1376px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center leading-[60px] relative tracking-[0]">
              Представительства
            </div>

            <p className="w-[590px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl text-center leading-7 relative tracking-[0]">
              По любым вопросам вы можете обратиться в один <br />
              из наших офисов или связаться с нашей командой
            </p>
          </div>

          <div className="flex w-[1392px] items-start gap-4 relative flex-[0_0_auto]">
            <div className="flex flex-col w-[686px] items-start gap-12 p-12 relative bg-[#f9fafc] rounded-[32px] overflow-hidden">
              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] leading-[48px] whitespace-nowrap relative tracking-[0]">
                    Москва
                  </div>

                  <img
                    className="relative w-10 h-12"
                    alt="Coat of arms of"
                    src="/img/about/coat-of-arms-of-moscow.svg"
                  />
                </div>

                <p className="w-[590px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]">
                  183038, Москва,
                  <br />
                  Рубцовская набережная,
                  <br />
                  3с1, офис 1008
                </p>
                <p className="w-[590px] font-normal text-gray-40 text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                  + 7 (495) 006 21 57
                </p>
              </div>

              <button className="all-[unset] box-border px-8 py-4 relative flex-[0_0_auto] bg-blue-50 inline-flex items-center justify-center gap-2.5 rounded-[100px]" onClick={onClick}>
                <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-xl leading-7 whitespace-nowrap relative tracking-[0]">
                  Связаться
                </div>
              </button>
            </div>

            <div className="flex flex-col w-[686px] items-start gap-12 p-12 relative bg-[#f9fafc] rounded-[32px] overflow-hidden">
              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] leading-[48px] whitespace-nowrap relative tracking-[0]">
                    Мурманск
                  </div>

                  <img
                    className="relative w-[37px] h-12"
                    alt="Rus murmansk COA"
                    src="/img/about/rus-murmansk-coa.svg"
                  />
                </div>

                <p className="w-[590px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl leading-7 relative tracking-[0]">
                  183038, Мурманск,
                  <br />
                  улица Октябрьская,
                  <br />
                  2а, офис 2
                </p>
                <p className="w-[590px] font-normal text-gray-40 text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                  + 7 (495) 006 21 57
                </p>
              </div>

              <button className="all-[unset] box-border px-8 py-4 relative flex-[0_0_auto] bg-blue-50 inline-flex items-center justify-center gap-2.5 rounded-[100px]" onClick={onClick}>
                <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-xl leading-7 whitespace-nowrap relative tracking-[0]">
                  Связаться
                </div>
              </button>
            </div>
          </div>
        </div>

        <Feedback />
        <Trust />
      </div>
    </div>
  );
};
