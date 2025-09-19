import { Check10 } from './check10.tsx';

type CheckIconProps = {
  className?: string;
  bgColor?: string;
  iconColor?: string;
};

export const CheckIcon = ({
  className = 'inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] rounded-[100px]',
  bgColor = '#e6485014',
  iconColor = '#E74951',
}: CheckIconProps) => {
  return (
    <div className={className} style={{ backgroundColor: bgColor }}>
      <Check10 className="!relative !h-4 !w-4" color={iconColor} />
    </div>
  );
};
