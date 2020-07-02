import React from 'react';
import HeroFull from '../components/sections/HeroFull';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Pricing from '../components/sections/Pricing';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroFull hasBgColor invertColor className="illustration-section-01" />
        <FeaturesTiles />
        <FeaturesSplit invertMobile topDivider imageFill />
        <Pricing hasBgColor invertColor pricingSwitcher />
        <Testimonial />
        <Cta hasBgColor invertColor split className="has-bg-color-cut" />
      </React.Fragment>
    );
  }
}

export default Home;