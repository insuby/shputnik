interface Props {
  state: 'active' | 'default';
  className: any;
  divClassName?: any;
  text: string;
  divClassNameOverride?: any;
}

export const Point = ({
  state,
  className,
  divClassName,
  text = 'О компании',
  divClassNameOverride,
}: Props): JSX.Element => {
  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center gap-2 ${
        state === 'active' ? 'px-0 pb-0 pt-2.5' : 'px-0 py-2.5'
      } ${className}`}
    >
      <div
        className={`relative mt-[-1.00px] w-fit whitespace-nowrap font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 [font-style:var(--body-3-r-font-style)] ${
          state === 'active'
            ? divClassName
            : state === 'default'
            ? divClassNameOverride
            : undefined
        }`}
      >
        {text}
      </div>

      {state === 'active' && (
        <div className="relative h-0.5 w-full self-stretch rounded-[20px_20px_0px_0px] bg-blue-50" />
      )}
    </div>
  );
};
