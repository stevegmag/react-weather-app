import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div className="weather">
        <h2>Weather components here</h2>

        { this.props.city } <br />
        { this.props.state } <br />
        { this.props.localtime } <br />
        { this.props.lat } <br />
        { this.props.lon } <br />
        { this.props.tz_id } <br />
        { this.props.temperature } <br />
        { this.props.humidity } <br />
        { this.props.condition_text } <br />
        { this.props.condition_icon} <br />
        { this.props.feelslike_f } <br />
        { this.props.temp_f } <br />
        { this.props.precip_in } <br />
        { this.props.wind_dir } <br />
        { this.props.wind_mph } <br />
        { this.props.vis_miles } <br />
        { this.props.error }

      </div>
    );
  }
}

export default Weather;