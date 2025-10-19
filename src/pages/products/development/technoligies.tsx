import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

export const Technoligies = () => {
  const { t } = useTranslation('development');
  const sliderRef = useRef<Slider>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-7 self-stretch lg:gap-12">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-2.5">
        <div className="relative mt-[-1.00px] self-stretch px-6 text-[36px] font-medium leading-[44px] tracking-normal text-gray-90 [font-family:'Roboto',Helvetica] lg:px-0 lg:text-center lg:text-5xl lg:leading-[60px]">
          {t('technologies.title')}
        </div>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] items-center gap-6 rounded-3xl ">
        <div className="w-full lg:w-1/2">
          <Slider
            ref={sliderRef}
            dots={false}
            infinite={true}
            speed={500}
            centerMode={true}
            centerPadding="0px"
            arrows={false}
            afterChange={(current) => setCurrentSlideIndex(current)}
          >
            <div className="px-7 lg:px-3">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-7">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 lg:w-[560px]">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Figma
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    {t('technologies.figma.description')}
                  </p>
                </div>
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 lg:w-[560px]">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    React.js
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    {t('technologies.react.description')}
                  </p>
                </div>
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 lg:w-[560px]">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    React Native
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    {t('technologies.reactNative.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-7 lg:px-3">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-7">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 lg:w-[560px]">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Java
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    {t('technologies.java.description')}
                  </p>
                </div>
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 lg:w-[560px]">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Python
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    {t('technologies.python.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-7 lg:px-3">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-7">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3 lg:w-[560px]">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    Blockchain / Web3
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    {t('technologies.blockchainTech.description')}
                  </p>
                </div>
                <div className="lg::w-[560px] relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-3">
                  <div className="relative mt-[-1.00px] self-stretch text-2xl font-medium leading-8 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                    {t('technologies.crypto.title')}
                  </div>

                  <p className="relative self-stretch text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                    {t('technologies.crypto.description')}
                  </p>
                </div>
              </div>
            </div>
          </Slider>

          <div className="bottom-[-80px] mt-20 flex  w-full flex-[0_0_auto] items-center justify-between self-stretch pr-10">
            <div className="flex w-[120px] items-center justify-between rounded-full bg-[#f9fafd] p-1">
              <button
                onClick={goToPrev}
                className="active:bg-white/90 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-200"
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
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 5.25L3.75 12L10.5 18.75"
                    stroke="#55607A"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="active:bg-white/90 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-200"
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
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 5.25L20.25 12L13.5 18.75"
                    stroke="#55607A"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-3">
              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-normal leading-7 tracking-normal text-gray-90 [font-family:'Roboto',Helvetica]">
                {currentSlideIndex + 1}
              </div>

              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                /
              </div>

              <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-xl font-normal leading-7 tracking-normal text-[#9ea7bb] [font-family:'Roboto',Helvetica]">
                3
              </div>
            </div>
          </div>
        </div>

        <svg
          width="676"
          height="648"
          viewBox="0 0 676 648"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative hidden flex-1 grow self-stretch lg:flex"
        >
          <g clipPath="url(#clip0_9535_12876)">
            <rect width="676" height="648" rx="32" fill="#F9FAFD" />
            <g opacity="0.16" filter="url(#filter0_f_9535_12876)">
              <path
                d="M484.735 382.107C555.757 427.87 538.516 534.958 521.017 582.782C351.978 825.354 140.224 535.791 144.257 382.171C148.291 228.551 337.668 24.4999 430.946 84.6037C524.225 144.707 395.957 324.903 484.735 382.107Z"
                fill="#3573FC"
              />
            </g>
            <rect
              x="177"
              y="53"
              width="168"
              height="168"
              rx="84"
              fill="white"
              fillOpacity="0.36"
            />
            <rect
              x="189"
              y="65"
              width="144"
              height="144"
              rx="72"
              fill="white"
            />
            <path
              d="M236 162.089C236 155.215 241.572 149.643 248.446 149.643H260.893V162.089C260.893 168.963 255.32 174.536 248.446 174.536C241.572 174.536 236 168.963 236 162.089Z"
              fill="#0ACF83"
            />
            <path
              d="M260.893 137.196C260.893 130.323 266.465 124.75 273.339 124.75C280.213 124.75 285.786 130.322 285.786 137.196C285.786 144.07 280.213 149.643 273.339 149.643C266.465 149.643 260.893 144.07 260.893 137.196Z"
              fill="#1ABCFE"
            />
            <path
              d="M236 137.196C236 144.07 241.572 149.643 248.446 149.643H260.893V124.75H248.446C241.572 124.75 236 130.322 236 137.196Z"
              fill="#A259FF"
            />
            <path
              d="M260.893 99.8572V124.75H273.339C280.213 124.75 285.786 119.178 285.786 112.304C285.786 105.43 280.213 99.8572 273.339 99.8572H260.893Z"
              fill="#FF7262"
            />
            <path
              d="M236 112.304C236 119.178 241.572 124.75 248.446 124.75H260.893V99.8572H248.446C241.572 99.8572 236 105.43 236 112.304Z"
              fill="#F24E1E"
            />
            <rect
              x="375"
              y="81"
              width="224"
              height="224"
              rx="88"
              fill="white"
              fillOpacity="0.36"
            />
            <rect
              x="387"
              y="93"
              width="200"
              height="200"
              rx="80"
              fill="white"
            />
            <g clipPath="url(#clip1_9535_12876)">
              <path
                d="M487.001 205.561C493.695 205.561 499.122 200.122 499.122 193.413C499.122 186.704 493.695 181.265 487.001 181.265C480.306 181.265 474.879 186.704 474.879 193.413C474.879 200.122 480.306 205.561 487.001 205.561Z"
                fill="#61DAFB"
              />
              <path
                d="M549.087 193.414C549.087 191.108 547.877 188.572 544.952 185.925C542.027 183.279 537.625 180.758 531.937 178.582C520.581 174.237 504.695 171.487 487 171.487C469.305 171.487 453.419 174.237 442.063 178.582C436.375 180.758 431.973 183.279 429.048 185.925C426.123 188.572 424.913 191.108 424.913 193.414C424.913 195.72 426.122 198.256 429.048 200.902C431.973 203.549 436.375 206.07 442.063 208.246C453.419 212.591 469.306 215.341 487 215.341C504.694 215.341 520.581 212.591 531.937 208.246C537.625 206.07 542.027 203.549 544.952 200.902C547.878 198.256 549.087 195.72 549.087 193.414ZM555 193.414C555 197.98 552.57 201.993 548.914 205.301C545.257 208.609 540.127 211.451 534.044 213.779C521.859 218.441 505.226 221.267 487 221.267C468.774 221.267 452.141 218.441 439.956 213.779C433.873 211.451 428.743 208.609 425.086 205.301C421.43 201.993 419 197.98 419 193.414C419 188.847 421.43 184.835 425.086 181.527C428.743 178.219 433.873 175.371 439.956 173.043C452.141 168.381 468.774 165.561 487 165.561C505.226 165.561 521.859 168.381 534.044 173.043C540.127 175.371 545.257 178.219 548.914 181.527C552.57 184.835 555 188.847 555 193.414Z"
                fill="#61DAFB"
              />
              <path
                d="M518.045 247.3C520.037 246.147 521.624 243.829 522.449 239.967C523.273 236.105 523.25 231.024 522.287 224.999C520.364 212.971 514.797 197.807 505.949 182.45C497.102 167.092 486.782 154.679 477.35 146.995C472.625 143.147 468.246 140.586 464.496 139.371C460.747 138.155 457.95 138.374 455.958 139.527C453.966 140.68 452.378 142.997 451.554 146.859C450.73 150.722 450.753 155.803 451.716 161.828C453.639 173.856 459.206 189.02 468.053 204.377C476.9 219.734 487.22 232.148 496.653 239.831C501.377 243.68 505.757 246.24 509.506 247.456C513.256 248.671 516.052 248.452 518.045 247.3ZM521.001 252.432C517.055 254.715 512.373 254.613 507.687 253.093C502.999 251.573 497.978 248.542 492.926 244.427C482.804 236.182 472.045 223.159 462.932 207.34C453.819 191.521 447.945 175.672 445.881 162.765C444.851 156.322 444.742 150.449 445.773 145.62C446.803 140.793 449.056 136.678 453.001 134.394C456.947 132.111 461.629 132.214 466.316 133.734C471.004 135.253 476.029 138.281 481.082 142.397C491.203 150.642 501.958 163.668 511.07 179.487C520.183 195.305 526.063 211.152 528.126 224.059C529.157 230.502 529.26 236.378 528.23 241.206C527.199 246.034 524.947 250.149 521.001 252.432Z"
                fill="#61DAFB"
              />
              <path
                d="M455.958 247.299C457.95 248.452 460.747 248.67 464.496 247.455C468.246 246.239 472.625 243.679 477.35 239.83C486.782 232.147 497.102 219.734 505.949 204.376C514.797 189.018 520.364 173.855 522.287 161.827C523.25 155.802 523.273 150.721 522.449 146.858C521.624 142.996 520.037 140.678 518.045 139.525C516.052 138.373 513.256 138.154 509.506 139.37C505.757 140.585 501.377 143.146 496.653 146.994C487.22 154.677 476.9 167.091 468.053 182.449C459.206 197.806 453.639 212.97 451.716 224.998C450.753 231.023 450.73 236.104 451.554 239.966C452.378 243.828 453.966 246.146 455.958 247.299ZM453.001 252.431C449.056 250.147 446.803 246.033 445.773 241.205C444.742 236.377 444.851 230.504 445.881 224.061C447.945 211.154 453.819 195.304 462.932 179.485C472.045 163.667 482.804 150.644 492.926 142.399C497.978 138.283 502.999 135.252 507.686 133.732C512.373 132.213 517.055 132.111 521.001 134.393C524.947 136.677 527.199 140.792 528.23 145.619C529.26 150.448 529.157 156.323 528.126 162.766C526.063 175.673 520.183 191.52 511.07 207.339C501.958 223.157 491.203 236.184 481.082 244.429C476.029 248.544 471.004 251.572 466.316 253.092C461.629 254.611 456.947 254.714 453.001 252.431Z"
                fill="#61DAFB"
              />
            </g>
            <rect
              x="77"
              y="234"
              width="200"
              height="200"
              rx="88"
              fill="white"
              fillOpacity="0.36"
            />
            <rect
              x="89"
              y="246"
              width="176"
              height="176"
              rx="80"
              fill="white"
            />
            <path
              d="M175.918 278.005C171.334 278.026 166.957 278.417 163.108 279.099C151.758 281.104 149.698 285.299 149.698 293.039V303.259H176.508V306.665H149.698H139.638C131.846 306.665 125.018 311.349 122.888 320.255C120.426 330.465 120.317 336.845 122.888 347.505C124.794 355.443 129.346 361.095 137.138 361.095H146.357V348.845C146.357 339.995 154.014 332.185 163.107 332.185H189.887C197.342 332.185 203.297 326.047 203.297 318.565V293.035C203.297 285.769 197.167 280.315 189.887 279.095C185.281 278.328 180.502 277.98 175.917 278.001L175.918 278.005ZM161.418 286.224C164.188 286.224 166.449 288.523 166.449 291.349C166.449 294.165 164.187 296.443 161.418 296.443C158.639 296.443 156.387 294.166 156.387 291.349C156.387 288.523 158.639 286.224 161.418 286.224Z"
              fill="url(#paint0_linear_9535_12876)"
            />
            <path
              d="M206.635 306.657V318.567C206.635 327.798 198.809 335.567 189.885 335.567H163.105C155.769 335.567 149.695 341.845 149.695 349.187V374.717C149.695 381.983 156.014 386.257 163.105 388.337C171.592 390.833 179.735 391.284 189.885 388.337C196.635 386.383 203.295 382.449 203.295 374.717V364.497H176.515V361.091H203.295H216.705C224.497 361.091 227.405 355.656 230.115 347.501C232.914 339.102 232.795 331.021 230.115 320.251C228.189 312.494 224.511 306.661 216.705 306.661H206.645L206.635 306.657ZM191.575 371.317C194.354 371.317 196.606 373.594 196.606 376.411C196.606 379.237 194.354 381.536 191.575 381.536C188.805 381.536 186.544 379.237 186.544 376.411C186.544 373.595 188.806 371.317 191.575 371.317Z"
              fill="url(#paint1_linear_9535_12876)"
            />
            <rect
              x="215"
              y="447"
              width="148"
              height="148"
              rx="74"
              fill="white"
              fillOpacity="0.36"
            />
            <rect
              x="227"
              y="459"
              width="124"
              height="124"
              rx="62"
              fill="white"
            />
            <g clipPath="url(#clip2_9535_12876)">
              <path
                d="M319 521C319 504.431 305.569 491 289 491C272.431 491 259 504.431 259 521C259 537.569 272.431 551 289 551C305.569 551 319 537.569 319 521Z"
                fill="#F7931A"
              />
              <path
                d="M302.052 517.325C302.637 513.385 299.658 511.267 295.586 509.854L296.907 504.516L293.681 503.707L292.395 508.904C291.547 508.691 290.676 508.49 289.811 508.291L291.106 503.06L287.882 502.25L286.56 507.586C285.859 507.425 285.169 507.266 284.501 507.098L284.505 507.081L280.056 505.963L279.198 509.433C279.198 509.433 281.591 509.985 281.541 510.019C282.847 510.348 283.083 511.219 283.044 511.909L281.539 517.99C281.629 518.013 281.746 518.046 281.875 518.098C281.767 518.071 281.652 518.042 281.534 518.013L279.424 526.532C279.264 526.931 278.859 527.531 277.946 527.303C277.978 527.351 275.602 526.714 275.602 526.714L274 530.433L278.198 531.487C278.979 531.685 279.744 531.891 280.498 532.085L279.163 537.484L282.385 538.294L283.707 532.952C284.587 533.193 285.441 533.415 286.277 533.624L284.96 538.94L288.186 539.75L289.52 534.361C295.021 535.41 299.157 534.987 300.898 529.976C302.301 525.941 300.828 523.614 297.934 522.096C300.042 521.607 301.629 520.21 302.053 517.326L302.052 517.325ZM294.682 527.735C293.685 531.77 286.94 529.589 284.754 529.042L286.525 521.889C288.712 522.439 295.723 523.527 294.682 527.735ZM295.679 517.267C294.77 520.937 289.156 519.072 287.336 518.615L288.941 512.128C290.762 512.585 296.626 513.439 295.679 517.267Z"
                fill="white"
              />
            </g>
            <rect
              x="363"
              y="321"
              width="168"
              height="168"
              rx="84"
              fill="white"
              fillOpacity="0.36"
            />
            <rect
              x="375"
              y="333"
              width="144"
              height="144"
              rx="72"
              fill="white"
            />
            <path
              d="M414.773 394.527L411.183 398.117C407.081 402.014 406.978 408.476 410.875 412.578C410.978 412.681 411.081 412.783 411.183 412.886L440.004 442.014C440.722 442.732 441.44 443.347 442.363 443.758V408.373L414.773 394.527Z"
              fill="#3D89F5"
            />
            <path
              d="M479.798 394.527L483.388 398.117C487.388 402.014 487.593 408.476 483.695 412.578C483.593 412.681 483.49 412.783 483.388 412.886L454.464 441.911C453.746 442.629 453.029 443.245 452.105 443.655V408.373L479.798 394.527Z"
              fill="#1656B9"
            />
            <path
              d="M472.821 387.142L454.77 369.091C450.77 365.091 444.308 364.988 440.308 368.886C440.206 368.988 440.103 368.988 440.103 369.091L421.949 387.142L447.283 399.758L472.821 387.142Z"
              fill="#85B5F8"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_9535_12876"
              x="-55.8008"
              y="-126.171"
              width="792.27"
              height="1002.24"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_9535_12876"
              />
            </filter>
            <linearGradient
              id="paint0_linear_9535_12876"
              x1="120.998"
              y1="278.003"
              x2="182.846"
              y2="330.686"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5A9FD4" />
              <stop offset="1" stopColor="#306998" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_9535_12876"
              x1="190.943"
              y1="375.585"
              x2="168.72"
              y2="344.492"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD43B" />
              <stop offset="1" stopColor="#FFE873" />
            </linearGradient>
            <clipPath id="clip0_9535_12876">
              <rect width="676" height="648" rx="32" fill="white" />
            </clipPath>
            <clipPath id="clip1_9535_12876">
              <rect
                width="136"
                height="136"
                fill="white"
                transform="translate(419 125)"
              />
            </clipPath>
            <clipPath id="clip2_9535_12876">
              <rect
                width="60"
                height="60"
                fill="white"
                transform="translate(259 491)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};
