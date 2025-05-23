import { Link } from 'react-router-dom';
import { RoutesPath } from '../../../routes-path.tsx';

const footerData = {
  software: {
    title: "Программное обеспечение",
    links: [
      "Микрофинансовое кредитование",
      "BNPL",
      "Банковское кредитование",
      "Автокредитование",
      "Кредитование бизнеса",
      "Исламское кредитование",
      "POS-кредитование",
      "P2P-кредитование",
    ],
  },
  additionalSoftware: {
    title: "Программное обеспечение",
    links: [
      "Выгрузка данных в КБ",
      "Принятие решений",
      "Учет вкладов и инвестиций",
    ],
  },
  services: {
    title: "Услуги",
    links: ["Заказная разработка"],
  },
  company: {
    title: "Компания",
    links: ["О компании", "Отзывы", "Вакансии", "Конфиденциальность"],
  },
  contacts: {
    title: "Контакты",
    phone: "+7 (495) 006-21-57",
    address: "183038, Мурманск,\nулица Октябрьская, 2а, офис 2",
  },
};

export const FooterSection = () => {
  return (
    <footer className="flex flex-col items-start gap-[60px] px-[88px] py-[60px] relative w-full bg-gray-90 rounded-[32px] overflow-hidden">
      <img
        className="absolute w-[926px] h-[851px] top-[-83px] right-0"
        alt="Vector"
        src="https://c.animaapp.com/m8venh9r7flbae/img/vector-1-1.svg"
      />

      <div className="flex items-start gap-12 relative w-full">
        <div className="flex flex-col w-[268px] items-start justify-between">
          <div className="flex flex-col items-start gap-4">
            <div className="relative w-28 h-[22px]">
              <Link to={RoutesPath.MAIN} className="w-[111px] h-[23px]">
                  <div className="relative w-[111px] h-[23px]">
                    <img
                      className="absolute size-full top-0 left-0"
                      alt="Group"
                      src="/img/logo-footer.png"
                    />
                </div>
              </Link>
            </div>

            <p className="w-[233px] opacity-40 font-body-3-r text-white whitespace-pre-line">
              Программное обеспечение
              <br />и разработка современных
              <br />
              fintech-решений
            </p>
          </div>

          <p className="w-[233px] opacity-40 font-body-3-r text-white whitespace-pre-line">
            © 2022 Sputnik – <br />
            Автоматизация бизнес-процессов
          </p>
        </div>

        <div className="flex flex-col w-[268px] gap-4">
          <p className="opacity-40 font-body-3-r text-white">
            {footerData.software.title}
          </p>

          <div className="flex flex-col items-start gap-3 w-full">
            {footerData.software.links.map((link, index) => (
              <a href="/" key={index} className="font-body-2-r text-white hover:underline">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-[268px] items-start gap-8">
          <div className="flex flex-col gap-4 w-full">
            <p className="opacity-40 font-body-3-r text-white">
              {footerData.additionalSoftware.title}
            </p>

            <div className="flex flex-col items-start gap-3 w-full">
              {footerData.additionalSoftware.links.map((link, index) => (
                <a href="/" key={index} className="font-body-2-r text-white hover:underline">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <p className="opacity-40 font-body-3-r text-white">
              {footerData.services.title}
            </p>

            <div className="flex flex-col items-start gap-3 w-full">
              {footerData.services.links.map((link, index) => (
                <a href="/" key={index} className="font-body-2-r text-white hover:underline">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[268px] items-start gap-8">
          <div className="flex flex-col gap-4 w-full">
            <p className="opacity-40 font-body-3-r text-white">
              {footerData.company.title}
            </p>

            <div className="flex flex-col items-start gap-3 w-full">
              {footerData.company.links.map((link, index) => (
                <a href="/" key={index} className="font-body-2-r text-white hover:underline">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <p className="opacity-40 font-body-3-r text-white">
              {footerData.contacts.title}
            </p>

            <div className="flex flex-col items-start gap-3 w-full">
              <a href={`tel:${footerData.contacts.phone.replace(/[^\d+]/g, '')}`} className="font-bold text-white text-xl leading-7 hover:text-[#3573fc]">
                {footerData.contacts.phone}
              </a>
              <p className="opacity-40 font-body-2-r text-white whitespace-pre-line">
                {footerData.contacts.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
