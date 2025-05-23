import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";

const clientWorkSlides = [
  {
    id: 1,
    title: "Подача заявок",
    description:
      "Клиент может самостоятельно пройти регистрацию и подать заявку на займ через сайт, менеджер может сделать эти действия через специальный интерфейс. Если клиент ушел со страницы он всегда может продолжить заполнение заявки.",
    secondTitle: "Автооповещение",
    secondDescription:
      "Автоматическое информирование клиента об одобрении/отказе, наступлении срока погашения, операциях в личном кабинете и других важных событиях по СМС и электронной почте.",
    image:
      "/img/getty-images-o76updap3wy-unsplash-1.png",
  },
];

export const ClientWorkSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const slide = clientWorkSlides[currentSlide];

  return (
    <section className="flex flex-col items-center justify-center gap-12 p-[88px] relative w-full rounded-[32px] overflow-hidden">
        <h2 className="w-full text-gray-90 text-[length:var(--tite-2-m-font-size)] tracking-[var(--tite-2-m-letter-spacing)] leading-[var(--tite-2-m-line-height)]">
          Работа с клиентами
        </h2>

      <div className="flex items-start gap-6 w-full">
        <Card className="flex-1 h-[548px] bg-gray-10 rounded-3xl overflow-hidden border-0">
          <CardContent className="flex flex-col h-full justify-between p-10">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col w-[500px] items-start gap-3">
                <h3 className="w-[440px] mt-[-1.00px] font-header-2-m text-gray-90 text-[length:var(--header-2-m-font-size)] tracking-[var(--header-2-m-letter-spacing)] leading-[var(--header-2-m-line-height)]">
                  {slide.title}
                </h3>
                <p className="font-body-2-r text-gray-70 text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)]">
                  {slide.description}
                </p>
              </div>

              <div className="flex flex-col w-[500px] items-start gap-3">
                <h3 className="w-[440px] h-8 mt-[-1.00px] font-header-2-m text-gray-90 text-[length:var(--header-2-m-font-size)] tracking-[var(--header-2-m-letter-spacing)] leading-[var(--header-2-m-line-height)] whitespace-nowrap">
                  {slide.secondTitle}
                </h3>
                <p className="font-body-2-r text-gray-70 text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)]">
                  {slide.secondDescription}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="[font-family:'Geometria-Medium',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
                    {currentSlide + 1}
                  </span>
                  <span className="[font-family:'Geometria-Medium',Helvetica] font-medium text-[#9ea7bb] text-xl tracking-[0] leading-7 whitespace-nowrap">
                    /
                  </span>
                  <span className="[font-family:'Geometria-Medium',Helvetica] font-medium text-[#9ea7bb] text-xl tracking-[0] leading-7 whitespace-nowrap">
                    {totalSlides}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrevSlide}
                  className="flex items-center justify-center p-2 rounded-[100px] hover:bg-gray-20 transition-colors"
                  disabled={currentSlide === 0}
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className={`flex items-center justify-center p-2 rounded-[100px] ${currentSlide < totalSlides - 1 ? "bg-[#eeeff1]" : ""} hover:bg-gray-20 transition-colors`}
                  disabled={currentSlide === totalSlides - 1}
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1 h-[548px] bg-white rounded-3xl overflow-hidden border-0">
          <CardContent className="p-0 h-full">
            <img
              className="w-full h-full object-cover"
              alt="Client work illustration"
              src={slide.image}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
