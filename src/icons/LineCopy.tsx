import type { FC, SVGProps } from 'react';

type LineCopyProps = SVGProps<SVGSVGElement> & {
  color?: string;
};

const LineCopy: FC<LineCopyProps> = ({ color = '#55607A', ...props }) => (
  <svg
    width="1"
    height="20"
    viewBox="0 0 1 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0.5 0.5V19.5" stroke={color} strokeLinecap="square" />
  </svg>
);

export default LineCopy;
