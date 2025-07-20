type Props = {
  className?: string;
  color?: string;
};

export const Check26 = ({ className, color = "#E74951" }: Props): JSX.Element => {
  return (
    <svg
      className={className}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 9L6 12.5L14 4.5"
        stroke={color}
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
