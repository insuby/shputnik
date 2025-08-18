import { useFeedbackForm } from '../../widgets/feedback-form/use-feedback-form';
import { Feedback } from '../../widgets/feedback.tsx';
import { Trust } from '../../widgets/trust.tsx';

export const About = () => {
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };
  return (
    <div
      className="relative inline-flex flex-col items-start justify-center"
      data-model-id="9263:2719"
    >
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[72px] md:gap-[136px] px-4 md:px-8 pb-[88px] md:pb-[136px] pt-6 md:pt-8">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-8 self-stretch">
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-10 md:gap-20 self-stretch overflow-hidden rounded-[32px] bg-[#ffffff] px-6 md:px-20 pb-10 md:pb-20 pt-8 md:pt-[88px]">
            <img
              className="absolute left-[143px] top-[37px] h-[1060px] w-[1108px]"
              alt="Vector"
              src="/img/about/vector-1-1.svg"
            />

            <div className="relative flex w-full md:w-[980px] flex-[0_0_auto] flex-col items-center justify-center gap-6 md:gap-8">
              <div className="relative mt-[-1.00px] self-stretch text-center text-3xl md:text-6xl font-medium leading-9 md:leading-[68px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                Разработка передового программного обеспечения для Fintech
              </div>

              <p className="relative w-full md:w-[786px] px-2 text-center text-base md:text-xl font-normal leading-6 md:leading-7 tracking-normal text-[#929cb3] [font-family:'Roboto',Helvetica]">
                Наша команда занимается разработкой программного обеспечения. Мы
                создаём решения, адаптированные под специфику местного рынка,
                бизнес-потребности и технические требования наших партнёров
              </p>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch">
              <div className="relative inline-flex flex-[0_0_auto] items-start gap-8 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-10">
                <img
                  className="absolute left-[-157px] top-[-141px] h-[386px] w-[409px]"
                  alt="Vector"
                  src="/img/about/vector-3.svg"
                />

                <img
                  className="absolute -top-2 left-[189px] h-[442px] w-[476px]"
                  alt="Vector"
                  src="/img/about/vector-2.svg"
                />

                <div className="relative flex w-[340px] flex-col items-start gap-4">
                  <div className="relative mt-[-1.00px] self-stretch text-[68px] font-normal leading-[72px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
                    12
                  </div>

                  <div className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-white [font-family:'Roboto',Helvetica]">
                    лет на рынке разработки
                    <br />
                    fintech-решений
                  </div>
                </div>
              </div>

              <div className="relative flex flex-1 grow items-start gap-[60px] rounded-[32px] bg-[#ffffff] p-10">
                <div className="relative flex flex-1 grow flex-col items-start gap-4">
                  <div className="relative mt-[-1.00px] self-stretch text-[68px] font-normal leading-[72px] tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                    200+
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    реализованных проектов
                    {/*<br />в России, Казахстане и Испании*/}
                  </p>

                  <div className="relative mr-[-3.00px] inline-flex flex-[0_0_auto] items-center gap-2">
                    <div className="relative inline-flex h-8 flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[52px] bg-[#ff8068] px-3 py-2 backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                      <div className="relative mb-[-1.50px] mt-[-2.50px] w-fit whitespace-nowrap text-sm font-medium leading-5 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                        Java
                      </div>
                    </div>

                    <div className="relative inline-flex h-8 flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[52px] bg-[#00cb82] px-3 py-2 backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                      <div className="relative mb-[-1.50px] mt-[-2.50px] w-fit whitespace-nowrap text-sm font-medium leading-5 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                        Python
                      </div>
                    </div>

                    <div className="relative inline-flex h-8 flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[52px] bg-[#fbab00] px-3 py-2 backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                      <div className="relative mb-[-1.50px] mt-[-2.50px] w-fit whitespace-nowrap text-sm font-medium leading-5 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                        React
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  className="relative w-px self-stretch"
                  alt="Vector"
                  src="/img/about/vector-3-1.svg"
                />

                <div className="relative flex flex-1 grow flex-col items-start justify-between self-stretch">
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                    <div className="relative mt-[-1.00px] w-[286px] text-[68px] font-normal leading-[72px] tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                      30+
                    </div>

                    <div className="relative w-[286px] text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      in-house разработчиков
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                    <div className="relative inline-flex flex-[0_0_auto] items-center gap-1">
                      <div className="relative inline-flex flex-[0_0_auto] items-center">
                        <div className="relative my-[-3.00px] ml-[-3.00px] size-[54px] overflow-hidden rounded-3xl border-[3px] border-solid border-[#ffffff]">
                          <img
                            className="absolute left-0 top-0 size-12 object-cover"
                            alt="Woman with tablet"
                            src="/img/woman-tablet.png"
                          />
                        </div>

                        <div className="relative my-[-3.00px] -ml-1 size-[54px] overflow-hidden rounded-3xl border-[3px] border-solid border-[#ffffff]">
                          <img
                            className="absolute left-0 top-0 size-12 object-cover"
                            alt="Woman with tablet"
                            src="/img/woman-tablet-2.png"
                          />
                        </div>

                        <div className="relative my-[-3.00px] -ml-1 size-[54px] rounded-[52px] border-[3px] border-solid border-[#ffffff] backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)] [background:url(/img/about-frame-2.png)_50%_50%_/_cover]" />

                        <div className="relative my-[-3.00px] -ml-1 size-[54px] rounded-[52px] border-[3px] border-solid border-[#ffffff] backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)] [background:url(/img/about-frame-6.png)_50%_50%_/_cover]" />

                        <div className="relative my-[-3.00px] -ml-1 mr-[-3.00px] flex size-[54px] items-center justify-center gap-2.5 rounded-[52px] border-[3px] border-solid border-[#ffffff] bg-[#f7f8f9] p-2 backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                          <div className="relative w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#55607a] [font-family:'Inter',Helvetica]">
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

        <div className="relative mx-[-8.00px] inline-flex flex-[0_0_auto] flex-col items-center gap-[88px]">
          <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
            <div className="relative mt-[-1.00px] w-[1376px] text-center text-5xl font-medium leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              Представительства
            </div>

            <p className="relative w-[590px] text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
              По любым вопросам вы можете обратиться в один <br />
              из наших офисов или связаться с нашей командой
            </p>
          </div>

          <div className="relative flex w-[1392px] flex-[0_0_auto] items-start gap-4">
            <div className="relative flex w-[686px] flex-col items-start gap-12 overflow-hidden rounded-[32px] bg-[#f9fafc] p-12">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-6">
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Москва
                  </div>

                  <img
                    className="relative h-12 w-10"
                    alt="Coat of arms of"
                    src="/img/about/coat-of-arms-of-moscow.svg"
                  />
                </div>

                <p className="relative w-[590px] text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                  183038, Москва,
                  <br />
                  Рубцовская набережная,
                  <br />
                  3с1, офис 1008
                </p>
                <p className="relative w-[590px] text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                  + 7 (495) 006 21 57
                </p>
              </div>

              <button
                className="all-[unset] relative box-border inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4"
                onClick={onClick}
              >
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                  Связаться
                </div>
              </button>
            </div>

            <div className="relative flex w-[686px] flex-col items-start gap-12 overflow-hidden rounded-[32px] bg-[#f9fafc] p-12">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-6">
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Мурманск
                  </div>

                  <img
                    className="relative h-12 w-[37px]"
                    alt="Rus murmansk COA"
                    src="/img/about/rus-murmansk-coa.svg"
                  />
                </div>

                <p className="relative w-[590px] text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                  183038, Мурманск,
                  <br />
                  улица Октябрьская,
                  <br />
                  2а, офис 2
                </p>
                <p className="relative w-[590px] text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                  + 7 (495) 006 21 57
                </p>
              </div>

              <button
                className="all-[unset] relative box-border inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4"
                onClick={onClick}
              >
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
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
