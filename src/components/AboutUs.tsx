import Image from "next/image";
import React from "react";
import boy from "../../public/images/boy.png";

export const socials = [
  {
    id: 1,
    icon: "",
    title: "facebook",
    url: "",
  },
  {
    id: 2,
    icon: "",
    title: "twitter",
    url: "",
  },
  {
    id: 3,
    icon: "",
    title: "telegram",
    url: "",
  },
  {
    id: 4,
    icon: "",
    title: "discord",
    url: "",
  },
  {
    id: 5,
    icon: "",
    title: "",
    url: "",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-[#170f32]">
      <div className="pt-[150px]">
        <div className="md:max-w-[1320px] mx-auto px-3 flex">
          <div className="relative z-[1] md:w-1/2 px-3 before:absolute before:top-0 before:bottom-[60px] before:left-0 before:right-0 before:mx-auto before:w-[500px] before:h-[500px] before:rounded-full before:bg-white/10 before:z-[-1]">
            <Image src={boy} alt="" className="md:max-w-[433px] mx-auto" />
          </div>
          <div className="md:w-1/2 mb-[10px] px-3">
            <div className="mb-[10px]">
              <span className="uppercase tracking-[0.1em] font-semibold [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] bg-bgGradient1 from-gradColor1 to-gradColor2">
                What Bitswap
              </span>
            </div>
            <h2 className="text-[40px] mb-[25px] font-GilroyBold leading-[1.2]">
              Join Bitswap today and experience a new DeFi revolution
            </h2>
            <p className="mb-[30px] text-[15px] leading-[32px] text-lightGray">
              Bitswap is the latest decentralized DeFi project being built on
              the Bitcoin Stacks Layer 2 blockchain. Bitswap will provide users
              with a decentralized exchange and a launch platform to support new
              DeFi and NFT projects.
            </p>
            <p className="mb-[30px] text-[15px] leading-[32px] text-lightGray">
              With programmability for Bitcoin, Bitswap is building a fully
              featured, safe and secure decentralized DeFi ecosystem. Bitswap
              will help users experience fast, low-cost, and more liquid
              transactions, and provide developers with a flexible development
              platform to build new applications on top of its Layer 2
              blockchain Bitcoin.
            </p>
            <div className="flex items-center">
              {socials.map((item) => (
                <div
                  key={item.id}
                  onClick={() => window.open(`${item.url}`)}
                  className="w-10 h-10 bg-white flex justify-center items-center mr-[10px] rounded-full"
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
