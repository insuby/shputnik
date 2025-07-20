import { EmployeeWork } from '../../widgets/employe-work.tsx';
import { useFeedbackForm } from '../../widgets/feedback-form';
import { Trust } from '../../widgets/trust.tsx';
import { Integrations } from '../../widgets/integrations.tsx';
import { Analytics } from '../../widgets/analytics.tsx';
import { Advantages } from '../../widgets/advantages.tsx';
import { Marquee } from '@devnomic/marquee';

export const BNPL = () => {
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col w-[1440px] items-center gap-[136px] pt-8 pb-[136px] px-8 relative flex-[0_0_auto]">
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <div
          className="flex flex-col h-[628px] items-start gap-20 p-12 relative self-stretch w-full bg-green-50 rounded-[32px] overflow-hidden">
          <img
            className="absolute w-[1108px] h-[1060px] top-[-140px] left-[441px]"
            alt="Vector"
            src="/img/bnpl/vector-1-5.svg"
          />

          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div
              className="inline-flex gap-2.5 px-5 py-2.5 bg-[#ffffff14] rounded-[100px] items-center justify-center relative flex-[0_0_auto]">
              <div
                className="w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[#ffffff] text-[length:var(--body-3-r-font-size)] leading-[var(--body-3-r-line-height)] whitespace-nowrap relative tracking-[var(--body-3-r-letter-spacing)] [font-style:var(--body-3-r-font-style)]">
                О продукте
              </div>
            </div>

            <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
              <div
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 relative flex-[0_0_auto] bg-[#ffffff14] rounded-[100px]">
                <div className="relative w-5 h-5 mt-[-556.00px] ml-[-10907.00px] bg-[100%_100%]">
                  <div
                    className="relative w-3.5 h-4 top-0.5 left-[3px] bg-[url(/img/bnpl/vector-37.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-1.5 h-1.5 top-0 left-2"
                      alt="Vector"
                      src="/img/bnpl/vector-38.svg"
                    />

                    <img
                      className="absolute w-1.5 h-px top-2 left-1"
                      alt="Vector"
                      src="/img/bnpl/vector-36.svg"
                    />

                    <img
                      className="absolute w-1.5 h-px top-[11px] left-1"
                      alt="Vector"
                      src="/img/bnpl/vector-36.svg"
                    />
                  </div>
                </div>

                <div
                  className="w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[#ffffff] text-[length:var(--body-3-r-font-size)] leading-[var(--body-3-r-line-height)] whitespace-nowrap relative tracking-[var(--body-3-r-letter-spacing)] [font-style:var(--body-3-r-font-style)]">
                  Спецификация
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[624px] items-start justify-center gap-12 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
              <div
                className="relative w-[624px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-6xl tracking-[0] leading-[68px]">
                Автоматизация BNPL и PoS-кредитования
              </div>

              <p
                className="w-[624px] text-[#ffffffcc] text-xl leading-7 relative [font-family:'Roboto',Helvetica] font-normal tracking-[0]">
                Мы предлагаем готовые инструменты для автоматизации процессов BNPL
                (Buy Now, Pay Later) и POS-кредитования. Решения подойдут для
                банков, МФО, финтех-компаний и розничных сетей.
              </p>
            </div>

            <button
              className="all-[unset] box-border inline-flex px-8 py-4 relative flex-[0_0_auto] bg-[#ffffff] items-center justify-center gap-2.5 rounded-[100px]">
              <div
                className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
                Записаться на презентацию
              </div>
            </button>
          </div>

          <div
            className="inline-flex flex-col items-start justify-center gap-4 p-8 absolute top-[168px] left-[968px] bg-[#ffffff] rounded-[32px]">
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
              <div
                className="relative w-[264px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7">
                График платежей
              </div>

              <div
                className="w-[180px] font-normal text-[#7a86a2] text-sm leading-5 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                Договор: 12345456322
              </div>
            </div>

            <div className="inline-flex h-[175px] items-end relative">
              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <div
                  className="relative w-2 h-[92px] rounded-3xl bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />

                <div
                  className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                  март
                </div>
              </div>

              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <div
                  className="h-[104px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)] relative w-2 rounded-3xl" />

                <div
                  className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                  апр
                </div>
              </div>

              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <div
                  className="h-[127px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)] relative w-2 rounded-3xl" />

                <div
                  className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                  май
                </div>
              </div>

              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <div className="h-[145px] bg-[#f2f4fb] relative w-2 rounded-3xl" />

                <div
                  className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                  июнь
                </div>
              </div>

              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <div className="h-[110px] bg-[#f2f4fb] relative w-2 rounded-3xl" />

                <div
                  className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                  июль
                </div>
              </div>

              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <div className="h-[98px] bg-[#f2f4fb] relative w-2 rounded-3xl" />

                <div
                  className="w-11 [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs text-center leading-4 relative tracking-[0]">
                  авг
                </div>
              </div>
            </div>

            <img
              className="absolute w-[328px] h-24 top-[132px] left-0"
              alt="Vector"
              src="/img/bnpl/vector-147.svg"
            />

            <div
              className="absolute w-3 h-3 top-[156px] left-[156px] bg-[#ffffff] rounded-md border-2 border-solid border-[#00cb82]" />
          </div>

          <img
            className="absolute w-[761px] h-[628px] top-0 left-[615px]"
            alt="Vector"
            src="/img/bnpl/vector-3-1.svg"
          />

          <div
            className="inline-flex flex-col items-center justify-center gap-3 p-4 absolute top-[286px] left-[800px] bg-[#ffffff] rounded-[32px_32px_0px_0px]">
            <div className="relative w-[212px] h-[212px] rounded-[100px]">
              <div className="relative w-[198px] h-[198px] top-[7px] left-[7px]">
                <div className="inline-flex flex-col h-[62px] items-center gap-0.5 absolute top-[68px] left-10">
                  <div
                    className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-sm tracking-[0] leading-5 whitespace-nowrap">
                    Текущий остаток
                  </div>

                  <div
                    className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-[#1c222f] text-[28px] text-center tracking-[0] leading-10 whitespace-nowrap">
                    44,000₽
                  </div>
                </div>

                <div
                  className="absolute w-[198px] h-[198px] top-0 left-0 rounded-[99px] border-[10px] border-solid border-neutral-50" />

                <img
                  className="absolute w-[198px] h-[198px] top-0 left-0"
                  alt="Ellipse"
                  src="/img/bnpl/ellipse-32.svg"
                />
              </div>
            </div>

            <div
              className="flex flex-col items-start gap-3 px-4 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#f6f8ff] rounded-[20px]">
              <div className="flex w-[180px] items-center justify-between relative flex-[0_0_auto]">
                <div
                  className="w-fit [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-sm leading-5 whitespace-nowrap relative tracking-[0]">
                  Сумма займа
                </div>

                <div
                  className="w-fit font-medium text-gray-90 text-base leading-6 whitespace-nowrap relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking-[0]">
                  122, 000₽
                </div>
              </div>

              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div
                  className="flex-1 [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-sm leading-5 relative tracking-[0]">
                  Проценты
                </div>

                <div
                  className="w-fit font-medium text-gray-90 text-base leading-6 whitespace-nowrap relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking-[0]">
                  4, 000₽
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[656px] items-center justify-center gap-2.5 relative flex-[0_0_auto]">
          <div
            className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center leading-[60px] relative tracking-[0]">
            Подойдет для
          </div>
        </div>

        <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div
            className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
            <img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/bnpl/frame-18-2.svg"
            />

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div
                className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                E-commerce (BNPL)
              </div>

              <p
                className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                Программное обеспечение для запуска BNPL в интернет-магазинах.
                Позволяет покупателям оплачивать товары в рассрочку. Подходит для
                e-commerce-площадок и финансовых организаций, которые хотят
                предлагать BNPL-платформу магазинам-партнёрам.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
            <img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/bnpl/frame-18-3.svg"
            />

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div
                className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                PoS-кредитование
              </div>

              <p
                className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                Программный продукт для автоматизации кредитования online и в
                точках продаж. Позволяет оформлять займы с процентной ставкой
                прямо на кассе, в офисе или через онлайн-форму.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[400px] items-center gap-6 rounded-3xl flex relative self-stretch w-full">
        <div
          className="flex flex-col items-start gap-7 pl-12 pr-[68px] py-12 relative flex-1 grow rounded-3xl overflow-hidden">
          <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
            <div
              className="w-[480px] mt-[-1.00px] font-normal text-[#9ea7bb] text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]">
              Цифровая адаптация
            </div>

            <div
              className="w-[480px] font-medium text-gray-90 text-[40px] leading-[48px] relative [font-family:'Roboto',Helvetica] tracking-[0]">
              Увеличьте продажи
            </div>
          </div>

          <p
            className="w-[500px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
            С помощью программного обеспечения BNPL увеличьте средний чек,
            повысьте частоту транзакций и улучшите обслуживание клиентов с
            интеграцией BNPL-решения в вашу точку продаж.
          </p>
        </div>

        <div className="relative flex-1 self-stretch grow rounded-3xl overflow-hidden">
          <Marquee fade>
            <div className="relative w-[752px] h-[400px] left-1">
              <div className="inline-flex items-center gap-4 absolute top-[39px] left-0">
                <div
                  className="flex flex-col w-60 items-center justify-center gap-3 p-4 relative bg-[#f9fafd] rounded-[32px]">
                  <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className="relative w-40 h-40 [background:url(/img/bnpl/frame-1948755020-3.png)_50%_50%_/_cover]" />

                    <div className="flex flex-col items-start gap-3 p-2 relative self-stretch w-full flex-[0_0_auto]">
                      <div
                        className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-70 text-xl tracking-[0] leading-[26px]">
                        Наушники Beyerdynamic Amiron
                      </div>

                      <div
                        className="self-stretch font-semibold text-[#9ea7bb] text-base leading-6 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                        85 950₽
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="flex flex-col w-60 items-center justify-center gap-3 p-4 relative bg-[#f9fafd] rounded-[32px]">
                  <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className="relative w-40 h-40 [background:url(/img/bnpl/frame-1948755020-2.png)_50%_50%_/_cover]" />

                    <div className="flex flex-col items-start gap-3 p-2 relative self-stretch w-full flex-[0_0_auto]">
                      <div
                        className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-70 text-xl tracking-[0] leading-[26px]">
                        Наушники Kennerton Gjallarhorn JM
                      </div>

                      <div
                        className="self-stretch font-semibold text-[#9ea7bb] text-base leading-6 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                        74 000₽
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="flex flex-col w-60 items-center justify-center gap-3 p-4 relative bg-[#f9fafd] rounded-[32px]">
                  <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className="relative w-40 h-40 [background:url(/img/bnpl/frame-1948755020-2.png)_50%_50%_/_cover]" />

                    <div className="flex flex-col items-start gap-3 p-2 relative self-stretch w-full flex-[0_0_auto]">
                      <div
                        className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-70 text-xl tracking-[0] leading-[26px]">
                        Наушники Kennerton Gjallarhorn JM
                      </div>

                      <div
                        className="self-stretch font-semibold text-[#9ea7bb] text-base leading-6 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                        74 000₽
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>

      <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto] rounded-3xl overflow-hidden">
        <div className="flex flex-col w-[676px] items-start gap-2.5 p-6 relative rounded-[32px] overflow-hidden">
          <div
            className="flex items-center gap-3 p-8 relative self-stretch w-full flex-[0_0_auto] bg-[#f9fafd] rounded-[32px]">
            <div className="flex items-start gap-3 relative flex-1 grow">
              <div
                className="relative w-40 h-40 [background:url(/img/bnpl/frame-1948755020-3.png)_50%_50%_/_cover]" />

              <div className="flex flex-col items-start gap-5 p-3 relative flex-1 grow">
                <div
                  className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#55607a] text-xl tracking-[0] leading-[26px]">
                  Наушники Beyerdynamic Amiron
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className="w-fit mt-[-1.00px] font-normal text-[#7a86a2] text-base leading-6 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      Стоимость
                    </div>

                    <div
                      className="w-fit mt-[-1.00px] font-normal text-[#55607a] text-base leading-6 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      85 950₽
                    </div>
                  </div>

                  <img
                    className="relative self-stretch w-full h-px object-cover"
                    alt="Vector"
                    src="/img/bnpl/vector-140.svg"
                  />

                  <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className="w-fit mt-[-1.00px] font-normal text-[#7a86a2] text-base leading-6 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      Авансовый платеж
                    </div>

                    <div
                      className="w-fit mt-[-1.00px] font-normal text-[#55607a] text-base leading-6 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      14 500 ₽
                    </div>
                  </div>

                  <img
                    className="relative self-stretch w-full h-px object-cover"
                    alt="Vector"
                    src="/img/bnpl/vector-140.svg"
                  />

                  <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className="w-fit mt-[-1.00px] font-normal text-[#7a86a2] text-base leading-6 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      Срок
                    </div>

                    <div
                      className="w-fit mt-[-1.00px] font-normal text-[#55607a] text-base leading-6 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      10 месяцев
                    </div>
                  </div>

                  <img
                    className="relative self-stretch w-full h-px object-cover"
                    alt="Vector"
                    src="/img/bnpl/vector-140.svg"
                  />

                  <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className="flex-1 mt-[-1.00px] font-normal text-[#7a86a2] text-base leading-6 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      Следующий платеж
                    </div>

                    <div
                      className="w-fit mt-[-1.00px] font-normal text-[#55607a] text-base leading-6 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      2 500 ₽
                    </div>
                  </div>

                  <img
                    className="relative self-stretch w-full h-px object-cover"
                    alt="Vector"
                    src="/img/bnpl/vector-140.svg"
                  />

                  <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className="flex-1 mt-[-1.00px] font-normal text-[#7a86a2] text-base leading-6 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      Дата
                    </div>

                    <div
                      className="w-fit mt-[-1.00px] font-normal text-[#55607a] text-base leading-6 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                      20 февраля 2025
                    </div>
                  </div>
                </div>

                <button
                  className="all-[unset] box-border flex px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-gray-90 items-center justify-center gap-2.5 rounded-[100px]">
                  <div
                    className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-semibold text-[#ffffff] text-base leading-6 whitespace-nowrap relative tracking-[0]">
                    Внести всю сумму
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-start gap-7 pl-12 pr-[68px] py-12 relative flex-1 grow rounded-3xl overflow-hidden">
          <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
            <div
              className="w-[480px] mt-[-1.00px] font-normal text-[#9ea7bb] text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]">
              Портал заемщика
            </div>

            <p
              className="w-[480px] font-medium text-gray-90 text-[40px] leading-[48px] relative [font-family:'Roboto',Helvetica] tracking-[0]">
              Одно место <br />
              для всех деталей
            </p>
          </div>

          <p
            className="w-[500px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
            Клиенты плавно переходят на портал заемщика, где они могут получить
            доступ к информации о своих платежах и вносить платежи — все из одного
            удобного места.
          </p>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center gap-12 px-0 py-20 relative self-stretch w-full flex-[0_0_auto]">
        <div
          className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center leading-[60px] relative tracking-[0]">
          Настраиваемые параметры
        </div>

        <div className="flex h-[228px] items-start justify-center gap-6 relative self-stretch w-full">
          <div
            className="flex flex-col items-start gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
            <div
              className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
              <div className="mt-[-3208.00px] ml-[-9786.00px] relative w-7 h-7 bg-[100%_100%]">
                <div className="relative w-[23px] h-[22px] top-[3px] left-[3px]">
                  <img
                    className="absolute w-4 h-4 top-0 left-1"
                    alt="Vector"
                    src="/img/bnpl/vector-7.svg"
                  />

                  <img
                    className="absolute w-[23px] h-2 top-3.5 left-0"
                    alt="Vector"
                    src="/img/bnpl/vector-32.svg"
                  />
                </div>
              </div>
            </div>

            <div
              className="relative self-stretch mb-[-7.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
              Персональная информация
            </div>
          </div>

          <div
            className="flex flex-col items-start gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
            <div
              className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
              <div className="relative w-7 h-7">
                <div className="relative w-[22px] h-[21px] top-1 left-[3px]">
                  <img
                    className="absolute w-1.5 h-[9px] top-1 left-2.5"
                    alt="Vector"
                    src="/img/bnpl/vector-42.svg"
                  />

                  <img
                    className="absolute w-1.5 h-1.5 top-[3px] left-0"
                    alt="Vector"
                    src="/img/bnpl/vector-43.svg"
                  />

                  <img
                    className="absolute w-[22px] h-[21px] top-0 left-0"
                    alt="Vector"
                    src="/img/bnpl/vector-44.svg"
                  />
                </div>
              </div>
            </div>

            <div
              className="relative self-stretch mb-[-7.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
              История предыдущих выдач
            </div>
          </div>

          <div
            className="flex flex-col items-start gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
            <div
              className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#e6485014] rounded-[100px]">
              <div className="relative w-7 h-7">
                <img
                  className="absolute w-[21px] h-3.5 top-2.5 left-1"
                  alt="Vector"
                  src="/img/bnpl/vector-9.svg"
                />

                <img
                  className="absolute w-[17px] h-0.5 top-1.5 left-[5px]"
                  alt="Vector"
                  src="/img/bnpl/vector.svg"
                />

                <img
                  className="absolute w-3.5 h-0.5 top-[3px] left-[7px]"
                  alt="Vector"
                  src="/img/bnpl/vector.svg"
                />
              </div>
            </div>

            <div
              className="relative self-stretch mb-[-7.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
              Данные из сторонних сервисов
            </div>
          </div>

          <div
            className="flex flex-col items-start gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-[32px] overflow-hidden">
            <div
              className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#fbab0014] rounded-[100px]">
              <div className="relative w-7 h-7 mt-[-3208.00px] ml-[-10836.00px] bg-[100%_100%]">
                <div className="relative w-[23px] h-[23px] top-[3px] left-[3px]">
                  <img
                    className="absolute w-[19px] h-[19px] top-0 left-0"
                    alt="Vector"
                    src="/img/bnpl/vector-7.svg"
                  />

                  <img
                    className="absolute w-2 h-2 top-[15px] left-[15px]"
                    alt="Vector"
                    src="/img/bnpl/vector-2.svg"
                  />
                </div>
              </div>
            </div>

            <div
              className="relative self-stretch mb-[-7.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
              Проверка документов
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex items-center gap-[88px] px-[88px] py-12 relative self-stretch w-full flex-[0_0_auto] bg-green-50 rounded-[32px] overflow-hidden">
        <img
          className="absolute w-[1204px] h-[1060px] top-[76px] left-[199px]"
          alt="Vector"
          src="/img/bnpl/vector-1-1.svg"
        />

        <div className="flex flex-col w-[530px] items-start gap-8 relative">
          <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div
              className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffcc] text-xl leading-7 relative tracking-[0]">
              Бэк-офис
            </div>

            <p
              className="w-[530px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-5xl leading-[60px] relative tracking-[0]">
              Управляйте <br />
              всеми платежами <br />в одном месте
            </p>
          </div>

          <p
            className="self-stretch text-[#ffffffcc] text-xl leading-7 relative [font-family:'Roboto',Helvetica] font-normal tracking-[0]">
            Мониторинг и управление каждым приложением с единой панели управления.
            Этот централизованный контроль упрощает отслеживание планов рассрочки
            atl, обеспечивая эффективную работу и оптимальное финансовое
            управление.
          </p>
        </div>

        <div
          className="flex w-[871px] h-[538px] items-center relative mr-[-88.00px] bg-[#f6f8fd] rounded-3xl overflow-hidden">
          <div className="flex flex-col w-[242px] items-start gap-[23.92px] p-6 relative self-stretch bg-[#ffffff]">
            <p
              className="self-stretch mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[23.9px] leading-[29.9px] relative tracking-[0]">
              <span className="text-[#1c222f]">Ваш</span>

              <span className="text-[#00cb82]">Лого</span>
            </p>

            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex h-[44.92px] items-center gap-3 p-2.5 relative self-stretch w-full rounded-xl">
                <div className="relative w-5 h-5 mt-[-3731.92px] ml-[-10470.00px] bg-[100%_100%]">
                  <img
                    className="absolute w-[15px] h-4 top-0.5 left-[3px]"
                    alt="Vector"
                    src="/img/bnpl/vector-14.svg"
                  />
                </div>

                <div
                  className="flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                  Главная
                </div>
              </div>

              <div
                className="flex h-[44.92px] items-center gap-3 p-2.5 relative self-stretch w-full bg-gray-90 rounded-xl">
                <div className="relative w-5 h-5">
                  <div className="relative w-[19px] h-[11px] top-1 left-px">
                    <img
                      className="absolute w-1.5 h-1.5 top-0.5 left-1.5"
                      alt="Vector"
                      src="/img/bnpl/vector-11.svg"
                    />

                    <img
                      className="absolute w-[19px] h-[11px] top-0 left-0"
                      alt="Vector"
                      src="/img/bnpl/vector-4.svg"
                    />

                    <img
                      className="absolute w-1 h-1 top-0 left-3.5"
                      alt="Vector"
                      src="/img/bnpl/vector-8.svg"
                    />

                    <img
                      className="absolute w-1 h-1 top-[7px] left-3.5"
                      alt="Vector"
                      src="/img/bnpl/vector-5.svg"
                    />

                    <img
                      className="absolute w-1 h-1 top-[7px] left-0"
                      alt="Vector"
                      src="/img/bnpl/vector-10.svg"
                    />

                    <img
                      className="absolute w-1 h-1 top-0 left-0"
                      alt="Vector"
                      src="/img/bnpl/vector-3.svg"
                    />
                  </div>
                </div>

                <div
                  className="flex-1 [font-family:'Roboto',Helvetica] font-normal text-[#ffffff] text-[14.9px] leading-[20.9px] relative tracking-[0]">
                  Займы
                </div>
              </div>

              <div className="flex h-[44.92px] items-center gap-3 p-2.5 relative self-stretch w-full rounded-xl">
                <div className="relative w-5 h-5">
                  <div className="relative w-4 h-4 top-0.5 left-0.5">
                    <img
                      className="absolute w-px h-1.5 top-[11px] left-2"
                      alt="Vector"
                      src="/img/bnpl/vector-19.svg"
                    />

                    <img
                      className="absolute w-4 h-4 top-0 left-0"
                      alt="Vector"
                      src="/img/bnpl/vector-1.svg"
                    />

                    <img
                      className="absolute w-[5px] h-0.5 top-2 left-0"
                      alt="Vector"
                      src="/img/bnpl/vector-16.svg"
                    />
                  </div>
                </div>

                <div
                  className="flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                  Отчеты
                </div>
              </div>

              <div className="flex h-[44.92px] items-center gap-3 p-2.5 relative self-stretch w-full rounded-xl">
                <div className="relative w-5 h-5 mt-[-3878.67px] ml-[-10470.00px] bg-[100%_100%]">
                  <img
                    className="absolute w-1.5 h-1.5 top-[3px] left-[3px]"
                    alt="Vector"
                    src="/img/bnpl/vector-11.svg"
                  />

                  <img
                    className="absolute w-1.5 h-1.5 top-[3px] left-[11px]"
                    alt="Vector"
                    src="/img/bnpl/vector-11.svg"
                  />

                  <img
                    className="absolute w-1.5 h-1.5 top-[11px] left-[3px]"
                    alt="Vector"
                    src="/img/bnpl/vector-11.svg"
                  />

                  <img
                    className="absolute w-1.5 h-1.5 top-[11px] left-[11px]"
                    alt="Vector"
                    src="/img/bnpl/vector-11.svg"
                  />
                </div>

                <div
                  className="flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                  Продукты
                </div>
              </div>

              <div className="flex h-[44.92px] items-center gap-3 p-2.5 relative self-stretch w-full rounded-xl">
                <div className="relative w-5 h-5 mt-[-3927.59px] ml-[-10470.00px] bg-[100%_100%]">
                  <div className="relative w-[15px] h-4 top-0.5 left-[3px]">
                    <img
                      className="absolute w-1.5 h-1 top-3 left-1"
                      alt="Vector"
                      src="/img/bnpl/vector-21.svg"
                    />

                    <img
                      className="absolute w-[15px] h-3.5 top-0 left-0"
                      alt="Vector"
                      src="/img/bnpl/vector-15.svg"
                    />
                  </div>
                </div>

                <div
                  className="flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                  Уведомления
                </div>
              </div>

              <div className="flex h-[44.92px] items-center gap-3 p-2.5 relative self-stretch w-full rounded-xl">
                <div className="relative w-5 h-5">
                  <div className="relative w-4 h-[17px] top-px left-0.5">
                    <img
                      className="absolute w-[7px] h-[7px] top-[5px] left-1"
                      alt="Vector"
                      src="/img/bnpl/vector-11.svg"
                    />

                    <img
                      className="absolute w-4 h-[17px] top-0 left-0"
                      alt="Vector"
                      src="/img/bnpl/vector-20.svg"
                    />
                  </div>
                </div>

                <div
                  className="flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                  Настройки
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 p-6 relative flex-1 self-stretch grow">
            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <div
                className="relative w-12 h-12 rounded-3xl [background:url(/img/bnpl/frame-1948755022-1.png)_50%_50%_/_cover]" />

              <p
                className="w-fit [font-family:'Inter',Helvetica] font-semibold text-gray-90 text-xl leading-5 whitespace-nowrap relative tracking-[0]">
                <span className="text-[#9ea7bb] leading-6">Привет,</span>

                <span className="text-[#1c222f] leading-6"> Давид</span>
              </p>
            </div>

            <div className="flex flex-col items-start gap-[20.5px] relative self-stretch w-full flex-[0_0_auto]">
              <div
                className="items-start justify-end gap-[11.96px] p-[17.94px] self-stretch w-full flex-[0_0_auto] bg-[#ffffff] rounded-[11.96px] flex relative">
                <div className="flex flex-col items-center justify-center gap-[11.96px] relative flex-1 grow">
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className="relative w-fit mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[14.9px] tracking-[0] leading-[20.9px] whitespace-nowrap">
                      Рассрочка SD45234
                    </div>

                    <div
                      className="inline-flex items-center justify-center gap-2.5 px-1.5 py-[3px] relative flex-[0_0_auto] bg-green-50 rounded-xl">
                      <div
                        className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#ffffff] text-[10px] leading-[14px] whitespace-nowrap relative tracking-[0]">
                        Активный
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-[17.94px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex-col items-start gap-[1.49px] flex-1 grow flex relative">
                      <div
                        className="self-stretch mt-[-0.75px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                        Стоимость
                      </div>

                      <div
                        className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                        187,000 ₽
                      </div>
                    </div>

                    <div className="flex-col items-start gap-[1.49px] flex-1 grow flex relative">
                      <div
                        className="self-stretch mt-[-0.75px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                        Авансовый платеж
                      </div>

                      <div
                        className="self-stretch font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative [font-family:'Roboto',Helvetica] tracking-[0]">
                        14 500 ₽
                      </div>
                    </div>

                    <div className="flex-col items-start gap-[1.49px] flex-1 grow flex relative">
                      <div
                        className="self-stretch mt-[-0.75px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                        Срок
                      </div>

                      <div
                        className="self-stretch font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative [font-family:'Roboto',Helvetica] tracking-[0]">
                        10 месяцев
                      </div>
                    </div>

                    <div className="flex-col items-start gap-[1.49px] flex-1 grow flex relative">
                      <div
                        className="self-stretch mt-[-0.75px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[10.5px] leading-[14.9px] relative tracking-[0]">
                        Следующий платеж
                      </div>

                      <div
                        className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-[14.9px] leading-[20.9px] relative tracking-[0]">
                        2,500 ₽
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="items-start justify-end gap-[11.96px] p-[17.94px] self-stretch w-full flex-[0_0_auto] bg-[#ffffff] rounded-[11.96px] flex relative">
                <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                  <div className="flex gap-4 self-stretch w-full items-center justify-center relative flex-[0_0_auto]">
                    <div
                      className="flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#1c222f] text-base leading-6 relative tracking-[0]">
                      Детали
                    </div>
                  </div>

                  <div className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div
                          className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs leading-5 whitespace-nowrap relative tracking-[0]">
                          Стоимость
                        </div>

                        <div
                          className="w-fit mt-[-1.00px] font-normal text-[#55607a] text-xs leading-5 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                          85 950₽
                        </div>
                      </div>

                      <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Vector"
                        src="/img/bnpl/vector-140.svg"
                      />

                      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div
                          className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs leading-5 whitespace-nowrap relative tracking-[0]">
                          Процентная ставка
                        </div>

                        <div
                          className="[font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs leading-5 relative w-fit mt-[-1.00px] tracking-[0] whitespace-nowrap">
                          12%
                        </div>
                      </div>

                      <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Vector"
                        src="/img/bnpl/vector-140.svg"
                      />

                      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div
                          className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#7a86a2] text-xs leading-5 whitespace-nowrap relative tracking-[0]">
                          Срок
                        </div>

                        <div
                          className="w-fit mt-[-1.00px] font-normal text-[#55607a] text-xs leading-5 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                          10 месяцев
                        </div>
                      </div>

                      <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Vector"
                        src="/img/bnpl/vector-140.svg"
                      />

                      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div
                          className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs leading-5 whitespace-nowrap relative tracking-[0]">
                          Баланс счета
                        </div>

                        <div
                          className="w-fit mt-[-1.00px] font-normal text-[#55607a] text-xs leading-5 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                          2 500 ₽
                        </div>
                      </div>

                      <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Vector"
                        src="/img/bnpl/vector-140.svg"
                      />

                      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div
                          className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs leading-5 whitespace-nowrap relative tracking-[0]">
                          Просроченный основной долг
                        </div>

                        <div
                          className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs leading-5 whitespace-nowrap relative tracking-[0]">
                          0 ₽
                        </div>
                      </div>

                      <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Vector"
                        src="/img/bnpl/vector-140.svg"
                      />

                      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div
                          className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs leading-5 whitespace-nowrap relative tracking-[0]">
                          Просроченный платеж
                        </div>

                        <div
                          className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs leading-5 whitespace-nowrap relative tracking-[0]">
                          0 ₽
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div
                          className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs leading-5 whitespace-nowrap relative tracking-[0]">
                          Дата окончания рассрочки
                        </div>

                        <div
                          className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5 whitespace-nowrap">
                          20.09.2025
                        </div>
                      </div>

                      <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Vector"
                        src="/img/bnpl/vector-140.svg"
                      />

                      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div
                          className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs leading-5 whitespace-nowrap relative tracking-[0]">
                          Дата следующего платежа
                        </div>

                        <div
                          className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs tracking-[0] leading-5 whitespace-nowrap">
                          20.04.2025
                        </div>
                      </div>

                      <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Vector"
                        src="/img/bnpl/vector-140.svg"
                      />

                      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div
                          className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs leading-5 whitespace-nowrap relative tracking-[0]">
                          Наименование товара
                        </div>

                        <div
                          className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs leading-5 whitespace-nowrap relative tracking-[0]">
                          Наушники
                        </div>
                      </div>

                      <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Vector"
                        src="/img/bnpl/vector-140.svg"
                      />

                      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div
                          className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs leading-5 whitespace-nowrap relative tracking-[0]">
                          Заем
                        </div>

                        <div
                          className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#55607a] text-xs leading-5 whitespace-nowrap relative tracking-[0]">
                          Первый
                        </div>
                      </div>

                      <img
                        className="relative self-stretch w-full h-px mb-[-1.00px] object-cover"
                        alt="Vector"
                        src="/img/bnpl/vector-140.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Analytics />
      <Advantages />
      <Integrations />

      <div
        className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] rounded-3xl overflow-hidden">
        <div
          className="flex flex-col items-center justify-center p-6 relative flex-1 self-stretch grow rounded-3xl overflow-hidden">
          <div className="flex flex-col items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
            <div
              className="flex items-center gap-5 p-3 relative self-stretch w-full flex-[0_0_auto] bg-[#f9fafd] rounded-[32px]">
              <div
                className="relative self-stretch w-48 rounded-3xl [background:url(/img/bnpl/frame-1948755022-1.png)_50%_50%_/_cover]" />

              <div className="flex flex-col items-start gap-4 p-3 relative flex-1 grow">
                <div
                  className="w-[293px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#55607a] text-2xl leading-8 relative tracking-[0]">
                  Социальные параметры
                </div>

                <div className="flex flex-col w-[293px] items-start gap-2 relative flex-[0_0_auto]">
                  <div className="items-center gap-4 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative w-[34px] h-5 bg-[#00cb82] rounded-[100px] overflow-hidden">
                      <div className="relative w-4 h-4 top-0.5 left-4 bg-[#ffffff] rounded-lg" />
                    </div>

                    <div
                      className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-base tracking-[0] leading-6">
                      Персональная информация
                    </div>
                  </div>

                  <div className="items-center gap-4 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative w-[34px] h-5 bg-[#00cb82] rounded-[100px] overflow-hidden">
                      <div className="relative w-4 h-4 top-0.5 left-4 bg-[#ffffff] rounded-lg" />
                    </div>

                    <div
                      className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-base tracking-[0] leading-6">
                      Банк и адрес
                    </div>
                  </div>

                  <div className="items-center gap-4 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative w-[34px] h-5 bg-[#00cb82] rounded-[100px] overflow-hidden">
                      <div className="relative w-4 h-4 top-0.5 left-4 bg-[#ffffff] rounded-lg" />
                    </div>

                    <div
                      className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-base tracking-[0] leading-6">
                      Банк и адрес
                    </div>
                  </div>

                  <div className="items-center gap-4 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative w-[34px] h-5 bg-[#00cb82] rounded-[100px] overflow-hidden">
                      <div className="relative w-4 h-4 top-0.5 left-4 bg-[#ffffff] rounded-lg" />
                    </div>

                    <div
                      className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-base tracking-[0] leading-6">
                      Документы
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-6 h-6 mt-[-6708.00px] ml-[-9754.00px] bg-[100%_100%]">
              <div className="relative w-4 h-[18px] top-[3px] left-1">
                <img
                  className="absolute w-0.5 h-[18px] top-0 left-[7px]"
                  alt="Vector"
                  src="/img/bnpl/vector-26.svg"
                />

                <img
                  className="absolute w-4 h-[9px] top-2.5 left-0"
                  alt="Vector"
                  src="/img/bnpl/vector-28.svg"
                />
              </div>
            </div>

            <div
              className="flex items-center gap-8 p-6 relative self-stretch w-full flex-[0_0_auto] bg-[#f9fafd] rounded-[32px]">
              <div
                className="inline-flex gap-2.5 p-4 bg-[#ffffff] rounded-[100px] items-center justify-center relative flex-[0_0_auto]">
                <div className="relative w-6 h-6 mt-[-6988.00px] ml-[-9794.00px] bg-[100%_100%]">
                  <div className="relative w-5 h-5 top-0.5 left-0.5">
                    <img
                      className="absolute w-[17px] h-[17px] top-0 left-0"
                      alt="Vector"
                      src="/img/bnpl/vector-25.svg"
                    />

                    <img
                      className="absolute w-[7px] h-[7px] top-[13px] left-[13px]"
                      alt="Vector"
                      src="/img/bnpl/vector-29.svg"
                    />
                  </div>
                </div>
              </div>

              <div
                className="flex-1 [font-family:'Roboto',Helvetica] font-medium text-[#55607a] text-2xl leading-8 relative tracking-[0]">
                Проверка кредитной истории
              </div>
            </div>

            <div className="relative w-6 h-6 mt-[-6708.00px] ml-[-9754.00px] bg-[100%_100%]">
              <div className="relative w-4 h-[18px] top-[3px] left-1">
                <img
                  className="absolute w-0.5 h-[18px] top-0 left-[7px]"
                  alt="Vector"
                  src="/img/bnpl/vector-26.svg"
                />

                <img
                  className="absolute w-4 h-[9px] top-2.5 left-0"
                  alt="Vector"
                  src="/img/bnpl/vector-28.svg"
                />
              </div>
            </div>

            <div
              className="flex items-center gap-8 p-6 relative self-stretch w-full flex-[0_0_auto] bg-green-50 rounded-[32px]">
              <div
                className="inline-flex gap-2.5 p-4 bg-[#ffffff29] rounded-[100px] items-center justify-center relative flex-[0_0_auto]">
                <div className="relative w-6 h-6 mt-[-7116.00px] ml-[-9794.00px] bg-[100%_100%]">
                  <img
                    className="absolute w-[19px] h-3.5 top-1.5 left-[3px]"
                    alt="Vector"
                    src="/img/bnpl/vector-30.svg"
                  />
                </div>
              </div>

              <div
                className="flex-1 [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-2xl leading-8 relative tracking-[0]">
                Одобрение заявки
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-start justify-center gap-9 pl-12 pr-[68px] py-12 relative flex-1 grow rounded-3xl overflow-hidden">
          <p
            className="w-[480px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#1c222f] text-[40px] leading-[48px] relative tracking-[0]">
            Многофункциональный <br />
            бэк-офис для кредитных менеджеров
          </p>

          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Vector"
            src="/img/bnpl/vector-140.svg"
          />

          <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
            <div
              className="w-[500px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#1c222f] text-2xl leading-8 relative tracking-[0]">
              Автоматизированное принятие решений
            </div>

            <p
              className="w-[500px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
              Программное обеспечение Buy Now Pay Later устраняет ручные процессы,
              специальные запросы и бумажные следы. Получите единый плавный
              автоматизированный рабочий процесс, который отвечает потребностям
              заемщиков* и повышает операционную эффективность.
            </p>
          </div>
        </div>
      </div>

      <EmployeeWork />
      <Trust />
    </div>
  );
};
