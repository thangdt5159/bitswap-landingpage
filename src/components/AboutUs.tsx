import Image from "next/image";
import React from "react";
import boy from "../../public/images/boy.png";

const AboutUs = () => {
  const socials = [
    {
      id: 1,
      icon: "",
      url: "",
    },
    {
      id: 2,
      icon: "",
      url: "",
    },
    {
      id: 3,
      icon: "",
      url: "",
    },
    {
      id: 4,
      icon: "",
      url: "",
    },
    {
      id: 5,
      icon: "",
      url: "",
    },
  ];

  return (
    <section className="bg-[#170f32]">
      <div className="pt-[150px]">
        <div className="md:max-w-[1320px] mx-auto px-3 flex">
          <div className="relative z-[1] md:w-1/2 px-3 before:absolute before:top-0 before:bottom-[60px] before:left-0 before:right-0 before:mx-auto before:w-[500px] before:h-[500px] before:rounded-full before:bg-white/10 before:z-[-1]">
            <Image src={boy} alt="" className="md:max-w-[433px] mx-auto" />
          </div>
          <div className="md:w-1/2 mb-[30px] px-3">
            <div className="mb-[10px]">
              <span className="tracking-[0.1em] font-semibold [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] bg-bgGradient1 from-gradColor1 to-gradColor2">
                ABOUT US
              </span>
            </div>
            <h2 className="text-[44px] mb-[25px] font-GilroyBold leading-[1.2]">
              Muva Will Be The Best Choice For Your Next Project
            </h2>
            <p className="mb-[30px] leading-[32px] text-lightGray">
              A Gamified Marketplace Dedicated To The Metaverse And Gaming
              Assets. The Metaverse Marketplace Allows Users To Trade, Auction,
              And Rent Virtual Ownership Assets From Various Metaverse And
              Gaming Projects Gamified Marketplace Dedicated To The.
            </p>
            <p className="mb-[30px] leading-[32px] text-lightGray">
              A Gamified Marketplace Dedicated To The Metaverse And Gaming
              Assets. The Metaverse Marketplace Allows Users To Trade, Auction,
              And Rent Virtual Ownership.
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
