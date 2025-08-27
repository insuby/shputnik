import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// @ts-ignore
import InputMask from 'react-input-mask';

import { useFeedbackForm } from './use-feedback-form.ts';

export const FeedbackForm = () => {
  const { t } = useTranslation('widgets');
  const { setIsOpen } = useFeedbackForm();
  
  const schema = yup.object({
    name: yup.string().trim().required(t('feedbackForm.name')),
    email: yup.string().trim().required(t('feedbackForm.name')),
    phone: yup.string().trim().required(t('feedbackForm.name')),
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
      className={`fixed inset-0 z-50 flex h-screen w-screen items-center justify-center pt-8 md:p-[40px] transition-all duration-300 ease-in-out [font-family:var(--font-family)] ${
        isVisible ? 'bg-[#000000CA] opacity-100' : 'bg-transparent opacity-0'
      }`}
    >
      <div
        className={`h-fit max-w-[1376px] relative flex size-fit flex-col items-start gap-6 overflow-hidden rounded-2xl bg-white p-6 transition-all duration-300 ease-in-out${
          isVisible
            ? ' translate-y-0 scale-100 opacity-100'
            : ' translate-y-4 scale-95 opacity-0'
        }`}
      >
        <img
          className="absolute left-[379px] top-[85px] h-[1150px] w-full md:w-[1230px]"
          alt=""
          aria-hidden="true"
          src="/img/vector-1.svg"
        />

        <header className="relative flex h-10 w-full items-center justify-between self-stretch bg-transparent">
          <div className="hidden md:block relative h-[22px] w-full md:w-[170px]">
            <div className="h-[22px] w-28">
              <div className="relative h-[22px] w-full md:w-[170px]">
                <img
                  className="absolute  left-0 top-0"
                  alt=""
                  aria-hidden="true"
                  src="/img/logo.png"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label={t('feedbackForm.close')}
            className="relative my-[-8.00px] inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[100px] bg-[#ffffff14] p-3 transition-colors duration-200 hover:bg-[#ffffff20]"
            onClick={onClick}
          >
            <img className="relative size-8" alt="" aria-hidden="true" src="/img/x.svg" />
          </button>
        </header>

        <div className="relative flex flex-col md:!flex-row w-full flex-[0_0_auto] items-start gap-2 md:gap-[88px] self-stretch overflow-hidden rounded-[32px] md:p-[88px]">
          <div className="relative flex flex-1 grow flex-col items-start gap-[88px] m-auto md:m-0">
            <div className="relative flex w-full md:w=[560px] flex-[0_0_auto] flex-col items-start gap-4">
              <div id="feedback-dialog-title" className="relative text-center w-full md:w-auto md:text-left mt-3 md:mt-[-1.00px] self-stretch  text-[36px] md:text-5xl  font-medium leading-[44px] md:leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                {t('feedbackForm.title')}
              </div>

              <p className="hidden md:block relative text-center md:text-left self-stretch font-body-1-r text-[length:var(--body-1-r-font-size)] font-[number:var(--body-1-r-font-weight)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] text-gray-40 [font-style:var(--body-1-r-font-style)]">
                {t('feedbackForm.subtitle')}
              </p>
            </div>

            <div className="hidden relative mt-[105px] md:inline-flex flex-[0_0_auto] flex-col items-start gap-5">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-4">
                <div className="font-header-2-m relative mt-[-1.00px] w-full md:w-[233px] text-[length:var(--header-2-m-font-size)] font-[number:var(--header-2-m-font-weight)] leading-[var(--header-2-m-line-height)] tracking-[var(--header-2-m-letter-spacing)] text-gray-40 [font-style:var(--header-2-m-font-style)]">
                  +7 (495) 006-21-57
                </div>

                <p className="relativew-full md:w-[233px] text-2xl font-normal leading-6 tracking-normal text-gray-40 [font-family:'Geometria-Medium',Helvetica]">
                  <span className="font-header-2-m text-[length:var(--header-2-m-font-size)] font-[number:var(--header-2-m-font-weight)] leading-[var(--header-2-m-line-height)] tracking-[var(--header-2-m-letter-spacing)] [font-style:var(--header-2-m-font-style)]">
                    s@sptnk.co
                  </span>
                </p>
              </div>

              <p className="relative w-full md:w-[233px] font-body-1-r text-[length:var(--body-1-r-font-size)] font-[number:var(--body-1-r-font-weight)] leading-[var(--body-1-r-line-height)] tracking-[var(--body-1-r-letter-spacing)] text-gray-40 [font-style:var(--body-1-r-font-style)]">
                {t('feedbackForm.address')}
              </p>
            </div>
          </div>

          <div className="relative flex flex-1 grow flex-col items-start gap-10 rounded-[32px] bg-[#f9fafd] p-7 md:p-12 md:min-w-[584px]">
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch" id="feedback-dialog-title">
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
                    <input {...props} placeholder="+7 (999) 999-99-99" autoComplete="tel" />
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

            <form className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch" onSubmit={handleSubmit(onSubmit)}>
              <button
                type="submit"
                className="all-[unset] relative box-border inline-flex w-full flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4"
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
