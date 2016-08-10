import React from 'react';

const WeatherMessage = ({ temp, location }) => {
  return (
    <div>
      <h3>It is {temp} degrees in {location}</h3>
    </div>
  );
};

module.exports = WeatherMessage;
