import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections

// import sections
import AwarenessTag from '../components/sections/AwarenessTag';
import Clients from '../components/sections/Clients';

import GenericSection from '../components/sections/GenericSection';
import Flowchart from '../components/sections/Flowchart';

// import some required elements

import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Cta from '../components/sections/Cta';

//import FeaturesTiles from "../FeaturesTiles";

import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';

import Symptoms from "../components/sections/Symptoms";
import Questions from "../components/sections/Questions";

class Information extends React.Component {

  state = {


  }


  render() {

    const genericSection01Header = {
      title: 'All you need to know about COVID..'
    }


    return (
      <React.Fragment>

      < AwarenessTag hasBgColor invertColor  />



      <GenericSection
      >
          <Questions  />

      </GenericSection>



      <GenericSection hasBgColor invertColor topDivider >



            <Symptoms invertMobile  image />

    
      </GenericSection>





      </React.Fragment>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: '420px',
  margin: '0 auto'
}

export default Information;
