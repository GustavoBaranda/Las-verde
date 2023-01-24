import React from "react";
import Slider from "./Slider/Slider";
import FirstBannerHome from "./FirstBannerHome";
import SecondBannerHome from "./SecondBannerHome";
import ThirdBannerHome from "./ThirdBannerHome";


const Home = () => {
  return (
    <div className="homeContainer">
      <Slider />
      <FirstBannerHome />
      <SecondBannerHome />
      <ThirdBannerHome />
    </div>
  );
};

export default Home;
