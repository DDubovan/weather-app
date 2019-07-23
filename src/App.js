import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Logo from "./components/Logo";
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
    sunSet: undefined
  };

  // componentWillMount = () => {
  getWeatherData = async e => {
    e.preventDefault();
    const cityInput = e.target.city.value;
    const countryInput = e.target.country.value;
    const key = "5fe9e3d237aef453c0ceffb9dafec951";
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput},${countryInput}&APPID=${key}&units=metric`
    );
    const data = await request.json();
    if (cityInput && countryInput) {
      console.log(data);
      this.setState({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        pressure: data.main.pressure,
        descrip: data.weather[0].description,
        sunRise: data.sys.sunrise,
        sunSet: data.sys.sunset
      });
      console.log(this.state.city);
    } else {
      alert("Please enter a city and country.");
    }
  };

  render() {
    return (
      <div className="d-flex flex-column flex-wrap w-100 h-100 justify-content-center align-content-center">
        <Logo />
        <Search getWeatherData={this.getWeatherData} />
        <WeatherInfo
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          tempMax={this.state.tempMax}
          tempMin={this.state.tempMin}
          humidity={this.state.humidity}
          wind={this.state.wind}
          pressure={this.state.pressure}
          descrip={this.state.descrip}
          sunRise={this.state.sunRise}
          sunSet={this.state.sunSet}
        />
      </div>
    );
  }
}
