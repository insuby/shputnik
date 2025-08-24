interface Props {
  className: any;
  text: string;
  hasDiv: boolean;
  text1: string;
}

export const Cta = ({
  className,
  text = 'Попробуйте, вам понравится!',
  hasDiv = true,
  text1 = 'Связаться с нами',
}: Props): JSX.Element => {
  return (
    <div
      className={`relative flex w-full md:w-[1376px] flex-col items-start gap-2.5 rounded-[40px] bg-[#3573fc1f] p-3 ${className}`}
    >
      <div className="relative flex w-full flex-[0_0_auto] items-center gap-2.5 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-[60px]">
        <img
          className="absolute left-14 top-[-306px] h-[590px] w-full md:w-[620px]"
          alt="Vector"
          src="/img/fdata/vector-1.svg"
        />

        <img
          className="absolute left-[666px] top-[-109px] h-[675px] w-full md:w-[727px]"
          alt="Vector"
          src="/img/fdata/vector-2.svg"
        />

        <div className="relative flex w-full md:w-[696px] flex-col items-start gap-7">
          <div className="relative flex h-[120px] w-full flex-col items-start gap-4 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch text-[40px] font-medium leading-[48px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
              {text}
            </div>

            {hasDiv && (
              <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-white opacity-60 [font-family:'Roboto',Helvetica]">
                Оставьте заявку на демонстрацию — мы покажем, как работает
                платформа и ответим на ваши вопросы
              </p>
            )}
          </div>

          <button className="all-[unset] relative box-border inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-white px-8 py-4">
            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {text1}
            </div>
          </button>
        </div>

        <div className="absolute left-[789px] top-12 flex w-full md:w-[328px] flex-col items-start gap-3 rounded-[32px] bg-[#ffffff] p-6">
          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            Калькулятор
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch overflow-hidden rounded-2xl bg-[#f2f5ff] p-4">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                  Сумма
                </div>

                <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  160 000 ₽
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                <img
                  className="relative mt-[-6.00px] h-[30px] w-full self-stretch"
                  alt="Frame"
                  src="/img/fdata/frame-83.svg"
                />

                <div className="relative flex h-4 w-full items-start justify-between self-stretch">
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                    10 000 ₽
                  </div>

                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                    200 000 ₽
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch overflow-hidden rounded-2xl bg-[#f2f5ff] p-4">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                  Период
                </div>

                <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  8 месяцев
                </div>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                <img
                  className="relative mb-[-10.00px] mt-[-6.00px] h-[30px] w-full self-stretch"
                  alt="Frame"
                  src="/img/fdata/frame-83-1.svg"
                />
              </div>
            </div>
          </div>

          <button className="all-[unset] relative box-border flex h-12 w-full items-center justify-center gap-7 self-stretch rounded-3xl bg-gray-90 px-8 py-3">
            <div className="relative mt-[-1.00px] w-full md:w-[164px] self-stretch whitespace-nowrap text-center text-base font-medium leading-6 tracking-normal text-white [font-family:'Roboto',Helvetica]">
              Оформить
            </div>
          </button>
        </div>

        <img
          className="absolute left-[874px] top-6 h-[403px] w-full md:w-[426px]"
          alt="Vector"
          src="/img/fdata/vector-4.svg"
        />

        <div className="absolute left-[1044px] top-[90px] inline-flex flex-col items-center justify-center gap-3 rounded-[32px_32px_0px_0px] bg-white p-4">
          <div className="relative size-[212px] rounded-[100px]">
            <div className="relative left-[7px] top-[7px] size-[198px]">
              <div className="absolute left-10 top-[68px] inline-flex h-[62px] flex-col items-center gap-0.5">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                  Текущий остаток
                </div>

                <div className="relative w-fit whitespace-nowrap text-center text-[28px] font-medium leading-10 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                  86,000₽
                </div>
              </div>

              <div className="absolute left-0 top-0 size-[198px] rounded-[99px] border-[10px] border-solid border-neutral-50" />

              <img
                className="absolute left-0 top-0 size-[198px]"
                alt="Ellipse"
                src="/img/fdata/ellipse-32.svg"
              />
            </div>
          </div>

          <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch rounded-[20px] bg-[#f6f8ff] px-4 py-3">
            <div className="relative w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
              Сумма займа
            </div>

            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              122, 000₽
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
