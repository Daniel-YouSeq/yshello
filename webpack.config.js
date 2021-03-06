const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env) => {
  return {
    entry: './yshello.js',
    module: {
      rules: [{
        test: /.(js|jsx)$/,
        exclude: ['/node_modules/', '/build/'],
        use: { loader: 'babel-loader' },
      }],
    },
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'js/yshello.min.js',
      library: {
        name: 'Hello',
        type: 'umd',
      },
    },
    plugins: [
      new ESLintPlugin({
        extensions: [`js`, `jsx`],
        exclude: [`node_modules`],
        emitWarning: true,
        overrideConfigFile: './.eslintrc.json'
      }),
    ],
    target: 'web'
  };
};
