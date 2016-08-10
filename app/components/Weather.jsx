import React from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import OpenWeatherMap from 'OpenWeatherMap';

const Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  handleSearch: function(location) {
    const that = this;

    this.setState({
      isLoading: true
    })

    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location,
        temp,
        isLoading: false
      });
    }, function(errorMessage) {
      alert(errorMessage);
    })
  },

  render: function() {
    const { isLoading, temp, location } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Loading weather</h3>
      }
      else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
