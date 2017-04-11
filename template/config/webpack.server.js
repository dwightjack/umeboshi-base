/**
 * Development Server Config
 */
const address = require('ip').address();
const localhost = require('./hosts').local;

module.exports = {
    entry: {
        app: [
            'eventsource-polyfill',
            {{!-- APP --}}
            'webpack-dev-server/client?http://' + address + ':' + localhost.port
        ]
    }
};