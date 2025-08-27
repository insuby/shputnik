import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Privacy: FC = () => {
  const { t } = useTranslation(['privacy']);

  return (
    <section className="mb-4 flex w-full flex-col gap-7 rounded-[32px] bg-white p-6 md:p-12">
      <h1 className="text-xl font-semibold text-gray-90 md:text-2xl">
        {t('title')}
      </h1>
      <p className="text-base leading-6 text-gray-70 md:text-lg md:leading-7">
        {t('description')}
      </p>
    </section>
  );
};

export default Privacy;
