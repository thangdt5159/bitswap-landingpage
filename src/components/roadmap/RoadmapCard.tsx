import React from "react";

const RoadmapCard = ({ data }: any) => {
  return (
    <section>
      <div className="p-10 bg-white/20 rounded-[30px]">
        <div className="font-GilroyBold text-[24px] bg-bgGradient1 from-gradColor1 to-gradColor2 w-fit px-6 py-[40px] leading-none rounded-[30px] mb-10">
          {data.title}
        </div>
        <ul className="list-disc pl-8">
          {data.des.map((subData: any) => (
            <li
              key={subData.id}
              className="mb-[15px] text-lightGray marker:text-[24px] marker:leading-[20px]"
            >
              {subData.value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RoadmapCard;
