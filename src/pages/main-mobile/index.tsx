import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useFeedbackForm } from 'widgets/feedback-form';
import { Feedback } from 'widgets/feedback.tsx';

import { CheckIcon } from 'shared/ui';

export const MainMobile = () => {
  const { t } = useTranslation(['home']);
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };

  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const inViews = refs.map((ref) =>
    useInView(ref, { once: true, margin: '-100px' }),
  );

  return (
    <>
      <div className="relative flex flex-col items-start">
        <div className="relative flex  items-center gap-2.5 px-3 py-0">
          <div className="relative flex flex-1 grow flex-col items-center self-stretch overflow-hidden rounded-[32px] bg-[#ffffff] px-4 pt-9">
            <img
              className="absolute left-[-444px] top-[147px] h-[1060px] w-[1108px]"
              alt="Vector"
              src="https://c.animaapp.com/mfqhurw5UPzvsV/img/vector-1-1.svg"
            />

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-6 self-stretch">
              <p className="relative mt-[-1.00px] self-stretch text-center text-4xl font-normal leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                <span className="font-medium leading-[44px] text-[#1c222f]">
                  {t('hero.titleA')}{' '}
                </span>

                <span className="font-medium leading-[44px] text-[#3573fc]">
                  {t('hero.titleB')}{' '}
                </span>

                <span className="font-medium leading-[44px] text-[#1c222f]">
                  {t('hero.titleC')}
                </span>
              </p>

              <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#929cb3] [font-family:'Roboto',Helvetica]">
                {t('hero.description')}
              </p>
            </div>

            <motion.div
              id="animate_phone"
              ref={refs[2]}
              initial={{ opacity: 0, y: 40 }}
              animate={inViews[2] ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.05,
                ease: 'easeOut',
              }}
              className="relative !scale-60 bottom-[-30px] left-0 flex flex-col gap-4 rounded-t-[40px] border-[6px] border-solid border-gray-90 bg-white p-7 md:left-[540px]"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-[24px] font-semibold leading-[32px] text-gray-90 [font-family:'Inter',Helvetica]">
                  {t('heroCards.greeting')} {t('heroCards.userName')}
                </div>

                <div className="relative size-8">
                  <div className="absolute left-1 top-4 h-0.5 w-5 rounded bg-gray-40" />
                  <div className="absolute left-1 top-2 h-0.5 w-5 rounded bg-gray-40" />
                  <div className="absolute left-1 top-6 h-0.5 w-5 rounded bg-gray-40" />
                </div>
              </div>

              <div className="flex w-full flex-col gap-4 rounded-[32px] bg-[#F2F5FF] p-6">
                <div className="flex w-full items-stretch gap-4">
                  <div
                    className="flex size-[102px] md:size-[140px] items-center justify-center rounded-2xl bg-white bg-cover bg-center p-4"
                    style={{
                      backgroundImage: "url('/img/Frame 1948755022.png')",
                    }}
                  />
                  <div className="relative flex size-[102px] md:size-[140px] items-center justify-center gap-4 rounded-2xl bg-white p-4">
                    <div className="absolute -top-2 right-0 -translate-x-1/2">
                      <CheckIcon
                        className="inline-flex items-center justify-center rounded-[100px] p-1.5"
                        bgColor="#00CB82"
                        iconColor="#FFFFFF"
                      />
                    </div>

                    <div className="flex w-full flex-col items-center justify-around gap-3">
                      <div className="text-center text-sm text-gray-40 [font-family:'Roboto',Helvetica]">
                        {t('heroCards.approvalTitle')}
                      </div>
                      <div className="text-center text-[28px] font-medium leading-10 text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('heroCards.approvalAmount')}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full items-stretch gap-4">
                  <div className="flex size-[102px] md:size-[140px] flex-col justify-center gap-2 rounded-2xl bg-white p-4">
                    <div className="text-center text-sm text-gray-40 [font-family:'Roboto',Helvetica]">
                      {t('heroCards.scoreTitle')}
                    </div>
                    <div className="text-center text-[28px] font-medium leading-10 text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('heroCards.scoreValue')}
                    </div>
                  </div>
                  <div className="flex size-[102px] md:size-[140px] items-center justify-center rounded-2xl bg-white p-4">
                    <svg
                      width="112"
                      height="92"
                      viewBox="0 0 112 92"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 90V62.7266M14 90V55.5135M26 90V42.5299M38 90V2M50 90V16.2703M62 90V48.3784V6.75676M74 90V25.7838M86 90V55.5135M98 90V36.4865M110 90V55.5135"
                        stroke="url(#paint0_linear_8964_128)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_8964_128"
                          x1="-1.78"
                          y1="71.96"
                          x2="114.319"
                          y2="72.6227"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3573FC" stopOpacity="0" />
                          <stop offset="0.29049" stopColor="#3573FC" />
                          <stop offset="0.685619" stopColor="#3573FC" />
                          <stop
                            offset="1"
                            stopColor="#3573FC"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-9 self-stretch p-4">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5 self-stretch">
          <div className="relative mt-[-1.00px] self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
              {t('specialize.weSpecialize')}
          </div>

          <p className="relative self-stretch text-center text-4xl font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            <span className="leading-[44px] text-[#1c222f]">
                          {t('specialize.software')}

                <br />
            </span>

            <span className="leading-[44px] text-[#9ea7bb]">
                                          {t('specialize.forLending')}

            </span>
          </p>
        </div>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
          <div className="relative h-[420px] w-full self-stretch overflow-hidden rounded-[32px] bg-[#f9fafc]">
            <img
              className="absolute left-[97px] top-[49px] h-[464px] w-[496px]"
              alt="Vector"
              src="https://c.animaapp.com/mfqhurw5UPzvsV/img/vector-1-4.svg"
            />

            <div className="absolute left-[23px] top-[47px] flex h-[261px] w-[220px] flex-col items-center justify-center gap-[16.28px] rounded-[21.71px] bg-white p-[10.86px]">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[5.43px] self-stretch">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[13.57px] self-stretch px-[10.86px] pb-[10.86px] pt-[8.14px]">
                  <div className="relative mt-[-0.68px] self-stretch text-[16.3px] font-medium leading-[21.7px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('microcredit.apply')}
                  </div>

                  <div className="relative mr-[-0.11px] flex w-[173.69px] flex-[0_0_auto] flex-col items-start gap-[5.43px]">
                    <img
                      className="relative ml-[-2.04px] mr-[-1.36px] mt-[-2.04px] h-[19px] w-full self-stretch"
                      alt="Frame"
                      src="https://c.animaapp.com/mfqhurw5UPzvsV/img/frame-83-2.svg"
                    />

                    <div className="relative h-[16.28px] w-full self-stretch">
                      <div className="absolute left-0 top-0 whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        0
                      </div>

                      <div className="absolute left-[89px] top-0 whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        122 000
                      </div>
                    </div>
                  </div>

                  <div className="relative mr-[-0.11px] flex w-[173.69px] flex-[0_0_auto] flex-col items-start gap-[5.43px]">
                    <img
                      className="relative ml-[-2.04px] mr-[-1.36px] mt-[-2.04px] h-[19px] w-full self-stretch"
                      alt="Frame"
                      src="https://c.animaapp.com/mfqhurw5UPzvsV/img/frame-83.svg"
                    />

                    <div className="relative h-[16.28px] w-full self-stretch">
                      <div className="absolute left-0 top-0 whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        0
                      </div>

                      <div className="absolute left-[54px] top-0 whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        14
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full flex-[0_0_auto] items-start gap-[5.43px] self-stretch">
                  <div className="relative flex flex-1 grow flex-col items-start rounded-[13.57px] bg-[#f6f8ff] px-[10.86px] py-[8.14px]">
                    <div className="relative mt-[-0.68px] w-fit whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('microcredit.amount')}
                    </div>

                    <div className="relative mr-[-2.23px] w-fit whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      42 000₽
                    </div>
                  </div>

                  <div className="relative flex flex-1 grow flex-col items-start rounded-[13.57px] bg-[#f6f8ff] px-[10.86px] py-[8.14px]">
                    <div className="relative mt-[-0.68px] w-fit whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('microcredit.term')}
                    </div>

                    <div className="relative mr-[-0.23px] w-fit whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('microcredit.termValue')}
                    </div>
                  </div>

                  <div className="relative flex flex-1 grow flex-col items-start rounded-[13.57px] bg-[#f6f8ff] px-[10.86px] py-[8.14px]">
                    <div className="relative mt-[-0.68px] w-fit whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('microcredit.rate')}

                    </div>

                    <div className="relative w-fit whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      2.5%
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex h-[32.57px] w-full items-center justify-center gap-[21.71px] self-stretch rounded-[16.28px] bg-gray-90 px-[21.71px] py-[8.14px]">
                <div className="relative mt-[-0.68px] w-[111.27px] self-stretch whitespace-nowrap text-center text-[10.9px] font-medium leading-[16.3px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
                    {t('microcredit.applyLoan')}
                </div>
              </div>
            </div>

            <img
              className="absolute left-0 top-0 h-[420px] w-[380px]"
              alt="Vector"
              src="https://c.animaapp.com/mfqhurw5UPzvsV/img/vector-3.svg"
            />

            <div className="absolute left-[185px] top-[97px] flex h-[277px] w-[173px] flex-col items-center justify-center gap-[8.14px] rounded-[21.71px] bg-white p-[10.86px]">
              <div className="relative mt-[-0.24px] inline-flex flex-[0_0_auto] items-center gap-[6.78px] rounded-[67.85px] p-[8.14px]">
                <div className="relative size-[124.84px]">
                  <img
                    className="absolute left-0 top-0 h-[125px] w-[60px]"
                    alt="Subtract"
                    src="https://c.animaapp.com/mfqhurw5UPzvsV/img/subtract-3.svg"
                  />

                  <img
                    className="absolute left-[65px] top-[51px] h-[74px] w-[60px]"
                    alt="Subtract"
                    src="https://c.animaapp.com/mfqhurw5UPzvsV/img/subtract-1.svg"
                  />

                  <img
                    className="absolute left-[107px] top-[23px] h-[23px] w-[15px]"
                    alt="Subtract"
                    src="https://c.animaapp.com/mfqhurw5UPzvsV/img/subtract-2.svg"
                  />

                  <img
                    className="absolute left-[65px] top-0 h-[21px] w-10"
                    alt="Subtract"
                    src="https://c.animaapp.com/mfqhurw5UPzvsV/img/subtract.svg"
                  />

                  <div className="absolute left-[22px] top-[41px] inline-flex h-[42px] flex-col items-center gap-[1.36px]">
                    <div className="relative mt-[-0.68px] w-fit whitespace-nowrap text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                        {t('microcredit.total')}
                    </div>

                    <div className="relative mb-[-0.45px] w-fit whitespace-nowrap text-center text-[19px] font-medium leading-[27.1px] tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                      122,000₽
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[6.78px] rounded-[13.57px] bg-[#f6f8ff] p-[13.57px]">
                <div className="relative inline-flex flex-[0_0_auto] items-center gap-[8.14px]">
                  <div className="relative size-[5.43px] rounded-[2.71px] bg-blue-50" />

                  <div className="relative mt-[-0.68px] w-[48.85px] text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      {t('chart.current')}
                  </div>

                  <div className="relative mt-[-0.68px] w-[48.85px] text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    48,456₽
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] items-center gap-[8.14px]">
                  <div className="relative size-[5.43px] rounded-[2.71px] bg-green-50" />

                  <div className="relative mt-[-0.68px] w-[48.85px] text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      {t('chart.main')}
                  </div>

                  <div className="relative mt-[-0.68px] w-[48.85px] text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    122,000₽
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] items-center gap-[8.14px]">
                  <div className="relative size-[5.43px] rounded-[2.71px] bg-yellow-50" />

                  <div className="relative mt-[-0.68px] w-[48.85px] text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      {t('chart.interest')}
                  </div>

                  <div className="relative mt-[-0.68px] w-[48.85px] text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    4,000₽
                  </div>
                </div>

                <div className="relative inline-flex flex-[0_0_auto] items-center gap-[8.14px]">
                  <div className="relative size-[5.43px] rounded-[2.71px] bg-red-50" />

                  <div className="relative mt-[-0.68px] w-[48.85px] text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                      {t('chart.penalty')}
                  </div>

                  <div className="relative mt-[-0.68px] w-[48.85px] text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    2,700₽
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
                Вид деятельности, связанный с выдачей небольших займов гражданам
                и малому бизнесу, который не имеет доступа к традиционному
                банкингу. Микрозаймы, как правило, выдаются на короткие сроки и
                имеют более высокие процентные ставки по сравнению с банковскими
                кредитами.
              </p>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-base font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]">
                Подробнее
              </div>

                <svg
                    className="relative size-5"
                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="#3573FC" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-9 self-stretch p-4">
        <div className="relative mt-[-1.00px] self-stretch text-4xl font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
          {t('products.classic.title')}
        </div>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-4 self-stretch">
          <div className="relative h-[420px] w-full self-stretch overflow-hidden rounded-[32px] bg-blue-50">
            <div className="absolute left-[-222px] top-[-255px] h-[904px] w-full md:w-[1114px]">
              <img
                className="absolute left-0 top-[333px] h-[571px] w-full md:w-[611px]"
                alt="Vector"
                src="https://c.animaapp.com/meg2uvv4WWYlvp/img/vector-1-3.svg"
              />

              <img
                className="absolute left-[398px] top-0 h-[682px] w-full md:w-[716px]"
                alt="Vector"
                src="https://c.animaapp.com/meg2uvv4WWYlvp/img/vector-4-1.svg"
              />

              <div className="absolute left-[246px] top-[279px] inline-flex items-center overflow-hidden rounded-[17.55px_17.55px_0px_0px] bg-[#f6f8fd]">
                <div className="relative flex w-[439px] w-full flex-col items-start items-center justify-center gap-[17.55px] whitespace-nowrap bg-[#ffffff] p-[21.94px] md:w-[289px]">
                  <div className="relative mt-[-0.55px] self-stretch text-[17.5px] font-medium leading-[21.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('products.classic.calculator')}
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-center gap-[8.77px] self-stretch rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                    <div className="relative flex flex-1 grow flex-col items-start gap-[1.1px]">
                      <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                        {t('products.classic.dealer')}
                      </div>

                      <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('products.classic.dealerName')}
                      </div>
                    </div>

                    <img
                      className="relative size-5 md:size-[13.16px]"
                      alt="Caret right"
                      src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright-1.svg"
                    />
                  </div>

                  <div className="relative inline-flex w-full flex-[0_0_auto] flex-col items-start gap-[8.77px]">
                    <div className="relative inline-flex flex-[0_0_auto] items-start gap-[6.58px]">
                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[5.48px] rounded-[54.84px] bg-gray-90 px-[10.97px] py-[5.48px]">
                        <div className="relative mt-[-0.55px] w-fit whitespace-nowrap text-[11px] font-normal leading-[15.4px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
                          {t('products.classic.new')}
                        </div>
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[5.48px] rounded-[54.84px] bg-[#f7f9ff] px-[10.97px] py-[5.48px]">
                        <div className="relative mt-[-0.55px] w-fit whitespace-nowrap text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          {t('products.classic.used')}
                        </div>
                      </div>
                    </div>

                    <div className="relative inline-flex flex-[0_0_auto] items-start gap-[6.58px]">
                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[5.48px] rounded-[54.84px] bg-[#f7f9ff] px-[10.97px] py-[5.48px]">
                        <div className="relative mt-[-0.55px] w-fit whitespace-nowrap text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          {t('products.classic.withCollateral')}
                        </div>
                      </div>

                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[5.48px] rounded-[54.84px] bg-gray-90 px-[10.97px] py-[5.48px]">
                        <div className="relative mt-[-0.55px] w-fit whitespace-nowrap text-[11px] font-normal leading-[15.4px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
                          {t('products.classic.withoutCollateral')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-[10.97px] self-stretch">
                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('products.classic.brand')}
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          Audi
                        </div>
                      </div>

                      <img
                        className="relative size-5 md:size-[13.16px]"
                        alt="Caret right"
                        src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright-1.svg"
                      />
                    </div>

                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('products.classic.model')}
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          A7 Sportback
                        </div>
                      </div>

                      <img
                        className="relative size-5 md:size-[13.16px]"
                        alt="Caret right"
                        src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright-1.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-[10.97px] self-stretch">
                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('products.classic.year')}
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          2004
                        </div>
                      </div>

                      <img
                        className="relative size-5 md:size-[13.16px]"
                        alt="Caret right"
                        src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright-1.svg"
                      />
                    </div>

                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('products.classic.firstPayment')}
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          150 000
                        </div>
                      </div>

                      <img
                        className="relative size-5 md:size-[13.16px]"
                        alt="Caret right"
                        src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright-1.svg"
                      />
                    </div>
                  </div>

                  <div className="relative flex w-full flex-[0_0_auto] items-start gap-[10.97px] self-stretch">
                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px]">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('application.termMonths')}
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          24
                        </div>
                      </div>

                      <img
                        className="relative size-5 md:size-[13.16px]"
                        alt="Caret right"
                        src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright-1.svg"
                      />
                    </div>

                    <div className="relative flex h-[44.97px] flex-1 grow items-center gap-[8.77px] rounded-[8.77px] border-[0.55px] border-solid border-[#dbe1f0] p-[8.77px] opacity-0">
                      <div className="relative my-[-0.34px] flex flex-1 grow flex-col items-start gap-[1.1px]">
                        <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                          {t('products.classic.firstPayment')}
                        </div>

                        <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                          150 000
                        </div>
                      </div>

                      <img
                        className="relative size-5 md:ml-[-962.76px] mt-[-3094.74px] size-[13.16px]"
                        alt="Caret right"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full flex-col items-start gap-[17.55px] self-stretch p-[21.94px] md:w-[289px]">
                  <div className="relative mt-[-0.55px] self-stretch text-[17.5px] font-medium leading-[21.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('products.classic.selectConditions')}
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[15.04px]">
                    <div className="relative mx-[-1.10px] mt-[-1.10px] flex w-full flex-[0_0_auto] items-start justify-end gap-[8.77px] rounded-[8.77px] border-[1.1px] border-solid border-[#3573fc] bg-white p-[13.16px] md:w-[247.32px]">
                      <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[8.77px] self-stretch">
                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[5.48px] self-stretch">
                          <div className="relative mt-[-0.55px] flex-1 text-[11px] font-medium leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            {t('products.classic.yourConditions')}
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
                              {t('products.classic.monthlyPayment')}
                            </div>

                            <div className="relative self-stretch text-[9px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              187, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-full flex-col items-start gap-[1.1px] md:w-[66.9px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('application.amount')}
                            </div>

                            <div className="relative self-stretch text-[9px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              2, 560, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-full flex-col items-start gap-[1.1px] md:w-[43.87px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('application.rate')}
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              3,5%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start justify-end gap-[8.77px] rounded-[8.77px] bg-white p-[13.16px] md:w-[245.13px]">
                      <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[8.77px]">
                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[5.48px] self-stretch">
                          <div className="relative mt-[-0.55px] flex-1 text-[11px] font-medium leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            {t('products.classic.increasedFirstPayment')}
                          </div>
                        </div>

                        <div className="relative flex w-full flex-[0_0_auto] items-start gap-[13.16px] self-stretch">
                          <div className="relative flex flex-1 grow flex-col items-start gap-[1.1px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('products.classic.monthlyPayment')}
                            </div>

                            <div className="relative self-stretch text-[9px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              166, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-full flex-col items-start gap-[1.1px] md:w-[66.9px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('application.amount')}
                            </div>

                            <div className="relative self-stretch text-[9px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              2, 450, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-full flex-col items-start gap-[1.1px] md:w-[43.87px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('application.rate')}
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-[#00b235] [font-family:'Roboto',Helvetica]">
                              3,2%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex w-full flex-[0_0_auto] items-start justify-end gap-[8.77px] rounded-[8.77px] bg-white p-[13.16px] md:w-[245.13px]">
                      <div className="relative flex flex-1 grow flex-col items-center justify-center gap-[8.77px]">
                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[5.48px] self-stretch">
                          <div className="relative mt-[-0.55px] flex-1 text-[11px] font-medium leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                            {t('products.classic.increasedTerm')}
                          </div>
                        </div>

                        <div className="relative flex w-full flex-[0_0_auto] items-start gap-[13.16px] self-stretch">
                          <div className="relative flex flex-1 grow flex-col items-start gap-[1.1px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('products.classic.monthlyPayment')}
                            </div>

                            <div className="relative self-stretch text-[9px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              96, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-full flex-col items-start gap-[1.1px] md:w-[66.9px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('application.amount')}
                            </div>

                            <div className="relative self-stretch text-[9px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              2, 640, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-full flex-col items-start gap-[1.1px] md:w-[43.87px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('application.rate')}
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
              className="absolute left-[-780px] top-[-2732px] h-[347px] w-full "
              alt="Vector"
              src="https://c.animaapp.com/meg2uvv4WWYlvp/img/vector-3.svg"
            />
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-4 self-stretch">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[32px] bg-[#f6f7f9] p-7">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('products.business.title')}
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('products.business.description')}
                </p>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4">
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]">
                  {t('products.microfinance.more')}
                </div>

                <img
                  className="relative size-5 md:size-12"
                  alt="Caret right"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright.svg"
                />
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[32px] bg-[#f6f7f9] p-7">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('products.bank.title')}
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('products.bank.description')}
                </p>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4">
                <div
                  onClick={onClick}
                  className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]"
                >
                  {t('products.microfinance.more')}
                </div>

                <img
                  className="relative size-5 md:size-12"
                  alt="Caret right"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright.svg"
                />
              </div>
            </div>

            <div className="relative mx-[-2.00px] mb-[-2.00px] flex w-full flex-[0_0_auto] flex-col items-center gap-7 self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-none bg-[#f5f7ff] p-7">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('products.auto.title')}
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('products.auto.description')}
                </p>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4">
                <div
                  onClick={onClick}
                  className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]"
                >
                  {t('products.microfinance.more')}
                </div>

                <img
                  className="relative size-5 md:size-12"
                  alt="Caret right"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="flex flex-col items-center gap-9 p-4 relative self-stretch w-full flex-[0_0_auto]">
            <p className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-4xl leading-9 relative tracking-[0]">
        <span className="font-medium text-[#1c222f] leading-[0.1px]">
          Точечное и потребительское
          <br />
        </span>

                <span className="font-medium text-[#9ea7bb] leading-10">
          кредитование
        </span>
            </p>

            <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto] bg-[#f9fafd] rounded-[32px] overflow-hidden">
                        <div className="relative self-stretch w-full h-96 rounded-[32px] overflow-hidden">
                            <img
                                className="absolute top-[30px] left-[145px] w-[388px] h-[371px]"
                                alt="Vector"
                                src="https://c.animaapp.com/mfqhurw5UPzvsV/img/vector-1.svg"
                            />

                            <div className="inline-flex items-center p-[12.4px] top-[57px] left-[-19px] rounded-[24.8px] absolute bg-white">
                                <div className="inline-flex flex-col items-start justify-center gap-[7.75px] p-[9.3px] relative flex-[0_0_auto]">
                                    <div className="flex w-[123.99px] h-[123.99px] items-start gap-[9.3px] relative">
                                        <div className="relative w-[114.69px] h-[114.69px] [background:url(https://c.animaapp.com/mfqhurw5UPzvsV/img/frame-1948755020.png)_50%_50%_/_cover]" />
                                    </div>
                                </div>

                                <div className="inline-flex flex-col items-start gap-[12.4px] p-[18.6px] relative self-stretch flex-[0_0_auto] bg-[#f6f8ff] rounded-[18.6px]">
                                    <div className="relative self-stretch mt-[-0.77px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[15.5px] tracking-[0] leading-[21.7px]">
                                        Наушники Beyerdynamic Amiron
                                    </div>

                                    <div className="flex flex-col w-[167.42px] items-start gap-[7.75px] relative flex-[0_0_auto]">
                                        <div className="flex h-[15.5px] items-center gap-[9.3px] relative self-stretch w-full">
                                            <div className="flex-1 mt-[-1.03px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-[10.8px] leading-[15.5px] relative tracking-[0]">
                                                Стоимость
                                            </div>

                                            <div className="w-[55.79px] mt-[-1.03px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[10.8px] text-right leading-[15.5px] relative tracking-[0]">
                                                23,456₽
                                            </div>
                                        </div>

                                        <div className="flex h-[15.5px] items-center gap-[9.3px] relative self-stretch w-full">
                                            <div className="flex-1 mt-[-1.03px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-[10.8px] leading-[15.5px] relative tracking-[0]">
                                                Авансовый платеж
                                            </div>

                                            <div className="w-[55.79px] mt-[-1.03px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[10.8px] text-right leading-[15.5px] relative tracking-[0]">
                                                42,000₽
                                            </div>
                                        </div>

                                        <div className="flex h-[15.5px] items-center gap-[9.3px] relative self-stretch w-full">
                                            <div className="flex-1 mt-[-1.03px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-[10.8px] leading-[15.5px] relative tracking-[0]">
                                                Срок
                                            </div>

                                            <div className="w-[55.79px] mt-[-1.03px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[10.8px] text-right leading-[15.5px] relative tracking-[0]">
                                                4,000₽
                                            </div>
                                        </div>

                                        <div className="flex h-[15.5px] items-center gap-[9.3px] relative self-stretch w-full">
                                            <div className="flex-1 mt-[-1.03px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-[10.8px] leading-[15.5px] relative tracking-[0]">
                                                Следующий платеж
                                            </div>

                                            <div className="w-[55.79px] mt-[-1.03px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[10.8px] text-right leading-[15.5px] relative tracking-[0]">
                                                2,700₽
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <img
                                className="absolute top-0 left-0 w-[380px] h-96"
                                alt="Vector"
                                src="https://c.animaapp.com/mfqhurw5UPzvsV/img/vector-4.svg"
                            />

                            <div className="inline-flex items-center gap-[14.72px] pl-[14.72px] pr-[22.08px] py-[14.72px] top-[237px] left-[153px] rounded-[29.43px] absolute bg-white">
                                <img
                                    className="relative flex-[0_0_auto]"
                                    alt="Frame"
                                    src="https://c.animaapp.com/mfqhurw5UPzvsV/img/frame-18.svg"
                                />

                                <div className="inline-flex flex-col items-start gap-[3.68px] relative flex-[0_0_auto]">
                                    <div className="w-fit mt-[-0.92px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-[12.9px] leading-[18.4px] whitespace-nowrap relative tracking-[0]">
                                        Ежемесячный платеж
                                    </div>

                                    <div className="relative w-fit font-medium text-gray-90 text-[18.4px] leading-[25.8px] whitespace-nowrap [font-family:'Roboto',Helvetica] tracking-[0]">
                                        4 950₽
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-end gap-8 p-8 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[28px] tracking-[0] leading-9">
                                    BNPL
                                </div>

                                <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                                    Предоставление банком денежных средств физическим или
                                    юридическим лицам. Предоставление банком денежных средств
                                    физическим или юридическим лицам
                                </p>
                            </div>

                            <div className="flex items-center justify-center gap-2.5 p-4 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[100px]">
                                <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-blue-50 text-base leading-6 whitespace-nowrap relative tracking-[0]">
                                    Подробнее
                                </div>

                                <img
                                    className="relative w-5 h-5"
                                    alt="Caret right"
                                    src="https://c.animaapp.com/mfqhurw5UPzvsV/img/caretright-3.svg"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto] bg-[#f9fafd] rounded-[32px] overflow-hidden">
                        <div className="relative self-stretch w-full h-[369px] rounded-[32px] overflow-hidden">
                            <img
                                className="absolute top-[30px] left-[145px] w-[388px] h-[371px]"
                                alt="Vector"
                                src="https://c.animaapp.com/mfqhurw5UPzvsV/img/vector-1-2.svg"
                            />

                            <div className="flex flex-col w-[283px] h-[247px] items-start justify-center gap-[13.8px] p-[27.6px] top-[34px] left-[161px] rounded-[27.6px] absolute bg-white">
                                <div className="inline-flex flex-col items-start gap-[3.45px] relative flex-[0_0_auto] mt-[-0.65px]">
                                    <div className="w-[227.73px] mt-[-0.86px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[17.3px] leading-[24.2px] relative tracking-[0]">
                                        График платежей
                                    </div>

                                    <div className="w-[155.27px] font-normal text-[#7a86a2] text-[12.1px] leading-[17.3px] relative [font-family:'Roboto',Helvetica] tracking-[0]">
                                        Договор: 12345456322
                                    </div>
                                </div>

                                <div className="inline-flex h-[132.84px] items-end relative mb-[-0.65px]">
                                    <div className="inline-flex flex-col items-center justify-center gap-[8.63px] relative flex-[0_0_auto]">
                                        <div className="relative w-[6.9px] h-[65.56px] rounded-[20.7px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)]" />

                                        <div className="w-[37.96px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-[10.4px] text-center leading-[13.8px] relative tracking-[0]">
                                            март
                                        </div>
                                    </div>

                                    <div className="inline-flex flex-col items-center justify-center gap-[8.63px] relative flex-[0_0_auto]">
                                        <div className="h-[74.19px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)] relative w-[6.9px] rounded-[20.7px]" />

                                        <div className="w-[37.96px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-[10.4px] text-center leading-[13.8px] relative tracking-[0]">
                                            апр
                                        </div>
                                    </div>

                                    <div className="inline-flex flex-col items-center justify-center gap-[8.63px] relative flex-[0_0_auto]">
                                        <div className="h-[90.57px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)] relative w-[6.9px] rounded-[20.7px]" />

                                        <div className="w-[37.96px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-[10.4px] text-center leading-[13.8px] relative tracking-[0]">
                                            май
                                        </div>
                                    </div>

                                    <div className="inline-flex flex-col items-center justify-center gap-[8.63px] relative flex-[0_0_auto]">
                                        <div className="h-[103.51px] bg-[#f2f4fb] relative w-[6.9px] rounded-[20.7px]" />

                                        <div className="w-[37.96px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-[10.4px] text-center leading-[13.8px] relative tracking-[0]">
                                            июнь
                                        </div>
                                    </div>

                                    <div className="inline-flex flex-col items-center justify-center gap-[8.63px] relative flex-[0_0_auto]">
                                        <div className="h-[78.5px] bg-[#f2f4fb] relative w-[6.9px] rounded-[20.7px]" />

                                        <div className="w-[37.96px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-[10.4px] text-center leading-[13.8px] relative tracking-[0]">
                                            июль
                                        </div>
                                    </div>

                                    <div className="inline-flex flex-col items-center justify-center gap-[8.63px] relative flex-[0_0_auto]">
                                        <div className="h-[84.54px] bg-[#f2f4fb] relative w-[6.9px] rounded-[20.7px]" />

                                        <div className="w-[37.96px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-[10.4px] text-center leading-[13.8px] relative tracking-[0]">
                                            авг
                                        </div>
                                    </div>
                                </div>

                                <img
                                    className="absolute top-[94px] left-0 w-[283px] h-[83px]"
                                    alt="Vector"
                                    src="https://c.animaapp.com/mfqhurw5UPzvsV/img/vector-147.svg"
                                />

                                <div className="absolute top-[115px] left-[135px] w-2.5 h-2.5 bg-[#ffffff] rounded-[5.18px] border-[1.73px] border-solid border-[#00cb82]" />
                            </div>

                            <img
                                className="absolute top-0 left-0 w-[380px] h-[369px]"
                                alt="Vector"
                                src="https://c.animaapp.com/mfqhurw5UPzvsV/img/vector-4-1.svg"
                            />

                            <div className="gap-[10.35px] p-[13.8px] top-[105px] left-[18px] rounded-[27.6px_27.6px_0px_0px] inline-flex flex-col items-center justify-center absolute bg-white">
                                <div className="relative w-[182.88px] h-[182.88px] rounded-[86.26px]">
                                    <div className="h-[54px] gap-[1.73px] top-[65px] left-[41px] inline-flex flex-col items-center absolute">
                                        <div className="w-fit mt-[-0.86px] [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-[12.1px] leading-[17.3px] whitespace-nowrap relative tracking-[0]">
                                            Текущий остаток
                                        </div>

                                        <div className="w-fit mb-[-0.18px] [font-family:'Roboto',Helvetica] font-medium text-[#1c222f] text-[24.2px] text-center leading-[34.5px] whitespace-nowrap relative tracking-[0]">
                                            44,000₽
                                        </div>
                                    </div>

                                    <div className="absolute top-1.5 left-1.5 w-[171px] h-[171px] rounded-[85.4px] border-[8.63px] border-solid border-neutral-50" />

                                    <img
                                        className="absolute top-1.5 left-1.5 w-[171px] h-[171px]"
                                        alt="Ellipse"
                                        src="https://c.animaapp.com/mfqhurw5UPzvsV/img/ellipse-32.svg"
                                    />
                                </div>

                                <div className="items-center justify-between px-[13.8px] py-[10.35px] self-stretch w-full flex-[0_0_auto] bg-[#f6f8ff] rounded-[17.25px] flex relative">
                                    <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-[12.1px] leading-[17.3px] whitespace-nowrap relative tracking-[0]">
                                        Сумма займа
                                    </div>

                                    <div className="w-fit mt-[-0.86px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[13.8px] leading-[20.7px] whitespace-nowrap relative tracking-[0]">
                                        122, 000₽
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-end gap-8 p-8 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[28px] tracking-[0] leading-9">
                                    POS-кредитование
                                </div>

                                <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                                    Предоставление банком денежных средств физическим или
                                    юридическим лицам. Предоставление банком денежных средств
                                    физическим или юридическим лицам
                                </p>
                            </div>

                            <div className="flex items-center justify-center gap-2.5 p-4 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[100px]">
                                <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-blue-50 text-base leading-6 whitespace-nowrap relative tracking-[0]">
                                    Подробнее
                                </div>

                                <img
                                    className="relative w-5 h-5"
                                    alt="Caret right"
                                    src="https://c.animaapp.com/mfqhurw5UPzvsV/img/caretright-3.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <Feedback />

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-9 self-stretch p-4">
        <p className="relative mt-[-1.00px] self-stretch text-4xl font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
          {t('other.title')}
        </p>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-4 self-stretch">
          <img
            className="relative h-[420px] w-full self-stretch"
            alt="Frame"
            src="https://c.animaapp.com/meg2uvv4WWYlvp/img/frame-32.svg"
          />

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-4 self-stretch">
            <div className="relative mx-[-2.00px] mt-[-2.00px] flex w-full flex-[0_0_auto] flex-col items-center gap-7 self-stretch overflow-hidden rounded-[32px] border-2 border-solid  border-none bg-[#f5f7ff] p-7">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <p className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('other.dataUnload.title')}
                </p>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('other.dataUnload.description')}
                </p>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4">
                <div
                  onClick={onClick}
                  className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]"
                >
                  {t('products.microfinance.more')}
                </div>

                <img
                  className="relative size-5 md:size-12"
                  alt="Caret right"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright.svg"
                />
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[32px] bg-[#f6f7f9] p-7">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('other.decisionModule.title')}
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('other.decisionModule.description')}
                </p>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4">
                <div
                  onClick={onClick}
                  className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]"
                >
                  {t('products.microfinance.more')}
                </div>

                <img
                  className="relative size-5 md:size-12"
                  alt="Caret right"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright.svg"
                />
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[32px] bg-[#f6f7f9] p-7">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-[28px] font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                  {t('other.fdata.title')}
                </div>

                <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                  {t('other.fdata.description')}
                </p>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4">
                <div
                  onClick={onClick}
                  className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]"
                >
                  {t('products.microfinance.more')}
                </div>

                <img
                  className="relative size-5 md:size-12"
                  alt="Caret right"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2.5 self-stretch bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(232,236,246,1)_64%)] p-4">
        <footer className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-10 self-stretch overflow-hidden rounded-[32px] bg-white p-7">
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-10 self-stretch">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch md:gap-12">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                <img
                  className="relative mt-[-0.37px] h-[22.74px] w-28"
                  alt="Logo"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/logo.svg"
                />

                <div className="relative w-full text-base font-normal leading-6 tracking-normal text-gray-90 opacity-40 [font-family:'Roboto',Helvetica] md:w-[233px]">
                  {t('development.title')}
                  <br />
                  {t('development.fintech')}
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 md:w-[284px]">
              <div className="relative flex h-[132px] w-full flex-col items-center justify-center gap-4 self-stretch">
                <div className="relative mt-[-1.00px] self-stretch text-base font-normal leading-7 tracking-normal text-gray-90 opacity-40 [font-family:'Roboto',Helvetica]">
                  {t('contacts.title')}
                </div>

                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch">
                  <div className="relative mt-[-1.00px] w-full text-xl font-bold leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[233px]">
                    +7 (495) 006-21-57
                  </div>

                  <p className="relative self-stretch text-base font-normal leading-6 tracking-normal text-gray-90 opacity-40 [font-family:'Roboto',Helvetica]">
                    {t('contacts.address')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="relative w-full text-base font-normal leading-6 tracking-normal text-gray-90 opacity-40 [font-family:'Roboto',Helvetica] md:w-[233px]">
            © 2022 Sputnik – <br />
            {t('automation.title')}
          </p>
        </footer>
      </div>
    </>
  );
};
