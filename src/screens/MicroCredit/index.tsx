import Marquee from 'react-fast-marquee';

import { Check15 } from '../../components/ui/check15.tsx';
import { EmployeeWork } from '../../widgets/employe-work.tsx';
import { useFeedbackForm } from '../../widgets/feedback-form';
import { Trust } from '../../widgets/trust.tsx';
import { Integrations } from '../../widgets/integrations.tsx';
import { Analytics } from '../../widgets/analytics.tsx';
import { Advantages } from '../../widgets/advantages.tsx';

export const MicroCredit = () => {
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col w-[1440px] items-center gap-[136px] pt-8 pb-[136px] px-8 relative flex-[0_0_auto]">
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col h-[600px] items-start gap-20 p-12 relative self-stretch w-full bg-violet-50 rounded-[32px] overflow-hidden">
          <img
            className="absolute w-[1108px] h-[1060px] top-[-140px] left-[441px]"
            alt="Vector"
            src="/img/vector-1-5.svg"
          />

          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 relative flex-[0_0_auto] bg-[#ffffff14] rounded-[100px]">
              <div className="relative w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[#ffffff] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)]">
                О продукте
              </div>
            </div>

            <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 relative flex-[0_0_auto] bg-[#ffffff14] rounded-[100px]">
                <img
                  className="relative w-5 h-5"
                  alt="File text"
                  src="/img/filetext.svg"
                />

                <div className="relative w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[#ffffff] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)]">
                  Спецификация
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[624px] items-start justify-center gap-12 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
              <div className="relative w-[624px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-6xl tracking-[0] leading-[68px]">
                Микрофинансовое кредитование
              </div>

              <p className="relative w-[624px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffff99] text-xl tracking-[0] leading-7">
                Программа для автоматизации всех бизнес-процессов МФО онлайн и в
                точках продаж. Программа для автоматизации всех бизнес-процессов
                МФО онлайн и в точках продаж.
              </p>
            </div>

            <button
              onClick={onClick}
              className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-[#ffffff] rounded-[100px] items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
            >
              <div className="[font-family:'Roboto',Helvetica] text-gray-90 text-xl leading-7 relative w-fit mt-[-1.00px] font-normal tracking-[0] whitespace-nowrap">
                Демо-версия
              </div>
            </button>
          </div>

          <div className="flex w-[324px] absolute top-[142px] left-[786px] flex-col items-center justify-center gap-6 p-4 bg-[#ffffff] rounded-[32px]">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-5 pt-3 pb-4 px-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                  Оформить заявку
                </div>

                <div className="flex flex-col w-64 items-start gap-2 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-full h-3.5">
                    <div className="relative w-[261px] h-3 top-px left-[-3px]">
                      <img
                        className="absolute w-[260px] h-1 top-1 left-px"
                        alt="Vector"
                        src="/img/vector-136-1.svg"
                      />

                      <img
                        className="absolute w-[169px] h-1.5 top-[3px] left-0"
                        alt="Vector"
                        src="/img/vector-137.svg"
                      />

                      <div className="absolute w-3 h-3 top-0 left-[158px] bg-green-50 rounded-md shadow-[0px_4px_8px_#04ca8333]" />
                    </div>
                  </div>

                  <div className="relative self-stretch w-full h-6">
                    <div className="left-0 font-normal text-[#7a86a2] absolute -top-px [font-family:'Roboto',Helvetica] text-base tracking-[0] leading-6 whitespace-nowrap">
                      0
                    </div>

                    <div className="absolute -top-px left-[131px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                      122 000
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-64 items-start gap-2 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-full h-3.5">
                    <div className="relative w-[261px] h-3 top-px left-[-3px]">
                      <img
                        className="absolute w-[260px] h-1 top-1 left-px"
                        alt="Vector"
                        src="/img/vector-136.svg"
                      />

                      <img
                        className="absolute w-[95px] h-1.5 top-[3px] left-0"
                        alt="Vector"
                        src="/img/vector-137-2.svg"
                      />

                      <div className="absolute w-3 h-3 top-0 left-[86px] bg-green-50 rounded-md shadow-[0px_4px_8px_#04ca8333]" />
                    </div>
                  </div>

                  <div className="relative self-stretch w-full h-6">
                    <div className="left-0 font-normal text-[#7a86a2] absolute -top-px [font-family:'Roboto',Helvetica] text-base tracking-[0] leading-6 whitespace-nowrap">
                      0
                    </div>

                    <div className="left-20 font-medium text-gray-90 absolute -top-px [font-family:'Roboto',Helvetica] text-base tracking-[0] leading-6 whitespace-nowrap">
                      14
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 self-stretch w-full relative flex-[0_0_auto]">
                <div className="flex flex-col items-start px-4 py-3 relative flex-1 grow bg-[#f6f8ff] rounded-[20px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-base tracking-[0] leading-6 whitespace-nowrap">
                    Сумма
                  </div>

                  <div className="relative w-fit mr-[-2.33px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                    42 000₽
                  </div>
                </div>

                <div className="flex flex-col items-start px-4 py-3 relative flex-1 grow bg-[#f6f8ff] rounded-[20px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-base tracking-[0] leading-6 whitespace-nowrap">
                    Срок
                  </div>

                  <div className="relative w-fit mr-[-0.33px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                    14 дней
                  </div>
                </div>

                <div className="flex flex-col items-start px-4 py-3 relative flex-1 grow bg-[#f6f8ff] rounded-[20px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-base tracking-[0] leading-6 whitespace-nowrap">
                    Ставка
                  </div>

                  <div className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                    2.5%
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onClick}
              className="all-[unset] box-border flex h-12 gap-8 px-8 py-3 relative self-stretch w-full bg-gray-90 rounded-3xl items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
            >
              <div className="self-stretch w-[164px] mt-[-1.00px] font-medium text-[#ffffff] text-base text-center leading-6 whitespace-nowrap relative [font-family:'Roboto',Helvetica] tracking-[0]">
                Оформить займ
              </div>
            </button>
          </div>

          <img
            className="absolute w-[817px] h-[600px] top-0 left-[559px]"
            alt="Vector"
            src="/img/vector-3.svg"
          />

          <div className="inline-flex flex-col items-center justify-center gap-3 p-4 absolute top-[254px] left-[1062px] bg-[#ffffff] rounded-[32px]">
            <div className="inline-flex items-center gap-2.5 p-3 rounded-[100px] relative flex-[0_0_auto]">
              <div className="relative w-[184px] h-[184px]">
                <div className="relative h-[184px]">
                  <div className="absolute w-[184px] h-[184px] top-0 left-0">
                    <img
                      className="absolute w-[88px] h-[184px] top-0 left-0"
                      alt="Subtract"
                      src="/img/subtract-8.svg"
                    />

                    <img
                      className="absolute w-[88px] h-[108px] top-[76px] left-24"
                      alt="Subtract"
                      src="/img/subtract-7.svg"
                    />

                    <div className="inline-flex flex-col h-[62px] items-center gap-0.5 absolute top-[61px] left-8">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-sm tracking-[0] leading-5 whitespace-nowrap">
                        Вся сумма
                      </div>

                      <div className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[28px] text-center tracking-[0] leading-10 whitespace-nowrap">
                        122,000₽
                      </div>
                    </div>
                  </div>

                  <img
                    className="absolute w-[21px] h-[34px] top-[34px] left-[158px]"
                    alt="Subtract"
                    src="/img/subtract-9.svg"
                  />

                  <img
                    className="absolute w-[59px] h-[31px] top-0 left-24"
                    alt="Subtract"
                    src="/img/subtract-10.svg"
                  />
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-2.5 p-5 bg-[#f6f8ff] rounded-[20px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-2 h-2 bg-blue-50 rounded" />

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm tracking-[0] leading-5">
                  Текущее
                </div>

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right tracking-[0] leading-5">
                  48,456₽
                </div>
              </div>

              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-2 h-2 bg-green-50 rounded" />

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm tracking-[0] leading-5">
                  Основная
                </div>

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right tracking-[0] leading-5">
                  122,000₽
                </div>
              </div>

              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-2 h-2 bg-yellow-50 rounded" />

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm tracking-[0] leading-5">
                  Проценты
                </div>

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right tracking-[0] leading-5">
                  4,000₽
                </div>
              </div>

              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-2 h-2 bg-red-50 rounded" />

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm tracking-[0] leading-5">
                  Штраф
                </div>

                <div className="relative w-[72px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-sm text-right tracking-[0] leading-5">
                  2,700₽
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <Advantages/>

      <div className="relative w-[1376px] h-[652px]">
        <div className="flex w-[1472px] items-center gap-[68px] absolute top-0 left-0">
          <div className="flex flex-col w-[496px] items-start justify-center gap-8 relative">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl tracking-[0] leading-[60px]">
              Основные механизмы работы <br />с клиентами
            </p>

            <button className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-blue-50 rounded-[100px] items-center justify-center">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-xl tracking-[0] leading-7 whitespace-nowrap">
                Попробовать
              </div>
            </button>
          </div>

          <div className="inline-flex items-center gap-6 relative flex-[0_0_auto] mr-[-468.00px]">
            <div className="flex flex-col w-[442.67px] h-[560px] items-center gap-12 p-12 relative bg-[#f9fafd] rounded-3xl overflow-hidden">
              <img
                className="absolute w-[443px] h-[467px] top-0 left-0"
                alt="Vector"
                src="/img/vector-1-6.svg"
              />

              <div className="relative flex-1 self-stretch w-full grow">
                <div className="inline-flex relative top-[27px] left-10 flex-col items-center justify-center gap-6 p-4 bg-[#ffffff] rounded-[32px]">
                  <div className="flex flex-col w-[230px] items-start gap-5 pt-3 pb-0 px-4 relative flex-[0_0_auto]">
                    <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative self-stretch w-full h-3.5">
                        <div className="relative w-[203px] h-3 top-px left-[-3px]">
                          <img
                            className="absolute w-[202px] h-1 top-1 left-px"
                            alt="Vector"
                            src="/img/vector-136-1.svg"
                          />

                          <img
                            className="absolute w-[169px] h-1.5 top-[3px] left-0"
                            alt="Vector"
                            src="/img/vector-137.svg"
                          />

                          <div className="absolute w-3 h-3 top-0 left-[158px] bg-green-50 rounded-md shadow-[0px_4px_8px_#04ca8333]" />
                        </div>
                      </div>

                      <div className="relative self-stretch w-full h-6">
                        <div className="left-0 font-normal text-[#7a86a2] absolute -top-px [font-family:'Roboto',Helvetica] text-base tracking-[0] leading-6 whitespace-nowrap">
                          0
                        </div>

                        <div className="absolute -top-px left-[131px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                          122 000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
                  Подача заявок
                </div>

                <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl text-center tracking-[0] leading-7">
                  Клиент может самостоятельно пройти регистрацию и подать заявку
                  на займ через сайт, менеджер может сделать эти действия через
                  специальный интерфейс. Если клиент ушел со страницы он всегда
                  может продолжить заполнение заявки.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-[442.67px] h-[560px] items-center gap-12 p-12 relative bg-[#f9fafd] rounded-3xl overflow-hidden">
              <img
                className="absolute w-[443px] h-[467px] top-0 left-0"
                alt="Vector"
                src="/img/vector-1-7.svg"
              />

              <div className="relative flex-1 self-stretch w-full grow">
                <div className="relative w-[290px] h-24 top-[26px] left-7">
                  <div className="flex w-[235px] items-center justify-center gap-4 p-2 absolute top-7 left-7 bg-[#ffffff] rounded-[32px] opacity-[0.24]">
                    <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#fbab0014] rounded-[100px]">
                      <img
                        className="mt-[-1895.00px] ml-[-3703.00px] relative w-6 h-6"
                        alt="Bell"
                      />
                    </div>

                    <div className="relative flex-1 opacity-0 [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6">
                      Ваша заявка одобрена
                    </div>
                  </div>

                  <div className="flex w-[266px] items-center justify-center gap-4 p-2 absolute top-4 left-3 bg-[#ffffff] rounded-[32px] opacity-50">
                    <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#fbab0014] rounded-[100px]">
                      <img
                        className="relative w-6 h-6"
                        alt="Bell"
                        src="/img/bell.svg"
                      />
                    </div>

                    <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6">
                      Ваша заявка одобрена
                    </div>
                  </div>

                  <div className="flex w-[290px] items-center justify-center gap-4 p-2 absolute top-0 left-0 bg-[#ffffff] rounded-[32px]">
                    <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#fbab0014] rounded-[100px]">
                      <img
                        className="relative w-6 h-6"
                        alt="Bell"
                        src="/img/bell.svg"
                      />
                    </div>

                    <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6">
                      Ваша заявка одобрена
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
                  Автооповещение
                </div>

                <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl text-center tracking-[0] leading-7">
                  Автоматическое информирование клиента об одобрении/отказе,
                  наступлении срока погашения, операциях в личном кабинете и
                  других важных событиях по СМС и электронной почте.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-[442.67px] h-[560px] items-center gap-12 p-12 relative bg-[#f9fafd] rounded-3xl overflow-hidden">
              <img
                className="absolute w-[238px] h-[281px] -top-3.5 left-[102px]"
                alt="Vector"
                src="/img/vector-1-8.svg"
              />

              <div className="relative flex-1 self-stretch w-full grow">
                <div className="relative w-[290px] h-24 top-[26px] left-7">
                  <div className="flex w-[235px] items-center justify-center gap-4 p-2 absolute top-7 left-7 bg-[#ffffff] rounded-[32px] opacity-[0.24]">
                    <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#fbab0014] rounded-[100px]">
                      <img
                        className="mt-[-1895.00px] ml-[-4169.67px] relative w-6 h-6"
                        alt="Bell"
                      />
                    </div>

                    <div className="relative flex-1 opacity-0 [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6">
                      Ваша заявка одобрена
                    </div>
                  </div>

                  <div className="flex w-[266px] items-center justify-center gap-4 p-2 absolute top-4 left-3 bg-[#ffffff] rounded-[32px] opacity-50">
                    <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#fbab0014] rounded-[100px]">
                      <img
                        className="relative w-6 h-6"
                        alt="Bell"
                        src="/img/bell.svg"
                      />
                    </div>

                    <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6">
                      Ваша заявка одобрена
                    </div>
                  </div>

                  <div className="flex w-[290px] items-center justify-center gap-4 p-2 absolute top-0 left-0 bg-[#ffffff] rounded-[32px]">
                    <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#fbab0014] rounded-[100px]">
                      <img
                        className="relative w-6 h-6"
                        alt="Bell"
                        src="/img/bell.svg"
                      />
                    </div>

                    <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6">
                      Ваша заявка одобрена
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
                  Автооповещение
                </div>

                <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl text-center tracking-[0] leading-7">
                  Автоматическое информирование клиента об одобрении/отказе,
                  наступлении срока погашения, операциях в личном кабинете и
                  других важных событиях по СМС и электронной почте.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-4 p-1 absolute top-[596px] left-[724px] bg-[#f9fafd] rounded-[100px]">
          <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] bg-[#ffffff] rounded-[100px]">
            <img
              className="relative w-6 h-6"
              alt="Arrow left"
              src="/img/arrowleft.svg"
            />
          </div>

          <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] bg-[#ffffff] rounded-[100px]">
            <img
              className="relative w-6 h-6"
              alt="Arrow right"
              src="/img/arrowright.svg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[1376px] items-center justify-center gap-9 p-8 relative flex-[0_0_auto] bg-[#f9fafd] rounded-[32px] overflow-hidden">
        <img
          className="absolute w-[1204px] h-[1060px] top-[-115px] left-[339px]"
          alt="Vector"
          src="/img/vector-1.svg"
        />

        <div className="flex items-center gap-[88px] p-12 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[520px] items-start gap-8 relative">
            <div className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
              <img
                className="relative w-8 h-8"
                alt="User focus"
                src="/img/userfocus.svg"
              />
            </div>

            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                <div className="relative w-[520px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]">
                  Проверка заемщика
                </div>

                <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                  В программу включены интеграции с большинством сторонних
                  сервисов, а также наши собственные сервисы проверки
                  потенциального заемщика (физического или юридического лица):
                </p>
              </div>

              <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                    <Check15 className="!relative !w-4 !h-4" />
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    Антимошеннические сервисы
                  </div>
                </div>

                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                    <Check15 className="!relative !w-4 !h-4" />
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    Идентификация клиента
                  </div>
                </div>

                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                    <Check15 className="!relative !w-4 !h-4" />
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    Бюро кредитных историй
                  </div>
                </div>

                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                    <Check15 className="!relative !w-4 !h-4" />
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    Государственные сервисы
                  </div>
                </div>

                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                    <Check15 className="!relative !w-4 !h-4" />
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    Социальные сети
                  </div>
                </div>

                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                    <Check15 className="!relative !w-4 !h-4" />
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
            src="/img/vector-129.svg"
          />

          <div className="flex flex-col w-[520px] items-start justify-center gap-8 relative">
            <div className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
              <img
                className="relative w-8 h-8"
                alt="Credit card"
                src="/img/creditcard.svg"
              />
            </div>

            <div className="flex flex-col w-[520px] items-start gap-6 relative flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]">
                  Платежные системы
                </div>

                <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                  Интеграции с большинством платежных систем полностью
                  автоматизировать процесс приема и выдачи займа, а интеграция с
                  1С - учитывать даже те платежи, которые связаны только
                  расчетным счетом:
                </p>
              </div>

              <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                    <Check15 className="!relative !w-4 !h-4" />
                  </div>

                  <div className="text-gray-90 relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-xl tracking-[0] leading-7">
                    Выдача online
                  </div>
                </div>

                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                    <Check15 className="!relative !w-4 !h-4" />
                  </div>

                  <p className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    Погашение займа через личный кабинет
                  </p>
                </div>

                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                    <Check15 className="!relative !w-4 !h-4" />
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    Проверка статусов платежей
                  </div>
                </div>

                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                    <Check15 className="!relative !w-4 !h-4" />
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    Отмена платежей
                  </div>
                </div>

                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                    <Check15 className="!relative !w-4 !h-4" />
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    Работа с наличными
                  </div>
                </div>

                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                    <Check15 className="!relative !w-4 !h-4" />
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
            src="/img/vector-1-1.svg"
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

          <button
            onClick={onClick}
            className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-[#ffffff] rounded-[100px] items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
              Демонстрация
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[656px] items-center justify-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl tracking-[0] leading-[60px]">
            Управление займами
          </div>
        </div>

        <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-3xl overflow-hidden">
            <div className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#fbab0014] rounded-[100px]">
              <img
                className="relative w-8 h-8"
                alt="Pencil"
                src="/img/pencil.svg"
              />
            </div>

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                Редактирование условий
              </div>

              <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                Расчёт условий выдачи займа и при необходимости предложение
                альтернативных.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-3xl overflow-hidden">
            <div className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
              <img
                className="relative w-8 h-8"
                alt="Plus circle"
                src="/img/pluscircle.svg"
              />
            </div>

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                Создание и настройка
              </div>

              <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                Создание и редактирование кредитных продуктов, настройка ручных
                и автоматических действий.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-3xl overflow-hidden">
            <div className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#e6485014] rounded-[100px]">
              <img
                className="relative w-8 h-8"
                alt="Percent"
                src="/img/percent.svg"
              />
            </div>

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                Проценты и штрафы
              </div>

              <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                Автоматическое начисление процентов по займу и штрафов за
                нарушение сроков возврата.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Analytics />
      <Integrations />
      <EmployeeWork />

      <div className="flex items-center gap-20 px-0 py-20 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[432px] items-start gap-12 relative">
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl tracking-[0] leading-[60px]">
              Ролевая структура программного обеспечения
            </div>
          </div>

          <button
            onClick={onClick}
            className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-blue-50 rounded-[100px] items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-xl tracking-[0] leading-7 whitespace-nowrap">
              Демо-версия
            </div>
          </button>
        </div>

        <div className="flex items-start justify-center gap-6 relative flex-1 self-stretch grow">
          <div className="flex flex-col items-center justify-center gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-3xl overflow-hidden">
            <div className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
              <img
                className="relative w-7 h-7"
                alt="User"
                src="/img/user-4.svg"
              />
            </div>

            <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
              Личный кабинет клиента
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-3xl overflow-hidden">
            <div className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
              <img
                className="relative w-7 h-7"
                alt="Circles four"
                src="/img/circlesfour.svg"
              />
            </div>

            <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
              Мульткабинет сотрудника
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 p-10 relative flex-1 self-stretch grow bg-[#f9fafd] rounded-3xl overflow-hidden">
            <div className="inline-flex items-center justify-center gap-2.5 p-4 relative flex-[0_0_auto] bg-[#e6485014] rounded-[100px]">
              <img className="relative w-7 h-7" alt="Nut" src="/img/nut.svg" />
            </div>

            <div className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
              Кабинет супер- администратора
            </div>
          </div>
        </div>
      </div>
      <Trust />
    </div>
  );
};
