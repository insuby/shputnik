import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'ru' | 'en') => () => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={changeLanguage('ru')}
        className={`rounded px-2 py-1 text-sm ${
          i18n.language.startsWith('ru')
            ? 'bg-blue-50 text-white'
            : 'bg-gray-10'
        }`}
      >
        RU
      </button>
      <button
        type="button"
        onClick={changeLanguage('en')}
        className={`rounded px-2 py-1 text-sm ${
          i18n.language.startsWith('en')
            ? 'bg-blue-50 text-white'
            : 'bg-gray-10'
        }`}
      >
        EN
      </button>
    </div>
  );
};
