export const Graph = ({sum = '42,000 '}) => {
    return (
        <div className="inline-flex flex-col items-start gap-2.5 px-3 py-0 relative flex-[0_0_auto] ml-[-4.00px]">
            <div className="relative w-[184px] h-[184px]">
                <div className="relative h-[184px]">
                    <div className="absolute w-[184px] h-[184px] top-0 left-0">
                        <img
                            className="absolute w-[88px] h-[184px] top-0 left-0"
                            alt="Subtract"
                            src="/img/graph/subtract-3.svg"
                        />

                        <img
                            className="absolute w-[88px] h-[108px] top-[76px] left-24"
                            alt="Subtract"
                            src="/img/graph/subtract.svg"
                        />

                        <div
                            className="inline-flex flex-col h-[62px] items-center gap-0.5 absolute top-[61px] left-[39px]">
                            <div
                                className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-sm leading-5 whitespace-nowrap relative tracking-[0]">
                                Вся сумма
                            </div>

                            <div
                                className="w-fit [font-family:'Roboto',Helvetica] font-medium text-[#1c222f] text-[28px] text-center leading-10 whitespace-nowrap relative tracking-[0]">
                                {sum}₽
                            </div>
                        </div>
                    </div>

                    <img
                        className="absolute w-[21px] h-[34px] top-[34px] left-[158px]"
                        alt="Subtract"
                        src="/img/graph/subtract-1.svg"
                    />

                    <img
                        className="absolute w-[59px] h-[31px] top-0 left-24"
                        alt="Subtract"
                        src="/img/graph/subtract-2.svg"
                    />
                </div>
            </div>
        </div>

    )
}