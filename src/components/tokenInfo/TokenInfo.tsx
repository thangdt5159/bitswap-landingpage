import Image from "next/image";
import React from "react";
import Title from "../common/Title";
import tokenImg from "../../../public/images/token-img.png";
import Information from "./Information";
import blur1 from "../../../public/images/blur-1.png";
import blur2 from "../../../public/images/blur-2.png";

const TokenInfo = () => {
  const info = [
    {
      id: 1,
      title: "Team",
      stats: "15%",
      amount: "15,000,000,000",
      des: "0% TGE 5% unlocked each month after",
    },
    {
      id: 2,
      title: "Strategic Partners & Advisors",
      stats: "12%",
      amount: "21,500,000,000",
      des: "0% TGE 5% unlocked each month after",
    },
    {
      id: 3,
      title: "Exchange Listing & Liquidify",
      stats: "21.5%",
      amount: "12,000,000,000",
      des: "20% TGE 10% unlocked each month after",
    },
    {
      id: 4,
      title: "Staking, In-game Rewards & Development",
      stats: "24.5%",
      amount: "24,500,000,000",
      des: "20% TGE 10% unlocked each month after",
    },
    {
      id: 5,
      title: "Company Reserves",
      stats: "16%",
      amount: "500,000,000",
      des: "10% TGE 5% unlocked each month after",
    },
    {
      id: 6,
      title: "Marketing",
      stats: "11%",
      amount: "3,000,000,000",
      des: "10% TGE 5% unlocked each month after",
    },
  ];

  return (
    <section className="bg-[#140c2d73] relative">
      <Image src={blur1} alt="" className="hidden md:block absolute left-0 top-[-6%] " />
      <Image src={blur2} alt="" className="hidden md:block absolute right-0 bottom-[-35%]" />
      <div className="md:max-w-[1320px] mx-auto py-[60px] md:py-[100px]">
        <Title header="token info" title="Tokenomic" />
        <div className="flex flex-wrap md:flex-nowrap items-center">
          <div className="md:w-1/2 px-3 relative z-[1]">
            <div className="bg-white/20 rounded-[30px] p-5 md:p-[30px] mb-[30px] md:mb-0">
              <Image src={tokenImg} alt="" className="mx-auto" />
            </div>
          </div>
          <div className="md:w-1/2 px-3 md:px-3 relative z-[1]">
            {info.map((item) => (
              <Information key={item.id} data={item} />
            ))}
          </div>
        </div>
        <p className="mt-10 text-center md:max-w-[700px] mx-auto text-lightGray leading-[28px] md:leading-[32px] px-3">
          Bitswap tokens can be used to perform different functions online,
          including staking, transaction fees, administrative voting and access
          to transactions or services.
        </p>
      </div>
    </section>
  );
};

export default TokenInfo;
