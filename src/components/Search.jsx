import React, { Component } from "react";
import "../styles/general.scss";
import Logo from "./Logo";
import Modal from "react-responsive-modal";
import { Link } from "react-router-dom";

export default class Search extends Component {
  // state = {
  //   modalOpen: false
  // };

  // onOpenModal = () => {
  //   this.setState({ open: true });
  // };

  // onCloseModal = () => {
  //   this.setState({ open: false });
  // };

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.props = this.props.data;
    }
  }

  // componentDidMount() {
  //   this.props.getWeatherData(this.props.match.params.citycountry);
  // }

  render() {
    const { city, country } = this.props.all;
    console.log(country);
    return (
      <div className="outerSearchContainer">
        <Logo />
        <div className="innerSearchContainer">
          <form onSubmit={this.props.getData} className="m-5 searchForm">
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

            <button
              className="btn btn-primary m-1"
              // onClick={this.state.onOpenModal}
            >
              <Link
                to={`/weather/${city}/${country}`}
                className="btn btn-primary m-1"
                onSubmit={this.props}
              >
                Get Weather
              </Link>
            </button>
          </form>
          {/* <Modal open={this.state.modalOpen} onClose={this.onCloseModal} center>
            <WeatherInfo />
          </Modal> */}
        </div>
      </div>
    );
  }
}
