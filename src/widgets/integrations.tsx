import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

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
      className="flex w-[1376px] items-start gap-20 p-20 relative flex-[0_0_auto] bg-[#f9fafd] rounded-[32px] overflow-hidden"
    >
      <img
        className="absolute w-[1204px] h-[1060px] top-[-115px] left-[339px]"
        alt="Vector"
        src="/img/widgets/vector-1-2.svg"
      />

      <motion.div
        ref={ref2}
        initial={{ opacity: 0, x: -50 }}
        animate={inView2 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="flex flex-col w-[432px] items-start gap-12 relative"
      >
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-gray-90 text-5xl leading-[60px] relative tracking-[0]">
            Интеграции
          </div>

          <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-[#9ea7bb] text-xl leading-7 relative tracking-[0]">
            Кредитный конвейер тесно интегрирован <br />с большим количеством
            источников информации, государственных служб, платежных систем,
            лидогенераторов, рекламных и других сервисов
          </p>
        </div>

        <button
          onClick={handleTryClick}
          className="all-[unset] box-border inline-flex px-8 py-4 relative flex-[0_0_auto] bg-blue-50 items-center justify-center gap-2.5 rounded-[100px] cursor-pointer"
        >
          <div className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-xl leading-7 whitespace-nowrap relative tracking-[0]">
            Попробовать
          </div>
        </button>
      </motion.div>

      <motion.div
        ref={ref3}
        initial={{ opacity: 0, x: 50 }}
        animate={inView3 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="flex flex-col items-start gap-12 relative flex-1 grow opacity-50"
      >
        <motion.img
          ref={ref4}
          initial={{ opacity: 0, x: -80 }}
          animate={inView4 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="relative self-stretch w-full flex-[0_0_auto]"
          alt="Frame"
          src="/img/widgets/frame-17.svg"
        />

        <motion.img
          ref={ref5}
          initial={{ opacity: 0, x: 80 }}
          animate={inView5 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="relative self-stretch w-full flex-[0_0_auto]"
          alt="Frame"
          src="/img/widgets/frame-30.svg"
        />

        <motion.img
          ref={ref6}
          initial={{ opacity: 0, x: -80 }}
          animate={inView6 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          className="relative self-stretch w-full flex-[0_0_auto]"
          alt="Frame"
          src="/img/widgets/frame-29.svg"
        />

        <motion.img
          ref={ref7}
          initial={{ opacity: 0, x: 80 }}
          animate={inView7 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          className="relative self-stretch w-full flex-[0_0_auto]"
          alt="Frame"
          src="/img/widgets/frame-24.svg"
        />

        <motion.img
          ref={ref8}
          initial={{ opacity: 0, x: -80 }}
          animate={inView8 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
          className="relative self-stretch w-full flex-[0_0_auto]"
          alt="Frame"
          src="/img/widgets/frame-26.svg"
        />

        <motion.img
          ref={ref9}
          initial={{ opacity: 0, x: 80 }}
          animate={inView9 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
          className="relative self-stretch w-full flex-[0_0_auto]"
          alt="Frame"
          src="/img/widgets/frame-27.svg"
        />

        <motion.div
          ref={ref10}
          initial={{ opacity: 0, y: 50 }}
          animate={inView10 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
          className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="relative w-[177px] h-[49px]">
            <div className="absolute w-[42px] h-[46px] top-0 left-0 bg-[url(/img/widgets/fill-26-copy.svg)] bg-[100%_100%]">
              <div className="absolute w-1 h-1.5 top-[25px] left-[19px]">
                <img
                  className="absolute w-0.5 h-[5px] top-0 left-px"
                  alt="Rectangle"
                  src="/img/widgets/vector-22.svg"
                />

                <div className="absolute w-1 h-0.5 top-1 left-0 bg-[url(/img/widgets/vector-22.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-1 h-0.5 top-0 left-0"
                    alt="Vector"
                    src="/img/widgets/vector-24.svg"
                  />
                </div>
              </div>

              <img
                className="absolute w-0.5 h-0.5 top-[22px] left-5"
                alt="Oval"
                src="/img/widgets/oval-20.svg"
              />
            </div>

            <div className="w-[119px] top-0.5 absolute h-[47px] left-16">
              <div className="relative w-[113px] h-[47px]">
                <div className="top-0 absolute left-0 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-gray-70 text-sm tracking-[0] leading-[normal]">
                  Федеральная
                </div>

                <div className="top-[15px] whitespace-nowrap absolute left-0 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-gray-70 text-sm tracking-[0] leading-[normal]">
                  служба судебных
                </div>

                <div className="top-[30px] absolute left-0 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-gray-70 text-sm tracking-[0] leading-[normal]">
                  приставов
                </div>
              </div>
            </div>

            <LineCopy
              className="absolute w-px h-5 top-[15px] left-[52px]"
              color="#55607A"
            />
          </div>

          <div className="relative w-[157px] h-[49px]">
            <div className="absolute w-[42px] h-[46px] top-0 left-0 bg-[url(/img/widgets/fill-26-copy.svg)] bg-[100%_100%]">
              <img
                className="absolute w-2.5 h-2.5 top-[21px] left-4"
                alt="Path"
                src="/img/widgets/path-9-1.svg"
              />

              <img
                className="absolute w-[11px] h-[11px] top-5 left-4"
                alt="Path"
                src="/img/widgets/path-9.svg"
              />
            </div>

            <LineCopy
              className="absolute w-px h-5 top-[15px] left-[52px]"
              color="#55607A"
            />

            <div className="w-[99px] top-0.5 absolute h-[47px] left-16">
              <div className="relative w-[93px] h-[47px]">
                <div className="top-0 absolute left-0 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-gray-70 text-sm tracking-[0] leading-[normal]">
                  Федеральная
                </div>

                <div className="top-[15px] absolute left-0 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-gray-70 text-sm tracking-[0] leading-[normal]">
                  миграционная
                </div>

                <div className="top-[30px] absolute left-0 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-gray-70 text-sm tracking-[0] leading-[normal]">
                  служба
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[153.5px] h-[47px]">
            <div className="absolute w-[46px] h-[46px] -top-px -left-0.5">
              <img
                className="absolute w-[26px] h-7 top-[9px] left-2.5"
                alt="Fill copy"
                src="/img/widgets/fill-26-copy-2.svg"
              />

              <img
                className="absolute w-[46px] h-[46px] top-0 left-0"
                alt="Oval"
                src="/img/widgets/oval.svg"
              />
            </div>

            <LineCopy
              className="absolute w-px h-5 top-[15px] left-[52px]"
              color="#55607A"
            />

            <div className="w-[95px] top-0 absolute h-[47px] left-16">
              <div className="relative w-[89px] h-[47px]">
                <div className="top-0 absolute left-0 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-gray-70 text-sm tracking-[0] leading-[normal]">
                  Федеральная
                </div>

                <div className="top-[15px] absolute left-0 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-gray-70 text-sm tracking-[0] leading-[normal]">
                  налоговая
                </div>

                <div className="top-[30px] absolute left-0 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-gray-70 text-sm tracking-[0] leading-[normal]">
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
