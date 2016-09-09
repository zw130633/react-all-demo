var path = require('path')
var webpack = require('webpack')
var rootName = '/react-all-demo'

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: rootName+'/dist/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
	    loaders: [{
	        test: /\.coffee$/,
	        loader: 'coffee-loader'
	    }, {
	        test: /\.css$/,
	        //loader: "css-loader"
	        loader: "style!css"
	    }, {
	        test: /\.scss$/,
	        loader: "style!css!sass"
	    }, {
	        test: /\.jsx?$/,
	        exclude: /(node_modules|bower_components)/,
	        loader: 'babel', // 'babel-loader' is also a legal name to reference
	        query: {
	            presets: ['es2015','react']
	        }
	    },{
	        test: /\.js?$/,
	        exclude: /node_modules/,
	        loader: 'babel', // 'babel-loader' is also a legal name to reference
	        query: {
	            presets: ['es2015','react','stage-2','stage-3']
	        }
	    },
	    {
	    	test: /\.(jpg|png)$/, 
	    	loader: "url?limit=50000"
	    }]
	},
	resolve:{
		extensions:['','.js','.css','.scss']
	}
}
