export const Frame = () => {
  return (
    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]  h-[900px] gap-20 pt-[88px] pb-0 px-20 mr-[-16.00px] bg-[#ffffff] rounded-[32px] overflow-hidden">
      <div className="flex-col w-[1392px] h-[900px] gap-20 pt-[88px] pb-0 px-20 mr-[-16.00px] rounded-[32px] overflow-hidden flex items-center relative">
        <img
          className="absolute w-[1108px] h-[1060px] top-[272px] left-[113px]"
          alt="Vector"
          src="https://c.animaapp.com/mctfcob4oizbca/img/vector-1-6.svg"
        />

        <div className="flex flex-col w-[980px] items-center justify-center gap-8 relative flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-6xl text-center tracking-[0] leading-[60px]">
            <span className="font-medium text-[#1c222f] leading-[68px]">
              Программное обеспечение  для{" "}
            </span>

            <span className="font-medium text-[#3573fc] leading-[68px]">
              автоматизации{" "}
            </span>

            <span className="font-medium text-[#1c222f] leading-[68px]">
              кредитования
            </span>
          </p>

          <p className="w-[600px] text-[#929cb3] text-[length:var(--body-2-r-font-size)] text-center leading-[var(--body-2-r-line-height)] relative font-body-2-r font-[number:var(--body-2-r-font-weight)] tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
            Помогаем микрофинансовым организациям, кредитным кооперативам,{" "}
            <br />
            банкам, fintech-стартапам, брокерам и другим финансовым институтам
            автоматизировать бизнес-процессы проверки клиента, выдачи кредита
            или займа, приема вклада или сбережения и многое другое.
          </p>
        </div>

        <img
          className="relative w-[412px] flex-[0_0_auto]"
          alt="Iphone pro max"
          src="https://c.animaapp.com/mctfcob4oizbca/img/iphone-16-pro-max---3.png"
        />

        <div className="inline-flex items-center gap-4 pl-4 pr-6 py-4 absolute top-[730px] left-[854px] bg-white rounded-[32px]">
          <div className="inline-flex items-center justify-center gap-8 p-4 relative flex-[0_0_auto] bg-[#f2f5ff] rounded-3xl">
            <img
              className="relative w-8 h-8"
              alt="Money"
              src="https://c.animaapp.com/mctfcob4oizbca/img/money.svg"
            />
          </div>

          <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
            <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-sm leading-5 whitespace-nowrap relative tracking-[0]">
              Ежемесячный платеж
            </div>

            <div className="relative w-fit font-medium text-gray-90 text-xl leading-7 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
              4 950₽
            </div>
          </div>
        </div>

        <div className="flex w-[472px] items-center justify-center gap-5 p-4 absolute top-[559px] left-[94px] bg-white rounded-[32px]">
          <div className="inline-flex flex-col items-start gap-2.5 px-3 py-0 relative flex-[0_0_auto] ml-[-4.00px]">
            <div className="relative w-[184px] h-[184px]">
              <div className="relative h-[184px]">
                <div className="absolute w-[184px] h-[184px] top-0 left-0">
                  <img
                    className="absolute w-[88px] h-[184px] top-0 left-0"
                    alt="Subtract"
                    src="https://c.animaapp.com/mctfcob4oizbca/img/subtract-3.svg"
                  />

                  <img
                    className="absolute w-[88px] h-[108px] top-[76px] left-24"
                    alt="Subtract"
                    src="https://c.animaapp.com/mctfcob4oizbca/img/subtract.svg"
                  />

                  <div className="inline-flex flex-col h-[62px] items-center gap-0.5 absolute top-[61px] left-[39px]">
                    <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-sm leading-5 whitespace-nowrap relative tracking-[0]">
                      Вся сумма
                    </div>

                    <div className="w-fit [font-family:'Roboto',Helvetica] font-medium text-[#1c222f] text-[28px] text-center leading-10 whitespace-nowrap relative tracking-[0]">
                      42,000₽
                    </div>
                  </div>
                </div>

                <img
                  className="absolute w-[21px] h-[34px] top-[34px] left-[158px]"
                  alt="Subtract"
                  src="https://c.animaapp.com/mctfcob4oizbca/img/subtract-1.svg"
                />

                <img
                  className="absolute w-[59px] h-[31px] top-0 left-24"
                  alt="Subtract"
                  src="https://c.animaapp.com/mctfcob4oizbca/img/subtract-2.svg"
                />
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start justify-between p-5 relative self-stretch flex-[0_0_auto] bg-[#f6f8ff] rounded-[20px]">
            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <div className="relative w-2 h-2 bg-blue-50 rounded" />

              <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm leading-5 relative tracking-[0]">
                Текущее
              </div>

              <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right leading-5 relative tracking-[0]">
                23,456₽
              </div>
            </div>

            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <div className="relative w-2 h-2 bg-green-50 rounded" />

              <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm leading-5 relative tracking-[0]">
                Основная
              </div>

              <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right leading-5 relative tracking-[0]">
                42,000₽
              </div>
            </div>

            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <div className="relative w-2 h-2 bg-yellow-50 rounded" />

              <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm leading-5 relative tracking-[0]">
                Проценты
              </div>

              <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right leading-5 relative tracking-[0]">
                4,000₽
              </div>
            </div>

            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <div className="relative w-2 h-2 bg-red-50 rounded" />

              <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm leading-5 relative tracking-[0]">
                Штраф
              </div>

              <div className="w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right leading-5 relative tracking-[0]">
                2,700₽
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[324px] items-center justify-center gap-5 p-4 absolute top-[458px] left-[957px] bg-white rounded-[32px]">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-6 p-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex h-6 items-center justify-between relative self-stretch w-full">
                <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-base leading-6 whitespace-nowrap relative tracking-[0]">
                  Сумма
                </div>

                <div className="relative w-fit mt-[-1.00px] font-medium text-gray-90 text-base leading-6 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                  42 000₽
                </div>
              </div>

              <div className="relative self-stretch w-full h-3.5">
                <div className="relative w-[260px] h-3 top-px -left-0.5">
                  <img
                    className="absolute w-[260px] h-1 top-1 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/mctfcob4oizbca/img/vector-136.svg"
                  />

                  <img
                    className="absolute w-[167px] h-1 top-1 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/mctfcob4oizbca/img/vector-136.svg"
                  />

                  <div className="absolute w-3 h-3 top-0 left-[157px] bg-blue-50 rounded-md" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex h-6 items-center justify-between relative self-stretch w-full">
                <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-base leading-6 whitespace-nowrap relative tracking-[0]">
                  Срок
                </div>

                <div className="relative w-fit mt-[-1.00px] font-medium text-gray-90 text-base leading-6 whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                  14 дней
                </div>
              </div>

              <div className="relative self-stretch w-full h-3.5">
                <div className="relative w-[260px] h-3 top-px -left-0.5">
                  <img
                    className="absolute w-[260px] h-1 top-1 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/mctfcob4oizbca/img/vector-136-1.svg"
                  />

                  <img
                    className="w-[93px] h-1 top-1 absolute left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/mctfcob4oizbca/img/vector-136-1.svg"
                  />

                  <div className="absolute w-3 h-3 top-0 left-[85px] bg-blue-50 rounded-md" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-4 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#f6f8ff] rounded-[20px]">
            <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-base leading-6 whitespace-nowrap relative tracking-[0]">
              Ставка
            </div>

            <div className="w-fit mt-[-1.00px] font-medium text-gray-90 text-base leading-6 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
              2.5%
            </div>
          </div>
        </div>

        <button className="all-[unset] box-border flex h-12 gap-8 px-8 py-3 self-stretch w-full bg-gray-90 rounded-3xl items-center justify-center relative">
          <div className="self-stretch w-[164px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-white text-base text-center leading-6 whitespace-nowrap relative tracking-[0]">
            Оформить
          </div>
        </button>
      </div>
    </div>
  );
};
