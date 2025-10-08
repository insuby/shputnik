import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

import { useFeedbackForm } from './feedback-form';

export const Integrations = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const { setIsOpen } = useFeedbackForm();

  const handleTryClick = () => {
    setIsOpen(true);
  };

  const inView1 = useInView(ref1, { once: true, margin: '-100px' });
  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref1}
      initial={{ opacity: 0, y: 50 }}
      animate={inView1 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-20 overflow-hidden rounded-[32px] bg-[#f9fafd] p-8 lg:!flex-row lg:!p-24"
    >
      <img
        className="absolute left-[339px] top-[-115px] h-[1060px] w-[1204px]"
        alt="Vector"
        src="/img/widgets/vector-1-2.svg"
      />

      <motion.div
        ref={ref2}
        initial={{ opacity: 0, x: -50 }}
        animate={inView2 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="relative flex w-full flex-col items-start gap-12 lg:w-[432px]"
      >
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
          <div className="relative mt-[-1.00px] self-stretch text-center text-5xl font-medium leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:text-start">
            Интеграции
          </div>

          <p className="relative  self-stretch text-center text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica] lg:text-start">
            Кредитный конвейер тесно интегрирован <br />с большим количеством
            источников информации, государственных служб, платежных систем,
            лидогенераторов, рекламных и других сервисов
          </p>
        </div>

        <button
          onClick={handleTryClick}
          className="all-[unset] relative mx-auto box-border inline-flex w-full flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4 lg:m-0 lg:w-fit"
        >
          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
            Попробовать
          </div>
        </button>
      </motion.div>

      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 30 }}
        animate={inView3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="relative mx-auto flex w-full flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-12 opacity-50"
      >
        <img
          className="h-[31px] w-[145px]"
          alt="Odnoklassniki"
          src="/img/integrations/row1/odnoklassniki.svg"
        />
        <img
          className="h-[44px] w-[114px]"
          alt="NSPK"
          src="/img/integrations/row1/nspk.svg"
        />
        <img
          className="h-[22px] w-[133px]"
          alt="Footer Logo"
          src="/img/integrations/row1/footer-logo.svg"
        />
        <img
          className="h-[26px] w-[138px]"
          alt="JuicyScore"
          src="/img/integrations/row1/juicyscore.svg"
        />
        <img
          className="h-[30px] w-[144px]"
          alt="DreamKas"
          src="/img/integrations/row2/dreamkas.svg"
        />
        <img
          className="h-[18px] w-[164px]"
          alt="YCLIENTS"
          src="/img/integrations/row2/yclients.svg"
        />
        <img
          className="h-[48px] w-[167px]"
          alt="BKI"
          src="/img/integrations/row2/bki.svg"
        />
        <img
          className="h-[44px] w-[191px]"
          alt="Деньги Mail.ru"
          src="/img/integrations/row3/dengi-mail.svg"
        />
        <img
          className="h-[32px] w-[206px]"
          alt="Foza"
          src="/img/integrations/row3/foza.svg"
        />
        <img
          className="h-[24px] w-[84px]"
          alt="ESIA"
          src="/img/integrations/row3/esia.svg"
        />
        <img
          className="h-[48px] w-[115px]"
          alt="OKB"
          src="/img/integrations/row4/okb.svg"
        />
        <img
          className="h-[36px] w-[215px]"
          alt="Russian Standard"
          src="/img/integrations/row4/russian-standard.svg"
        />
        <img
          className="h-[24px] w-[41px]"
          alt="VK"
          src="/img/integrations/row4/vk.svg"
        />
        <img
          className="h-[43px] w-[80px]"
          alt="CRT"
          src="/img/integrations/row4/crt.svg"
        />
        <img
          className="h-[39px] w-[80px]"
          alt="Золотая Корона"
          src="/img/integrations/row5/zolotaya-korona.svg"
        />
        <img
          className="h-[28px] w-[170px]"
          alt="Финкарта"
          src="/img/integrations/row5/finkarta.svg"
        />
        <img
          className="h-[32px] w-[112px]"
          alt="Мир Денег"
          src="/img/integrations/row5/mir-deneg.svg"
        />
        <img
          className="h-[16px] w-[120px]"
          alt="Яндекс"
          src="/img/integrations/row6/yandex.svg"
        />
        <img
          className="h-[34px] w-[118px]"
          alt="Телепорт"
          src="/img/integrations/row6/teleport.svg"
        />
        <img
          className="h-[30px] w-[103px]"
          alt="NBKI"
          src="/img/integrations/row6/nbki.svg"
        />
        <img
          className="h-[26px] w-[99px]"
          alt="CityAds"
          src="/img/integrations/row6/cityads.svg"
        />
        <img
          className="h-[47px] w-[177px]"
          alt="FSSP"
          src="/img/integrations/row7/fssp.svg"
        />
        <img
          className="h-[48px] w-[156px]"
          alt="FMS"
          src="/img/integrations/row7/fms.svg"
        />
        <img
          className="h-[48px] w-[154px]"
          alt="FNS"
          src="/img/integrations/row7/fns.svg"
        />
      </motion.div>
    </motion.div>
  );
};
