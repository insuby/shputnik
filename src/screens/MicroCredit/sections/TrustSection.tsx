import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { useFeedbackForm } from '../../../widgets/feedback-form';

const partnerLogos = [
  [
    {
      id: 'logo1',
      width: '128.17px',
      height: '37.74px',
      images: [
        {
          src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-1.svg',
          className: 'absolute w-3 h-2.5 top-[19px] left-[117px]',
          alt: 'Fill',
        },
        {
          src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-3.svg',
          className: 'absolute w-[5px] h-[3px] top-4 left-[108px]',
          alt: 'Fill',
        },
        {
          src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-5.svg',
          className: 'absolute w-2.5 h-[11px] top-[19px] left-[52px]',
          alt: 'Fill',
        },
        {
          src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-7.svg',
          className: 'absolute w-[9px] h-[11px] top-[19px] left-[41px]',
          alt: 'Fill',
        },
        {
          src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-15.svg',
          className: 'absolute w-[9px] h-2.5 top-[19px] left-[73px]',
          alt: 'Fill',
        },
        {
          src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-11-1.svg',
          className: 'absolute w-2 h-[11px] top-[19px] left-16',
          alt: 'Fill',
        },
        {
          src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-13.svg',
          className: 'absolute w-2 h-[11px] top-[19px] left-[86px]',
          alt: 'Fill',
        },
        {
          src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-15.svg',
          className: 'absolute w-[9px] h-2.5 top-[19px] left-[106px]',
          alt: 'Fill',
        },
        {
          src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-17.svg',
          className: 'absolute w-2.5 h-2.5 top-[19px] left-[95px]',
          alt: 'Fill',
        },
      ],
      bgDiv: {
        className:
          'absolute w-9 h-[38px] top-0 left-0 bg-[url(https://c.animaapp.com/m8vtn66s4ZWe7w/img/group-31.png)] bg-[100%_100%]',
        image: {
          src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-32.svg',
          className: 'absolute w-[3px] h-[3px] top-[21px] left-[23px]',
          alt: 'Fill',
        },
      },
    },
    {
      id: 'logo2',
      width: '93.4px',
      height: '42.18px',
      content: (
        <div className="relative w-[93px] h-[42px]">
          <img
            className="absolute w-[93px] h-9 top-0 left-0"
            alt="Group"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/group-32.png"
          />
          <img
            className="absolute w-6 h-[7px] top-[25px] left-[15px]"
            alt="Fill"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-41.svg"
          />
          <img
            className="absolute w-[79px] h-[18px] top-6 left-[15px]"
            alt="Group"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/group-102.png"
          />
        </div>
      ),
    },
    {
      id: 'logo3',
      width: '75.98px',
      height: '51.98px',
      content: (
        <>
          <div className="absolute w-[76px] h-[9px] top-[43px] left-0 bg-[url(https://c.animaapp.com/m8vtn66s4ZWe7w/img/clip-2.svg)] bg-[100%_100%]">
            <img
              className="w-[76px] h-[9px] absolute top-0 left-0"
              alt="Mask group"
              src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/mask-group.png"
            />
          </div>
          <div className="absolute w-[41px] h-10 top-0 left-[18px] bg-[url(https://c.animaapp.com/m8vtn66s4ZWe7w/img/clip-5.svg)] bg-[100%_100%]">
            <img
              className="w-[41px] h-10 absolute top-0 left-0"
              alt="Mask group"
              src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/mask-group-1.png"
            />
          </div>
        </>
      ),
    },
    {
      id: 'logo4',
      width: '73.95px',
      height: '43.99px',
      content: (
        <div className="relative w-[74px] h-11">
          <img
            className="absolute w-1 h-1.5 top-[31px] left-[55px]"
            alt="Fill"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-1-1.svg"
          />
          {Array.from({ length: 17 }).map((_, index) => (
            <img
              key={`mask-${index}`}
              className="absolute w-[74px] h-11 top-0 left-0"
              alt="Mask group"
              src={`https://c.animaapp.com/m8vtn66s4ZWe7w/img/mask-group-${
                index + 2
              }.png`}
            />
          ))}
        </div>
      ),
    },
  ],
  [
    {
      id: 'logo5',
      width: '121.91px',
      height: '30px',
      content: (
        <>
          <div className="absolute w-[30px] h-[30px] top-0 left-0">
            <img
              className="absolute w-[27px] h-7 top-px left-px"
              alt="Fill"
              src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-1-3.svg"
            />
            <img
              className="absolute w-[30px] h-[30px] top-0 left-0"
              alt="Group"
              src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/group-5.png"
            />
          </div>
          <img
            className="absolute w-[11px] h-[17px] top-1.5 left-9"
            alt="Fill"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-6.svg"
          />
          <img
            className="absolute w-[3px] h-[3px] top-1.5 left-[49px]"
            alt="Fill"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-10-1.svg"
          />
          <img
            className="absolute w-[3px] h-3 top-[11px] left-[49px]"
            alt="Fill"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-10-1.svg"
          />
          <img
            className="absolute w-[18px] h-3 top-[11px] left-[55px]"
            alt="Fill"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-11.svg"
          />
          <img
            className="absolute w-[11px] h-[17px] top-[11px] left-[75px]"
            alt="Fill"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-12.svg"
          />
          <img
            className="absolute w-1 h-4 top-1.5 left-[89px]"
            alt="Fill"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-13-1.svg"
          />
          <img
            className="absolute w-3 h-4 top-[11px] left-[95px]"
            alt="Fill"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-14-1.svg"
          />
          <img
            className="absolute w-[9px] h-4 top-1.5 left-[109px]"
            alt="Fill"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-18.svg"
          />
          <img
            className="absolute w-[3px] h-[3px] top-1.5 left-[119px]"
            alt="Fill"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-10-1.svg"
          />
          <img
            className="absolute w-[3px] h-3 top-[11px] left-[119px]"
            alt="Fill"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-10-1.svg"
          />
        </>
      ),
    },
    {
      id: 'logo6',
      width: '136.48px',
      height: '32px',
      content: (
        <>
          <img
            className="absolute w-3.5 h-3.5 top-[9px] left-[17px]"
            alt="Fill"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-1-2.svg"
          />
          <div className="absolute w-4 h-8 top-0 left-0">
            <img
              className="absolute w-3.5 h-3.5 top-[9px] left-px"
              alt="Fill"
              src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-2.svg"
            />
            <img
              className="absolute w-3.5 h-3.5 top-0 left-0"
              alt="Fill"
              src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-3-1.svg"
            />
            <img
              className="w-3.5 h-3.5 top-[18px] absolute left-0"
              alt="Fill"
              src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/fill-4-1.svg"
            />
          </div>
          <img
            className="absolute w-[93px] h-[17px] top-2 left-11"
            alt="Group"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/group-21-1.png"
          />
        </>
      ),
    },
    {
      id: 'logo7',
      width: '106.05px',
      height: '30px',
      image: {
        src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/eman-copy-4.png',
        alt: 'Eman copy',
      },
    },
  ],
  [
    {
      id: 'logo8',
      width: '164.97px',
      height: '26px',
      image: {
        src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/centrofinans-copy-4.png',
        alt: 'Centrofinans copy',
      },
    },
    {
      id: 'logo9',
      width: '109.89px',
      height: '29.48px',
      image: {
        src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/group-2-copy-4.png',
        alt: 'Group copy',
      },
    },
    {
      id: 'logo10',
      width: '116.26px',
      height: '44.13px',
      image: {
        src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/logo-copy.png',
        alt: 'Logo copy',
      },
    },
  ],
  [
    {
      id: 'logo11',
      width: '86.34px',
      height: '31.04px',
      content: (
        <div className="w-[86px] h-[31px]">
          <div className="relative h-[31px]">
            <img
              className="absolute w-[86px] h-[19px] top-0 left-0"
              alt="Shape"
              src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/shape.png"
            />
            <img
              className="absolute w-[84px] h-[7px] top-6 left-px"
              alt="Shape"
              src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/shape-1.png"
            />
          </div>
        </div>
      ),
    },
    {
      id: 'logo12',
      width: '149.98px',
      height: '30px',
      content: (
        <>
          <img
            className="absolute w-11 h-[30px] top-0 left-0"
            alt="Page"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/page-1.png"
          />
          <img
            className="absolute w-[95px] h-3 top-2.5 left-[55px]"
            alt="Migmoney"
            src="https://c.animaapp.com/m8vtn66s4ZWe7w/img/migmoney.svg"
          />
        </>
      ),
    },
    {
      id: 'logo13',
      width: '102.64px',
      height: '30.58px',
      className:
        'bg-[url(https://c.animaapp.com/m8vtn66s4ZWe7w/img/mask-group-18.png)] bg-[100%_100%]',
      image: {
        src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/mask-group-19.png',
        className: 'w-[103px] h-[31px] absolute top-0 left-0',
        alt: 'Mask group',
      },
    },
  ],
  [
    {
      id: 'logo14',
      width: '135px',
      height: '25.96px',
      image: {
        src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/logo-1.svg',
        alt: 'Logo',
        className: 'relative',
      },
    },
    {
      id: 'logo15',
      width: '172px',
      height: '1px',
      image: {
        src: 'https://c.animaapp.com/m8vtn66s4ZWe7w/img/logonew.svg',
        alt: 'Logonew',
        className: 'relative',
      },
    },
  ],
];

