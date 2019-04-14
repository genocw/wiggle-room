import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="header">UPCOMING GIG</h2>
        <img className="content" src={require('./May2019.jpg')}></img>
      </div>
    );
  }
}
 
export default Home;