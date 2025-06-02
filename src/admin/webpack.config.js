'use strict';

const webpack = require('webpack');

module.exports = (config) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        crypto: false,
        http: false,
        fs: false,
        zlib: false,
        https: false,
        stream: false,
        path: false,
        timers: false,
        tls: false,
        net: false,
        url: false,
        querystring: false,
        process: require.resolve('process/browser'),
      },
    },
    plugins: [
      ...(config.plugins || []),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
  };
};