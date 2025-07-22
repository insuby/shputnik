import { Check10 } from '../components/ui/check10.tsx';

export const ZaimChecker = () => {
  return (
    <div className="flex flex-col w-[1376px] items-center justify-center gap-9 p-8 relative flex-[0_0_auto] bg-[#f9fafd] rounded-[32px] overflow-hidden">
      <img
        className="absolute w-[1204px] h-[1060px] top-[-115px] left-[339px]"
        alt="Vector"
        src="/img/zain-checker/vector-1.svg"
      />

      <div className="flex items-center gap-[88px] p-12 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[520px] items-start gap-8 relative">
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/zain-checker/frame-18-2.svg"
          />

          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <div className="relative w-[520px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]">
                Проверка заемщика
              </div>

              <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                В программу включены интеграции с большинством сторонних
                сервисов, а также наши собственные сервисы проверки
                потенциального заемщика (юридического лица):
              </p>
            </div>

            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                  <Check10 className="!relative !w-4 !h-4" />
                </div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Антимошеннические сервисы
                </div>
              </div>

              <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                  <Check10 className="!relative !w-4 !h-4" />
                </div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Идентификация клиента
                </div>
              </div>

              <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                  <Check10 className="!relative !w-4 !h-4" />
                </div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Бюро кредитных историй
                </div>
              </div>

              <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                  <Check10 className="!relative !w-4 !h-4" />
                </div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Государственные сервисы
                </div>
              </div>

              <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                  <Check10 className="!relative !w-4 !h-4" />
                </div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Социальные сети
                </div>
              </div>

              <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                  <Check10 className="!relative !w-4 !h-4" />
                </div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Дополнительные источники информации
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="relative w-px h-[528px]"
          alt="Vector"
          src="/img/zain-checker/vector-129.svg"
        />

        <div className="flex flex-col w-[520px] items-start justify-center gap-8 relative">
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/zain-checker/frame-18-4.svg"
          />

          <div className="flex flex-col w-[520px] items-start gap-6 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]">
                Платежные системы
              </div>

              <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                Интеграции с большинством платежных систем полностью
                автоматизировать процесс приема и выдачи займа, а интеграция с
                1С - учитывать даже те платежи, которые связаны только расчетным
                счетом:
              </p>
            </div>

            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                  <Check10 className="!relative !w-4 !h-4" />
                </div>

                <div className="text-gray-90 relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-xl tracking-[0] leading-7">
                  Выдача online
                </div>
              </div>

              <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                  <Check10 className="!relative !w-4 !h-4" />
                </div>

                <p className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Погашение займа через личный кабинет
                </p>
              </div>

              <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                  <Check10 className="!relative !w-4 !h-4" />
                </div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Проверка статусов платежей
                </div>
              </div>

              <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                  <Check10 className="!relative !w-4 !h-4" />
                </div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Отмена платежей
                </div>
              </div>

              <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                  <Check10 className="!relative !w-4 !h-4" />
                </div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Работа с наличными
                </div>
              </div>

              <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                  <Check10 className="!relative !w-4 !h-4" />
                </div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                  Интеграция с расчетным счетом
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 p-12 relative self-stretch w-full flex-[0_0_auto] bg-violet-50 rounded-[32px] overflow-hidden">
        <img
          className="absolute w-[1108px] h-[1060px] top-[-385px] left-[420px]"
          alt="Vector"
          src="/img/zain-checker/vector-1-1.svg"
        />

        <div className="flex flex-col items-start gap-3 relative flex-1 grow">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-[32px] tracking-[0] leading-10">
            Возможности CRM
          </div>

          <p className="relative w-[752px] opacity-60 [font-family:'Roboto',Helvetica] font-normal text-[#ffffff] text-xl tracking-[0] leading-7">
            Сохранение информации о коммуникациях и действиях в системе,
            автоматизация стратегии взаимодействия с клиентом, интеграция
            дополнительных сервисов для повышения продаж
          </p>
        </div>

        <button className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-[#ffffff] rounded-[100px] items-center justify-center">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
            Демонстрация
          </div>
        </button>
      </div>
    </div>
  );
};
