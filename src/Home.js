import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>UPCOMING GIG</h2>
        <img src={require('./May2019.jpg')}></img>
      </div>
    );
  }
}
 
export default Home;