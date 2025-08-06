import {Feedback} from '../../widgets/feedback.tsx';
import {Trust} from '../../widgets/trust.tsx';
import Slider from "react-slick";
import {useRef} from "react";
import {Technoligies} from "./technoligies.tsx";
import {Works} from "./works.tsx";

import code from './images/code.png';
import vector from './images/Vector 1.png';

export const Development = () => {
    const sliderRef = useRef<Slider>(null);

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current?.slickNext();
    };

    return (
        <div
            className="flex flex-col w-[1440px] items-center gap-[136px] pt-8 pb-[136px] px-8 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                <div
                    className="flex flex-col h-[628px] items-start gap-20 p-12 relative self-stretch w-full bg-blue-50 rounded-[32px] overflow-hidden">
                    <img
                        className="absolute w-[954px] h-[842px] -top-16 left-[430px]"
                        alt="Vector"
                        src="https://c.animaapp.com/mdrkpgfjDQCyYi/img/vector-1-5.svg"
                    />

                    <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                        <div
                            className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 relative flex-[0_0_auto] bg-[#ffffff14] rounded-[100px]">
                            <div
                                className="relative w-fit mt-[-1.00px] font-body-3-r font-[number:var(--body-3-r-font-weight)] text-[#ffffff] text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)] whitespace-nowrap [font-style:var(--body-3-r-font-style)]">
                                О продукте
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-[624px] items-start justify-center gap-12 relative flex-[0_0_auto]">
                        <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                            <div
                                className="relative w-[624px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-6xl tracking-[0] leading-[68px]">
                                Разработка
                                <br/>
                                на заказ
                            </div>

                            <p className="w-[624px] text-[#ffffffcc] text-xl leading-7 relative [font-family:'Roboto',Helvetica] font-normal tracking-[0]">
                                Создаем и развиваем проекты для финансовых
                                <br/>
                                проектов, blockchain-проектов, медицинских <br/>и маркетинговых
                                проектов.
                            </p>
                        </div>

                        <button
                            className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-[#ffffff] rounded-[100px] items-center justify-center">
                            <div
                                className="w-fit mt-[-1.00px] whitespace-nowrap relative [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-xl tracking-[0] leading-7">
                                Связаться с нами
                            </div>
                        </button>
                    </div>

                    <img
                        className="absolute w-[619px] h-[568px] top-44 left-[1053px]"
                        alt="Vector"
                        src={vector}
                    />

                    <div
                        className="absolute w-[464px] h-[280px] top-[188px] left-[727px] bg-[#ffffff] rounded-3xl overflow-hidden">
                        <div className="absolute w-[528px] h-10 top-0 left-0 bg-[#f9fafd]">
                            <div className="absolute w-2.5 h-2.5 top-[15px] left-[15px] bg-[#e64850] rounded-[5px]"/>

                            <div className="absolute w-2.5 h-2.5 top-[15px] left-[31px] bg-[#fbab00] rounded-[5px]"/>

                            <div className="absolute w-2.5 h-2.5 top-[15px] left-[47px] bg-[#00cb82] rounded-[5px]"/>
                        </div>

                        <div className="flex flex-col w-[464px] items-start absolute top-12 left-0">
                            <img
                                className="size-full"
                                alt="Vector"
                                src={code}
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute w-[738px] h-[738px] top-[-41px] left-[590px]">
                    <div
                        className="relative w-[740px] h-[740px] -top-px -left-px rounded-[370px] border-2 border-solid border-[#ffffff0a]">
                        <div
                            className="absolute w-[572px] h-[572px] top-[82px] left-[82px] rounded-[286px] border-2 border-solid border-[#ffffff] opacity-[0.08]"/>

                        <div
                            className="absolute w-[380px] h-[380px] top-[178px] left-[178px] rounded-[190px] border-2 border-solid border-[#ffffff] opacity-[0.12]"/>

                        <div
                            className="top-[536px] left-[221px] bg-red-40 inline-flex items-center justify-center gap-2 px-4 py-2 absolute rounded-[100px] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                            <div
                                className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-xl tracking-[0] leading-7 whitespace-nowrap">
                                FinTech
                            </div>
                        </div>

                        <div
                            className="top-32 left-[232px] bg-green-50 inline-flex items-center justify-center gap-2 px-4 py-2 absolute rounded-[100px] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                            <div
                                className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-xl tracking-[0] leading-7 whitespace-nowrap">
                                Blockchain
                            </div>
                        </div>

                        <div
                            className="top-[569px] left-[469px] bg-blue-50 inline-flex items-center justify-center gap-2 px-4 py-2 absolute rounded-[100px] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                            <div
                                className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-xl tracking-[0] leading-7 whitespace-nowrap">
                                MedTech
                            </div>
                        </div>

                        <div
                            className="top-[341px] left-[577px] bg-violet-50 inline-flex items-center justify-center gap-2 px-4 py-2 absolute rounded-[100px] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                            <div
                                className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-xl tracking-[0] leading-7 whitespace-nowrap">
                                MarTech
                            </div>
                        </div>

                        <div
                            className="top-[276px] left-[34px] bg-yellow-50 inline-flex items-center justify-center gap-2 px-4 py-2 absolute rounded-[100px] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                            <div
                                className="w-fit [font-family:'Inter',Helvetica] text-[#ffffff] text-xl leading-7 whitespace-nowrap relative mt-[-1.00px] font-medium tracking-[0]">
                                Enterprise
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className="flex flex-col items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col w-[656px] items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                    <div
                        className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center leading-[60px] relative tracking-[0]">
                        Разработка&nbsp;&nbsp;проектов
                    </div>
                </div>

                <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                    <div className="flex w-[1376px] items-start gap-6 relative flex-[0_0_auto]">
                        <div
                            className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden h-[355px]">
                            <img
                                className="relative flex-[0_0_auto]"
                                alt="Frame"
                                src="https://c.animaapp.com/mdrku0tgHodBr0/img/frame-20-3.svg"
                            />

                            <div
                                className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <div
                                    className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                                    Анализ
                                </div>

                                <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                                    Досконально анализируем и прорабатываем требования перед началом
                                    работ. Разрабатываем приложение в соответствии с вашими
                                    бизнес-целями.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden h-[355px]">
                            <img
                                className="relative flex-[0_0_auto]"
                                alt="Frame"
                                src="https://c.animaapp.com/mdrku0tgHodBr0/img/frame-18-3.svg"
                            />

                            <div
                                className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <div
                                    className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                                    MVP
                                </div>

                                <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                                    Разработаем МѴР в кратчайшие сроки, чтобы вы начали тестировать
                                    бизнес-модель как можно раньше.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden h-[355px]">
                            <img
                                className="relative flex-[0_0_auto]"
                                alt="Frame"
                                src="https://c.animaapp.com/mdrku0tgHodBr0/img/frame-19-2.svg"
                            />

                            <div
                                className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <div
                                    className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                                    Масштабируемость
                                </div>

                                <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                                    Закладываем возможность масштабирования на раннем этапе создания
                                    системы. Развивайте продукт без кардинальных переработок.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-[1376px] items-start gap-6 relative flex-[0_0_auto]">
                        <div
                            className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden h-[355px]">
                            <img
                                className="relative flex-[0_0_auto]"
                                alt="Frame"
                                src="https://c.animaapp.com/mdrku0tgHodBr0/img/frame-19-1.svg"
                            />

                            <div
                                className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <div
                                    className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                                    Кроссплатформенность
                                </div>

                                <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                                    Приложение работает на всех популярных мобильных платформах.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden h-[355px]">
                            <img
                                className="relative flex-[0_0_auto]"
                                alt="Frame"
                                src="https://c.animaapp.com/mdrku0tgHodBr0/img/frame-18-2.svg"
                            />

                            <div
                                className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <div
                                    className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                                    Высокая нагрузка
                                </div>

                                <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                                    Ваш сервис выдержит тысячи одновременных обращений
                                    пользователей.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden h-[355px]">
                            <img
                                className="relative flex-[0_0_auto]"
                                alt="Frame"
                                src="https://c.animaapp.com/mdrku0tgHodBr0/img/frame-20-1.svg"
                            />

                            <div
                                className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <div
                                    className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">
                                    Дизайн
                                </div>

                                <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                                    Интерфейс соответствует <br/>
                                    современным трендам мобильной разработки, а также гайдлайнам
                                    платформ Android и iOS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-[1376px] h-[568px]">
                <div className="w-[1472px] gap-[68px] absolute top-0 left-0 flex items-center">
                    <div className="flex flex-col w-[496px] items-start justify-center gap-8 relative">
                        <p className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl leading-[60px] relative tracking-[0]">
                            Разработаем платформы и решения для вашего бизнеса
                        </p>

                        <button
                            className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-blue-50 rounded-[100px] items-center justify-center">
                            <div
                                className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-xl leading-7 whitespace-nowrap relative tracking-[0]">
                                Попробовать
                            </div>
                        </button>
                    </div>

                    <div className="w-[915px]">
                        <Slider
                            ref={sliderRef}
                            dots={false}
                            infinite={true}
                            speed={500}
                            slidesToShow={2}
                            slidesToScroll={1}
                            centerMode={true}
                            centerPadding="0px"
                            arrows={false}
                            className="p2p-slider"
                        >
                            <div className="px-3">
                                <div
                                    className="flex flex-col w-[443px] h-[480px] items-center gap-12 p-12 relative bg-[#f9fafd] rounded-[32px] overflow-hidden">
                                    <img
                                        className="absolute w-[443px] h-[406px] top-0 left-0"
                                        alt="Vector"
                                        src="https://c.animaapp.com/mdzmydbo2FidHJ/img/vector-1-5.svg"
                                    />

                                    <div className="relative flex-1 self-stretch w-full grow">
                                        <div className="relative w-[443px] -top-12 -left-12">
                                            <div
                                                className="inline-flex items-center justify-center gap-4 pl-2 pr-5 py-2 absolute top-[46px] left-[140px] bg-[#ffffff] rounded-[32px]">
                                                <img
                                                    className="relative flex-[0_0_auto]"
                                                    alt="Frame"
                                                    src="https://c.animaapp.com/mdzmydbo2FidHJ/img/frame-19-3.svg"
                                                />

                                                <div
                                                    className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                                                    landing page
                                                </div>
                                            </div>

                                            <img
                                                className="absolute w-[443px] h-[349px] top-0 left-0"
                                                alt="Vector"
                                                src="https://c.animaapp.com/mdzmydbo2FidHJ/img/vector-4-3.svg"
                                            />

                                            <div
                                                className="inline-flex items-center justify-center gap-4 pl-2 pr-5 py-2 absolute top-[92px] left-[58px] bg-[#ffffff] rounded-[32px]">
                                                <img
                                                    className="relative flex-[0_0_auto]"
                                                    alt="Frame"
                                                    src="https://c.animaapp.com/mdzmydbo2FidHJ/img/frame-20.svg"
                                                />

                                                <div
                                                    className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                                                    corporate portal
                                                </div>
                                            </div>

                                            <img
                                                className="absolute w-[443px] h-[349px] top-0 left-0"
                                                alt="Vector"
                                                src="https://c.animaapp.com/mdzmydbo2FidHJ/img/vector-5.svg"
                                            />

                                            <div
                                                className="inline-flex items-center justify-center gap-4 pl-2 pr-5 py-2 absolute top-[138px] left-32 bg-[#ffffff] rounded-[32px]">
                                                <img
                                                    className="relative flex-[0_0_auto]"
                                                    alt="Frame"
                                                    src="https://c.animaapp.com/mdzmydbo2FidHJ/img/frame-20-2.svg"
                                                />

                                                <div
                                                    className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                                                    multifunctional system
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="gap-3 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                        <div
                                            className="self-stretch [font-family:'Roboto',Helvetica] text-gray-90 text-2xl text-center leading-8 relative mt-[-1.00px] font-medium tracking-[0]">
                                            Enterprise
                                        </div>

                                        <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl text-center leading-7 relative tracking-[0]">
                                            Создаем системы под любые корпоративные задачи. Интегрируем
                                            сторонние сервисы.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-3">
                                <div
                                    className="flex flex-col w-[442px] h-[480px] items-center gap-12 p-12 relative bg-[#f9fafd] rounded-[32px] overflow-hidden">
                                    <img
                                        className="absolute w-[377px] h-[406px] top-0 left-0"
                                        alt="Vector"
                                        src="https://c.animaapp.com/mdzmydbo2FidHJ/img/vector-1.svg"
                                    />

                                    <div className="relative flex-1 self-stretch w-full grow">
                                        <div
                                            className="inline-flex items-center gap-2.5 p-3 absolute top-1 left-[23px] bg-[#ffffff] rounded-[32px]">
                                            <div className="relative w-[120px] h-[120px]">
                                                <div className="relative w-[120px] h-[120px]">
                                                    <div className="absolute w-[120px] h-[120px] top-0 left-0">
                                                        <img
                                                            className="absolute w-[57px] h-[120px] top-0 left-0"
                                                            alt="Subtract"
                                                            src="https://c.animaapp.com/mdzmydbo2FidHJ/img/subtract-2.svg"
                                                        />

                                                        <img
                                                            className="absolute w-[57px] h-[71px] top-[49px] left-[63px]"
                                                            alt="Subtract"
                                                            src="https://c.animaapp.com/mdzmydbo2FidHJ/img/subtract.svg"
                                                        />

                                                        <div
                                                            className="inline-flex flex-col items-center absolute top-[37px] left-[22px]">
                                                            <div
                                                                className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#9ea7bb] text-xs leading-4 whitespace-nowrap relative tracking-[0]">
                                                                Вся сумма
                                                            </div>

                                                            <div
                                                                className="w-fit -mt-0.5 [font-family:'Roboto',Helvetica] font-medium text-[#1c222f] text-xl text-center leading-8 whitespace-nowrap relative tracking-[0]">
                                                                88,000₽
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <img
                                                        className="absolute w-3.5 h-[22px] top-[22px] left-[103px]"
                                                        alt="Subtract"
                                                        src="https://c.animaapp.com/mdzmydbo2FidHJ/img/subtract-1.svg"
                                                    />

                                                    <img
                                                        className="absolute w-[39px] h-5 top-0 left-[63px]"
                                                        alt="Subtract"
                                                        src="https://c.animaapp.com/mdzmydbo2FidHJ/img/subtract-3.svg"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <img
                                            className="absolute w-36 h-36 top-1 left-[179px]"
                                            alt="Frame"
                                            src="https://c.animaapp.com/mdzmydbo2FidHJ/img/frame-31.svg"
                                        />
                                    </div>

                                    <div
                                        className="gap-3 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                        <div
                                            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
                                            FinTech
                                        </div>

                                        <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl text-center leading-7 relative tracking-[0]">
                                            Создаём и развиваем финансовые системы: от цифровых платёжных
                                            решений и CRM для банков и МФО — до аналитических платформ и
                                            scoring-сервисов.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-3">
                                <div
                                    className="flex flex-col w-[443px] h-[480px] items-center gap-12 p-12 relative bg-[#f9fafd] rounded-[32px] overflow-hidden">

                                    <img
                                        className="absolute w-[442px] h-[406px] top-0 left-0"
                                        alt="Vector"
                                        src="https://c.animaapp.com/mdzluxd3Eqcds4/img/vector-1-16.svg"
                                    />

                                    <img
                                        className="relative flex-1 self-stretch w-full grow"
                                        alt="Frame"
                                        src="https://c.animaapp.com/mdzluxd3Eqcds4/img/frame-1948755086-4.svg"
                                    />

                                    <div
                                        className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                                        <div
                                            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
                                            Blockchain
                                        </div>

                                        <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl text-center tracking-[0] leading-7">
                                            Разрабатываем децентрализованные приложения, смарт-контракты и
                                            платформы для управления цифровыми активами. Интегрируем Web3 и
                                            обеспечиваем безопасность данных.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-3">
                                <div
                                    className="flex flex-col w-[443px] h-[480px] items-center gap-12 p-12 relative bg-[#f9fafd] rounded-[32px] overflow-hidden">
                                    <img
                                        className="absolute w-[442px] h-[406px] top-0 left-0"
                                        alt="Vector"
                                        src="https://c.animaapp.com/mdzluxd3Eqcds4/img/vector-1-12.svg"
                                    />

                                    <div className="relative flex-1 self-stretch w-full grow">
                                        <div className="relative w-[442px] -top-12 -left-12">
                                            <div
                                                className="inline-flex items-center justify-center gap-4 pl-2 pr-5 py-2 absolute top-[55px] left-[77px] bg-[#ffffff] rounded-[32px]">
                                                <img
                                                    className="relative flex-[0_0_auto]"
                                                    alt="Frame"
                                                    src="https://c.animaapp.com/mdzluxd3Eqcds4/img/frame-19-5.svg"
                                                />

                                                <div
                                                    className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                                                    Выбор препаратов
                                                </div>
                                            </div>

                                            <img
                                                className="absolute w-[442px] h-[339px] top-0 left-0"
                                                alt="Vector"
                                                src="https://c.animaapp.com/mdzluxd3Eqcds4/img/vector-4-2.svg"
                                            />

                                            <div
                                                className="inline-flex items-center justify-center gap-4 pl-2 pr-5 py-2 absolute top-[101px] left-[119px] bg-[#ffffff] rounded-[32px]">
                                                <img
                                                    className="relative flex-[0_0_auto]"
                                                    alt="Frame"
                                                    src="https://c.animaapp.com/mdzluxd3Eqcds4/img/frame-19-4.svg"
                                                />

                                                <div
                                                    className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                                                    Оформление заказа
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                                        <div
                                            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
                                            MedTech
                                        </div>

                                        <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl text-center tracking-[0] leading-7">
                                            Разрабатываем медицинские информационные системы, ЛК пациента,
                                            платформы для телемедицины и учёта истории лечения. Интегрируемся с
                                            ЕГИСЗ, БМИС и страховыми сервисами.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-3">
                                <div
                                    className="flex flex-col w-[443px] h-[480px] items-center gap-12 p-12 relative bg-[#f9fafd] rounded-[32px] overflow-hidden">
                                    <img
                                        className="absolute w-[442px] h-[406px] top-0 left-0"
                                        alt="Vector"
                                        src="https://c.animaapp.com/mdzluxd3Eqcds4/img/vector-1-15.svg"
                                    />

                                    <img
                                        className="relative flex-1 self-stretch w-full grow"
                                        alt="Frame"
                                        src="https://c.animaapp.com/mdzluxd3Eqcds4/img/frame-1948755086-1.svg"
                                    />

                                    <div
                                        className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                                        <div
                                            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
                                            MarTech
                                        </div>

                                        <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl text-center tracking-[0] leading-7">
                                            Создаём решения для автоматизации маркетинга: CDP, системы
                                            аналитики, платформы управления кампаниями и персонализации
                                            коммуникаций.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                <div
                    className="absolute w-[120px] h-14 top-[512px] p-1 left-[725px] flex items-center justify-between bg-[#f9fafd] rounded-full">
                    <button
                        onClick={goToPrev}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center active:bg-white/90 transition-colors duration-200 cursor-pointer"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.25 12H3.75"
                                stroke="#55607A"
                                stroke-width="2"
                                stroke-linecap="square"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M10.5 5.25L3.75 12L10.5 18.75"
                                stroke="#55607A"
                                stroke-width="2"
                                stroke-linecap="square"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center active:bg-white/90 transition-colors duration-200 cursor-pointer"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.75 12H20.25"
                                stroke="#55607A"
                                stroke-width="2"
                                stroke-linecap="square"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M13.5 5.25L20.25 12L13.5 18.75"
                                stroke="#55607A"
                                stroke-width="2"
                                stroke-linecap="square"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <Feedback/>
            <Technoligies/>

            <div
                className="flex flex-col items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col w-[656px] items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                    <div
                        className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center leading-[60px] relative tracking-[0]">С
                        нами комфортно
                    </div>
                </div>
                <div className="flex w-[1376px] items-start gap-6 relative flex-[0_0_auto]">
                    <div
                        className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden h-[355px]">
                        <img className="relative flex-[0_0_auto]" alt="Frame"
                             src="https://c.animaapp.com/mdzmydbo2FidHJ/img/frame-18-1.svg"/>
                        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                            <div
                                className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">План
                                работ
                            </div>
                            <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">Составляем
                                и показываем детализированный план работ по разработке на старте проекта. Наши клиенты
                                знают, за что платят.</p></div>
                    </div>
                    <div
                        className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden h-[355px]">
                        <img className="relative flex-[0_0_auto]" alt="Frame"
                             src="https://c.animaapp.com/mdzmydbo2FidHJ/img/frame-18.svg"/>
                        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                            <div
                                className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">Команда
                            </div>
                            <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">Сформируем
                                полноценную команду для разработки системы. Командой руководит опытный проектный
                                менеджер.</p></div>
                    </div>
                    <div
                        className="flex flex-col items-start gap-8 p-10 relative flex-1 grow bg-[#f9fafd] rounded-[32px] overflow-hidden h-[355px]">
                        <img className="relative flex-[0_0_auto]" alt="Frame"
                             src="https://c.animaapp.com/mdzmydbo2FidHJ/img/frame-19.svg"/>
                        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                            <div
                                className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl leading-8 relative tracking-[0]">Надежный
                                партнер
                            </div>
                            <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">Не
                                бросаем проект на полпути. Сопровождаем и поддерживаем на протяжении всего жизненного
                                цикла.</p></div>
                    </div>
                </div>
            </div>

            <Works/>
            <Trust/>
        </div>
    );
};
