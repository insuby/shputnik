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
      className={`flex flex-col w-[1376px] items-start gap-2.5 p-3 relative bg-[#3573fc1f] rounded-[40px] ${className}`}
    >
      <div className="flex items-center gap-2.5 p-[60px] relative self-stretch w-full flex-[0_0_auto] bg-blue-50 rounded-[32px] overflow-hidden">
        <img
          className="absolute w-[620px] h-[590px] top-[-306px] left-14"
          alt="Vector"
          src="https://c.animaapp.com/mdvl6goomkbGpL/img/vector-1.svg"
        />

        <img
          className="absolute w-[727px] h-[675px] top-[-109px] left-[666px]"
          alt="Vector"
          src="https://c.animaapp.com/mdvl6goomkbGpL/img/vector-2.svg"
        />

        <div className="flex-col w-[696px] gap-8 flex items-start relative">
          <div className="flex flex-col h-[120px] items-start gap-4 relative self-stretch w-full">
            <div className="self-stretch text-white text-[40px] leading-[48px] relative mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium tracking-[0]">
              {text}
            </div>

            {hasDiv && (
              <p className="relative self-stretch opacity-60 [font-family:'Roboto',Helvetica] font-normal text-white text-xl tracking-[0] leading-7">
                Оставьте заявку на демонстрацию — мы покажем, как работает
                платформа и ответим на ваши вопросы.
              </p>
            )}
          </div>

          <button className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 flex-[0_0_auto] bg-white rounded-[100px] items-center justify-center relative">
            <div className="w-fit text-gray-90 text-xl leading-7 whitespace-nowrap relative mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium tracking-[0]">
              {text1}
            </div>
          </button>
        </div>

        <div className="flex flex-col w-[328px] items-start gap-3 p-6 absolute top-12 left-[789px] bg-[#ffffff] rounded-[32px]">
          <div className="w-fit font-medium text-gray-90 text-xl text-center leading-7 relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
            Калькулятор
          </div>

          <div className="flex gap-2 self-stretch w-full flex-col items-start relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2 p-4 relative self-stretch w-full flex-[0_0_auto] bg-[#f2f5ff] rounded-2xl overflow-hidden">
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="w-fit opacity-50 font-normal text-gray-70 text-xs leading-4 relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                  Сумма
                </div>

                <div className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
                  160 000 ₽
                </div>
              </div>

              <div className="flex gap-1 self-stretch w-full flex-col items-start relative flex-[0_0_auto]">
                <img
                  className="relative self-stretch w-full h-[30px] mt-[-6.00px]"
                  alt="Frame"
                  src="https://c.animaapp.com/mdvl6goomkbGpL/img/frame-83.svg"
                />

                <div className="h-4 justify-between self-stretch w-full flex items-start relative">
                  <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-xs tracking-[0] leading-4 whitespace-nowrap">
                    10 000 ₽
                  </div>

                  <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-xs tracking-[0] leading-4 whitespace-nowrap">
                    200 000 ₽
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 p-4 relative self-stretch w-full flex-[0_0_auto] bg-[#f2f5ff] rounded-2xl overflow-hidden">
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="w-fit opacity-50 font-normal text-gray-70 text-xs leading-4 relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                  Период
                </div>

                <div className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
                  8 месяцев
                </div>
              </div>

              <div className="flex gap-1 self-stretch w-full flex-col items-start relative flex-[0_0_auto]">
                <img
                  className="mb-[-10.00px] relative self-stretch w-full h-[30px] mt-[-6.00px]"
                  alt="Frame"
                  src="https://c.animaapp.com/mdvl6goomkbGpL/img/frame-83-1.svg"
                />
              </div>
            </div>
          </div>

          <button className="all-[unset] box-border flex h-12 gap-8 px-8 py-3 self-stretch w-full bg-gray-90 rounded-3xl items-center justify-center relative">
            <div className="self-stretch w-[164px] font-medium text-white text-base text-center leading-6 relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
              Оформить
            </div>
          </button>
        </div>

        <img
          className="absolute w-[426px] h-[403px] top-6 left-[874px]"
          alt="Vector"
          src="https://c.animaapp.com/mdvl6goomkbGpL/img/vector-4.svg"
        />

        <div className="inline-flex flex-col items-center justify-center gap-3 p-4 absolute top-[90px] left-[1044px] bg-white rounded-[32px_32px_0px_0px]">
          <div className="relative w-[212px] h-[212px] rounded-[100px]">
            <div className="relative w-[198px] h-[198px] top-[7px] left-[7px]">
              <div className="inline-flex flex-col h-[62px] items-center gap-0.5 absolute top-[68px] left-10">
                <div className="mt-[-1.00px] relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Текущий остаток
                </div>

                <div className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-[#1c222f] text-[28px] text-center tracking-[0] leading-10 whitespace-nowrap">
                  86,000₽
                </div>
              </div>

              <div className="absolute w-[198px] h-[198px] top-0 left-0 rounded-[99px] border-[10px] border-solid border-neutral-50" />

              <img
                className="absolute w-[198px] h-[198px] top-0 left-0"
                alt="Ellipse"
                src="https://c.animaapp.com/mdvl6goomkbGpL/img/ellipse-32.svg"
              />
            </div>
          </div>

          <div className="flex items-center justify-between px-4 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#f6f8ff] rounded-[20px]">
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-sm tracking-[0] leading-5 whitespace-nowrap">
              Сумма займа
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
              122, 000₽
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
