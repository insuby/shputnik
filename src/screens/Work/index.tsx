import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { useFeedbackForm } from '../../widgets/feedback-form';

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
  const { setIsOpen } = useFeedbackForm();

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <main className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-12 self-stretch overflow-hidden rounded-[32px] p-[88px]">
      <div className="relative flex w-[560px] flex-[0_0_auto] flex-col items-start gap-4">
        <h1 className="relative mt-[-1.00px] self-stretch text-[60px] font-medium leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
          Вакансии
        </h1>
        <p className="relative self-stretch font-body-1-r text-[length:var(--body-1-r-font-size)] font-[number:var(--body-1-r-font-weight)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] text-[#939db4] [font-style:var(--body-1-r-font-style)]">
          В данный момент у нас открыты следующие вакансии
        </p>
      </div>

      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
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
              className="mb-4 border-none"
            >
              <Card className="w-[1216px] rounded-3xl bg-white">
                <AccordionTrigger className="px-8 py-4 hover:no-underline">
                  <div className="flex w-full items-center justify-between">
                    <h2 className="font-header-2-m flex-1 text-left text-[length:var(--header-2-m-font-size)] font-[number:var(--header-2-m-font-weight)] leading-[var(--header-2-m-line-height)] tracking-[var(--header-2-m-letter-spacing)] text-gray-90 [font-style:var(--header-2-m-font-style)]">
                      {job.title}
                    </h2>
                    <div className="mr-4 flex items-center gap-2">
                      {job.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          className="h-8 rounded-[52px] bg-blue-10 px-3 py-2 font-medium text-blue-50 shadow-none [font-family:var(--font-family)] hover:bg-blue-10 hover:text-blue-50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <CardContent className="mb-4 flex flex-col items-start gap-8 rounded-b-[32px] border-t border-solid border-gray-20 bg-gray-10 p-6">
                    <div className="flex flex-col items-start gap-6">
                      <div className="flex flex-col items-start gap-3">
                        <h3 className="w-full text-base font-normal leading-6 tracking-normal text-gray-40 [font-family:'Inter',Helvetica]">
                          Обязанности
                        </h3>
                        <ul className="w-full font-body-2-r text-[length:var(--body-2-r-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-70 [font-style:var(--body-2-r-font-style)]">
                          {job.responsibilities?.map((item, index) => (
                            <li className="ml-6 list-disc" key={index}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col items-start gap-3">
                        <h3 className="w-full text-base font-normal leading-6 tracking-normal text-gray-40 [font-family:'Inter',Helvetica]">
                          Требования
                        </h3>
                        <ul className="w-full font-body-2-r text-[length:var(--body-2-r-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-70 [font-style:var(--body-2-r-font-style)]">
                          {job.requirements?.map((item, index) => (
                            <li className="ml-6 list-disc" key={index}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {job.goodToKnow?.length && (
                        <div className="flex flex-col items-start gap-3">
                          <h3 className="w-full text-base font-normal leading-6 tracking-normal text-gray-40 [font-family:'Inter',Helvetica]">
                            Желательно
                          </h3>
                          <ul className="w-full font-body-2-r text-[length:var(--body-2-r-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-70 [font-style:var(--body-2-r-font-style)]">
                            {job.goodToKnow?.map((item, index) => (
                              <li className="ml-6 list-disc" key={index}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-col items-start gap-3">
                        <h3 className="w-full text-base font-normal leading-6 tracking-normal text-gray-40 [font-family:'Inter',Helvetica]">
                          Условия
                        </h3>
                        <ul className="w-full font-body-2-r text-[length:var(--body-2-r-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-70 [font-style:var(--body-2-r-font-style)]">
                          {job.conditions?.map((item, index) => (
                            <li className="ml-6 list-disc" key={index}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <Button
                        className="h-[60px] rounded-[100px] bg-blue-50 px-6 py-3 "
                        onClick={onClick}
                      >
                        <span className="relative mt-[-1.00px] w-fit whitespace-nowrap font-body-2-r text-[length:var(--body-2-r-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-white [font-style:var(--body-2-r-font-style)]">
                          Откликнуться
                        </span>
                      </Button>
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
