import { useTranslation } from 'react-i18next';

import { useFeedbackForm } from 'widgets/feedback-form';
import { Feedback } from 'widgets/feedback.tsx';

export const MainMobile = () => {
  const { t } = useTranslation('mobile');
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="relative -mx-2 -mt-5 flex items-center gap-2.5">
        <div className=" relative flex flex-1 grow flex-col items-center gap-[52px] self-stretch overflow-hidden rounded-[32px] bg-[#ffffff] px-4 py-9">
          <img
            className="absolute left-[-444px] top-[147px] h-[1060px] w-full md:w-[1108px]"
            alt="Vector"
            src="https://c.animaapp.com/meg2uvv4WWYlvp/img/vector-1-6.svg"
          />

          <div className="w/full relative flex flex-[0_0_auto] flex-col items-center justify-center gap-6 self-stretch">
            <p className="relative mt-[-1.00px] self-stretch text-center text-4xl font-normal leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
              {t('hero.title')}
            </p>

            <p className="relative self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#929cb3] [font-family:'Roboto',Helvetica]">
              {t('hero.description')}
            </p>
          </div>

          <img
            className="relative mb-[-36.00px] w-full flex-[0_0_auto] md:w-[335px]"
            alt="Iphone pro max"
            src="https://c.animaapp.com/meg2uvv4WWYlvp/img/iphone-16-pro-max---3.png"
          />
        </div>
      </div>

      <div className="w/full relative flex flex-[0_0_auto] flex-col items-center gap-9 self-stretch p-4">
        <div className="w/full relative flex flex-[0_0_auto] flex-col items-center justify-center gap-2.5 self-stretch">
          <div className="relative mt-[-1.00px] self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
            {t('specialization.subtitle')}
          </div>

          <p className="relative self-stretch text-center text-4xl font-medium leading-9 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            {t('specialization.title')}
          </p>
        </div>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
          <div className="relative h-[420px] w-full self-stretch overflow-hidden rounded-[32px] bg-[#f9fafc]">
            <div className="relative h-[513px] w-full md:w-[593px]">
              <img
                className="absolute left-[97px] top-[49px] h-[464px] w-full md:w-[496px]"
                alt="Vector"
                src="https://c.animaapp.com/meg2uvv4WWYlvp/img/vector-1.svg"
              />

              <div className="absolute left-[23px] top-[47px] flex h-[261px] w-full flex-col items-center justify-center gap-[16.28px] rounded-[21.71px] bg-white p-[10.86px] md:w-[220px]">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[5.43px] self-stretch">
                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[13.57px] self-stretch px-[10.86px] pb-[10.86px] pt-[8.14px]">
                    <div className="relative mt-[-0.68px] self-stretch text-[16.3px] font-medium leading-[21.7px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                      {t('application.submit')}
                    </div>

                    <div className="relative mr-[-0.11px] flex w-full flex-[0_0_auto] flex-col items-start gap-[5.43px] md:w-[173.69px]">
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

                    <div className="relative mr-[-0.11px] flex w-full flex-[0_0_auto] flex-col items-start gap-[5.43px] md:w-[173.69px]">
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
                        {t('application.amount')}
                      </div>

                      <div className="relative mr-[-2.23px] w-fit whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        42 000₽
                      </div>
                    </div>

                    <div className="relative flex flex-1 grow flex-col items-start rounded-[13.57px] bg-[#f6f8ff] px-[10.86px] py-[8.14px]">
                      <div className="relative mt-[-0.68px] w-fit whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('application.term')}
                      </div>

                      <div className="relative mr-[-0.23px] w-fit whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        {t('application.termValue')}
                      </div>
                    </div>

                    <div className="relative flex flex-1 grow flex-col items-start rounded-[13.57px] bg-[#f6f8ff] px-[10.86px] py-[8.14px]">
                      <div className="relative mt-[-0.68px] w-fit whitespace-nowrap text-[10.9px] font-normal leading-[16.3px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica]">
                        {t('application.rate')}
                      </div>

                      <div className="relative w-fit whitespace-nowrap text-[10.9px] font-medium leading-[16.3px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                        2.5%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex h-[32.57px] w-full items-center justify-center gap-[21.71px] self-stretch rounded-[16.28px] bg-gray-90 px-[21.71px] py-[8.14px]">
                  <div className="relative mt-[-0.68px] w-full self-stretch whitespace-nowrap text-center text-[10.9px] font-medium leading-[16.3px] tracking-normal text-white [font-family:'Roboto',Helvetica] md:w-[111.27px]">
                    {t('application.submitLoan')}
                  </div>
                </div>
              </div>

              <img
                className="absolute left-0 top-0 h-[420px] w-full md:w-[380px]"
                alt="Vector"
                src="https://c.animaapp.com/meg2uvv4WWYlvp/img/vector-3-1.svg"
              />

              <div className="absolute left-[185px] top-[97px] flex h-[277px] w-full flex-col items-center justify-center gap-[8.14px] rounded-[21.71px] bg-white p-[10.86px] md:w-[173px]">
                <div className="relative mt-[-0.24px] inline-flex flex-[0_0_auto] items-center gap-[6.78px] rounded-[67.85px] p-[8.14px]">
                  <div className="relative size-[124.84px]">
                    <div className="relative size-[125px]">
                      <div className="absolute left-0 top-0 size-[125px]">
                        <img
                          className="absolute left-0 top-0 h-[125px] w-full md:w-[60px]"
                          alt="Subtract"
                          src="https://c.animaapp.com/meg2uvv4WWYlvp/img/subtract.svg"
                        />

                        <img
                          className="absolute left-[65px] top-[51px] h-[74px] w-full md:w-[60px]"
                          alt="Subtract"
                          src="https://c.animaapp.com/meg2uvv4WWYlvp/img/subtract-3.svg"
                        />

                        <div className="absolute left-[22px] top-[41px] inline-flex h-[42px] flex-col items-center gap-[1.36px]">
                          <div className="relative mt-[-0.68px] w-fit whitespace-nowrap text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#9ea7bb] [font-family:'Inter',Helvetica]">
                            {t('balance.total')}
                          </div>

                          <div className="relative mb-[-0.45px] w-fit whitespace-nowrap text-center text-[19px] font-medium leading-[27.1px] tracking-normal text-[#1c222f] [font-family:'Roboto',Helvetica]">
                            122,000₽
                          </div>
                        </div>
                      </div>

                      <img
                        className="absolute left-[107px] top-[23px] h-[23px] w-full md:w-[15px]"
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

                    <div className="relative mt-[-0.68px] w-full text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[48.85px]">
                      {t('balance.current')}
                    </div>

                    <div className="relative mt-[-0.68px] w-full text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[48.85px]">
                      48,456₽
                    </div>
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[8.14px]">
                    <div className="relative size-[5.43px] rounded-[2.71px] bg-green-60" />

                    <div className="relative mt-[-0.68px] w-full text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[48.85px]">
                      {t('balance.principal')}
                    </div>

                    <div className="relative mt-[-0.68px] w-full text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[48.85px]">
                      122,000₽
                    </div>
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[8.14px]">
                    <div className="relative size-[5.43px] rounded-[2.71px] bg-yellow-50" />

                    <div className="relative mt-[-0.68px] w-full text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[48.85px]">
                      {t('balance.interest')}
                    </div>

                    <div className="relative mt-[-0.68px] w-full text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[48.85px]">
                      4,000₽
                    </div>
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[8.14px]">
                    <div className="relative size-[5.43px] rounded-[2.71px] bg-red-50" />

                    <div className="relative mt-[-0.68px] w-full text-[9.5px] font-normal leading-[13.6px] tracking-normal text-[#7a86a2] [font-family:'Roboto',Helvetica] md:w-[48.85px]">
                      {t('balance.penalty')}
                    </div>

                    <div className="relative mt-[-0.68px] w-full text-right text-[9.5px] font-medium leading-[13.6px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-[48.85px]">
                      2,700₽
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch overflow-hidden rounded-[32px] bg-[#f9fafc] p-7">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
              <p className="relative mt-[-1.00px] self-stretch text-[28px] font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                <span className="font-medium leading-9 text-[#1c222f]">
                  {t('products.microfinance.title')}
                </span>
              </p>

              <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                {t('products.microfinance.description')}
              </p>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-white p-4">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-6 tracking-normal text-blue-50 [font-family:'Roboto',Helvetica]">
                {t('products.microfinance.more')}
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
                <div className="relative flex w-full flex-col items-start gap-[17.55px] bg-[#ffffff] p-[21.94px] md:w-[289px]">
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
                      className="relative size-[13.16px]"
                      alt="Caret right"
                      src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright-1.svg"
                    />
                  </div>

                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[8.77px]">
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
                        className="relative size-[13.16px]"
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
                          {t('products.classic.year')}
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
                          {t('products.classic.firstPayment')}
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
                          {t('application.termMonths')}
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
                          {t('products.classic.firstPayment')}
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

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              187, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-full flex-col items-start gap-[1.1px] md:w-[66.9px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('application.amount')}
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
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

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              166, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-full flex-col items-start gap-[1.1px] md:w-[66.9px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('application.amount')}
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
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

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                              96, 000 ₽
                            </div>
                          </div>

                          <div className="relative flex w-full flex-col items-start gap-[1.1px] md:w-[66.9px]">
                            <div className="relative mt-[-0.55px] self-stretch text-[7.7px] font-normal leading-[11.0px] tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                              {t('application.amount')}
                            </div>

                            <div className="relative self-stretch text-[11px] font-normal leading-[15.4px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
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
              className="absolute left-[-780px] top-[-2732px] h-[347px] w-full md:w-[411px]"
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
                  className="relative size-12"
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
                  className="relative size-12"
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
                  className="relative size-12"
                  alt="Caret right"
                  src="https://c.animaapp.com/meg2uvv4WWYlvp/img/caretright.svg"
                />
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
                  className="relative size-12"
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
                  className="relative size-12"
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
