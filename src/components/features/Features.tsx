import Image from "next/image";
import React from "react";
import Title from "../common/Title";
import FeatureCard from "./FeatureCard";
import blur1 from "../../../public/images/blur-1.png";
import blur2 from "../../../public/images/blur-2.png";

const Features = () => {
  const featureData = [
    {
      id: 1,
      image: "/images/icon-1.png",
      title: "Decentralization",
      des: "Bitswap is built on the Stacks (STX) blockchain, which is a decentralized Layer 2 solution for Bitcoin. This means that trading on Bitswap is decentralized and not reliant on a single central authority, making it more secure and transparent.",
    },
    {
      id: 2,
      image: "/images/icon-2.png",
      title: "High security",
      des: "With the development of blockchain technology, security is the most important factor for a DeFi platform. Bitswap uses the Stacks platform to ensure the safety and security of its users.",
    },
    {
      id: 3,
      image: "/images/icon-3.png",
      title: "Low transaction costs",
      des: "By using Stacks, Bitswap helps to reduce transaction costs and increase availability to users.",
    },
    {
      id: 4,
      image: "/images/icon-4.png",
      title: "Fast transaction speed",
      des: "Due to the use of advanced blockchain technology, Bitswap is able to process transactions quickly and efficiently.",
    },
    {
      id: 5,
      image: "/images/icon-5.png",
      title: "Supports multiple cryptocurrencies",
      des: "Bitswap supports many different cryptocurrencies, giving users more choices in trading and investing.",
    },
    {
      id: 6,
      image: "/images/icon-6.png",
      title: "Launchpad and DEX integrated in the same platform",
      des: "By integrating Launchpad and DEX in the same platform, Bitswap makes it easier for users to make transactions in a more convenient and flexible way.",
    },
  ];

  return (
    <section className="bg-[#1a1135] relative">
      <Image src={blur1} alt="" className="absolute left-0 top-[-2%]" />
      <Image src={blur2} alt="" className="absolute right-0 bottom-[-15%]" />
      <div className="md:py-[100px] md:max-w-[1320px] mx-auto">
        <div className="px-3">
          <Title header="key features" title="Unlock new era" />
          <div className="md:grid grid-cols-3 gap-[24px] px-3">
            {featureData.map((item) => (
              <FeatureCard data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
