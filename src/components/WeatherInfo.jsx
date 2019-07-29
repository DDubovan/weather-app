import React, { Component } from "react";
import "../styles/general.scss";

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
    } else if (hh === 0) {
      h = 12;
    }
    time = h + ":" + min + " " + ampm;
    return time;
  };

  convertWindToDirection = num => {
    var val = Math.floor(num / 22.5 + 0.5);
    var arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW"
    ];
    return arr[val % 16];
  };

  render() {
    const {
      photo,
      city,
      country,
      temp,
      tempMin,
      tempMax,
      humidity,
      wind,
      windDirection,
      pressure,
      descrip,
      sunRise,
      sunSet
    } = this.props.all;
    const { params } = this.props;
    console.log(this.props);
    return (
      <div>
        {city && country && (
          <div className="card">
            <img
              className="card-img"
              src={photo}
              height="500"
              width="500"
              alt="city"
            />
            <div className="card-img-overlay">
              <div className="card-text innerWeatherContainer">
                <h5>
                  Location: {city} {country}
                </h5>
                <ul className="weatherInfoList">
                  <li>Temperature: {" " + temp}</li>
                  <li>Min: {" " + tempMin}</li>
                  <li>Max: {" " + tempMax}</li>
                </ul>
                <ul className="weatherInfoList">
                  <li>Humidity: {" " + humidity}%</li>
                  <li>Pressure: {" " + pressure}mb</li>
                </ul>
                <p>
                  Wind:{" " + wind}km/h
                  {" " + this.convertWindToDirection(windDirection)}
                </p>
                <p>Conditions:{" " + descrip.toUpperCase()}</p>
                <ul className="weatherInfoList">
                  <li>Sunrise:{" " + this.convertTimestamp(sunRise)}</li>
                  <li>Sunset:{" " + this.convertTimestamp(sunSet)}</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
