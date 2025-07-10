interface Props {
  state: "active" | "default";
  className: any;
  divClassName?: any;
  text: string;
  divClassNameOverride?: any;
}

export const Point = ({
                        state,
                        className,
                        divClassName,
                        text = "О компании",
                        divClassNameOverride,
                      }: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex flex-col items-center gap-2 justify-center relative ${state === "active" ? "pt-2.5 pb-0 px-0" : "px-0 py-2.5"} ${className}`}
    >
      <div
        className={`font-body-3-r w-fit mt-[-1.00px] tracking-[var(--body-3-r-letter-spacing)] text-[length:var(--body-3-r-font-size)] [font-style:var(--body-3-r-font-style)] text-gray-90 font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] whitespace-nowrap relative ${state === "active" ? divClassName : (state === "default") ? divClassNameOverride : undefined}`}
      >
        {text}
      </div>

      {state === "active" && (
        <div className="relative self-stretch w-full h-0.5 bg-blue-50 rounded-[20px_20px_0px_0px]" />
      )}
    </div>
  );
};
