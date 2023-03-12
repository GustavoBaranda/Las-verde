import React from "react";
import History from "./History";
import MissionAndVision from "./MissionAndVision";
import ProductiveProcess from "./ProductiveProcess";

const About = () => {
  return (
    <div className="aboutContainer">
      <History />
      <MissionAndVision />
      <ProductiveProcess />
    </div>
  );
};

export default About;