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
    <div className="relative mx-auto flex w-full max-w-[1440px] flex-[0_0_auto] flex-col items-center gap-[var(--spacing-2-78)] px-[var(--spacing-1-11)] pb-[var(--spacing-3-33)] pt-[var(--spacing-1-67)] xl:gap-[var(--spacing-9-44)] xl:px-0 xl:pb-[var(--spacing-9-44)] xl:pt-[var(--spacing-2-22)]">
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
