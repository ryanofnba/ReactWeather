import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Example from 'Example';

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Example} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);
