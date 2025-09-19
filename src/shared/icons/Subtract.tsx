import type { FC, SVGProps } from 'react';

type SubtractProps = SVGProps<SVGSVGElement> & {
  color?: string;
};

export const Subtract: FC<SubtractProps> = ({
  color = '#00CB82',
  ...props
}) => (
  <svg
    width="88"
    height="184"
    viewBox="0 0 88 184"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M88 3.9396C88 6.08804 86.3148 7.84704 84.1835 8.04445C41.4563 12.0019 8.00001 48.0786 8 92C8 135.921 41.4561 171.997 84.1831 175.954C86.3147 176.152 88 177.911 88 180.06C88 182.349 86.0959 184.186 83.8239 183.985C36.8437 179.832 0 140.236 0 92C7.12916e-06 43.7637 36.844 4.16756 83.8244 0.0150405C86.0962 -0.185756 88 1.65045 88 3.9396Z"
      fill={color}
    />
  </svg>
);
