import React, { Component } from "react";
import "../styles/general.scss";
import { Link } from "react-router-dom";

export default class Logo extends Component {
  linkStyle = {
    textDecoration: "none",
    color: "black"
  };
  render() {
    return (
      <div className="logoContainer">
        <Link to="/" style={this.linkStyle}>
          <img className="logoIcon" src="../assets/sun-logo.svg" />
          <h2 className="">Find Your Weather</h2>
        </Link>
      </div>
    );
  }
}
