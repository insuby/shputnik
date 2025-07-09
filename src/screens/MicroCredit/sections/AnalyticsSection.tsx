
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

// Define partner logos data for better organization and mapping
const partnerLogos = {
  row1: [
    {
      src: "/img/group.png",
      alt: "Group",
      width: "100px",
      height: "20.51px",
      type: "background",
    },
    {
      src: "/img/odnoklassniki-ok.png",
      alt: "Odnoklassniki ok",
      width: "144.69px",
      height: "30.65px",
    },
    {
      src: "/img/logo-black.png",
      alt: "Logo black",
      width: "74.32px",
      height: "47.01px",
    },
    {
      src: "/img/contact-log-cmyk.png",
      alt: "Contact log CMYK",
      width: "75.62px",
      height: "45.86px",
    },
  ],
  row2: [
    {
      src: "/img/group-17.png",
      alt: "Group",
      width: "114.86px",
      height: "48px",
    },
    {
      type: "composite",
      elements: [
        {
          src: "/img/group-7.png",
          alt: "Group",
          width: "26px",
          height: "27px",
          position: { top: 0, left: 0 },
        },
        {
          src: "/img/group-8.png",
          alt: "Group",
          width: "125px",
          height: "13px",
          position: { top: "8px", left: "35px" },
        },
      ],
      width: "159.77px",
      height: "26.79px",
    },
    {
      src: "/img/visa-inc--logo.png",
      alt: "Visa inc logo",
      width: "59.59px",
      height: "19.28px",
    },
    {
      src: "/img/vkcom.png",
      alt: "Vkcom",
      width: "32.71px",
      height: "19.21px",
    },
    {
      src: "/img/logo-full-eng.png",
      alt: "Logo full eng",
      width: "80px",
      height: "43px",
    },
  ],
  row3: [
    {
      type: "composite",
      elements: [
        {
          src: "/img/group-23.png",
          alt: "Group",
          width: "30px",
          height: "20px",
          position: { top: 0, left: "13px" },
          isBackground: true,
        },
        {
          src: "/img/-------.svg",
          alt: "Img",
          width: "57px",
          height: "10px",
          position: { top: "27px", left: 0 },
        },
      ],
      width: "57.08px",
      height: "37.01px",
    },
    {
      src: "/img/group-18.png",
      alt: "Group",
      width: "134.51px",
      height: "42.29px",
    },
    {
      src: "/img/g12.png",
      alt: "G12",
      width: "108.59px",
      height: "21.07px",
      type: "background",
    },
    {
      src: "/img/master-card-logo.png",
      alt: "Master card logo",
      width: "64px",
      height: "38.19px",
    },
    {
      src: "/img/logo-qiwi-rgb--2-.png",
      alt: "Logo qiwi rgb",
      width: "83px",
      height: "36px",
    },
  ],
  row4: [
    {
      src: "/img/zolotayakorona.png",
      alt: "Zolotaya korona",
      width: "79.97px",
      height: "38.25px",
    },
    {
      src: "/img/group-20.png",
      alt: "Group",
      width: "137.39px",
      height: "22.69px",
    },
    {
      src: "/img/yandex-pay-logo--1-.png",
      alt: "Yandex pay logo",
      width: "81.39px",
      height: "28.39px",
    },
    {
      src: "/img/logo--1-.png",
      alt: "Logo",
      width: "111.93px",
      height: "31.07px",
      type: "background",
    },
  ],
  row5: [
    {
      src: "/img/logo-light.png",
      alt: "Logo light",
      width: "119.9px",
      height: "15.86px",
      type: "background",
    },
    {
      src: "/img/group-23-1.png",
      alt: "Group",
      width: "117.78px",
      height: "33.38px",
    },
    {
      src: "/img/group-21.png",
      alt: "Group",
      width: "102.85px",
      height: "29.99px",
    },
    {
      src: "/img/group-25.png",
      alt: "Group",
      width: "98.34px",
      height: "25.96px",
    },
  ],
  row6: [
    {
      type: "government",
      title: "Федеральная служба судебных приставов",
      icon: {
        background: "/img/fill-26.svg",
        elements: [
          {
            src: "/img/rectangle.svg",
            alt: "Rectangle",
            width: "2px",
            height: "5px",
            position: { top: "25px", left: "20px" },
          },
          {
            src: "/img/rectangle-2.png",
            alt: "Rectangle",
            width: "4px",
            height: "2px",
            position: { top: "28px", left: "19px" },
          },
          {
            src: "/img/oval-20.svg",
            alt: "Oval",
            width: "2px",
            height: "2px",
            position: { top: "22px", left: "20px" },
          },
        ],
      },
      width: "177px",
      height: "49px",
    },
    {
      type: "government",
      title: "Федеральная миграционная служба",
      icon: {
        background: "/img/fill-26.svg",
        elements: [
          {
            src: "/img/path-9-1.svg",
            alt: "Path",
            width: "10px",
            height: "10px",
            position: { top: "21px", left: "16px" },
          },
          {
            src: "/img/path-9.svg",
            alt: "Path",
            width: "11px",
            height: "11px",
            position: { top: "20px", left: "16px" },
          },
        ],
      },
      width: "157px",
      height: "49px",
    },
    {
      type: "government",
      title: "Федеральная налоговая служба",
      icon: {
        elements: [
          {
            src: "/img/fill-26-copy-2.svg",
            alt: "Fill copy",
            width: "26px",
            height: "28px",
            position: { top: "9px", left: "10px" },
          },
          {
            src: "/img/oval.svg",
            alt: "Oval",
            width: "46px",
            height: "46px",
            position: { top: "0", left: "0" },
          },
        ],
      },
      width: "153.5px",
      height: "47px",
    },
  ],
};

