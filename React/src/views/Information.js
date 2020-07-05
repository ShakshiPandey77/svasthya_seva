import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroFull from '../components/sections/HeroFull02';
import Clients from '../components/sections/Clients';
import Team from '../components/sections/Team';

import GenericSection from '../components/sections/GenericSection';
import Roadmap from '../components/sections/Roadmap';
import Cta from '../components/sections/Cta';
import Steps from '../components/sections/Steps';
//import Roadmap1 from '../components/sections/Roadmap1';

// import some required elements
import Image from '../components/elements/Image';
import Input from '../components/elements/Input';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Modal from '../components/elements/Modal';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';



class Information extends React.Component {

  state = {
    demoModalActive: false
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  }

  render() {



    return (
      <React.Fragment>

      <Steps hasBgColor invertColor />
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
