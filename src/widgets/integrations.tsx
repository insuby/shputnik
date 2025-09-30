import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

import { LineCopy } from 'shared/icons/LineCopy.tsx';

import { useFeedbackForm } from './feedback-form';

export const Integrations = () => {
  const ref1 = useRef(null);
  const { setIsOpen } = useFeedbackForm();

  const handleTryClick = () => {
    setIsOpen(true);
  };
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);

  const inView1 = useInView(ref1, { once: true, margin: '-100px' });
  const inView2 = useInView(ref2, { once: true, margin: '-100px' });
  const inView3 = useInView(ref3, { once: true, margin: '-100px' });
  const inView4 = useInView(ref4, { once: true, margin: '-100px' });
  const inView5 = useInView(ref5, { once: true, margin: '-100px' });
  const inView6 = useInView(ref6, { once: true, margin: '-100px' });
  const inView7 = useInView(ref7, { once: true, margin: '-100px' });
  const inView8 = useInView(ref8, { once: true, margin: '-100px' });
  const inView9 = useInView(ref9, { once: true, margin: '-100px' });
  const inView10 = useInView(ref10, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref1}
      initial={{ opacity: 0, y: 50 }}
      animate={inView1 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative flex w-full flex-col xl:!flex-row flex-[0_0_auto] items-start gap-20 overflow-hidden rounded-[32px] bg-[#f9fafd] p-20"
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
        className="relative flex w-[432px] flex-col items-start gap-12"
      >
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
          <div className="relative mt-[-1.00px] self-stretch text-5xl font-medium leading-[60px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
            Интеграции
          </div>

          <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
            Кредитный конвейер тесно интегрирован <br />с большим количеством
            источников информации, государственных служб, платежных систем,
            лидогенераторов, рекламных и других сервисов
          </p>
        </div>

        <button
          onClick={handleTryClick}
          className="all-[unset] relative box-border inline-flex flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-blue-50 px-8 py-4"
        >
          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-medium leading-7 tracking-normal text-[#ffffff] [font-family:'Roboto',Helvetica]">
            Попробовать
          </div>
        </button>
      </motion.div>

      <motion.div
        ref={ref3}
        initial={{ opacity: 0, x: 50 }}
        animate={inView3 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="relative flex flex-1 grow flex-col items-start gap-12 opacity-50"
      >
        <motion.img
          ref={ref4}
          initial={{ opacity: 0, x: -80 }}
          animate={inView4 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="relative w-full flex-[0_0_auto] self-stretch"
          alt="Frame"
          src="/img/widgets/frame-17.svg"
        />

        <motion.img
          ref={ref5}
          initial={{ opacity: 0, x: 80 }}
          animate={inView5 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="relative w-full flex-[0_0_auto] self-stretch"
          alt="Frame"
          src="/img/widgets/frame-30.svg"
        />

        <motion.img
          ref={ref6}
          initial={{ opacity: 0, x: -80 }}
          animate={inView6 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          className="relative w-full flex-[0_0_auto] self-stretch"
          alt="Frame"
          src="/img/widgets/frame-29.svg"
        />

        <motion.img
          ref={ref7}
          initial={{ opacity: 0, x: 80 }}
          animate={inView7 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          className="relative w-full flex-[0_0_auto] self-stretch"
          alt="Frame"
          src="/img/widgets/frame-24.svg"
        />

        <motion.img
          ref={ref8}
          initial={{ opacity: 0, x: -80 }}
          animate={inView8 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
          className="relative w-full flex-[0_0_auto] self-stretch"
          alt="Frame"
          src="/img/widgets/frame-26.svg"
        />

        <motion.img
          ref={ref9}
          initial={{ opacity: 0, x: 80 }}
          animate={inView9 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
          className="relative w-full flex-[0_0_auto] self-stretch"
          alt="Frame"
          src="/img/widgets/frame-27.svg"
        />

        <motion.div
          ref={ref10}
          initial={{ opacity: 0, y: 50 }}
          animate={inView10 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
          className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch"
        >
          <div className="relative h-[49px] w-[177px]">
            <div className="absolute left-0 top-0 h-[46px] w-[42px] bg-[url(/img/widgets/fill-26-copy.svg)] bg-[100%_100%]">
              <div className="absolute left-[19px] top-[25px] h-1.5 w-1">
                <img
                  className="absolute left-px top-0 h-[5px] w-0.5"
                  alt="Rectangle"
                  src="/img/widgets/vector-22.svg"
                />

                <div className="absolute left-0 top-1 h-0.5 w-1 bg-[url(/img/widgets/vector-22.svg)] bg-[100%_100%]">
                  <img
                    className="absolute left-0 top-0 h-0.5 w-1"
                    alt="Vector"
                    src="/img/widgets/vector-24.svg"
                  />
                </div>
              </div>

              <img
                className="absolute left-5 top-[22px] size-0.5"
                alt="Oval"
                src="/img/widgets/oval-20.svg"
              />
            </div>

            <div className="absolute left-16 top-0.5 h-[47px] w-[119px]">
              <div className="relative h-[47px] w-[113px]">
                <div className="absolute left-0 top-0 text-sm font-normal leading-[normal] tracking-normal text-gray-70 [font-family:'Proxima_Nova-Regular',Helvetica]">
                  Федеральная
                </div>

                <div className="absolute left-0 top-[15px] whitespace-nowrap text-sm font-normal leading-[normal] tracking-normal text-gray-70 [font-family:'Proxima_Nova-Regular',Helvetica]">
                  служба судебных
                </div>

                <div className="absolute left-0 top-[30px] text-sm font-normal leading-[normal] tracking-normal text-gray-70 [font-family:'Proxima_Nova-Regular',Helvetica]">
                  приставов
                </div>
              </div>
            </div>

            <LineCopy
              className="absolute left-[52px] top-[15px] h-5 w-px"
              color="#55607A"
            />
          </div>

          <div className="relative h-[49px] w-[157px]">
            <div className="absolute left-0 top-0 h-[46px] w-[42px] bg-[url(/img/widgets/fill-26-copy.svg)] bg-[100%_100%]">
              <img
                className="absolute left-4 top-[21px] size-2.5"
                alt="Path"
                src="/img/widgets/path-9-1.svg"
              />

              <img
                className="absolute left-4 top-5 size-[11px]"
                alt="Path"
                src="/img/widgets/path-9.svg"
              />
            </div>

            <LineCopy
              className="absolute left-[52px] top-[15px] h-5 w-px"
              color="#55607A"
            />

            <div className="absolute left-16 top-0.5 h-[47px] w-[99px]">
              <div className="relative h-[47px] w-[93px]">
                <div className="absolute left-0 top-0 text-sm font-normal leading-[normal] tracking-normal text-gray-70 [font-family:'Proxima_Nova-Regular',Helvetica]">
                  Федеральная
                </div>

                <div className="absolute left-0 top-[15px] text-sm font-normal leading-[normal] tracking-normal text-gray-70 [font-family:'Proxima_Nova-Regular',Helvetica]">
                  миграционная
                </div>

                <div className="absolute left-0 top-[30px] text-sm font-normal leading-[normal] tracking-normal text-gray-70 [font-family:'Proxima_Nova-Regular',Helvetica]">
                  служба
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[47px] w-[153.5px]">
            <div className="absolute -left-0.5 -top-px size-[46px]">
              <img
                className="absolute left-2.5 top-[9px] h-7 w-[26px]"
                alt="Fill copy"
                src="/img/widgets/fill-26-copy-2.svg"
              />

              <img
                className="absolute left-0 top-0 size-[46px]"
                alt="Oval"
                src="/img/widgets/oval.svg"
              />
            </div>

            <LineCopy
              className="absolute left-[52px] top-[15px] h-5 w-px"
              color="#55607A"
            />

            <div className="absolute left-16 top-0 h-[47px] w-[95px]">
              <div className="relative h-[47px] w-[89px]">
                <div className="absolute left-0 top-0 text-sm font-normal leading-[normal] tracking-normal text-gray-70 [font-family:'Proxima_Nova-Regular',Helvetica]">
                  Федеральная
                </div>

                <div className="absolute left-0 top-[15px] text-sm font-normal leading-[normal] tracking-normal text-gray-70 [font-family:'Proxima_Nova-Regular',Helvetica]">
                  налоговая
                </div>

                <div className="absolute left-0 top-[30px] text-sm font-normal leading-[normal] tracking-normal text-gray-70 [font-family:'Proxima_Nova-Regular',Helvetica]">
                  служба
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
