import React from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import OpenWeatherMap from 'OpenWeatherMap';
import ErrorModal from 'ErrorModal';

const Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  handleSearch: function(location) {
    const that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    })

    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location,
        temp,
        isLoading: false
      });
    }, function(e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    })
  },

  render: function() {
    const { isLoading, temp, location, errorMessage } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Loading weather</h3>
      }
      else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Weather Search</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