export const AnalyticsSection = () => {
  return (
    <Card className="flex items-start gap-[88px] p-[88px] relative w-full rounded-[32px] overflow-hidden [background:linear-gradient(43deg,rgba(28,34,47,1)_0%,rgba(34,53,98,1)_100%)] border-0">
      <img
        className="absolute w-[1204px] h-[1060px] top-[143px] left-[109px]"
        alt="Vector"
        src="/img/vector-1.svg"
      />

      <CardContent className="flex flex-col w-[500px] items-start gap-12 relative p-0">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
          <h2 className="relative self-stretch mt-[-1.00px] font-tite-2-m font-[number:var(--tite-2-m-font-weight)] text-white text-[length:var(--tite-2-m-font-size)] tracking-[var(--tite-2-m-letter-spacing)] leading-[var(--tite-2-m-line-height)] [font-style:var(--tite-2-m-font-style)]">
            Интеграции
          </h2>

          <p className="relative self-stretch opacity-50 font-body-1-r font-[number:var(--body-1-r-font-weight)] text-white text-[length:var(--body-1-r-font-size)] tracking-[var(--body-1-r-letter-spacing)] leading-[var(--body-1-r-line-height)] [font-style:var(--body-1-r-font-style)]">
            Кредитный конвейер тесно интегрирован с большим количеством
            источников информации, государственных служб, платежных систем,
            лидогенераторов, рекламных и других сервисов
          </p>
        </div>

        <Button className="px-8 py-4 bg-white hover:bg-white/90 text-blue-50 rounded-[100px]">
          <span className="w-fit mt-[-1.00px] text-blue-50 text-[length:var(--body-1-r-font-size)] leading-[var(--body-1-r-line-height)] whitespace-nowrap relative font-body-1-r font-[number:var(--body-1-r-font-weight)] tracking-[var(--body-1-r-letter-spacing)] [font-style:var(--body-1-r-font-style)]">
            Попробовать
          </span>
        </Button>
      </CardContent>

      <CardContent className="flex flex-col items-start gap-12 opacity-50 relative flex-1 grow p-0">
        {/* Row 1 */}
        <div className="flex items-center justify-between relative self-stretch w-full">
          {partnerLogos.row1.map((logo, index) =>
            logo.type === "background" ? (
              <div
                key={index}
                className="relative"
                style={{
                  width: logo.width,
                  height: logo.height,
                  backgroundImage: `url(${logo.src})`,
                  backgroundSize: "100% 100%",
                }}
              />
            ) : (
              <img
                key={index}
                className="relative"
                style={{ width: logo.width, height: logo.height }}
                alt={logo.alt}
                src={logo.src}
              />
            ),
          )}
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-between relative self-stretch w-full">
          {partnerLogos.row2.map((logo, index) =>
            logo.type === "composite" ? (
              <div
                key={index}
                className="relative"
                style={{ width: logo.width, height: logo.height }}
              >
                {logo.elements.map((element, elemIndex) => (
                  <img
                    key={elemIndex}
                    className="absolute"
                    style={{
                      width: element.width,
                      height: element.height,
                      top: element.position.top,
                      left: element.position.left,
                    }}
                    alt={element.alt}
                    src={element.src}
                  />
                ))}
              </div>
            ) : (
              <img
                key={index}
                className="relative"
                style={{ width: logo.width, height: logo.height }}
                alt={logo.alt}
                src={logo.src}
              />
            ),
          )}
        </div>

        {/* Row 3 */}
        <div className="flex items-center justify-between relative self-stretch w-full">
          {partnerLogos.row3.map((logo, index) => {
            if (logo.type === "composite") {
              return (
                <div
                  key={index}
                  className="relative"
                  style={{ width: logo.width, height: logo.height }}
                >
                  {logo.elements.map((element, elemIndex) =>
                    element.isBackground ? (
                      <div
                        key={elemIndex}
                        className="absolute"
                        style={{
                          width: element.width,
                          height: element.height,
                          top: element.position.top,
                          left: element.position.left,
                          backgroundImage: `url(${element.src})`,
                          backgroundSize: "100% 100%",
                        }}
                      />
                    ) : (
                      <img
                        key={elemIndex}
                        className="absolute"
                        style={{
                          width: element.width,
                          height: element.height,
                          top: element.position.top,
                          left: element.position.left,
                        }}
                        alt={element.alt}
                        src={element.src}
                      />
                    ),
                  )}
                </div>
              );
            } else if (logo.type === "background") {
              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    width: logo.width,
                    height: logo.height,
                    backgroundImage: `url(${logo.src})`,
                    backgroundSize: "100% 100%",
                  }}
                />
              );
            } else {
              return (
                <img
                  key={index}
                  className="relative"
                  style={{ width: logo.width, height: logo.height }}
                  alt={logo.alt}
                  src={logo.src}
                />
              );
            }
          })}
        </div>

        {/* Row 4 */}
        <div className="flex items-center justify-between relative self-stretch w-full">
          {partnerLogos.row4.map((logo, index) =>
            logo.type === "background" ? (
              <div
                key={index}
                className="relative"
                style={{
                  width: logo.width,
                  height: logo.height,
                  backgroundImage: `url(${logo.src})`,
                  backgroundSize: "100% 100%",
                }}
              />
            ) : (
              <img
                key={index}
                className="relative"
                style={{ width: logo.width, height: logo.height }}
                alt={logo.alt}
                src={logo.src}
              />
            ),
          )}
        </div>

        {/* Row 5 */}
        <div className="flex items-center justify-between relative self-stretch w-full">
          {partnerLogos.row5.map((logo, index) =>
            logo.type === "background" ? (
              <div
                key={index}
                className="relative"
                style={{
                  width: logo.width,
                  height: logo.height,
                  backgroundImage: `url(${logo.src})`,
                  backgroundSize: "100% 100%",
                }}
              />
            ) : (
              <img
                key={index}
                className="relative"
                style={{ width: logo.width, height: logo.height }}
                alt={logo.alt}
                src={logo.src}
              />
            ),
          )}
        </div>

        {/* Row 6 - Government services */}
        <div className="flex items-center justify-between relative self-stretch w-full">
          {partnerLogos.row6.map((service, index) => (
            <div
              key={index}
              className="relative"
              style={{ width: service.width, height: service.height }}
            >
              {service.type === "government" && (
                <>
                  {/* Icon background */}
                  {service.icon.background && (
                    <div
                      className="absolute w-[42px] h-[46px] top-0 left-0"
                      style={{
                        backgroundImage: `url(${service.icon.background})`,
                        backgroundSize: "100% 100%",
                      }}
                    >
                      {service.icon.elements.map((element, elemIndex) => (
                        <img
                          key={elemIndex}
                          className="absolute"
                          style={{
                            width: element.width,
                            height: element.height,
                            top: element.position.top,
                            left: element.position.left,
                          }}
                          alt={element.alt}
                          src={element.src}
                        />
                      ))}
                    </div>
                  )}

                  {/* Icon without background */}
                  {!service.icon.background &&
                    service.icon.elements.map((element, elemIndex) => (
                      <img
                        key={elemIndex}
                        className="absolute"
                        style={{
                          width: element.width,
                          height: element.height,
                          top: element.position.top,
                          left: element.position.left,
                        }}
                        alt={element.alt}
                        src={element.src}
                      />
                    ))}

                  {/* Separator line */}
                  <img
                    className="absolute w-px h-5 top-[15px] left-[52px]"
                    alt="Line copy"
                    src="/img/line-copy-2.svg"
                  />

                  {/* Title */}
                  <div className="absolute top-0.5 left-16 h-[47px]">
                    {service.title ===
                      "Федеральная служба судебных приставов" && (
                        <div className="relative w-[113px] h-[47px]">
                          <div className="absolute top-0 left-0 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                            Федеральная
                            служба&nbsp;судебных
                            приставов
                          </div>
                        </div>
                      )}

                    {service.title === "Федеральная миграционная служба" && (
                      <div className="relative w-[93px] h-[47px]">
                        <div className="absolute top-0 left-0 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                          Федеральная
                          миграционная
                          служба
                        </div>
                      </div>
                    )}

                    {service.title === "Федеральная налоговая служба" && (
                      <div className="relative w-[89px] h-[47px]">
                        <div className="absolute top-0 left-0 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                          Федеральная
                          налоговая
                          служба
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
