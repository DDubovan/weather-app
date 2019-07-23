import React, { Component } from "react";

export default class WeatherInfo extends Component {
  convertTimestamp = timestamp => {
    var d = new Date(timestamp * 1000),
      hh = d.getHours(),
      h = hh,
      min = ("0" + d.getMinutes()).slice(-2),
      ampm = "AM",
      time;
    if (hh > 12) {
      h = hh - 12;
      ampm = "PM";
    } else if (hh === 12) {
      h = 12;
      ampm = "PM";
    } else if (hh == 0) {
      h = 12;
    }
    time = h + ":" + min + " " + ampm;
    return time;
  };
  render() {
    return (
      <div className="">
        {this.props.city && this.props.country && (
          <div className="">
            <p>
              Location: {this.props.city} {this.props.country}
            </p>
            <p>
              Temperature: {this.props.temp} Min: {this.props.tempMin} Max:
              {this.props.tempMax}
            </p>
            <p>
              Humidity: {this.props.humidity}% Wind:{this.props.wind}km/h
              Pressure: {this.props.pressure}mb
            </p>
            <p>Conditions:{this.props.descrip}</p>
            <p>
              Sunrise:{this.convertTimestamp(this.props.sunRise)}
              Sunset:{this.convertTimestamp(this.props.sunSet)}
            </p>
          </div>
        )}
      </div>
    );
  }
}
