const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devServer: (devServerConfig) => {
    devServerConfig.writeToDisk = true
    return devServerConfig
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // this is needed in order to package the app as a zendesk app
      // dist folder is the root of the zendesk app
      paths.appBuild = webpackConfig.output.path =
        path.resolve('dist/assets')
      webpackConfig.output.publicPath = './' // override public path because private app is hosted on zendesk cdn
      
      return webpackConfig
    },
    plugins: {
      add: [
        new CopyWebpackPlugin({
          patterns: [
            {
              from: './src/manifest.json', 
              to: '../', // copy manifest to root dist
            },
          ],
        })
      ], 
    }
  },
}