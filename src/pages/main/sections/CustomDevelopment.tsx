import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { RoutesPath } from 'shared/routes-path.tsx';

export const CustomDevelopment = () => {
  const { t } = useTranslation(['home']);
  const navigate = useNavigate();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const inViewTitle = useInView(titleRef, { once: true, margin: '-30px' });

  const ref39 = useRef<HTMLParagraphElement>(null);
  const inView39 = useInView(ref39, { once: true, margin: '-30px' });

  const handleClick = () => {
    navigate(RoutesPath.DEVELOPMENT);
  };

  return (
    <section className="relative w-full overflow-hidden rounded-[var(--spacing-1-67)] bg-[#ffffff] xl:rounded-[var(--spacing-2-22)]">
      <div className="relative flex h-[var(--size-600)] w-full items-start gap-[var(--spacing-1-39)] self-stretch">
        <div className="relative flex flex-1 grow items-center gap-[var(--spacing-1-39)] self-stretch">
          <div
            className="group relative flex flex-1 grow cursor-pointer flex-col items-start justify-center self-stretch overflow-hidden rounded-[var(--spacing-2-22)] border-2 border-solid border-transparent bg-[#f9fafd] transition-colors hover:border-[#acc5ff] hover:bg-[#f5f7ff]"
            onClick={handleClick}
          >
            <div className="relative flex size-full flex-[0_0_auto] flex-col gap-[var(--spacing-1-94)] self-stretch p-[var(--spacing-2-22)] xl:p-[var(--spacing-2-78)]">
              <div className="relative flex flex-1 grow flex-col items-start gap-6">
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

          <div className="group relative flex flex-1 grow cursor-pointer flex-col items-start justify-center self-stretch overflow-hidden rounded-[var(--spacing-2-22)] border-2 border-solid border-transparent bg-[#f9fafd] transition-colors">
            <svg
              className="absolute"
              width="770"
              height="770"
              viewBox="0 0 770 770"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.22" filter="url(#filter0_f_9569_16873)">
                <path
                  d="M283.005 234.855C258.925 178.898 312.328 121.763 342.04 100.191C540.779 23.0709 550.966 281.52 486.742 371.81C422.519 462.1 227.111 507.988 195.485 434.496C163.859 361.004 313.106 304.801 283.005 234.855Z"
                  fill="#3573FC"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_9569_16873"
                  x="-181.64"
                  y="-286.685"
                  width="1076.3"
                  height="1130.4"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="186.349"
                    result="effect1_foregroundBlur_9569_16873"
                  />
                </filter>
              </defs>
            </svg>

            <div
              className="relative  z-10 size-full  bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/img/group-107.png')",
                backgroundSize: '90%',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
