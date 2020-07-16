import React from "react";
// import sections
import HeroFull from "../components/sections/HeroFull04";
import Table1 from "../components/sections/Table1";
// import for api
import axios from "axios";
class TestingCenter extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    // this.setState({ loading: true });
    axios
      .get(
        `https://iphy6zyd24.execute-api.ap-south-1.amazonaws.com/test1/testingcentres`
      )
      .then(res => {
        const data = res.data;
        this.setState({
          data,
          currentPageNumber: res.currentPageNumber,
          totalItems: res.totalItems,
          itemsPerPage: res.itemsPerPage
        });

        console.log("data");
        console.log(data);
      });
    // this.setState({ loading: false });
  }
  openModal = e => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  };

  closeModal = e => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  };

  render() {
    const rows = this.state.data;
    console.log(rows);
    return (
      <React.Fragment>
        <HeroFull
          hasBgColor
          invertColor
          className="has-bg-color-cut illustration-section-01"
        />
        <div>
          <br />

          <Table1 data={rows}></Table1>
        </div>
      </React.Fragment>
    );
  }
}
const formStyle = {
  maxWidth: "420px",
  margin: "0 auto"
};

export default TestingCenter;
