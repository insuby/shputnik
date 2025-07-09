import { CpuIcon, PieChartIcon, SlidersHorizontalIcon } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";

const advantageCards = [
  {
    icon: <SlidersHorizontalIcon className="w-8 h-8" />,
    iconBgColor: "bg-red-10",
    title: "Гибкая настройка",
    description:
      "Вы можете использовать типовое решение или настроить систему под ваши бизнес-процессы",
  },
  {
    icon: <CpuIcon className="w-8 h-8" />,
    iconBgColor: "bg-green-10",
    title: "Полная автоматизация",
    description:
      "Автоматизация бизнес-процессов, наличие большого количества интеграций и сервисов",
  },
  {
    icon: <PieChartIcon className="w-8 h-8" />,
    iconBgColor: "bg-violet-10",
    title: "Оптимизация затрат",
    description:
      "Сокращение ключевых расходов организации за счет оптимизации бизнес-процессов",
  },
];

export const MainContentSection = () => {
  return (
    <section className="relative bg-gray-10 rounded-[32px] p-[88px] overflow-hidden">
      <img
        className="absolute w-[843px] h-[742px] top-[37px] right-0"
        alt="Vector"
        src="/img/vector-1-5.svg"
      />

      <div className="flex flex-col gap-12 relative z-10">
        <div className="flex flex-col max-w-[584px] gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="[font-family:'Geometria-Medium',Helvetica] font-medium text-gray-90 text-[56px] leading-[64px]">
              Преимущества
            </h2>
            <p className="[font-family:'Inter',Helvetica] font-normal text-gray-70 text-xl leading-7">
              Упрощение процессов выдачи займов online и в точках продаж
              благодаря полнофункциональной автоматизации
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantageCards.map((card, index) => (
            <Card key={index} className="rounded-3xl overflow-hidden">
              <CardContent className="flex flex-col h-[296px] gap-8 p-10">
                <div
                  className={`inline-flex items-center justify-center p-4 ${card.iconBgColor} rounded-[100px]`}
                >
                  {card.icon}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="[font-family:'Geometria-Medium',Helvetica] font-medium text-gray-90 text-2xl leading-8">
                    {card.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-gray-70 text-base leading-6">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
