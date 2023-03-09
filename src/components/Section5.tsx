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
      title: "Metaverse Marketplace",
    },
    {
      id: 3,
      title: "MetaFi DeFi Vault",
    },
  ];

  const content = [
    {
      id: 1,
      image: launchpadImg,
      title: "Launchpad",
    },
    {
      id: 2,
      image: metaverse,
      title: "Metaverse Marketplace",
    },
    {
      id: 3,
      image: metaFi,
      title: "MetaFi DeFi Vault",
    },
  ];

  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <section className="bg-[#1a1135]">
      <div className="md:pb-[100px] md:max-w-[1320px] mx-auto">
        <div className="px-3">
          <Title title="The Ignition Of Metaverse" header="HOW IT WORKS" />
          <div className="flex justify-center gap-[10px] mb-[50px]">
            {tab.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-[2px] ${
                  activeTab === item.id
                    ? "bg-bgGradient1 from-gradColor1 to-gradColor2"
                    : "bg-[#0F0824]"
                } rounded-[10px] cursor-pointer`}
              >
                <div className="bg-[#0F0824] py-7 px-[90px] rounded-[10px] text-[20px] font-medium select-none">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

          {content.map((item) => (
            <div
              key={item.id}
              className={`md:max-w-[1140px] mx-auto transition-all duration-500 ${
                activeTab === item.id ? "opacity-100" : "h-0 opacity-0"
              }`}
            >
              <Image
                src={item.image}
                alt=""
                className="mb-[60px] rounded-[65px]"
              />
              <div className="mx-[50px] flex">
                <div className="md:w-[41.5%] px-3 text-[32px] font-GilroyBold">
                  {item.title}
                </div>
                <p className="md:w-[58.5%] px-3 leading-[32px] text-lightGray">
                  A Gamified Marketplace Dedicated To The Metaverse And Gaming
                  Assets. The Metaverse Marketplace Allows Users To Trade,
                  Auction, And Rent Virtual Ownership Assets From Various
                  Metaverse And Gaming Projects. The Metaverse Is The Next
                  Generation Of The Internet.
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
