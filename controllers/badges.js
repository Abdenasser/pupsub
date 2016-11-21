'use strict';

var _ = require('underscore');

// Send bdges to model to be saved
exports.save = function(req, res, next) {
  var badges = _.clone(req.body);
  model.save(badges, function(err) {
    if (err) return res.json(503, { error: true });
    next();
  });
};

// send badges to pub/sub socket in model
exports.send = function() {};
