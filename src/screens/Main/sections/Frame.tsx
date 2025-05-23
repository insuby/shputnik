const links = [
  [
    {
      src: '/img/money.svg',
      title: 'Микрофинансовое кредитование',
      description: 'Автоматизация микрофинансовой деятельности',
    },
    {
      src: '/img/shoppingbagopen.svg',
      title: 'BNPL',
      description: 'Программное обеспечение для сервисов рассрочек',
    },
    {
      src: '/img/bank.svg',
      title: 'Банковское кредитование',
      description: 'ПО для автоматизации банковского кредитования',
    },
    {
      src: '/img/carprofile.svg',
      title: 'Автокредитование',
      description: 'Автоматизация залогового кредитования',
    },
  ],
  [
    {
      src: '/img/briefcase.svg',
      title: 'Кредитование бизнеса',
      description: 'Автоматизация процесса кредитования бизнеса',
    },
    {
      src: '/img/starandcrescent.svg',
      title: 'Исламское кредитование',
      description: 'Автоматизация, финансирование, согласно нормам шариата',
    },
    {
      src: '/img/shoppingcart.svg',
      title: 'POS-кредитование',
      description:
        'Автоматизация кредитования в точках продаж — онлайн или офлайн',
    },
    {
      src: '/img/arrowscounterclockwise.svg',
      title: 'P2P-кредитование',
      description: 'Платформа P2P-кредитованиям бизнеса и физических лиц',
    },
  ],
];

