import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";

export default class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    tempMax: undefined,
    tempMin: undefined,
    humidity: undefined,
    wind: undefined,
    pressure: undefined,
    descrip: undefined,
    sunRise: undefined,
    sunSet: undefined,
    photo: undefined
  };

  getData = async e => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    const key = "5fe9e3d237aef453c0ceffb9dafec951";
    const weatherReq = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${key}&units=metric`
    );
    const photoReq = await fetch(
      `https://api.teleport.org/api/urban_areas/slug:${city}/images/`
    );
    const wData = await weatherReq.json();
    const pData = await photoReq.json();

    if (city && country) {
      this.setState({
        city: wData.name,
        country: wData.sys.country,
        temp: wData.main.temp,
        tempMax: wData.main.temp_max,
        tempMin: wData.main.temp_min,
        humidity: wData.main.humidity,
        wind: wData.wind.speed,
        windDirection: wData.wind.deg,
        pressure: wData.main.pressure,
        descrip: wData.weather[0].description,
        sunRise: wData.sys.sunrise,
        sunSet: wData.sys.sunset,
        photo: pData.photos[0].image.web
      });
    } else {
      alert("Please enter a city and country.");
    }
  };

  render() {
    return (
      <div className="d-flex flex-column flex-wrap w-100 h-100 justify-content-center align-content-center">
        <Route
          exact
          to="/"
          render={props => (
            <Search {...props} getData={this.getData} all={this.state} />
          )}
        />
        <Route
          to="/weather/:citycountry"
          render={props => <WeatherInfo {...props} all={this.state} />}
        />
      </div>
    );
  }
}
