import { useFeedbackForm } from '../../widgets/feedback-form';
import { Feedback } from '../../widgets/feedback.tsx';
import { Trust } from '../../widgets/trust.tsx';

export const About = () => {
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };
  return (
    <div className="relative inline-flex flex-col items-start justify-center">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[72px] px-4 pt-6 md:px-8 md:pb-[88px] md:pt-8">
        <div className="relative mx-[-8.00px] flex flex-[0_0_auto] flex-col items-center gap-[88px] md:inline-flex">
          <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
            <div className="relative mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[1376px] md:text-5xl">
              Представительства
            </div>

            <p className="relative text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
              По любым вопросам вы можете обратиться в один из наших офисов или
              связаться с нашей командой
            </p>
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 md:!flex-row">
            <div className="relative flex w-full flex-col items-start gap-12 overflow-hidden rounded-[32px] bg-[#f9fafc] p-12">
              <div className="relative inline-flex w-full flex-[0_0_auto] flex-col items-start gap-6">
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

                <p className="relative text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                  183038, Москва,
                  <br />
                  Рубцовская набережная,
                  <br />
                  3с1, офис 1008
                </p>
                <p className="relative text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
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

            <div className="relative flex w-full flex-col items-start gap-12 overflow-hidden rounded-[32px] bg-[#f9fafc] p-12">
              <div className="relative inline-flex w-full flex-[0_0_auto] flex-col items-start gap-6">
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

                <p className="relative text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                  183038, Мурманск,
                  <br />
                  улица Октябрьская,
                  <br />
                  2а, офис 2
                </p>
                <p className="relative text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
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
