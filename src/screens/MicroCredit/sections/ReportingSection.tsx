import { CircleStopIcon, CogIcon, UserIcon } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";

const featureCards = [
  {
    icon: <UserIcon className="w-7 h-7" />,
    title: "Личный кабинет клиента",
    iconBgColor: "bg-[#00cb8214]",
    iconFillColor: "text-[#00cb82]",
  },
  {
    icon: <CircleStopIcon className="w-7 h-7" />,
    title: "Мульткабинет сотрудника",
    iconBgColor: "bg-[#3573fc14]",
    iconFillColor: "text-[#3573fc]",
  },
  {
    icon: <CogIcon className="w-7 h-7" />,
    title: "Кабинет супер- администратора",
    iconBgColor: "bg-[#e6485014]",
    iconFillColor: "text-[#e64850]",
  },
];

export const ReportingSection = () => {
  return (
    <section className="relative flex flex-col items-start gap-12 p-[88px] w-full bg-gray-90 rounded-[32px] overflow-hidden">
      <img
        className="absolute w-[843px] h-[742px] top-[37px] left-[508px]"
        alt="Vector"
        src="/img/vector-1-1.svg"
      />

      <h2 className="relative w-[912px] mt-[-1.00px] font-header-1-m font-[number:var(--header-1-m-font-weight)] text-white text-[length:var(--header-1-m-font-size)] tracking-[var(--header-1-m-letter-spacing)] leading-[var(--header-1-m-line-height)] [font-style:var(--header-1-m-font-style)]">
        В программное обеспечение включены:
      </h2>

      <div className="flex items-start gap-6 relative self-stretch w-full">
        {featureCards.map((card, index) => (
          <Card
            key={index}
            className="flex items-start gap-8 p-8 flex-1 bg-[#ffffff08] rounded-3xl border-none backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]"
          >
            <CardContent className="flex items-start gap-8 p-0">
              <div
                className={`inline-flex items-center justify-center text-2xl gap-2.5 p-4 ${card.iconBgColor} ${card.iconFillColor} rounded-[100px]`}
              >
                {card.icon}
              </div>

              <div className="flex flex-col items-start gap-3 flex-1">
                <h3 className="relative self-stretch mt-[-1.00px] font-header-2-m font-[number:var(--header-2-m-font-weight)] text-white text-[length:var(--header-2-m-font-size)] tracking-[var(--header-2-m-letter-spacing)] leading-[var(--header-2-m-line-height)] [font-style:var(--header-2-m-font-style)]">
                  {card.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
