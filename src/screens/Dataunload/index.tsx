export const Dataunload = () => {
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);

  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref6, { once: true, margin: '-100px' });
  const inView7 = useInView(ref7, { once: true, margin: '-100px' });
  const inView8 = useInView(ref8, { once: true, margin: '-100px' });
  const inView9 = useInView(ref9, { once: true, margin: '-100px' });
  const inView10 = useInView(ref10, { once: true, margin: '-100px' });

  return (
    <div className="flex flex-col w-[1440px] items-center gap-[136px] pt-8 pb-[136px] px-8 relative flex-[0_0_auto]">
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col h-[600px] items-start gap-20 p-12 relative self-stretch w-full bg-violet-50 rounded-[32px] overflow-hidden">
          <img
            className="absolute w-[1108px] h-[1060px] top-[-140px] left-[441px]"
            alt="Vector"
            src="https://c.animaapp.com/mdvh9jkbMPb4br/img/vector-1-6.svg"
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
                  src="https://c.animaapp.com/mdvh9jkbMPb4br/img/filetext.svg"
                />

                <div className="relative w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[#ffffff] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)]">
                  Спецификация
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[624px] items-start justify-center gap-12 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
              <p className="relative w-[624px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-white text-6xl tracking-[0] leading-[68px]">
                Выгрузка данных <br />в кредитные бюро
              </p>

              <p className="relative w-[624px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffff99] text-xl tracking-[0] leading-7">
                Программа для конвертации и выгрузки данных в кредитные бюро.
                Программа для конвертации и выгрузки данных в кредитные бюро.
              </p>
            </div>

            <button className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-white rounded-[100px] items-center justify-center">
              <div className="w-fit mt-[-1.00px] whitespace-nowrap relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                Связаться с нами
              </div>
            </button>
          </div>

          <img
            className="absolute w-[817px] h-[600px] top-0 left-[559px]"
            alt="Vector"
            src="https://c.animaapp.com/mdvh9jkbMPb4br/img/vector-3.svg"
          />

          <div className="absolute w-[540px] h-[462px] top-20 left-[768px]">
            <div className="relative w-[606px] h-[527px] top-[-65px] left-[-33px]">
              <div className="flex w-[372px] items-center gap-4 pl-4 pr-6 py-4 absolute top-[152px] left-[31px] bg-white rounded-[32px]">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-18-5.svg"
                />

                <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
                    Загруженный файл.pdf
                  </div>

                  <div className="w-[129px] font-normal text-gray-40 text-sm leading-5 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                    450 KB
                  </div>
                </div>
              </div>

              <img
                className="absolute w-[606px] h-[503px] top-0 left-0"
                alt="Vector"
                src="https://c.animaapp.com/mdvh9jkbMPb4br/img/vector-5.svg"
              />

              <div className="flex w-[400px] items-start justify-end gap-[14.04px] p-8 absolute top-[219px] left-[173px] bg-white rounded-[32px]">
                <div className="flex flex-col items-center justify-center gap-4 relative flex-1 grow">
                  <div className="relative self-stretch mt-[-0.88px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-sm tracking-[0] leading-5">
                    Кредитные бюро
                  </div>

                  <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
                    <div className="flex w-[336px] h-16 items-center justify-center gap-5 p-4 relative bg-[#f9fafd] rounded-2xl">
                      <img
                        className="relative w-8 h-8"
                        alt="Clip path group"
                        src="https://c.animaapp.com/mdvh9jkbMPb4br/img/clip-path-group.png"
                      />

                      <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                        Скоринг бюро
                      </div>

                      <img
                        className="relative flex-[0_0_auto]"
                        alt="Frame"
                        src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-18-1.svg"
                      />
                    </div>

                    <div className="flex w-[336px] h-16 items-center justify-center gap-5 p-4 relative bg-[#f9fafd] rounded-2xl">
                      <img
                        className="relative w-8 h-8"
                        alt="Okb logo"
                        src="https://c.animaapp.com/mdvh9jkbMPb4br/img/okb-logo-1.png"
                      />

                      <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                        ОКБ
                      </div>

                      <img
                        className="relative flex-[0_0_auto]"
                        alt="Frame"
                        src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-18-1.svg"
                      />
                    </div>

                    <div className="flex w-[336px] h-16 items-center justify-center gap-5 p-4 relative bg-[#f9fafd] rounded-2xl">
                      <img
                        className="relative w-8 h-8"
                        alt="Frame"
                        src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-1948755067.svg"
                      />

                      <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                        НБКИ
                      </div>

                      <img
                        className="relative w-8 h-8"
                        alt="Frame"
                        src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-1948755106.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[656px] items-center justify-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center tracking-[0] leading-[60px]">
            Преимущества
          </div>

          <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl text-center tracking-[0] leading-7">
            Система автоматически сконвертирует данные для отправки в кредитные
            бюро с учетом актуальных требований.
          </p>
        </div>

        <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-3xl overflow-hidden">
            <img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-18-3.svg"
            />

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                Единый формат обмена
              </div>

              <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                Загружая файл одного формата вы <br />
                выгружаете данные во все кредитные бюро.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-3xl overflow-hidden">
            <img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-18.svg"
            />

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                Удобное решение
              </div>

              <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                Программа позволяет выгружать данные как файлом, так и через
                АРІ.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-3xl overflow-hidden">
            <img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-19.svg"
            />

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                Регулярные обновления
              </div>

              <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                Программа регулярно обновляется, вам не потребуется следить за
                изменениями формата обмена.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[656px] items-center justify-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center tracking-[0] leading-[60px]">
            Функциональные возможности
          </div>
        </div>

        <div className="w-[1376px] gap-6 flex-[0_0_auto] rounded-3xl flex items-center relative">
          <div className="flex flex-col items-start gap-12 pl-12 pr-[68px] py-12 relative flex-1 grow rounded-3xl overflow-hidden">
            <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[560px] items-center justify-center gap-3 relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                  Контроль
                </div>

                <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                  Контролируйте статус вашей загрузки, получило ли конкретное
                  кредитное бюро ваши данные.
                </p>
              </div>

              <div className="flex flex-col w-[560px] items-center justify-center gap-3 relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                  Актуальные данные
                </div>

                <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                  Как прошла выгрузка, есть ли в ней ошибки и если есть то
                  какие.
                </p>
              </div>

              <div className="flex flex-col w-[560px] items-center justify-center gap-3 relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                  Экономия времени
                </div>

                <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                  Используя данный интерфейс, вы существенно сокращаете время на
                  процедуру выгрузки данных в КБ.
                </p>
              </div>

              <div className="flex flex-col w-[560px] items-center justify-center gap-3 relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                  Автоматизация процессов
                </div>

                <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                  Настраивайте автоматическую выгрузку во все кредитные бюро раз
                  в 5 дней, и вам не потребуется дальше контролировать процедуру
                  выгрузки.
                </p>
              </div>
            </div>
          </div>

          <img
            className="relative flex-1 self-stretch grow"
            alt="Frame"
            src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-21.svg"
          />
        </div>
      </div>

      <div className="flex flex-col w-[1376px] items-center justify-center gap-9 p-8 relative flex-[0_0_auto] bg-[#f9fafd] rounded-[32px] overflow-hidden">
        <img
          className="absolute w-[1204px] h-[1060px] top-[-115px] left-[339px]"
          alt="Vector"
          src="https://c.animaapp.com/mdvh9jkbMPb4br/img/vector-1-1.svg"
        />

        <div className="flex items-start gap-[88px] p-12 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[520px] items-start gap-8 relative">
            <img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-18-6.svg"
            />

            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                <div className="relative w-[520px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]">
                  Выгрузка во все КБ
                </div>

                <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                  Программа позволяет выгружать данные <br />
                  через API и интерфейс в четыре кредитных <br />
                  бюро.
                </p>
              </div>

              <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                    <img
                      className="relative w-4 h-4"
                      alt="Check"
                      src="https://c.animaapp.com/mdvh9jkbMPb4br/img/check.svg"
                    />
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    Эквифакс
                  </div>
                </div>

                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                    <img
                      className="relative w-4 h-4"
                      alt="Check"
                      src="https://c.animaapp.com/mdvh9jkbMPb4br/img/check.svg"
                    />
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    ОКБ
                  </div>
                </div>

                <div className="flex w-[520px] h-7 items-center justify-center gap-6 relative">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#725dd614] rounded-[100px]">
                    <img
                      className="relative w-4 h-4"
                      alt="Check"
                      src="https://c.animaapp.com/mdvh9jkbMPb4br/img/check.svg"
                    />
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    НБКИ
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            className="relative self-stretch w-px"
            alt="Vector"
            src="https://c.animaapp.com/mdvh9jkbMPb4br/img/vector-129.svg"
          />

          <div className="flex flex-col w-[520px] items-start justify-center gap-8 relative">
            <img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="https://c.animaapp.com/mdvh9jkbMPb4br/img/frame-18-2.svg"
            />

            <div className="flex flex-col w-[520px] items-start gap-6 relative flex-[0_0_auto]">
              <div className="gap-4 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]">
                  Стоимость использования
                </div>

                <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                    Программа поставляется в формате{' '}
                  </span>

                  <a
                    href="https://sptnk.co/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="underline">SAAS</span>
                  </a>

                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7">
                    {'  '}без любых дополнительных платежей за настройку или
                    лицензию.
                  </span>
                </p>
              </div>

              <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                <div className="flex w-[520px] items-center justify-center gap-6 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                    <img
                      className="relative w-4 h-4"
                      alt="Check"
                      src="https://c.animaapp.com/mdvh9jkbMPb4br/img/check.svg"
                    />
                  </div>

                  <p className="relative flex-1 mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                    Платите только тогда, когда пользуетесь программой
                  </p>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <div className="w-fit font-medium text-[40px] leading-[48px] whitespace-nowrap relative mt-[-1.00px] [font-family:'Roboto',Helvetica] text-gray-90 tracking-[0]">
                за 30 000 ₽
              </div>

              <div className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl tracking-[0] leading-7 whitespace-nowrap">
                /месяц
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-12 relative self-stretch w-full flex-[0_0_auto] bg-violet-50 rounded-[32px] overflow-hidden">
          <img
            className="absolute w-[1108px] h-[1060px] top-[-385px] left-[420px]"
            alt="Vector"
            src="https://c.animaapp.com/mdvh9jkbMPb4br/img/vector-1-3.svg"
          />

          <div className="flex flex-col items-start gap-3 relative flex-1 grow">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-[32px] tracking-[0] leading-10">
              Воспользоваться сервисом
            </div>

            <p className="relative w-[752px] opacity-60 [font-family:'Roboto',Helvetica] font-normal text-[#ffffff] text-xl tracking-[0] leading-7">
              Программа регулярно обновляет формат обмена в соответствие <br />с
              актуальными требованиями каждого КБ.
            </p>
          </div>

          <button className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-white rounded-[100px] items-center justify-center">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
              Связаться с нами
            </div>
          </button>
        </div>
      </div>

      <Integrations />
      <Feedback />
      <Trust />
    </div>
  );
};
