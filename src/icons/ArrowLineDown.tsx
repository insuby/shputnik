import type { FC, SVGProps } from 'react';

type ArrowLineDownProps = SVGProps<SVGSVGElement> & {
  direction?: 'down' | 'up';
  color?: string;
};

const ArrowLineDown: FC<ArrowLineDownProps> = ({ direction = 'down', color = 'white', ...props }) => (
  direction === 'down' ? (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 1.75V10.0625" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.0625 6.125L7 10.0625L10.9375 6.125" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.1875 11.8125H11.8125" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ) : (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 12.25V3.9375" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.0625 7.875L7 3.9375L10.9375 7.875" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.1875 2.1875H11.8125" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

export default ArrowLineDown; 