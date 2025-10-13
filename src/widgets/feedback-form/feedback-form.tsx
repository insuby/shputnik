import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';

import { RoutesPath } from 'shared/routes-path.tsx';

import { useFeedbackForm } from './use-feedback-form.ts';

export const FeedbackForm = () => {
  const { t } = useTranslation('widgets');
  const { setIsOpen } = useFeedbackForm();

  const schema = yup.object({
    name: yup.string().trim().required(t('feedbackForm.name')),
    email: yup.string().trim().required(t('feedbackForm.email')),
    phone: yup.string().trim().required(t('feedbackForm.phone')),
  });

  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const onSubmit = () => {};

  const onClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-dialog-title"
      onClick={onBackdropClick}
      className={`fixed inset-0 z-50 flex h-screen w-screen items-center justify-center pt-0 transition-all duration-300 ease-in-out [font-family:var(--font-family)] lg:!pt-8 xl:p-[40px] ${
        isVisible ? 'bg-[#000000CA] opacity-100' : 'bg-transparent opacity-0'
      }`}
    >
      <div
        className={`relative flex size-fit h-screen max-w-[1376px] flex-col items-start gap-6 overflow-hidden bg-white p-6 transition-all duration-300 ease-in-out lg:h-auto lg:rounded-2xl${
          isVisible
            ? ' translate-y-0 scale-100 opacity-100'
            : ' translate-y-4 scale-95 opacity-0'
        }`}
      >
        <svg
          className="absolute left-[379px] top-[85px] h-[1150px] w-full xl:w-[1230px]"
          width="1408"
          height="1470"
          viewBox="0 0 1408 1470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
        >
          <g opacity="0.2" filter="url(#filter0_f_15_177)">
            <path
              d="M551.293 621.064C506.958 486.085 642.859 364.437 716.352 320.486C1194 182.548 1164.08 785.029 996.168 981.451C828.258 1177.87 364.818 1243.95 306.591 1066.68C248.363 889.399 606.711 789.787 551.293 621.064Z"
              fill="#3772FE"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_15_177"
              x="0"
              y="0"
              width="1407.95"
              height="1470"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="150"
                result="effect1_foregroundBlur_15_177"
              />
            </filter>
          </defs>
        </svg>

        <header className="relative flex h-10 w-full items-center justify-between self-stretch bg-transparent">
          <div className="relative hidden h-[22px] w-full xl:block xl:w-[170px]">
            <Link to={RoutesPath.MAIN} className="h-[22px] w-28">
              <div className="relative h-[22px] w-full xl:w-[170px]">
                <span className="sr-only">Sputnik</span>
                <img
                  className="absolute  left-0 top-0"
                  alt=""
                  aria-hidden={true}
                  src="/img/logo.png"
                />
              </div>
            </Link>
          </div>

          <button
            type="button"
            aria-label={t('feedbackForm.close')}
            className="relative my-[-8.00px] inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#ffffff14] p-3 transition-colors duration-200 hover:bg-[#ffffff20]"
            onClick={onClick}
          >
            <svg
              className="relative size-8"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden={true}
            >
              <path
                d="M25 7L7 25"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M25 25L7 7"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </header>

        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-2 self-stretch overflow-hidden rounded-[32px] xl:!flex-row xl:gap-[88px] xl:p-[88px]">
          <div className="relative m-auto flex flex-1 grow flex-col items-start gap-[88px] xl:m-0">
            <div className="xl:w=[560px] relative flex w-full flex-[0_0_auto] flex-col items-start gap-4">
              <div
                id="feedback-dialog-title"
                className="relative mt-3 w-full self-stretch text-center text-[36px] font-medium leading-[44px]  tracking-normal text-gray-90  [font-family:'Roboto',Helvetica] xl:mt-[-1.00px] xl:w-auto xl:text-left xl:text-5xl xl:leading-[60px]"
              >
                {t('feedbackForm.title')}
              </div>

              <p className="relative hidden self-stretch text-center font-body-1-r text-[length:var(--body-1-r-font-size)] font-[number:var(--body-1-r-font-weight)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] text-gray-40 [font-style:var(--body-1-r-font-style)] xl:block xl:text-left">
                {t('feedbackForm.subtitle')}
              </p>
            </div>

            <div className="relative mt-[105px] hidden flex-[0_0_auto] flex-col items-start gap-5 xl:inline-flex">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                <div className="font-header-2-m relative mt-[-1.00px] w-full text-[length:var(--header-2-m-font-size)] font-[number:var(--header-2-m-font-weight)] leading-[var(--header-2-m-line-height)] tracking-[var(--header-2-m-letter-spacing)] text-gray-40 [font-style:var(--header-2-m-font-style)] xl:w-[233px]">
                  +7 (495) 006-21-57
                </div>

                <p className="relative w-full text-2xl font-normal leading-6 tracking-normal text-gray-40 [font-family:'Geometria-Medium',Helvetica] xl:w-[233px]">
                  <span className="font-header-2-m text-[length:var(--header-2-m-font-size)] font-[number:var(--header-2-m-font-weight)] leading-[var(--header-2-m-line-height)] tracking-[var(--header-2-m-letter-spacing)] [font-style:var(--header-2-m-font-style)]">
                    s@sptnk.co
                  </span>
                </p>
              </div>

              <p className="relative w-full font-body-1-r text-[length:var(--body-1-r-font-size)] font-[number:var(--body-1-r-font-weight)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] text-gray-40 [font-style:var(--body-1-r-font-style)] xl:w-[233px]">
                {t('feedbackForm.address')}
              </p>
            </div>
          </div>

          <div className="relative flex flex-1 grow flex-col items-start gap-10 rounded-[32px] bg-[#f9fafd] p-7 xl:min-w-[584px] xl:p-12">
            <div
              className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch"
              id="feedback-dialog-title"
            >
              <div className="relative w-full">
                <input
                  {...register('name')}
                  aria-label={t('feedbackForm.name')}
                  autoComplete="name"
                  className="relative !mx-[-1.00px] !mt-[-1.00px] flex !h-[62px] !w-full items-center justify-center !self-stretch rounded-2xl border-2 border-solid bg-white px-5 py-4 outline-[#acc6ff]"
                  placeholder={t('feedbackForm.namePlaceholder')}
                />
                {errors['name'] && (
                  <span className=" absolute -bottom-6 text-rose-700">
                    {errors['name'].message}
                  </span>
                )}
              </div>
              <div className="relative w-full">
                <InputMask
                  {...register('phone')}
                  mask="+7 (999) 999-99-99"
                  aria-label={t('feedbackForm.phone')}
                  className="relative !mx-[-1.00px] !mt-[-1.00px] flex !h-[62px] !w-full items-center justify-center !self-stretch rounded-2xl border-2 border-solid bg-white px-5 py-4 outline-[#acc6ff]"
                >
                  {(props: any) => (
                    <input
                      {...props}
                      placeholder="+7 (999) 999-99-99"
                      autoComplete="tel"
                    />
                  )}
                </InputMask>
                {errors['phone'] && (
                  <span className=" absolute -bottom-6 text-rose-700">
                    {errors['phone'].message}
                  </span>
                )}
              </div>
              <div className="relative w-full">
                <input
                  {...register('email')}
                  type="email"
                  aria-label="Email"
                  autoComplete="email"
                  className="relative !mx-[-1.00px] !mt-[-1.00px] flex !h-[62px] !w-full items-center justify-center !self-stretch rounded-2xl border-2 border-solid bg-white px-5 py-4 outline-[#acc6ff]"
                  placeholder={t('feedbackForm.emailPlaceholder')}
                />
                {errors['email'] && (
                  <span className=" absolute -bottom-6 text-rose-700">
                    {errors['email'].message}
                  </span>
                )}
              </div>
              <textarea
                placeholder={t('feedbackForm.commentPlaceholder')}
                maxLength={100}
                aria-label={t('feedbackForm.comment')}
                className="relative !mx-[-1.00px] !mt-[-1.00px] flex !w-full items-center justify-center !self-stretch rounded-2xl border-2 border-solid bg-white px-5 py-4 outline-[#acc6ff]"
              />
            </div>

            <form
              className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch"
              onSubmit={handleSubmit(onSubmit)}
            >
              <button
                type="submit"
                className="all-[unset] relative box-border inline-flex w-full flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 hover:bg-blue-600"
              >
                <span className="relative mt-[-1.00px] w-fit whitespace-nowrap font-body-1-r text-[length:var(--body-1-r-font-size)] font-[number:var(--body-1-r-font-weight)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] text-white [font-style:var(--body-1-r-font-style)]">
                  {t('feedbackForm.send')}
                </span>
              </button>
              <p className="relative self-stretch text-center font-body-3-r text-[length:var(--body-3-r-font-size)] font-[number:var(--body-3-r-font-weight)] leading-[var(--body-3-r-line-height)] tracking-[var(--body-3-r-letter-spacing)] text-gray-40 [font-style:var(--body-3-r-font-style)]">
                {t('feedbackForm.privacy')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
