import { Link } from 'react-router-dom';
import { RoutesPath } from '../../../routes-path.tsx';

const footerData = {
  software: {
    title: "Программное обеспечение",
    links: [
      "Микрофинансовое кредитование",
      "BNPL",
      "Банковское кредитование",
      "Автокредитование",
      "Кредитование бизнеса",
      "Исламское финансирование",
      "POS-кредитование",
      "P2P-кредитование",
    ],
  },
  additionalSoftware: {
    title: "Программное обеспечение",
    links: [
      "Выгрузка данных в кредитные бюро",
      "Модуль принятия решений",
      "Учет вкладов и инвестиций",
    ],
  },
  services: {
    title: "Услуги",
    links: ["Заказная разработка"],
  },
  company: {
    title: "Компания",
    links: ["О компании", "Отзывы", "Вакансии", "Конфиденциальность"],
  },
  contacts: {
    title: "Контакты",
    phone: "+7 (495) 006-21-57",
    address: "183038, Мурманск,\nулица Октябрьская, 2а, офис 2",
  },
};

export const FooterSection = () => {
  return (
    // <footer className="flex flex-col items-start gap-[60px] px-[88px] py-[60px] relative w-full bg-gray-90 rounded-[32px] overflow-hidden">
    //   <img
    //     className="absolute w-[926px] h-[851px] top-[-83px] right-0"
    //     alt="Vector"
    //     src="/img/vector-1-1.svg"
    //   />
    //
    //   <div className="flex items-start gap-12 relative w-full">
    //     <div className="flex flex-col w-[268px] items-start justify-between">
    //       <div className="flex flex-col items-start gap-4">
    //         <div className="relative w-28 h-[22px]">
    //           <Link to={RoutesPath.MAIN} className="w-[111px] h-[23px]">
    //               <div className="relative w-[111px] h-[23px]">
    //                 <img
    //                   className="absolute size-full top-0 left-0"
    //                   alt="Group"
    //                   src="/img/logo-footer.png"
    //                 />
    //             </div>
    //           </Link>
    //         </div>
    //
    //         <p className="w-[233px] opacity-40 font-body-3-r text-white whitespace-pre-line">
    //           Программное обеспечение
    //           <br />и разработка современных
    //           <br />
    //           fintech-решений
    //         </p>
    //       </div>
    //
    //       <p className="w-[233px] opacity-40 font-body-3-r text-white whitespace-pre-line">
    //         © 2022 Sputnik – <br />
    //         Автоматизация бизнес-процессов
    //       </p>
    //     </div>
    //
    //     <div className="flex flex-col w-[268px] gap-4">
    //       <p className="opacity-40 font-body-3-r text-white">
    //         {footerData.software.title}
    //       </p>
    //
    //       <div className="flex flex-col items-start gap-3 w-full">
    //         {footerData.software.links.map((link, index) => (
    //           <a href="/" key={index} className="font-body-2-r text-white hover:underline">
    //             {link}
    //           </a>
    //         ))}
    //       </div>
    //     </div>
    //
    //     <div className="flex flex-col w-[268px] items-start gap-8">
    //       <div className="flex flex-col gap-4 w-full">
    //         <p className="opacity-40 font-body-3-r text-white">
    //           {footerData.additionalSoftware.title}
    //         </p>
    //
    //         <div className="flex flex-col items-start gap-3 w-full">
    //           {footerData.additionalSoftware.links.map((link, index) => (
    //             <a href="/" key={index} className="font-body-2-r text-white hover:underline">
    //               {link}
    //             </a>
    //           ))}
    //         </div>
    //       </div>
    //
    //       <div className="flex flex-col gap-4 w-full">
    //         <p className="opacity-40 font-body-3-r text-white">
    //           {footerData.services.title}
    //         </p>
    //
    //         <div className="flex flex-col items-start gap-3 w-full">
    //           {footerData.services.links.map((link, index) => (
    //             <a href="/" key={index} className="font-body-2-r text-white hover:underline">
    //               {link}
    //             </a>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //
    //     <div className="flex flex-col w-[268px] items-start gap-8">
    //       <div className="flex flex-col gap-4 w-full">
    //         <p className="opacity-40 font-body-3-r text-white">
    //           {footerData.company.title}
    //         </p>
    //
    //         <div className="flex flex-col items-start gap-3 w-full">
    //           {footerData.company.links.map((link, index) => (
    //             <a href="/" key={index} className="font-body-2-r text-white hover:underline">
    //               {link}
    //             </a>
    //           ))}
    //         </div>
    //       </div>
    //
    //       <div className="flex flex-col gap-4 w-full">
    //         <p className="opacity-40 font-body-3-r text-white">
    //           {footerData.contacts.title}
    //         </p>
    //
    //         <div className="flex flex-col items-start gap-3 w-full">
    //           <a href={`tel:${footerData.contacts.phone.replace(/[^\d+]/g, '')}`} className="font-bold text-white text-xl leading-7 hover:text-[#3573fc]">
    //             {footerData.contacts.phone}
    //           </a>
    //           <p className="opacity-40 font-body-2-r text-white whitespace-pre-line">
    //             {footerData.contacts.address}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
      <footer
        className="flex flex-col items-start gap-[60px] p-12 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[32px] overflow-hidden">
        <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
          <div className="h-[324px] items-start justify-between flex flex-col w-[268px] relative">
            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <div className="relative w-28 h-[22px]">
                <div className="w-[111px] h-[23px]">
                  <div className="h-[23px]">
                    <div className="relative w-[111px] h-[23px]">
                      <img
                        className="absolute w-[19px] h-[23px] top-0 left-0"
                        alt="Group"
                        src="/img/group-3-2.png"
                      />

                      <img
                        className="w-[18px] left-6 absolute h-[19px] top-0.5"
                        alt="Fill"
                        src="/img/fill-4.svg"
                      />

                      <img
                        className="w-[17px] left-[47px] absolute h-[19px] top-0.5"
                        alt="Fill"
                        src="/img/fill-8.svg"
                      />

                      <img
                        className="w-[18px] left-[69px] absolute h-[19px] top-0.5"
                        alt="Fill"
                        src="/img/fill-10.svg"
                      />

                      <img
                        className="w-[19px] left-[92px] absolute h-[19px] top-0.5"
                        alt="Fill"
                        src="/img/fill-14.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-[233px] opacity-40 text-gray-90 text-[length:var(--body-3-r-font-size)] leading-[var(--body-3-r-line-height)] relative font-body-3-r font-[number:var(--body-3-r-font-weight)] tracking-[var(--body-3-r-letter-spacing)] [font-style:var(--body-3-r-font-style)]">
                Программное обеспечение
                <br />и разработка современных
                <br />
                fintech-решений
              </div>
            </div>

            <p
              className="relative w-[233px] opacity-40 font-body-3-r font-[number:var(--body-3-r-font-weight)] text-gray-90 text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] [font-style:var(--body-3-r-font-style)]">
              © 2022 Sputnik – <br />
              Автоматизация бизнес-процессов
            </p>
          </div>

          <div className="h-[312px] items-center justify-center gap-4 flex flex-col w-[268px] relative">
            <div
              className="self-stretch mt-[-1.00px] opacity-40 font-body-3-r text-gray-90 text-[length:var(--body-3-r-font-size)] leading-[var(--body-3-r-line-height)] relative font-[number:var(--body-3-r-font-weight)] tracking-[var(--body-3-r-letter-spacing)] [font-style:var(--body-3-r-font-style)]">
              Программное обеспечение
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div
                className="self-stretch mt-[-1.00px] font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                Микрофинансовое кредитование
              </div>

              <div
                className="font-body-2-r font-[number:var(--body-2-r-font-weight)] text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative self-stretch text-gray-90 tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                BNPL
              </div>

              <div
                className="self-stretch font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                Банковское кредитование
              </div>

              <div
                className="self-stretch font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                Автокредитование
              </div>

              <div
                className="self-stretch [font-family:'Inter',Helvetica] font-normal text-gray-90 text-base leading-6 relative tracking-[0]">
                Кредитование бизнеса
              </div>

              <div
                className="self-stretch font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                Исламское финансирование
              </div>

              <div
                className="font-body-2-r font-[number:var(--body-2-r-font-weight)] text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative self-stretch text-gray-90 tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                POS-кредитование
              </div>

              <div
                className="relative self-stretch font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)] [font-style:var(--body-2-r-font-style)]">
                P2P-кредитование
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[268px] items-start gap-8 relative">
            <div
              className="flex-col items-center justify-center gap-4 flex-[0_0_auto] flex relative self-stretch w-full">
              <div
                className="self-stretch mt-[-1.00px] opacity-40 font-body-3-r text-gray-90 text-[length:var(--body-3-r-font-size)] leading-[var(--body-3-r-line-height)] relative font-[number:var(--body-3-r-font-weight)] tracking-[var(--body-3-r-letter-spacing)] [font-style:var(--body-3-r-font-style)]">
                Программное обеспечение
              </div>

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <p
                  className="self-stretch mt-[-1.00px] font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                  Выгрузка данных в кредитные бюро
                </p>

                <div
                  className="self-stretch font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                  Модуль принятия решений
                </div>

                <div
                  className="self-stretch font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                  Учет вкладов и инвестиций
                </div>
              </div>
            </div>

            <div
              className="flex-col items-center justify-center gap-4 flex-[0_0_auto] flex relative self-stretch w-full">
              <div
                className="self-stretch mt-[-1.00px] opacity-40 font-body-3-r text-gray-90 text-[length:var(--body-3-r-font-size)] leading-[var(--body-3-r-line-height)] relative font-[number:var(--body-3-r-font-weight)] tracking-[var(--body-3-r-letter-spacing)] [font-style:var(--body-3-r-font-style)]">
                Услуги
              </div>

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <p
                  className="relative self-stretch mt-[-1.00px] font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)] [font-style:var(--body-2-r-font-style)]">
                  Заказная разработка
                  <br />с упором на fintech
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[268px] h-[324px] items-center justify-center gap-8 relative">
            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <div
                className="w-[268px] mt-[-1.00px] opacity-40 font-body-3-r font-[number:var(--body-3-r-font-weight)] text-gray-90 text-[length:var(--body-3-r-font-size)] leading-[var(--body-3-r-line-height)] relative tracking-[var(--body-3-r-letter-spacing)] [font-style:var(--body-3-r-font-style)]">
                Компания
              </div>

              <div className="items-start gap-3 flex-[0_0_auto] flex flex-col w-[268px] relative">
                <div
                  className="w-[233px] mt-[-1.00px] font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                  О компании
                </div>

                <div
                  className="w-[233px] font-body-2-r text-gray-90 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative font-[number:var(--body-2-r-font-weight)] tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                  Отзывы
                </div>

                <div
                  className="w-[233px] font-body-2-r text-gray-90 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative font-[number:var(--body-2-r-font-weight)] tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                  Вакансии
                </div>

                <div
                  className="w-[233px] font-body-2-r text-gray-90 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative font-[number:var(--body-2-r-font-weight)] tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                  Конфиденциальность
                </div>
              </div>
            </div>

            <div
              className="flex-col items-center justify-center gap-4 flex-[0_0_auto] flex relative self-stretch w-full">
              <div
                className="self-stretch mt-[-1.00px] opacity-40 font-body-3-r text-gray-90 text-[length:var(--body-3-r-font-size)] leading-[var(--body-3-r-line-height)] relative font-[number:var(--body-3-r-font-weight)] tracking-[var(--body-3-r-letter-spacing)] [font-style:var(--body-3-r-font-style)]">
                Контакты
              </div>

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div
                  className="w-[233px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-gray-90 text-xl leading-7 relative tracking-[0]">
                  +7 (495) 006-21-57
                </div>

                <p
                  className="self-stretch opacity-40 font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                  183038, Мурманск,
                  <br />
                  улица Октябрьская, 2а, офис 2
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};
