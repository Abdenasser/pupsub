'use strict';

var redis = require('../lib/redis');
var broadcast = require('../lib/broadcast');

/**
 * exports - description
 *
 * @param  {Array} badges
 * @param  {function} callback
 * @return {type}
 */
exports.save = function(badges, callback) {
  if (!badges.length) return callback(null, null);
  var badge = badges.pop();
  redis.lpush('badges', JSON.stringify(badge), function(err) {
    if (err) return callback(err, null);
    exports.save(badges, callback);
  });
};

/**
 * Trim down the redis list
 */
exports.trim = function() {
  redis.ltrim('badges', 0, 9);
};


/**
 * Send out badges to the broadcaster
 * @param {Array} badges
 * @param {Function} callback
 */
exports.send = function(badges, callback) {
  badges.forEach(broadcast.send);
  callback(null, null);
};


/**
 * exports - Get badges from redis
 * @param  {Function} callback
 */
exports.get = function(callback) {
  redis.lrange('badges', 0, -1, function(err, data) {
    if (err) return callback(err, null);
    callback(null, data.map(JSON.parse));
  });
}
