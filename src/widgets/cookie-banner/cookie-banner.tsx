import { useEffect, useState } from 'react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    if (!isChecked) return;

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
        className={`fixed inset-x-0 bottom-3 z-50 mx-auto w-fit max-w-[94%] rounded-3xl border-gray-100 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isAnimating
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl p-6 lg:p-8">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="flex-1">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex size-5 items-center justify-center">
                  <input
                    type="checkbox"
                    id="cookie-consent"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="size-4 cursor-pointer rounded border-2 border-blue-50 bg-white text-blue-50 focus:ring-2 focus:ring-blue-50 focus:ring-offset-0"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm leading-6 text-gray-90 [font-family:'Roboto',Helvetica] ">
                    Продолжая просмотр сайта{' '}
                    <span className="font-medium text-blue-50">sptnk.co</span>,
                    я соглашаюсь с использованием файлов cookie владельцем сайта
                    в соответствии с{' '}
                    <a
                      href="/docs/Политика_куки.pdf"
                      download
                      className="font-medium text-blue-50 underline transition-colors duration-200 hover:text-blue-600"
                    >
                      «Политикой в отношении файлов cookie»
                    </a>
                    , в том числе на передачу данных, указанных в Политике,
                    третьим лицам (статистическим службам сети Интернет).
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full gap-3 lg:w-auto lg:shrink-0">
              <button
                onClick={handleAccept}
                disabled={!isChecked}
                className={`flex-1 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 [font-family:'Roboto',Helvetica] lg:flex-none ${
                  isChecked
                    ? 'cursor-pointer bg-blue-50 text-white hover:bg-blue-600 hover:shadow-lg active:scale-95'
                    : 'cursor-not-allowed bg-gray-200 text-gray-400'
                }`}
              >
                ПОДТВЕРЖДАЮ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
