import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { FeedbackForm, useFeedbackForm } from '../../widgets/feedback-form';
import { FooterSection } from './sections/FooterSection';
import {HeaderSection} from "./sections/HeaderSection.tsx";

export const Layout = () => {
  const { isOpen } = useFeedbackForm();

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'auto';
      return;
    }
    document.body.style.overflow = 'hidden';
  }, [isOpen]);

  return (
    <>
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow">Перейти к контенту</a>
        <div className="m-auto flex size-full max-w-[1440px] flex-col items-center overflow-hidden rounded-3xl">
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
