import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { RoutesPath } from '../../../routes-path.tsx';
import { useFeedbackForm } from '../../../widgets/feedback-form';

export const HeaderSection = () => {
  const { pathname } = useLocation();
  const { setIsOpen } = useFeedbackForm();
  const [indicatorStyle] = useState({ left: 0, width: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const assetsPrefetchedRef = useRef(false);

  const preloadAssets = useCallback(() => {
    if (assetsPrefetchedRef.current) return;
    const imageUrls = ['/img/trust/frame-17-1.svg'];

    imageUrls.forEach((url) => {
      const existing = document.head.querySelector(
        `link[rel="prefetch"][href="${url}"]`
      );
      if (!existing) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);
      }

      const img = new Image();
      img.src = url;
    });

    assetsPrefetchedRef.current = true;
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      preloadAssets();
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen, preloadAssets]);

  const navItems = [
    { id: 2, label: 'О компании', pathname: RoutesPath.ABOUT },
    { id: 3, label: 'Отзывы', pathname: RoutesPath.REVIEWS },
    { id: 4, label: 'Вакансии', pathname: RoutesPath.WORK },
    { id: 4, label: 'Блог', pathname: RoutesPath.BLOG },
  ];

  const isProductActive = pathname.includes('product');

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <header
      className={`flex items-center justify-between w-full py-4 px-8 mt-4 !rounded-[32px_32px_0_0] ${
        isMenuOpen ? '!bg-white' : ''
      }`}
    >
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

      <div className="relative flex items-center gap-16">
        <div className="relative">
          <button
            className={`hover:text-[#3573FC] w-fit mt-[-1.00px] outline-0 font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)] text-gray-90 cursor-pointer flex items-center border-b-2 py-2.5 border-solid ${
              isProductActive ? 'border-[#3573FC]' : 'border-transparent'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Продукты
          </button>
        </div>

        {navItems.map((item) => (
          <Link
            key={item.pathname}
            to={item.pathname}
            className="group flex flex-col items-center rounded-[32px] cursor-pointer"
            data-pathname={item.pathname}
          >
            <div
              className={`relative inline-flex flex-col items-center justify-center gap-2 px-0 py-2.5 border-b-2 border-solid transition-colors ${
                pathname === item.pathname
                  ? 'border-[#3573FC]'
                  : 'border-transparent'
              }`}
            >
              <div
                className={`group-hover:text-[#3573FC] w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)] text-gray-90 transition-colors`}
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
      </div>

      <button
        onClick={onClick}
        className={`all-[unset] box-border inline-flex gap-2.5 px-6 py-2.5 flex-[0_0_auto] ${
          !isMenuOpen ? 'bg-[#ffffff]' : 'bg-gray-10'
        } rounded-[100px] items-center justify-center relative cursor-pointer`}
      >
        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#3573fc] text-base tracking-[0] leading-6 whitespace-nowrap">
          Связаться с нами
        </div>
      </button>
      {isMenuOpen && (
        <div className="fixed z-50 top-20 left-0 right-0 flex justify-center py-2 max-w-[1440px] mx-auto mt-1">
          <div className="shadow-xl border-b-[32px] rounded-b-[32px] origin-top-center relative w-full overflow-hidden data-[state=open]:animate-indata-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90">
            <div className="flex flex-col items-start gap-6 pt-10 pb-6 px-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[0px_0px_32px_32px] overflow-hidden border border-t border-[#F3F4F7]">
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
                      className="relative flex-[0_0_auto] size-16"
                      alt="Frame"
                      src="/img/trust/frame-84-2.svg"
                    />

                    <p className="flex-1 text-gray-90 text-xl leading-5 relative [font-family:'Roboto',Helvetica] font-normal tracking-[0]">
                      <span className="text-[#1c222f] leading-7 whitespace-pre-wrap">
                        {`Микрофинансовое\nкредитование`}
                      </span>
                    </p>
                  </Link>

                  <Link
                    to={RoutesPath.BUSINESSCREDIT}
                    className="gap-8 p-5 flex-1 grow flex items-center relative hover:bg-[#f9fafd] rounded-[32px] cursor-pointer"
                  >
                    <img
                      className="relative flex-[0_0_auto] size-16"
                      alt="Frame"
                      src="/img/trust/frame-84-10.svg"
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
                      className="relative flex-[0_0_auto] size-16"
                      alt="Frame"
                      src="/img/trust/frame-84-4.svg"
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
                      className="relative flex-[0_0_auto] size-16"
                      alt="Frame"
                      src="/img/trust/frame-84.svg"
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
                      className="relative flex-[0_0_auto] size-16"
                      alt="Frame"
                      src="/img/trust/frame-84-3.svg"
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
                      className="relative flex-[0_0_auto] size-16"
                      alt="Frame"
                      src="/img/trust/frame-84-20.svg"
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
                      className="relative flex-[0_0_auto] size-16"
                      alt="Frame"
                      src="/img/trust/frame-84-7.svg"
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
                      className="relative flex-[0_0_auto] size-16"
                      alt="Frame"
                      src="/img/trust/frame-84-1.svg"
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
                      className="relative flex-[0_0_auto] size-16"
                      alt="Frame"
                      src="/img/trust/frame-84-8.svg"
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
                      className="relative flex-[0_0_auto] size-16"
                      alt="Frame"
                      src="/img/trust/frame-84-6.svg"
                    />

                    <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                      Настраиваемый модуль принятия решений
                    </div>
                  </Link>

                  <div className="gap-8 p-5 flex-1 grow flex items-center relative hover:bg-[#f9fafd] rounded-[32px] cursor-pointer">
                    <img
                      className="relative flex-[0_0_auto] size-16"
                      alt="Frame"
                      src="/img/trust/frame-84-15.svg"
                    />

                    <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                      Реконсиляция данных
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

                <Link
                  to={RoutesPath.DEVELOPMENT}
                  className="flex w-[1392px] items-center gap-6 relative flex-[0_0_auto] bg-[#ffffff]"
                >
                  <div className="flex w-[448px] items-center gap-8 p-5 relative hover:bg-[#f9fafd] rounded-[32px] cursor-pointer">
                    <img
                      className="relative flex-[0_0_auto] size-16"
                      alt="Frame"
                      src="/img/trust/frame-84-14.svg"
                    />

                    <div className="flex-1 font-normal text-gray-90 text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      Разработка на заказ
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
