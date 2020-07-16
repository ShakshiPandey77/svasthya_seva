import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Button from "../elements/Button";
// import "../../../node_modules/bootstrap/dist/css/";
import axios from "axios";
// import Card from "../../../node_modules/bootstrap/scss";

import Switch from "../elements/Switch";
// import Button from "../elements/Button";

class Statistics extends React.Component {
  constructor() {
    super();
    this.state = {
      India: [],
      Karnataka: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        `https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true`
      )
      .then((res) => {
        const India = res.data;
        this.setState({ India });
        const Karnataka = India.regionData[15];
        console.log(Karnataka);
        this.setState({ Karnataka });
      });
    this.setState({ loading: false });
  }

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "pricing ",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const sectionHeader = {
      title: "COVID-19 Cases India",
      paragraph: "",
    };

    const sectionHeader1 = {
      title: "COVID-19 Cases Karnataka",
      paragraph: "",
    };

    const innerClasses = classNames(
      // "section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");
    // const Card = prop;
    return (
      <section
        {...props}
        className={outerClasses}
        // style={{ display: "flex", justifyContent: "center" }}
      >
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="stats-item reveal-from-bottom m-12"
              data-reveal-container=".tiles-wrap"
            >
              <div className="tiles-item-inner has-shadow rounded ">
                <div className="pricing-item-content ">
                  <div className="pricing-item-header pb-16 mb-24 ">
                    <div className="pricing-item-price ">
                      <span className="pricing-item-price-currency fs-15 fw-700 confirmed-color ">
                        <center>Confirmed</center>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-item-features mb-40">
                    <div className="pricing-item-features-title fw-500 text-xs confirmed-color mb-24">
                      <center>{this.state.India.totalCases}</center>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="stats-item reveal-from-bottom  m-12"
              data-reveal-container=".tiles-wrap"
            >
              <div className="tiles-item-inner has-shadow rounded ">
                {" "}
                <div className="pricing-item-content">
                  <div className="pricing-item-header pb-16 mb-24">
                    <div className="pricing-item-price">
                      <span className="pricing-item-price-currency active-color fs-15 fw-700">
                        <center>Active </center>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-item-features mb-40">
                    <div className="pricing-item-features-title fw-500 text-xs active-color mb-24">
                      <center>{this.state.India.activeCases}</center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="stats-item reveal-from-bottom m-12"
              data-reveal-container=".tiles-wrap"
            >
              <div className="tiles-item-inner has-shadow rounded ">
                {" "}
                <div className="pricing-item-content">
                  <div className="pricing-item-header pb-16 mb-24">
                    <div className="pricing-item-price">
                      <span className="pricing-item-price-currency recovered-color fs-15 fw-700">
                        <center>Recovered</center>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-item-features mb-40">
                    <div className="pricing-item-features-title fw-500 text-xs recovered-color mb-24">
                      <center>{this.state.India.recovered}</center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="stats-item reveal-from-bottom invert color m-12"
              data-reveal-container=".tiles-wrap"
            >
              <div className="tiles-item-inner has-shadow rounded ">
                {" "}
                <div className="pricing-item-content">
                  <div className="pricing-item-header pb-16 mb-24">
                    <div className="pricing-item-price">
                      <span className="pricing-item-price-currency death-color fs-15 fw-700">
                        <center>Deaths</center>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-item-features mb-40">
                    <div className="pricing-item-features-title fw-500 text-xs death-color mb-24">
                      <center>{this.state.India.deaths}</center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader1} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="stats-item reveal-from-bottom m-12"
              data-reveal-container=".tiles-wrap"
            >
              <div className="tiles-item-inner has-shadow rounded ">
                {" "}
                <div className="pricing-item-content ">
                  <div className="pricing-item-header pb-16 mb-24 ">
                    <div className="pricing-item-price ">
                      <span className="pricing-item-price-currency fs-15 fw-700 confirmed-color ">
                        <center>Confirmed</center>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-item-features mb-40">
                    <div className="pricing-item-features-title fw-500 text-xs confirmed-color mb-24">
                      <center>{this.state.Karnataka.totalCases}</center>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="stats-item reveal-from-bottom m-12"
              data-reveal-container=".tiles-wrap"
            >
              <div className="tiles-item-inner has-shadow rounded ">
                {" "}
                <div className="pricing-item-content">
                  <div className="pricing-item-header pb-16 mb-24">
                    <div className="pricing-item-price">
                      <span className="pricing-item-price-currency fs-15 fw-700 active-color">
                        <center>Active </center>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-item-features mb-40">
                    <div className="pricing-item-features-title fw-500 text-xs active-color mb-24">
                      <center>{this.state.Karnataka.totalInfected}</center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="stats-item reveal-from-bottom m-12"
              data-reveal-container=".tiles-wrap"
            >
              <div className="tiles-item-inner has-shadow rounded ">
                {" "}
                <div className="pricing-item-content">
                  <div className="pricing-item-header pb-16 mb-24">
                    <div className="pricing-item-price">
                      <span className="pricing-item-price-currency fs-15 fw-700 recovered-color">
                        <center>Recovered</center>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-item-features mb-40">
                    <div className="pricing-item-features-title fw-500 text-xs recovered-color mb-24">
                      <center>{this.state.Karnataka.recovered}</center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="stats-item reveal-from-bottom invert color m-12"
              data-reveal-container=".tiles-wrap"
            >
              <div className="tiles-item-inner has-shadow rounded ">
                {" "}
                <div className="pricing-item-content">
                  <div className="pricing-item-header pb-16 mb-24">
                    <div className="pricing-item-price">
                      <span className="pricing-item-price-currency fs-15 fw-700 death-color">
                        <center>Deaths</center>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-item-features mb-40">
                    <div className="pricing-item-features-title fw-500 text-xs death-color mb-24">
                      <center>{this.state.Karnataka.deceased}</center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
    );
  }
}

export default Statistics;
