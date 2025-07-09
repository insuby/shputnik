import { PencilIcon, PercentIcon, PlusCircleIcon } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";

// Feature card data for mapping
const featureCards = [
  {
    icon: <PencilIcon className="w-8 h-8" />,
    iconBgColor: "bg-yellow-10",
    title: "Редактирование условий",
    description:
      "Расчёт условий выдачи займа и при необходимости предложение альтернативных.",
  },
  {
    icon: <PlusCircleIcon className="w-8 h-8" />,
    iconBgColor: "bg-blue-10",
    title: "Создание и настройка",
    description:
      "Создание и редактирование кредитных продуктов, настройка ручных и автоматических действий.",
  },
  {
    icon: <PercentIcon className="w-8 h-8" />,
    iconBgColor: "bg-red-10",
    title: "Проценты и штрафы",
    description:
      "Автоматическое начисление процентов по займу и штрафов за нарушение сроков возврата.",
  },
];

export const OverviewSection = () => {
  return (
    <section className="flex flex-col items-start gap-12 p-[88px] bg-gray-10 rounded-[32px] overflow-hidden relative w-full">
      <img
        className="absolute w-[843px] h-[742px] top-[37px] right-0"
        alt="Vector"
        src="/img/vector-1-6.svg"
      />

      <h2 className="relative w-[606px] font-tite-2-m font-[number:var(--tite-2-m-font-weight)] text-gray-90 text-[length:var(--tite-2-m-font-size)] tracking-[var(--tite-2-m-letter-spacing)] leading-[var(--tite-2-m-line-height)] [font-style:var(--tite-2-m-font-style)]">
        Управление займами
      </h2>

      <div className="flex items-start gap-6 relative self-stretch w-full">
        {featureCards.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col h-[296px] items-start gap-8 p-10 flex-1 bg-white rounded-3xl overflow-hidden"
          >
            <CardContent className="p-0 flex flex-col items-start gap-8 w-full">
              <div
                className={`inline-flex items-center justify-center gap-2.5 p-4 ${card.iconBgColor} rounded-[100px]`}
              >
                {card.icon}
              </div>

              <div className="flex flex-col items-start gap-3 self-stretch w-full">
                <h3 className="self-stretch mt-[-1.00px] font-header-2-m font-[number:var(--header-2-m-font-weight)] text-gray-90 text-[length:var(--header-2-m-font-size)] tracking-[var(--header-2-m-letter-spacing)] leading-[var(--header-2-m-line-height)] [font-style:var(--header-2-m-font-style)]">
                  {card.title}
                </h3>
                <p className="self-stretch font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-70 text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)] [font-style:var(--body-2-r-font-style)]">
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
