import { useTranslation } from 'react-i18next';

export const Graph = ({ sum = '42,000 ' }) => {
  const { t } = useTranslation('components');

  return (
    <div className="relative ml-[-4.00px] inline-flex flex-[0_0_auto] flex-col items-start gap-2.5 px-3 py-0">
      <div className="relative size-[184px]">
        <div className="relative h-[184px]">
          <div className="absolute left-0 top-0 size-[184px]">
            <svg
              width="88"
              height="184"
              viewBox="0 0 88 184"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-0 h-[184px] w-[88px]"
            >
              <path
                d="M88 3.9396C88 6.08804 86.3148 7.84704 84.1835 8.04445C41.4563 12.0019 8.00001 48.0786 8 92C8 135.921 41.4561 171.997 84.1831 175.954C86.3147 176.152 88 177.911 88 180.06C88 182.349 86.0959 184.186 83.8239 183.985C36.8437 179.832 0 140.236 0 92C7.12916e-06 43.7637 36.844 4.16756 83.8244 0.0150405C86.0962 -0.185756 88 1.65045 88 3.9396Z"
                fill="#3573FC"
              />
            </svg>

            <svg
              width="88"
              height="109"
              viewBox="0 0 88 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-24 top-[76px] h-[108px] w-[88px]"
            >
              <path
                d="M82.1887 0.13856C84.4418 -0.46743 86.7414 0.974287 87.0712 3.29211C87.6831 7.59299 88 11.9894 88 16.46C88 64.6962 51.1563 104.292 4.17612 108.445C1.90409 108.646 0 106.809 0 104.52C0 102.371 1.68535 100.612 3.81693 100.415C46.5439 96.4569 80 60.3812 80 16.46C80 12.4948 79.7265 8.59373 79.1986 4.77432C78.9109 2.69312 80.1668 0.682378 82.1887 0.13856Z"
                fill="#00CB82"
              />
            </svg>

            <div className="absolute left-[39px] top-[61px] inline-flex h-[62px] flex-col items-center gap-0.5">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                {t('graph.totalAmount')}
              </div>

              <div className="relative w-fit whitespace-nowrap text-center text-[28px] font-medium leading-10 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                {sum}₽
              </div>
            </div>
          </div>

          <svg
            width="22"
            height="34"
            viewBox="0 0 22 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[158px] top-[34px] h-[34px] w-[21px]"
          >
            <path
              d="M1.2 1.19297C2.88815 -0.501545 5.66596 -0.387931 7.11702 1.51503C13.3358 9.67043 18.2497 18.8812 21.5464 28.8333C22.2619 30.9931 20.9672 33.2712 18.777 33.8602C16.6341 34.4366 14.4363 33.1771 13.7274 31.0669C10.7574 22.2258 6.38755 14.0314 0.882313 6.74905C-0.389941 5.06611 -0.288233 2.68682 1.2 1.19297Z"
              fill="#E74951"
            />
          </svg>

          <svg
            width="60"
            height="31"
            viewBox="0 0 60 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-24 top-0 h-[31px] w-[59px]"
          >
            <path
              d="M0 3.98812C0 1.67086 1.92568 -0.187993 4.22535 0.0152169C25.1576 1.8649 44.1018 10.6645 58.7532 24.1027C60.4063 25.6189 60.4027 28.2037 58.8193 29.7932C57.2399 31.3785 54.6863 31.3731 53.0312 29.8675C39.7737 17.8077 22.709 9.88861 3.86195 8.14326C1.70446 7.94346 0 6.16295 0 3.98812Z"
              fill="#FBAB00"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
