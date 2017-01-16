import React from 'react';
import cx from "classnames";

import Css from "./tile.css";

const Tile = ({ title, logo, ...props}) => {
  return (
    <div className={cx(Css.container)}>
      <div className={Css.gradient} />
      <h1 className={Css.title}>{title}</h1>
      {logo && <img className={Css.logo} src={logo} alt={title} />}
    </div>
  );
};

export default Tile;