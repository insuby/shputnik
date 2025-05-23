import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const jobListings = [
  {
    id: 'job-1',
    title: 'Middle Java developer',
    tags: ['Полный рабочий день', 'Удалённо'],
    isOpen: true,
    responsibilities: [
      'Участие в разработке существующих и новых проектов в составе команды',
    ],
    requirements: [
      'Опыт разработки на Java EE от 2 лет',
      'Опыт работы с EJB от 1 года',
      'Опыт применения REST, Hibernate, JBoss',
      'Опыт работы с PostgreSQL от 1 года',
      'Опыт работы с Maven, Git',
      'Знание и умение применять принципы ООП',
    ],
    conditions: [
      'Возможность обучения и развития',
      'Возможность карьерного роста',
      'Удаленный режим работы с гибким графиком',
    ],
  },
  {
    id: 'job-2',
    title: 'Тестировщик ПО',
    tags: ['Полный рабочий день', 'Удалённо'],
    isOpen: false,
    responsibilities: [
      'Изучение бизнес-требований, полученных от заказчика, и/или технических требований',
      'Функциональное тестирование приложений',
      'Оценка качества по результатам тестирования и анализ информации о качестве',
      'Оформление ошибок в багтрекере, диагностика, взаимодействие с разработчиками',
    ],
    requirements: [
      'Знание принципов тестирования ПО',
      'Опыт написания тестовых сценариев',
      'Опыт составления чек-листов',
      'Опыт проведения функционального тестирования',
      'Понимание основ юзабилити',
      'Коммуникативные способности, умение работать в команде',
    ],
    goodToKnow: [
      'Опыт написания запросов в БД',
      'Опыт составления автоматизированных тестов',
    ],
    conditions: [
      'Официальное оформление',
      'Интересные, разнообразные и востребованные проекты для серьезных заказчиков',
      'Возможность обучения и развития',
      'Возможность карьерного роста',
      'Удаленный режим работы с гибким графиком',
    ],
  },
  {
    id: 'job-3',
    title: 'Менеджер по продажам',
    tags: ['Полный рабочий день'],
    isOpen: false,
    responsibilities: [
      'Поиск новых клиентов',
      'Предоставление клиентам информации по услугам и продукции компании (IT-услуги, комплексные решения)',
      'Продажа корпоративным клиентам специализированных IT-решений',
      'Подготовка коммерческих предложений',
      'Построение долгосрочных партнерских отношений',
      'Проведение переговоров, презентаций',
    ],
    requirements: [
      'Опыт работы в должности менеджера по продажам в сфере b2b IT- проектов от 4 лет',
      'Опыт успешных коммерческих переговоров на уровне лиц, принимающих решения',
      'Хорошие презентационные и коммуникационные навыки',
      'Грамотная устная и письменная речь',
      'Ориентация на результат и высокий доход, стремление к профессиональному росту',
      'Знание компьютерного IT-спцифики',
      'Опыт работы в компании-системном интеграторе является преимуществом',
      'Опыт работы в БКИ, кредитной организации являются преимуществом',
    ],
    conditions: [
      'Возможность обучения и развития',
      'Возможность карьерного роста',
      'Удаленный режим работы с гибким графиком',
    ],
  },
];

export const Work = () => {
  return (
    <main className="flex flex-col items-start gap-12 p-[88px] relative self-stretch w-full flex-[0_0_auto] bg-gray-10 rounded-[32px] overflow-hidden">
      <div className="flex flex-col w-[560px] items-start gap-4 relative flex-[0_0_auto]">
        <h1 className="self-stretch mt-[-1.00px] font-tite-2-m font-[number:var(--tite-2-m-font-weight)] text-gray-90 text-[length:var(--tite-2-m-font-size)] leading-[var(--tite-2-m-line-height)] relative tracking-[var(--tite-2-m-letter-spacing)] [font-style:var(--tite-2-m-font-style)]">
          Вакансии
        </h1>
        <p className="self-stretch font-body-1-r font-[number:var(--body-1-r-font-weight)] text-gray-70 text-[length:var(--body-1-r-font-size)] leading-[var(--body-1-r-line-height)] relative tracking-[var(--body-1-r-letter-spacing)] [font-style:var(--body-1-r-font-style)]">
          В данный момент у нас открыты следующие вакансии
        </p>
      </div>

      <img
        className="absolute w-[1169px] h-[1192px] top-0 left-[223px]"
        alt="Vector"
        src="https://c.animaapp.com/m8vqpr1mIKIPaL/img/vector-1-1.svg"
      />

      <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="job-1"
        >
          {jobListings.map((job) => (
            <AccordionItem
              key={job.id}
              value={job.id}
              className="border-none mb-4"
            >
              <Card className="w-[1216px] bg-white rounded-3xl">
                <AccordionTrigger className="px-8 py-4 hover:no-underline">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="flex-1 text-left font-header-2-m font-[number:var(--header-2-m-font-weight)] text-gray-90 text-[length:var(--header-2-m-font-size)] tracking-[var(--header-2-m-letter-spacing)] leading-[var(--header-2-m-line-height)] [font-style:var(--header-2-m-font-style)]">
                      {job.title}
                    </h2>
                    <div className="flex items-center gap-2 mr-4">
                      {job.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          className="h-8 px-3 py-2 bg-blue-10 text-blue-50 rounded-[52px] font-medium hover:bg-blue-10 hover:text-blue-50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <CardContent className="p-0">
                    <div className="flex flex-col items-start gap-8 p-6 bg-gray-10 rounded-2xl mx-4 mb-4">
                      <div className="flex flex-col items-start gap-6">
                        <div className="flex flex-col items-start gap-3">
                          <h3 className="w-full [font-family:'Inter',Helvetica] font-normal text-gray-40 text-base leading-6 tracking-[0]">
                            ОБЯЗАННОСТИ
                          </h3>
                          <ul className="w-full font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-70 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                            {job.responsibilities?.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col items-start gap-3">
                          <h3 className="w-full [font-family:'Inter',Helvetica] font-normal text-gray-40 text-base leading-6 tracking-[0]">
                            ТРЕБОВАНИЯ
                          </h3>
                          <ul className="w-full font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-70 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                            {job.requirements?.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        {job.goodToKnow?.length && (
                          <div className="flex flex-col items-start gap-3">
                            <h3 className="w-full [font-family:'Inter',Helvetica] font-normal text-gray-40 text-base leading-6 tracking-[0]">
                              Желательно
                            </h3>
                            <ul className="w-full font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-70 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                              {job.goodToKnow?.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-col items-start gap-3">
                          <h3 className="w-full [font-family:'Inter',Helvetica] font-normal text-gray-40 text-base leading-6 tracking-[0]">
                            УСЛОВИЯ
                          </h3>
                          <ul className="w-full font-body-2-r font-[number:var(--body-2-r-font-weight)] text-gray-70 text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                            {job.conditions?.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <Button className="px-6 py-3 rounded-[100px] [background:linear-gradient(43deg,rgba(28,34,47,1)_0%,rgba(34,53,98,1)_100%)]">
                          <span className="w-fit mt-[-1.00px] text-[length:var(--body-2-r-font-size)] leading-[var(--body-2-r-line-height)] whitespace-nowrap relative font-body-2-r font-[number:var(--body-2-r-font-weight)] text-white tracking-[var(--body-2-r-letter-spacing)] [font-style:var(--body-2-r-font-style)]">
                            Откликнуться
                          </span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
};
