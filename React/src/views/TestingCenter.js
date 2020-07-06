import React from "react";
// import section header
import SectionHeader from "../components/sections/partials/SectionHeader";
// import sections
import HeroFull from "../components/sections/HeroFull04";
import Clients from "../components/sections/Clients";
import Team from "../components/sections/Team";
import GenericSection from "../components/sections/GenericSection";
import Roadmap from "../components/sections/Roadmap";
import Cta from "../components/sections/Cta";
import Table1 from "../components/sections/Table1";
// import some required elements
import Image from "../components/elements/Image";
import Input from "../components/elements/Input";
import ButtonGroup from "../components/elements/ButtonGroup";
import Button from "../components/elements/Button";
import Modal from "../components/elements/Modal";
import Accordion from "../components/elements/Accordion";
import AccordionItem from "../components/elements/AccordionItem";
class TestingCenter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroFull
          hasBgColor
          invertColor
          className="has-bg-color-cut illustration-section-01"
        />
        <Table1 hasBgColor invertColor></Table1>
      </React.Fragment>
    );
  }
}
export default TestingCenter;
