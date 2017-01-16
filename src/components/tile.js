import React from 'react';
import cx from "classnames";

import Css from "./tile.css";

const Tile = ({ title, ...props}) => {
  return (
    <div className={cx(Css.container)}>
      <div className={Css.gradient} />
      <span>Category</span>
      <span>{title}</span>
    </div>
  );
};

export default Tile;