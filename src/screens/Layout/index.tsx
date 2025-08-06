import { Outlet } from 'react-router-dom';

import { FeedbackForm, useFeedbackForm } from '../../widgets/feedback-form';
import { FooterSection } from './sections/FooterSection';
import { HeaderSection } from './sections/HeaderSection';
import { useEffect } from 'react';

export const Layout = () => {
  const { isOpen } = useFeedbackForm();

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'auto';
      return
    }
    document.body.style.overflow = 'hidden';
  }, [isOpen])

  return (
    <div className="flex flex-col w-full items-center max-w-[1440px] m-auto rounded-3xl overflow-hidden">
      <HeaderSection />
      <Outlet />
      <FooterSection />
      {isOpen && <FeedbackForm />}
    </div>
  );
};
