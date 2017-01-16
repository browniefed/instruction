import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory} from "react-router";
import App from './app';
import Home from "./pages/home";
import About from "./pages/about";
import Category from "./pages/category";
import Lesson from "./pages/lesson";

import "./global.css";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="category/:category" component={Category} />
      <Route path="lesson/:lesson" component={Lesson} />
    </Route>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
