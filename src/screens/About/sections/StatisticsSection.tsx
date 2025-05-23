import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../components/ui/avatar';
import { Badge } from '../../../components/ui/badge';
import { Card, CardContent } from '../../../components/ui/card';
import { Separator } from '../../../components/ui/separator';

export const StatisticsSection = () => {
  const technologies = [
    { name: 'Java', color: 'bg-red-40' },
    { name: 'WildFly', color: 'bg-blue-50' },
    { name: 'Python', color: 'bg-green-50' },
    { name: 'React', color: 'bg-yellow-50' },
  ];

  const teamMembers = [
    {
      image: '/img/woman-with-tablet-device-illustrating-1.png',
      alt: 'Woman with tablet',
    },
    {
      image: '/img/woman-with-tablet-device-illustrating-1-1.png',
      alt: 'Woman with tablet',
    },
    {
      backgroundImage: '/img/frame-2.png',
    },
    {
      backgroundImage: '/img/frame-6.png',
    },
  ];

  return (
    <section className="flex flex-col gap-6 p-6 relative w-full bg-gray-10 rounded-[32px] overflow-hidden">
      <img
        className="absolute w-[1121px] h-[1030px] top-[-41px] left-[348px] z-0"
        alt="Vector"
        src="/img/vector-1.svg"
      />

      <div className="flex items-start justify-center gap-[68px] pt-24 pb-10 px-10 relative z-10">
        <div className="flex flex-col items-start gap-8 pt-4">
          <div className="flex flex-col items-start">
            <h1 className="font-title-1-m text-gray-90 text-[length:var(--title-1-m-font-size)] tracking-[var(--title-1-m-letter-spacing)] leading-[var(--title-1-m-line-height)]">
              Разработка передового <br/>программного обеспечения для Fintech.
            </h1>
          </div>

          <p className="max-w-[528px] font-body-1-r text-gray-70 text-[length:var(--body-1-r-font-size)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)]">
            Мы разрабатываем программное обеспечение для клиентов из России и
            Казахстана. Раньше писали софт и для США, Европы и Украины — пока
            нас оттуда не выписали по политическим причинам.
          </p>
        </div>

        <div className="relative w-[480px] h-[390px]">
          <div className="relative h-[390px]">
            <Card className="absolute w-[276px] h-[276px] top-[114px] left-0 rounded-[32px] overflow-hidden [background:linear-gradient(41deg,rgba(255,255,255,1)_0%,rgba(239,243,252,1)_68%,rgba(232,237,250,1)_100%)] border-none">
              <CardContent className="p-6">
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-gray-90 text-base leading-6">
                  Transactions
                </h3>

                <img
                  className="w-[230px] h-20 mt-5"
                  alt="Transactions chart"
                  src="/img/frame-462.svg"
                />

                <div className="flex gap-8 mt-10">
                  <div className="flex flex-col gap-0.5">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-gray-70 text-base leading-6">
                      All
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-gray-90 text-5xl leading-[56px]">
                      86
                    </span>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-gray-70 text-base leading-6">
                      Success
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-gray-90 text-5xl leading-[56px]">
                      73
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute w-[276px] h-[276px] top-0 left-[204px] bg-white rounded-[32px] overflow-hidden border-none">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-gray-90 text-base leading-6">
                    Wallet
                  </h3>
                  <Badge className="bg-gray-90 text-white rounded-[100px] px-6 py-2 h-auto">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-base">
                      Withdrawal
                    </span>
                  </Badge>
                </div>

                <img
                  className="w-[232px] h-20 pt-5"
                  alt="Wallet chart"
                  src="/img/frame-462-1.svg"
                />

                <div className="flex flex-col gap-0.5 mt-10">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-gray-70 text-base leading-6">
                    Balance
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-gray-90 text-5xl leading-[56px]">
                    $0.23
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-6 relative z-10">
        <Card className="bg-gray-90 rounded-3xl overflow-hidden border-none relative">
          <CardContent className="flex items-start gap-8 p-10 h-[272px]">
            <img
              className="absolute w-[926px] h-[851px] top-[-277px] left-[-111px]"
              alt="Vector"
              src="/img/vector-1-3.svg"
            />

            <img
              className="absolute w-[420px] h-[272px] top-0 left-0 object-cover"
              alt="Black"
              src="/img/black--6--1.png"
            />

            <div className="flex flex-col w-[340px] gap-4 relative z-10">
              <h2 className="font-title-1-r text-white text-[length:var(--title-1-r-font-size)] leading-[var(--title-1-r-line-height)] tracking-[var(--title-1-r-letter-spacing)]">
                12
              </h2>

              <p className="font-body-1-r text-white text-[length:var(--body-1-r-font-size)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] max-w-[241px]">
                лет на рынке разработки
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1 bg-white rounded-3xl border-none">
          <CardContent className="flex gap-[60px] p-10">
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="font-title-1-r text-gray-90 text-[length:var(--title-1-r-font-size)] leading-[var(--title-1-r-line-height)] tracking-[var(--title-1-r-letter-spacing)]">
                200+
              </h2>

              <p className="font-body-1-r text-gray-70 text-[length:var(--body-1-r-font-size)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)]">
                реализованных проектов
                <br />в России и других странах.
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    className={`${tech.color} h-8 px-3 py-2 rounded-[52px] backdrop-blur-[4.55px]`}
                  >
                    <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm leading-5">
                      {tech.name}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>

            <Separator orientation="vertical" className="h-auto" />

            <div className="flex flex-col gap-4 flex-1">
              <h2 className="font-title-1-r text-gray-90 text-[length:var(--title-1-r-font-size)] leading-[var(--title-1-r-line-height)] tracking-[var(--title-1-r-letter-spacing)]">
                30+
              </h2>

              <div className="flex flex-col justify-between h-full">
                <p className="font-body-1-r text-gray-70 text-[length:var(--body-1-r-font-size)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] max-w-[350px]">
                    In-house разработчиков
                </p>

                <div className="flex items-center">
                  {teamMembers.map((member, index) => (
                    <Avatar
                      key={index}
                      className="w-[52px] h-[52px] border-2 border-solid border-white rounded-3xl -ml-2 first:ml-0"
                      style={
                        member.backgroundImage
                          ? {
                              backgroundImage: `url(${member.backgroundImage})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }
                          : {}
                      }
                    >
                      {member.image && (
                        <AvatarImage
                          src={member.image}
                          alt={member.alt || ''}
                          className="w-12 h-12"
                        />
                      )}
                      {!member.image && !member.backgroundImage && (
                        <AvatarFallback className="bg-gray-10 text-gray-70 text-base">
                          +3
                        </AvatarFallback>
                      )}
                    </Avatar>
                  ))}
                  <Avatar className="w-[52px] h-[52px] border-2 border-solid border-white rounded-3xl -ml-1 bg-gray-10">
                    <AvatarFallback className="bg-gray-10 text-gray-70 text-base">
                      +3
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
