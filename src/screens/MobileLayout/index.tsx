import { cx } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { RoutesPath } from '../../routes-path';
import { FeedbackForm, useFeedbackForm } from '../../widgets/feedback-form';
import { FooterSection } from '../Layout/sections/FooterSection.tsx';

export const MobileLayout = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPanel, setMenuPanel] = useState<'root' | 'products'>('root');
  const { isOpen } = useFeedbackForm();
  const { t } = useTranslation(['mobile']);

  const isBgEnabled = location.pathname === RoutesPath.MAIN;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen || isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, isOpen]);

  return (
    <div
      className={cx('relative flex flex-col items-start gap-[88px]', {
        'bg-[linear-gradient(356deg,rgba(255,255,255,1)_0%,rgba(243,244,250,1)_100%)]':
          isBgEnabled,
      })}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        {t('skipToContent')}
      </a>
      <div className="relative flex w-full flex-col items-start">
        <button
          aria-label={t('openMenu')}
          onClick={() => {
            setMenuPanel('root');
            setIsMenuOpen(true);
          }}
          className="absolute right-3 top-2 z-10 inline-flex size-12 items-center justify-center rounded-full"
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" y="0" width="20" height="2" rx="1" fill="#1c222f" />
            <rect x="0" y="6" width="20" height="2" rx="1" fill="#1c222f" />
            <rect x="0" y="12" width="20" height="2" rx="1" fill="#1c222f" />
          </svg>
        </button>
        <div className="relative mb-4 h-12">
          <svg
            className="absolute left-5 top-[12px] h-8 w-28"
            viewBox="0 0 112 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="logoMask"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="19"
              height="24"
            >
              <path
                d="M0 0.630676H18.5875V23.3693H0V0.630676Z"
                fill="#1D2C62"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.46875 12.0006C7.46875 7.01558 11.51 2.97308 16.4963 2.97308C17.215 2.97308 17.9163 3.05808 18.5875 3.21683C16.6238 1.60058 14.11 0.630585 11.3687 0.630585C5.09 0.630585 0 5.72184 0 12.0006C0 18.2793 5.09 23.3693 11.3687 23.3693C14.11 23.3693 16.6238 22.3993 18.5875 20.7843C17.9163 20.9431 17.215 21.0281 16.4963 21.0281C11.51 21.0281 7.46875 16.9856 7.46875 12.0006Z"
              fill="#1C222F"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.7939 2.29712V6.68587C24.8814 8.17712 25.5239 10.0134 25.5239 12.0009C25.5239 13.9871 24.8814 15.8246 23.7939 17.3159V21.7171H29.8539V7.00462H36.0202V21.7171H42.0802V2.29712H23.7939Z"
              fill="#1C222F"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.8403 2.29712V6.93212H52.4478V21.7171H58.5078V6.93212H64.1153V2.29712H46.8403Z"
              fill="#1C222F"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M68.88 2.29712V21.7171H74.9413V13.8084H81.2138V21.7171H87.2738V2.29712H81.2138V9.03087H74.9413V2.29712H68.88Z"
              fill="#1C222F"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M92.03 2.26239V11.9899V21.7174H98.09V14.0274H99.6788L104.274 21.7174H111.238L105.213 11.9899L111.238 2.26239H104.274L99.6788 9.95239H98.09V2.26239H92.03Z"
              fill="#1C222F"
            />
          </svg>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-white px-0 pb-10 pt-2"
          >
            <div className="relative mb-4 h-12">
              <AnimatePresence mode="wait">
                {menuPanel === 'products' ? (
                  <motion.button
                    key="back"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.15 }}
                    aria-label={t('back')}
                    onClick={() => setMenuPanel('root')}
                    className="absolute left-5 top-2 inline-flex items-center justify-center"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27 16H5"
                        stroke="#1C222F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 7L5 16L14 25"
                        stroke="#1C222F"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>
                ) : (
                  <div key="logo" className="absolute left-5 top-2 h-8 w-28">
                    <svg
                      width="112"
                      height="24"
                      viewBox="0 0 112 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_9592_10797"
                        style={{ maskType: 'alpha' } as any}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="19"
                        height="24"
                      >
                        <path
                          d="M0 0.630676H18.5875V23.3693H0V0.630676Z"
                          fill="#1D2C62"
                        />
                      </mask>
                      <g mask="url(#mask0_9592_10797)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.46875 12.0006C7.46875 7.01558 11.51 2.97308 16.4963 2.97308C17.215 2.97308 17.9163 3.05808 18.5875 3.21683C16.6238 1.60058 14.11 0.630585 11.3687 0.630585C5.09 0.630585 0 5.72184 0 12.0006C0 18.2793 5.09 23.3693 11.3687 23.3693C14.11 23.3693 16.6238 22.3993 18.5875 20.7843C17.9163 20.9431 17.215 21.0281 16.4963 21.0281C11.51 21.0281 7.46875 16.9856 7.46875 12.0006Z"
                          fill="#1C222F"
                        />
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.7939 2.29712V6.68587C24.8814 8.17712 25.5239 10.0134 25.5239 12.0009C25.5239 13.9871 24.8814 15.8246 23.7939 17.3159V21.7171H29.8539V7.00462H36.0202V21.7171H42.0802V2.29712H23.7939Z"
                        fill="#1C222F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M46.8403 2.29712V6.93212H52.4478V21.7171H58.5078V6.93212H64.1153V2.29712H46.8403Z"
                        fill="#1C222F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M68.88 2.29712V21.7171H74.9413V13.8084H81.2138V21.7171H87.2738V2.29712H81.2138V9.03087H74.9413V2.29712H68.88Z"
                        fill="#1C222F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M92.03 2.26239V11.9899V21.7174H98.09V14.0274H99.6788L104.274 21.7174H111.238L105.213 11.9899L111.238 2.26239H104.274L99.6788 9.95239H98.09V2.26239H92.03Z"
                        fill="#1C222F"
                      />
                    </svg>
                  </div>
                )}
              </AnimatePresence>
              <button
                aria-label={t('closeMenu')}
                onClick={() => setIsMenuOpen(false)}
                className="absolute right-5 top-2 inline-flex items-center justify-center"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 7L7 25"
                    stroke="#1C222F"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25 25L7 7"
                    stroke="#1C222F"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <nav className="space-y-8 px-3">
              {menuPanel === 'root' ? (
                <div className="space-y-3">
                  <div className="divide-y divide-gray-10 rounded-[32px] border border-[#F3F4F7] bg-[#F9FBFF]">
                    <button
                      onClick={() => setMenuPanel('products')}
                      className="relative flex h-[80px] w-full items-center gap-4 rounded-2xl p-4"
                    >
                      <span className="flex size-12 items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5Z"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 10.5C18.1569 10.5 19.5 9.15685 19.5 7.5C19.5 5.84315 18.1569 4.5 16.5 4.5C14.8431 4.5 13.5 5.84315 13.5 7.5C13.5 9.15685 14.8431 10.5 16.5 10.5Z"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.5 19.5C9.15685 19.5 10.5 18.1569 10.5 16.5C10.5 14.8431 9.15685 13.5 7.5 13.5C5.84315 13.5 4.5 14.8431 4.5 16.5C4.5 18.1569 5.84315 19.5 7.5 19.5Z"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 19.5C18.1569 19.5 19.5 18.1569 19.5 16.5C19.5 14.8431 18.1569 13.5 16.5 13.5C14.8431 13.5 13.5 14.8431 13.5 16.5C13.5 18.1569 14.8431 19.5 16.5 19.5Z"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="w-10/12 border-b border-solid border-[#eeeff2] py-6 text-start text-[20px] text-gray-90">
                        {t('productsTitle')}
                      </span>
                      <span className="absolute right-5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 4L13 10L7 16"
                            stroke="black"
                            strokeWidth="1"
                          />
                        </svg>
                      </span>
                    </button>
                    <Link
                      to={RoutesPath.ABOUT}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex h-[80px] items-center gap-4 p-4"
                    >
                      <span className="flex size-12 items-center justify-center">
                        <svg
                          width="18"
                          height="22"
                          viewBox="0 0 18 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.42905 11.0005C7.42905 6.61596 10.9077 3.06036 15.1999 3.06036C15.8186 3.06036 16.4222 3.13512 17 3.27475C15.3096 1.85317 13.1458 1 10.7861 1C5.38144 1 1 5.47804 1 11.0005C1 16.5231 5.38144 21 10.7861 21C13.1458 21 15.3096 20.1468 17 18.7263C16.4222 18.866 15.8186 18.9407 15.1999 18.9407C10.9077 18.9407 7.42905 15.3851 7.42905 11.0005Z"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="w-10/12 border-b border-solid border-[#eeeff2] py-6 text-[20px] text-gray-90">
                        {t('about')}
                      </span>
                    </Link>
                    <Link
                      to={RoutesPath.REVIEWS}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex h-[80px] items-center gap-4 p-4"
                    >
                      <span className="flex size-12 items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 10.5H15"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 13.5H15"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.49344 19.7916C9.38394 20.8857 11.6078 21.255 13.7505 20.8305C15.8931 20.4061 17.8083 19.2169 19.1389 17.4847C20.4696 15.7525 21.1248 13.5955 20.9825 11.4158C20.8403 9.23617 19.9102 7.18265 18.3656 5.63813C16.8211 4.0936 14.7676 3.16349 12.5879 3.0212C10.4083 2.87892 8.25126 3.53417 6.51904 4.8648C4.78683 6.19543 3.59765 8.1106 3.17321 10.2533C2.74877 12.3959 3.11805 14.6198 4.21219 16.5103L3.03938 20.0119C2.99531 20.144 2.98891 20.2858 3.02091 20.4214C3.0529 20.557 3.12202 20.681 3.22052 20.7795C3.31903 20.878 3.44301 20.9471 3.57859 20.9791C3.71417 21.0111 3.85598 21.0047 3.98813 20.9606L7.49344 19.7916Z"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="w-10/12 border-b border-solid border-[#eeeff2] py-6 text-[20px] text-gray-90">
                        {t('reviews')}
                      </span>
                    </Link>
                    <Link
                      to={RoutesPath.WORK}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex h-[80px] items-center gap-4 p-4"
                    >
                      <span className="flex size-12 items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.875 3.75H20.25V7.125"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.875 20.25H20.25V16.875"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.125 20.25H3.75V16.875"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.125 3.75H3.75V7.125"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.5 15.75C8.02395 15.0514 8.70336 14.4844 9.48442 14.0938C10.2655 13.7033 11.1267 13.5 12 13.5C12.8733 13.5 13.7345 13.7033 14.5156 14.0938C15.2966 14.4844 15.976 15.0514 16.5 15.75"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="w-10/12 border-b border-solid border-[#eeeff2] py-6 text-[20px] text-gray-90">
                        {t('vacancies')}
                      </span>
                    </Link>
                    <Link
                      to={RoutesPath.BLOG}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex h-[80px] items-center gap-4 rounded-b-2xl p-4"
                    >
                      <span className="flex size-12 items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 9.75H7.5V19.5H3C2.80109 19.5 2.61032 19.421 2.46967 19.2803C2.32902 19.1397 2.25 18.9489 2.25 18.75V10.5C2.25 10.3011 2.32902 10.1103 2.46967 9.96967C2.61032 9.82902 2.80109 9.75 3 9.75Z"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.5 9.75L11.25 2.25C12.0456 2.25 12.8087 2.56607 13.3713 3.12868C13.9339 3.69129 14.25 4.45435 14.25 5.25V7.5H20.25C20.4628 7.50006 20.6731 7.54539 20.867 7.63297C21.0609 7.72056 21.234 7.8484 21.3747 8.008C21.5154 8.1676 21.6206 8.35532 21.6832 8.55868C21.7458 8.76204 21.7644 8.97639 21.7378 9.1875L20.6128 18.1875C20.5672 18.5499 20.3908 18.8832 20.1169 19.1249C19.843 19.3665 19.4903 19.4999 19.125 19.5H7.5"
                            stroke="#1C222F"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="w-10/12 py-6 text-[20px]  text-gray-90">
                        {t('blog')}
                      </span>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 ">
                  <div className="text-base text-gray-40">{t('lending')}</div>
                  <div className="divide-y divide-gray-10 rounded-[32px] border border-[#F3F4F7] bg-[#F9FBFF]">
                    <Link
                      to={RoutesPath.MICROCREDIT}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex h-20 items-center gap-4 p-4 text-xl leading-[140%]"
                    >
                      <span className="group flex items-center gap-3">
                        <svg
                          className="size-12 text-[#F9FAFD] group-hover:text-white"
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
                        <span className="w-10/12 border-b border-solid border-[#eeeff2] py-6 text-[20px] text-gray-90">
                          {t('microfinance')}
                        </span>
                      </span>
                    </Link>
                    <Link
                      to={RoutesPath.BUSINESSCREDIT}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex h-20 items-center gap-4 rounded-2xl p-4 text-xl leading-[140%]"
                    >
                      <span className="flex w-full items-center gap-3">
                        <svg
                          className="size-12"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="64" height="64" rx="24" fill="#F9FAFD" />
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
                        <span className="w-10/12 border-b border-solid border-[#eeeff2] py-6 text-[20px] text-gray-90">
                          {t('businessLending')}
                        </span>
                      </span>
                    </Link>
                    <Link
                      to={RoutesPath.BANKCREDIT}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex h-20 items-center gap-4 rounded-2xl p-4 text-xl leading-[140%]"
                    >
                      <span className="flex w-full items-center gap-3">
                        <img
                          className="size-12"
                          alt="icon"
                          src="/img/header/frame-84-4.svg"
                        />
                        <span className="w-10/12 border-b border-solid border-[#eeeff2] py-6 text-[20px] text-gray-90">
                          {t('bankLending')}
                        </span>
                      </span>
                    </Link>
                    <Link
                      to={RoutesPath.BNPL}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex h-20 items-center gap-4 rounded-2xl p-4 text-xl leading-[140%]"
                    >
                      <span className="flex w-full items-center gap-3">
                        <svg
                          className="size-12"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="64"
                            height="64"
                            rx="24"
                            fill="none"
                            fillOpacity="0.08"
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
                        <span className="w-10/12 border-b border-solid border-[#eeeff2] py-6 text-[20px] text-gray-90">
                          BNPL
                        </span>
                      </span>
                    </Link>
                    <Link
                      to={RoutesPath.AUTOCREDIT}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex h-20 items-center gap-4 rounded-2xl p-4 text-xl leading-[140%]"
                    >
                      <span className="flex w-full items-center gap-3">
                        <svg
                          className="size-12"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="64" height="64" rx="24" fill="#F9FAFD" />
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
                        <span className="w-10/12 border-b border-solid border-[#eeeff2] py-6 text-[20px] text-gray-90">
                          {t('autoLending')}
                        </span>
                      </span>
                    </Link>
                    <Link
                      to={RoutesPath.P2P}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex h-20 items-center gap-4 rounded-2xl p-4 text-xl leading-[140%]"
                    >
                      <span className="flex w-full items-center gap-3">
                        <svg
                          className="size-12"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="64" height="64" rx="24" fill="#F9FAFD" />
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
                        <span className="w-10/12 border-b border-solid border-[#eeeff2] py-6 text-[20px] text-gray-90">
                          {t('p2pLending')}
                        </span>
                      </span>
                    </Link>
                    <Link
                      to={RoutesPath.ISLAMFINANCE}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex h-20 items-center gap-4 rounded-2xl p-4 text-xl leading-[140%]"
                    >
                      <span className="flex w-full items-center gap-3">
                        <svg
                          className="size-12"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="64" height="64" rx="24" fill="#F9FAFD" />
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
                        <span className="w-10/12 py-6 text-[20px]  text-gray-90">
                          {t('islamicFinance')}
                        </span>
                      </span>
                    </Link>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="text-base text-gray-40">
                      {t('otherSoftware')}
                    </div>
                    <div className="divide-y divide-gray-10 rounded-[32px] border border-[#F3F4F7] bg-[#F9FBFF]">
                      <Link
                        to={RoutesPath.DATAUNLOAD}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex h-20 items-center gap-4 p-4 text-xl leading-[140%]"
                      >
                        <span className="flex w-full items-center gap-3">
                          <svg
                            className="size-12"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="64"
                              height="64"
                              rx="24"
                              fill="#F9FAFD"
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
                          <span className="w-10/12 border-b border-solid border-[#eeeff2] py-6 text-[20px] text-gray-90">
                            {t('dataUnload')}
                          </span>
                        </span>
                      </Link>
                      <Link
                        to={RoutesPath.FDATA}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex h-20 items-center gap-4 p-4 text-xl leading-[140%]"
                      >
                        <span className="flex w-full items-center gap-3">
                          <svg
                            className="size-12"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="64"
                              height="64"
                              rx="24"
                              fill="#F9FAFD"
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
                          <span className="w-10/12 border-b border-solid border-[#eeeff2] py-6 text-[20px] text-gray-90">
                            {t('decisionModule')}
                          </span>
                        </span>
                      </Link>
                      <Link
                        to={RoutesPath.FDATA}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex h-20 items-center gap-4 rounded-2xl p-4 text-xl leading-[140%]"
                      >
                        <span className="flex w-full items-center gap-3">
                          <svg
                            className="size-12"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="64"
                              height="64"
                              rx="24"
                              fill="#F9FAFD"
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
                          <span className="w-10/12 text-[20px] text-gray-90">
                            {t('fdata')}
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="text-base text-gray-40">
                      {t('services')}
                    </div>
                    <div className="divide-y divide-gray-10 rounded-[32px] border border-[#F3F4F7] bg-[#F9FBFF]">
                      <Link
                        to={RoutesPath.DEVELOPMENT}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex h-20 items-center gap-4 rounded-2xl p-4 text-xl leading-[140%]"
                      >
                        <span className="flex w-full items-center gap-3">
                          <svg
                            className="size-12"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="64"
                              height="64"
                              rx="24"
                              fill="#F9FAFD"
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
                          <span className="w-10/12 text-[20px] text-gray-90">
                            {t('customDevelopment')}
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </nav>
            {menuPanel === 'root' && (
              <div className="absolute inset-x-3 bottom-2 m-auto h-[136px] rounded-[32px] bg-[#f9fafd] p-[8px_8px_8px_0]">
                <div className="size-full p-[16px_24px]">
                  <p className="text-xl font-bold leading-[140%] text-gray-90 ">
                    +7 (495) 006-21-57
                  </p>
                  <p className="relative w-full pt-4 font-[number:var(--body-1-r-font-weight)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] text-gray-40 [font-style:var(--body-1-r-font-style)] md:w-[233px]">
                    {t('address', { ns: 'footer' })}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <main id="content" className="-mt-16 w-full px-5">
        <Outlet />
      </main>
      <FooterSection />
      {isOpen && <FeedbackForm />}
    </div>
  );
};
