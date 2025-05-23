import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";

export const Main = () => {
  return (
    <div className="flex flex-col items-start gap-6 py-6 relative bg-white overflow-hidden">
      <Frame />
      <FrameWrapper />
    </div>
  );
};
