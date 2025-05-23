import { Link, useLocation } from 'react-router-dom';

import { Button } from '../../../components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
} from '../../../components/ui/navigation-menu';
import { RoutesPath } from '../../../routes-path.tsx';
import { useFeedbackForm } from '../../../widgets/feedback-form';

export const HeaderSection = () => {
  const { pathname } = useLocation();
  const { setIsOpen } = useFeedbackForm();

  const navItems = [
    { id: 1, label: 'Продукты', pathname: RoutesPath.PRODUCTS },
    { id: 2, label: 'О компании', pathname: RoutesPath.ABOUT },
    { id: 3, label: 'Отзывы', pathname: RoutesPath.REVIEWS },
    { id: 4, label: 'Вакансии', pathname: RoutesPath.WORK },
    // { id: 5, label: 'Блог', pathname: RoutesPath.BLOG },
  ];

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <header className="flex items-center justify-between w-full bg-white py-4 px-6">
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

      <NavigationMenu className="max-w-none">
        <NavigationMenuList className="flex items-center gap-12">
          {navItems.map((item) => (
            <Link key={item.pathname} to={item.pathname} className='flex flex-col items-center'>
              <div className="relative inline-flex flex-col items-center justify-center gap-2 px-0 py-2.5">
                <div
                  className="hover:text-blue-50 w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-gray-90 text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)]">
                  {item.label}
                </div>
                {pathname === item.pathname && (
                  <div
                    className="absolute bottom-0.5 self-stretch w-full h-0.5 bg-blue-50 rounded-[20px_20px_0px_0px]" />
                )}
              </div>
            </Link>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button
        className="px-6 py-2.5 rounded-[100px] [background:linear-gradient(43deg,rgba(28,34,47,1)_0%,rgba(34,53,98,1)_100%)] text-white font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] [font-style:var(--body-3-r-font-style)]"
        onClick={onClick}
      >
        Связаться с нами
      </Button>
    </header>
  );
};
