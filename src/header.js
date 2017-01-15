import React from 'react';
import cx from "classnames";
import { Link } from "react-router";

import Css from "./header.css";

const Header = props => {
  return (
    <div className={cx(Css.container, "row")}>
      <div className="col-xs">
        <Link to="/" className={Css.link}>Home</Link>
      </div>
      <div className="end-xs">
        <Link to="/about" className={Css.link}>About</Link>
      </div>
    </div>
  );
};

export default Header;