export const TrustSection = () => {
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <section className="flex items-start gap-12 p-[88px] relative w-full">
      <div className="flex flex-col max-w-[500px] items-start gap-12 relative">
        <div className="flex flex-col items-start gap-4 relative w-full">
          <h2 className="relative w-full mt-[-1.00px] font-tite-2-m font-[number:var(--tite-2-m-font-weight)] text-gray-90 text-[length:var(--tite-2-m-font-size)] tracking-[var(--tite-2-m-letter-spacing)] leading-[var(--tite-2-m-line-height)] [font-style:var(--tite-2-m-font-style)]">
            Нам доверяют
          </h2>

          <p className="relative w-full font-body-1-r font-[number:var(--body-1-r-font-weight)] text-gray-70 text-[length:var(--body-1-r-font-size)] tracking-[var(--body-1-r-letter-spacing)] leading-[var(--body-1-r-line-height)] [font-style:var(--body-1-r-font-style)]">
            Наши клиенты — крупные кредитные и некредитные организации,
            работающие как онлайн, так и в розничных точках продаж.
          </p>
        </div>

        <Button
          className="px-8 py-4 [background:linear-gradient(43deg,rgba(28,34,47,1)_0%,rgba(34,53,98,1)_100%)] rounded-[100px] text-white"
          onClick={onClick}
        >
          <span className="w-fit mt-[-1.00px] text-[#ffffff] text-[length:var(--body-1-r-font-size)] leading-[var(--body-1-r-line-height)] whitespace-nowrap relative font-body-1-r font-[number:var(--body-1-r-font-weight)] tracking-[var(--body-1-r-letter-spacing)] [font-style:var(--body-1-r-font-style)]">
            Начать сотрудничество
          </span>
        </Button>
      </div>

      <Card className="flex flex-col h-[400px] items-start gap-12 p-12 bg-gray-10 rounded-3xl overflow-hidden relative flex-1">
        <CardContent className="p-0 w-full h-full relative">
          <div className="flex items-center justify-between relative w-full">
            {partnerLogos[0].map((logo) => (
              <div
                key={logo.id}
                className="relative"
                style={{ width: logo.width, height: logo.height }}
              >
                {logo.content ? (
                  logo.content
                ) : logo.images ? (
                  <>
                    {logo.images.map((img, index) => (
                      <img
                        key={index}
                        className={img.className}
                        alt={img.alt}
                        src={img.src}
                      />
                    ))}
                    {logo.bgDiv && (
                      <div className={logo.bgDiv.className}>
                        <img
                          className={logo.bgDiv.image.className}
                          alt={logo.bgDiv.image.alt}
                          src={logo.bgDiv.image.src}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  logo.image && (
                    <img
                      className={
                        logo.image.className || 'relative w-full h-full'
                      }
                      alt={logo.image.alt}
                      src={logo.image.src}
                    />
                  )
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between relative w-full mt-12">
            {partnerLogos[1].map((logo) => (
              <div
                key={logo.id}
                className={`relative ${logo.className || ''}`}
                style={{ width: logo.width, height: logo.height }}
              >
                {logo.content
                  ? logo.content
                  : logo.image && (
                      <img
                        className={
                          logo.image.className || 'relative w-full h-full'
                        }
                        alt={logo.image.alt}
                        src={logo.image.src}
                      />
                    )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between relative w-full mt-12">
            {partnerLogos[2].map((logo) => (
              <div
                key={logo.id}
                className="relative"
                style={{ width: logo.width, height: logo.height }}
              >
                <img
                  className="relative w-full h-full"
                  alt={logo.image.alt}
                  src={logo.image.src}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between relative w-full mt-12">
            {partnerLogos[3].map((logo) => (
              <div
                key={logo.id}
                className={`relative ${logo.className || ''}`}
                style={{ width: logo.width, height: logo.height }}
              >
                {logo.content
                  ? logo.content
                  : logo.image && (
                      <img
                        className={
                          logo.image.className || 'relative w-full h-full'
                        }
                        alt={logo.image.alt}
                        src={logo.image.src}
                      />
                    )}
              </div>
            ))}
          </div>

          {/* Gradient overlay */}
          <div className="absolute w-full h-20 bottom-12 left-0 [background:linear-gradient(180deg,rgba(248,248,250,0)_0%,rgba(248,248,250,1)_100%)]" />
          <div className="absolute w-full h-12 bottom-0 left-0 bg-gray-10" />
        </CardContent>
      </Card>
    </section>
  );
};
