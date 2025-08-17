interface Props {
  state: 'active' | 'default';
  className: any;
  text: string;
}

export const Point = ({
  state,
  className,
  text = 'О компании',
}: Props): JSX.Element => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 ${
        state === 'active' ? 'px-0 pb-0 pt-2.5' : 'px-0 py-2.5'
      } ${className}`}
    >
      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
        {text}
      </div>

      {state === 'active' && (
        <div className="relative h-0.5 w-full self-stretch rounded-[20px_20px_0px_0px] bg-blue-50" />
      )}
    </div>
  );
};
