import type { FC } from 'react';

const title = 'Политика конфиденциальности';

export const Privacy: FC = () => {
  return (
    <section className="flex flex-col gap-8 w-full p-12 bg-white rounded-[32px] mb-4">
      <h1 className="text-2xl font-semibold text-gray-90">{title}</h1>
      <p className="text-gray-70 leading-7">
        Этот раздел предназначен для размещения политики конфиденциальности. Передайте текст — добавим содержание.
      </p>
    </section>
  );
};

export default Privacy;

