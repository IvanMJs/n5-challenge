const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ModuleFederationPlugin } = require("@module-federation/enhanced")

// URLs de producción para los microfrontends
const isProduction = process.env.NODE_ENV === "production"
const rickAndMortyUrl = isProduction 
  ? "https://rickandmorty-mf.netlify.app/remoteEntry.js"
  : "http://localhost:3001/remoteEntry.js"
const harryPotterUrl = isProduction 
  ? "https://harrypotter-mf.netlify.app/remoteEntry.js"
  : "http://localhost:3002/remoteEntry.js"

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
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
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        rickandmortymf: `rickandmortymf@${rickAndMortyUrl}`,
        harrypottermf: `harrypottermf@${harryPotterUrl}`,
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
