interface Props {
  state: "phone" | "filled" | "active" | "default";
  className: any;
  text: string;
  text1: string;
}

export const Input = ({
                        state,
                        className,
                        text = "Имя",
                        text1 = "Привет|",
                      }: Props): JSX.Element => {
  return (
    <div
      className={`w-[302px] flex items-center px-5 py-4 rounded-2xl justify-center bg-white relative ${state === "active" ? "border-2 border-solid" : "border border-solid"} ${state === "active" ? "border-[#acc5ff]" : "border-[#e3e4e7]"} ${state === "phone" ? "gap-2" : "gap-2.5"} ${className}`}
    >
      {state === "phone" && (
        <div className="relative w-[25px] mt-[-0.50px] font-body-1-r font-[number:var(--body-1-r-font-weight)] text-gray-90 text-[length:var(--body-1-r-font-size)] tracking-[var(--body-1-r-letter-spacing)] leading-[var(--body-1-r-line-height)] [font-style:var(--body-1-r-font-style)]">
          +7
        </div>
      )}

      <div
        className={`font-body-1-r tracking-[var(--body-1-r-letter-spacing)] text-[length:var(--body-1-r-font-size)] [font-style:var(--body-1-r-font-style)] flex-1 font-[number:var(--body-1-r-font-weight)] leading-[var(--body-1-r-line-height)] relative ${state === "active" ? "mt-[-1.00px]" : "mt-[-0.50px]"} ${["active", "filled"].includes(state) ? "text-gray-90" : "text-gray-40"}`}
      >
        {state === "phone" && <>999 999 99 99</>}

        {["default", "filled"].includes(state) && <>{text}</>}

        {state === "active" && <>{text1}</>}
      </div>
    </div>
  );
};
