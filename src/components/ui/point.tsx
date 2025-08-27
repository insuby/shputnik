import { useTranslation } from 'react-i18next';

interface Props {
  state: 'default';
  className: any;
  divClassName: any;
  text: string;
}

export const Point = ({
  className,
  divClassName,
  text,
}: Props): JSX.Element => {
  const { t } = useTranslation('components');
  
  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center gap-2 px-0 py-2.5 ${className}`}
    >
      <div
        className={`relative mt-[-1.00px] w-fit whitespace-nowrap font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-90 [font-style:var(--body-3-r-font-style)] ${divClassName}`}
      >
        {text || t('point.aboutCompany')}
      </div>
    </div>
  );
};
