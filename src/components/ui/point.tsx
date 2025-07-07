interface Props {
  state: "default";
  className: any;
  divClassName: any;
  text: string;
}

export const Point = ({
                        className,
                        divClassName,
                        text = "О компании",
                      }: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center gap-2 px-0 py-2.5 relative ${className}`}
    >
      <div
        className={`relative w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-gray-90 text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)] ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};
