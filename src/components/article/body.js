import React from 'react';
import cx from "classnames";
import Css from "./body.css";

const Body = ({ children, ...props}) => {
  return (
    <div className={cx("row", Css.container)}>
      <div className={cx("col-xs-12", Css.text)}>
        {children}
      </div>
    </div>
  );
};

export default Body;