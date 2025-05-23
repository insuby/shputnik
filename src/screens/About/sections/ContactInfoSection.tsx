import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { useFeedbackForm } from '../../../widgets/feedback-form';

export const ContactInfoSection = () => {
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <section className="mb-4 relative w-full rounded-[32px] bg-gray-10 overflow-hidden">
      <img
        className="absolute w-[843px] h-[742px] top-0 right-0"
        alt="Vector"
        src="https://c.animaapp.com/m8venh9r7flbae/img/vector-1-2.svg"
      />

      <div className="flex flex-col items-center justify-center gap-12 p-[88px] relative z-10">
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="font-tite-2-m text-gray-90 text-[length:var(--tite-2-m-font-size)] leading-[var(--tite-2-m-line-height)] tracking-[var(--tite-2-m-letter-spacing)] [font-style:var(--tite-2-m-font-style)]">
            Представительства
          </h2>
          <p className="max-w-[528px] font-body-1-r text-gray-70 text-[length:var(--body-1-r-font-size)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] [font-style:var(--body-1-r-font-style)]">
            По любым вопросам Вы можете обратиться в одно из наших
            представительств в России
          </p>
        </div>

        <div className="flex w-full gap-6">
          <Card className="flex-1 rounded-3xl overflow-hidden bg-white p-0">
            <CardContent className="flex flex-col items-start gap-8 p-12">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex items-center justify-center gap-3 w-full">
                  <h3 className="flex-1 font-header-1-m text-gray-90 text-[length:var(--header-1-m-font-size)] leading-[var(--header-1-m-line-height)] tracking-[var(--header-1-m-letter-spacing)] [font-style:var(--header-1-m-font-style)]">
                    Россия
                  </h3>
                  <div className="relative w-12 h-12">
                    <img
                      className="absolute w-[43px] h-[43px] top-[3px] left-[3px]"
                      alt="Russian flag"
                      src="/img/group-4.png"
                    />
                  </div>
                </div>

                <address className="not-italic self-stretch font-body-1-r text-gray-70 text-[length:var(--body-1-r-font-size)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] [font-style:var(--body-1-r-font-style)]">
                  183038, Мурманск,
                  <br />
                  улица Октябрьская,
                  <br />
                  дом 2а, офис 2
                </address>

                <a
                  href="tel:+74950062157"
                  className="font-body-1-r text-gray-70 text-[length:var(--body-1-r-font-size)] tracking-[var(--body-1-r-letter-spacing)] leading-[var(--body-1-r-line-height)] [font-style:var(--body-1-r-font-style)]"
                >
                  + 7 (495) 006 21 57
                </a>
              </div>

              <Button
                className="px-8 py-4 rounded-[100px] [background:linear-gradient(43deg,rgba(28,34,47,1)_0%,rgba(34,53,98,1)_100%)] text-white font-body-1-r"
                onClick={onClick}
              >
                Связаться
              </Button>
            </CardContent>
          </Card>

          <Card className="flex-1 rounded-3xl overflow-hidden bg-white p-0">
            <CardContent className="p-0">
              <div className="relative w-full h-[380px]">
                <img
                  className="w-full h-full object-cover"
                  alt="Office photo"
                  src="https://c.animaapp.com/m8venh9r7flbae/img/photo-2025-02-05-22-38-11-1.png"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
