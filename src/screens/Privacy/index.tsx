import type { FC } from 'react';

const title = 'Политика конфиденциальности';

export const Privacy: FC = () => {
  return (
    <section className="mb-4 flex w-full flex-col gap-8 rounded-[32px] bg-white p-12">
      <h1 className="text-2xl font-semibold text-gray-90">{title}</h1>
      <p className="leading-7 text-gray-70">
        Этот раздел предназначен для размещения политики конфиденциальности.
        Передайте текст — добавим содержание.
      </p>
    </section>
  );
};

export default Privacy;
