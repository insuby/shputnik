import {motion, useInView} from 'framer-motion';

import {useRef} from 'react';
import Slider from 'react-slick';
import Subtract from '../../icons/Subtract';

import {Check10} from '../../components/ui/check10.tsx';
import {HeroButtons} from '../../components/ui/hero-buttons.tsx';
import {Advantages} from '../../widgets/advantages.tsx';
import {Feedback} from '../../widgets/feedback.tsx';
import {Integrations} from '../../widgets/integrations.tsx';
import {RoleStructure} from '../../widgets/role-structure.tsx';
import {Trust} from '../../widgets/trust.tsx';
import {Zaim} from '../../widgets/zaim.tsx';
import {useFeedbackForm} from '../../widgets/feedback-form/use-feedback-form.ts';
import {Graph} from "../../components/ui/graph.tsx";

export const P2P = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const ref8 = useRef(null);
    const ref9 = useRef(null);
    const ref10 = useRef(null);
    const ref11 = useRef(null);
    const ref12 = useRef(null);
    const ref13 = useRef(null);
    const ref14 = useRef(null);
    const ref15 = useRef(null);
    const ref16 = useRef(null);
    const ref17 = useRef(null);
    const ref18 = useRef(null);
    const ref19 = useRef(null);
    const ref20 = useRef(null);
    const sliderRef = useRef<Slider>(null);

    const inView1 = useInView(ref1, {once: true, margin: '-100px'});
    const inView2 = useInView(ref2, {once: true, margin: '-100px'});
    const inView3 = useInView(ref3, {once: true, margin: '-100px'});
    const inView4 = useInView(ref4, {once: true, margin: '-100px'});
    const inView5 = useInView(ref5, {once: true, margin: '-100px'});
    const inView6 = useInView(ref6, {once: true, margin: '-100px'});
    const inView7 = useInView(ref7, {once: true, margin: '-100px'});
    const inView8 = useInView(ref8, {once: true, margin: '-100px'});
    const inView9 = useInView(ref9, {once: true, margin: '-100px'});
    const inView10 = useInView(ref10, {once: true, margin: '-100px'});
    const inView11 = useInView(ref11, {once: true, margin: '-100px'});
    const inView12 = useInView(ref12, {once: true, margin: '-100px'});
    const inView13 = useInView(ref13, {once: true, margin: '-100px'});
    const inView14 = useInView(ref14, {once: true, margin: '-100px'});
    const inView15 = useInView(ref15, {once: true, margin: '-100px'});
    const inView16 = useInView(ref16, {once: true, margin: '-100px'});
    const inView17 = useInView(ref17, {once: true, margin: '-100px'});
    const inView18 = useInView(ref18, {once: true, margin: '-100px'});
    const inView19 = useInView(ref19, {once: true, margin: '-100px'});
    const inView20 = useInView(ref20, {once: true, margin: '-100px'});

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current?.slickNext();
    };

    const {setIsOpen} = useFeedbackForm();

    const handleTryClick = () => {
        setIsOpen(true);
    };

    return (
        <div
            className="flex flex-col w-[1440px] items-center gap-[136px] pt-8 pb-[136px] px-8 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                <div
                    className="flex flex-col h-[600px] items-start gap-20 p-12 relative self-stretch w-full bg-green-60 rounded-[32px] overflow-hidden">
                    <img
                        className="absolute w-[1108px] h-[1060px] top-[-140px] left-[441px]"
                        alt="Vector"
                        src="/img/p2p/vector-1-5.svg"
                    />

                    <HeroButtons>
                        <div
                            className="flex flex-col w-[624px] items-start justify-center gap-12 relative flex-[0_0_auto]">
                            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                                <motion.div
                                    ref={ref1}
                                    initial={{opacity: 0, y: 50}}
                                    animate={inView1 ? {opacity: 1, y: 0} : {}}
                                    transition={{duration: 0.7, ease: 'easeOut', delay: 0.1}}
                                    className="relative w-[624px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-white text-6xl tracking-[0] leading-[68px]"
                                >
                                    P2P-кредитование
                                </motion.div>

                                <motion.p
                                    ref={ref2}
                                    initial={{opacity: 0, y: 50}}
                                    animate={inView2 ? {opacity: 1, y: 0} : {}}
                                    transition={{duration: 0.7, ease: 'easeOut', delay: 0.2}}
                                    className="relative w-[624px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffcc] text-xl tracking-[0] leading-7"
                                >
                                    Ядро, интеграции с сервисами и источниками информации, готовые
                                    модули и библиотеки - все это позволяет быстро развернуть
                                    P2P-площадку кредитования заточенную под требования вашего
                                    бизнеса.
                                </motion.p>
                            </div>
                        </div>
                    </HeroButtons>

                    <motion.div
                        ref={ref2}
                        initial={{opacity: 0, x: 50}}
                        animate={inView2 ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.7, ease: 'easeOut', delay: 0.3}}
                        className="flex flex-col w-[304px] items-center justify-center absolute top-[108px] left-[802px] bg-green-50 rounded-[32px] overflow-hidden"
                    >
                        <div
                            className="flex flex-col items-center justify-center gap-5 p-5 relative self-stretch w-full flex-[0_0_auto]">
                            <img
                                className="absolute w-[345px] h-[330px] top-1.5 left-[-13px]"
                                alt="Vector"
                                src="/img/p2p/vector-1-1.svg"
                            />

                            <div
                                className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                                <p className="relative w-fit opacity-0 [font-family:'Inter',Helvetica] font-semibold text-gray-90 text-base tracking-[0] leading-4">
                                    <span className="text-[#9ea7bb] leading-6">Привет,</span>

                                    <span className="text-[#1c222f] leading-6"> Давид</span>
                                </p>

                                <div
                                    className="relative w-8 h-8 rounded-3xl [background:url(/img/p2p/frame-1948755022.png)_50%_50%_/_cover]"/>
                            </div>

                            <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                                <div
                                    className="w-fit mt-[-1.00px] opacity-80 [font-family:'Inter',Helvetica] font-normal text-[#ffffff] text-sm leading-5 whitespace-nowrap relative tracking-[0]">
                                    Баланс
                                </div>

                                <div
                                    className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-[28px] text-center tracking-[0] leading-10 whitespace-nowrap">
                                    122,000₽
                                </div>
                            </div>

                            <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
                                <div
                                    className="inline-flex items-center justify-center gap-2 px-2.5 py-1.5 relative flex-[0_0_auto] bg-[#ffffff29] rounded-2xl">
                                    <div className="relative w-3.5 h-3.5">
                                        <div className="absolute w-[9px] h-2.5 top-[3px] left-0.5">
                                            <img
                                                className="absolute w-px h-2.5 top-0 left-1"
                                                alt="Vector"
                                                src="/img/p2p/vector-8.svg"
                                            />

                                            <img
                                                className="absolute w-[9px] h-[5px] top-0 left-0"
                                                alt="Vector"
                                                src="/img/p2p/vector-5.svg"
                                            />
                                        </div>

                                        <img
                                            className="absolute w-[11px] h-px top-0.5 left-0.5"
                                            alt="Vector"
                                            src="/img/p2p/vector.svg"
                                        />
                                    </div>

                                    <div
                                        className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-4 whitespace-nowrap">
                                        Вывести
                                    </div>
                                </div>

                                <div
                                    className="inline-flex items-center justify-center gap-2 px-2.5 py-1.5 relative flex-[0_0_auto] bg-[#ffffff29] rounded-2xl">
                                    <div className="relative w-3.5 h-3.5">
                                        <div className="absolute w-[9px] h-2.5 top-px left-0.5">
                                            <img
                                                className="absolute w-px h-2.5 top-0 left-1"
                                                alt="Vector"
                                                src="/img/p2p/vector-21.svg"
                                            />

                                            <img
                                                className="absolute w-[9px] h-[5px] top-1 left-0"
                                                alt="Vector"
                                                src="/img/p2p/vector-7.svg"
                                            />
                                        </div>

                                        <img
                                            className="absolute w-[11px] h-px top-[11px] left-0.5"
                                            alt="Vector"
                                            src="/img/p2p/vector.svg"
                                        />
                                    </div>

                                    <div
                                        className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-4 whitespace-nowrap">
                                        Пополнить
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex flex-col items-start gap-4 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] rounded-3xl">
                            <div
                                className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <div
                                    className="flex h-[72px] items-start gap-4 p-1 relative self-stretch w-full bg-[#f2f5ff] rounded-2xl overflow-hidden">
                                    <div className="flex flex-col items-start p-3 relative flex-1 grow">
                                        <div
                                            className="opacity-50 text-gray-70 text-xs leading-4 relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal tracking-[0] whitespace-nowrap">
                                            Мои инвестиции
                                        </div>

                                        <div
                                            className="relative w-fit font-medium text-gray-90 text-base leading-6 [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                            42 000₽
                                        </div>
                                    </div>

                                    <div
                                        className="flex flex-col w-[88px] items-start p-3 relative bg-[#eaedf7] rounded-xl">
                                        <div
                                            className="w-fit opacity-50 font-normal text-gray-70 text-xs leading-4 whitespace-nowrap relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking-[0]">
                                            Интерес
                                        </div>

                                        <div
                                            className="relative w-fit font-medium text-gray-90 text-base leading-6 [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                            1 200₽
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="flex h-[72px] items-start gap-4 p-1 relative self-stretch w-full bg-[#f2f5ff] rounded-2xl">
                                    <div className="flex flex-col items-start p-3 relative flex-1 grow">
                                        <div
                                            className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs tracking-[0] leading-4 whitespace-nowrap">
                                            Мои займы
                                        </div>

                                        <div
                                            className="w-fit font-medium text-base leading-6 whitespace-nowrap relative [font-family:'Roboto',Helvetica] text-gray-90 tracking-[0]">
                                            134 000₽
                                        </div>
                                    </div>

                                    <div
                                        className="flex flex-col w-[88px] items-start p-3 relative bg-[#eaedf7] rounded-xl">
                                        <div
                                            className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs tracking-[0] leading-4 whitespace-nowrap">
                                            Платеж
                                        </div>

                                        <div
                                            className="relative w-fit font-medium text-gray-90 text-base leading-6 [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                            9 000₽
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <div
                                    className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-gray-70 text-xs tracking-[0] leading-4 whitespace-nowrap">
                                    Инвестиции
                                </div>

                                <div
                                    className="h-24 items-start gap-4 p-1 self-stretch w-full bg-[#f2f5ff] rounded-2xl flex relative">
                                    <div className="flex flex-col items-start gap-2 p-3 relative flex-1 grow">
                                        <div
                                            className="relative w-fit mt-[-1.00px] font-medium text-gray-90 text-base leading-6 [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                            80 000₽
                                        </div>

                                        <div
                                            className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                                            <div className="flex flex-col items-start relative flex-1 grow">
                                                <div
                                                    className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs tracking-[0] leading-4 whitespace-nowrap">
                                                    Интерес
                                                </div>

                                                <div
                                                    className="font-normal text-gray-90 text-xs leading-4 relative w-fit [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                                    14%
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-start relative flex-1 grow">
                                                <div
                                                    className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs tracking-[0] leading-4 whitespace-nowrap">
                                                    Интерес
                                                </div>

                                                <div
                                                    className="font-normal text-gray-90 text-xs leading-4 relative w-fit [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                                    14%
                                                </div>
                                            </div>

                                            <button
                                                onClick={handleTryClick}
                                                className="inline-flex items-center justify-center gap-2 px-2.5 py-1.5 relative flex-[0_0_auto] bg-gray-90 rounded-2xl cursor-pointer"
                                            >
                                                <div
                                                    className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-4 whitespace-nowrap">
                                                    Вложить
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-60 h-24 items-start gap-4 p-1 relative bg-[#f2f5ff] rounded-2xl">
                                    <div className="flex flex-col items-start gap-2 p-3 relative flex-1 grow">
                                        <div
                                            className="relative w-fit mt-[-1.00px] font-medium text-gray-90 text-base leading-6 [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                            80 000₽
                                        </div>

                                        <div
                                            className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                                            <div className="flex flex-col items-start relative flex-1 grow">
                                                <div
                                                    className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs tracking-[0] leading-4 whitespace-nowrap">
                                                    Интерес
                                                </div>

                                                <div
                                                    className="font-normal text-gray-90 text-xs leading-4 relative w-fit [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                                    14%
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-start relative flex-1 grow">
                                                <div
                                                    className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-xs tracking-[0] leading-4 whitespace-nowrap">
                                                    Интерес
                                                </div>

                                                <div
                                                    className="font-normal text-gray-90 text-xs leading-4 relative w-fit [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                                    14%
                                                </div>
                                            </div>

                                            <button
                                                onClick={handleTryClick}
                                                className="inline-flex items-center justify-center gap-2 px-2.5 py-1.5 relative flex-[0_0_auto] bg-gray-90 rounded-2xl cursor-pointer"
                                            >
                                                <div
                                                    className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-4 whitespace-nowrap">
                                                    Вложить
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <img
                        className="absolute w-[637px] h-[554px] top-[46px] left-[739px]"
                        alt="Vector"
                        src="/img/p2p/vector-4-1.svg"
                    />

                    <motion.div
                        ref={ref2}
                        initial={{opacity: 0, x: -50}}
                        animate={inView2 ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.7, ease: 'easeOut', delay: 0.3}}
                        className="inline-flex flex-col items-start justify-center gap-4 p-8 absolute top-[262px] left-[1000px] bg-white rounded-[32px]"
                    >
                        <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                            <div
                                className="relative w-[180px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#7a86a2] text-sm tracking-[0] leading-5">
                                Общий доход
                            </div>

                            <div
                                className="relative w-[264px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7">
                                1,567,000₽
                            </div>
                        </div>

                        <div className="inline-flex h-[154px] items-end relative">
                            <div
                                className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                                <div className="relative w-8 h-[76px] bg-[#f2f4fb] rounded-3xl"/>

                                <div
                                    className="w-11 font-normal text-[#7a86a2] text-xs text-center leading-4 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                                    01.05
                                </div>
                            </div>

                            <div
                                className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                                <div className="h-[86px] bg-[#f2f4fb] relative w-8 rounded-3xl"/>

                                <div
                                    className="w-11 font-normal text-[#7a86a2] text-xs text-center leading-4 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                                    02.05
                                </div>
                            </div>

                            <div
                                className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                                <div className="h-[105px] bg-[#f2f4fb] relative w-8 rounded-3xl"/>

                                <div
                                    className="w-11 font-normal text-[#7a86a2] text-xs text-center leading-4 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                                    03.05
                                </div>
                            </div>

                            <div
                                className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                                <div
                                    className="h-[120px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,203,130,1)_100%)] relative w-8 rounded-3xl"/>

                                <div
                                    className="w-11 font-normal text-[#7a86a2] text-xs text-center leading-4 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                                    04.05
                                </div>
                            </div>

                            <div
                                className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                                <div className="h-[91px] bg-[#f2f4fb] relative w-8 rounded-3xl"/>

                                <div
                                    className="w-11 font-normal text-[#7a86a2] text-xs text-center leading-4 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                                    06.05
                                </div>
                            </div>

                            <div
                                className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                                <div className="h-[98px] bg-[#f2f4fb] relative w-8 rounded-3xl"/>

                                <div
                                    className="w-11 font-normal text-[#7a86a2] text-xs text-center leading-4 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                                    07.05
                                </div>
                            </div>
                        </div>

                        <img
                            className="absolute w-[328px] h-[104px] top-[106px] left-0"
                            alt="Vector"
                            src="/img/p2p/vector-147.svg"
                        />

                        <div
                            className="absolute w-3 h-3 top-[131px] left-[180px] bg-[#ffffff] rounded-md border-2 border-solid border-[#00cb82]"/>
                    </motion.div>
                </div>
            </div>
            <Advantages/>

            <div className="relative w-[1376px] h-[568px]">
                <div className="w-[1472px] gap-[68px] absolute top-0 left-0 flex items-center">
                    <div className="flex flex-col w-[496px] items-start justify-center gap-8 relative">
                        <div
                            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl tracking-[0] leading-[60px]">
                            Настраиваемые бизнес-процессы
                            <br/>
                            под ваши запросы
                        </div>

                        <button
                            onClick={handleTryClick}
                            className="all-[unset] box-border inline-flex gap-2.5 px-8 py-4 relative flex-[0_0_auto] bg-blue-50 rounded-[100px] items-center justify-center cursor-pointer"
                        >
                            <div
                                className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-xl tracking-[0] leading-7 whitespace-nowrap">
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
                                    className="w-[443px] h-[480px] items-center gap-12 p-12 relative bg-[#f9fafd] rounded-[32px] overflow-hidden flex flex-col">
                                    <img
                                        className="absolute w-[443px] h-[406px] top-0 left-0"
                                        alt="Vector"
                                        src="/img/p2p/vector-1-3.svg"
                                    />

                                    <div className="relative flex-1 self-stretch w-full grow">
                                        <div className="relative w-[443px] -top-12 -left-12">
                                            <div
                                                className="inline-flex items-center justify-center gap-4 pl-2 pr-5 py-2 absolute top-[69px] left-[58px] bg-white rounded-[32px]">
                                                <img
                                                    className="relative flex-[0_0_auto]"
                                                    alt="Frame"
                                                    src="/img/p2p/frame-19-4.svg"
                                                />

                                                <div
                                                    className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                                                    Ваша заявка одобрена
                                                </div>
                                            </div>

                                            <img
                                                className="absolute w-[443px] h-[352px] top-0 left-0"
                                                alt="Vector"
                                                src="/img/p2p/vector-4-4.svg"
                                            />

                                            <div
                                                className="inline-flex items-center justify-center gap-4 pl-2 pr-5 py-2 absolute top-[115px] left-[100px] bg-white rounded-[32px]">
                                                <img
                                                    className="relative flex-[0_0_auto]"
                                                    alt="Frame"
                                                    src="/img/p2p/frame-19-5.svg"
                                                />

                                                <div
                                                    className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base tracking-[0] leading-6 whitespace-nowrap">
                                                    Ваш пароль был изменен
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="flex flex-col items-start gap-3 self-stretch w-full relative flex-[0_0_auto]">
                                        <div
                                            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
                                            Сервисы и интеграции
                                        </div>

                                        <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl text-center tracking-[0] leading-7">
                                            Прием и учет заявок от инвесторов и заемщиков, кабинет
                                            клиента, кабинет специалиста, CRM-система, интеграция с
                                            телефонией, SMS и email-сервисами
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-3">
                                <div
                                    className="w-[443px] h-[480px] items-center gap-12 p-12 relative bg-[#f9fafd] rounded-[32px] overflow-hidden flex flex-col">
                                    <img
                                        className="absolute w-[377px] h-[406px] top-0 left-0"
                                        alt="Vector"
                                        src="/img/p2p/vector-1-10.svg"
                                    />

                                    <div className="relative flex-1 self-stretch w-full grow">
                                        <div className="relative w-[313px] h-[114px] top-5 left-4">
                                            <div
                                                className="flex w-[311px] items-center justify-between absolute top-0 left-px opacity-[0.08]">
                                                <img
                                                    className="relative w-px h-28 ml-[-0.50px]"
                                                    alt="Vector"
                                                    src="/img/p2p/vector-152.svg"
                                                />

                                                <img
                                                    className="relative w-px h-28"
                                                    alt="Vector"
                                                    src="/img/p2p/vector-152.svg"
                                                />

                                                <img
                                                    className="relative w-px h-28"
                                                    alt="Vector"
                                                    src="/img/p2p/vector-152.svg"
                                                />

                                                <img
                                                    className="relative w-px h-28"
                                                    alt="Vector"
                                                    src="/img/p2p/vector-152.svg"
                                                />

                                                <img
                                                    className="relative w-px h-28"
                                                    alt="Vector"
                                                    src="/img/p2p/vector-152.svg"
                                                />

                                                <img
                                                    className="relative w-px h-28"
                                                    alt="Vector"
                                                    src="/img/p2p/vector-152.svg"
                                                />

                                                <img
                                                    className="relative w-px h-28"
                                                    alt="Vector"
                                                    src="/img/p2p/vector-152.svg"
                                                />

                                                <img
                                                    className="relative w-px h-28"
                                                    alt="Vector"
                                                    src="/img/p2p/vector-152.svg"
                                                />

                                                <img
                                                    className="relative w-px h-28 mr-[-0.50px]"
                                                    alt="Vector"
                                                    src="/img/p2p/vector-152.svg"
                                                />
                                            </div>

                                            <img
                                                className="absolute w-[311px] h-[102px] top-3 left-px"
                                                alt="Vector"
                                                src="/img/p2p/vector-160.svg"
                                            />

                                            <img
                                                className="absolute w-[313px] h-[76px] top-[11px] left-0"
                                                alt="Vector"
                                                src="/img/p2p/vector-161.svg"
                                            />

                                            <div
                                                className="absolute w-2 h-2 top-[42px] left-[62px] bg-[#efeefa] rounded border-2 border-solid border-[#3573fc]"/>

                                            <div
                                                className="flex flex-col w-[46px] items-center absolute top-2.5 left-[43px]">
                                                <div
                                                    className="flex items-center justify-center gap-2.5 px-2 py-1 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] rounded-[100px]">
                                                    <div
                                                        className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xs tracking-[0] leading-4 whitespace-nowrap">
                                                        5,674
                                                    </div>
                                                </div>

                                                <img
                                                    className="relative w-2 h-1.5"
                                                    alt="Vector"
                                                    src="/img/p2p/vector-162.svg"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="flex flex-col items-start gap-3 self-stretch w-full relative flex-[0_0_auto]">
                                        <div
                                            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl text-center tracking-[0] leading-8">
                                            Функции инвестора
                                        </div>

                                        <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl text-center tracking-[0] leading-7">
                                            Простое или пакетное инвестирование, торги, рейтинг,
                                            пополнение счета, вывод денег со счета
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
            </div>

            <Feedback/>

            <div className="h-[544px] gap-6 relative self-stretch w-full rounded-3xl flex items-center">
                <div
                    className="flex flex-col items-start gap-8 pl-12 pr-[68px] py-12 relative flex-1 grow rounded-3xl overflow-hidden">
                    <div
                        className="relative w-[480px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]">
                        Готовый модуль расчетов
                    </div>

                    <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Vector"
                        src="/img/p2p/vector-138.svg"
                    />

                    <div
                        className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                        <div
                            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                            Работа с процентами
                        </div>

                        <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                            Начисление, списание и расчет процентов и штрафов. Соблюдение всех
                            требований законодательства РФ
                        </p>
                    </div>

                    <div
                        className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                        <div
                            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                            Работа с продуктами
                        </div>

                        <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                            Гибкая система позволяет создать и настроить необходимый кредитный
                            продукт: от PDL до кредитной линии
                        </p>
                    </div>
                </div>

                <div className="relative flex-1 self-stretch grow bg-[#f9fafd] rounded-3xl overflow-hidden">
                    <div
                        className="relative w-[688px] h-[714px] top-5 left-[33px] bg-[url(/img/p2p/vector-1-6.svg)] bg-[100%_100%]">
                        <div
                            className="inline-flex flex-col items-center justify-center gap-1 p-2 relative top-4 left-[153px] bg-[#ffffff] rounded-[32px_32px_0px_0px] overflow-hidden">
                            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                                <div
                                    className="flex-col w-[284px] items-center justify-center gap-5 pt-3 pb-2 px-4 flex-[0_0_auto] flex relative">
                                    <div
                                        className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                                        <div
                                            className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
                                            Продукт
                                        </div>

                                        <div className="relative w-6 h-6">
                                            <img
                                                className="absolute w-[18px] h-0.5 top-[11px] left-[3px]"
                                                alt="Vector"
                                                src="/img/p2p/vector-9.svg"
                                            />

                                            <img
                                                className="absolute w-[18px] h-0.5 top-[5px] left-[3px]"
                                                alt="Vector"
                                                src="/img/p2p/vector-9.svg"
                                            />

                                            <img
                                                className="absolute w-[18px] h-0.5 top-[17px] left-[3px]"
                                                alt="Vector"
                                                src="/img/p2p/vector-9.svg"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="flex flex-col w-[284px] items-start gap-4 p-2.5 relative flex-[0_0_auto] rounded-3xl">
                                    <div className="inline-flex gap-2 flex-col items-start relative flex-[0_0_auto]">
                                        <div
                                            className="w-[264px] gap-2 px-4 py-3.5 flex-[0_0_auto] bg-[#f2f5ff] rounded-2xl overflow-hidden flex flex-col items-start relative">
                                            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                                                <div
                                                    className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-xs tracking-[0] leading-4 whitespace-nowrap">
                                                    Сумма
                                                </div>

                                                <p className="relative w-fit font-medium text-gray-90 text-xl leading-7 [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                                    30 000 ₽ - 680 000 ₽
                                                </p>
                                            </div>

                                            <div
                                                className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                                                <img
                                                    className="relative w-[232px] h-[30px] mt-[-6.00px]"
                                                    alt="Frame"
                                                    src="/img/p2p/frame-83-4.svg"
                                                />

                                                <div
                                                    className="flex w-[232px] h-4 items-start justify-between relative">
                                                    <div
                                                        className="relative w-fit mt-[-1.00px] opacity-50 font-normal text-gray-70 text-xs leading-4 [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                                        10 000 ₽
                                                    </div>

                                                    <div
                                                        className="relative w-fit mt-[-1.00px] opacity-50 font-normal text-gray-70 text-xs leading-4 [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                                        800 000 ₽
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="w-[264px] gap-2 px-4 py-3.5 flex-[0_0_auto] bg-[#f2f5ff] rounded-2xl overflow-hidden flex flex-col items-start relative">
                                            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                                                <div
                                                    className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-xs tracking-[0] leading-4 whitespace-nowrap">
                                                    Период
                                                </div>

                                                <div
                                                    className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
                                                    2 - 8 месяцев
                                                </div>
                                            </div>

                                            <div
                                                className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                                                <img
                                                    className="relative w-[232px] h-[30px] mt-[-6.00px]"
                                                    alt="Frame"
                                                    src="/img/p2p/frame-83-5.svg"
                                                />

                                                <div
                                                    className="flex w-[232px] h-4 items-start justify-between relative">
                                                    <div
                                                        className="relative w-fit mt-[-1.00px] opacity-50 font-normal text-gray-70 text-xs leading-4 [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                                        1 месяц
                                                    </div>

                                                    <div
                                                        className="relative w-fit mt-[-1.00px] opacity-50 font-normal text-gray-70 text-xs leading-4 [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                                        24 месяца
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="w-[264px] gap-2 px-4 py-3.5 flex-[0_0_auto] bg-[#f2f5ff] rounded-2xl overflow-hidden flex flex-col items-start relative">
                                            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                                                <div
                                                    className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-gray-70 text-xs tracking-[0] leading-4 whitespace-nowrap">
                                                    Процентная ставка
                                                </div>

                                                <div
                                                    className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl tracking-[0] leading-7 whitespace-nowrap">
                                                    1,2% - 8%
                                                </div>
                                            </div>

                                            <div
                                                className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                                                <img
                                                    className="relative w-[232px] h-[30px] mt-[-6.00px]"
                                                    alt="Frame"
                                                    src="/img/p2p/frame-83-6.svg"
                                                />

                                                <div
                                                    className="flex w-[232px] h-4 items-start justify-between relative">
                                                    <div
                                                        className="mt-[-1.00px] opacity-50 font-normal text-gray-70 text-xs leading-4 relative w-fit [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                                        0%
                                                    </div>

                                                    <div
                                                        className="mt-[-1.00px] opacity-50 font-normal text-gray-70 text-xs leading-4 relative w-fit [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                                        24%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleTryClick}
                                        className="all-[unset] box-border flex h-12 gap-8 px-8 py-3 relative self-stretch w-full bg-gray-90 rounded-3xl items-center justify-center cursor-pointer"
                                    >
                                        <div
                                            className="relative self-stretch w-[164px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                                            Создать продукт
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto] rounded-3xl">
                <div className="relative flex-1 self-stretch grow bg-[#f9fafd] rounded-3xl overflow-hidden">
                    <div
                        className="relative w-[688px] h-[714px] top-5 left-[33px] bg-[url(/img/p2p/vector-1-7.svg)] bg-[100%_100%]">
                        <div
                            className="inline-flex flex-col items-center justify-center gap-1 p-2 relative top-5 left-[153px] bg-[#ffffff] rounded-[32px_32px_0px_0px] overflow-hidden">
                            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                                <div
                                    className="flex-col w-[284px] items-center justify-center gap-5 px-4 py-3 flex-[0_0_auto] flex relative">
                                    <div
                                        className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                                        <div
                                            className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
                                            Платежи
                                        </div>

                                        <div className="relative w-6 h-6">
                                            <img
                                                className="absolute w-[18px] h-0.5 top-[11px] left-[3px]"
                                                alt="Vector"
                                                src="/img/p2p/vector-9.svg"
                                            />

                                            <img
                                                className="absolute w-[18px] h-0.5 top-[5px] left-[3px]"
                                                alt="Vector"
                                                src="/img/p2p/vector-9.svg"
                                            />

                                            <img
                                                className="absolute w-[18px] h-0.5 top-[17px] left-[3px]"
                                                alt="Vector"
                                                src="/img/p2p/vector-9.svg"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="items-start px-2.5 py-2 self-stretch w-full flex-[0_0_auto] flex relative">
                                    <div
                                        className="w-[264px] items-center justify-between bg-[#f9fafd] rounded-[100px] flex relative">
                                        <div
                                            className="flex w-[132px] px-0 py-2 bg-gray-90 rounded-[100px] flex-col items-center justify-center gap-2 relative">
                                            <div
                                                className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                                                Продукты
                                            </div>
                                        </div>

                                        <div
                                            className="flex w-[132px] px-0 py-2 flex-col items-center justify-center gap-2 relative">
                                            <div
                                                className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-90 text-sm tracking-[0] leading-5 whitespace-nowrap">
                                                Договоры
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="flex flex-col w-[284px] items-start gap-4 p-2.5 relative flex-[0_0_auto] rounded-3xl">
                                    <div className="inline-flex gap-3 flex-col items-start relative flex-[0_0_auto]">
                                        <div
                                            className="flex w-[264px] items-center justify-between p-3 relative flex-[0_0_auto] bg-[#f9fafd] rounded-2xl overflow-hidden">
                                            <div
                                                className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                                                <div
                                                    className="inline-flex items-center justify-center gap-2.5 px-2 py-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                                                    <div
                                                        className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#00ac6e] text-xs tracking-[0] leading-4 whitespace-nowrap">
                                                        Займ PRO
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="flex-1 [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base text-right leading-6 relative tracking-[0]">
                                                +30 580 ₽
                                            </div>
                                        </div>

                                        <div
                                            className="flex w-[264px] items-center justify-between p-3 relative flex-[0_0_auto] bg-[#f9fafd] rounded-2xl overflow-hidden">
                                            <div
                                                className="inline-flex items-center justify-center gap-2.5 px-2 py-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
                                                <div
                                                    className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#3573fc] text-xs leading-4 whitespace-nowrap relative tracking-[0]">
                                                    Льготный
                                                </div>
                                            </div>

                                            <div
                                                className="flex-1 [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base text-right leading-6 relative tracking-[0]">
                                                +8 000 ₽
                                            </div>
                                        </div>

                                        <div
                                            className="flex w-[264px] items-center justify-between p-3 relative flex-[0_0_auto] bg-[#f9fafd] rounded-2xl overflow-hidden">
                                            <div
                                                className="inline-flex items-center justify-center gap-2.5 px-2 py-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
                                                <div
                                                    className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#3573fc] text-xs leading-4 whitespace-nowrap relative tracking-[0]">
                                                    Льготный
                                                </div>
                                            </div>

                                            <div
                                                className="flex-1 [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base text-right leading-6 relative tracking-[0]">
                                                +12 600 ₽
                                            </div>
                                        </div>

                                        <div
                                            className="flex w-[264px] items-center justify-between p-3 relative flex-[0_0_auto] bg-[#f9fafd] rounded-2xl overflow-hidden">
                                            <div
                                                className="inline-flex items-center justify-center gap-2.5 px-2 py-1.5 relative flex-[0_0_auto] bg-[#e6485014] rounded-[100px]">
                                                <div
                                                    className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#e64850] text-xs tracking-[0] leading-4 whitespace-nowrap">
                                                    Экспресс
                                                </div>
                                            </div>

                                            <div
                                                className="flex-1 [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base text-right leading-6 relative tracking-[0]">
                                                +22 000 ₽
                                            </div>
                                        </div>

                                        <div
                                            className="flex w-[264px] items-center justify-between p-3 relative flex-[0_0_auto] bg-[#f9fafd] rounded-2xl overflow-hidden">
                                            <div
                                                className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                                                <div
                                                    className="inline-flex items-center justify-center gap-2.5 px-2 py-1.5 relative flex-[0_0_auto] bg-[#00cb8214] rounded-[100px]">
                                                    <div
                                                        className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#00ac6e] text-xs tracking-[0] leading-4 whitespace-nowrap">
                                                        Займ PRO
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="flex-1 [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base text-right leading-6 relative tracking-[0]">
                                                +30 580 ₽
                                            </div>
                                        </div>

                                        <div
                                            className="flex w-[264px] items-center justify-between p-3 relative flex-[0_0_auto] bg-[#f9fafd] rounded-2xl overflow-hidden">
                                            <div
                                                className="inline-flex items-center justify-center gap-2.5 px-2 py-1.5 relative flex-[0_0_auto] bg-[#3573fc14] rounded-[100px]">
                                                <div
                                                    className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#3573fc] text-xs leading-4 whitespace-nowrap relative tracking-[0]">
                                                    Льготный
                                                </div>
                                            </div>

                                            <div
                                                className="flex-1 [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-base text-right leading-6 relative tracking-[0]">
                                                +7 300 ₽
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="flex flex-col items-start gap-8 pl-12 pr-[68px] py-12 relative flex-1 grow rounded-3xl overflow-hidden">
                    <div
                        className="relative w-[480px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-[40px] tracking-[0] leading-[48px]">
                        Интеллектуальная работа с платежами
                    </div>

                    <img
                        className="relative self-stretch w-full h-px object-cover"
                        alt="Vector"
                        src="/img/p2p/vector-138.svg"
                    />

                    <div
                        className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                        <div
                            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                            Автоматизация
                        </div>

                        <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                            Автоматическое разнесение входящих платежей, распределение
                            процентов, ОД, штрафов, а также создание других операций
                        </p>
                    </div>

                    <div
                        className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                        <div
                            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                            Работа с продуктами
                        </div>

                        <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-gray-40 text-xl tracking-[0] leading-7">
                            Отправка исходящих платежей по событиям. Можно включить как
                            полностью автоматический режим,
                            <br/>
                            так и режим «с подтверждением»
                        </p>
                    </div>
                </div>
            </div>

            <Zaim/>
            <Integrations/>

            <div
                className="flex items-center gap-[88px] p-20 relative self-stretch w-full flex-[0_0_auto] bg-green-60 rounded-[32px] overflow-hidden">
                <img
                    className="absolute w-[1204px] h-[1060px] top-[15px] left-[386px]"
                    alt="Vector"
                    src="/img/p2p/vector-1-11.svg"
                />

                <div className="flex flex-col w-[640px] items-start gap-8 relative">
                    <motion.div
                        ref={ref3}
                        initial={{opacity: 0, x: 80}}
                        animate={inView3 ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.8, ease: 'easeOut'}}
                        className="relative w-[530px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-5xl tracking-[0] leading-[60px]"
                    >
                        Гибкая настройка системы
                    </motion.div>

                    <div className="flex flex-col items-start gap-5 self-stretch w-full relative flex-[0_0_auto]">
                        <motion.div
                            ref={ref4}
                            initial={{opacity: 0, y: 50}}
                            animate={inView4 ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.6, ease: 'easeOut', delay: 0.1}}
                            className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
                        >
                            <motion.div
                                ref={ref5}
                                initial={{opacity: 0, scale: 0}}
                                animate={inView5 ? {opacity: 1, scale: 1} : {}}
                                transition={{duration: 0.6, ease: 'easeOut', delay: 0.2}}
                                className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#ffffff1f] rounded-[100px]"
                            >
                                <Check10 className="!relative !w-4 !h-4" color="#ffffff"/>
                            </motion.div>

                            <motion.p
                                ref={ref6}
                                initial={{opacity: 0, y: 50}}
                                animate={inView6 ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.6, ease: 'easeOut', delay: 0.3}}
                                className="flex-1 mt-[-1.00px] font-normal text-white text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]"
                            >
                                Бизнес-процессы под потребности вашего бизнеса
                            </motion.p>
                        </motion.div>

                        <motion.div
                            ref={ref7}
                            initial={{opacity: 0, y: 50}}
                            animate={inView7 ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.6, ease: 'easeOut', delay: 0.2}}
                            className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
                        >
                            <motion.div
                                ref={ref8}
                                initial={{opacity: 0, scale: 0}}
                                animate={inView8 ? {opacity: 1, scale: 1} : {}}
                                transition={{duration: 0.6, ease: 'easeOut', delay: 0.3}}
                                className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#ffffff1f] rounded-[100px]"
                            >
                                <Check10 className="!relative !w-4 !h-4" color="#ffffff"/>
                            </motion.div>

                            <motion.div
                                ref={ref9}
                                initial={{opacity: 0, y: 50}}
                                animate={inView9 ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.6, ease: 'easeOut', delay: 0.4}}
                                className="flex-1 mt-[-1.00px] font-normal text-white text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]"
                            >
                                Правила расчета рейтинга
                            </motion.div>
                        </motion.div>

                        <motion.div
                            ref={ref10}
                            initial={{opacity: 0, y: 50}}
                            animate={inView10 ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.6, ease: 'easeOut', delay: 0.3}}
                            className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
                        >
                            <motion.div
                                ref={ref11}
                                initial={{opacity: 0, scale: 0}}
                                animate={inView11 ? {opacity: 1, scale: 1} : {}}
                                transition={{duration: 0.6, ease: 'easeOut', delay: 0.4}}
                                className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#ffffff1f] rounded-[100px]"
                            >
                                <Check10 className="!relative !w-4 !h-4" color="#ffffff"/>
                            </motion.div>

                            <motion.div
                                ref={ref12}
                                initial={{opacity: 0, y: 50}}
                                animate={inView12 ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.6, ease: 'easeOut', delay: 0.5}}
                                className="flex-1 mt-[-1.00px] font-normal text-white text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]"
                            >
                                Условия выдачи займа
                            </motion.div>
                        </motion.div>

                        <motion.div
                            ref={ref13}
                            initial={{opacity: 0, y: 50}}
                            animate={inView13 ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.6, ease: 'easeOut', delay: 0.4}}
                            className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
                        >
                            <motion.div
                                ref={ref14}
                                initial={{opacity: 0, scale: 0}}
                                animate={inView14 ? {opacity: 1, scale: 1} : {}}
                                transition={{duration: 0.6, ease: 'easeOut', delay: 0.5}}
                                className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#ffffff1f] rounded-[100px]"
                            >
                                <Check10 className="!relative !w-4 !h-4" color="#ffffff"/>
                            </motion.div>

                            <motion.div
                                ref={ref15}
                                initial={{opacity: 0, y: 50}}
                                animate={inView15 ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.6, ease: 'easeOut', delay: 0.6}}
                                className="flex-1 mt-[-1.00px] font-normal text-white text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]"
                            >
                                Автоматические сообщения
                            </motion.div>
                        </motion.div>

                        <motion.div
                            ref={ref16}
                            initial={{opacity: 0, y: 50}}
                            animate={inView16 ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.6, ease: 'easeOut', delay: 0.5}}
                            className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
                        >
                            <motion.div
                                ref={ref17}
                                initial={{opacity: 0, scale: 0}}
                                animate={inView17 ? {opacity: 1, scale: 1} : {}}
                                transition={{duration: 0.6, ease: 'easeOut', delay: 0.6}}
                                className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#ffffff1f] rounded-[100px]"
                            >
                                <Check10 className="!relative !w-4 !h-4" color="#ffffff"/>
                            </motion.div>

                            <motion.div
                                ref={ref18}
                                initial={{opacity: 0, y: 50}}
                                animate={inView18 ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.6, ease: 'easeOut', delay: 0.7}}
                                className="flex-1 mt-[-1.00px] font-normal text-white text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]"
                            >
                                Интеллектуальная система формирования документов
                            </motion.div>
                        </motion.div>

                        <motion.div
                            ref={ref19}
                            initial={{opacity: 0, y: 50}}
                            animate={inView19 ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.6, ease: 'easeOut', delay: 0.6}}
                            className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
                        >
                            <motion.div
                                ref={ref20}
                                initial={{opacity: 0, scale: 0}}
                                animate={inView20 ? {opacity: 1, scale: 1} : {}}
                                transition={{duration: 0.6, ease: 'easeOut', delay: 0.7}}
                                className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#ffffff1f] rounded-[100px]"
                            >
                                <Check10 className="!relative !w-4 !h-4" color="#ffffff"/>
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, y: 50}}
                                animate={inView20 ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.6, ease: 'easeOut', delay: 0.8}}
                                className="flex-1 mt-[-1.00px] font-normal text-white text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]"
                            >
                                Роли сотрудников в системе
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            animate={inView20 ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.6, ease: 'easeOut', delay: 0.7}}
                            className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
                        >
                            <motion.div
                                initial={{opacity: 0, scale: 0}}
                                animate={inView20 ? {opacity: 1, scale: 1} : {}}
                                transition={{duration: 0.6, ease: 'easeOut', delay: 0.8}}
                                className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#ffffff1f] rounded-[100px]"
                            >
                                <Check10 className="!relative !w-4 !h-4" color="#ffffff"/>
                            </motion.div>

                            <motion.p
                                initial={{opacity: 0, y: 50}}
                                animate={inView20 ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.6, ease: 'easeOut', delay: 0.9}}
                                className="flex-1 mt-[-1.00px] font-normal text-white text-xl leading-7 relative [font-family:'Roboto',Helvetica] tracking-[0]"
                            >
                                Управление правилами организации, контроль действий
                                пользователей, работа с черными списками
                            </motion.p>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{opacity: 0, scale: 0}}
                    animate={inView20 ? {opacity: 1, scale: 1} : {}}
                    transition={{duration: 0.6, ease: 'easeOut', delay: 0.1}}
                    className="flex flex-col w-[324px] items-center justify-center gap-6 p-4 absolute top-[102px] left-[810px] bg-white rounded-[32px]"
                >
                    <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <div
                            className="flex flex-col items-start gap-5 pt-3 pb-4 px-4 relative self-stretch w-full flex-[0_0_auto]">
                            <div
                                className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-2xl tracking-[0] leading-8">
                                Оформить заявку
                            </div>

                            <div className="w-64 gap-2 flex-[0_0_auto] flex flex-col items-start relative">
                                <div className="relative self-stretch w-full h-3.5">
                                    <div className="relative w-[261px] h-3 top-px left-[-3px]">
                                        <img
                                            className="absolute w-[260px] h-1 top-1 left-px"
                                            alt="Vector"
                                            src="/img/p2p/vector-136-1.svg"
                                        />

                                        <img
                                            className="absolute w-[169px] h-1.5 top-[3px] left-0"
                                            alt="Vector"
                                            src="/img/p2p/vector-137.svg"
                                        />

                                        <div
                                            className="absolute w-3 h-3 top-0 left-[158px] bg-green-50 rounded-md shadow-[0px_4px_8px_#04ca8333]"/>
                                    </div>
                                </div>

                                <div className="relative self-stretch w-full h-6">
                                    <div
                                        className="left-0 font-normal text-[#7a86a2] absolute -top-px [font-family:'Roboto',Helvetica] text-base tracking-[0] leading-6 whitespace-nowrap">
                                        0
                                    </div>

                                    <div
                                        className="absolute -top-px left-[131px] font-medium text-gray-90 text-base leading-6 [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                        122 000
                                    </div>
                                </div>
                            </div>

                            <div className="w-64 gap-2 flex-[0_0_auto] flex flex-col items-start relative">
                                <div className="relative self-stretch w-full h-3.5">
                                    <div className="relative w-[261px] h-3 top-px left-[-3px]">
                                        <img
                                            className="absolute w-[260px] h-1 top-1 left-px"
                                            alt="Vector"
                                            src="/img/p2p/vector-136.svg"
                                        />

                                        <img
                                            className="absolute w-[95px] h-1.5 top-[3px] left-0"
                                            alt="Vector"
                                            src="/img/p2p/vector-137-1.svg"
                                        />

                                        <div
                                            className="absolute w-3 h-3 top-0 left-[86px] bg-green-50 rounded-md shadow-[0px_4px_8px_#04ca8333]"/>
                                    </div>
                                </div>

                                <div className="relative self-stretch w-full h-6">
                                    <div
                                        className="left-0 font-normal text-[#7a86a2] absolute -top-px [font-family:'Roboto',Helvetica] text-base tracking-[0] leading-6 whitespace-nowrap">
                                        0
                                    </div>

                                    <div
                                        className="left-20 font-medium text-gray-90 absolute -top-px [font-family:'Roboto',Helvetica] text-base tracking-[0] leading-6 whitespace-nowrap">
                                        14
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                            <div
                                className="px-4 py-3 flex-1 grow bg-[#f6f8ff] rounded-[20px] flex flex-col items-start relative">
                                <div
                                    className="text-[#7a86a2] text-base leading-6 relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal tracking-[0] whitespace-nowrap">
                                    Сумма
                                </div>

                                <div
                                    className="relative w-fit mr-[-2.33px] font-medium text-gray-90 text-base leading-6 [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                    42 000₽
                                </div>
                            </div>

                            <div
                                className="px-4 py-3 flex-1 grow bg-[#f6f8ff] rounded-[20px] flex flex-col items-start relative">
                                <div
                                    className="text-[#7a86a2] text-base leading-6 relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal tracking-[0] whitespace-nowrap">
                                    Срок
                                </div>

                                <div
                                    className="relative w-fit mr-[-0.33px] font-medium text-gray-90 text-base leading-6 [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                    14 дней
                                </div>
                            </div>

                            <div
                                className="px-4 py-3 flex-1 grow bg-[#f6f8ff] rounded-[20px] flex flex-col items-start relative">
                                <div
                                    className="text-[#7a86a2] text-base leading-6 relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal tracking-[0] whitespace-nowrap">
                                    Ставка
                                </div>

                                <div
                                    className="font-medium text-gray-90 text-base leading-6 relative w-fit [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap">
                                    2.5%
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleTryClick}
                        className="all-[unset] box-border flex h-12 gap-8 px-8 py-3 relative self-stretch w-full bg-gray-90 rounded-3xl items-center justify-center cursor-pointer"
                    >
                        <div
                            className="relative self-stretch w-[164px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                            Оформить займ
                        </div>
                    </button>
                </motion.div>

                <img
                    className="absolute w-[805px] h-[656px] top-0 left-[571px]"
                    alt="Vector"
                    src="/img/p2p/vector-3-1.svg"
                />

                <motion.div
                    initial={{opacity: 0, x: 50}}
                    animate={inView20 ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 0.6, ease: 'easeOut', delay: 0.25}}
                    className="inline-flex flex-col items-center justify-center gap-3 p-4 absolute top-[165px] left-[1054px] bg-white rounded-[32px]"
                >
                    <Graph sum="122,000"/>

                    <div
                        className="inline-flex flex-col items-start gap-2.5 p-5 relative flex-[0_0_auto] bg-[#f6f8ff] rounded-[20px]">
                        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                            <div className="relative w-2 h-2 bg-blue-50 rounded"/>

                            <div
                                className="w-[72px] mt-[-1.00px] font-normal text-[#7a86a2] text-sm leading-5 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                                Текущее
                            </div>

                            <div
                                className="w-[72px] font-medium text-gray-90 text-sm text-right leading-5 relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking-[0]">
                                48,456₽
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                            <div className="relative w-2 h-2 bg-green-50 rounded"/>

                            <div
                                className="w-[72px] mt-[-1.00px] font-normal text-[#7a86a2] text-sm leading-5 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                                Основная
                            </div>

                            <div
                                className="w-[72px] font-medium text-gray-90 text-sm text-right leading-5 relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking-[0]">
                                122,000₽
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                            <div className="relative w-2 h-2 bg-yellow-50 rounded"/>

                            <div
                                className="w-[72px] mt-[-1.00px] font-normal text-[#7a86a2] text-sm leading-5 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                                Проценты
                            </div>

                            <div
                                className="w-[72px] font-medium text-gray-90 text-sm text-right leading-5 relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking-[0]">
                                4,000₽
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                            <div className="relative w-2 h-2 bg-red-50 rounded"/>

                            <div
                                className="w-[72px] mt-[-1.00px] font-normal text-[#7a86a2] text-sm leading-5 relative [font-family:'Roboto',Helvetica] tracking-[0]">
                                Штраф
                            </div>

                            <div
                                className="w-[72px] font-medium text-gray-90 text-sm text-right leading-5 relative mt-[-1.00px] [font-family:'Roboto',Helvetica] tracking-[0]">
                                2,700₽
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <RoleStructure/>
            <Trust/>
        </div>
    );
};
