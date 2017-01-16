import React, {Component} from 'react';
import cx from "classnames";
import withRouter from "react-router/lib/withRouter";
import Tile from "../components/tile";

import categories from "../categories";
import Css from "./home.css";

class Home extends Component {
    render() {
        return (
          <div className={Css.spacing}>
            <div className="row">
              <div className="col-xs-12 col-md-6 col-md-offset-3">
                <div className="row">
                    {
                      categories.map(({title, logo}) => {
                        return (
                          <div 
                            key={title} 
                            className={cx("col-xs-12 col-sm-4 col-md-4", Css.tile_spacing)}
                          >
                            <Tile 
                              onClick={() => this.props.router.push({
                                pathname: `/category/${title}`,
                              })}
                              title={title} 
                              logo={logo}
                            />
                          </div>
                        );
                      })
                    }
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(Home);