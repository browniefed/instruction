import React, {Component} from 'react';

import Tile from "../components/tile";

import JavaScriptLogo from "../../public/javascript_logo.svg";
import ReactLogo from "../../public/react_logo.svg";
import ReduxLogo from "../../public/redux_logo.svg";
import CssLogo from "../../public/css_logo.svg";

const topics = [
  {
    title: "React",
    logo: ReactLogo,
  },
  {
    title: "Redux",
    logo: ReduxLogo
  },
  {
    title: "React Native",
    logo: ReactLogo
  },
  {
    title: "Css",
    logo: CssLogo
  },
  {
    title: "JavaScript/ES6",
    logo: JavaScriptLogo
  }
]

class Home extends Component {
    render() {
        return (
          <div className="row">
            <div className="col-xs-12 col-md-6 col-md-offset-3">
              <div className="row" style={{ marginTop: "30px"}}>
                  {
                    topics.map(({title, logo}) => {
                      return (
                        <div key={title} className="col-xs-12 col-sm-3 col-md-3" style={{ marginBottom: "15px"}} >
                          <Tile 
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
        );
    }
}

export default Home;