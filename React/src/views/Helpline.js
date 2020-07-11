import React from "react";
import HeroFull from "../components/sections/HeroFull05";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Pricing from "../components/sections/Pricing";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import Help from "../components/sections/HelplineInformation";
import Bargraph from "../components/sections/Bargraph";

class Helpline extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroFull
          hasBgColor
          invertColor
          className="has-bg-color-cut illustration-section-01"
        />
        <Help/>
      </React.Fragment>
    );
  }
}

export default Helpline;
