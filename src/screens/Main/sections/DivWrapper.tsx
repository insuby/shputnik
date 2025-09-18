import {motion, useInView} from 'framer-motion';

import {useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';

import {RoutesPath} from '../../../routes-path.tsx';

export const DivWrapper = () => {
    const navigate = useNavigate();
    const {t} = useTranslation(['home']);

    const handleBankCreditClick = () => {
        navigate(RoutesPath.BANKCREDIT);
    };

    const handleAutocreditClick = () => {
        navigate(RoutesPath.AUTOCREDIT);
    };

    const ref14 = useRef<HTMLParagraphElement>(null);
    const ref15 = useRef<HTMLDivElement>(null);
    const ref16 = useRef<HTMLDivElement>(null);
    const ref17 = useRef<HTMLDivElement>(null);
    const ref18 = useRef<HTMLDivElement>(null);
    const ref19 = useRef<HTMLDivElement>(null);
    const inView14 = useInView(ref14, {once: true, margin: '-100px'});
    const inView15 = useInView(ref15, {once: true, margin: '-100px'});
    const inView16 = useInView(ref16, {once: true, margin: '-100px'});
    const inView17 = useInView(ref17, {once: true, margin: '-100px'});
    const inView18 = useInView(ref18, {once: true, margin: '-100px'});
    const inView19 = useInView(ref19, {once: true, margin: '-100px'});
    return (
        <section
            className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch px-4 md:gap-7 md:px-0"
            aria-labelledby="classic-crediting"
        >
            <motion.h2
                ref={ref14}
                initial={{opacity: 0, x: -40}}
                animate={inView14 ? {opacity: 1, x: 0} : {}}
                transition={{duration: 0.7, ease: 'easeOut'}}
                className="relative mt-[-1.00px] w-full text-2xl font-normal leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] md:w-fit md:text-[40px] md:leading-10"
                id="classic-crediting"
            >
        <span className="font-medium text-[#1c222f] md:leading-[48px]">
          {t('classicLending')}
        </span>
            </motion.h2>
            <div className="relative grid w-full grid-cols-1 gap-4 self-stretch md:h-[660px] md:grid-cols-2">
                <motion.div
                    id="animate_15"
                    ref={ref15}
                    initial={{opacity: 0, y: 40}}
                    animate={inView15 ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.7, ease: 'easeOut'}}
                    className="relative w-full self-stretch overflow-hidden rounded-[24px] bg-blue-50 md:rounded-[32px]"
                >
                    <div className="relative left-[-222px] top-[-254px] hidden h-[904px] w-full md:block md:w-[1265px]">
                        <img
                            className="absolute left-0 top-[333px] h-[571px] w-full md:w-[611px]"
                            alt="Vector"
                            src="/img/vector-1-8.svg"
                        />
                        <img
                            className="absolute left-[398px] top-0 h-[682px] w-full md:w-[716px]"
                            alt="Vector"
                            src="/img/vector-4.svg"
                        />
                        <motion.div
                            id="animate_16"
                            ref={ref16}
                            initial={{opacity: 0, y: 40}}
                            animate={inView16 ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.7, ease: 'easeOut'}}
                            className="absolute left-[284px] top-[317px] inline-flex items-center overflow-hidden rounded-[23.92px_23.92px_0px_0px] bg-[#f6f8fd]"
                        >
                            <div
                                className="relative flex w-full flex-col items-start gap-[23.92px] bg-[#ffffff] p-[29.9px] md:w-full">
                                <div className="relative flex w-full flex-col gap-[23.92px] self-stretch p-[29.9px]">
                                    <div
                                        className="relative self-stretch text-[23.9px] font-medium leading-[29.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                        {t('calculator.title')}
                                    </div>

                                    <div
                                        className="relative flex w-full flex-[0_0_auto] items-center gap-[11.96px] self-stretch rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                                        <div className="relative flex flex-1 grow flex-col items-start gap-[1.49px]">
                                            <div
                                                className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                                                {t('calculator.dealer')}
                                            </div>

                                            <div
                                                className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                                {t('calculator.dealerName')}
                                            </div>
                                        </div>

                                        <img
                                            className="relative size-[17.94px]"
                                            alt="Caret right"
                                            src="/img/caretright.svg"
                                        />
                                    </div>

                                    <div
                                        className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[11.96px]">
                                        <div className="relative inline-flex flex-[0_0_auto] items-start gap-[8.97px]">
                                            <div
                                                className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[7.47px] rounded-[74.74px] bg-gray-90 px-[14.95px] py-[7.47px]">
                                                <div
                                                    className="relative mt-[-0.75px] w-fit whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
                                                    {t('calculator.condition.new')}
                                                </div>
                                            </div>

                                            <div
                                                className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[7.47px] rounded-[74.74px] bg-[#f7f9ff] px-[14.95px] py-[7.47px]">
                                                <div
                                                    className="relative mt-[-0.75px] w-fit whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                                    {t('calculator.condition.used')}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative inline-flex flex-[0_0_auto] items-start gap-[8.97px]">
                                            <div
                                                className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[7.47px] rounded-[74.74px] bg-[#f7f9ff] px-[14.95px] py-[7.47px]">
                                                <div
                                                    className="relative mt-[-0.75px] w-fit whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                                    {t('calculator.collateral.with')}
                                                </div>
                                            </div>

                                            <div
                                                className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[7.47px] rounded-[74.74px] bg-gray-90 px-[14.95px] py-[7.47px]">
                                                <div
                                                    className="relative mt-[-0.75px] w-fit whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-white [font-family:'Roboto',Helvetica]">
                                                    {t('calculator.collateral.without')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="relative flex w-full flex-[0_0_auto] items-start gap-[14.95px] self-stretch">
                                        <div
                                            className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                                            <div
                                                className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                                                <div
                                                    className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                                                    {t('calculator.brand')}
                                                </div>

                                                <div
                                                    className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                                    Audi
                                                </div>
                                            </div>

                                            <img
                                                className="relative size-[17.94px]"
                                                alt="Caret right"
                                                src="/img/caretright.svg"
                                            />
                                        </div>

                                        <div
                                            className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                                            <div
                                                className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                                                <div
                                                    className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                                                    {t('calculator.model')}
                                                </div>

                                                <div
                                                    className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                                    A7 Sportback
                                                </div>
                                            </div>

                                            <img
                                                className="relative size-[17.94px]"
                                                alt="Caret right"
                                                src="/img/caretright.svg"
                                            />
                                        </div>
                                    </div>

                                    <div
                                        className="relative flex w-full flex-[0_0_auto] items-start gap-[14.95px] self-stretch">
                                        <div
                                            className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                                            <div
                                                className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                                                <div
                                                    className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                                                    {t('calculator.year')}
                                                </div>

                                                <div
                                                    className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                                    2004
                                                </div>
                                            </div>

                                            <img
                                                className="relative size-[17.94px]"
                                                alt="Caret right"
                                                src="/img/caretright.svg"
                                            />
                                        </div>

                                        <div
                                            className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                                            <div
                                                className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                                                <div
                                                    className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                                                    {t('calculator.initialPayment')}
                                                </div>

                                                <div
                                                    className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                                    150 000
                                                </div>
                                            </div>

                                            <img
                                                className="relative size-[17.94px]"
                                                alt="Caret right"
                                                src="/img/caretright.svg"
                                            />
                                        </div>
                                    </div>

                                    <div
                                        className="relative flex w-full flex-[0_0_auto] items-start gap-[14.95px] self-stretch">
                                        <div
                                            className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px]">
                                            <div
                                                className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                                                <div
                                                    className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                                                    {t('calculator.termMonths')}
                                                </div>

                                                <div
                                                    className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                                    24
                                                </div>
                                            </div>

                                            <img
                                                className="relative size-[17.94px]"
                                                alt="Caret right"
                                                src="/img/caretright.svg"
                                            />
                                        </div>

                                        <div
                                            className="relative flex h-[61.29px] flex-1 grow items-center gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#dbe1f0] p-[11.96px] opacity-0">
                                            <div
                                                className="relative my-[-0.06px] flex flex-1 grow flex-col items-start gap-[1.49px]">
                                                <div
                                                    className="relative mt-[-0.75px] self-stretch text-[10.5px] font-normal leading-[14.9px] tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                                                    {t('calculator.initialPayment')}
                                                </div>

                                                <div
                                                    className="relative self-stretch whitespace-nowrap text-[14.9px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                                    150 000
                                                </div>
                                            </div>

                                            <img
                                                className="relative size-[17.94px]"
                                                alt="Caret right"
                                                src="/img/caretright.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex w-full flex-col gap-[23.92px] self-stretch p-[29.9px]">
                                <div
                                    className="relative self-stretch text-[23.9px] font-medium leading-[29.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                    {t('calculator.selectConditions')}
                                </div>

                                <div className="relative flex w-full flex-col gap-[20.5px]">
                                    <div
                                        className="relative flex w-[334.11px] items-start gap-[11.96px] rounded-[11.96px] border-[0.75px] border-solid border-[#DBE2F0] p-[17.94px]">
                                        <div className="relative flex flex-1 flex-col items-start gap-[11.96px]">
                                            <div
                                                className="relative inline-flex w-full items-center justify-between gap-[7.47px]">
                                                <div
                                                    className="relative w-fit whitespace-nowrap text-[14.95px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                                    {t('calculator.optionYour.title')}
                                                </div>
                                                <img className="relative size-[20.93px]" alt="Check"
                                                     src="/img/check-blue.svg"/>
                                            </div>
                                            <div className="relative grid w-full grid-cols-3 gap-[17.94px]">
                                                <div className="relative inline-flex flex-col items-start gap-[1.49px]">
                                                    <div
                                                        className="relative text-[10.46px] leading-[14.9px] text-gray-40 [font-family:'Roboto',Helvetica]">
                                                        {t('calculator.monthlyPayment')}
                                                    </div>
                                                    <div
                                                        className="relative text-[14.95px] leading-[20.9px] text-gray-90 [font-family:'Roboto',Helvetica]">
                                                        187, 000 ₽
                                                    </div>
                                                </div>
                                                <div className="relative inline-flex flex-col items-start gap-[1.49px]">
                                                    <div
                                                        className="relative text-[10.46px] leading-[14.9px] text-gray-40 [font-family:'Roboto',Helvetica]">
                                                        {t('calculator.sum')}
                                                    </div>
                                                    <div
                                                        className="relative text-[14.95px] leading-[20.9px] text-gray-90 [font-family:'Roboto',Helvetica]">
                                                        2, 560, 000 ₽
                                                    </div>
                                                </div>
                                                <div className="relative inline-flex flex-col items-start gap-[1.49px]">
                                                    <div
                                                        className="relative text-[10.46px] leading-[14.9px] text-gray-40 [font-family:'Roboto',Helvetica]">
                                                        {t('calculator.interestShort')}
                                                    </div>
                                                    <div
                                                        className="relative text-[14.95px] leading-[20.9px] text-gray-90 [font-family:'Roboto',Helvetica]">
                                                        3,5%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="relative flex w-[334.11px] items-start gap-[11.96px] rounded-[11.96px] bg-white p-[17.94px]">
                                        <div className="relative flex flex-1 flex-col items-start gap-[11.96px]">
                                            <div
                                                className="relative inline-flex w-full items-center justify-between gap-[7.47px]">
                                                <div
                                                    className="relative w-fit whitespace-nowrap text-[14.95px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                                    {t('calculator.optionYour.title')}
                                                </div>
                                            </div>
                                            <div className="relative grid w/full grid-cols-3 gap-[17.94px]">
                                                <div className="relative inline-flex flex-col items-start gap-[1.49px]">
                                                    <div
                                                        className="relative text-[10.46px] leading-[14.9px] text-gray-40 [font-family:'Roboto',Helvetica]">
                                                        {t('calculator.monthlyPayment')}
                                                    </div>
                                                    <div
                                                        className="relative text-[14.95px] leading-[20.9px] text-gray-90 [font-family:'Roboto',Helvetica]">
                                                        166, 000 ₽
                                                    </div>
                                                </div>
                                                <div className="relative inline-flex flex-col items-start gap-[1.49px]">
                                                    <div
                                                        className="relative text-[10.46px] leading-[14.9px] text-gray-40 [font-family:'Roboto',Helvetica]">
                                                        {t('calculator.sum')}
                                                    </div>
                                                    <div
                                                        className="relative text-[14.95px] leading-[20.9px] text-gray-90 [font-family:'Roboto',Helvetica]">
                                                        2, 450, 000 ₽
                                                    </div>
                                                </div>
                                                <div className="relative inline-flex flex-col items-start gap-[1.49px]">
                                                    <div
                                                        className="relative text-[10.46px] leading-[14.9px] text-gray-40 [font-family:'Roboto',Helvetica]">
                                                        {t('calculator.interestShort')}
                                                    </div>
                                                    <div
                                                        className="relative text-[14.95px] leading-[20.9px] text-[#00B336] [font-family:'Roboto',Helvetica]">
                                                        3,2%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="relative flex w-[334.11px] items-start gap-[11.96px] rounded-[11.96px] bg-white p-[17.94px]">
                                        <div className="relative flex flex-1 flex-col items-start gap-[11.96px]">
                                            <div
                                                className="relative inline-flex w-full items-center justify-between gap-[7.47px]">
                                                <div
                                                    className="relative w-fit whitespace-nowrap text-[14.95px] font-normal leading-[20.9px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                                    {t('calculator.optionYour.title')}
                                                </div>
                                            </div>
                                            <div className="relative grid w/full grid-cols-3 gap-[17.94px]">
                                                <div className="relative inline-flex flex-col items-start gap-[1.49px]">
                                                    <div
                                                        className="relative text-[10.46px] leading-[14.9px] text-gray-40 [font-family:'Roboto',Helvetica]">
                                                        {t('calculator.monthlyPayment')}
                                                    </div>
                                                    <div
                                                        className="relative text-[14.95px] leading-[20.9px] text-gray-90 [font-family:'Roboto',Helvetica]">
                                                        96, 000 ₽
                                                    </div>
                                                </div>
                                                <div className="relative inline-flex flex-col items-start gap-[1.49px]">
                                                    <div
                                                        className="relative text-[10.46px] leading-[14.9px] text-gray-40 [font-family:'Roboto',Helvetica]">
                                                        {t('calculator.sum')}
                                                    </div>
                                                    <div
                                                        className="relative text-[14.95px] leading-[20.9px] text-gray-90 [font-family:'Roboto',Helvetica]">
                                                        2, 640, 000 ₽
                                                    </div>
                                                </div>
                                                <div className="relative inline-flex flex-col items-start gap-[1.49px]">
                                                    <div
                                                        className="relative text-[10.46px] leading-[14.9px] text-gray-40 [font-family:'Roboto',Helvetica]">
                                                        {t('calculator.interestShort')}
                                                    </div>
                                                    <div
                                                        className="relative text-[14.95px] leading-[20.9px] text-gray-90 [font-family:'Roboto',Helvetica]">
                                                        3,6%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </motion.div>

                <div className="relative flex w-full flex-col items-start justify-center gap-5 self-stretch">
                    <motion.div
                        id="animate_17"
                        ref={ref17}
                        initial={{opacity: 0, y: 40}}
                        animate={inView17 ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.7, ease: 'easeOut'}}
                        onClick={() => navigate(RoutesPath.BUSINESSCREDIT)}
                        className="group relative flex w-full flex-1 grow cursor-pointer items-center gap-7 self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-transparent bg-[#f9fafd] p-8 hover:border-[#3573fc]  hover:bg-[#f5f7ff] md:p-10"
                    >
                        <div className="relative flex flex-1 grow flex-col items-start gap-2">
                            <h3 className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                {t('cards.businessCredit.title')}
                            </h3>

                            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                                {t('cards.businessCredit.desc')}
                            </p>
                        </div>

                        <div
                            className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-white p-4">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-[#9FA7BC] group-hover:stroke-[#3573FC]"
                            >
                                <path
                                    d="M12 6L22 16L12 26"
                                    strokeWidth="2"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </motion.div>

                    <motion.div
                        id="animate_18"
                        ref={ref18}
                        initial={{opacity: 0, y: 40}}
                        animate={inView18 ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.7, ease: 'easeOut'}}
                        onClick={handleBankCreditClick}
                        className="group relative flex w-full flex-1 grow cursor-pointer items-center gap-7 self-stretch overflow-hidden rounded-[32px] border-2 border-solid border-transparent bg-[#f9fafd] p-8 hover:border-[#3573fc]  hover:bg-[#f5f7ff] md:p-10"
                    >
                        <div className="relative flex flex-1 grow flex-col items-start gap-2">
                            <h3 className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                {t('cards.bankCredit.title')}
                            </h3>

                            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                                {t('cards.bankCredit.desc')}
                            </p>
                        </div>

                        <div
                            className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-white p-4">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-[#9FA7BC] group-hover:stroke-[#3573FC]"
                            >
                                <path
                                    d="M12 6L22 16L12 26"
                                    strokeWidth="2"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </motion.div>

                    <motion.div
                        id="animate_19"
                        ref={ref19}
                        initial={{opacity: 0, y: 40}}
                        animate={inView19 ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.7, ease: 'easeOut'}}
                        onClick={handleAutocreditClick}
                        className="group relative mx-[-2.00px] mb-[-2.00px] flex w-full flex-1 grow cursor-pointer items-center gap-7 self-stretch overflow-hidden rounded-[32px] border-2 border-solid  border-transparent bg-[#f9fafd] p-8 hover:border-[#3573fc] hover:bg-[#f5f7ff] md:p-10"
                    >
                        <div className="relative flex flex-1 grow flex-col items-start gap-2">
                            <h3 className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                                {t('cards.autocredit.title')}
                            </h3>

                            <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-gray-40 [font-family:'Roboto',Helvetica]">
                                {t('cards.autocredit.desc')}
                            </p>
                        </div>

                        <div
                            className="relative inline-flex flex-[0_0_auto] items-center gap-2.5 rounded-[100px] bg-white p-4">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-[#9FA7BC] group-hover:stroke-[#3573FC]"
                            >
                                <path
                                    d="M12 6L22 16L12 26"
                                    strokeWidth="2"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
