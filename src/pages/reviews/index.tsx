import { useTranslation } from 'react-i18next';

const videoSrcs = [
  'https://www.youtube.com/embed/pBK6P-9HUR0',
  'https://www.youtube.com/embed/0p3Krz95uyc',
  'https://www.youtube.com/embed/Odglk79gesU',
  'https://www.youtube.com/embed/B2_nG_72i6o',
  'https://www.youtube.com/embed/IZBows11kRw',
  'https://www.youtube.com/embed/HoNOToVDGVY',
  'https://www.youtube.com/embed/4vhVRjokCl8',
  'https://www.youtube.com/embed/9m9b8wtaIik',
  'https://www.youtube.com/embed/LRVHUwyQw4U',
  'https://www.youtube.com/embed/GdWE2_7GHKA',
  'https://www.youtube.com/embed/6OqO-4q4r_g',
];

export const Reviews = () => {
  const { t } = useTranslation(['reviews']);

  return (
    <section
      className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-12 self-stretch overflow-hidden rounded-[32px] p-0 md:p-[88px]"
      aria-labelledby="reviews-title"
    >
      <header className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 md:w-[560px]">
        <h1
          id="reviews-title"
          className="relative mt-3 self-stretch text-[32px] font-medium leading-[36px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:mt-[-1.00px] md:text-5xl md:leading-[60px]"
        >
          {t('title')}
        </h1>
      </header>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {t('reviewers', { returnObjects: true }).map((reviewer, idx) => (
          <article
            key={videoSrcs[idx]}
            aria-labelledby={`review-${idx}-title`}
            className="relative flex flex-1 grow flex-col items-start gap-3 rounded-3xl bg-gray-10 p-3"
          >
            <div className="relative h-56 w-full self-stretch overflow-hidden rounded-2xl bg-gray-10 md:h-80">
              <div className="size-full">
                <iframe
                  title={`${reviewer.name}: ${t('reviewLabel')}`}
                  width="100%"
                  height="100%"
                  src={`${videoSrcs[idx]}?autoplay=0&controls=1`}
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
                <h2
                  id={`review-${idx}-title`}
                  className="font-header-2-m relative mt-[-1.00px] self-stretch text-[length:var(--header-2-m-font-size)] font-[number:var(--header-2-m-font-weight)] leading-[var(--header-2-m-line-height)] tracking-[var(--header-2-m-letter-spacing)] text-gray-90 [font-style:var(--header-2-m-font-style)]"
                >
                  {reviewer.name}
                </h2>
                <p className="relative self-stretch text-base font-normal leading-4 tracking-normal text-gray-70 [font-family:'Inter',Helvetica]">
                  <span className="text-[length:var(--body-2-r-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-40 [font-style:var(--body-2-r-font-style)]">
                    {reviewer.position}
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
