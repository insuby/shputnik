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
        `link[rel="prefetch"][href="${url}"]`,
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
      className={`mt-4 flex w-full items-center justify-between !rounded-[32px_32px_0_0] px-8 py-4 ${
        isMenuOpen ? '!bg-white' : ''
      }`}
    >
      <div className="relative h-[22px]">
        <Link to={RoutesPath.MAIN} className="h-[22px] w-28">
          <div className="relative h-[23px] w-[170px]">
            <img
              className="absolute left-0 top-0 size-full"
              alt="Group"
              src="/img/logo.png"
            />
          </div>
        </Link>
      </div>

      <div className="relative flex items-center gap-16">
        <div className="relative">
          <button
            className={`mt-[-1.00px] flex w-fit cursor-pointer items-center whitespace-nowrap border-b-2 border-solid py-2.5 font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 outline-0 [font-style:var(--body-3-r-font-style)] hover:text-[#3573FC] ${
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
            className="group flex cursor-pointer flex-col items-center rounded-[32px]"
            data-pathname={item.pathname}
          >
            <div
              className={`relative inline-flex flex-col items-center justify-center gap-2 border-b-2 border-solid px-0 py-2.5 transition-colors ${
                pathname === item.pathname
                  ? 'border-[#3573FC]'
                  : 'border-transparent'
              }`}
            >
              <div className="mt-[-1.00px] w-fit whitespace-nowrap font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 transition-colors [font-style:var(--body-3-r-font-style)] group-hover:text-[#3573FC]">
                {item.label}
              </div>
            </div>
          </Link>
        ))}
        <div
          className="absolute bottom-0.5 !ml-0 h-0.5 rounded-[20px_20px_0px_0px] bg-blue-50 transition-all duration-300 ease-in-out"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
          }}
        />
      </div>

      <button
        onClick={onClick}
        className={`all-[unset] box-border inline-flex flex-[0_0_auto] gap-2.5 px-6 py-2.5 ${
          !isMenuOpen ? 'bg-[#ffffff]' : 'bg-gray-10'
        } relative cursor-pointer items-center justify-center rounded-[100px]`}
      >
        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-[#3573fc] [font-family:'Roboto',Helvetica]">
          Связаться с нами
        </div>
      </button>
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-20 z-50 mx-auto mt-1 flex max-w-[1440px] justify-center py-2">
          <div className="origin-top-center data-[state=open]:animate-indata-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative w-full overflow-hidden rounded-b-[32px] border-b-[32px] shadow-xl">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[0px_0px_32px_32px] border border-[#F3F4F7] bg-white px-6 pb-6 pt-10">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2">
                <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 px-5 py-0">
                  <div className="relative mt-[-1.00px] w-[590px] text-base font-normal leading-6 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    Кредитование
                  </div>
                </div>

                <div className="relative flex w-[1392px] flex-[0_0_auto] items-center gap-6 bg-[#ffffff]">
                  <Link
                    to={RoutesPath.MICROCREDIT}
                    className="relative flex flex-1 grow cursor-pointer items-center gap-8 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                  >
                    <img
                      className="relative size-16 flex-[0_0_auto]"
                      alt="Frame"
                      src="/img/trust/frame-84-2.svg"
                    />

                    <p className="relative flex-1 text-xl font-normal leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      <span className="whitespace-pre-wrap leading-7 text-[#1c222f]">
                        {`Микрофинансовое\nкредитование`}
                      </span>
                    </p>
                  </Link>

                  <Link
                    to={RoutesPath.BUSINESSCREDIT}
                    className="relative flex flex-1 grow cursor-pointer items-center gap-8 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                  >
                    <img
                      className="relative size-16 flex-[0_0_auto]"
                      alt="Frame"
                      src="/img/trust/frame-84-10.svg"
                    />

                    <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Кредитование
                      <br />
                      бизнеса
                    </div>
                  </Link>

                  <Link
                    to={RoutesPath.BANKCREDIT}
                    className="relative flex flex-1 grow cursor-pointer items-center gap-8 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                  >
                    <img
                      className="relative size-16 flex-[0_0_auto]"
                      alt="Frame"
                      src="/img/trust/frame-84-4.svg"
                    />

                    <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Банковское
                      <br />
                      кредитование
                    </div>
                  </Link>
                </div>

                <div className="relative flex w-[1392px] flex-[0_0_auto] items-center gap-6 bg-[#ffffff]">
                  <Link
                    to={RoutesPath.BNPL}
                    className="relative flex flex-1 grow cursor-pointer items-center gap-8 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                  >
                    <img
                      className="relative size-16 flex-[0_0_auto]"
                      alt="Frame"
                      src="/img/trust/frame-84.svg"
                    />

                    <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      BNPL
                    </div>
                  </Link>

                  <Link
                    to={RoutesPath.BNPL}
                    className="relative flex flex-1 grow cursor-pointer items-center gap-8 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                  >
                    <img
                      className="relative size-16 flex-[0_0_auto]"
                      alt="Frame"
                      src="/img/trust/frame-84-3.svg"
                    />

                    <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      POS-кредитование
                    </div>
                  </Link>

                  <Link
                    to={RoutesPath.AUTOCREDIT}
                    className="relative flex flex-1 grow cursor-pointer items-center gap-8 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                  >
                    <img
                      className="relative size-16 flex-[0_0_auto]"
                      alt="Frame"
                      src="/img/trust/frame-84-20.svg"
                    />

                    <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Автокредитование
                    </div>
                  </Link>
                </div>

                <div className="relative flex w-[1392px] flex-[0_0_auto] items-center gap-6 bg-[#ffffff]">
                  <Link
                    to={RoutesPath.P2P}
                    className="relative flex w-[448px] cursor-pointer items-center gap-8 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                  >
                    <img
                      className="relative size-16 flex-[0_0_auto]"
                      alt="Frame"
                      src="/img/trust/frame-84-7.svg"
                    />

                    <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      P2P-кредитование
                    </div>
                  </Link>

                  <Link
                    to={RoutesPath.ISLAMFINANCE}
                    className="relative flex w-[448px] cursor-pointer items-center gap-8 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                  >
                    <img
                      className="relative size-16 flex-[0_0_auto]"
                      alt="Frame"
                      src="/img/trust/frame-84-1.svg"
                    />

                    <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Исламское
                      <br />
                      финансирование
                    </div>
                  </Link>
                </div>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2">
                <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 px-5 py-0">
                  <div className="relative mt-[-1.00px] w-[590px] text-base font-normal leading-6 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    Другое программное обеспечение
                  </div>
                </div>

                <div className="relative flex w-[1392px] flex-[0_0_auto] items-center gap-6 bg-[#ffffff]">
                  <Link
                    to={RoutesPath.DATAUNLOAD}
                    className="relative flex flex-1 grow cursor-pointer items-center gap-8 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                  >
                    <img
                      className="relative size-16 flex-[0_0_auto]"
                      alt="Frame"
                      src="/img/trust/frame-84-8.svg"
                    />

                    <p className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Выгрузка данных <br />в кредитные бюро
                    </p>
                  </Link>

                  <Link
                    to={RoutesPath.FDATA}
                    className="relative flex flex-1 grow cursor-pointer items-center gap-8 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                  >
                    <img
                      className="relative size-16 flex-[0_0_auto]"
                      alt="Frame"
                      src="/img/trust/frame-84-6.svg"
                    />

                    <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Настраиваемый модуль принятия решений
                    </div>
                  </Link>

                  <div className="relative flex flex-1 grow cursor-pointer items-center gap-8 rounded-[32px] p-5 hover:bg-[#f9fafd]">
                    <img
                      className="relative size-16 flex-[0_0_auto]"
                      alt="Frame"
                      src="/img/trust/frame-84-15.svg"
                    />

                    <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Реконсиляция данных
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2">
                <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 px-5 py-0">
                  <div className="relative mt-[-1.00px] w-[590px] text-base font-normal leading-6 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                    Услуги
                  </div>
                </div>

                <Link
                  to={RoutesPath.DEVELOPMENT}
                  className="relative flex w-[1392px] flex-[0_0_auto] items-center gap-6 bg-[#ffffff]"
                >
                  <div className="relative flex w-[448px] cursor-pointer items-center gap-8 rounded-[32px] p-5 hover:bg-[#f9fafd]">
                    <img
                      className="relative size-16 flex-[0_0_auto]"
                      alt="Frame"
                      src="/img/trust/frame-84-14.svg"
                    />

                    <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
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
