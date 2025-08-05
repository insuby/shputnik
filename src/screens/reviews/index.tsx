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
    }
]
export const Reviews = () => {
    return (
        <div
            className="flex flex-col items-start gap-12 p-[88px] relative self-stretch w-full flex-[0_0_auto] rounded-[32px] overflow-hidden">
            <div className="flex flex-col w-[560px] items-start gap-4 relative flex-[0_0_auto]">
                <div
                    className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[60px] leading-[60px] relative tracking-[0]">
                    Отзывы
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
                {reviews.map((review) => (
                    <div key={review.videoSrc}
                         className="flex flex-col items-start gap-3 p-3 relative flex-1 grow bg-gray-10 rounded-3xl">
                        <div className="relative self-stretch w-full h-80 bg-gray-10 rounded-2xl overflow-hidden">
                            <div className="w-full h-full">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`${review.videoSrc}?autoplay=0&controls=1`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-2xl"
                                />
                            </div>
                        </div>
                        <div
                            className="flex flex-col items-start justify-center gap-4 p-3 relative self-stretch w-full flex-[0_0_auto]">
                            <div
                                className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                                <div
                                    className="self-stretch mt-[-1.00px] font-header-2-m font-[number:var(--header-2-m-font-weight)] text-gray-90 text-[length:var(--header-2-m-font-size)] leading-[var(--header-2-m-line-height)] relative tracking-[var(--header-2-m-letter-spacing)] [font-style:var(--header-2-m-font-style)]">
                                    {review.reviewer}
                                </div>
                                <p className="self-stretch [font-family:'Inter',Helvetica] font-normal text-gray-70 text-base leading-4 relative tracking-[0]">
          <span
              className="leading-[var(--body-2-r-line-height)] text-gray-40 font-body-2-r [font-style:var(--body-2-r-font-style)] font-[number:var(--body-2-r-font-weight)] tracking-[var(--body-2-r-letter-spacing)] text-[length:var(--body-2-r-font-size)]">
            {review.text}
          </span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
