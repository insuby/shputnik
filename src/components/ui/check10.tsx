interface Props {
  className: any;
  color?: string;
}

export const Check10 = ({ className, color = '#3573FC' }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
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
