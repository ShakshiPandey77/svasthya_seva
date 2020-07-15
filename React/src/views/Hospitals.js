import React from "react";

// import sections
import HeroFull from "../components/sections/HeroFull03";
import HospitalTable from "../components/sections/temp";
import axios from "axios";
// import HospitalTable from "../components/sections/HospitalTable";
class Hospitals extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // this.setState({ loading: true });
    axios
      .get(
        `https://iphy6zyd24.execute-api.ap-south-1.amazonaws.com/test1/hospital`
      )
      .then((res) => {
        const data = res.data;
        this.setState({
          data,
          currentPageNumber: res.currentPageNumber,
          totalItems: res.totalItems,
          itemsPerPage: res.itemsPerPage,
        });

        console.log("data");
        console.log(data);
      });
    // this.setState({ loading: false });
  }

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
    const rows = this.state.data;
    console.log(rows);
    return (
      <React.Fragment>
        {
          <HeroFull
            hasBgColor
            invertColor
            className="has-bg-color-cut  illustration-section-01"
          />
        }
        <div>
          <br />

          <HospitalTable data={rows} />
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
