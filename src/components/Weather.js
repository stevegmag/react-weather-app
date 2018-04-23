import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
        
      <div className="weather"> 
        { this.props.error &&
          <p className="error-msg"> 
            { this.props.error }
          </p>
        }

        { this.props.city && this.props.state && 
          <h2>
          Current Conditions for { this.props.city }, { this.props.state } <br />
          <span>Date / Time: { this.props.localtime }</span>
          { /* swap state field with pulldown generated from remote json */ }
          </h2>
        }

        { this.props.condition_icon && 
          <span className="condition-icon">
          <img src={ this.props.condition_icon } />
          </span>
        }
        { this.props.condition_text &&
          <span className="condition-text">
          { this.props.condition_text }  <br />
          </span>
        }
          
        { this.props.temp_f && 
          <span>
          Temp: <span  className="current-temp">{ this.props.temp_f } °</span><br /> 
          </span>
        }
        { this.props.feelslike_f &&
          <span>
          Feels Like: { this.props.feelslike_f } °<br />
          </span>
        }
        { this.props.precip_in &&
          <span>
          Precipitation (inches): { this.props.precip_in } <br />
          </span>
        }
        { (this.props.wind_mph || this.props.wind_mph ==0) &&
          <span>
          Wind: { this.props.wind_mph } mph<br />
          </span>
        }
        { this.props.wind_dir &&
          <span>
          Wind Direction: { this.props.wind_dir } <br />
          </span>
        }
        { this.props.vis_miles &&
          <span>
          Vidibility: { this.props.vis_miles } mi<br />
          </span>
        }

        { this.props.humidity && 
          <div className="hide-me">
          
          Hummidity: { this.props.humidity } <br />
          Lat: { this.props.lat } <br />
          Lon: { this.props.lon } <br />
          TimeZone: { this.props.tz_id } <br />
          </div>
        }
      </div>
    );
  }
}

export default Weather;