import React from "react";
import HeroFull from "../components/sections/HeroFull";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Pricing from "../components/sections/Pricing";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import Statistics from "../components/sections/Statistics";
import Bargraph from "../components/sections/Bargraph";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroFull hasBgColor invertColor className="illustration-section-01" />

        <FeaturesSplit invertMobile imageFill />
        <Statistics />
      </React.Fragment>
    );
  }
}

export default Home;
