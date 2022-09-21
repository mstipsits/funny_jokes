const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

const websiteName = 'Funny Jokes';

module.exports = {
  // Where webpack looks to start building the bundle
  entry: {
    index: [paths.src + '/index.js'],
    jokes: [paths.js + '/jokes.js'],
    member: [paths.js + '/member.js'],
    about: [paths.js + '/about.js'],
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: websiteName,
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/index_test.html', // template file
      filename: 'index.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: websiteName + ' | Jokes',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/html/jokes.html', // template file
      filename: 'jokes.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: websiteName + ' | Become a Member',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/html/member.html', // template file
      filename: 'member.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: websiteName + ' | About',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/html/about.html', // template file
      filename: 'about.html', // output file
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}
