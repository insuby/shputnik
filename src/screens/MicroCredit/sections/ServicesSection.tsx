import { Card, CardContent } from "../../../components/ui/card";

export const ServicesSection = () => {
  // Service data for mapping
  const services = [
    {
      id: 1,
      title: "Микрофинансовое кредитование",
      description: "Помогаем кредитным кооперативам",
      iconSrc: "https://c.animaapp.com/m8vtn66s4ZWe7w/img/money.svg",
      iconAlt: "Money",
      bgColor: "bg-yellow-10",
    },
    {
      id: 2,
      title: "BNPL",
      description: "Купи сейчас – плати потом",
      iconSrc: "https://c.animaapp.com/m8vtn66s4ZWe7w/img/shoppingbagopen.svg",
      iconAlt: "Shopping bag open",
      bgColor: "bg-blue-10",
    },
    {
      id: 3,
      title: "Банковское кредитование",
      description: "Помогаем кредитным кооперативам",
      iconSrc: "https://c.animaapp.com/m8vtn66s4ZWe7w/img/bank.svg",
      iconAlt: "Bank",
      bgColor: "bg-red-10",
    },
    {
      id: 4,
      title: "Автокредитование",
      description: "Помогаем кредитным кооперативам",
      iconSrc: "https://c.animaapp.com/m8vtn66s4ZWe7w/img/carprofile.svg",
      iconAlt: "Car profile",
      bgColor: "bg-green-10",
    },
    {
      id: 5,
      title: "Кредитование бизнеса",
      description: "Помогаем кредитным кооперативам",
      iconSrc: "https://c.animaapp.com/m8vtn66s4ZWe7w/img/briefcase.svg",
      iconAlt: "Briefcase",
      bgColor: "bg-violet-10",
    },
    {
      id: 6,
      title: "Исламское финансирование",
      description: "Финансирование по шариатским принципам",
      iconSrc: "https://c.animaapp.com/m8vtn66s4ZWe7w/img/starandcrescent.svg",
      iconAlt: "Star and crescent",
      bgColor: "bg-green-10",
    },
    {
      id: 7,
      title: "POS-кредитование",
      description: "Помогаем кредитным кооперативам",
      iconSrc: "https://c.animaapp.com/m8vtn66s4ZWe7w/img/shoppingcart.svg",
      iconAlt: "Shopping cart",
      bgColor: "bg-yellow-10",
    },
    {
      id: 8,
      title: "P2P-кредитование",
      description: "Платформа для P2P-площадки кредитования",
      iconSrc:
        "https://c.animaapp.com/m8vtn66s4ZWe7w/img/arrowscounterclockwise.svg",
      iconAlt: "Arrows counter",
      bgColor: "bg-blue-10",
    },
    {
      id: 9,
      title: "Выгрузка данных в кредитные бюро",
      description: "Автоматизация передачи данных в БКИ",
      iconSrc: "https://c.animaapp.com/m8vtn66s4ZWe7w/img/database.svg",
      iconAlt: "Database",
      bgColor: "bg-violet-10",
    },
    {
      id: 10,
      title: "Модуль принятия решений",
      description: "Настраиваемый процесс проверки клиентов",
      iconSrc: "https://c.animaapp.com/m8vtn66s4ZWe7w/img/checkshield.svg",
      iconAlt: "Check shield",
      bgColor: "bg-blue-10",
    },
  ];

  // Split services into rows
  const firstRow = services.slice(0, 4);
  const secondRow = services.slice(4, 8);
  const thirdRow = services.slice(8, 10);

  return (
    <section className="flex flex-col items-start gap-8 p-[88px] relative w-full bg-gray-10 rounded-[32px]">
      <div className="flex flex-col w-full items-start gap-5 relative">
        {/* First row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full">
          {firstRow.map((service) => (
            <Card
              key={service.id}
              className="h-[268px] rounded-3xl border-none overflow-hidden bg-white"
            >
              <CardContent className="flex flex-col h-full items-start gap-8 p-8">
                <div
                  className={`inline-flex items-center justify-center gap-2.5 p-4 ${service.bgColor} rounded-[100px]`}
                >
                  <img
                    className="w-7 h-7"
                    alt={service.iconAlt}
                    src={service.iconSrc}
                  />
                </div>
                <div className="flex flex-col items-start gap-2 flex-1 self-stretch w-full">
                  <h3 className="self-stretch mt-[-1.00px] font-medium text-gray-90 text-[22px] leading-7 [font-family:'Geometria-Medium',Helvetica]">
                    {service.title}
                  </h3>
                  <p className="self-stretch opacity-50 text-gray-90 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] font-body-2-r font-[number:var(--body-2-r-font-weight)] tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full">
          {secondRow.map((service) => (
            <Card
              key={service.id}
              className={`h-[268px] rounded-3xl border-none overflow-hidden bg-white ${service.id === 7 ? "shadow-[0px_4px_16px_#ffffff0a]" : ""}`}
            >
              <CardContent className="flex flex-col h-full items-start gap-8 p-8">
                <div
                  className={`inline-flex items-center justify-center gap-2.5 p-4 ${service.bgColor} rounded-[100px]`}
                >
                  <img
                    className="w-7 h-7"
                    alt={service.iconAlt}
                    src={service.iconSrc}
                  />
                </div>
                <div className="flex flex-col items-start gap-2 flex-1 self-stretch w-full">
                  <h3 className="self-stretch mt-[-1.00px] font-medium text-gray-90 text-[22px] leading-7 [font-family:'Geometria-Medium',Helvetica]">
                    {service.title}
                  </h3>
                  <p
                    className={`self-stretch ${service.id === 7 ? "" : "opacity-50"} text-gray-90 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] font-body-2-r font-[number:var(--body-2-r-font-weight)] tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]`}
                  >
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Third row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {thirdRow.map((service) => (
            <Card
              key={service.id}
              className="h-[268px] rounded-3xl border-none overflow-hidden bg-white"
            >
              <CardContent className="flex flex-col h-full items-start gap-8 p-8">
                <div
                  className={`inline-flex items-center justify-center gap-2.5 p-4 ${service.bgColor} rounded-[100px]`}
                >
                  <img
                    className="w-7 h-7"
                    alt={service.iconAlt}
                    src={service.iconSrc}
                  />
                </div>
                <div className="flex flex-col items-start gap-2 flex-1 self-stretch w-full">
                  <h3 className="self-stretch mt-[-1.00px] font-medium text-gray-90 text-[22px] leading-7 [font-family:'Geometria-Medium',Helvetica]">
                    {service.title}
                  </h3>
                  <p className="self-stretch opacity-50 text-gray-90 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] font-body-2-r font-[number:var(--body-2-r-font-weight)] tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                    {service.description}
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
