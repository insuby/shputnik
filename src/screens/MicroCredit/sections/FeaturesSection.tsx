import { CheckIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";

export const FeaturesSection = () => {
  // Data for borrower verification features
  const borrowerVerificationFeatures = [
    "Антимошеннические сервисы",
    "Идентификация клиента",
    "Бюро кредитных историй",
    "Государственные сервисы",
    "Социальные сети",
    "Дополнительные источники информации",
  ];

  // Data for payment systems features
  const paymentSystemsFeatures = [
    "Выдача online",
    "Погашение займа через личный кабинет",
    "Проверка статусов платежей",
    "Отмена платежей",
    "Работа с наличными",
    "Интеграция с расчетным счетом",
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-11 p-11 relative w-full bg-violet-50 rounded-[32px] overflow-hidden">
      <img
        className="absolute w-[1204px] h-[1060px] top-[-115px] right-0"
        alt="Vector"
        src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/vector-1-4.svg"
      />

      <div className="flex items-center gap-[88px] p-11 relative w-full">
        {/* Borrower Verification Column */}
        <div className="flex flex-col w-[520px] items-start gap-8 relative">
          <div className="flex items-center justify-center gap-2.5 p-4 bg-[#ffffff14] rounded-[100px]">
            <img
              className="w-8 h-8"
              alt="User focus"
              src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/userfocus.svg"
            />
          </div>

          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-4">
              <h2 className="w-full mt-[-1.00px] font-header-1-m text-white text-[length:var(--header-1-m-font-size)] tracking-[var(--header-1-m-letter-spacing)] leading-[var(--header-1-m-line-height)]">
                Проверка заемщика
              </h2>

              <p className="w-[464px] opacity-50 font-body-2-r text-white text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)]">
                В программу включены интеграции с большинством сторонних
                сервисов, а также наши собственные сервисы проверки
                потенциального заемщика (физического или юридического лица):
              </p>
            </div>

            <div className="flex flex-col items-start gap-4">
              {borrowerVerificationFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex w-[520px] h-7 items-center gap-6"
                >
                  <div className="flex items-center gap-2.5 p-1.5 bg-[#442cb933] rounded-[100px]">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                  <p className="flex-1 font-body-2-r text-white text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator orientation="vertical" className="h-[528px] bg-white/20" />

        {/* Payment Systems Column */}
        <div className="flex flex-col w-[520px] items-start justify-center gap-8 relative">
          <div className="flex items-center justify-center gap-2.5 p-4 bg-[#ffffff14] rounded-[100px]">
            <img
              className="w-8 h-8"
              alt="Credit card"
              src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/creditcard.svg"
            />
          </div>

          <div className="flex flex-col w-[520px] items-start gap-6">
            <div className="flex flex-col items-start gap-4 w-full">
              <h2 className="w-full mt-[-1.00px] font-header-1-m text-white text-[length:var(--header-1-m-font-size)] tracking-[var(--header-1-m-letter-spacing)] leading-[var(--header-1-m-line-height)]">
                Платежные системы
              </h2>

              <p className="w-[464px] opacity-50 font-body-2-r text-white text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)]">
                Интеграции с большинством платежных систем полностью
                автоматизировать процесс приема и выдачи займа, а интеграция с
                1С - учитывать даже те платежи, которые связаны только расчетным
                счетом:
              </p>
            </div>

            <div className="flex flex-col items-start gap-4">
              {paymentSystemsFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex w-[520px] h-7 items-center gap-6"
                >
                  <div className="flex items-center gap-2.5 p-1.5 bg-[#442cb933] rounded-[100px]">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                  <p className="flex-1 font-body-2-r text-white text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Card className="flex items-center gap-2.5 p-11 w-full bg-[#ffffff14] rounded-3xl border-none">
        <CardContent className="flex items-center justify-between w-full p-0">
          <div className="flex flex-col items-start gap-3 flex-1">
            <h3 className="w-full mt-[-1.00px] font-header-2-m text-white text-[length:var(--header-2-m-font-size)] tracking-[var(--header-2-m-letter-spacing)] leading-[var(--header-2-m-line-height)]">
              Возможности CRM
            </h3>
            <p className="w-[752px] opacity-60 font-body-2-r text-white text-[length:var(--body-2-r-font-size)] tracking-[var(--body-2-r-letter-spacing)] leading-[var(--body-2-r-line-height)]">
              Сохранение информации о коммуникациях и действиях в системе,
              автоматизация стратегии взаимодействия с клиентом, интеграция
              дополнительных сервисов для повышения продаж
            </p>
          </div>
          <Button className="px-6 py-3 bg-white text-blue-50 rounded-[100px] hover:bg-white/90">
            Демонстрация
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
