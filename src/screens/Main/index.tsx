import {Div} from "./sections/Div";
import {DivWrapper} from "./sections/DivWrapper";
import {Frame} from "./sections/Frame";
import {Frame1} from "./sections/Frame1";
import {FrameWrapper} from "./sections/FrameWrapper";
import {SectionComponentNode} from "./sections/SectionComponentNode";
import {Feedback} from "../../widgets/feedback.tsx";

export const Main = () => {
    return (
        <div className="flex flex-col w-full items-center gap-[136px] pt-8 pb-[136px] relative flex-[0_0_auto]">
            <Frame/>
            <FrameWrapper/>
            <DivWrapper/>
            <Div/>
            <SectionComponentNode/>
            <Feedback/>
            <Frame1/>
        </div>
    );
};
