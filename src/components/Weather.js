import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div className="weather">
        <h2>
        Current Conditions for { this.props.city }, { this.props.state } <br />
        <span>Date / Time: { this.props.localtime }</span>
        { /* swap state field with pulldown generated from remote json */ }
        </h2>

        { this.props.condition_icon && <img src={ this.props.condition_icon } />} <br />
        { this.props.condition_text } <br />
        
        Temp: { this.props.temp_f } °<br />
        Feels Like: { this.props.feelslike_f } °<br />
        Precipitation (inches): { this.props.precip_in }" <br />
        Wind: { this.props.wind_mph } mph<br />
        Wind Direction: { this.props.wind_dir } <br />
        Vidibility: { this.props.vis_miles } mi<br />
        { this.props.error }

        <div classname="hide-me">
        
        { this.props.humidity } <br />
        { this.props.lat } <br />
        { this.props.lon } <br />
        { this.props.tz_id } <br />
        </div>

      </div>
    );
  }
}

export default Weather;