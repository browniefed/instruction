import React, {PropTypes} from 'react';
import { Link } from "react-router";

import Css from "./header.css";

const Header = props => {
  return (
    <div className={Css.container}>
      <Link to="/" className={Css.link}>Home</Link>
      <Link to="/about" className={Css.link}>About</Link>
    </div>
  );
};

Header.propTypes = {
  
};

export default Header;