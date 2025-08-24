const reviews = [
  {
    reviewer: 'Илья Ильин',
    text: 'Заместитель генерального директора Центрофинанс',
    videoSrc: 'https://www.youtube.com/embed/pBK6P-9HUR0',
  },
  {
    reviewer: 'Антон Крутой',
    text: 'Основатель и генеральный директор компании Дата Здесь',
    videoSrc: 'https://www.youtube.com/embed/0p3Krz95uyc',
  },
  {
    reviewer: 'Денис Алексеев',
    text: 'Заместитель генерального директора КБ Русский стандарт',
    videoSrc: 'https://www.youtube.com/embed/Odglk79gesU',
  },
  {
    reviewer: 'Алексей Яковлев',
    text: 'Руководитель проекта Заначка',
    videoSrc: 'https://www.youtube.com/embed/B2_nG_72i6o',
  },
  {
    reviewer: 'Сергей Гейло',
    text: 'Директор центра развития средних технологических компаний в РВК',
    videoSrc: 'https://www.youtube.com/embed/IZBows11kRw',
  },
  {
    reviewer: 'Александра Дмитриева',
    text: 'Генеральный директор компании ЦВЗ',
    videoSrc: 'https://www.youtube.com/embed/HoNOToVDGVY',
  },
  {
    reviewer: 'Евгений Иевлев',
    text: 'Генеральный директор компании ЗигЗаг',
    videoSrc: 'https://www.youtube.com/embed/4vhVRjokCl8',
  },
  {
    reviewer: 'Юлия Бутова',
    text: 'Заместитель генерального директора компании Уралсиб Финанс',
    videoSrc: 'https://www.youtube.com/embed/9m9b8wtaIik',
  },
  {
    reviewer: 'Максим Руденко',
    text: 'Продакшн директор компании ilovesupersport',
    videoSrc: 'https://www.youtube.com/embed/LRVHUwyQw4U',
  },
  {
    reviewer: 'Антон Романов',
    text: 'Директор по маркетингу компании Каляев',
    videoSrc: 'https://www.youtube.com/embed/GdWE2_7GHKA',
  },
  {
    reviewer: 'Artin Bogdanov',
    text: 'CEO, Onollo',
    videoSrc: 'https://www.youtube.com/embed/6OqO-4q4r_g',
  },
];
export const Reviews = () => {
  return (
    <section className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-12 self-stretch overflow-hidden rounded-[32px] p-0 md:p-[88px]" aria-labelledby="reviews-title">
      <header className="relative flex w-full md:w-[560px] flex-[0_0_auto] flex-col items-start gap-4">
        <h1 id="reviews-title" className="relative mt-3 md:mt-[-1.00px] self-stretch text-[32px] md:text-[36px] md:text-5xl font-medium leading-[36px] md:leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
          Отзывы
        </h1>
      </header>

      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review, idx) => (
          <article
            key={review.videoSrc}
            aria-labelledby={`review-${idx}-title`}
            className="relative flex flex-1 grow flex-col items-start gap-3 rounded-3xl bg-gray-10 p-3"
          >
            <div className="relative h-56 md:h-80 w-full self-stretch overflow-hidden rounded-2xl bg-gray-10">
              <div className="size-full">
                <iframe
                  title={`${review.reviewer}: отзыв`}
                  width="100%"
                  height="100%"
                  src={`${review.videoSrc}?autoplay=0&controls=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-4 self-stretch p-3">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                <h2 id={`review-${idx}-title`} className="font-header-2-m relative mt-[-1.00px] self-stretch text-[length:var(--header-2-m-font-size)] font-[number:var(--header-2-m-font-weight)] leading-[var(--header-2-m-line-height)] tracking-[var(--header-2-m-letter-spacing)] text-gray-90 [font-style:var(--header-2-m-font-style)]">
                  {review.reviewer}
                </h2>
                <p className="relative self-stretch text-base font-normal leading-4 tracking-normal text-gray-70 [font-family:'Inter',Helvetica]">
                  <span className="font-body-2-r text-[length:var(--body-2-r-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-40 [font-style:var(--body-2-r-font-style)]">
                    {review.text}
                  </span>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
