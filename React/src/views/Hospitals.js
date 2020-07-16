import React from "react";

// import sections
import HeroFull from "../components/sections/HeroFull03";
import HospitalTable from "../components/sections/temp";
import axios from "axios";

const haversine = require("haversine");
// import HospitalTable from "../components/sections/HospitalTable";
class Hospitals extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      latitude: 0.0,
      longitude: 0.0,
    };
  }

  componentDidMount() {
    // this.setState({ loading: true });

    navigator.geolocation.getCurrentPosition((position) => {
      var latlon = String(
        position.coords.latitude + "," + position.coords.longitude
      );
      // console.log("latlon", latlon);
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      console.log(lat, "lat");
      console.log(lon, "lon");

      this.setState({
        latitude: lat,
        longitude: lon,
      });

      // console.log(this.state.latitude);
      // console.log(this.state.longitude);
      // this.state.latitude = position.coords.latitude;
      // this.state.longitude = position.coords.longitude;

      console.log("Latitude is :", latlon.split(",")[0]);
      console.log("Longitude is :", latlon.split(",")[1]);
    });

    console.log(this.state.latitude);

    axios
      .get(
        `https://iphy6zyd24.execute-api.ap-south-1.amazonaws.com/test1/hospital`
      )
      .then((res) => {
        let data = res.data;
        for (var i = 0; i < data.length; i++) {
          data[i]["distance"] =
            Math.round(
              haversine(
                {
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                },
                {
                  latitude: Number(data[i].latitude),
                  longitude: Number(data[i].longitude),
                }
              ) * 100
            ) / 100;
        }
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
    console.log("rows");
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
