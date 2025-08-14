import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useEffect, useState} from 'react';

import {useForm} from 'react-hook-form';
// @ts-ignore
import InputMask from 'react-input-mask';

import {useFeedbackForm} from './use-feedback-form.ts';

const schema = yup.object({
    name: yup.string().trim().required('Обязательное поле'),
    email: yup.string().trim().required('Обязательное поле'),
    phone: yup.string().trim().required('Обязательное поле'),
});

export const FeedbackForm = () => {
    const {setIsOpen} = useFeedbackForm();
    const [isVisible, setIsVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const onSubmit = (data: any) => {
        console.log(data);
    };

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
        <div onClick={onBackdropClick}
             className={`fixed [font-family:var(--font-family)] z-50 inset-0 w-screen h-screen flex justify-center items-center p-[40px] transition-all duration-300 ease-in-out ${isVisible ? 'bg-[#000000CA] opacity-100' : 'bg-transparent opacity-0'}`}>
            <div
                className={`flex rounded-2xl flex-col h-fit w-fit items-start gap-6 p-6 relative bg-white overflow-hidden transition-all duration-300 ease-in-out transform ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}>
                <img
                    className="absolute w-[1230px] h-[1150px] top-[85px] left-[379px]"
                    alt="Vector"
                    src="/img/vector-1.svg"
                />

                <header className="flex h-10 items-center justify-between relative self-stretch w-full bg-transparent">
                    <div className="relative w-[170px] h-[22px]">
                        <div className="w-28 h-[22px]">
                            <div className="relative w-[170px] h-[22px]">
                                <img
                                    className="absolute  top-0 left-0"
                                    alt="Group"
                                    src="/img/logo.png"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className="inline-flex items-center justify-center gap-2.5 p-3 relative flex-[0_0_auto] mt-[-8.00px] mb-[-8.00px] bg-[#ffffff14] rounded-[100px] cursor-pointer hover:bg-[#ffffff20] transition-colors duration-200"
                        onClick={onClick}
                    >
                        <img className="relative w-8 h-8" alt="X" src="/img/x.svg"/>
                    </div>
                </header>

                <div
                    className="flex items-start gap-[88px] p-[88px] relative self-stretch w-full flex-[0_0_auto] rounded-[32px] overflow-hidden">
                    <div className="flex gap-[88px] flex-1 grow flex-col items-start relative">
                        <div className="flex flex-col w-[560px] items-start gap-4 relative flex-[0_0_auto]">
                            <div
                                className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[60px] leading-[60px] relative tracking-[0]">
                                Свяжитесь с нами
                            </div>

                            <p className="self-stretch font-body-1-r font-[number:var(--body-1-r-font-weight)] text-gray-40 text-[length:var(--body-1-r-font-size)] leading-[var(--body-1-r-line-height)] relative tracking-[var(--body-1-r-letter-spacing)] [font-style:var(--body-1-r-font-style)]">
                                Свяжитесь с нами, чтобы обсудить возможное сотрудничество. Мы с радостью ответим на ваши вопросы и подберем решение, наилучшим образом соответствующее вашим задачам
                            </p>
                        </div>

                        <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto] mt-[155px]">
                            <div className="inline-flex gap-4 flex-[0_0_auto] flex-col items-start relative">
                                <div
                                    className="relative w-[233px] mt-[-1.00px] font-header-2-m font-[number:var(--header-2-m-font-weight)] text-gray-40 text-[length:var(--header-2-m-font-size)] tracking-[var(--header-2-m-letter-spacing)] leading-[var(--header-2-m-line-height)] [font-style:var(--header-2-m-font-style)]">
                                    +7 (495) 006-21-57
                                </div>

                                <p className="relative w-[233px] [font-family:'Geometria-Medium',Helvetica] font-normal text-gray-40 text-2xl tracking-[0] leading-6">
                                  <span
                                      className="font-[number:var(--header-2-m-font-weight)] leading-[var(--header-2-m-line-height)] font-header-2-m [font-style:var(--header-2-m-font-style)] tracking-[var(--header-2-m-letter-spacing)] text-[length:var(--header-2-m-font-size)]">
                                    s@sptnk.co
                                  </span>
                                </p>
                            </div>

                            <p className="w-[233px] font-body-1-r font-[number:var(--body-1-r-font-weight)] text-gray-40 text-[length:var(--body-1-r-font-size)] leading-[var(--body-1-r-line-height)] relative tracking-[var(--body-1-r-letter-spacing)] [font-style:var(--body-1-r-font-style)]">
                                183038, Мурманск,
                                <br/>
                                улица Октябрьская,
                                <br/>
                                дом 2а, офис 2
                            </p>
                        </div>
                    </div>

                    <div
                        className="md:min-w-[584px] flex gap-10 p-12 flex-1 grow bg-[#f9fafd] rounded-[32px] flex-col items-start relative">
                        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="w-full relative">
                                <input
                                    {...register('name')}
                                    className={`flex items-center outline-[#acc6ff] px-5 py-4 rounded-2xl justify-center bg-white relative border-2 border-solid !self-stretch !h-[62px] !mr-[-1.00px] !mt-[-1.00px] !ml-[-1.00px] !w-full`}
                                    placeholder="Ваше имя"
                                />
                                {errors['name'] && (
                                    <span className=" absolute -bottom-6 text-rose-700">
                    {errors['name'].message}
                  </span>
                                )}
                            </div>
                            <div className="w-full relative">
                                <InputMask
                                    {...register('phone')}
                                    mask="+7 (999) 999-99-99"
                                    className={`flex outline-[#acc6ff] items-center px-5 py-4 rounded-2xl justify-center bg-white relative border-2 border-solid !self-stretch !h-[62px] !mr-[-1.00px] !mt-[-1.00px] !ml-[-1.00px] !w-full`}
                                >
                                    {(props: any) => (
                                        <input {...props} placeholder="+7 (999) 999-99-99"/>
                                    )}
                                </InputMask>
                                {errors['phone'] && (
                                    <span className=" absolute -bottom-6 text-rose-700">
                    {errors['phone'].message}
                  </span>
                                )}
                            </div>
                            <div className="w-full relative">
                                <input
                                    {...register('email')}
                                    type="email"
                                    className={`flex outline-[#acc6ff] items-center px-5 py-4 rounded-2xl justify-center bg-white relative border-2 border-solid !self-stretch !h-[62px] !mr-[-1.00px] !mt-[-1.00px] !ml-[-1.00px] !w-full`}
                                    placeholder="Ваш почтовый адрес"
                                />
                                {errors['email'] && (
                                    <span className=" absolute -bottom-6 text-rose-700">
                    {errors['email'].message}
                  </span>
                                )}
                            </div>
                            <textarea
                                placeholder="Комментарий"
                                maxLength={100}
                                className={`flex outline-[#acc6ff] items-center px-5 py-4 rounded-2xl justify-center bg-white relative border-2 border-solid !self-stretch !mr-[-1.00px] !mt-[-1.00px] !ml-[-1.00px] !w-full`}
                            />
                        </div>

                        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">


                            <button
                                className="all-[unset] w-full box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-blue-50 rounded-[100px] items-center justify-center cursor-pointer"
                                onClick={handleSubmit(onSubmit)}
                            >
                <span
                    className={`w-fit mt-[-1.00px] text-white whitespace-nowrap relative font-body-1-r tracking-[var(--body-1-r-letter-spacing)] text-[length:var(--body-1-r-font-size)] [font-style:var(--body-1-r-font-style)] font-[number:var(--body-1-r-font-weight)] leading-[var(--body-1-r-line-height)]`}
                >
                  Отправить
                </span>
                            </button>
                            <p className="self-stretch font-body-3-r font-[number:var(--body-3-r-font-weight)] text-gray-40 text-[length:var(--body-3-r-font-size)] text-center leading-[var(--body-3-r-line-height)] relative tracking-[var(--body-3-r-letter-spacing)] [font-style:var(--body-3-r-font-style)]">
                <span
                    className="text-[#9ea7bb] font-body-3-r [font-style:var(--body-3-r-font-style)] font-[number:var(--body-3-r-font-weight)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] text-[length:var(--body-3-r-font-size)]">
                  Нажимая на кнопку “Отправить” я соглашаюсь с&nbsp;
                </span>
                                <span
                                    className="text-[#3573fc] font-body-3-r [font-style:var(--body-3-r-font-style)] font-[number:var(--body-3-r-font-weight)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] text-[length:var(--body-3-r-font-size)]">
                  политикой <br/> конфиденциальности и обработкой персональных
                  данных
                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
