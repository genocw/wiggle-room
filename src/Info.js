import React, { Component } from "react";
 
class Info extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="header">Info</h2>
        <div className="content">
            <ul>
              <li>BYOB</li>
              <li>Suggested £5-£10 donations for live entertainment</li>
              <li>Respect the house</li>
              <li>Don't publish the address publicly - private residence</li>
              <li>Good vibes only</li>
            </ul>
        </div>
      </div>
    );
  }
}
 
export default Info;