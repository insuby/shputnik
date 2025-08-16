interface Props {
    state: "active" | "default";
    className: any;
    text: string;
}

export const Point = ({
                          state,
                          className,
                          text = "О компании",
                      }: Props): JSX.Element => {
    return (
        <div
            className={`flex flex-col items-center gap-2 justify-center relative ${state === "active" ? "pt-2.5 pb-0 px-0" : "px-0 py-2.5"} ${className}`}
        >
            <div className="[font-family:'Roboto',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base text-gray-90 font-normal leading-6 whitespace-nowrap relative">
                {text}
            </div>

            {state === "active" && (
                <div className="relative self-stretch w-full h-0.5 bg-blue-50 rounded-[20px_20px_0px_0px]" />
            )}
        </div>
    );
};
