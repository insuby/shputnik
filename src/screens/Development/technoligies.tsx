import {Analytics} from '../../widgets/analytics.tsx';
import {EmployeeWork} from '../../widgets/employe-work.tsx';
import {Feedback} from '../../widgets/feedback.tsx';
import {Integrations} from '../../widgets/integrations.tsx';
import {Trust} from '../../widgets/trust.tsx';
import {Zaim} from '../../widgets/zaim.tsx';
import Slider from "react-slick";
import {useRef, useState} from "react";

export const Technoligies = () => {
    const sliderRef = useRef<Slider>(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current?.slickNext();
    };


    return (
        <div className="flex flex-col items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-[656px] items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <div
                    className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl text-center leading-[60px] relative tracking-[0]">
                    Технологии разработки
                </div>
            </div>

            <div className="flex w-[1376px] items-center gap-6 relative flex-[0_0_auto] rounded-3xl ">
                <div
                    className=" w-1/2">
                    <Slider
                        ref={sliderRef}
                        dots={false}
                        infinite={true}
                        speed={500}
                        centerMode={true}
                        centerPadding="0px"
                        arrows={false}
                        className="p2p-slider"
                        afterChange={(current) => setCurrentSlideIndex(current)}
                    >
                        <div className="px-3">
                            <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
                                <div
                                    className="flex flex-col w-[560px] items-center justify-center gap-3 relative flex-[0_0_auto]">
                                    <div
                                        className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                                        Figma
                                    </div>

                                    <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                                        Проектируем интерфейсы и интерактивные прототипы в Figma — для
                                        согласования пользовательских сценариев на раннем этапе и
                                        удобной демонстрации заказчику.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col w-[560px] items-center justify-center gap-3 relative flex-[0_0_auto]">
                                    <div
                                        className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                                        React.js
                                    </div>

                                    <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                                        Создаём быстрые и масштабируемые веб-интерфейсы на React.js — с
                                        чистыми компонентами и оптимизированной архитектурой под высокие
                                        нагрузки.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col w-[560px] items-center justify-center gap-3 relative flex-[0_0_auto]">
                                    <div
                                        className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                                        React Native
                                    </div>

                                    <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                                        Разрабатываем кроссплатформенные мобильные приложения с нативным
                                        опытом пользователя — на React Native для Android и iOS
                                        одновременно.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="px-3">
                            <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
                                <div
                                    className="flex flex-col w-[560px] items-center justify-center gap-3 relative flex-[0_0_auto]">
                                    <div
                                        className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                                        Java
                                    </div>

                                    <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                                        Используем Java для построения надёжной backend-архитектуры: от API и микросервисов до работы с высоконагруженными базами данных и интеграциями.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col w-[560px] items-center justify-center gap-3 relative flex-[0_0_auto]">
                                    <div
                                        className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                                        Python
                                    </div>

                                    <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                                        На Python реализуем аналитические модули, обработку данных и интеграции с ML/AI — особенно в задачах скоринга, риск-аналитики и автоматизации процессов.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="px-3">
                            <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
                                <div
                                    className="flex flex-col w-[560px] items-center justify-center gap-3 relative flex-[0_0_auto]">
                                    <div
                                        className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                                        Blockchain / Web3
                                    </div>

                                    <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                                        Реализуем смарт-контракты, NFT-механики, DAO и другие децентрализованные решения. Работаем с Ethereum, BNB Chain, Polygon, Solana и другими экосистемами.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col w-[560px] items-center justify-center gap-3 relative flex-[0_0_auto]">
                                    <div
                                        className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                                        Криптопродукты
                                    </div>

                                    <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
                                        Разрабатываем криптокошельки, dApps, платформы для обмена и управления цифровыми активами. Интегрируем KYC/AML, поддержку токенов, мультисиг и DeFi-протоколы.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slider>

                    <div className="flex items-center justify-between  self-stretch w-full flex-[0_0_auto] mt-20 bottom-[-80px] pr-10">
                        <div
                            className="w-[120px] p-1 flex items-center justify-between bg-[#f9fafd] rounded-full">
                            <button
                                onClick={goToPrev}
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
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
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
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
                        <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                            <div
                                className="w-fit [font-family:'Roboto',Helvetica] text-gray-90 text-xl leading-7 whitespace-nowrap relative mt-[-1.00px] font-normal tracking-[0]">
                                {currentSlideIndex + 1}
                            </div>

                            <div
                                className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 whitespace-nowrap relative tracking-[0]">
                                /
                            </div>

                            <div
                                className="w-fit [font-family:'Roboto',Helvetica] text-[#9ea7bb] text-xl leading-7 whitespace-nowrap relative mt-[-1.00px] font-normal tracking-[0]">
                                3
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    className="relative flex-1 self-stretch grow"
                    alt="Frame"
                    src="https://c.animaapp.com/mdzmydbo2FidHJ/img/frame-21.svg"
                />
            </div>
        </div>
    );
};
