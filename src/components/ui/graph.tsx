import { useTranslation } from 'react-i18next';

export const Graph = ({ sum = '42,000 ' }) => {
  const { t } = useTranslation('components');
  
  return (
    <div className="relative ml-[-4.00px] inline-flex flex-[0_0_auto] flex-col items-start gap-2.5 px-3 py-0">
      <div className="relative size-[184px]">
        <div className="relative h-[184px]">
          <div className="absolute left-0 top-0 size-[184px]">
            <img
              className="absolute left-0 top-0 h-[184px] w-[88px]"
              alt="Subtract"
              src="/img/graph/subtract-3.svg"
            />

            <img
              className="absolute left-24 top-[76px] h-[108px] w-[88px]"
              alt="Subtract"
              src="/img/graph/subtract.svg"
            />

            <div className="absolute left-[39px] top-[61px] inline-flex h-[62px] flex-col items-center gap-0.5">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                {t('graph.totalAmount')}
              </div>

              <div className="relative w-fit whitespace-nowrap text-center text-[28px] font-medium leading-10 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                {sum}₽
              </div>
            </div>
          </div>

          <img
            className="absolute left-[158px] top-[34px] h-[34px] w-[21px]"
            alt="Subtract"
            src="/img/graph/subtract-1.svg"
          />

          <img
            className="absolute left-24 top-0 h-[31px] w-[59px]"
            alt="Subtract"
            src="/img/graph/subtract-2.svg"
          />
        </div>
      </div>
    </div>
  );
};
