import { useFeedbackForm } from './feedback-form';
import Marquee from 'react-fast-marquee';

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
            Нашими клиентами являются крупные кредитные и некредитные
            организации, работающие online и в точках продаж
          </p>
        </div>
      </div>

      <div className="absolute top-[292px] left-0 right-0 h-[72px] opacity-50">
        <Marquee speed={30} gradient={false} pauseOnHover={true}>
          <div className="flex items-center gap-16 mx-8">
            <div className="relative w-[150px] h-[30.76px] flex items-center justify-center">
              <img
                className="w-[114px] h-[31px]"
                alt="Group"
                src="/img/group-1.png"
              />
            </div>

            <img
              className="w-[217.03px] h-[45.97px] object-contain"
              alt="Odnoklassniki ok"
              src="/img/odnoklassniki-ok-1.png"
            />

            <img
              className="w-[111.48px] h-[70.52px] object-contain"
              alt="Logo black"
              src="/img/logo-black-1.png"
            />

            <img
              className="w-[113.43px] h-[68.79px] object-contain"
              alt="Contact log CMYK"
              src="/img/contact-log-cmyk-1.png"
            />

            <img
              className="w-[49.06px] h-[28.81px] object-contain"
              alt="Vkcom"
              src="/img/vkcom-1.png"
            />

            <img
              className="w-[120px] h-[64.5px] object-contain"
              alt="Logo full eng"
              src="/img/logo-full-eng-1.png"
            />

            <img
              className="w-24 h-[57.29px] object-contain"
              alt="Master card logo"
              src="/img/master-card-logo-1.png"
            />

            <div className="relative w-[239.66px] h-[40.18px] flex items-center">
              <img
                className="w-10 h-10"
                alt="Group"
                src="/img/group-7-1.png"
              />
              <img
                className="w-[188px] h-[19px] ml-3"
                alt="Group"
                src="/img/group-8-1.png"
              />
            </div>

            <img
              className="w-[126.29px] h-[72px] object-contain"
              alt="Group"
              src="/img/group-17-1.png"
            />
          </div>
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