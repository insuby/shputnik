import {Link} from 'react-router-dom';

import {RoutesPath} from '../../../routes-path.tsx';

const footerData = {
    software: {
        title: 'Программное обеспечение',
        links: [
            'Микрофинансовое кредитование',
            'BNPL',
            'Банковское кредитование',
            'Автокредитование',
            'Кредитование бизнеса',
            'Исламское финансирование',
            'POS-кредитование',
            'P2P-кредитование',
        ],
    },
    additionalSoftware: {
        title: 'Программное обеспечение',
        links: [
            'Выгрузка данных в кредитные бюро',
            'Модуль принятия решений',
            'Учет вкладов и инвестиций',
        ],
    },
    services: {
        title: 'Услуги',
        links: ['Заказная разработка'],
    },
    company: {
        title: 'Компания',
        links: ['О компании', 'Отзывы', 'Вакансии', 'Конфиденциальность'],
    },
    contacts: {
        title: 'Контакты',
        phone: '+7 (495) 006-21-57',
        address: '183038, Мурманск,\nулица Октябрьская, 2а, офис 2',
    },
};

export const FooterSection = () => {
    return (
        <footer
            className="flex mb-4 flex-col items-start gap-[60px] pt-[136px] p-12 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[32px] overflow-hidden">
            <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
                <div className="h-[324px] items-start justify-between flex flex-col w-[268px] relative">
                    <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                        <div className="relative w-28 h-[22px]">
                            <Link to={RoutesPath.MAIN} className="relative w-[170px] h-[23px] block">
                                <img
                                    className="absolute size-full top-0 left-0"
                                    alt="Group"
                                    src="/img/logo.png"
                                />
                            </Link>
                        </div>

                        <div
                            className="w-[233px] opacity-40 text-gray-90 text-[length:var(--body-3-r-font-size)] leading-[var(--body-3-r-line-height)] relative font-body-3-r font-[number:var(--body-3-r-font-weight)] tracking-[var(--body-3-r-letter-spacing)] [font-style:var(--body-3-r-font-style)]">
                            Программное обеспечение
                            <br/>и разработка современных
                            <br/>
                            fintech-решений
                        </div>
                    </div>

                    <p className="relative w-[233px] opacity-40 font-body-3-r font-[number:var(--body-3-r-font-weight)] text-gray-90 text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] [font-style:var(--body-3-r-font-style)]">
                        © 2013 - {new Date().getFullYear()} Sputnik – <br/>
                        Автоматизация бизнес-процессов
                    </p>
                </div>

                <div className="h-[312px] items-center  gap-4 flex flex-col w-[268px] relative">
                    <div
                        className="self-stretch mt-[-1.00px] opacity-40 font-body-3-r text-gray-90 text-[length:var(--body-3-r-font-size)] leading-[var(--body-3-r-line-height)] relative font-[number:var(--body-3-r-font-weight)] tracking-[var(--body-3-r-letter-spacing)] [font-style:var(--body-3-r-font-style)]">
                        Программное обеспечение
                    </div>

                        <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                            <Link
                                to={RoutesPath.MICROCREDIT}
                                className="self-stretch whitespace-pre-wrap mt-[-1.00px] font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-footer-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                Микрофинансовое<br/>кредитование
                            </Link>

                            <Link
                                to={RoutesPath.BUSINESSCREDIT}
                                className="font-body-2-r font-[number:var(--body-2-r-font-weight)] text-[length:var(--body-2-r-footer-font-size)] leading-[var(--body-2-r-line-height)] relative self-stretch text-gray-90 tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                Кредитование бизнеса
                            </Link>

                            <Link
                                to={RoutesPath.BANKCREDIT}
                                className="self-stretch font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-footer-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                Банковское кредитование
                            </Link>

                            <Link
                                to={RoutesPath.AUTOCREDIT}
                                className="self-stretch font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-footer-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                Автокредитование
                            </Link>

                            <Link
                                to={RoutesPath.BNPL}
                                className="self-stretch [font-family:'Inter',Helvetica] font-normal text-gray-90 text-base leading-6 relative tracking-[0] hover:text-[#3573FC]"
                            >
                                BNPL
                            </Link>
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
                            <Link
                                to={RoutesPath.DATAUNLOAD}
                                className="self-stretch mt-[-1.00px] font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-footer-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                Выгрузка данных в кредитные бюро
                            </Link>

                            <Link
                                to={RoutesPath.BNPL}
                                className="font-body-2-r font-[number:var(--body-2-r-font-weight)] text-[length:var(--body-2-r-footer-font-size)] leading-[var(--body-2-r-line-height)] relative self-stretch text-gray-90 tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                POS-кредитование
                            </Link>

                            <Link
                                to={RoutesPath.P2P}
                                className="relative self-stretch font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-footer-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)] [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                P2P-кредитование
                            </Link>

                            <Link
                                to={RoutesPath.FDATA}
                                className="self-stretch font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-footer-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                Принятие решений
                            </Link>
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
                            <Link
                                to={RoutesPath.ABOUT}
                                className="w-[233px] mt-[-1.00px] font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-footer-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                О компании
                            </Link>

                            <Link
                                to={RoutesPath.REVIEWS}
                                className="w-[233px] font-body-2-r text-gray-90 text-[length:var(--body-2-r-footer-font-size)] leading-[var(--body-2-r-line-height)] relative font-[number:var(--body-2-r-font-weight)] tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                Отзывы
                            </Link>

                            <Link
                                to={RoutesPath.WORK}
                                className="w-[233px] font-body-2-r text-gray-90 text-[length:var(--body-2-r-footer-font-size)] leading-[var(--body-2-r-line-height)] relative font-[number:var(--body-2-r-font-weight)] tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                Вакансии
                            </Link>

                            <Link
                                to={RoutesPath.PRIVACY}
                                className="w-[233px] font-body-2-r text-gray-90 text-[length:var(--body-2-r-footer-font-size)] leading-[var(--body-2-r-line-height)] relative font-[number:var(--body-2-r-font-weight)] tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                Конфиденциальность
                            </Link>
                        </div>
                    </div>

                    <div
                        className="flex-col items-center justify-center gap-4 flex-[0_0_auto] flex relative self-stretch w-full">
                        <div
                            className="self-stretch mt-[-1.00px] opacity-40 font-body-3-r text-gray-90 text-[length:var(--body-3-r-font-size)] leading-[var(--body-3-r-line-height)] relative font-[number:var(--body-3-r-font-weight)] tracking-[var(--body-3-r-letter-spacing)] [font-style:var(--body-3-r-font-style)]">
                            Контакты
                        </div>

                        <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                            <a
                                href="tel:+74950062157"
                                className="w-[233px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-gray-90 text-xl leading-7 relative tracking-[0] hover:text-[#3573FC]"
                            >
                                +7 (495) 006-21-57
                            </a>

                            <p className="self-stretch opacity-40 font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-footer-font-size)] leading-[var(--body-2-r-line-height)] relative tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                                183038, Мурманск,
                                <br/>
                                улица Октябрьская, 2а, офис 2
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
