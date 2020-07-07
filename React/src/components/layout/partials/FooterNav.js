import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="mailto:ncov2019@gov.in">Mail ID: ncov2019@gov.in</a>
        </li>
        {/* <li>
          <Link to="/Aboutus">About us</Link>
        </li> */}
        <li>
          <a href="mailto:mailto:svasthyaseva@gmail.com">Contact</a>
        </li>
        {/* <li>
          <Link to="/faqs/">FAQ's</Link>
        </li> */}
        {/* <li>
          <Link to="/support/">Support</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default FooterNav;
