import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        {/* <li>
          <Link to="/Aboutus">About us</Link>
        </li> */}
        <li>
          <a href="mailto:svasthyaseva@gmail.com">Contact Us</a>
        </li>
        <li>
          <Link to="/information/">FAQ's</Link>
        </li>
        {/* <li>
          <Link to="/support/">Support</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default FooterNav;
