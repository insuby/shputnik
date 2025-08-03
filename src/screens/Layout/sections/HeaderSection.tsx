import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../../../components/ui/navigation-menu';
import { RoutesPath } from '../../../routes-path.tsx';
import { useFeedbackForm } from '../../../widgets/feedback-form';

export const HeaderSection = () => {
  const { pathname } = useLocation();
  const { setIsOpen } = useFeedbackForm();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement>(null);

  const navItems = [
    { id: 2, label: 'О компании', pathname: RoutesPath.ABOUT },
    { id: 3, label: 'Отзывы', pathname: RoutesPath.REVIEWS },
    { id: 4, label: 'Вакансии', pathname: RoutesPath.WORK },
  ];

  const productItems = [
    { label: 'Микрокредит', pathname: RoutesPath.MICROCREDIT },
    { label: 'BNPL', pathname: RoutesPath.BNPL },
    { label: 'Автокредит', pathname: RoutesPath.AUTOCREDIT },
    { label: 'Исламское финансирование', pathname: RoutesPath.ISLAMFINANCE },
    { label: 'P2P-кредитование', pathname: RoutesPath.P2P },
    { label: 'Кредитование бизнеса', pathname: RoutesPath.BUSINESSCREDIT },
    { label: 'Банковское кредитование', pathname: RoutesPath.BANKCREDIT },
    {
      label: 'Выгрузка данных\nв кредитные бюро',
      pathname: RoutesPath.DATAUNLOAD,
    },
    { label: 'F-data', pathname: RoutesPath.FDATA },
  ];

  const isProductActive =
    pathname === RoutesPath.MICROCREDIT || pathname === RoutesPath.BNPL;

  useEffect(() => {
    if (navRef.current) {
      let activeLink: HTMLElement | null = null;

      if (isProductActive) {
        activeLink = navRef.current.querySelector(
          '[data-pathname="products"]',
        ) as HTMLElement;
      } else {
        activeLink = navRef.current.querySelector(
          `[data-pathname="${pathname}"]`,
        ) as HTMLElement;
      }

      if (activeLink) {
        const textElement = activeLink.querySelector(
          'div > div',
        ) as HTMLElement;
        if (textElement) {
          const navRect = navRef.current.getBoundingClientRect();
          const textRect = textElement.getBoundingClientRect();
          setIndicatorStyle({
            left: textRect.left - navRect.left,
            width: textRect.width,
          });
        }
      }
    }
  }, [pathname, isProductActive]);

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <header className="flex items-center justify-between w-full p-4">
      <div className="relative h-[22px]">
        <Link to={RoutesPath.MAIN} className="w-28 h-[22px]">
          <div className="relative w-[170px] h-[23px]">
            <img
              className="absolute size-full top-0 left-0"
              alt="Group"
              src="/img/logo.png"
            />
          </div>
        </Link>
      </div>

      <div className="relative">
        <NavigationMenu className="max-w-none" delayDuration={0}>
          <NavigationMenuList
            className="relative flex items-center gap-16"
            ref={navRef}
          >
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)] text-gray-90`}
                data-pathname="products"
              >
                Продукты
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex flex-col items-start gap-6 pt-10 pb-6 px-6 relative self-stretch w-full flex-[0_0_auto] bg-white !rounded-[0px_0px_32px_32px] overflow-hidden ">
                  <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-2.5 px-5 py-0 relative flex-[0_0_auto]">
                      <div className="w-[590px] mt-[-1.00px] text-gray-40 text-base leading-6 relative [font-family:'Roboto',Helvetica] font-normal tracking-[0]">
                        Кредитование
                      </div>
                    </div>

                    <div className="flex w-[1392px] items-center gap-6 relative flex-[0_0_auto] bg-[#ffffff]">
                      <Link
                        to={RoutesPath.MICROCREDIT}
                        className="flex items-center gap-8 p-5 relative flex-1 grow hover:bg-[#f9fafd] rounded-[32px] cursor-pointer"
                      >
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="https://c.animaapp.com/mdvyd6y7TcoReq/img/frame-84-2.svg"
                        />

                        <p className="flex-1 text-gray-90 text-xl leading-5 relative [font-family:'Roboto',Helvetica] font-normal tracking-[0]">
                          <span className="text-[#1c222f] leading-7">
                            Микрофинансовое  кредитование
                          </span>
                        </p>
                      </Link>

                      <Link
                        to={RoutesPath.BUSINESSCREDIT}
                        className="gap-8 p-5 flex-1 grow flex items-center relative hover:bg-[#f9fafd] rounded-[32px] cursor-pointer"
                      >
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="https://c.animaapp.com/mdvyd6y7TcoReq/img/frame-84-10.svg"
                        />

                        <div className="flex-1 text-gray-90 text-xl leading-7 relative [font-family:'Roboto',Helvetica] font-normal tracking-[0]">
                          Кредитование
                          <br />
                          бизнеса
                        </div>
                      </Link>

                      <Link
                        to={RoutesPath.BANKCREDIT}
                        className="gap-8 p-5 flex-1 grow flex items-center relative hover:bg-[#f9fafd] rounded-[32px] cursor-pointer"
                      >
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="https://c.animaapp.com/mdvyd6y7TcoReq/img/frame-84-4.svg"
                        />

                        <div className="flex-1 text-gray-90 text-xl leading-7 relative [font-family:'Roboto',Helvetica] font-normal tracking-[0]">
                          Банковское
                          <br />
                          кредитование
                        </div>
                      </Link>
                    </div>

                    <div className="w-[1392px] gap-6 flex-[0_0_auto] bg-[#ffffff] flex items-center relative">
                      <Link
                        to={RoutesPath.BNPL}
                        className="gap-8 p-5 flex-1 grow flex items-center relative hover:bg-[#f9fafd] rounded-[32px] cursor-pointer"
                      >
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="https://c.animaapp.com/mdvyd6y7TcoReq/img/frame-84.svg"
                        />

                        <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                          BNPL
                        </div>
                      </Link>

                      <Link
                        to={RoutesPath.BNPL}
                        className="gap-8 p-5 flex-1 grow flex items-center relative hover:bg-[#f9fafd] rounded-[32px] cursor-pointer"
                      >
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="https://c.animaapp.com/mdvyd6y7TcoReq/img/frame-84-3.svg"
                        />

                        <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                          POS-кредитование
                        </div>
                      </Link>

                      <Link
                        to={RoutesPath.AUTOCREDIT}
                        className="flex items-center gap-8 p-5 relative flex-1 grow hover:bg-[#f9fafd] rounded-[32px] cursor-pointer"
                      >
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="https://c.animaapp.com/mdvyd6y7TcoReq/img/frame-84-20.svg"
                        />

                        <div className="flex-1 text-gray-90 text-xl leading-7 relative [font-family:'Roboto',Helvetica] font-normal tracking-[0]">
                          Автокредитование
                        </div>
                      </Link>
                    </div>

                    <div className="w-[1392px] gap-6 flex-[0_0_auto] bg-[#ffffff] flex items-center relative">
                      <Link
                        to={RoutesPath.P2P}
                        className="flex w-[448px] items-center gap-8 p-5 relative hover:bg-[#f9fafd] rounded-[32px] cursor-pointer"
                      >
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="https://c.animaapp.com/mdvyd6y7TcoReq/img/frame-84-7.svg"
                        />

                        <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                          P2P-кредитование
                        </div>
                      </Link>

                      <Link
                        to={RoutesPath.ISLAMFINANCE}
                        className="w-[448px] gap-8 p-5 flex items-center relative hover:bg-[#f9fafd] rounded-[32px] cursor-pointer"
                      >
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="https://c.animaapp.com/mdvyd6y7TcoReq/img/frame-84-1.svg"
                        />

                        <div className="flex-1 text-gray-90 text-xl leading-7 relative [font-family:'Roboto',Helvetica] font-normal tracking-[0]">
                          Исламское
                          <br />
                          финансирование
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-2.5 px-5 py-0 relative flex-[0_0_auto]">
                      <div className="w-[590px] mt-[-1.00px] font-normal text-gray-40 text-base leading-6 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                        Другое программное обеспечение
                      </div>
                    </div>

                    <div className="w-[1392px] gap-6 flex-[0_0_auto] bg-[#ffffff] flex items-center relative">
                      <Link
                        to={RoutesPath.DATAUNLOAD}
                        className="gap-8 p-5 flex-1 grow flex items-center relative hover:bg-[#f9fafd] rounded-[32px] cursor-pointer"
                      >
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="https://c.animaapp.com/mdvyd6y7TcoReq/img/frame-84-8.svg"
                        />

                        <p className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                          Выгрузка данных <br />в кредитные бюро
                        </p>
                      </Link>

                      <Link
                        to={RoutesPath.FDATA}
                        className="flex items-center gap-8 p-5 relative flex-1 grow hover:bg-[#f9fafd] rounded-[32px] cursor-pointer"
                      >
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="https://c.animaapp.com/mdvyd6y7TcoReq/img/frame-84-6.svg"
                        />

                        <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                          Настраиваемый модуль принятия решений
                        </div>
                      </Link>

                      <div className="gap-8 p-5 flex-1 grow flex items-center relative hover:bg-[#f9fafd] rounded-[32px] cursor-pointer">
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="https://c.animaapp.com/mdvyd6y7TcoReq/img/frame-84-15.svg"
                        />

                        <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                          F-datа
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-2.5 px-5 py-0 relative flex-[0_0_auto]">
                      <div className="w-[590px] mt-[-1.00px] text-gray-40 text-base leading-6 relative [font-family:'Roboto',Helvetica] font-normal tracking-[0]">
                        Услуги
                      </div>
                    </div>

                    <div className="flex w-[1392px] items-center gap-6 relative flex-[0_0_auto] bg-[#ffffff]">
                      <div className="flex w-[448px] items-center gap-8 p-5 relative hover:bg-[#f9fafd] rounded-[32px] cursor-pointer">
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="https://c.animaapp.com/mdvyd6y7TcoReq/img/frame-84-14.svg"
                        />

                        <div className="flex-1 font-normal text-gray-90 text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                          Разработка на заказ
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {navItems.map((item) => (
              <Link
                key={item.pathname}
                to={item.pathname}
                className="flex flex-col items-center"
                data-pathname={item.pathname}
              >
                <div className="relative inline-flex flex-col items-center justify-center gap-2 px-0 py-2.5">
                  <div
                    className={`w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)] text-gray-90`}
                  >
                    {item.label}
                  </div>
                </div>
              </Link>
            ))}
            <div
              className="absolute bottom-0.5 h-0.5 bg-blue-50 rounded-[20px_20px_0px_0px] transition-all duration-300 ease-in-out !ml-0"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
              }}
            />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <button
        onClick={onClick}
        className="all-[unset] box-border inline-flex gap-2.5 px-6 py-2.5 flex-[0_0_auto] bg-[#ffffff] rounded-[100px] items-center justify-center relative cursor-pointer"
      >
        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#3573fc] text-base tracking-[0] leading-6 whitespace-nowrap">
          Связаться с нами
        </div>
      </button>
    </header>
  );
};
