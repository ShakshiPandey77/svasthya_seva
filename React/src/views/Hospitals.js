import React from "react";
// import section header
import SectionHeader from "../components/sections/partials/SectionHeader";
// import sections
import HeroFull from "../components/sections/HeroFull03";
import SimpleTable from "../components/elements/Table2";
import Clients from "../components/sections/Clients";
import Team from "../components/sections/Team";
import GenericSection from "../components/sections/GenericSection";
import Roadmap from "../components/sections/Roadmap";
import Cta from "../components/sections/Cta";
// import some required elements
import Image from "../components/elements/Image";
import Input from "../components/elements/Input";
import ButtonGroup from "../components/elements/ButtonGroup";
import Button from "../components/elements/Button";
import Modal from "../components/elements/Modal";
import Accordion from "../components/elements/Accordion";
import AccordionItem from "../components/elements/AccordionItem";
import M, { checkPossibleAlignments } from "materialize-css";

class Hospitals extends React.Component {
  state = {
    demoModalActive: false
  };

  openModal = e => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  };

  closeModal = e => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  };

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  //   });
  // }

  render() {
    const genericSection01Header = {
      title: "Buttons - Lorem ipsum is placeholder text commonly used."
    };

    const genericSection02Header = {
      title: "Input forms - Lorem ipsum is placeholder text commonly used."
    };

    const genericSection03Header = {
      title: "Modal - Lorem ipsum is placeholder text commonly used."
    };

    const genericSection04Header = {
      title: "FAQ - Lorem ipsum is placeholder text commonly used."
    };

    return (
      <React.Fragment>
        {
          <HeroFull
            hasBgColor
            invertColor
            className="has-bg-color-cut illustration-section-01"
          />
          /*<br />
        <br />
        <br />
        {/* <br />
        <br /> */
        }
        <div>
          {/* <center>
            <h1>COVID-19 HOSPITALS</h1>
          </center> */}

          <br />
          <br />

          {/* <select value="Filters" style={{ float: "right", marginRight: 50 }}>
            <option>nearby</option>
            <option>price</option>
            <option>ventilators</option>
          </select> */}

          <br />
          <br />
          <SimpleTable
            hasBgColor
            invertColor
            className="illustration-section-01"
          />
        </div>
      </React.Fragment>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: "420px",
  margin: "0 auto"
};

export default Hospitals;
