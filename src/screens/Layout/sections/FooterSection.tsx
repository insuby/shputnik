import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {RoutesPath} from '../../../routes-path.tsx';

export const FooterSection = () => {
    const { t } = useTranslation(['footer', 'nav']);
    return (
        <footer
            className="w-[calc(100%-32px)] mx-auto relative mb-4 flex w-full flex-[0_0_auto] flex-col items-start gap-[60px] self-stretch overflow-hidden rounded-[32px] bg-white p-7 md:p-12 md:pt-[136px]">
            <nav aria-label={t('software', { ns: 'footer' })} className="relative justify-around flex w-full flex-[0_0_auto] items-start gap-7 md:gap-12 self-stretch">
                <div className="relative flex md:h-[324px] w-full md:w-[268px] flex-col md:gap-0 gap-10 items-start justify-between">
                    <div className="!text-[16px] relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                        <div className="relative h-[22px] w-28">
                            <Link
                                to={RoutesPath.MAIN}
                                className="relative !text-[16px] block h-[23px] w-full md:w-[170px]"
                            >
                                <span className="sr-only">Sputnik</span>
                                <svg width="112" height="24" viewBox="0 0 112 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g mask="url(#mask0_9587_14956)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.46875 12.0009C7.46875 7.01586 11.51 2.97336 16.4963 2.97336C17.215 2.97336 17.9163 3.05836 18.5875 3.21711C16.6238 1.60086 14.11 0.630859 11.3687 0.630859C5.09 0.630859 0 5.72211 0 12.0009C0 18.2796 5.09 23.3696 11.3687 23.3696C14.11 23.3696 16.6238 22.3996 18.5875 20.7846C17.9163 20.9434 17.215 21.0284 16.4963 21.0284C11.51 21.0284 7.46875 16.9859 7.46875 12.0009Z" fill="#1C222F" />
                                    </g>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7939 2.29688V6.68563C24.8814 8.17688 25.5239 10.0131 25.5239 12.0006C25.5239 13.9869 24.8814 15.8244 23.7939 17.3156V21.7169H29.8539V7.00438H36.0202V21.7169H42.0802V2.29688H23.7939Z" fill="#1C222F" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M46.8403 2.29688V6.93188H52.4478V21.7169H58.5078V6.93188H64.1153V2.29688H46.8403Z" fill="#1C222F" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M68.88 2.29688V21.7169H74.9413V13.8081H81.2138V21.7169H87.2738V2.29688H81.2138V9.03063H74.9413V2.29688H68.88Z" fill="#1C222F" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M92.03 2.2627V11.9902V21.7177H98.09V14.0277H99.6788L104.274 21.7177H111.238L105.213 11.9902L111.238 2.2627H104.274L99.6788 9.95269H98.09V2.2627H92.03Z" fill="#1C222F" />
                                </svg>
                            </Link>
                        </div>

                        <div
                            className="relativew w-full md:w-[233px] font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-3-r-font-style)]">
                            {t('description', { ns: 'footer' }).split('\n').map((line, idx) => (
                                <span key={idx}>
                                    {line}
                                    <br/>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div
                        className="relative md:!hidden flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-4 self-stretch">
                        <div
                            className="!text-[16px] relative mt-[-1.00px] self-stretch font-body-3-r font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-3-r-font-style)]">
                            {t('contacts', { ns: 'footer' })}
                        </div>

                        <div className="!text-[16px] relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                            <a
                                href="tel:+74950062157"
                                className="relative mt-[-1.00px] w-full md:w-[233px] text-xl font-bold leading-7 tracking-normal text-gray-90 [font-family:'Inter',Helvetica] hover:text-[#3573FC]"
                            >
                                +7 (495) 006-21-57
                            </a>

                            <address
                                className="!text-[16px]  not-italic relative self-stretch font-body-2-r font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-2-r-font-style)]">
                                183038, Мурманск,
                                <br/>
                                улица Октябрьская, 2а, офис 2
                            </address>
                        </div>
                    </div>

                    <p className="!text-[16px] relativeww-full md:w-[233px] font-body-3-r font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-3-r-font-style)]">
                        © 2013 - {new Date().getFullYear()} Sputnik – <br/>
                        {t('copyrightSuffix', { ns: 'footer' })}
                    </p>
                </div>

                <div className="hidden md:flex relative h-[312px] w-full md:w-[268px] flex-col items-center gap-4">
                    <div
                        className="relative mt-[-1.00px] self-stretch font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-3-r-font-style)]">
                        {t('software', { ns: 'footer' })}
                    </div>

                    <ul className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                        <li className="list-none">
                            <Link
                                to={RoutesPath.MICROCREDIT}
                                className="relative mt-[-1.00px] self-stretch whitespace-pre-wrap font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                {t('microcredit', { ns: 'footer' }).split('\n').map((line, idx) => (
                                    <span key={idx}>
                                        {line}
                                        <br/>
                                    </span>
                                ))}
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                to={RoutesPath.BUSINESSCREDIT}
                                className="relative self-stretch font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                {t('businessCredit', { ns: 'footer' })}
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                to={RoutesPath.BANKCREDIT}
                                className="relative self-stretch font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                {t('bankCredit', { ns: 'footer' })}
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                to={RoutesPath.BNPL}
                                className="relative self-stretch text-base font-normal leading-6 tracking-normal text-gray-90 [font-family:'Inter',Helvetica] hover:text-[#3573FC]"
                            >
                                {t('bnpl', { ns: 'footer' })}
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="relative hidden md:flex w-full md:w-[268px] flex-col items-start gap-7">
                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-4 self-stretch">
                        <div
                            className="relative mt-[-1.00px] self-stretch font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-3-r-font-style)]">
                            {t('software', { ns: 'footer' })}
                        </div>

                        <ul className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                            <li className="list-none">
                                <Link
                                    to={RoutesPath.DATAUNLOAD}
                                    className="relative mt-[-1.00px] self-stretch font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                                >
                                    {t('DATAUNLOAD' as any, { ns: 'footer', defaultValue: 'Выгрузка данных в КБ' })}
                                </Link>
                            </li>
                            <li className="list-none">
                                <Link
                                    to={RoutesPath.BNPL}
                                    className="relative self-stretch font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                                >
                                    {t('posCredit', { ns: 'footer' })}
                                </Link>
                            </li>
                            <li className="list-none">
                                <Link
                                    to={RoutesPath.P2P}
                                    className="relative self-stretch font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                                >
                                    {t('p2p', { ns: 'footer' })}
                                </Link>
                            </li>
                            <li className="list-none">
                                <Link
                                    to={RoutesPath.FDATA}
                                    className="relative self-stretch font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                                >
                                    {t('decisions', { ns: 'footer' })}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative hidden md:flex h-[324px] w-full md:w-[268px] flex-col items-center justify-center gap-7">
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                        <div
                            className="relative mt-[-1.00px] w-full md:w-[268px] font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-3-r-font-style)]">
                            {t('company', { ns: 'footer' })}
                        </div>

                        <div className="relative flex w-full md:w-[268px] flex-[0_0_auto] flex-col items-start gap-3">
                            <Link
                                to={RoutesPath.ABOUT}
                                className="relative mt-[-1.00px] w-full md:w-[233px] font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                {t('about', { ns: 'nav' })}
                            </Link>

                            <Link
                                to={RoutesPath.REVIEWS}
                                className="relativew-full md:w-[233px] font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                {t('reviews', { ns: 'nav' })}
                            </Link>

                            <Link
                                to={RoutesPath.WORK}
                                className="relativew-full md:w-[233px] font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                {t('vacancies', { ns: 'nav' })}
                            </Link>

                            <Link
                                to={RoutesPath.PRIVACY}
                                className="relativew-full md:w-[233px] font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 [font-style:var(--body-2-r-font-style)] hover:text-[#3573FC]"
                            >
                                {t('privacy', { ns: 'footer', defaultValue: 'Конфиденциальность' })}
                            </Link>
                        </div>
                    </div>

                    <div
                        className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-4 self-stretch">
                        <div
                            className="relative mt-[-1.00px] self-stretch font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-3-r-font-style)]">
                            {t('contacts', { ns: 'footer' })}
                        </div>

                        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                            <a
                                href="tel:+74950062157"
                                className="relative mt-[-1.00px] w-full md:w-[233px] text-xl font-bold leading-7 tracking-normal text-gray-90 [font-family:'Inter',Helvetica] hover:text-[#3573FC]"
                            >
                                +7 (495) 006-21-57
                            </a>

                            <address
                                className="not-italic relative self-stretch font-body-2-r text-[length:var(--body-2-r-footer-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-90 opacity-40 [font-style:var(--body-2-r-font-style)]">
                                183038, Мурманск,
                                <br/>
                                улица Октябрьская, 2а, офис 2
                            </address>
                        </div>
                    </div>
                </div>
            </nav>
        </footer>
    );
};
