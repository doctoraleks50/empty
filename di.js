'use strict';
const bottle = require('bottlejs').pop('app');
const models = require('./src/models');

bottle.factory('UsersService', function () {
    return new (require('./src/services/UsersService'))(models.User);
});

module.exports = bottle;
