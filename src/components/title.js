import React from 'react';
import Css from "./title.css";

const Title = ({ children, ...props}) => {
  return (
    <span className={Css.text} {...props}>{children}</span>
  );
};

export default Title;