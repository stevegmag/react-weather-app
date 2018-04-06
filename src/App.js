import React, { Component } from 'react';

import Titles     from      './components/Titles';
import Form       from      './components/Form';
import Weather    from      './components/Weather';

import './style.css';

/* 
* 
*  Data Source: https://www.apixu.com/doc/
*  const URLTemplate   = "http://api.apixu.com/v1/current.json?key={key}q={city name} {state]";
*
*/
const API_Key      = "b0bafd9035cc40b7b7f220518180504";

class App extends Component {
  state = {
    city:         undefined,
    state:        undefined,
    localtime:    undefined,
    lat:          undefined,
    lon:          undefined,
    tz_id:        undefined,
    temperature:  undefined,
    humidity:     undefined,
    condition_text: undefined,
    condition_icon: undefined,
    feelslike_f:  undefined,
    temp_f:       undefined,
    precip_in:    undefined,
    wind_dir:     undefined,
    wind_mph:     undefined,
    vis_miles:    undefined,
    error:        undefined
  }
  getWeather = async (evt) => {
    evt.preventDefault();
    const city = evt.target.elements.city.value;
    const state = evt.target.elements.state.value;
    const api_call = await fetch(`http://api.apixu.com/v1/current.json?key=${API_Key}&q=${city} ${state}`);
    const data = await api_call.json();
    console.log(data);

    this.setState({
      city:             data.location.name,
      state:            data.location.region,
      localtime:        data.location.localtime,
      lat:              data.location.lat,
      lon:              data.location.lon,
      tz_id:            data.location.tz_id,
      temperature:      data.current.temp_f,
      humidity:         data.current.humidity,
      condition_text:   data.current.condition.text,
      condition_icon:   data.current.condition.icon,
      feelslike_f:      data.current.feelslike_f,
      temp_f:           data.current.temp_f,
      precip_in:        data.current.precip_in,
      wind_dir:         data.current.wind_dir,
      wind_mph:         data.current.wind_mph,
      vis_miles:        data.current.vis_miles,
      error:            ""
    });
  }
  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
          city              = {this.state.city}
          state             = {this.state.state}
          localtime         = {this.state.localtime}
          lat               = {this.state.lat}
          lon               = {this.state.lon}
          tz_id             = {this.state.tz_id}
          temperature       = {this.state.temperature}
          humidity          = {this.state.humidity}
          condition_text    = {this.state.condition_text}
          condition_icon    = {this.state.condition_icon}
          feelslike_f       = {this.state.feelslike_f}
          temp_f            = {this.state.temp_f}
          precip_in         = {this.state.precip_in}
          wind_dir          = {this.state.wind_dir}
          wind_mph          = {this.state.wind_mph}
          vis_miles         = {this.state.vis_miles}
          error             = {this.state.error}
        
        />
      </div>
    );
  }
}


export default App;
