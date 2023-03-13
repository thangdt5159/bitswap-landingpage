import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../public/images/logo.png";

export const menuData = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Dex",
  },
  {
    id: 3,
    title: "Launchpad",
  },
  {
    id: 4,
    title: "Docs",
  },
  {
    id: 5,
    title: "Contact",
  },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState<number>(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 99) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="bg-bgBlack w-full z-[11] absolute">
        <div className="md:max-w-[1780px] mx-auto py-[10px] px-3 md:py-0 md:px-[30px] text-white flex items-center justify-between">
          <Image
            src={logo}
            alt=""
            className="w-auto h-10 md:h-[60px] cursor-pointer"
          />
          <ul className="hidden md:flex items-center mx-auto">
            {menuData.map((item) => (
              <li
                key={item.id}
                className={`mx-10 my-10 relative cursor-pointer before:absolute before:w-0 before:h-[2px] before:bg-bgGradient1 before:from-gradColor1 before:to-gradColor2 before:right-0 before:bottom-[-3px] before:transition-all before:duration-500 hover:before:w-full hover:before:right-auto hover:before:left-0 ${
                  isActive === item.id && "before:w-full"
                }`}
                // "after:content-['>'] after:px-2 after:rotate-90 after:inline-block"
                onClick={() => setIsActive(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="hidden md:block relative z-[1] bg-bgGradient2 from-gradColorPink to-gradColorBlue py-[18px] px-[30px] font-bold leading-[18px] rounded-[6px] cursor-pointer before:absolute before:w-full before:h-full before:bg-bgGradient1 before:from-gradColor1 before:to-gradColor2 before:left-0 before:top-0 before:rounded-[6px] before:z-[-1] before:transition-all before:duration-500 before:scale-x-0 hover:before:scale-x-100">
            Apply For IDO
          </div>

          {/* Mobile Menu */}
          <div
            className="md:hidden w-9 h-8 flex flex-col justify-center gap-1 relative z-[1000]"
            onClick={() => setIsToggle(!isToggle)}
          >
            {!isToggle ? (
              <>
                <span className="w-full h-1 rounded-[3px] bg-white"></span>
                <span className="w-full h-1 rounded-[3px] bg-white"></span>
                <span className="w-full h-1 rounded-[3px] bg-white"></span>
              </>
            ) : (
              <span className="text-center font-bold text-[18px]">X</span>
            )}
          </div>
        </div>
        <div
          className={`fixed bg-white w-[95%] mx-auto left-0 right-0 transition-all duration-500 overflow-hidden rounded-b-[4px] ${
            isToggle && !isVisible ? "h-[285px]" : "h-0"
          }`}
        >
          <ul className="text-black">
            {menuData.map((item) => (
              <li
                key={item.id}
                className={`font-medium text-center border-t border-[#DBEEFD] py-4 px-5 ${
                  isActive === item.id && "text-gradColorBlue"
                }`}
                onClick={() => setIsActive(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <nav
        className={`bg-bgBlack w-full fixed z-10 ${
          isVisible
            ? "transition-all duration-500 translate-y-0 opacity-100"
            : "-translate-y-[104px] opacity-0"
        }`}
      >
        <div className="md:max-w-[1780px] mx-auto py-[10px] px-3 md:py-0 md:px-[30px] text-white flex items-center justify-between">
          <Image
            src={logo}
            alt=""
            className="w-auto h-10 md:h-[60px] cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <ul className="hidden md:flex items-center mx-auto">
            {menuData.map((item) => (
              <li
                key={item.id}
                className={`mx-10 my-10 relative cursor-pointer before:absolute before:w-0 before:h-[2px] before:bg-bgGradient1 before:from-gradColor1 before:to-gradColor2 before:right-0 before:bottom-[-3px] before:transition-all before:duration-500 hover:before:w-full hover:before:right-auto hover:before:left-0 ${
                  isActive === item.id && "before:w-full"
                }`}
                // "after:content-['>'] after:px-2 after:rotate-90 after:inline-block"
                onClick={() => setIsActive(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="hidden md:block relative z-[1] bg-bgGradient2 from-gradColorPink to-gradColorBlue py-[18px] px-[30px] font-bold leading-[18px] rounded-[6px] cursor-pointer before:absolute before:w-full before:h-full before:bg-bgGradient1 before:from-gradColor1 before:to-gradColor2 before:left-0 before:top-0 before:rounded-[6px] before:z-[-1] before:transition-all before:duration-500 before:scale-x-0 hover:before:scale-x-100">
            Apply For IDO
          </div>
          <div
            className="md:hidden w-9 h-8 flex flex-col justify-center gap-1"
            onClick={() => setIsToggle(!isToggle)}
          >
            {!isToggle ? (
              <>
                <span className="w-full h-1 rounded-[3px] bg-white"></span>
                <span className="w-full h-1 rounded-[3px] bg-white"></span>
                <span className="w-full h-1 rounded-[3px] bg-white"></span>
              </>
            ) : (
              <span className="text-center font-bold text-[18px]">X</span>
            )}
          </div>
        </div>

        <div
          className={`bg-white fixed w-[95%] mx-auto left-0 right-0 transition-all duration-500 overflow-hidden rounded-b-[4px] ${
            isToggle ? "h-[285px]" : "h-0"
          }`}
        >
          <ul className="text-black">
            {menuData.map((item) => (
              <li
                key={item.id}
                className={`font-medium text-center border-t border-[#DBEEFD] py-4 px-5 ${
                  isActive === item.id && "text-gradColorBlue"
                }`}
                onClick={() => setIsActive(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* To top page */}
      <div
        className={`to-top-icon w-10 h-[42px] bg-gradColorBlue fixed z-[1000] right-[3%] bottom-[10%] flex justify-center items-center rounded-[5px] cursor-pointer ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fa-solid fa-caret-up absolute translate-y-0 transition-all duration-300"></i>
        <i className="fa-solid fa-caret-up absolute translate-y-[10px] opacity-0 transition-all duration-300"></i>
      </div>
    </>
  );
};

export default Navbar;
