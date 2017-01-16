import React, {Component} from 'react';

import Tile from "../components/tile";

const topics = [
  "React Native",
  "React",
  "Redux",
  "CSS",
  "ES6/JavaScript",
  "SVG",
  "Animations",
  "Charts"
]

class Home extends Component {
    render() {
        return (
          <div className="row center-xs" style={{ marginTop: "30px"}}>
              {
                topics.map((title) => {
                  return (
                    <div className="col-xs-3">
                      <Tile title={title} />
                    </div>
                  );
                })
              }
          </div>
        );
    }
}

export default Home;