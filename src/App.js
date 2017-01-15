import React, { Component } from 'react';

import Header from "./header";

import Css from "./app.css";

class App extends Component {
  render() {
    return (
      <div className={Css.container}>
        <Header />
        <div>
          {React.Children.only(this.props.children)}
        </div>
      </div>
    );
  }
}

export default App;
