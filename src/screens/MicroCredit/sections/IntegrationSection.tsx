import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

export const IntegrationSection = () => {
  // Employee roles data for the first column
  const employeeRolesColumn1 = [
    "Кредитный менеджер",
    "Аналитик",
    "Риск-менджер",
    "Верификатор",
  ];

  // Employee roles data for the second column
  const employeeRolesColumn2 = [
    "Коллектор",
    "Оператор",
    "Супервайзер",
    "Руководитель",
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-12 p-[88px] relative w-full rounded-[32px] overflow-hidden">
      <div className="flex flex-col items-start gap-4 relative w-full">
        <h2 className="font-tite-2-m font-[number:var(--tite-2-m-font-weight)] text-gray-90 text-[length:var(--tite-2-m-font-size)] tracking-[var(--tite-2-m-letter-spacing)] leading-[var(--tite-2-m-line-height)] [font-style:var(--tite-2-m-font-style)]">
          Работа сотрудников
        </h2>

        <p className="max-w-[692px] text-gray-70 text-[length:var(--body-1-r-font-size)] leading-[var(--body-1-r-line-height)] font-body-1-r font-[number:var(--body-1-r-font-weight)] tracking-[var(--body-1-r-letter-spacing)] [font-style:var(--body-1-r-font-style)]">
          Гибкая настройка прав для всех категорий сотрудников, возможность
          совершать любые действия через кабинет сотрудника, контактировать с
          клиентом через СМС, email или по телефону
        </p>
      </div>

      <div className="flex items-start gap-6 relative w-full h-[548px]">
        <Card className="flex-1 rounded-3xl overflow-hidden p-0">
          <CardContent className="p-0">
            <div className="relative w-full h-[548px]">
              <img
                className="absolute w-full h-full top-0 left-0 object-cover"
                alt="Getty images"
                src="/img/getty-images-s3fhn9oq7tm-unsplash-1.png"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1 bg-gray-10 rounded-3xl overflow-hidden p-0 h-full">
          <CardContent className="flex flex-col items-start justify-between p-10 h-full">
            <div className="flex flex-col items-start gap-8 w-full">
              <h3 className="max-w-[440px] font-header-2-m font-[number:var(--header-2-m-font-weight)] text-gray-90 text-[length:var(--header-2-m-font-size)] tracking-[var(--header-2-m-letter-spacing)] leading-[var(--header-2-m-line-height)] [font-style:var(--header-2-m-font-style)]">
                Индивидуальная политика доступа для всех категорий сотрудников,
                возможность настройки ролей:
              </h3>

              <div className="flex items-start gap-12 w-full">
                <div className="flex flex-col items-start gap-4 flex-1">
                  {employeeRolesColumn1.map((role, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-6 w-full h-7"
                    >
                      <Badge className="bg-[#e5edff] p-1.5 rounded-[100px]">
                        <CheckIcon className="w-4 h-4" />
                      </Badge>
                      <span className="flex-1 font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)] [font-style:var(--body-2-r-font-style)]">
                        {role}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-start gap-4 flex-1">
                  {employeeRolesColumn2.map((role, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-6 w-full h-7"
                    >
                      <Badge className="bg-[#e5edff] p-1.5 rounded-[100px]">
                        <CheckIcon className="w-4 h-4" />
                      </Badge>
                      <span className="flex-1 font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-90 text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)] [font-style:var(--body-2-r-font-style)]">
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="[font-family:'Geometria-Medium',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
                    1
                  </span>
                  <span className="[font-family:'Geometria-Medium',Helvetica] font-medium text-[#9ea7bb] text-xl tracking-[0] leading-7 whitespace-nowrap">
                    /
                  </span>
                  <span className="[font-family:'Geometria-Medium',Helvetica] font-medium text-[#9ea7bb] text-xl tracking-[0] leading-7 whitespace-nowrap">
                    2
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-2 rounded-[100px]"
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-2 rounded-[100px]"
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
