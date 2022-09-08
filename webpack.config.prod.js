const path = require("path");
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

require("dotenv").config();

const deps = require("./package.json").dependencies;

const { REMOTE_WEB_COMPONENTS, REMOTE } = process.env;

module.exports = {
  mode: "production",
  entry: {
    wc_demo: path.resolve(__dirname, "./src/index.js"),
    wc_demo_styles: path.resolve(__dirname, "./src/bootstrap.tsx"),
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: REMOTE,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
      context: path.resolve(__dirname, "src/context"),
    },
  },

  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    minimize: true,
    // splitChunks: true,
    chunkIds: 'named',
    splitChunks: false
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      // name of remote, beware name collisions
      name: "WCDemo",
      // name of bundle (this will be splitted from main bundle)
      filename: "remoteEntry.js",
      remotes: {
        // remotes should follow this sintax: {{RemoteWhateverNameYouWant}}: "{{NameOnRemoteWebpack}}@http://localhost:3001/{{filenameOnRemotesWebpack}}.js", i.e.:
        // Remote: "AwesesomeRemote@http://localhost:3002/remoteEntry.js",
        WebComponents: `wc_system@${REMOTE_WEB_COMPONENTS}/remoteEntry.js`,
      },
      //  exposed "remotes" for other apps to see, they will be imported under "remotes" with this format: name@location
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps["react"],
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-router-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      chunks: ["wc_demo"],
      templateParameters: {
        assetsUrl: REMOTE_WEB_COMPONENTS,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "wc_demo_styles.css",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }, path.resolve(__dirname, "./public")],
    }),
    new webpack.DefinePlugin({
      'process.env.WC_DEMO_STYLE_URL': JSON.stringify(`${REMOTE}/wc_demo_styles.css`),
      'process.env.STYLES_URL': JSON.stringify(`${REMOTE_WEB_COMPONENTS}/styles.css`)
   })
  ],
};
