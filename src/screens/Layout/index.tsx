import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { FeedbackForm, useFeedbackForm } from '../../widgets/feedback-form';
import { FooterSection } from './sections/FooterSection';
import { HeaderSection } from './sections/HeaderSection';

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
    <div className="m-auto flex w-full max-w-[1440px] flex-col items-center overflow-hidden rounded-3xl">
      <HeaderSection />
      <Outlet />
      <FooterSection />
      {isOpen && <FeedbackForm />}
    </div>
  );
};
