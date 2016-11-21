'use strict';

var axon = require('axon');
var socket = axon.socket('pub');

socket.bin(8001);

/**
 * exports - send a badge to publish socket
 */
exports.send = function(badge) {
  socket.send(badge);
};
