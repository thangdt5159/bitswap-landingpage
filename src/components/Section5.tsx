import React, { useState } from "react";
import Title from "./common/Title";
import Image from "next/image";
import launchpadImg from "../../public/images/Launchpad-img.jpg";
import metaverse from "../../public/images/metaverse.jpg";
import metaFi from "../../public/images/meta-fi.jpg";

const Section5 = () => {
  const tab = [
    {
      id: 1,
      title: "Launchpad",
    },
    {
      id: 2,
      title: "Dex",
    },
    {
      id: 3,
      title: "NFT Marketplace (Comming soon)",
    },
  ];

  const content = [
    {
      id: 1,
      image: launchpadImg,
      title: "Launchpad",
      des: "Allows new projects to raise capital from the community, while helping investors find potential projects and invest in them safely and conveniently. The platform also provides security and risk control features, which reduce risks for investors and users.",
    },
    {
      id: 2,
      image: metaverse,
      title: "Dex",
      des: "Users can exchange cryptocurrencies quickly, securely, and save on transaction fees. In addition, the exchange also supports trading with automatic swap and margin trading, which enhances liquidity and flexibility for users.",
    },
    {
      id: 3,
      image: metaFi,
      title: "NFT Marketplace",
      des: "Bitswap is planning to build an NFT Marketplace in the near future. This marketplace will allow users to buy, sell and exchange decentralized assets represented by NFTs. These NFTs can be digital works of art, decentralized games, or other digital products.",
    },
  ];

  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <section className="bg-[#1a1135]">
      <div className="pb-[60px] md:pb-[100px] md:max-w-[1320px] mx-auto">
        <div className="px-3">
          <Title title="Your Ultimate DeFi Destination" header="Our Products" />
          <div className="flex flex-wrap md:flex-no justify-center gap-[10px] mb-[30px] md:mb-[50px]">
            {tab.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-[2px] min-w-[150px] md:max-w-[400px] ${
                  activeTab === item.id
                    ? "bg-bgGradient1 from-gradColor1 to-gradColor2"
                    : "bg-[#0F0824]"
                } rounded-[10px] cursor-pointer`}
              >
                <div className="capitalize bg-[#0F0824] h-full flex items-center justify-center text-center p-[10px] md:py-7 md:px-[90px] rounded-[10px] text-[20px] font-medium select-none">
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {content.map((item) => (
            <div
              key={item.id}
              className={`md:max-w-[1140px] mx-auto ${
                activeTab === item.id ? "opacity-100 transition-all duration-500" : "h-0 opacity-0"
              }`}
            >
              <Image
                src={item.image}
                alt=""
                className="mb-[30px] md:mb-[60px] rounded-[18px] md:rounded-[65px]"
              />
              <div className="md:mx-[50px] flex flex-wrap md:flex-nowrap">
                <div className="md:w-[41.5%] px-3 text-[22px] md:text-[32px] font-GilroyBold">
                  {item.title}
                </div>
                <p className="md:w-[58.5%] px-3 text-[15px] md:text-base leading-[28px] md:leading-[32px] text-lightGray">
                  {item.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;
