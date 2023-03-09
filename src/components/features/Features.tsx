import React from "react";
import Title from "../common/Title";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const featureData = [
    {
      id: 1,
      image: "/images/icon-1.png",
      title: "Fueling The Metaverse",
      des: "The Metaverse Is The Next Generation Of The Internet. As One Of Its Earliest Explorers, You Will Help Fuel Its",
    },
    {
      id: 2,
      image: "/images/icon-2.png",
      title: "Interconnected Economies",
      des: "The Metaverse Is The Next Generation Of The Internet. As One Of Its Earliest Explorers, You Will Help Fuel Its",
    },
    {
      id: 3,
      image: "/images/icon-3.png",
      title: "Non-fungible assets",
      des: "The Metaverse Is The Next Generation Of The Internet. As One Of Its Earliest Explorers, You Will Help Fuel Its",
    },
    {
      id: 4,
      image: "/images/icon-4.png",
      title: "Incubation",
      des: "The Metaverse Is The Next Generation Of The Internet. As One Of Its Earliest Explorers, You Will Help Fuel Its",
    },
    {
      id: 5,
      image: "/images/icon-5.png",
      title: "Initial Metaverse Offering",
      des: "The Metaverse Is The Next Generation Of The Internet. As One Of Its Earliest Explorers, You Will Help Fuel Its",
    },
    {
      id: 6,
      image: "/images/icon-6.png",
      title: "Next Tier Metaverse Projects",
      des: "The Metaverse Is The Next Generation Of The Internet. As One Of Its Earliest Explorers, You Will Help Fuel Its",
    },
  ];

  return (
    <section className="bg-[#1a1135]">
      <div className="md:py-[100px] md:max-w-[1320px] mx-auto">
        <div className="px-3">
          <Title header="key features" title="Access The Future" />
          <div className="md:grid grid-cols-3 gap-[24px] px-3">
            {featureData.map((item) => (
              <FeatureCard data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
