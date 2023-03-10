import React from "react";

const Title = ({ title, header }: any) => {
  return (
    <section className="text-center mt-[-5px] mb-[50px]">
      <div className="mb-[10px]">
        <span className="uppercase tracking-[0.1em] font-semibold [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] bg-bgGradient1 from-gradColor1 to-gradColor2">
          {header}
        </span>
      </div>
      <h2 className="capitalize text-[44px] mb-[25px] font-GilroyBold leading-[1.2]">
        {title}
      </h2>
    </section>
  );
};

export default Title;
