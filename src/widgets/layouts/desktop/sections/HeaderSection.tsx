import { AnimatePresence, motion } from 'framer-motion';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import { useFeedbackForm } from 'widgets/feedback-form';

import { RoutesPath } from 'shared/routes-path.tsx';

export const HeaderSection = () => {
  const { t } = useTranslation(['common', 'ns', 'layout']);
  const { pathname } = useLocation();
  const { setIsOpen } = useFeedbackForm();
  const [indicatorStyle] = useState({ left: 0, width: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const originalOverflowRef = useRef<string>('');
  const originalPaddingRightRef = useRef<string>('');
  const originalHtmlOverflowRef = useRef<string>('');
  const originalHtmlPaddingRightRef = useRef<string>('');
  const originalPositionRef = useRef<string>('');
  const originalTopRef = useRef<string>('');
  const originalLeftRef = useRef<string>('');
  const originalRightRef = useRef<string>('');
  const originalWidthRef = useRef<string>('');
  const savedScrollYRef = useRef<number>(0);

  useEffect(() => {
    if (isMenuOpen) {
      originalOverflowRef.current = document.body.style.overflow;
      originalPaddingRightRef.current = document.body.style.paddingRight;
      originalHtmlOverflowRef.current = document.documentElement.style.overflow;
      originalHtmlPaddingRightRef.current = document.documentElement.style.paddingRight;
      originalPositionRef.current = document.body.style.position;
      originalTopRef.current = document.body.style.top;
      originalLeftRef.current = document.body.style.left;
      originalRightRef.current = document.body.style.right;
      originalWidthRef.current = document.body.style.width;

      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      savedScrollYRef.current = window.scrollY;

      document.documentElement.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
      }

      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollYRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    } else {
      document.documentElement.style.overflow = originalHtmlOverflowRef.current || '';
      document.documentElement.style.paddingRight = originalHtmlPaddingRightRef.current || '';

      document.body.style.position = originalPositionRef.current || '';
      document.body.style.top = originalTopRef.current || '';
      document.body.style.left = originalLeftRef.current || '';
      document.body.style.right = originalRightRef.current || '';
      document.body.style.width = originalWidthRef.current || '';
      document.body.style.overflow = originalOverflowRef.current || '';
      document.body.style.paddingRight = originalPaddingRightRef.current || '';

      const y = savedScrollYRef.current;
      if (typeof y === 'number' && !Number.isNaN(y)) {
        window.scrollTo(0, y);
      }
    }
  }, [isMenuOpen]);

  const navItems = [
    { id: 2, label: t('about', { ns: 'nav' }), pathname: RoutesPath.ABOUT },
    { id: 3, label: t('reviews', { ns: 'nav' }), pathname: RoutesPath.REVIEWS },
    { id: 4, label: t('vacancies', { ns: 'nav' }), pathname: RoutesPath.WORK },
    { id: 5, label: t('blog', { ns: 'nav' }), pathname: RoutesPath.BLOG },
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
      className={`relative mt-4 flex w-full items-center justify-between !rounded-[32px_32px_0_0] px-8 py-4 ${
        isMenuOpen ? '!bg-white' : ''
      }`}
    >
      <div className="relative h-[22px]">
        <Link to={RoutesPath.MAIN} className="h-[22px] w-28">
          <div className="relative h-[23px] w-[170px]">
            <span className="sr-only">Sputnik</span>
            <svg
              className="absolute left-0 top-0 size-full"
              aria-hidden={true}
              width="112"
              height="24"
              viewBox="0 0 112 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g mask="url(#mask0_9587_14956)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.46875 12.0009C7.46875 7.01586 11.51 2.97336 16.4963 2.97336C17.215 2.97336 17.9163 3.05836 18.5875 3.21711C16.6238 1.60086 14.11 0.630859 11.3687 0.630859C5.09 0.630859 0 5.72211 0 12.0009C0 18.2796 5.09 23.3696 11.3687 23.3696C14.11 23.3696 16.6238 22.3996 18.5875 20.7846C17.9163 20.9434 17.215 21.0284 16.4963 21.0284C11.51 21.0284 7.46875 16.9859 7.46875 12.0009Z"
                  fill="#1C222F"
                />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.7939 2.29688V6.68563C24.8814 8.17688 25.5239 10.0131 25.5239 12.0006C25.5239 13.9869 24.8814 15.8244 23.7939 17.3156V21.7169H29.8539V7.00438H36.0202V21.7169H42.0802V2.29688H23.7939Z"
                fill="#1C222F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M46.8403 2.29688V6.93188H52.4478V21.7169H58.5078V6.93188H64.1153V2.29688H46.8403Z"
                fill="#1C222F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M68.88 2.29688V21.7169H74.9413V13.8081H81.2138V21.7169H87.2738V2.29688H81.2138V9.03063H74.9413V2.29688H68.88Z"
                fill="#1C222F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M92.03 2.2627V11.9902V21.7177H98.09V14.0277H99.6788L104.274 21.7177H111.238L105.213 11.9902L111.238 2.2627H104.274L99.6788 9.95269H98.09V2.2627H92.03Z"
                fill="#1C222F"
              />
            </svg>
          </div>
        </Link>
      </div>

      <nav
        aria-label={t('products', { ns: 'nav' })}
        className="relative flex items-center gap-16"
      >
        <div className="relative">
          <button
            className={`mt-[-1.00px] flex w-fit cursor-pointer items-center whitespace-nowrap border-b-2 border-solid py-2.5 text-gray-90 outline-0 hover:text-[#3573FC] ${
              isProductActive ? 'border-[#3573FC]' : 'border-transparent'
            }`}
            aria-haspopup="true"
            aria-expanded={isMenuOpen}
            aria-controls="products-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {t('products', { ns: 'nav' })}
          </button>
        </div>
        <ul className="flex items-center gap-16">
          {navItems.map((item) => (
            <li key={item.pathname} className="list-none">
              <Link
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
                  <div
                    className="mt-[-1.00px] w-fit whitespace-nowrap text-gray-90 transition-colors group-hover:text-[#3573FC]">
                    {item.label}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="absolute bottom-0.5 !ml-0 h-0.5 rounded-[20px_20px_0px_0px] bg-blue-50 transition-all duration-300 ease-in-out"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
          }}
        />
      </nav>

      <div className="flex items-center gap-3">
        <button
          onClick={onClick}
          className={`all-[unset] box-border inline-flex flex-[0_0_auto] gap-2.5 px-6 py-2.5 transition-colors ${
            !isMenuOpen ? 'bg-[#ffffff]' : 'bg-gray-10'
          } relative cursor-pointer items-center justify-center rounded-[100px]`}
        >
          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-[#3573fc] [font-family:'Roboto',Helvetica]">
            {t('actions.contactUs')}
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-white px-6 pb-10 pt-6 xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={t('products', { ns: 'nav' })}
        >
          <div className="mb-6 flex items-center justify-between">
            <Link
              to={RoutesPath.MAIN}
              onClick={() => setIsMenuOpen(false)}
              className="h-[22px] w-28"
            >
              <div className="relative h-[23px] w-full xl:w-[170px]">
                <img
                  className="absolute left-0 top-0 size-full"
                  alt="Group"
                  src="/img/logo.png"
                />
              </div>
            </Link>
            <button
              aria-label={t('closeMenu', { ns: 'common' })}
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-full bg-gray-10"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="#1c222f"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav
            aria-label={t('crediting', { ns: 'nav' })}
            className="space-y-8 p-3"
          >
            <div className="space-y-3">
              <div className="text-base text-gray-40">
                {t('crediting', { ns: 'nav' })}
              </div>
              <ul className="divide-y divide-gray-10 rounded-2xl border border-[#F3F4F7]">
                <li className="list-none">
                  <Link
                    to={RoutesPath.MICROCREDIT}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between p-4"
                  >
                    <span className="text-gray-90">
                      {t('microcredit', { ns: 'nav' })}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4L13 10L7 16"
                        stroke="#9FA7BC"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to={RoutesPath.BUSINESSCREDIT}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between p-4"
                  >
                    <span className="text-gray-90">
                      {t('businessCredit', { ns: 'nav' })}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4L13 10L7 16"
                        stroke="#9FA7BC"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to={RoutesPath.BANKCREDIT}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between p-4"
                  >
                    <span className="text-gray-90">
                      {t('bankCredit', { ns: 'nav' })}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4L13 10L7 16"
                        stroke="#9FA7BC"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to={RoutesPath.BNPL}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between p-4"
                  >
                    <span className="text-gray-90">
                      {t('bnpl', { ns: 'nav' })}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4L13 10L7 16"
                        stroke="#9FA7BC"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to={RoutesPath.AUTOCREDIT}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between p-4"
                  >
                    <span className="text-gray-90">
                      {t('autocredit', { ns: 'nav' })}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4L13 10L7 16"
                        stroke="#9FA7BC"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to={RoutesPath.P2P}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between p-4"
                  >
                    <span className="text-gray-90">
                      {t('p2p', { ns: 'nav' })}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4L13 10L7 16"
                        stroke="#9FA7BC"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to={RoutesPath.ISLAMFINANCE}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between p-4"
                  >
                    <span className="text-gray-90">
                      {t('islamFinance', { ns: 'nav' })}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4L13 10L7 16"
                        stroke="#9FA7BC"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-base text-gray-40">
                {t('otherSoftware', { ns: 'nav' })}
              </div>
              <ul className="divide-y divide-gray-10 rounded-2xl border border-[#F3F4F7]">
                <li className="list-none">
                  <Link
                    to={RoutesPath.DATAUNLOAD}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between p-4"
                  >
                    <span className="text-gray-90">
                      {t('DATAUNLOAD' as any, {
                        ns: 'nav',
                        defaultValue: 'Выгрузка данных в кредитные бюро',
                      })}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4L13 10L7 16"
                        stroke="#9FA7BC"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to={RoutesPath.FDATA}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between p-4"
                  >
                    <span className="text-gray-90">
                      {t('header.reconciliation', { ns: 'layout' })}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4L13 10L7 16"
                        stroke="#9FA7BC"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-base text-gray-40">
                {t('header.services', { ns: 'layout' })}
              </div>
              <ul className="divide-y divide-gray-10 rounded-2xl border border-[#F3F4F7]">
                <li className="list-none">
                  <Link
                    to={RoutesPath.DEVELOPMENT}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between p-4"
                  >
                    <span className="text-gray-90">
                      {t('header.customDevelopment', { ns: 'layout' })}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4L13 10L7 16"
                        stroke="#9FA7BC"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute inset-x-0 top-full z-50 hidden xl:flex"
            id="products-menu"
            role="region"
            aria-label={t('headings.lending', { ns: 'megamenu' })}
          >
            <motion.div
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.98 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="origin-top-center relative w-full overflow-hidden rounded-b-[32px] shadow-xl"
            >
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[0px_0px_32px_32px] border border-[#F3F4F7] bg-white px-6 pb-6 pt-10">
                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2">
                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 px-5 py-0">
                    <div className="relative mt-[-1.00px] w-full text-base font-normal leading-6 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica] xl:w-[590px]">
                      {t('headings.lending', { ns: 'megamenu' })}
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-center gap-6 bg-[#ffffff] xl:w-[1392px]">
                    <Link
                      to={RoutesPath.MICROCREDIT}
                      className="group relative flex flex-1 grow cursor-pointer items-center gap-7 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                      onClick={() => {
                        if (pathname === RoutesPath.MICROCREDIT) {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      <svg
                        className="relative size-16 flex-[0_0_auto] text-[#F3F4F7] group-hover:text-white"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="64"
                          height="64"
                          rx="24"
                          fill="currentColor"
                        />
                        <path
                          d="M32 36C34.2091 36 36 34.2091 36 32C36 29.7909 34.2091 28 32 28C29.7909 28 28 29.7909 28 32C28 34.2091 29.7909 36 32 36Z"
                          stroke="#3573FC"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M46 24H18V40H46V24Z"
                          stroke="#3573FC"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M46 29C44.7509 28.7883 43.5985 28.1933 42.7026 27.2974C41.8067 26.4015 41.2117 25.2491 41 24"
                          stroke="#3573FC"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M41 40C41.2117 38.7509 41.8067 37.5985 42.7026 36.7026C43.5985 35.8067 44.7509 35.2117 46 35"
                          stroke="#3573FC"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18 35C19.2491 35.2117 20.4015 35.8067 21.2974 36.7026C22.1933 37.5985 22.7883 38.7509 23 40"
                          stroke="#3573FC"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23 24C22.7883 25.2491 22.1933 26.4015 21.2974 27.2974C20.4015 28.1933 19.2491 28.7883 18 29"
                          stroke="#3573FC"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="relative flex-1 text-xl font-normal leading-5 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        <span className="whitespace-pre-wrap leading-7 text-[#1c222f]">
                          {t('tiles.microcredit', { ns: 'megamenu' })}
                        </span>
                      </p>
                    </Link>

                    <Link
                      to={RoutesPath.BUSINESSCREDIT}
                      className="group relative flex flex-1 grow cursor-pointer items-center gap-7 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                      onClick={() => {
                        if (pathname === RoutesPath.BUSINESSCREDIT) {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      <svg
                        className="relative size-16 flex-[0_0_auto] text-[#F3F4F7] group-hover:text-white"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="64"
                          height="64"
                          rx="24"
                          fill="currentColor"
                        />
                        <path
                          d="M43 24H21C20.4477 24 20 24.4477 20 25V41C20 41.5523 20.4477 42 21 42H43C43.5523 42 44 41.5523 44 41V25C44 24.4477 43.5523 24 43 24Z"
                          stroke="#725DD6"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M37 24V22C37 21.4696 36.7893 20.9609 36.4142 20.5858C36.0391 20.2107 35.5304 20 35 20H29C28.4696 20 27.9609 20.2107 27.5858 20.5858C27.2107 20.9609 27 21.4696 27 22V24"
                          stroke="#725DD6"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M44 30.7888C40.3532 32.8988 36.2132 34.0066 32 34C27.7869 34.0067 23.647 32.8993 20 30.79"
                          stroke="#725DD6"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M30 30H34"
                          stroke="#725DD6"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('tiles.businessCredit', { ns: 'megamenu' })
                          .split('\n')
                          .map((line, idx) => (
                            <span key={idx}>
                              {line}
                              <br />
                            </span>
                          ))}
                      </div>
                    </Link>

                    <Link
                      to={RoutesPath.BANKCREDIT}
                      className="group relative flex flex-1 grow cursor-pointer items-center gap-7 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                      onClick={() => {
                        if (pathname === RoutesPath.BANKCREDIT) {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      <svg
                        className="relative size-16 flex-[0_0_auto] text-[#F3F4F7] group-hover:text-white"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="60"
                          height="60"
                          rx="24"
                          fill="currentColor"
                        />
                        <path
                          d="M18.625 26.5H41.375L30 19.5L18.625 26.5Z"
                          stroke="#FBAB00"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22.125 26.5V35.25"
                          stroke="#FBAB00"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27.375 26.5V35.25"
                          stroke="#FBAB00"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M32.625 26.5V35.25"
                          stroke="#FBAB00"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M37.875 26.5V35.25"
                          stroke="#FBAB00"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.5 35.25H40.5"
                          stroke="#FBAB00"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17.75 38.75H42.25"
                          stroke="#FBAB00"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('tiles.bankCredit', { ns: 'megamenu' })
                          .split('\n')
                          .map((line, idx) => (
                            <span key={idx}>
                              {line}
                              <br />
                            </span>
                          ))}
                      </div>
                    </Link>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-center gap-6 bg-[#ffffff] xl:w-[1392px]">
                    <Link
                      to={RoutesPath.BNPL}
                      className="group relative flex flex-1 grow cursor-pointer items-center gap-7 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                      onClick={() => {
                        if (pathname === RoutesPath.BNPL) {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      <svg
                        className="relative size-16 flex-[0_0_auto] text-[#F3F4F7] group-hover:text-white"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="64"
                          height="64"
                          rx="24"
                          fill="currentColor"
                        />
                        <path
                          d="M43 22H21C20.4477 22 20 22.4477 20 23V41C20 41.5523 20.4477 42 21 42H43C43.5523 42 44 41.5523 44 41V23C44 22.4477 43.5523 22 43 22Z"
                          stroke="#01AD7C"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20 26H44"
                          stroke="#01AD7C"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M37 30C37 31.3261 36.4732 32.5979 35.5355 33.5355C34.5979 34.4732 33.3261 35 32 35C30.6739 35 29.4021 34.4732 28.4645 33.5355C27.5268 32.5979 27 31.3261 27 30"
                          stroke="#01AD7C"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('tiles.bnpl', { ns: 'megamenu' })}
                      </div>
                    </Link>

                    <Link
                      to={RoutesPath.BNPL}
                      className="group relative flex flex-1 grow cursor-pointer items-center gap-7 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                      onClick={() => {
                        if (pathname === RoutesPath.BNPL) {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      <svg
                        className="relative size-16 flex-[0_0_auto] text-[#F3F4F7] group-hover:text-white"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="64"
                          height="64"
                          rx="24"
                          fill="currentColor"
                        />
                        <path
                          d="M39.5 39H27.3962C26.9279 38.9999 26.4744 38.8355 26.1148 38.5353C25.7553 38.2352 25.5125 37.8183 25.4288 37.3575L22.0912 19H19"
                          stroke="#E74951"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27.5 44C28.8807 44 30 42.8807 30 41.5C30 40.1193 28.8807 39 27.5 39C26.1193 39 25 40.1193 25 41.5C25 42.8807 26.1193 44 27.5 44Z"
                          stroke="#E74951"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M39.5 44C40.8807 44 42 42.8807 42 41.5C42 40.1193 40.8807 39 39.5 39C38.1193 39 37 40.1193 37 41.5C37 42.8807 38.1193 44 39.5 44Z"
                          stroke="#E74951"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M24.8188 34H40.5125C40.9809 33.9999 41.4344 33.8355 41.7939 33.5353C42.1535 33.2352 42.3963 32.8183 42.48 32.3575L44 24H23"
                          stroke="#E74951"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('tiles.pos', { ns: 'megamenu' })}
                      </div>
                    </Link>

                    <Link
                      to={RoutesPath.AUTOCREDIT}
                      className="group relative flex flex-1 grow cursor-pointer items-center gap-7 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                      onClick={() => {
                        if (pathname === RoutesPath.AUTOCREDIT) {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      <svg
                        className="relative size-16 flex-[0_0_auto] text-[#F3F4F7] group-hover:text-white"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="64"
                          height="64"
                          rx="24"
                          fill="currentColor"
                        />
                        <path
                          d="M24 41C25.6569 41 27 39.6569 27 38C27 36.3431 25.6569 35 24 35C22.3431 35 21 36.3431 21 38C21 39.6569 22.3431 41 24 41Z"
                          stroke="#3573FC"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M40 41C41.6569 41 43 39.6569 43 38C43 36.3431 41.6569 35 40 35C38.3431 35 37 36.3431 37 38C37 39.6569 38.3431 41 40 41Z"
                          stroke="#3573FC"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27 38H37"
                          stroke="#3573FC"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M43 38H46C46.2652 38 46.5196 37.8946 46.7071 37.7071C46.8946 37.5196 47 37.2652 47 37V32C47 31.7348 46.8946 31.4804 46.7071 31.2929C46.5196 31.1054 46.2652 31 46 31H42L36.2925 25.2925C36.1051 25.1053 35.8511 25.0001 35.5863 25H21.535C21.3705 25.0001 21.2086 25.0408 21.0636 25.1184C20.9186 25.196 20.795 25.3082 20.7038 25.445L17 31V37C17 37.2652 17.1054 37.5196 17.2929 37.7071C17.4804 37.8946 17.7348 38 18 38H21"
                          stroke="#3573FC"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M42 31H17"
                          stroke="#3573FC"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('tiles.autocredit', { ns: 'megamenu' })}
                      </div>
                    </Link>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-center gap-6 bg-[#ffffff] xl:w-[1392px]">
                    <Link
                      to={RoutesPath.P2P}
                      className="group relative flex w-full cursor-pointer items-center gap-7 rounded-[32px] p-5 hover:bg-[#f9fafd] xl:w-[448px]"
                      onClick={() => {
                        if (pathname === RoutesPath.P2P) {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      <svg
                        className="relative size-16 flex-[0_0_auto] text-[#F3F4F7] group-hover:text-white"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="64"
                          height="64"
                          rx="24"
                          fill="currentColor"
                        />
                        <path
                          d="M27 28H21V22"
                          stroke="#FBAB00"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 28L24.535 24.465C26.5822 22.4179 29.3539 21.2604 32.249 21.2435C35.1441 21.2267 37.9291 22.3519 40 24.375"
                          stroke="#FBAB00"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M37 36H43V42"
                          stroke="#FBAB00"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M43 36L39.465 39.535C37.4178 41.5821 34.6461 42.7396 31.751 42.7565C28.8559 42.7733 26.0709 41.6482 24 39.625"
                          stroke="#FBAB00"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('tiles.p2p', { ns: 'megamenu' })}
                      </div>
                    </Link>

                    <Link
                      to={RoutesPath.ISLAMFINANCE}
                      className="group relative flex w-full cursor-pointer items-center gap-7 rounded-[32px] p-5 hover:bg-[#f9fafd] xl:w-[448px]"
                      onClick={() => {
                        if (pathname === RoutesPath.ISLAMFINANCE) {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      <svg
                        className="relative size-16 flex-[0_0_auto] text-[#F3F4F7] group-hover:text-white"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="64"
                          height="64"
                          rx="24"
                          fill="currentColor"
                        />
                        <path
                          d="M34.9999 41.8C33.1929 40.8788 31.6758 39.476 30.6162 37.7465C29.5567 36.017 28.9959 34.0282 28.9959 32C28.9959 29.9718 29.5567 27.983 30.6162 26.2535C31.6758 24.524 33.1929 23.1212 34.9999 22.2C33.3229 21.3451 31.4547 20.9348 29.5738 21.0084C27.693 21.082 25.8625 21.637 24.2574 22.6203C22.6524 23.6037 21.3266 24.9824 20.4067 26.6247C19.4869 28.2669 19.0039 30.1177 19.0039 32C19.0039 33.8823 19.4869 35.7331 20.4067 37.3754C21.3266 39.0176 22.6524 40.3963 24.2574 41.3797C25.8625 42.363 27.693 42.918 29.5738 42.9916C31.4547 43.0652 33.3229 42.6549 34.9999 41.8Z"
                          stroke="#01AD7C"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M38.1825 32L36 28.2913L40.0737 29.3L42.7987 26L43.1325 30.3313L47 32L43.1325 33.6688L42.7987 38L40.0737 34.7L36 35.7087L38.1825 32Z"
                          stroke="#01AD7C"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('tiles.islamFinance', { ns: 'megamenu' })
                          .split('\n')
                          .map((line, idx) => (
                            <span key={idx}>
                              {line}
                              <br />
                            </span>
                          ))}
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2">
                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 px-5 py-0">
                    <div className="relative mt-[-1.00px] w-full text-base font-normal leading-6 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica] xl:w-[590px]">
                      {t('headings.otherSoftware', { ns: 'megamenu' })}
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-center gap-6 bg-[#ffffff] xl:w-[1392px]">
                    <Link
                      to={RoutesPath.DATAUNLOAD}
                      className="group relative flex flex-1 grow cursor-pointer items-center gap-7 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                      onClick={() => {
                        if (pathname === RoutesPath.DATAUNLOAD) {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      <svg
                        className="relative size-16 flex-[0_0_auto] text-[#F3F4F7] group-hover:text-white"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="64"
                          height="64"
                          rx="24"
                          fill="currentColor"
                        />
                        <path
                          d="M32 34V20"
                          stroke="#725DD6"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M43 34V42H21V34"
                          stroke="#725DD6"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27 25L32 20L37 25"
                          stroke="#725DD6"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('tiles.dataUnloadFull', { ns: 'megamenu' })
                          .split('\n')
                          .map((line, idx) => (
                            <span key={idx}>
                              {line}
                              <br />
                            </span>
                          ))}
                      </p>
                    </Link>

                    <Link
                      to={RoutesPath.FDATA}
                      className="group relative flex flex-1 grow cursor-pointer items-center gap-7 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                      onClick={() => {
                        if (pathname === RoutesPath.FDATA) {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      <svg
                        className="relative size-16 flex-[0_0_auto] text-[#F3F4F7] group-hover:text-white"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="64"
                          height="64"
                          rx="24"
                          fill="currentColor"
                        />
                        <path
                          d="M32 32C38.0751 32 43 29.3137 43 26C43 22.6863 38.0751 20 32 20C25.9249 20 21 22.6863 21 26C21 29.3137 25.9249 32 32 32Z"
                          stroke="#01AD7C"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 26V32C21 35.3138 25.925 38 32 38C38.075 38 43 35.3138 43 32V26"
                          stroke="#01AD7C"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 32V38C21 41.3138 25.925 44 32 44C38.075 44 43 41.3138 43 38V32"
                          stroke="#01AD7C"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('tiles.reconciliation', { ns: 'megamenu' })}
                      </div>
                    </Link>

                    <Link
                      to={RoutesPath.FDATA}
                      className="group invisible relative flex flex-1 grow cursor-pointer items-center gap-7 rounded-[32px] p-5 hover:bg-[#f9fafd]"
                      onClick={() => {
                        if (pathname === RoutesPath.FDATA) {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      <svg
                        className="relative size-16 flex-[0_0_auto] text-[#F3F4F7] group-hover:text-white"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="64"
                          height="64"
                          rx="24"
                          fill="currentColor"
                        />
                        <path
                          d="M32 37V44"
                          stroke="#FBAB00"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.6062 26C20.2855 28.2876 19.7564 30.9472 20.1012 33.5661C20.4459 36.1851 21.6452 38.6171 23.513 40.485C25.3808 42.3529 27.8128 43.5524 30.4317 43.8973C33.0506 44.2422 35.7102 43.7133 37.9979 42.3927C40.2857 41.072 42.0737 39.0334 43.0848 36.593C44.0958 34.1526 44.2734 31.4468 43.5899 28.8952C42.9065 26.3436 41.4002 24.0888 39.3047 22.4805C37.2092 20.8722 34.6415 20.0003 32 20V27C33.1006 27.0002 34.1704 27.3636 35.0435 28.0338C35.9165 28.704 36.544 29.6436 36.8287 30.7067C37.1134 31.7699 37.0393 32.8973 36.618 33.9141C36.1967 34.9309 35.4516 35.7802 34.4984 36.3304C33.5452 36.8806 32.437 37.1009 31.3458 36.9572C30.2546 36.8134 29.2414 36.3136 28.4631 35.5353C27.6849 34.757 27.1853 33.7437 27.0416 32.6525C26.898 31.5613 27.1184 30.4532 27.6687 29.5L21.6062 26Z"
                          stroke="#FBAB00"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27.1687 33.295L20.4062 35.1062"
                          stroke="#FBAB00"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('tiles.decisionsModuleFull', { ns: 'megamenu' })}
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2">
                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 px-5 py-0">
                    <div className="relative mt-[-1.00px] w-full text-base font-normal leading-6 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica] xl:w-[590px]">
                      {t('headings.services', { ns: 'megamenu' })}
                    </div>
                  </div>

                  <Link
                    to={RoutesPath.DEVELOPMENT}
                    className="relative flex w-full flex-[0_0_auto] items-center gap-6 bg-[#ffffff] xl:w-[1392px]"
                    onClick={() => {
                      if (pathname === RoutesPath.DEVELOPMENT) {
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    <div className="group relative flex w-full cursor-pointer items-center gap-7 rounded-[32px] p-5 hover:bg-[#f9fafd] xl:w-[448px]">
                      <svg
                        className="relative size-16 flex-[0_0_auto] text-[#F3F4F7] group-hover:text-white"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="64"
                          height="64"
                          rx="24"
                          fill="currentColor"
                        />
                        <path
                          d="M24 27L18 32L24 37"
                          stroke="#E74951"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M40 27L46 32L40 37"
                          stroke="#E74951"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M36 21L28 43"
                          stroke="#E74951"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="relative flex-1 text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('tiles.customDevelopment', { ns: 'megamenu' })}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
