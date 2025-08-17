import { Link } from 'react-router-dom';

import { RoutesPath } from '../../../routes-path.tsx';

export const FooterSection = () => {
  return (
    <footer className="relative mb-4 flex w-full flex-[0_0_auto] flex-col items-start gap-[60px] self-stretch overflow-hidden rounded-[32px] bg-white p-12 pt-[136px]">
      <div className="relative flex w-full flex-[0_0_auto] items-start gap-12 self-stretch">
        <div className="relative flex h-[324px] w-[268px] flex-col items-start justify-between">
          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
            <div className="relative h-[22px] w-28">
              <Link
                to={RoutesPath.MAIN}
                className="relative block h-[23px] w-[170px]"
              >
                <img
                  className="absolute left-0 top-0 size-full"
                  alt="Group"
                  src="/img/logo.png"
                />
              </Link>
            </div>

            <div className="relative w-[233px] font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-3-r-font-style)]">
              Программное обеспечение
              <br />и разработка современных
              <br />
              fintech-решений
            </div>
          </div>

          <p className="relative w-[233px] font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-3-r-font-style)]">
            © 2013 - {new Date().getFullYear()} Sputnik – <br />
            Автоматизация бизнес-процессов
          </p>
        </div>

        <div className="relative flex  h-[312px] w-[268px] flex-col items-center gap-4">
          <div className="relative mt-[-1.00px] self-stretch font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-3-r-font-style)]">
            Программное обеспечение
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
            <Link
              to={RoutesPath.MICROCREDIT}
              className="relative mt-[-1.00px] self-stretch whitespace-pre-wrap font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
            >
              Микрофинансовое
              <br />
              кредитование
            </Link>

            <Link
              to={RoutesPath.BUSINESSCREDIT}
              className="relative self-stretch font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
            >
              Кредитование бизнеса
            </Link>

            <Link
              to={RoutesPath.BANKCREDIT}
              className="relative self-stretch font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
            >
              Банковское кредитование
            </Link>

            <Link
              to={RoutesPath.AUTOCREDIT}
              className="relative self-stretch font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
            >
              Автокредитование
            </Link>

            <Link
              to={RoutesPath.BNPL}
              className="relative self-stretch text-base font-normal leading-6 tracking-normal text-gray-90 [font-family:'Inter',Helvetica] hover:text-[#3573FC]"
            >
              BNPL
            </Link>
          </div>
        </div>

        <div className="relative flex w-[268px] flex-col items-start gap-8">
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-4 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-3-r-font-style)]">
              Программное обеспечение
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
              <Link
                to={RoutesPath.DATAUNLOAD}
                className="relative mt-[-1.00px] self-stretch font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
              >
                Выгрузка данных в КБ
              </Link>

              <Link
                to={RoutesPath.BNPL}
                className="relative self-stretch font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
              >
                POS-кредитование
              </Link>

              <Link
                to={RoutesPath.P2P}
                className="relative self-stretch font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
              >
                P2P-кредитование
              </Link>

              <Link
                to={RoutesPath.FDATA}
                className="relative self-stretch font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
              >
                Принятие решений
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex h-[324px] w-[268px] flex-col items-center justify-center gap-8">
          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
            <div className="relative mt-[-1.00px] w-[268px] font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-3-r-font-style)]">
              Компания
            </div>

            <div className="relative flex w-[268px] flex-[0_0_auto] flex-col items-start gap-3">
              <Link
                to={RoutesPath.ABOUT}
                className="relative mt-[-1.00px] w-[233px] font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
              >
                О компании
              </Link>

              <Link
                to={RoutesPath.REVIEWS}
                className="relative w-[233px] font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
              >
                Отзывы
              </Link>

              <Link
                to={RoutesPath.WORK}
                className="relative w-[233px] font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
              >
                Вакансии
              </Link>

              <Link
                to={RoutesPath.PRIVACY}
                className="relative w-[233px] font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
              >
                Конфиденциальность
              </Link>
            </div>
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-4 self-stretch">
            <div className="relative mt-[-1.00px] self-stretch font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-3-r-font-style)]">
              Контакты
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
              <a
                href="tel:+74950062157"
                className="relative mt-[-1.00px] w-[233px] text-xl font-bold leading-7 tracking-normal text-gray-90 [font-family:'Inter',Helvetica] hover:text-[#3573FC]"
              >
                +7 (495) 006-21-57
              </a>

              <p className="relative self-stretch font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-2-r-font-style)]">
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
