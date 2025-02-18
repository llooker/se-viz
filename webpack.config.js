var path = require('path')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var webpackConfig = {
  entry: {
    v1_common: './src/common/common-entry.js',
    hello_world: './src/examples/hello_world/hello_world.js',
    sankey: './src/examples/sankey/sankey.ts',
    liquid_fill_gauge: './src/examples/liquid_fill_gauge/liquid_fill_gauge_converted.js',
    sunburst: './src/examples/sunburst/sunburst.ts',
    collapsible_tree: './src/examples/collapsible_tree/collapsible_tree.ts',
    chord: './src/examples/chord/chord.ts',
    treemap: './src/examples/treemap/treemap.ts',
    subtotal: './src/examples/subtotal/subtotal.ts',
    package:'./src/examples/bubble/bubble.js',
    tabulatorsub:'./src/examples/tabulatorsub/tabulatorsub.js'
  //  newgauge: './src/examples/newgauge/googlegauge.js'

  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
    library: "[name]",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
  //  new UglifyJSPlugin()
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader" },
      { test: /\.css$/, loader: [ 'to-string-loader', 'css-loader' ] }
    ]
  },
  stats: {
    warningsFilter: /export.*liquidfillgauge.*was not found/
  }
}

module.exports = webpackConfig
