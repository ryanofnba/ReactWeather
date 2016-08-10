import React from 'react';
import { Link } from 'react-router';

const Example = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try</p>
      <ol>
        <li>
          <Link to='/?location=Sacramento'>Sacramento, CA</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Example;
