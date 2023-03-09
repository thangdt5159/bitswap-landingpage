import React from "react";

const Header = () => {
  return (
    <section>
      <div className="relative bg-bgHeader bg-no-repeat bg-cover bg-center z-[1] before:bg-bgBlack/50 before:w-full before:h-full before:absolute before:z-[-1]">
        <div className="pt-[300px] pb-[400px]">
          <div className="md:max-w-[1320px] mx-auto px-3">
            <div className="mx-auto text-center">
              <h1 className="text-[82px] text-white font-GilroyBlack mb-5 leading-[105px]">
                Metaverse Ecosystem For Growing New Projects
              </h1>
              <div className="mt-10">
                <button className="mr-5">Open App</button>
                <button className="mr-5">Buy MWP Tokens</button>
                <button className="mr-5">Connect wallet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
