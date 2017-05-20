const paths = require('./paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

const loaders = [
    { loader: 'css-loader',
        options: {
            modules: true,
            camelCase: true,
            importLoaders: 1,
            sourceMap: true,
            localIdentName: '[name]__[local]---[hash:base64:5]'
        }
    },
    'resolve-url-loader',
    'postcss-loader',
    { loader: 'sass-loader',
        query: {
            includePaths: [
                paths.toAbsPath('src.assets/styles'),
                'node_modules'
            ],
            outputStyle: 'expanded',
            sourceMap: true,
            precision: 10
        }
    }
];

module.exports = (PRODUCTION ? ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: loaders
}) : ['style-loader'].concat(loaders));


module.exports.loaders = loaders;