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
    title: "youtube",
    url: "",
  },
  {
    id: 4,
    icon: "",
    title: "linkedIn",
    url: "",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-[#170f32]">
      <div className="pt-[150px]">
        <div className="md:max-w-[1320px] mx-auto px-3 flex flex-wrap md:flex-nowrap mb-[30px] md:mb-0">
          <div className="relative z-[1] mb-[30px] md:mb-0 md:w-1/2 px-3 before:absolute before:top-0 before:bottom-[60px] before:left-0 before:right-0 before:mx-auto md:before:w-[500px] md:before:h-[500px] before:rounded-full before:bg-white/10 before:z-[-1]">
            <Image src={boy} alt="" className="md:max-w-[433px] mx-auto" />
          </div>
          <div className="md:w-1/2 mb-[10px] px-3">
            <div className="mb-[10px]">
              <span className="uppercase text-[13px] tracking-[0.1em] font-semibold [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] bg-bgGradient1 from-gradColor1 to-gradColor2">
                What Bitswap
              </span>
            </div>
            <h2 className="text-[30px] md:text-[40px] mb-[25px] font-GilroyBold leading-[1.2]">
              Join Bitswap today and experience a new DeFi revolution
            </h2>
            <p className="mb-[30px] text-[15px] leading-[28px] md:leading-[32px] text-lightGray">
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
                  {SocialIcon(item.id)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SocialIcon = (iconId: any) => {
  switch (iconId) {
    case 1:
      return <i className="fa-brands fa-facebook-f text-fb"></i>;
    case 2:
      return <i className="fa-brands fa-twitter text-tw"></i>;
    case 3:
      return <i className="fa-brands fa-youtube text-yt"></i>;
    case 4:
      return <i className="fa-brands fa-linkedin-in text-fb"></i>;
    default:
      break;
  }
};

export default AboutUs;
