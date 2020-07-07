import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
};

class Footer extends React.Component {
  render() {
    const { className, topOuterDivider, topDivider, ...props } = this.props;

    const classes = classNames(
      "site-footer invert-color",
      topOuterDivider && "has-top-divider",
      className
    );

    return (
      <footer {...props} className={classes}>
        <div className="container">
          <div
            className={classNames(
              "site-footer-inner",
              topDivider && "has-top-divider"
            )}
          >
            <div className="footer-top text-xxs">
              <div className="footer-blocks">
                <div className="footer-block">
                  <Logo className="mb-16" />
                  {/* <div className="footer-copyright">&copy; 2020 Spike, all rights reserved</div> */}
                  <div className="footer-copyright">2020, Svasthya Seva</div>
                </div>
                <div className="footer-block">
                  <div className="footer-block-title">
                    National Helpline Number
                  </div>
                  <ul className="list-reset mb-0">
                    <li>
                      <a href="tel:+91-11-23978046">+91-11-23978046</a>
                    </li>
                    {/* <li>
                      <a href="https://cruip.com/">The purpose of lorem</a>
                    </li>
                    <li>
                      <a href="https://cruip.com/">Filler text can be very useful</a>
                    </li>
                    <li>
                      <a href="https://cruip.com/">Be on design</a>
                    </li> */}
                  </ul>
                </div>
                {/* <div className="footer-block">
                  <div className="footer-block-title">
                    National Helpline Email ID
                  </div>
                  <ul className="list-reset mb-0">
                    <li>
                      <a
                        href="mailto:ncov2019@gov.in
"
                      >
                        ncov2019@gov.in
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="footer-block">
                  <div className="footer-block-title">State Wide Helpline</div>
                  <ul className="list-reset mb-0">
                    <li>
                      <a href="tel:104">104</a>
                    </li>
                    {/* <li>
                      <a href="https://cruip.com/">Dummy text used</a>
                    </li>
                    <li>
                      <a href="https://cruip.com/">Excepteur sint</a>
                    </li>
                    <li>
                      <a href="https://cruip.com/">Occaecat cupidatat</a>
                    </li> */}
                  </ul>
                </div>
                <div className="footer-block">
                  <div className="footer-block-title">
                    Bangalore Urban Helpline
                  </div>
                  <ul className="list-reset mb-0">
                    <li>
                      <a href="tel:080-22967200">080-22967200</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-block">
                  <div className="footer-block-title">
                    Bangalore Rural Helpline
                  </div>
                  <ul className="list-reset mb-0">
                    <li>
                      <a href="tel:080-29781021">080-29781021</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom space-between center-content-mobile text-xxs">
              <FooterNav />
              <FooterSocial />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
