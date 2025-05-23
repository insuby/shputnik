import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { useFeedbackForm } from '../../../widgets/feedback-form';

const clientLogosRows = [
  [
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/group-31.png',
      alt: 'Logo 1',
      width: 128.17,
      height: 37.74,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/group-32.png',
      alt: 'Logo 2',
      width: 93.4,
      height: 42.18,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/mask-group.png',
      alt: 'Logo 3',
      width: 75.98,
      height: 51.98,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/mask-group-2.png',
      alt: 'Logo 4',
      width: 73.95,
      height: 43.99,
    },
  ],
  [
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/group-21.png',
      alt: 'Logo 5',
      width: 126.98,
      height: 29.77,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/group-5.png',
      alt: 'Logo 6',
      width: 109.81,
      height: 27.02,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/eman-copy-4.png',
      alt: 'Logo 7',
      width: 92.07,
      height: 26.05,
    },
  ],
  [
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/centrofinans-copy-4.png',
      alt: 'Logo 8',
      width: 164.97,
      height: 26,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/group-2-copy-4.png',
      alt: 'Logo 9',
      width: 109.89,
      height: 29.48,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/logo-copy.png',
      alt: 'Logo 10',
      width: 116.26,
      height: 44.13,
    },
  ],
  [
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/shape.png',
      alt: 'Logo 11',
      width: 86.34,
      height: 31.04,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/page-1.png',
      alt: 'Logo 12',
      width: 149.98,
      height: 30,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/mask-group-19.png',
      alt: 'Logo 13',
      width: 102.64,
      height: 30.58,
    },
  ],
  [
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/logo-1.svg',
      alt: 'Logo 14',
      width: 135,
      height: 25.96,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/logonew.svg',
      alt: 'Logo 15',
      width: 172,
      height: 29.99,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/clip-path-group.png',
      alt: 'Logo 16',
      width: 137,
      height: 26.1,
    },
  ],
  [
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/------------.svg',
      alt: 'Logo 17',
      width: 145.66,
      height: 29,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/clip-path-group-1.png',
      alt: 'Logo 18',
      width: 135,
      height: 36,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/svg.svg',
      alt: 'Logo 19',
      width: 131,
      height: 29.98,
    },
  ],
  [
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/o7ua20ow3hm6uv7atj-1.svg',
      alt: 'Logo 20',
      width: 100,
      height: 32.11,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/group-36.png',
      alt: 'Logo 21',
      width: 128,
      height: 46.98,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/-----rgb-copy.png',
      alt: 'Logo 22',
      width: 114.52,
      height: 22.12,
    },
    {
      src: 'https://c.animaapp.com/m8venh9r7flbae/img/fill-3.svg',
      alt: 'Logo 23',
      width: 56.45,
      height: 27.29,
    },
  ],
];

export const ClientLogosSection = () => {
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <section className="flex flex-wrap gap-12 py-20 px-16 md:px-22 w-full">
      <div className="flex flex-col w-full md:w-[500px] items-start gap-12">
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="font-tite-2-m text-gray-90 text-[length:var(--tite-2-m-font-size)] leading-[var(--tite-2-m-line-height)] tracking-[var(--tite-2-m-letter-spacing)] [font-style:var(--tite-2-m-font-style)]">
            Нам доверяют
          </h2>

          <p className="font-body-1-r text-gray-70 text-[length:var(--body-1-r-font-size)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] [font-style:var(--body-1-r-font-style)]">
            Наши клиенты — крупные кредитные и некредитные организации,
            работающие как онлайн, так и в розничных точках продаж.
          </p>
        </div>

        <Button
          className="px-8 py-4 rounded-[100px] text-white [background:linear-gradient(43deg,rgba(28,34,47,1)_0%,rgba(34,53,98,1)_100%)] hover:opacity-90"
          onClick={onClick}
        >
          <span className="font-body-1-r text-[length:var(--body-1-r-font-size)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] [font-style:var(--body-1-r-font-style)]">
            Начать сотрудничество
          </span>
        </Button>
      </div>

      <Card className="flex-1 bg-gray-10 rounded-3xl overflow-hidden border-none">
        <CardContent className="flex flex-col gap-12 p-12">
          {clientLogosRows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="flex items-center justify-between w-full"
            >
              {row.map((logo, logoIndex) => (
                <div
                  key={`logo-${rowIndex}-${logoIndex}`}
                  className="relative"
                  style={{
                    width: `${logo.width}px`,
                    height: `${logo.height}px`,
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};
