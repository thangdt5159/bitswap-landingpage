import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const menuData = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Features",
    },
    {
      id: 3,
      title: "Pages",
    },
    {
      id: 4,
      title: "Projects",
    },
    {
      id: 5,
      title: "Shop",
    },
    {
      id: 6,
      title: "Contact",
    },
  ];

  const navbarRef = useRef<any>(null);
  const [isActive, setIsActive] = useState<number>(1);

  useEffect(() => {
    const navbarScrollHeight = navbarRef.current.scrollHeight;
    if (navbarScrollHeight > 104) {
      navbarRef.current.style.display = "sticky";
    }
  }, []);

  return (
    <section className="bg-bgBlack" ref={navbarRef}>
      <div className="md:max-w-[1780px] mx-auto md:px-[30px] text-white flex items-center">
        <h2 className="py-[5px] mr-4 text-[32px] font-GilroyBold leading-[1.2]">
          Bitswap
        </h2>
        <ul className="flex items-center mx-auto">
          {menuData.map((item) => (
            <li
              key={item.id}
              title={item.title}
              className={`mr-5 my-10 bg-gradient-to-r from-gradColorPink to-gradColorBlue bg-left-bottom bg-no-repeat transition-all duration-500 ${
                isActive === item.id
                  ? "bg-[length:95%_2px]"
                  : "bg-[length:0_2px]"
              } cursor-pointer hover:bg-gradient-to-r hover:from-gradColorPink hover:to-gradColorBlue hover:bg-left-bottom hover:bg-no-repeat hover:bg-[length:95%_2px] hover:transition-all hover:duration-500 ${
                item.id !== 6 &&
                "after:content-['>'] after:px-2 after:rotate-90 after:inline-block"
              }`}
              onClick={() => setIsActive(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className="bg-bgGradient2 from-gradColorPink to-gradColorBlue py-[18px] px-[30px] font-bold leading-[18px] rounded-[6px]">
          Apply For IDO
        </div>
      </div>
    </section>
  );
};

export default Navbar;
