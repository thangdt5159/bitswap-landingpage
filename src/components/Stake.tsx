import Image from "next/image";
import React from "react";
import stakeImg from "../../public/images/stake-img.png";
import star from "../../public/images/star.png";

const Stake = () => {
  return (
    <section className="pb-[100px]">
      <div className="md:max-w-[1320px] mx-auto px-3 bg-bgGradient4 rounded-[30px]">
        <div className="md:flex">
          <div className="md:w-2/3 py-[90px] px-[112px] relative">
            <Image
              src={star}
              alt=""
              className="absolute right-[10%] bottom-[15%] animate-spin"
            />
            <div className="mb-[15px]">
              <span className="uppercase tracking-[0.1em] font-semibold [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] bg-bgGradient1 from-gradColor1 to-gradColor2">
                Bitswap
              </span>
            </div>
            <h2 className="capitalize md:text-[50px] md:mb-[30px] font-GilroyBold leading-[1.2]">
              The future of crypto trading is here
            </h2>
            <p className="text-lightGray mb-[30px]">
              With the continuous development of blockchain technology and DeFi,
              Bitswap hopes to continue to grow and expand its scope of
              activities in the future, bringing more investment and profit
              opportunities to the participants.
            </p>
            <button className="relative z-[1] before:absolute before:w-full before:h-full before:bg-bgGradient2 before:from-gradColorPink before:to-gradColorBlue before:z-[-1] before:top-0 before:left-0 before:rounded-[6px] before:scale-x-0 before:transition-all before:duration-500 hover:before:scale-x-100">
              Contact Us
            </button>
          </div>
          <div className="md:w-1/3 px-3 flex items-end relative z-[1] before:absolute before:w-[350px] before:h-[350px] before:rounded-full before:bg-white/10 before:top-[20%] before:z-[-1]">
            <Image src={stakeImg} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stake;
