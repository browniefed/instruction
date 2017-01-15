import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory} from "react-router";
import App from './app';
import Home from "./pages/home";
import About from "./pages/about";

import "./global.css";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home}/>
      <Route path="about" component={About} />
    </Route>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
