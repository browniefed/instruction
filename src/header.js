import React, {PropTypes} from 'react';
import { Link } from "react-router";

import Css from "./header.css";

const Header = props => {
  return (
    <div className={Css.container}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

Header.propTypes = {
  
};

export default Header;