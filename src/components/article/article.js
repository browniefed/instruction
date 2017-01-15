import React from 'react';
import cx from "classnames";

import Css from "./article.css";

const Article = ({ children, ...props}) => {
  return (
    <div {...props} className={cx("row", Css.container)}>
      <div className="col-xs-12 col-md-6 col-md-offset-3">
        {children}
      </div>
    </div>
  );
};

export default Article;