interface Props {
  state: 'phone' | 'filled' | 'active' | 'default';
  className: any;
  text: string;
  text1: string;
}

export const Input = ({
  state,
  className,
  text = 'Имя',
  text1 = 'Привет|',
}: Props): JSX.Element => {
  return (
    <div
      className={`relative flexw-full md:w-[302px] items-center justify-center rounded-2xl bg-white px-5 py-4 ${
        state === 'active' ? 'border-2 border-solid' : 'border border-solid'
      } ${state === 'active' ? 'border-[#acc5ff]' : 'border-[#e3e4e7]'} ${
        state === 'phone' ? 'gap-2' : 'gap-2.5'
      } ${className}`}
    >
      {state === 'phone' && (
        <div className="relative mt-[-0.50px]w-full md:w-[25px] font-body-1-r text-[length:var(--body-1-r-font-size)] font-[number:var(--body-1-r-font-weight)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] text-gray-90 [font-style:var(--body-1-r-font-style)]">
          +7
        </div>
      )}

      <div
        className={`relative flex-1 font-body-1-r text-[length:var(--body-1-r-font-size)] font-[number:var(--body-1-r-font-weight)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] [font-style:var(--body-1-r-font-style)] ${
          state === 'active' ? 'mt-[-1.00px]' : 'mt-[-0.50px]'
        } ${
          ['active', 'filled'].includes(state) ? 'text-gray-90' : 'text-gray-40'
        }`}
      >
        {state === 'phone' && <>999 999 99 99</>}

        {['default', 'filled'].includes(state) && <>{text}</>}

        {state === 'active' && <>{text1}</>}
      </div>
    </div>
  );
};
