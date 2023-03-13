import React from "react";

const Header = () => {
  const buttons = [
    {
      id: 1,
      title: "Dex",
    },
    {
      id: 2,
      title: "Launchpad",
    },
    {
      id: 3,
      title: "Connect Wallet",
    },
  ];

  return (
    <section className="pt-[60px] md:pt-[104px]">
      <div className="relative bg-bgHeader bg-no-repeat bg-[length:auto_100%] md:bg-cover bg-center z-[1] before:bg-bgBlack/50 before:w-full before:h-full before:absolute before:z-[-1]">
        <div className="md:pt-[300px] md:pb-[400px] pt-[60px] pb-10 md:py-0">
          <div className="md:max-w-[1320px] mx-auto px-3">
            <div className="mx-auto text-center">
              <h1 className="text-[30px] md:text-[82px] text-white font-GilroyBold md:font-GilroyBlack mb-5 md:leading-[105px]">
                Swap with Speed, Security, and Bitcoin`&apos;`s Power
              </h1>
              <div className="mt-10">
                {buttons.map((item) => (
                  <button
                    key={item.id}
                    className="mr-5 text-[14px] py-[9px] px-[15px] md:py-[18px] md:px-[30px] mb-5 md:text-base min-w-[150px] relative z-[1] before:absolute before:w-full before:h-full before:bg-bgGradient2 before:from-gradColorPink before:to-gradColorBlue before:z-[-1] before:top-0 before:left-0 before:rounded-[6px] before:scale-x-0 before:transition-all before:duration-500 hover:before:scale-x-100"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
