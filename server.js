const express = require('express');

const App = express();
const PORT = process.env.PORT || 3000;

App.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  }
  else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

App.use(express.static('public'));

App.listen(PORT, () => {
  console.log('Express server is up on port ' + PORT);
})
