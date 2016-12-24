import React, { Component } from 'react';
import { Link } from "react-router";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          {React.Children.only(this.props.children)}
        </div>
      </div>
    );
  }
}

export default App;
