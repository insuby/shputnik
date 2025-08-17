import { Marquee } from '@devnomic/marquee';

import { useFeedbackForm } from './feedback-form';

export const Trust = () => {
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative h-[584px] w-[1376px] rounded-[32px]">
      <div className="absolute left-[336px] top-20 flex w-[704px] flex-col items-start gap-12">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
          <div className="relative mt-[-1.00px] self-stretch text-center text-5xl font-medium leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            Нам доверяют
          </div>

          <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
            Наши клиенты — крупные кредитные и некредитные организации,
            работающие как онлайн, так и в розничных точках продаж
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[292px] h-[72px] opacity-50">
        <Marquee fade innerClassName="!gap-32" className="!gap-32">
          <img
            alt="Frame"
            src="/img/trust/frame-17-1.svg"
            loading="eager"
            decoding="sync"
          />
        </Marquee>
      </div>

      <button
        onClick={onClick}
        className="all-[unset] absolute left-[543px] top-[444px] box-border inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 transition-opacity hover:opacity-90"
      >
        <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
          Начать сотрудничество
        </div>
      </button>
    </div>
  );
};
