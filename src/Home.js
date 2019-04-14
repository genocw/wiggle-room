import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div className="container">
        <img className="content" src={require('./May2019.jpg')}></img>
      </div>
    );
  }
}
 
export default Home;