import Image from "next/image";
import React from "react";

const FeatureCard = ({ data }: any) => {
  return (
    <section className="bg-white/20 py-[50px] px-10 rounded-[30px]">
      <div className="mb-[30px] flex items-center">
        <Image
          src={data.image}
          alt=""
          width={80}
          height={80}
          className="w-[72px] h-[72px]"
        />
        <h3 className="text-[24px] ml-4 font-GilroyBold leading-[1.2]">{data.title}</h3>
      </div>
      <p className="mb-[70px] text-[#fdfdfd] leading-[1.8]">{data.des}</p>
      <span className="tracking-[0.1em] font-semibold [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] bg-bgGradient1 from-gradColor1 to-gradColor2 cursor-pointer">
        READ MORE
      </span>
    </section>
  );
};

export default FeatureCard;
