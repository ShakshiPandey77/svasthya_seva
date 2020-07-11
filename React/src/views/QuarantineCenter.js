import React from "react";
import HeroFull from "../components/sections/HeroFull02";
import Table from "../components/sections/Table";



class QuarantineCenter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroFull
          hasBgColor
          invertColor
          className="has-bg-color-cut illustration-section-01"
        />
        <Table hasBgColor invertColor></Table>
      </React.Fragment>
    );
  }
}
export default QuarantineCenter;
