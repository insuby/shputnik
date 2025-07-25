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
      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -50 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 relative flex-[0_0_auto] bg-[#ffffff14] rounded-[100px]"
        >
          <div className="relative w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[#ffffff] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)]">
            О продукте
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ opacity: 0, x: 50 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]"
        >
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 relative flex-[0_0_auto] bg-[#ffffff14] rounded-[100px]">
            <img
              className="relative w-5 h-5"
              alt="File text"
              src="/img/filetext.svg"
            />

            <div className="relative w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[#ffffff] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)]">
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
        className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-[#ffffff] rounded-[100px] items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
      >
        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
          {buttonText}
        </div>
      </motion.button>
    </>
  );
};
