import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form ">
        <form onSubmit={this.props.getWeather}>  
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="state" placeholder="State..." />
            <button>Get weather</button>
        </form>
      </div>
    )
  }
}

export default Form;