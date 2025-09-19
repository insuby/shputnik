type Props = {
  className: any;
};

export const Check15 = ({ className }: Props): JSX.Element => {
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
        stroke="#725DD6"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
