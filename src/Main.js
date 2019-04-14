import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Info from "./Info";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="mainContainer">
          <div className="fixedHeader">
            <img className="logo" src={require('./wiggleBlack.png')}></img>
            <h1 className="title">Red House Parties</h1>
          </div>
          <ul className="navBar">
            <li><NavLink exact to="/">Upcoming Gig</NavLink></li>
            <li><NavLink to="/info">Info</NavLink></li>
          </ul>
          <div className="mainContent">
            <Route exact path="/" component={Home}/>
            <Route path="/info" component={Info}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;