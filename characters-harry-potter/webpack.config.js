const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ModuleFederationPlugin } = require("@module-federation/enhanced")

module.exports = {
  mode: "development",
  devServer: {
    port: 3002,
    historyApiFallback: true,
    allowedHosts: "all",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/, /__tests__/],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "harrypottermf",
      filename: "remoteEntry.js",
      exposes: {
        "./CharacterList": "./src/components/CharacterList/CharacterList",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0", eager: true },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0", eager: true },
        "react/jsx-runtime": { singleton: true, requiredVersion: "^18.2.0", eager: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
}
