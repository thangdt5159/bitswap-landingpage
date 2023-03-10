import React, { useState } from "react";
import Title from "./common/Title";
import reward1 from "../../public/images/get-1.jpg";
import reward2 from "../../public/images/get-2.jpg";
import Image from "next/image";
import star from "../../public/images/star.png";

const Reward = () => {
  const rewardData = [
    {
      id: 1,
      image: reward1,
      title: "Launch Your Future with Bitswap's Launchpad",
      des: "With a combination of advanced features and potential projects, Bitswap Launchpad promises to be one of the most trusted and developed DeFi fundraising platforms on the market.",
    },
    {
      id: 2,
      image: reward2,
      title: "Experience the Power of Decentralized Trading with Bitswap DEX",
      des: "With unique features and utilities, Bitswap aspires to become one of the leading decentralized DeFi exchanges in the market.",
    },
  ];

  const [isHover, setIsHover] = useState<boolean>(false);
  const [tab, setTab] = useState<number>();

  return (
    <section className="relative">
      <Image
        src={star}
        alt=""
        className="absolute right-[10%] top-[10%] animate-spin"
      />
      <div className="md:max-w-[1320px] mx-auto pt-[150px] pb-[120px] px-3">
        <Title header="grow and expand" title="Decentralized Revolution" />
        <div className="flex">
          {rewardData.map((item) => (
            <div
              key={item.id}
              className="relative px-3 md:w-1/2 overflow-hidden before:absolute before:bg-bgGradient3 before:w-full before:h-full before:opacity-80"
              onMouseEnter={() => {
                setIsHover(true);
                setTab(item.id);
              }}
              onMouseLeave={() => setIsHover(false)}
            >
              <Image src={item.image} alt="" className="rounded-[45px]" />
              <div
                className={`absolute w-[calc(100%_-_24px)] h-full mx-auto left-0 right-0 rounded-[30px] bg-bgGradient1 from-gradColor1 to-gradColor2 py-[30px] px-[80px] top-0 transition-all duration-500 z-[1] opacity-90 text-center flex items-center justify-center ${
                  isHover && tab === item.id
                    ? "translate-y-0"
                    : "translate-y-[-100%]"
                }`}
              >
                <div>
                  <h3 className="text-[25px] font-GilroyBold mb-[30px]">
                    {item.title}
                  </h3>
                  <p className="text-[#FDFDFD] leading-[32px] capitalize">
                    {item.des}
                  </p>
                </div>
              </div>
              <div
                className={`w-full h-full absolute bottom-0 left-0 right-0 mx-auto p-[30px] text-[25px] text-center font-GilroyBold transition-all duration-500 flex justify-center items-end ${
                  isHover && tab === item.id
                    ? "translate-y-[100%]"
                    : "translate-y-0"
                }`}
              >
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reward;
