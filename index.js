var newrelic = require('newrelic');

module.exports = function(options) {
  if (!options) options = {};
  if (!options.path) options.path = '$newrelic';
  
  return function (req, res, next) {
    var model = req.getModel();
    var script = newrelic.getBrowserTimingHeader();
    model.at(options.path).set('script', script);
    next();
  };
};
