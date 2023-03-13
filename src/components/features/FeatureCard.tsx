import Image from "next/image";
import React from "react";

const FeatureCard = ({ data }: any) => {
  return (
    <section className="bg-white/20 flex flex-col justify-between p-5 md:py-[50px] md:px-10 mb-[30px] md:mb-0 rounded-[30px] relative z-[1] before:absolute before:w-0 before:h-full before:rounded-[30px] before:top-0 before:right-0 before:bg-bgGradient4 before:transition-all before:duration-500 before:z-[-1] hover:before:w-full hover:before:right-auto hover:before:left-0">
      <div>
        <div className="mb-[30px] flex items-center">
          <Image
            src={data.image}
            alt=""
            width={80}
            height={80}
            className="w-[72px] h-[72px]"
          />
          <h3 className="capitalize text-[22px] md:text-[24px] ml-4 font-GilroyBold leading-[1.2]">
            {data.title}
          </h3>
        </div>
        <p className="capitalize mb-[15px] md:mb-[70px] text-[#fdfdfd] leading-[1.8]">
          {data.des}
        </p>
      </div>
      <span className="tracking-[0.1em] font-semibold [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] bg-bgGradient1 from-gradColor1 to-gradColor2 cursor-pointer">
        READ MORE
      </span>
    </section>
  );
};

export default FeatureCard;
