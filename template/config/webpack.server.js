/**
 * Development Server Config
 */
const address = require('ip').address();
const localhost = require('./hosts').local;

module.exports = {
    entry: {
        app: [
            'webpack-dev-server/client?http://' + address + ':' + localhost.port
        ]
    }
};