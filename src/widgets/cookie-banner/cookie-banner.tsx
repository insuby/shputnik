import { useEffect, useState } from 'react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // const cookieConsent = localStorage.getItem('cookie-consent');
    // if (!cookieConsent) {
    //   setIsVisible(true);
    // }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Backdrop для блокировки взаимодействия с остальной страницей */}
      <div className="fixed inset-0 z-40 bg-black/50" />

      <div className="animate-in slide-in-from-bottom fixed inset-x-0 bottom-1 z-50 mx-auto max-w-[98%] rounded-3xl  border-gray-100 bg-white shadow-lg duration-300">
        <div className="mx-auto max-w-7xl p-4 lg:px-8">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-8">
            <div className="text-center lg:text-left">
              <p className="text-center text-sm leading-6 text-gray-90 [font-family:'Roboto',Helvetica]">
                Продолжая просмотр сайта sptnk.co, я соглашаюсь с использованием
                файлов cookie владельцем сайта в соответствии с «Политикой в
                отношении файлов cookie», в том числе на передачу данных,
                указанных в Политике, третьим лицам (статистическим службам сети
                Интернет)
              </p>
            </div>

            <button
              onClick={handleAccept}
              className="shrink-0 rounded-full bg-blue-50 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 [font-family:'Roboto',Helvetica] hover:bg-blue-600"
            >
              ПОДТВЕРЖДАЮ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
