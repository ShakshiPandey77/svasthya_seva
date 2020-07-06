import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

class Team extends React.Component {
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
      "team section center-content",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "team-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    // const sectionHeader = {
    //   title: 'Our story - Lorem ipsum is placeholder text.',
    //   paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    // };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            {/* <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" /> */}
            <div className={tilesClasses}>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
              >
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    {/* <div className="team-item-image mb-24 illustration-element-06">
                      <Image
                        src={require('./../../assets/images/team-member-01.jpg')}
                        alt="Team member 01"
                        width={200}
                        height={200} />
                    </div> */}
                  </div>
                  {/* <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Markus Hasinika
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Founder & CEO
                    </div>
                    <p className="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div> */}
                </div>
              </div>

              {/* <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="150">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/team-member-02.jpg')}
                        alt="Team member 02"
                        width={200}
                        height={200} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Markus Hasinika
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Founder & CEO
                    </div>
                    <p className="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/team-member-03.jpg')}
                        alt="Team member 03"
                        width={200}
                        height={200} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Markus Hasinika
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Founder & CEO
                    </div>
                    <p className="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="450">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-07">
                      <Image
                        src={require('./../../assets/images/team-member-04.jpg')}
                        alt="Team member 04"
                        width={200}
                        height={200} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Markus Hasinika
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Founder & CEO
                    </div>
                    <p className="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="600">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/team-member-05.jpg')}
                        alt="Team member 05"
                        width={200}
                        height={200} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Markus Hasinika
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Founder & CEO
                    </div>
                    <p className="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="500">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-08">
                      <Image
                        src={require('./../../assets/images/team-member-06.jpg')}
                        alt="Team member 06"
                        width={200}
                        height={200} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Markus Hasinika
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Founder & CEO
                    </div>
                    <p className="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;
