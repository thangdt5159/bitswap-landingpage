import React from "react";

const Title = ({ title, header }: any) => {
  return (
    <section className="text-center mt-[-5px] mb-[30px] md:mb-[50px] relative z-[1]">
      <div className="mb-[10px]">
        <span className="uppercase text-[13px] md:text-base tracking-[0.1em] font-semibold [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] bg-bgGradient1 from-gradColor1 to-gradColor2">
          {header}
        </span>
      </div>
      <h2 className="capitalize text-[30px] md:text-[44px] mb-[30px] md:mb-[25px] font-GilroyBold leading-[1.2]">
        {title}
      </h2>
    </section>
  );
};

export default Title;
