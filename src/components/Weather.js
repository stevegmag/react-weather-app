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
          <span>Date / Time: { this.props.localtime }<br />
          TimeZone: { this.props.tz_id }<br />
          Lat: { this.props.lat } :: Lon: { this.props.lon } <br /> </span>
          { /* swap state field with pulldown generated from remote json */ }
          </h2>
        }

        { this.props.condition_icon && this.props.condition_text &&
          <div className="condition-details">
            <span className="condition-icon">
            <img src={ this.props.condition_icon } /><br />
            </span>
        
            <span className="condition-text">
            { this.props.condition_text }  <br />
            </span>
          </div>
        }
          
        { this.props.temp_f && 
          <div  className="current-temp">
            <span  className="current-temp-val">{ this.props.temp_f }</span> °<br /> Temp<br />
          </div>
        }

        <div className="left-col">
          { (this.props.precip_in || this.props.precip_in ==0) &&
            <span>
            Precipitation: { this.props.precip_in }" <br />
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
        </div>
        <div className="right-col">
          { this.props.feelslike_f &&
            <span>
            Feels Like: { this.props.feelslike_f } °<br />
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
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Weather;