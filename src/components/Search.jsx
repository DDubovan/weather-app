import React, { Component } from "react";
import { get } from "http";

export default class Search extends Component {
  render() {
    return (
      <div className="">
        <form onSubmit={this.props.getWeatherData} className="m-5 ">
          <input
            type="text"
            name="city"
            placeholder="City"
            className="form-control text-capitalize m-1"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="form-control text-capitalize m-1 "
          />
          <button className="btn btn-primary m-1" type="submit">
            Get Weather
          </button>
        </form>
      </div>
    );
  }
}
