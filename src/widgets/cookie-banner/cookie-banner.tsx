import { useEffect, useState } from 'react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setIsAnimating(false);

    // Ждем завершения анимации исчезновения
    setTimeout(() => {
      localStorage.setItem('cookie-consent', 'accepted');
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className={`fixed inset-x-0 bottom-1 z-50 mx-auto w-fit max-w-[98%] rounded-3xl border-gray-100 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isAnimating
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl pb-4 pt-10 lg:px-8 ">
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
