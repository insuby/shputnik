import { Feedback, Trust, useFeedbackForm } from 'widgets';

import { useTranslation } from 'react-i18next';

export const About = () => {
  const { setIsOpen } = useFeedbackForm();
  const { t } = useTranslation(['about']);

  const onClick = () => {
    setIsOpen(true);
  };
  return (
    <section
      className="relative -mx-5 inline-flex flex-col items-start justify-center"
      aria-labelledby="about-title"
    >
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-[72px] px-4 pt-0 md:px-8 md:pb-[88px] md:pt-8">
        <div className="relative mx-[-8.00px] flex flex-[0_0_auto] flex-col items-center gap-[88px] md:inline-flex">
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-8 self-stretch">
            <section className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-10 self-stretch overflow-hidden rounded-[32px] bg-[#ffffff] px-6 pb-10 pt-0 md:gap-20 md:px-20 md:pb-20 md:pt-[88px]">
              <img
                className="absolute left-[143px] top-[37px] h-[1060px] w-[1108px]"
                alt=""
                aria-hidden="true"
                src="/img/about/vector-1-1.svg"
              />

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-6 md:w-[980px] md:gap-8">
                <h1
                  id="about-title"
                  className="relative mt-[-1.00px] self-stretch text-center text-3xl font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:text-6xl md:leading-[68px]"
                >
                  {t('title', { ns: 'about' })}
                </h1>

                <p className="relative w-full px-2 text-center text-base font-normal leading-6 tracking-normal text-[#929cb3] [font-family:'Roboto',Helvetica] md:w-[786px] md:text-xl md:leading-7">
                  {t('subtitle', { ns: 'about' })}
                </p>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch md:!flex-row ">
                <div className="relative inline-flex flex-[0_0_auto] items-start gap-8 self-stretch overflow-hidden rounded-[32px] bg-blue-50 p-10">
                  <img
                    className="absolute left-[-157px] top-[-141px] h-[386px] w-[409px]"
                    alt=""
                    aria-hidden="true"
                    src="/img/about/vector-3.svg"
                  />

                  <img
                    className="absolute -top-2 left-[189px] h-[442px] w-[476px]"
                    alt=""
                    aria-hidden="true"
                    src="/img/about/vector-2.svg"
                  />

                  <div className="relative flex w-full flex-col items-start gap-4 md:w-[340px]">
                    <div className="relative mt-[-1.00px] self-stretch text-[68px] font-normal leading-[72px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
                      12
                    </div>

                    <div className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-white [font-family:'Roboto',Helvetica]">
                      {t('yearsOnMarket', { ns: 'about' })
                        .split('\n')
                        .map((line, idx) => (
                          <span key={idx}>
                            {line}
                            <br />
                          </span>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full flex-1 grow flex-col items-start gap-[60px] rounded-[32px] bg-[#ffffff] p-5 md:!flex-row md:p-10">
                  <div className="relative flex flex-1 grow flex-col items-start gap-4">
                    <div className="relative mt-[-1.00px] self-stretch text-[68px] font-normal leading-[72px] tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                      200+
                    </div>

                    <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                      {t('projectsCompleted', { ns: 'about' })}
                    </p>

                    <div className="relative mr-[-3.00px] inline-flex flex-[0_0_auto] items-center gap-2">
                      <div className="relative inline-flex h-8 flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[52px] bg-[#ff8068] px-3 py-2 backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                        <div className="relative mb-[-1.50px] mt-[-2.50px] w-fit whitespace-nowrap text-sm font-medium leading-5 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                          Java
                        </div>
                      </div>

                      <div className="relative inline-flex h-8 flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[52px] bg-[#00cb82] px-3 py-2 backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                        <div className="relative mb-[-1.50px] mt-[-2.50px] w-fit whitespace-nowrap text-sm font-medium leading-5 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                          Python
                        </div>
                      </div>

                      <div className="relative inline-flex h-8 flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[52px] bg-[#fbab00] px-3 py-2 backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                        <div className="relative mb-[-1.50px] mt-[-2.50px] w-fit whitespace-nowrap text-sm font-medium leading-5 tracking-normal text-[#ffffff] [font-family:'Inter',Helvetica]">
                          React
                        </div>
                      </div>
                    </div>
                  </div>

                  <img
                    className="relative hidden w-px self-stretch md:block"
                    alt=""
                    aria-hidden="true"
                    src="/img/about/vector-3-1.svg"
                  />

                  <div className="relative flex flex-1 grow flex-col items-start justify-between self-stretch">
                    <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                      <div className="relative mt-[-1.00px] w-[286px] text-[68px] font-normal leading-[72px] tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                        30+
                      </div>

                      <div className="relative w-[286px] text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                        {t('inHouseDevelopers', { ns: 'about' })}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                      <div className="relative inline-flex flex-[0_0_auto] items-center gap-1">
                        <div className="relative inline-flex flex-[0_0_auto] items-center">
                          <div className="relative my-[-3.00px] ml-[-3.00px] size-[54px] overflow-hidden rounded-3xl border-[3px] border-solid border-[#ffffff]">
                            <img
                              className="absolute left-0 top-0 size-12 object-cover"
                              alt="Woman with tablet"
                              src="/img/woman-tablet.png"
                            />
                          </div>

                          <div className="relative my-[-3.00px] -ml-1 size-[54px] overflow-hidden rounded-3xl border-[3px] border-solid border-[#ffffff]">
                            <img
                              className="absolute left-0 top-0 size-12 object-cover"
                              alt="Woman with tablet"
                              src="/img/woman-tablet-2.png"
                            />
                          </div>

                          <div className="relative my-[-3.00px] -ml-1 size-[54px] rounded-[52px] border-[3px] border-solid border-[#ffffff] backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)] [background:url(/img/about-frame-2.png)_50%_50%_/_cover]" />

                          <div className="relative my-[-3.00px] -ml-1 size-[54px] rounded-[52px] border-[3px] border-solid border-[#ffffff] backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)] [background:url(/img/about-frame-6.png)_50%_50%_/_cover]" />

                          <div className="relative my-[-3.00px] -ml-1 mr-[-3.00px] flex size-[54px] items-center justify-center gap-2.5 rounded-[52px] border-[3px] border-solid border-[#ffffff] bg-[#f7f8f9] p-2 backdrop-blur-[4.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.55px)_brightness(100%)]">
                            <div className="relative w-fit whitespace-nowrap text-base font-normal leading-6 tracking-normal text-[#55607a] [font-family:'Inter',Helvetica]">
                              +3
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5 p-2 md:p-0">
            <h2 className="relative mt-[-1.00px] w-full text-center text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[1376px] md:text-5xl md:leading-[60px]">
              {t('offices', { ns: 'about' })}
            </h2>

            <p className="relative text-center text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
              {t('officesSubtitle', { ns: 'about' })}
            </p>
          </section>

          <section className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 p-2 md:!flex-row md:p-0">
            <article
              aria-labelledby="office-moscow"
              className="relative flex w-full flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafc] p-7 md:gap-12 md:p-12"
            >
              <div className="relative inline-flex w-full flex-[0_0_auto] flex-col items-start gap-6">
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                  <h2
                    id="office-moscow"
                    className="relative mt-[-1.00px] w-fit whitespace-nowrap text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                  >
                    {t('moscow', { ns: 'about' })}
                  </h2>

                  <img
                    className="relative h-12 w-10"
                    alt=""
                    aria-hidden="true"
                    src="/img/about/coat-of-arms-of-moscow.svg"
                  />
                </div>

                <address className="relative text-xl font-normal not-italic leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                  {t('moscowAddress')}
                </address>
                <p className="relative text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                  <a href="tel:+74950062157" className="hover:text-[#3573FC]">
                    + 7 (495) 006 21 57
                  </a>
                </p>
              </div>

              <button
                className="all-[unset] relative box-border inline-flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 md:w-fit"
                onClick={onClick}
              >
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                  {t('contact', { ns: 'common' })}
                </div>
              </button>
            </article>

            <article
              aria-labelledby="office-murmansk"
              className="relative flex w-full flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-[#f9fafc] p-7 md:gap-12 md:p-12"
            >
              <div className="relative inline-flex w-full flex-[0_0_auto] flex-col items-start gap-6">
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                  <h2
                    id="office-murmansk"
                    className="relative mt-[-1.00px] w-fit whitespace-nowrap text-[40px] font-medium leading-[48px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]"
                  >
                    {t('murmansk', { ns: 'about' })}
                  </h2>

                  <img
                    className="h-12w-full relative md:w-[37px]"
                    alt=""
                    aria-hidden="true"
                    src="/img/about/rus-murmansk-coa.svg"
                  />
                </div>

                <address className="relative text-xl font-normal not-italic leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                  {t('murmanskAddress')}
                </address>
                <p className="relative text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                  <a href="tel:+74950062157" className="hover:text-[#3573FC]">
                    + 7 (495) 006 21 57
                  </a>
                </p>
              </div>

              <button
                className="all-[unset] relative box-border inline-flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 md:w-fit"
                onClick={onClick}
              >
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                  {t('contact', { ns: 'common' })}
                </div>
              </button>
            </article>
          </section>
        </div>

        <Feedback />
        <Trust />
      </div>
    </section>
  );
};
