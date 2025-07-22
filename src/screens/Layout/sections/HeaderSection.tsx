import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
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
    { label: 'Кредитование бизнеса', pathname: RoutesPath.BUSINESSLENDING },
  ];

  const isProductActive = pathname === RoutesPath.MICROCREDIT || pathname === RoutesPath.BNPL;

  useEffect(() => {
    if (navRef.current) {
      let activeLink: HTMLElement | null = null;
      
      if (isProductActive) {
        activeLink = navRef.current.querySelector('[data-pathname="products"]') as HTMLElement;
      } else {
        activeLink = navRef.current.querySelector(`[data-pathname="${pathname}"]`) as HTMLElement;
      }
      
      if (activeLink) {
        const textElement = activeLink.querySelector('div > div') as HTMLElement;
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
          <NavigationMenuList className="relative flex items-center gap-16" ref={navRef}>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className={`w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)] text-gray-90`}
                data-pathname="products"
              >
                Продукты
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex flex-col w-[200px] p-2 bg-white rounded-lg">
                  {productItems.map((item) => (
                    <Link
                      key={item.pathname}
                      to={item.pathname}
                      className={`px-4 py-2 text-gray-90 ${
                        pathname === item.pathname ? 'text-gray-90' : 'text-gray-90'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {navItems.map((item) => (
              <Link 
                key={item.pathname} 
                to={item.pathname} 
                className='flex flex-col items-center'
                data-pathname={item.pathname}
              >
                <div className="relative inline-flex flex-col items-center justify-center gap-2 px-0 py-2.5">
                  <div
                    className={`w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)] text-gray-90`}>
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
        className="all-[unset] box-border inline-flex gap-2.5 px-6 py-2.5 flex-[0_0_auto] bg-[#ffffff] rounded-[100px] items-center justify-center relative cursor-pointer">
        <div
          className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#3573fc] text-base tracking-[0] leading-6 whitespace-nowrap">
          Связаться с нами
        </div>
      </button>
    </header>
  );
};
