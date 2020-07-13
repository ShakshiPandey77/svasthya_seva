import React from "react";

// import sections
import HeroFull from "../components/sections/HeroFull03";
import HospitalTable from "../components/sections/HospitalTable";

class Hospitals extends React.Component {
  state = {
    demoModalActive: false,
  };

  openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  };

  closeModal = (e) => {
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
      title: "Buttons - Lorem ipsum is placeholder text commonly used.",
    };

    const genericSection02Header = {
      title: "Input forms - Lorem ipsum is placeholder text commonly used.",
    };

    const genericSection03Header = {
      title: "Modal - Lorem ipsum is placeholder text commonly used.",
    };

    const genericSection04Header = {
      title: "FAQ - Lorem ipsum is placeholder text commonly used.",
    };

    return (
      <React.Fragment>
        {
          <HeroFull
            hasBgColor
            invertColor
            className="has-bg-color-cut illustration-section-01"
          />
        }
        <div>
          <br />
          <br />
          <br />
          <br />
          <HospitalTable />
        </div>
      </React.Fragment>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: "420px",
  margin: "0 auto",
};

export default Hospitals;
