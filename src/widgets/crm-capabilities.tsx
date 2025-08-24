import {motion, useInView} from "framer-motion";
import {useRef} from "react";
import {useFeedbackForm} from "./feedback-form";

export const CrmCapabilities = () => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    const { setIsOpen } = useFeedbackForm();

    const onClick = () => {
        setIsOpen(true);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative flex flex-col md:!flex-row w-full flex-[0_0_auto] items-center gap-8 md:gap-2.5 self-stretch overflow-hidden rounded-[32px] bg-violet-50 p-7 pb-10 md:p-12"
        >
            <img
                className="absolute left-[420px] top-[-385px] h-[1060px] w-[1108px]"
                alt="Vector"
                src="/img/vector-1-1.svg"
            />

            <div className="relative flex flex-1 grow flex-col items-start gap-3">
                <div className="relative mt-[-1.00px] self-stretch text-[32px] font-medium leading-10 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
                    Возможности CRM
                </div>

                <p className="relative w-full md:w-[752px] text-xl font-normal leading-7 tracking-normal text-[#ffffff] opacity-60 [font-family:'Roboto',Helvetica]">
                    Сохранение информации о коммуникациях и действиях в системе,
                    автоматизация стратегии взаимодействия с клиентом, интеграция
                    дополнительных сервисов для повышения продаж
                </p>
            </div>

            <button
                onClick={onClick}
                className="all-[unset] relative box-border w-full md:w-fit inline-flex flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-[#ffffff] px-8 py-4 transition-opacity hover:opacity-90"
            >
                <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Демонстрация
                </div>
            </button>
        </motion.div>
    )
}