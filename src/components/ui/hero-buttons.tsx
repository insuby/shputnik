import { motion, useInView } from 'framer-motion';

import { ReactNode, useRef } from 'react';

import { useFeedbackForm } from '../../widgets/feedback-form';

type HeroButtonsProps = {
  buttonText?: string;
};

export const HeroButtons = ({
  buttonText = 'Записаться на презентацию',
  children,
}: HeroButtonsProps & {
  children: ReactNode;
}) => {
  const { setIsOpen } = useFeedbackForm();
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLButtonElement>(null);

  const inView1 = useInView(ref1, { once: true, margin: '-100px' });
  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="relative flex w-full flex-[0_0_auto] items-start justify-between self-stretch">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -50 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#ffffff14] px-5 py-2.5"
        >
          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-[#ffffff] [font-style:var(--body-3-r-font-style)]">
            О продукте
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ opacity: 0, x: 50 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative inline-flex flex-[0_0_auto] items-center gap-0.5"
        >
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2 rounded-[100px] bg-[#ffffff14] px-5 py-2.5">
            <img
              className="relative size-5"
              alt="File text"
              src="/img/filetext.svg"
            />

            <div className="relative mt-[-1.00px] w-fit whitespace-nowrap font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-[#ffffff] [font-style:var(--body-3-r-font-style)]">
              Спецификация
            </div>
          </div>
        </motion.div>
      </div>

      {children}

      <motion.button
        ref={ref3}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView3 ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleButtonClick}
        className="all-[unset] relative box-border inline-flex flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-[#ffffff] px-8 py-4 transition-opacity hover:opacity-90"
      >
        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
          {buttonText}
        </div>
      </motion.button>
    </>
  );
};
