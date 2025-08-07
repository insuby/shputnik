import { useFeedbackForm } from './feedback-form';
import { Marquee } from '@devnomic/marquee';

export const Trust = () => {
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative w-[1376px] h-[584px] rounded-[32px]">
      <div className="w-[704px] items-start absolute top-20 left-[336px] flex flex-col gap-12">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div
            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center tracking-[0] leading-[60px]">
            Нам доверяют
          </div>

          <p
            className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl text-center tracking-[0] leading-7">
              Наши клиенты — крупные кредитные и некредитные организации, работающие как онлайн, так и в розничных точках продаж.
          </p>
        </div>
      </div>

      <div className="absolute top-[292px] left-0 right-0 h-[72px] opacity-50">
        <Marquee fade innerClassName="!gap-32" className="!gap-32">
          <img
            alt="Frame"
            src="/img/trust/frame-17-1.svg"
          />
        </Marquee>
      </div>

      <button onClick={onClick}
              className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 absolute top-[444px] left-[543px] bg-blue-50 rounded-[100px] items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
        <div
          className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-xl tracking-[0] leading-7 whitespace-nowrap">
          Начать сотрудничество
        </div>
      </button>
    </div>
  )
}