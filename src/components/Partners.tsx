import React from "react";
import Slider from "react-slick";

const Partners = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <section className="bg-[#140c2d73]">
      <div className="md:max-w-[1320px] mx-auto px-3 mt-[-100px]">
        <div className="bg-bgGradient1 from-gradColor1 to-gradColor2 py-[80px] px-[100px] rounded-[10px] relative z-[1]">
          <div className="h-[30px] w-full bg-gradColorPink overflow-hidden">
            <Slider {...settings} className="text-center">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
