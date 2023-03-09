import React from "react";
import Slider from "react-slick";
import Title from "./common/Title";

const Roadmap = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <section>
      <div className="py-[100px] px-3">
        <div className="mb-[80px]">
          <Title header="road map" title="See Whats Waiting For You" />
        </div>
        <Slider {...settings} className="text-center">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </Slider>
      </div>
    </section>
  );
};

export default Roadmap;
