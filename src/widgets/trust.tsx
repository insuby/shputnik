import { Marquee } from '@devnomic/marquee';

import { useTranslation } from 'react-i18next';

import { useFeedbackForm } from './feedback-form';

export const Trust = () => {
  const { t } = useTranslation('widgets');
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative w-full rounded-[32px] text-center md:w-[1376px]">
      <div className="mx-auto flex w-full flex-col items-start gap-7 md:w-[704px] md:gap-12">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
          <div className="relative mt-[-1.00px] self-stretch text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-5xl md:leading-[60px]">
            {t('trust.title')}
          </div>

          <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
            {t('trust.subtitle')}
          </p>
        </div>
      </div>

      <Marquee fade innerClassName="!gap-32" className="!gap-32 py-20">
        <img
          alt="Frame"
          src="/img/trust/frame-17-1.svg"
          loading="eager"
          decoding="sync"
        />
      </Marquee>

      <button
        onClick={onClick}
        className="all-[unset] mx-auto box-border inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 transition-opacity hover:opacity-90"
      >
        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
          {t('trust.startCooperation')}
        </div>
      </button>
    </div>
  );
};
