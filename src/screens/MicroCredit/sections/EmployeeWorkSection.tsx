import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../components/ui/toggle-group";

export const EmployeeWorkSection = () => {
  // Data for the analytics features
  const analyticsFeatures = [
    {
      title: "Отчеты и статистика",
      description:
        "Более 25 отчетов, которые покрывают основные потребности организации.",
    },
    {
      title: "Аналитические сервисы",
      description:
        "Описание базы данных для работы с Tableau, Microsoft Power BI, Deductor и др.",
    },
    {
      title: "Интеграция с 1С",
      description:
        "Позволяет полностью автоматизировать процесс обмена данными с программой 1С для ведения бухгалтерского учета.",
    },
    {
      title: "ЕПС ready",
      description:
        "Система готова к переходу бухгалтерского учета на единый план счетов (ЕПС).",
    },
  ];

  // Data for the chart segments
  const chartSegments = [
    { percentage: "8%", position: "top-0 left-[22px]" },
    { percentage: "12%", position: "top-[204px] left-[427px]" },
    { percentage: "20%", position: "top-0 left-3.5" },
    { percentage: "24%", position: "top-[188px] left-[298px]" },
    { percentage: "36%", position: "top-40 left-0" },
  ];

  // Time period options for the toggle
  const timePeriods = [
    { value: "week", label: "Неделя" },
    { value: "month", label: "Месяц" },
    { value: "year", label: "Год" },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-12 p-[88px] relative self-stretch w-full flex-[0_0_auto] rounded-[32px] overflow-hidden">
      <h2 className="relative w-full mt-[-1.00px] font-tite-2-m font-[number:var(--tite-2-m-font-weight)] text-gray-90 text-[length:var(--tite-2-m-font-size)] tracking-[var(--tite-2-m-letter-spacing)] leading-[var(--tite-2-m-line-height)] [font-style:var(--tite-2-m-font-style)]">
        Отчётность и аналитика
      </h2>

      <Card className="flex-[0_0_auto] bg-gray-10 rounded-3xl overflow-hidden flex items-start gap-6 relative self-stretch w-full border-0">
        <img
          className="absolute w-[893px] h-[536px] top-[60px] left-[323px]"
          alt="Vector"
          src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/vector-2.svg"
        />

        <CardContent className="flex flex-col h-[596px] items-start gap-8 pl-12 pr-[68px] py-12 relative flex-1 grow rounded-3xl overflow-hidden">
          <div className="flex flex-col items-start justify-between relative flex-1 self-stretch w-full grow">
            {analyticsFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]"
              >
                <h3 className="relative self-stretch mt-[-1.00px] font-header-2-m font-[number:var(--header-2-m-font-weight)] text-gray-90 text-[length:var(--header-2-m-font-size)] tracking-[var(--header-2-m-letter-spacing)] leading-[var(--header-2-m-line-height)] [font-style:var(--header-2-m-font-style)]">
                  {feature.title}
                </h3>
                <p className="relative self-stretch font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-70 text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)] [font-style:var(--body-2-r-font-style)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>

        <CardContent className="h-[596px] rounded-3xl overflow-hidden relative flex-1 grow p-0">
          <div className="relative w-[574px] h-[574px] top-[-13px] left-[11px] rounded-[287px]">
            {/* Chart background elements */}
            <div className="absolute w-[294px] h-[294px] top-[140px] left-[140px] bg-[#ffffff] rounded-[147px] blur-[6px]" />
            <div className="absolute w-[444px] h-[444px] top-[65px] left-[65px] rounded-[222px] border-2 border-solid border-[#ffffff] opacity-80" />
            <div className="absolute w-[574px] h-[574px] top-0 left-0 rounded-[287px] border-2 border-solid border-[#ffffff] opacity-40" />

            <div className="absolute w-[319px] h-[319px] top-[127px] left-32">
              <div className="absolute w-[356px] h-[337px] top-[-18px] left-[-29px]">
                <div className="absolute w-[356px] h-[260px] top-[76px] left-0">
                  <div className="absolute w-[356px] h-[253px] top-[7px] left-0">
                    {/* Chart segments */}
                    <img
                      className="absolute w-[152px] h-[253px] top-0 left-[29px]"
                      alt="Subtract"
                      src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/subtract-3.svg"
                    />
                    <img
                      className="absolute w-[151px] h-[151px] top-[103px] left-[197px]"
                      alt="Subtract"
                      src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/subtract-2.svg"
                    />

                    {/* Balance display */}
                    <div className="inline-flex flex-col items-center gap-0.5 absolute top-[55px] left-[87px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-base tracking-[0] leading-6 whitespace-nowrap">
                        Баланс
                      </div>
                      <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-gray-90 text-[40px] tracking-[0] leading-[52px] whitespace-nowrap">
                        4,385.40 ₽
                      </div>
                    </div>

                    {/* Percentage badges */}
                    <div className="inline-flex px-3 py-1.5 absolute top-[188px] left-[298px] bg-[#ffffff33] border-[none] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] items-center justify-center gap-2 rounded-[100px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                        24%
                      </div>
                    </div>
                    <div className="inline-flex px-3 py-1.5 absolute top-40 left-0 bg-[#ffffff33] border-[none] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] items-center justify-center gap-2 rounded-[100px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                        36%
                      </div>
                    </div>
                  </div>

                  <img
                    className="absolute w-[53px] h-[94px] top-0 left-[295px]"
                    alt="Subtract"
                    src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/subtract-1.svg"
                  />
                </div>

                <div className="absolute w-[145px] h-[78px] top-0 left-[81px]">
                  <img
                    className="absolute w-[145px] h-[60px] top-[18px] left-0"
                    alt="Subtract"
                    src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/subtract-4.svg"
                  />
                  <div className="inline-flex px-3 py-1.5 absolute top-0 left-3.5 bg-[#ffffff33] border-[none] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] items-center justify-center gap-2 rounded-[100px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                      20%
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute w-[70px] h-[57px] -top-0.5 left-[211px]">
                <img
                  className="absolute w-[51px] h-[41px] top-4 left-0"
                  alt="Subtract"
                  src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/subtract.svg"
                />
                <div className="inline-flex px-3 py-1.5 absolute top-0 left-[22px] bg-[#ffffff33] border-[none] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] items-center justify-center gap-2 rounded-[100px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                    8%
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex px-3 py-1.5 absolute top-[204px] left-[427px] bg-[#ffffff33] border-[none] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] items-center justify-center gap-2 rounded-[100px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                12%
              </div>
            </div>

            {/* Time period toggle */}
            <div className="flex w-72 items-start p-1 absolute top-[497px] left-[143px] bg-[#ffffff] rounded-[100px]">
              <ToggleGroup
                type="single"
                defaultValue="week"
                className="flex w-full"
              >
                {timePeriods.map((period) => (
                  <ToggleGroupItem
                    key={period.value}
                    value={period.value}
                    className={`flex px-3 py-2 relative flex-1 grow items-center justify-center gap-2 rounded-[100px] ${
                      period.value === "week"
                        ? "bg-gray-90 text-white"
                        : "text-[#9ea7bb]"
                    }`}
                  >
                    <span className="relative w-fit mt-[-1.00px] font-body-2-r font-[number:var(--body-2-r-font-weight)] text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)] whitespace-nowrap [font-style:var(--body-2-r-font-style)]">
                      {period.label}
                    </span>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
