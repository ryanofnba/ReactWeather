import React from 'react';

const About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React and styled with Foundation</p>
      <ol>
        <li>
          <a href="https://facebook.github.io/react">React</a> React
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> This is the API being called in the backend
        </li>
      </ol>
    </div>
  );
};

module.exports = About;
