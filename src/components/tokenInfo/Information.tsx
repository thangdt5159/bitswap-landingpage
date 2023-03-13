import React from "react";

const Information = ({ data }: any) => {
  return (
    <section className="bg-white/20 rounded-[10px] p-[15px] cursor-pointer flex flex-wrap md:flex-nowrap justify-between md:ml-[25px] mb-[10px] leading-[28px] md:leading-[32px]">
      <div>
        <h4 className="text-[20px] mb-[1px]">
          {data.stats}{" "}
          <sub
            className={`${
              data.id === 1
                ? "text-[#fdce39]"
                : data.id === 2
                ? "text-[#ED5174]"
                : data.id === 3
                ? "text-[#FD8963]"
                : data.id === 4
                ? "text-[#FA26CA]"
                : data.id === 5
                ? "text-[#32DC95]"
                : "text-[#A475FF]"
            }`}
          >
            {data.title}
          </sub>
        </h4>
        <p className="text-lightGray text-[14px]">{data.des}</p>
      </div>
      <div className="mt-[10px] md:mt-0">
        <p className="text-[20px]">{data.amount}</p>
        <p className="text-[14px] text-lightGray text-start md:text-end">
          Tokens
        </p>
      </div>
    </section>
  );
};

export default Information;
