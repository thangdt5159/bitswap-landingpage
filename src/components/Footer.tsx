import React from "react";
import { SocialIcon, socials } from "./AboutUs";
import { menuData } from "./Navbar";

const Footer = () => {
  return (
    <section className="bg-[#100a24] relative z-[1]">
      <div className="md:max-w-[1320px] mx-auto py-[60px] md:pt-[150px] md:pb-[120px] relative z-[1] before:w-full before:h-full before:top-0 before:absolute before:bg-bgFooter before:bg-no-repeat before:bg-center before:bg-[length:auto_100%] before:opacity-20 before:z-[-1]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-[40%] px-3">
            <ul className="flex items-center justify-center md:justify-between">
              {menuData.map((item) => (
                <li
                  key={item.id}
                  className="text-[14px] md:text-base font-semibold cursor-pointer mx-3 md:mx-0"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/5 px-3 text-[24px] font-GilroyBold text-center cursor-pointer md:pb-2 leading-none my-[30px] md:my-0">
            Bitswap
          </div>
          <div className="text-[14px] md:text-base md:w-[40%] px-3 flex items-start md:items-center">
            <div className="w-[30%] md:w-auto">Follow Us On:</div>
            <div className="flex flex-wrap items-center justify-center ml-2 md:ml-5">
              {socials.slice(0, 4).map((item) => (
                <>
                  <div
                    key={item.id}
                    onClick={() => window.open(`${item.url}`)}
                    className="w-5 h-5 flex justify-center items-center mr-1 rounded-full mb-2 md:mb-0"
                  >
                    {SocialIcon(item.id)}
                  </div>
                  <p className="text-[14px] text-[#a19bb1] capitalize font-medium mr-2 cursor-pointer mb-2 md:mb-0">
                    {item.title}
                  </p>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