export const Frame = () => {
  return (
    <div className="flex flex-col items-start gap-[88px] p-[88px] relative self-stretch w-full flex-[0_0_auto] rounded-[32px] overflow-hidden [background:linear-gradient(43deg,rgba(28,34,47,1)_0%,rgba(34,53,98,1)_100%)]">
      <img
        className="absolute w-[1305px] h-[1151px] top-0 left-0"
        alt="Vector"
        src="/img/vector-1-11.svg"
      />

      <img
        className="absolute w-[699px] h-[591px] top-[-53px] left-[-4786px]"
        alt="Vector"
        src="/img/vector-3.svg"
      />

      <div className="flex h-[458px] items-center gap-2.5 relative self-stretch w-full">
        <div className="flex flex-col w-[668px] items-start gap-6 relative">
          <p className="self-stretch [font-family:'Geometria-Medium',Helvetica] text-white text-[56px] leading-[56px] relative mt-[-1.00px] font-normal tracking-[0]">
            <span className="font-medium text-[#ffffff] leading-[64px]">
              Программное обеспечение для
            </span>
            <br />
            <span className="font-medium text-[#3573fc] leading-[64px]">
              автоматизации
            </span>
            <br />
            <span className="font-medium text-[#ffffff] leading-[64px]">
              кредитования
            </span>
          </p>

          <p className="w-[583px] opacity-50 font-body-1-r font-[number:var(--body-1-r-font-weight)] text-white text-[length:var(--body-1-r-font-size)] leading-[var(--body-1-r-line-height)] relative tracking-[var(--body-1-r-letter-spacing)] [font-style:var(--body-1-r-font-style)]">
            Мы помогаем микрофинансовым организациям, кредитным кооперативам,
            банкам, fintech-стартапам, брокерам и другим финансовым учреждениям
            автоматизировать ключевые бизнес-процессы: проверку клиентов, выдачу
            кредитов и займов, прием вкладов и сбережений, а также многое
            другое.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[1216px] items-start gap-8 relative flex-[0_0_auto]">
        <div className="flex flex-col w-[1216px] items-start gap-5 relative flex-[0_0_auto]">
          <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
            {links[0].map((link, index) => (
              <div
                key={index}
                className="group hover:cursor-pointer hover:bg-[rgba(255,255,255,0.1)] hover:shadow-[0_4px_16px_0_rgba(255,255,255,0.04)] flex flex-col h-[268px] items-start gap-8 p-8 relative flex-1 grow bg-[#ffffff08] rounded-3xl overflow-hidden border-[none]"
              >
                <div className="group-hover:bg-[var(--blue-50)] items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#ffffff14] rounded-[100px]">
                  <img
                    className="relative w-7 h-7 "
                    alt="Money"
                    src={link.src}
                  />
                </div>
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="self-stretch mt-[-1.00px] text-white text-[22px] leading-7 relative [font-family:'Geometria-Medium',Helvetica] font-medium tracking-[0]">
                    {link.title}
                  </div>

                  <div className="self-stretch opacity-50 font-body-2-r font-[number:var(--body-2-r-font-weight)] text-white text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                    {link.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
            {links[1].map((link, index) => (
              <div
                key={index}
                className="group hover:cursor-pointer hover:bg-[rgba(255,255,255,0.1)] hover:shadow-[0_4px_16px_0_rgba(255,255,255,0.04)] flex flex-col h-[268px] items-start gap-8 p-8 relative flex-1 grow bg-[#ffffff08] rounded-3xl overflow-hidden border-[none]"
              >
                <div className="group-hover:bg-[var(--blue-50)] items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#ffffff14] rounded-[100px]">
                  <img
                    className="relative w-7 h-7 "
                    alt="Money"
                    src={link.src}
                  />
                </div>
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="self-stretch mt-[-1.00px] text-white text-[22px] leading-7 relative [font-family:'Geometria-Medium',Helvetica] font-medium tracking-[0]">
                    {link.title}
                  </div>

                  <div className="self-stretch opacity-50 font-body-2-r font-[number:var(--body-2-r-font-weight)] text-white text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                    {link.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-[720px] items-start gap-2 p-2 absolute top-[88px] left-[782px] bg-[#e8e9ec] rounded-3xl overflow-hidden">
        <div className="flex flex-col w-[163px] items-start justify-between p-3 relative self-stretch rounded-2xl [background:linear-gradient(43deg,rgba(28,34,47,1)_0%,rgba(34,53,98,1)_100%)]">
          <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
            <div className="flex w-[139px] h-9 items-center gap-4 relative">
              <div className="relative w-9 h-9 rounded-xl [background:url(/img/frame-6.png)_50%_50%_/_cover]" />

              <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] opacity-50 text-[8px] leading-3 whitespace-nowrap relative [font-family:'Inter',Helvetica] font-medium text-white tracking-[0]">
                  ID 345567
                </div>

                <div className="w-fit [font-family:'Inter',Helvetica] font-medium text-white text-[10px] leading-4 whitespace-nowrap relative tracking-[0]">
                  Валентина
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[139px] items-start gap-2 relative flex-[0_0_auto]">
              <div className="flex items-center gap-3 p-2 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff14] rounded-[100px]">
                <div className="relative w-2 h-2 bg-white rounded" />

                <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-[10px] leading-3 whitespace-nowrap relative tracking-[0]">
                  Заявки
                </div>
              </div>

              <div className="items-center gap-3 p-2 rounded-[100px] opacity-50 flex relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-2 h-2 bg-white rounded" />

                <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-[10px] leading-3 whitespace-nowrap relative tracking-[0]">
                  Черновики
                </div>
              </div>

              <div className="items-center gap-3 p-2 rounded-[100px] opacity-50 flex relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-2 h-2 bg-white rounded" />

                <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-[10px] leading-3 whitespace-nowrap relative tracking-[0]">
                  Заемщики
                </div>
              </div>

              <div className="items-center gap-3 p-2 rounded-[100px] opacity-50 flex relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-2 h-2 bg-white rounded" />

                <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-[10px] leading-3 whitespace-nowrap relative tracking-[0]">
                  Платежи
                </div>
              </div>

              <div className="items-center gap-3 p-2 rounded-[100px] opacity-50 flex relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-2 h-2 bg-white rounded" />

                <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-[10px] leading-3 whitespace-nowrap relative tracking-[0]">
                  Отчеты
                </div>
              </div>

              <div className="items-center gap-3 p-2 rounded-[100px] opacity-50 flex relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-2 h-2 bg-white rounded" />

                <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-[10px] leading-3 whitespace-nowrap relative tracking-[0]">
                  Настройки
                </div>
              </div>
            </div>
          </div>

          <div className="items-center gap-3 p-2 rounded-[100px] opacity-50 flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-2 h-2 bg-white rounded" />

            <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-[10px] leading-3 whitespace-nowrap relative tracking-[0]">
              Выход
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-2 relative flex-1 grow">
          <div className="flex flex-col h-[148px] items-start gap-3 p-4 relative self-stretch w-full bg-white rounded-2xl">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="items-center justify-center gap-4 self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex-1 mt-[-1.00px] [font-family:'Geometria-Bold',Helvetica] font-bold text-gray-90 text-base leading-6 relative tracking-[0]">
                  Заявки
                </div>

                <div className="inline-flex items-center justify-center gap-2.5 p-1.5 relative flex-[0_0_auto] rounded-[100px] [background:linear-gradient(43deg,rgba(28,34,47,1)_0%,rgba(34,53,98,1)_100%)]">
                  <img
                    className="mt-[-171.00px] relative w-3 h-3 ml-[-6246.00px]"
                    alt="Plus"
                    src="/img/plus.svg"
                  />
                </div>
              </div>

              <div className="flex h-11 items-start gap-2 relative self-stretch w-full">
                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#7a86a2] text-[10px] leading-3 whitespace-nowrap relative tracking-[0]">
                    Фамилия
                  </div>

                  <div className="flex h-7 items-center gap-3 px-2.5 py-2 relative self-stretch w-full bg-gray-10 rounded-lg">
                    <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] leading-3 whitespace-nowrap relative tracking-[0]">
                      Прохоров
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#7a86a2] text-[10px] leading-3 whitespace-nowrap relative tracking-[0]">
                    Имя
                  </div>

                  <div className="flex h-7 items-center gap-3 px-2.5 py-2 relative self-stretch w-full bg-gray-10 rounded-lg">
                    <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] leading-3 whitespace-nowrap relative tracking-[0]">
                      Виталий
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#7a86a2] text-[10px] leading-3 whitespace-nowrap relative tracking-[0]">
                    Отчество
                  </div>

                  <div className="flex h-7 items-center gap-3 px-2.5 py-2 relative self-stretch w-full bg-gray-10 rounded-lg">
                    <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] leading-3 whitespace-nowrap relative tracking-[0]">
                      Сергеевич
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#7a86a2] text-[10px] leading-3 whitespace-nowrap relative tracking-[0]">
                    Телефон
                  </div>

                  <div className="flex h-7 items-center gap-3 px-2.5 py-2 relative self-stretch w-full bg-gray-10 rounded-lg">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] tracking-[0] leading-3 whitespace-nowrap">
                      + 7 999 999 99 99
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-2.5 px-4 py-2 relative flex-[0_0_auto] rounded-[100px] [background:linear-gradient(43deg,rgba(28,34,47,1)_0%,rgba(34,53,98,1)_100%)]">
              <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-[10px] leading-3 whitespace-nowrap relative tracking-[0]">
                Найти заёмщика
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 p-4 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-2xl">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="items-center justify-center gap-4 self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex-1 mt-[-1.00px] [font-family:'Geometria-Bold',Helvetica] font-bold text-gray-90 text-base leading-6 relative tracking-[0]">
                  Заёмщики
                </div>

                <div className="inline-flex items-center justify-center gap-2.5 p-1.5 relative flex-[0_0_auto] rounded-[100px] [background:linear-gradient(43deg,rgba(28,34,47,1)_0%,rgba(34,53,98,1)_100%)]">
                  <img
                    className="mt-[-327.00px] relative w-3 h-3 ml-[-6246.00px]"
                    alt="Plus"
                    src="/img/plus.svg"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] rounded-lg overflow-hidden border border-solid border-[#e3e4e7]">
                <div className="flex h-6 items-start relative self-stretch w-full bg-gray-10">
                  <div className="flex items-center justify-center gap-2.5 px-2 py-1.5 relative flex-1 grow border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7]">
                    <div className="flex-1 [font-family:'Inter',Helvetica] text-[#7a86a2] text-[10px] leading-3 relative mt-[-1.00px] font-normal tracking-[0]">
                      Клиент
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 px-2 py-1.5 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="flex-1 [font-family:'Inter',Helvetica] text-[#7a86a2] text-[10px] leading-3 relative mt-[-1.00px] font-normal tracking-[0]">
                      Дата рождения
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 px-2 py-1.5 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="flex-1 [font-family:'Inter',Helvetica] text-[#7a86a2] text-[10px] leading-3 relative mt-[-1.00px] font-normal tracking-[0]">
                      Паспорт
                    </div>
                  </div>
                </div>

                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center justify-center gap-2.5 p-2 relative flex-1 grow border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7]">
                    <div className="flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] leading-3 relative tracking-[0]">
                      Клюжина Екатерина Петровна
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 p-2 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] tracking-[0] leading-3">
                      07-11-1976
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 p-2 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] tracking-[0] leading-3">
                      4566 454545
                    </div>
                  </div>
                </div>

                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center justify-center gap-2.5 p-2 relative flex-1 grow border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7]">
                    <div className="flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] leading-3 relative tracking-[0]">
                      Самсонов Артур Александрович
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 p-2 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] tracking-[0] leading-3">
                      07-11-1976
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 p-2 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] tracking-[0] leading-3">
                      4566 454545
                    </div>
                  </div>
                </div>

                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center justify-center gap-2.5 p-2 relative flex-1 grow border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7]">
                    <div className="flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] leading-3 relative tracking-[0]">
                      Сверидов Пётр Анатольевич
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 p-2 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] tracking-[0] leading-3">
                      22-08-1988
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 p-2 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] tracking-[0] leading-3">
                      5667 675656
                    </div>
                  </div>
                </div>

                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center justify-center gap-2.5 p-2 relative flex-1 grow border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7]">
                    <div className="flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] leading-3 relative tracking-[0]">
                      Стаканов Павел Витальевич
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 p-2 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] tracking-[0] leading-3">
                      04-02-1992
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 p-2 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] tracking-[0] leading-3">
                      2344 654345
                    </div>
                  </div>
                </div>

                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center justify-center gap-2.5 p-2 relative flex-1 grow border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7]">
                    <div className="flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] leading-3 relative tracking-[0]">
                      Соболева Инга Геннадьевна
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 p-2 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] tracking-[0] leading-3">
                      12-08-1987
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 p-2 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] tracking-[0] leading-3">
                      2345 786574
                    </div>
                  </div>
                </div>

                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center justify-center gap-2.5 p-2 relative flex-1 grow border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7]">
                    <div className="flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] leading-3 relative tracking-[0]">
                      Сваровский Анатолий Сергеевич
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 p-2 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] tracking-[0] leading-3">
                      07-11-1976
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 p-2 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] tracking-[0] leading-3">
                      2344 456774
                    </div>
                  </div>
                </div>

                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center justify-center gap-2.5 p-2 relative flex-1 grow border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7]">
                    <div className="flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] leading-3 relative tracking-[0]">
                      Прохорова Седа Олеговна
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 p-2 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] tracking-[0] leading-3">
                      04-02-1992
                    </div>
                  </div>

                  <div className="w-[141px] items-center justify-center gap-2.5 p-2 border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e3e4e7] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-90 text-[10px] tracking-[0] leading-3">
                      4324 453423
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
