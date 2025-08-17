import type { FC, SVGProps } from 'react';

type ArrowProps = SVGProps<SVGSVGElement> & {
  direction?: 'left' | 'right';
  color?: string;
};

const Arrow: FC<ArrowProps> = ({
  direction = 'right',
  color = '#55607A',
  ...props
}) =>
  direction === 'left' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.25 12H3.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 5.25L3.75 12L10.5 18.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.75 12H20.25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 5.25L20.25 12L13.5 18.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );

export default Arrow;
