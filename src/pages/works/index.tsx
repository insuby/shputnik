import { useFeedbackForm } from 'widgets';

import { useTranslation } from 'react-i18next';

import { PAGE_META } from 'shared/lib/page-meta-config';
import { usePageMeta } from 'shared/lib/use-page-meta';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
} from 'shared/ui';
import { CardContent } from 'shared/ui/card.tsx';

export const Works = () => {
  const { t } = useTranslation(['work']);
  const { setIsOpen } = useFeedbackForm();
  const pageMeta = usePageMeta(PAGE_META.works);

  const jobListings = t('jobs', { returnObjects: true });

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      {pageMeta}
      <section
        className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-7 self-stretch overflow-hidden rounded-[32px] xl:gap-12 xl:p-[88px]"
        aria-labelledby="jobs-title"
      >
        <header className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 xl:w-[560px]">
          <h1
            id="jobs-title"
            className="relative mt-3 self-stretch text-[36px]  font-medium leading-[44px]  tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] xl:mt-[-1.00px] xl:text-5xl xl:leading-[60px]"
          >
            {t('title')}
          </h1>
          <p className="relative self-stretch text-[length:var(--body-1-r-font-size)] font-[number:var(--body-1-r-font-weight)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] text-[#939db4] [font-style:var(--body-1-r-font-style)]">
            {t('description')}
          </p>
        </header>

        <div className="relative inline-flex w-full flex-[0_0_auto] flex-col items-start gap-4">
          <Accordion type="single" collapsible className="w-full">
            {jobListings.map((job) => (
              <AccordionItem
                key={job.id}
                value={job.id}
                className="mb-4 border-none"
              >
                <Card
                  className="w-full rounded-3xl bg-white xl:w-[1216px]"
                  asChild
                >
                  <article aria-labelledby={`${job.id}-title`}>
                    <AccordionTrigger className="px-8 py-4 hover:no-underline">
                      <div className="flex w-full items-center justify-between">
                        <h2
                          id={`${job.id}-title`}
                          className="font-header-2-m flex-1 text-left text-[length:var(--header-2-m-font-size)] font-[number:var(--header-2-m-font-weight)] leading-[var(--header-2-m-line-height)] tracking-[var(--header-2-m-letter-spacing)] text-gray-90 [font-style:var(--header-2-m-font-style)]"
                        >
                          {job.title}
                        </h2>
                        <div className="mr-4 hidden  items-center gap-2 xl:flex">
                          {job.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              className="!h-8 !rounded-[52px] !bg-blue-10 px-3 py-2 !font-medium !text-blue-50 shadow-none [font-family:var(--font-family)]"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent>
                      <CardContent className="mb-4 flex flex-col items-start gap-7 rounded-b-[32px] border-t border-solid border-gray-20 bg-gray-10 p-6">
                        <div className="flex flex-col items-start gap-6 md:px-3 pt-6">
                          <div className="flex flex-col items-start gap-3">
                            <h3 className="w-full text-base font-normal leading-6 tracking-normal text-gray-40 [font-family:'Inter',Helvetica]">
                              {t('sections.responsibilities')}
                            </h3>
                            <ul className="w-full text-[length:var(--body-2-r-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-70 [font-style:var(--body-2-r-font-style)]">
                              {job.responsibilities?.map((item, index) => (
                                <li className="ml-6 list-disc" key={index}>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-col items-start gap-3">
                            <h3 className="w-full text-base font-normal leading-6 tracking-normal text-gray-40 [font-family:'Inter',Helvetica]">
                              {t('sections.requirements')}
                            </h3>
                            <ul className="w-full text-[length:var(--body-2-r-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-70 [font-style:var(--body-2-r-font-style)]">
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
                                {t('sections.goodToKnow')}
                              </h3>
                              <ul className="w-full text-[length:var(--body-2-r-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-70 [font-style:var(--body-2-r-font-style)]">
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
                              {t('sections.conditions')}
                            </h3>
                            <ul className="w-full text-[length:var(--body-2-r-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-gray-70 [font-style:var(--body-2-r-font-style)]">
                              {job.conditions?.map((item, index) => (
                                <li className="ml-6 list-disc" key={index}>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex w-full items-center gap-6">
                          <Button
                            className="!h-[60px] w-full !rounded-[100px] !bg-blue-50 !px-6 !py-3 xl:w-fit "
                            onClick={onClick}
                          >
                            <span className="relative mt-[-1.00px] w-full whitespace-nowrap text-[length:var(--body-2-r-font-size)] font-[number:var(--body-2-r-font-weight)] leading-[var(--body-2-r-line-height)] tracking-[var(--body-2-r-letter-spacing)] text-white [font-style:var(--body-2-r-font-style)] xl:w-fit">
                              {t('apply')}
                            </span>
                          </Button>
                        </div>
                      </CardContent>
                    </AccordionContent>
                  </article>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};
