import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { RoutesPath } from 'shared/routes-path.tsx';

export const CustomDevelopment = () => {
  const { t } = useTranslation(['home']);
  const navigate = useNavigate();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const inViewTitle = useInView(titleRef, { once: true, margin: '-100px' });

  const ref39 = useRef<HTMLParagraphElement>(null);
  const inView39 = useInView(ref39, { once: true, margin: '-100px' });

  const handleClick = () => {
    navigate(RoutesPath.DEVELOPMENT);
  };

  return (
    <section className="relative w-full overflow-hidden rounded-[var(--spacing-1-67)] bg-[#ffffff] xl:rounded-[var(--spacing-2-22)]">
      <div className="relative flex h-[600px] w-full items-start gap-[var(--spacing-1-39)] self-stretch">
        <div className="relative flex flex-1 grow items-center gap-[var(--spacing-1-39)] self-stretch">
          <div
            className="group relative flex flex-1 grow cursor-pointer flex-col items-start justify-center self-stretch overflow-hidden rounded-[var(--spacing-2-22)] border-2 border-solid border-transparent bg-[#f9fafd] hover:border-[#3573fc] hover:bg-[#f5f7ff]"
            onClick={handleClick}
          >
            <div className="relative flex size-full flex-[0_0_auto] flex-col gap-[var(--spacing-1-94)] self-stretch p-[var(--spacing-2-22)] xl:p-[var(--spacing-2-78)]">
              <div className="relative flex flex-1 grow flex-col items-start gap-2">
                <motion.h2
                  ref={titleRef}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inViewTitle ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="text-adaptive-40 leading-adaptive-48 font-medium text-gray-90 [font-family:'Roboto',Helvetica]"
                >
                  <span className="text-[#1c222f]">
                    {t('other.development.title')}
                  </span>
                </motion.h2>

                <motion.p
                  id="animate_39"
                  ref={ref39}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView39 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]"
                >
                  {t('other.development.fintech')}
                </motion.p>
              </div>

              <div className="relative inline-flex w-fit flex-[0_0_auto] items-center gap-[var(--spacing-0-69)] rounded-[100px] bg-white p-[var(--spacing-1-11)]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-[#9FA7BC] group-hover:stroke-[#3573FC]"
                >
                  <path
                    d="M12 6L22 16L12 26"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="group relative flex flex-1 grow cursor-pointer flex-col items-start justify-center self-stretch overflow-hidden rounded-[var(--spacing-2-22)] border-2 border-solid border-transparent bg-[#f9fafd]">
            <div
              className="relative flex size-full flex-[0_0_auto] flex-col gap-[var(--spacing-1-94)] self-stretch bg-contain bg-center bg-no-repeat p-[var(--spacing-2-22)] xl:p-[var(--spacing-2-78)]"
              style={{
                backgroundImage: "url('/img/Frame 29.png')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
