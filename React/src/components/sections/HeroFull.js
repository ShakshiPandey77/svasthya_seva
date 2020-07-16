import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Button from "../elements/Button";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

class HeroFull extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "hero section center-content",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "hero-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    return (
      <section {...props} className={outerClasses}>
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-content" style={inlineStyle()}>
              <h1 className="mt-0 mb-16 reveal-from-top">Svasthya Seva</h1>
              <div className="container-xs">
                <p
                  className="m-0 mb-32 reveal-from-top"
                  data-reveal-delay="150"
                >
                  Your hunt to find near by covid hospitals with covid bed
                  availability ends here.
                </p>

                {/* <div className="reveal-from-top" data-reveal-delay="300">
                  {/* <Button tag="a" color="primary" href="https://cruip.com/">
                    Pricing and plans
                  </Button> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// inline style
const inlineCss = {
  marginBottom: "40px",
};

const inlineStyle = function () {
  if (window.innerWidth > 641) {
    return inlineCss;
  }
};

HeroFull.propTypes = propTypes;
HeroFull.defaultProps = defaultProps;

export default HeroFull;
