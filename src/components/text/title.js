import React from 'react';
import Css from "./title.css";

const Title = ({ children, ...props}) => {
  return (
    <h1 className={Css.title} {...props}>{children}</h1>
  );
};

export default Title;