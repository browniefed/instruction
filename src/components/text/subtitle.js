import React from 'react';
import Css from "./title.css";

const Subtitle = ({ children, ...props}) => {
  return (
    <h4 {...props} className={Css.subtitle}>{children}</h4>
  );
};

export default Subtitle;