import { Feedback } from 'widgets/feedback.tsx';

import { CustomDevelopment } from './sections/CustomDevelopment';
import { Div } from './sections/Div';
import { DivWrapper } from './sections/DivWrapper';
import { Frame } from './sections/Frame';
import { Frame1 } from './sections/Frame1';
import { FrameWrapper } from './sections/FrameWrapper';
import { SectionComponentNode } from './sections/SectionComponentNode';

export const Main = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-[1440px] flex-[0_0_auto] flex-col items-center gap-10 px-4 pb-12 pt-6 xl:gap-[136px] xl:px-0 xl:pb-[136px] xl:pt-8">
      <Frame />
      <FrameWrapper />
      <DivWrapper />
      <Div />
      <SectionComponentNode />
      <Feedback />
      <Frame1 />
      <CustomDevelopment />
    </div>
  );
};
