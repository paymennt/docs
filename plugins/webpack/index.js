module.exports = function (context, options) {
  return {
    name: 'loaders',
    configureWebpack(config, isServer) {
      return {
        resolve: {
          fallback: {
            "fs": false
          },
        },
        module: {
          rules: [
            {
              test: /\.m?jsx?$/,
              resolve: {
                fullySpecified: false
              },
            }
          ]
        },
      };
    },
  };
};
