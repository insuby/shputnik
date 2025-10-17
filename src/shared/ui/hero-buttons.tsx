import { motion, useInView } from 'framer-motion';
import { useFeedbackForm } from 'widgets';

import { ReactNode, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { downloadFile } from '../lib/download-file';
import { getSpecificationPath } from '../lib/get-specification-path';
import { useCurrentProduct } from '../lib/use-current-product';

type HeroButtonsProps = {
  buttonText?: string;
};

export const HeroButtons = ({
  buttonText,
  children,
}: HeroButtonsProps & {
  children: ReactNode;
}) => {
  const { t } = useTranslation('components');
  const { setIsOpen } = useFeedbackForm();
  const ref2 = useRef<HTMLButtonElement>(null);
  const ref3 = useRef<HTMLButtonElement>(null);

  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });

  const currentProduct = useCurrentProduct();
  const specificationPath = getSpecificationPath(currentProduct);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleSpecificationClick = async () => {
    if (specificationPath && !isDownloading) {
      setIsDownloading(true);
      try {
        const filename =
          specificationPath.split('/').pop() || 'specification.pdf';

        await Promise.all([
          downloadFile(specificationPath, filename),
          new Promise((resolve) => setTimeout(resolve, 500)),
        ]);
      } finally {
        setIsDownloading(false);
      }
    }
  };

  return (
    <>
      <div className="relative z-50 flex w-full flex-[0_0_auto] items-start justify-between self-stretch">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#ffffff14] px-5 py-2.5"
        >
          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-[#ffffff] [font-style:var(--body-3-r-font-style)]">
            {t('heroButtons.aboutProduct')}
          </div>
        </motion.div>

        <motion.button
          ref={ref2}
          initial={{ opacity: 0, x: 50 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          whileHover={{ scale: isDownloading ? 1 : 1.05 }}
          onClick={handleSpecificationClick}
          disabled={!specificationPath || isDownloading}
          className="relative inline-flex flex-[0_0_auto] cursor-pointer items-center justify-center gap-2 rounded-[100px] bg-[#ffffff14] px-5 py-2.5 transition-opacity hover:scale-105 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isDownloading ? (
            <svg
              className="relative size-5 animate-spin"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Loading"
            >
              <circle
                cx="10"
                cy="10"
                r="8"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="31.416"
                strokeDashoffset="31.416"
                className="animate-spin"
                style={{
                  animation: 'spin 1s linear infinite',
                }}
              />
            </svg>
          ) : (
            <svg
              className="relative size-5"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="File text"
            >
              <path
                d="M15.625 17.5H4.375C4.20924 17.5 4.05027 17.4342 3.93306 17.3169C3.81585 17.1997 3.75 17.0408 3.75 16.875V3.125C3.75 2.95924 3.81585 2.80027 3.93306 2.68306C4.05027 2.56585 4.20924 2.5 4.375 2.5H11.875L16.25 6.875V16.875C16.25 17.0408 16.1842 17.1997 16.0669 17.3169C15.9497 17.4342 15.7908 17.5 15.625 17.5Z"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.875 2.5V6.875H16.25"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 10.625H12.5"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 13.125H12.5"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          <div className="relative mt-[-1.00px] w-[120px] text-center font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-[#ffffff] [font-style:var(--body-3-r-font-style)]">
            {isDownloading ? 'Скачивание...' : t('heroButtons.specification')}
          </div>
        </motion.button>
      </div>

      {children}

      <motion.button
        ref={ref3}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView3 ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleButtonClick}
        className="all-[unset] relative box-border hidden flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-[#ffffff] px-8 py-4 transition-opacity hover:opacity-90 xl:inline-flex"
      >
        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
          {buttonText || t('heroButtons.signUpPresentation')}
        </div>
      </motion.button>
    </>
  );
};
