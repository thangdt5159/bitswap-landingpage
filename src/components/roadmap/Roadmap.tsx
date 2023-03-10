import React from "react";
import Title from "../common/Title";
import RoadmapCard from "./RoadmapCard";
import blur1 from "../../../public/images/blur-1.png";
import blur2 from "../../../public/images/blur-2.png";
import Image from "next/image";

const Roadmap = () => {
  const roadmapData = [
    {
      id: 1,
      title: "Phase 1",
      des: [
        {
          id: 1,
          value: "Start the project",
        },
        {
          id: 2,
          value: "Launching a landing page",
        },
        {
          id: 3,
          value: "Launch of pitch deck",
        },
        {
          id: 4,
          value: "Launch of white paper/docs",
        },
        {
          id: 5,
          value: "Launching Bitswap Launchpad with INO, IDO, IFO features",
        },
        {
          id: 6,
          value: "Develop and expand user community",
        },
        {
          id: 7,
          value: "Enhance the security and reliability of the platform",
        },
      ],
    },
    {
      id: 1,
      title: "Phase 2",
      des: [
        {
          id: 1,
          value: "Launching Bitswap DEX",
        },
        {
          id: 2,
          value:
            "Continued feature development and integration of new trading partners",
        },
        {
          id: 3,
          value: "Strengthen risk management and reduce potential risks",
        },
      ],
    },
    {
      id: 3,
      title: "Phase 3",
      des: [
        {
          id: 1,
          value:
            "Accelerating product innovation and expanding Bitswap's reach",
        },
        {
          id: 2,
          value:
            "Strengthen relationships with reputable partners in the market",
        },
        {
          id: 3,
          value:
            "Develop and implement marketing strategies to increase Bitswap's brand awareness",
        },
      ],
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="relative">
      <Image
        src={blur1}
        alt=""
        className="absolute left-0 top-[-15%] opacity-70"
      />
      <Image
        src={blur2}
        alt=""
        className="absolute right-0 bottom-[-50%] opacity-70"
      />
      <div className="py-[100px] px-3 relative z-[1]">
        <div className="mb-[80px]">
          <Title header="road map" title="See Whats Waiting For You" />
        </div>
        <div className="grid grid-cols-3 gap-10 md:max-w-[80%] mx-auto">
          {roadmapData.map((item) => (
            <RoadmapCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
