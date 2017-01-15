import React from 'react';
import cx from "classnames";
import Css from "./body.css";

const Body = ({ children, ...props}) => {
  return (
    <div className={cx("row", Css.container)}>
      <div className="col-xs-12">
        {children}
      </div>
    </div>
  );
};

export default Body;