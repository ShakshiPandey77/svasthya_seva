import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import { Link } from "react-router-dom";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

class FeaturesSplit extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "features-split section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "features-split-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    const sectionHeader = {
      title: "",
      paragraph: "",
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>
              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <div className="mt-0 mb-20  fw-700  fs-30 reveal-from-left">
                    HOSPITALS
                  </div>

                  {/* <Link to="/hospitals/" onClick={this.closeMenu}>
                          Hospitals
                        </Link> */}

                  <p
                    className="mt-16 reveal-from-left"
                    data-reveal-container=".split-item"
                    data-reveal-delay="100"
                  >
                    <i className="fw-500">
                      {" "}
                      Wanna know about hospitals that are treating covid?
                    </i>
                    <br /> Find all the COVID-19 hospitals near you and check
                    for the availability of the beds and ventilators. Get in
                    contact with the hospital that suits your needs.
                  </p>
                  <Link
                    className="mt-0 mb-20 button reveal-from-left"
                    data-reveal-container=".split-item"
                    to="/hospitals/"
                    style={{ textDecoration: "none" }}
                  >
                    Know more
                  </Link>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile illustration-element-02 reveal-from-right",
                    imageFill && "split-item-image-fill"
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200"
                >
                  <Image
                    src={require("./../../assets/images/features-split-image.svg")}
                    alt="Features split 01"
                    width={528}
                    height={396}
                  />
                  <div style={imgStyle}>
                    <Image
                      src={require("./../../assets/images/features-split-top-01.png")}
                      alt="Features split top 01"
                      width={654}
                      height={522}
                    />
                  </div>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <div className="mt-0 mb-20  fw-700  fs-30 reveal-from-left">
                    QUARANTINE CENTERS
                  </div>
                  <p
                    className="mt-16 reveal-from-right"
                    data-reveal-container=".split-item"
                    data-reveal-delay="100"
                  >
                    <i className="fw-500">
                      Wanna know about quarantine centers you can reach out to?
                      <br />
                    </i>
                    Find out about the quarantine centers in your city.
                  </p>
                  <Link
                    className="button mt-0 mb-20 reveal-from-left"
                    data-reveal-container=".split-item"
                    to="/quarantineCenter/"
                    style={{ textDecoration: "none" }}
                  >
                    Know more
                  </Link>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile illustration-element-03 reveal-from-left",
                    imageFill && "split-item-image-fill"
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200"
                >
                  <Image
                    src={require("./../../assets/images/features-split-image.svg")}
                    alt="Features split 02"
                    width={528}
                    height={396}
                  />
                  <div style={imgStyle}>
                    <Image
                      src={require("./../../assets/images/features-split-top-02.png")}
                      alt="Features split top 02"
                      width={654}
                      height={521}
                    />
                  </div>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <div className="mt-0 mb-20  fw-700  fs-30 reveal-from-left">
                    TESTING CENTERS
                  </div>
                  <p
                    className="mt-16 reveal-from-left"
                    data-reveal-container=".split-item"
                    data-reveal-delay="100"
                  >
                    <i className="fw-500">
                      {" "}
                      Wanna know more about testing centers near you?
                    </i>
                    <br />
                    Find out about the testing centers in your city.
                  </p>
                  <Link
                    className="mt-0 mb-20  button reveal-from-left"
                    data-reveal-container=".split-item"
                    to="/testingCenter/"
                    style={{ textDecoration: "none" }}
                  >
                    know more
                  </Link>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile illustration-element-04 reveal-from-right",
                    imageFill && "split-item-image-fill"
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200"
                >
                  <Image
                    src={require("./../../assets/images/features-split-image.svg")}
                    alt="Features split 03"
                    width={528}
                    height={396}
                  />
                  <div style={imgStyle}>
                    <Image
                      src={require("./../../assets/images/features-split-top-03.png")}
                      alt="Features split top 03"
                      width={654}
                      height={436}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const imgStyle = {
  position: "absolute",
  width: "118.18%",
  maxWidth: "118.18%",
  top: "-7.07%",
  left: "-9.09%",
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
