import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import { FeedbackForm, useFeedbackForm } from 'widgets/feedback-form';

import { FooterSection } from './sections/FooterSection.tsx';
import { HeaderSection } from './sections/HeaderSection.tsx';

export const DesktopLayout = () => {
  const { isOpen } = useFeedbackForm();
  const { t } = useTranslation(['common']);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'auto';
      return;
    }
    document.body.style.overflow = 'hidden';
  }, [isOpen]);

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        {t('skipToContent')}
      </a>
      <div className="m-auto flex size-full max-w-[1440px] flex-col items-center overflow-hidden rounded-3xl px-3 xl:px-0">
        <HeaderSection />
        <main id="content" className="size-full">
          <Outlet />
        </main>
        <FooterSection />
      </div>
      {isOpen && <FeedbackForm />}
    </>
  );
};
