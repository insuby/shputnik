import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { RoutesPath } from '../../routes-path.tsx';
import { useFeedbackForm } from '../../widgets/feedback-form';

export const MainMobile = () => {
  const { setIsOpen } = useFeedbackForm();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <div
      className="relative flex flex-col items-start gap-[88px] bg-[linear-gradient(356deg,rgba(255,255,255,1)_0%,rgba(243,244,250,1)_100%)]"
      data-model-id="9181:497"
    >
      <div className="relative flex h-[917px] w-[412px] flex-col items-start">
        <button
          aria-label="Открыть меню"
          onClick={() => setIsMenuOpen(true)}
          className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full bg-gray-10"
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" y="0" width="20" height="2" rx="1" fill="#1c222f" />
            <rect x="0" y="6" width="20" height="2" rx="1" fill="#1c222f" />
            <rect x="0" y="12" width="20" height="2" rx="1" fill="#1c222f" />
          </svg>
        </button>
        <img
          className="relative w-[412px] flex-[0_0_auto]"
          alt="Header"
          src="https://c.animaapp.com/meg2uvv4WWYlvp/img/header.svg"
        />

        <div className="relative flex h-[853px] w-[411px] items-center gap-2.5 px-3 py-0">
          <div className="relative flex flex-1 grow flex-col items-center gap-[52px] self-stretch overflow-hidden rounded-[32px] bg-[#ffffff] px-4 py-9">
            <img
              className="absolute left-[-444px] top-[147px] h-[1060px] w-[1108px]"
              alt="Vector"
              src="https://c.animaapp.com/meg2uvv4WWYlvp/img/vector-1-6.svg"
            />

            <div className="w/full relative flex flex-[0_0_auto] flex-col items-center justify-center gap-6 self-stretch">
              <p className="relative mt-[-1.00px] self-stretch text-center text-4xl font-normal leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                <span className="font-medium leading-[44px] text-[#1c222f]">
                  Программное обеспечение для{' '}
                </span>

                <span className="font-medium leading-[44px] text-[#3573fc]">
                  автоматизации{' '}
                </span>

                <span className="font-medium leading-[44px] text-[#1c222f]">
                  кредитования
                </span>
              </p>

              <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#929cb3] [font-family:'Roboto',Helvetica]">
                Помогаем микрофинансовым организациям, банкам,
                fintech-стартапам, брокерам и другим финансовым институтам
                автоматизировать процесс выдачи займа или кредита, производить
                регулярные расчёты по кредитным продуктам, принимать платежи, а
                также эффективно выстраивать работу с клиентами на всех этапах.
              </p>
            </div>

            <img
              className="relative mb-[-36.00px] w-[335px] flex-[0_0_auto]"
              alt="Iphone pro max"
              src="https://c.animaapp.com/meg2uvv4WWYlvp/img/iphone-16-pro-max---3.png"
            />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white px-6 pb-10 pt-6">
          <div className="mb-6 flex items-center justify-between">
            <Link
              to={RoutesPath.MAIN}
              onClick={() => setIsMenuOpen(false)}
              className="h-[22px] w-28"
            >
              <div className="relative h-[23px] w-[170px]">
                <img
                  className="absolute left-0 top-0 size-full"
                  alt="Group"
                  src="/img/logo.png"
                />
              </div>
            </Link>
            <button
              aria-label="Закрыть меню"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-full bg-gray-10"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="#1c222f"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="space-y-8">
            <div className="space-y-3">
              <div className="text-base text-gray-40">Кредитование</div>
              <div className="divide-y divide-gray-10 rounded-2xl border border-[#F3F4F7]">
                <Link
                  to={RoutesPath.MICROCREDIT}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl bg-[#F9FBFF] p-4 hover:bg-[#F5F7FF]"
                >
                  <span className="flex items-center gap-3">
                    <img
                      className="size-5"
                      alt="icon"
                      src="/img/header/frame-84-2.svg"
                    />
                    <span className="text-gray-90">
                      Микрофинансовое кредитование
                    </span>
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 4L13 10L7 16"
                      stroke="#9FA7BC"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
                <Link
                  to={RoutesPath.BUSINESSCREDIT}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl p-4 hover:bg-[#F5F7FF]"
                >
                  <span className="flex items-center gap-3">
                    <img
                      className="size-5"
                      alt="icon"
                      src="/img/header/frame-84-10.svg"
                    />
                    <span className="text-gray-90">Кредитование бизнеса</span>
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 4L13 10L7 16"
                      stroke="#9FA7BC"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
                <Link
                  to={RoutesPath.BANKCREDIT}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl p-4 hover:bg-[#F5F7FF]"
                >
                  <span className="flex items-center gap-3">
                    <img
                      className="size-5"
                      alt="icon"
                      src="/img/header/frame-84-4.svg"
                    />
                    <span className="text-gray-90">
                      Банковское кредитование
                    </span>
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 4L13 10L7 16"
                      stroke="#9FA7BC"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
                <Link
                  to={RoutesPath.BNPL}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl p-4 hover:bg-[#F5F7FF]"
                >
                  <span className="flex items-center gap-3">
                    <img
                      className="size-5"
                      alt="icon"
                      src="/img/header/frame-84.svg"
                    />
                    <span className="text-gray-90">BNPL</span>
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 4L13 10L7 16"
                      stroke="#9FA7BC"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
                <Link
                  to={RoutesPath.AUTOCREDIT}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl p-4 hover:bg-[#F5F7FF]"
                >
                  <span className="flex items-center gap-3">
                    <img
                      className="size-5"
                      alt="icon"
                      src="/img/trust/frame-84-20.svg"
                    />
                    <span className="text-gray-90">Автокредитование</span>
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 4L13 10L7 16"
                      stroke="#9FA7BC"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
                <Link
                  to={RoutesPath.P2P}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl p-4 hover:bg-[#F5F7FF]"
                >
                  <span className="flex items-center gap-3">
                    <img
                      className="size-5"
                      alt="icon"
                      src="/img/trust/frame-84-7.svg"
                    />
                    <span className="text-gray-90">P2P-кредитование</span>
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 4L13 10L7 16"
                      stroke="#9FA7BC"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
                <Link
                  to={RoutesPath.ISLAMFINANCE}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl p-4 hover:bg-[#F5F7FF]"
                >
                  <span className="flex items-center gap-3">
                    <img
                      className="size-5"
                      alt="icon"
                      src="/img/trust/frame-84-1.svg"
                    />
                    <span className="text-gray-90">
                      Исламское финансирование
                    </span>
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 4L13 10L7 16"
                      stroke="#9FA7BC"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-base text-gray-40">
                Другое программное обеспечение
              </div>
              <div className="divide-y divide-gray-10 rounded-2xl border border-[#F3F4F7]">
                <Link
                  to={RoutesPath.DATAUNLOAD}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl p-4 hover:bg-[#F5F7FF]"
                >
                  <span className="flex items-center gap-3">
                    <img
                      className="size-5"
                      alt="icon"
                      src="/img/header/frame-84-8.svg"
                    />
                    <span className="text-gray-90">
                      Выгрузка данных в кредитные бюро
                    </span>
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 4L13 10L7 16"
                      stroke="#9FA7BC"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
                <Link
                  to={RoutesPath.FDATA}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl p-4 hover:bg-[#F5F7FF]"
                >
                  <span className="flex items-center gap-3">
                    <img
                      className="size-5"
                      alt="icon"
                      src="/img/header/frame-84-6.svg"
                    />
                    <span className="text-gray-90">
                      Модуль принятия решений
                    </span>
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 4L13 10L7 16"
                      stroke="#9FA7BC"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
                <div className="flex items-center justify-between p-4">
                  <span className="text-gray-90">Реконсиляция данных</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-base text-gray-40">Услуги</div>
              <div className="divide-y divide-gray-10 rounded-2xl border border-[#F3F4F7]">
                <Link
                  to={RoutesPath.DEVELOPMENT}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between p-4"
                >
                  <span className="text-gray-90">Разработка на заказ</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 4L13 10L7 16"
                      stroke="#9FA7BC"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}

      <div className="w/full relative flex flex-[0_0_auto] flex-col items-center gap-9 self-stretch p-4">
        <div className="w/full relative flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5 self-stretch">
          <div className="relative mt-[-1.00px] self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
            специализируемся на
          </div>

          <p className="relative self-stretch text-center text-4xl font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            <span className="leading-[44px] text-[#1c222f]">
              программном обеспечении
              <br />
            </span>

            <span className="leading-[44px] text-[#9ea7bb]">
              {' '}
              для кредитования
            </span>
          </p>
        </div>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
          <div className="relative h-[420px] w-full self-stretch overflow-hidden rounded-[32px] bg-[#f9fafc]">
            <div className="relative h-[513px] w-[593px]">
              <img
                className="absolute left-[97px] top-[49px] h-[464px] w-[496px]"
                alt="Vector"
                src="https://c.animaapp.com/meg2uvv4WWYlvp/img/vector-1.svg"
              />

              <div className="absolute left-[23px] top-[47px] flex h-[261px] w-[220px] flex-col items-center justify-center gap-[16.28px] rounded-[21.71px] bg-white p-[10.86px]">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[5.43px] self-stretch">
                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[13.57px] self-stretch px-[10.86px] pb-[10.86px] pt-[8.14px]">
                    <div className="relative mt-[-0.68px] self-stretch text-[16.3px] font-medium leading-[21.7px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      Оформить заявку
                    </div>

                    <div className="relative mr-[-0.11px] flex w-[173.69px] flex-[0_0_auto] flex-col items-start gap-[5.43px]">
                      <img
                        className="relative ml-[-2.04px] mr-[-1.36px] mt-[-2.04px] h-[19px] w-full self-stretch"
                        alt="Frame"
                        src="https://c.animaapp.com/meg2uvv4WWYlvp/img/frame-83-2.svg"
                      />

                      <div className="relative h-[16.28px] w-full self-stretch">
                        <div className="absolute -top-px left-0 whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          0
                        </div>

                        <div className="absolute -top-px left-[89px] whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          122 000
                        </div>
                      </div>
                    </div>

                    <div className="relative mr-[-0.11px] flex w-[173.69px] flex-[0_0_auto] flex-col items-start gap-[5.43px]">
                      <img
                        className="relative ml-[-2.04px] mr-[-1.36px] mt-[-2.04px] h-[19px] w-full self-stretch"
                        alt="Frame"
                        src="https://c.animaapp.com/meg2uvv4WWYlvp/img/frame-83-3.svg"
                      />

                      <div className="relative h-[16.28px] w-full self-stretch">
                        <div className="absolute -top-px left-0 whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                          0
                        </div>

                        <div className="absolute -top-px left-[54px] whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          14
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-[5.43px] self-stretch">
                    <div className="relative flex flex-1 grow flex-col items-start rounded-[13.57px] bg-[#f6f8ff] px-[10.86px] py-[8.14px]">
                      <div className="relative mt-[-0.68px] w-fit whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        Сумма
                      </div>

                      <div className="relative mr-[-2.23px] w-fit whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        42 000₽
                      </div>
                    </div>

                    <div className="relative flex flex-1 grow flex-col items-start rounded-[13.57px] bg-[#f6f8ff] px-[10.86px] py-[8.14px]">
                      <div className="relative mt-[-0.68px] w-fit whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        Срок
                      </div>

                      <div className="relative mr-[-0.23px] w-fit whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        14 дней
                      </div>
                    </div>

                    <div className="relative flex flex-1 grow flex-col items-start rounded-[13.57px] bg-[#f6f8ff] px-[10.86px] py-[8.14px]">
                      <div className="relative mt-[-0.68px] w-fit whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        Ставка
                      </div>

                      <div className="relative w-fit whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        2.5%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex h-[32.57px] w-full items-center justify-center gap-[21.71px] self-stretch rounded-[16.28px] bg-gray-90 px-[21.71px] py-[8.14px]">
                  <div className="relative mt-[-0.68px] w-[111.27px] self-stretch whitespace-nowrap text-center text-[10.9px] font-medium leading-[16.3px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
                    Оформить займ
                  </div>
                </div>
              </div>

              <img
                className="absolute left-0 top-0 h-[420px] w-[380px]"
                alt="Vector"
                src="https://c.animaapp.com/meg2uvv4WWYlvp/img/vector-3-1.svg"
              />

              <div className="absolute left-[185px] top-[97px] flex h-[277px] w-[173px] flex-col items-center justify-center gap-[8.14px] rounded-[21.71px] bg-white p-[10.86px]">
                <div className="relative mt-[-0.24px] inline-flex flex-[0_0_auto] items-center gap-[6.78px] rounded-[67.85px] p-[8.14px]">
                  <div className="relative size-[124.84px]">
                    <div className="relative size-[125px]">
                      <div className="absolute left-0 top-0 size-[125px]">
                        <img
                          className="absolute left-0 top-0 h-[125px] w-[60px]"
                          alt="Subtract"
                          src="https://c.animaapp.com/meg2uvv4WWYlvp/img/subtract.svg"
                        />

                        <img
                          className="absolute left-[65px] top-[51px] h-[74px] w-[60px]"
                          alt="Subtract"
                          src="https://c.animaapp.com/meg2uvv4WWYlvp/img/subtract-3.svg"
                        />

                        <div className="absolute left-[22px] top-[41px] inline-flex h-[42px] flex-col items-center gap-[1.36px]">
                          <div className="relative mt-[-0.68px] w-fit whitespace-nowrap text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                            Вся сумма
                          </div>

                          <div className="relative mb-[-0.45px] w-fit whitespace-nowrap text-center text-[19px] font-medium leading-[27.1px] tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                            122,000₽
                          </div>
                        </div>
                      </div>

                      <img
                        className="absolute left-[107px] top-[23px] h-[23px] w-[15px]"
                        alt="Subtract"
                        src="https://c.animaapp.com/meg2uvv4WWYlvp/img/subtract-2.svg"
                      />

                      <img
                        className="absolute left-[65px] top-0 h-[21px] w-10"
                        alt="Subtract"
                        src="https://c.animaapp.com/meg2uvv4WWYlvp/img/subtract-1.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[6.78px] rounded-[13.57px] bg-[#f6f8ff] p-[13.57px]">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[8.14px]">
                    <div className="relative size-[5.43px] rounded-[2.71px] bg-blue-50" />

                    <div className="relative mt-[-0.68px] w-[48.85px] text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      Текущее
                    </div>

                    <div className="relative mt-[-0.68px] w-[48.85px] text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      48,456₽
                    </div>
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[8.14px]">
                    <div className="relative size-[5.43px] rounded-[2.71px] bg-green-50" />

                    <div className="relative mt-[-0.68px] w-[48.85px] text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      Основная
                    </div>

                    <div className="relative mt-[-0.68px] w-[48.85px] text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      122,000₽
                    </div>
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[8.14px]">
                    <div className="relative size-[5.43px] rounded-[2.71px] bg-yellow-50" />

                    <div className="relative mt-[-0.68px] w-[48.85px] text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      Проценты
                    </div>

                    <div className="relative mt-[-0.68px] w-[48.85px] text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      4,000₽
                    </div>
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[8.14px]">
                    <div className="relative size-[5.43px] rounded-[2.71px] bg-red-50" />

                    <div className="relative mt-[-0.68px] w-[48.85px] text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      Штраф
                    </div>

                    <div className="relative mt-[-0.68px] w-[48.85px] text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      2,700₽
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafc] p-8">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
              <p className="relative mt-[-1.00px] self-stretch text-[28px] font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                <span className="font-medium leading-9 text-[#1c222f]">
                  Микрофинансовое
                  <br />
                  кредитование
                </span>
              </p>

              <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                Полный цикл автоматизации микрофинансового кредитования — от
                заявки до взыскания, с возможностью настройки сценариев и
                процессов под требования организации, включая полную
                цифровизацию всех этапов без ручного труда и с учётом
                регуляторных стандартов
              </p>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]">
                Подробнее
              </div>

              <img
                className="relative size-12"
                alt="Caret right"
                src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-9 self-stretch p-4">
        <div className="relative mt-[-1.00px] self-stretch text-4xl font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
          Классическое кредитование
        </div>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-4 self-stretch">
          <div className="relative h-[420px] w-full self-stretch overflow-hidden rounded-[32px] bg-blue-50">
            <div className="absolute left-[-222px] top-[-255px] h-[904px] w-[1114px]">
              <img
                className="absolute left-0 top-[333px] h-[571px] w-[611px]"
                alt="Vector"
                src="https://c.animaapp.com/meg2uvv4WWYlvp/img/vector-1-3.svg"
              />

              <img
                className="absolute left-[398px] top-0 h-[682px] w-[716px]"
                alt="Vector"
                src="https://c.animaapp.com/meg2uvv4WWYlvp/img/vector-4-1.svg"
              />

              <div className="absolute left-[246px] top-[279px] inline-flex items-center overflow-hidden rounded-[17.55px_17.55px_0px_0px] bg-[#f6f8fd]">
                <div className="relative flex w-[289px] flex-col items-start gap-[17.55px] bg-[#ffffff] p-[21.94px]">
                  <div className="relative mt-[-0.55px] self-stretch text-[17.5px] font-medium leading-[21.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Калькулятор
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-center gap-[8.77px] self-stretch rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                    <div className="relative flex flex-1 grow flex-col items-start gap-[1.1px]">
                      <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                        Дилер
                      </div>

                      <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        Макс Моторс
                      </div>
                    </div>

                    <img
                      className="relative size-[13.16px]"
                      alt="Caret right"
                      src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright-1.svg"
                    />
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[8.77px]">
                    <div className="relative inline-flex flex-[0_0_auto] items-start gap-[6.58px]">
                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[5.48px] rounded-[54.84px] bg-gray-90 px-[10.97px] py-[5.48px]">
                        <div className="relative mt-[-0.55px] w-fit whitespace-nowrap text-[11px] font-normal leading-[15.4px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
                          Новая
                        </div>
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[5.48px] rounded-[54.84px] bg-[#f7f9ff] px-[10.97px] py-[5.48px]">
                        <div className="relative mt-[-0.55px] w-fit whitespace-nowrap text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          Подержанная
                        </div>
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] items-start gap-[6.58px]">
                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[5.48px] rounded-[54.84px] bg-[#f7f9ff] px-[10.97px] py-[5.48px]">
                        <div className="relative mt-[-0.55px] w-fit whitespace-nowrap text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          С залогом
                        </div>
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[5.48px] rounded-[54.84px] bg-gray-90 px-[10.97px] py-[5.48px]">
                        <div className="relative mt-[-0.55px] w-fit whitespace-nowrap text-[11px] font-normal leading-[15.4px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
                          Без залога
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-[10.97px] self-stretch">
                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          Марка
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          Audi
                        </div>
                      </div>

                      <img
                        className="relative size-[13.16px]"
                        alt="Caret right"
                        src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright-1.svg"
                      />
                    </div>

                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          Модель
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          A7 Sportback
                        </div>
                      </div>

                      <img
                        className="relative size-[13.16px]"
                        alt="Caret right"
                        src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright-1.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-[10.97px] self-stretch">
                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          Год выпуска
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          2004
                        </div>
                      </div>

                      <img
                        className="relative size-[13.16px]"
                        alt="Caret right"
                        src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright-1.svg"
                      />
                    </div>

                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          Первый взнос (руб.)
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          150 000
                        </div>
                      </div>

                      <img
                        className="relative size-[13.16px]"
                        alt="Caret right"
                        src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright-1.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-[10.97px] self-stretch">
                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          Срок (месяцы)
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          24
                        </div>
                      </div>

                      <img
                        className="relative size-[13.16px]"
                        alt="Caret right"
                        src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright-1.svg"
                      />
                    </div>

                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px] opacity-0">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          Первый взнос (руб.)
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          150 000
                        </div>
                      </div>

                      <img
                        className="relative ml-[-962.76px] mt-[-3094.74px] size-[13.16px]"
                        alt="Caret right"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex w-[289px] flex-col items-start gap-[17.55px] self-stretch p-[21.94px]">
                  <div className="relative mt-[-0.55px] self-stretch text-[17.5px] font-medium leading-[21.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Выберите условия
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[15.04px]">
                    <div className="relative mx-[-1.10px] mt-[-1.10px] flex w-[247.32px] flex-[0_0_auto] items-start justify-end gap-[8.77px] rounded-[8.77px] border-[1.1px] border-solid border-[#3573fc] bg-white p-[13.16px]">
                      <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[8.77px] self-stretch">
                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[5.48px] self-stretch">
                          <div className="relative mt-[-0.55px] flex-1 text-[11px] font-medium leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            Ваши условия
                          </div>

                          <img
                            className="relative ml-[-1128.10px] mt-[-2830.65px] size-[15.35px]"
                            alt="Check"
                            src="https://c.animaapp.com/meg2uvv4WWYlvp/img/check.svg"
                          />
                        </div>

                        <div className="relative flex w-full flex-[0_0_auto] items-start gap-[13.16px] self-stretch">
                          <div className="relative flex flex-1 grow flex-col items-start gap-[1.1px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              Ежемесячный платеж
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              187, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-[66.9px] flex-col items-start gap-[1.1px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              Сумма
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              2, 560, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-[43.87px] flex-col items-start gap-[1.1px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              Ставка
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              3,5%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-[245.13px] flex-[0_0_auto] items-start justify-end gap-[8.77px] rounded-[8.77px] bg-white p-[13.16px]">
                      <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[8.77px]">
                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[5.48px] self-stretch">
                          <div className="relative mt-[-0.55px] flex-1 text-[11px] font-medium leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            Увеличенный первоначальный взнос
                          </div>
                        </div>

                        <div className="relative flex w-full flex-[0_0_auto] items-start gap-[13.16px] self-stretch">
                          <div className="relative flex flex-1 grow flex-col items-start gap-[1.1px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              Ежемесячный платеж
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              166, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-[66.9px] flex-col items-start gap-[1.1px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              Сумма
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              2, 450, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-[43.87px] flex-col items-start gap-[1.1px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              Ставка
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-[#00b235] [font-family:'Roboto',Helvetica]">
                              3,2%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-[245.13px] flex-[0_0_auto] items-start justify-end gap-[8.77px] rounded-[8.77px] bg-white p-[13.16px]">
                      <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[8.77px]">
                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[5.48px] self-stretch">
                          <div className="relative mt-[-0.55px] flex-1 text-[11px] font-medium leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            Увеличенный срок
                          </div>
                        </div>

                        <div className="relative flex w-full flex-[0_0_auto] items-start gap-[13.16px] self-stretch">
                          <div className="relative flex flex-1 grow flex-col items-start gap-[1.1px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              Ежемесячный платеж
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              96, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-[66.9px] flex-col items-start gap-[1.1px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              Сумма
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              2, 640, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-[43.87px] flex-col items-start gap-[1.1px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              Ставка
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              3,6%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="absolute left-[-780px] top-[-2732px] h-[347px] w-[411px]"
              alt="Vector"
              src="https://c.animaapp.com/meg2uvv4WWYlvp/img/vector-3.svg"
            />
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-4 self-stretch">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[32px] bg-[#f6f7f9] p-8">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Кредитование бизнеса
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  ПО для кредитования бизнеса автоматизирует цикл работы с
                  корпоративными, средними и малыми заемщиками
                </p>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4">
                <div
                  onClick={onClick}
                  className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]"
                >
                  Подробнее
                </div>

                <img
                  className="relative size-12"
                  alt="Caret right"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright.svg"
                />
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[32px] bg-[#f6f7f9] p-8">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Банковское кредитование
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  Готовое решение для автоматизации процессов выдачи и
                  сопровождения займов частным и корпоративным клиентам
                </p>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4">
                <div
                  onClick={onClick}
                  className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]"
                >
                  Подробнее
                </div>

                <img
                  className="relative size-12"
                  alt="Caret right"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright.svg"
                />
              </div>
            </div>

            <div className="relative mx-[-2.00px] mb-[-2.00px] flex w-full flex-[0_0_auto] flex-col items-center gap-8 self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-[#3573fc] bg-[#f5f7ff] p-8">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Автокредитование
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  Полное управление всеми процессами автокредитования и выдачи
                  займов под залог автомобилей
                </p>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4">
                <div
                  onClick={onClick}
                  className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]"
                >
                  Подробнее
                </div>

                <img
                  className="relative size-12"
                  alt="Caret right"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-9 self-stretch p-4">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2.5 self-stretch rounded-[40px] bg-[#3573fc1f] p-3">
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-2.5 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-8">
            <img
              className="absolute left-14 top-[-306px] h-[590px] w-[625px]"
              alt="Vector"
              src="https://c.animaapp.com/meg2uvv4WWYlvp/img/vector-1-5.svg"
            />

            <img
              className="absolute left-[-792px] top-[-6021px] h-[498px] w-[589px]"
              alt="Vector"
              src="https://c.animaapp.com/meg2uvv4WWYlvp/img/vector-2.svg"
            />

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-8 self-stretch">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-4xl font-medium leading-[44px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
                  Попробуйте, <br />
                  вам понравится!
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-white opacity-60 [font-family:'Roboto',Helvetica]">
                  Оставьте заявку на демонстрацию — мы покажем, как работает
                  платформа и ответим на ваши вопросы
                </p>
              </div>

              <button className="all-[unset] relative box-border flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white px-8 py-4">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Связаться с нами
                </div>
              </button>
            </div>

            <div className="absolute left-[789px] top-12 flex w-[328px] flex-col items-start gap-3 rounded-[32px] bg-[#ffffff] p-6">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                Калькулятор
              </div>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch overflow-hidden rounded-2xl bg-[#f2f5ff] p-4">
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                      Сумма
                    </div>

                    <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      160 000 ₽
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                    <img
                      className="relative ml-[-1621.00px] mt-[-6201.00px] h-3.5 w-full self-stretch"
                      alt="Frame"
                      src="https://c.animaapp.com/meg2uvv4WWYlvp/img/frame-83.svg"
                    />

                    <div className="relative flex h-4 w-full items-start justify-between self-stretch">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                        10 000 ₽
                      </div>

                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                        200 000 ₽
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch overflow-hidden rounded-2xl bg-[#f2f5ff] p-4">
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xs font-normal leading-4 tracking-normal text-gray-70 opacity-50 [font-family:'Roboto',Helvetica]">
                      Период
                    </div>

                    <div className="relative w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      8 месяцев
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-1 self-stretch">
                    <img
                      className="relative ml-[-1621.00px] mt-[-6327.00px] h-3.5 w-full self-stretch"
                      alt="Frame"
                      src="https://c.animaapp.com/meg2uvv4WWYlvp/img/frame-83-1.svg"
                    />
                  </div>
                </div>
              </div>

              <button className="all-[unset] relative box-border flex h-12 w-full items-center justify-center gap-8 self-stretch rounded-3xl bg-gray-90 px-8 py-3">
                <div className="relative mt-[-1.00px] w-[164px] self-stretch whitespace-nowrap text-center text-base font-medium leading-6 tracking-normal text-white [font-family:'Roboto',Helvetica]">
                  Оформить
                </div>
              </button>
            </div>

            <img
              className="absolute left-[-792px] top-[-6021px] h-[282px] w-[334px]"
              alt="Vector"
              src="https://c.animaapp.com/meg2uvv4WWYlvp/img/vector-4-2.svg"
            />

            <div className="absolute left-[1044px] top-[90px] inline-flex flex-col items-center justify-center gap-3 rounded-[32px_32px_0px_0px] bg-white p-4">
              <div className="relative size-[212px] rounded-[100px]">
                <div className="absolute left-[7px] top-[7px] size-[198px] rounded-[99px]">
                  <div className="absolute left-10 top-[68px] inline-flex h-[62px] flex-col items-center gap-0.5">
                    <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                      Текущий остаток
                    </div>

                    <div className="relative w-fit whitespace-nowrap text-center text-[28px] font-medium leading-10 tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                      86,000₽
                    </div>
                  </div>

                  <div className="absolute left-0 top-0 size-[198px] rounded-[99px] border-[10px] border-solid border-neutral-50" />
                </div>

                <img
                  className="absolute left-[-1854px] top-[-6129px] size-[188px]"
                  alt="Ellipse"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/ellipse-32-1.svg"
                />
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch rounded-[20px] bg-[#f6f8ff] px-4 py-3">
                <div className="relative w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                  Сумма займа
                </div>

                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  122, 000₽
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-9 self-stretch p-4">
        <p className="relative mt-[-1.00px] self-stretch text-4xl font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
          <span className="text-[#1c222f]">Другое </span>

          <span className="text-[#9ea7bb]">программное обеспечение</span>
        </p>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-4 self-stretch">
          <img
            className="relative h-[420px] w-full self-stretch"
            alt="Frame"
            src="https://c.animaapp.com/meg2uvv4WWYlvp/img/frame-32.svg"
          />

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-4 self-stretch">
            <div className="relative mx-[-2.00px] mt-[-2.00px] flex w-full flex-[0_0_auto] flex-col items-center gap-8 self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-[#3573fc] bg-[#f5f7ff] p-8">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <p className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Выгрузка данных в кредитные бюро
                </p>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  Готовое решение для передачи данных в кредитные бюро. Подходит
                  для МФО, лизинговых, коллекторских и других компаний,
                  обязанных направлять информацию в соответствии с требованиями
                  законодательства
                </p>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4">
                <div
                  onClick={onClick}
                  className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]"
                >
                  Подробнее
                </div>

                <img
                  className="relative size-12"
                  alt="Caret right"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright.svg"
                />
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[32px] bg-[#f6f7f9] p-8">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  Настраиваемый модуль принятия решений
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  Гибкое ПО для скоринга и проверки физлиц и юрлиц — с
                  подключением десятков внешних источников для верификации и
                  обогащения данных
                </p>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4">
                <div
                  onClick={onClick}
                  className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]"
                >
                  Подробнее
                </div>

                <img
                  className="relative size-12"
                  alt="Caret right"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright.svg"
                />
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[32px] bg-[#f6f7f9] p-8">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  F-datа
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  Разновидность потребительского кредита для приобретения
                  автотранспортных средств
                </p>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4">
                <div
                  onClick={onClick}
                  className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]"
                >
                  Подробнее
                </div>

                <img
                  className="relative size-12"
                  alt="Caret right"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2.5 self-stretch bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(232,236,246,1)_64%)] p-4">
        <footer className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-10 self-stretch overflow-hidden rounded-[32px] bg-white p-8">
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-10 self-stretch">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-12 self-stretch">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                <img
                  className="relative mt-[-0.37px] h-[22.74px] w-28"
                  alt="Logo"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/logo.svg"
                />

                <div className="relative w-[233px] text-base font-normal leading-6 tracking-normal text-gray-90 opacity-40 [font-family:'Roboto',Helvetica]">
                  Программное обеспечение
                  <br />и разработка современных
                  <br />
                  fintech-решений
                </div>
              </div>
            </div>

            <div className="relative flex w-[284px] flex-[0_0_auto] flex-col items-start gap-8">
              <div className="relative flex h-[132px] w-full flex-col items-center justify-center gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-base font-normal leading-7 tracking-normal text-gray-90 opacity-40 [font-family:'Roboto',Helvetica]">
                  Контакты
                </div>

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                  <div className="relative mt-[-1.00px] w-[233px] text-xl font-bold leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    +7 (495) 006-21-57
                  </div>

                  <p className="relative self-stretch text-base font-normal leading-6 tracking-normal text-gray-90 opacity-40 [font-family:'Roboto',Helvetica]">
                    183038, Мурманск,
                    <br />
                    улица Октябрьская, 2а, офис 2
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="relative w-[233px] text-base font-normal leading-6 tracking-normal text-gray-90 opacity-40 [font-family:'Roboto',Helvetica]">
            © 2022 Sputnik – <br />
            Автоматизация бизнес-процессов
          </p>
        </footer>
      </div>
    </div>
  );
};
