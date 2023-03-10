import React from "react";
import { socials } from "./AboutUs";
import { menuData } from "./Navbar";

const Footer = () => {
  return (
    <section className="bg-[#100a24]">
      <div className="md:max-w-[1320px] mx-auto md:pt-[150px] md:pb-[120px] relative z-[1] before:w-full before:h-full before:top-0 before:absolute before:bg-bgFooter before:bg-no-repeat before:bg-center before:bg-[length:auto_100%] before:opacity-20 before:z-[-1]">
        <div className="flex justify-between items-center">
          <div className="md:w-[40%] px-3">
            <ul className="flex items-center justify-between">
              {menuData.map((item) => (
                <li key={item.id} className="font-semibold cursor-pointer">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/5 px-3 text-[24px] font-GilroyBold text-center cursor-pointer pb-2 leading-none">
            Bitswap
          </div>
          <div className="md:w-[40%] px-3 flex items-center">
            Follow Us On:
            <div className="flex items-center ml-5">
              {socials.slice(0, 4).map((item) => (
                <>
                  <div
                    key={item.id}
                    onClick={() => window.open(`${item.url}`)}
                    className="w-5 h-5 bg-white mr-1 rounded-full"
                  >
                    {item.icon}
                  </div>
                  <p className="text-[14px] capitalize mr-2 cursor-pointer">
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
