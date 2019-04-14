import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Faq from "./Faq";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>WiggleRoom House Concerts</h1>
          <ul className="header">
            <li><NavLink exact to="/">Upcoming Gig</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/faq" component={Faq}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;