var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:8080/',
		'webpack/hot/only-dev-server',
		'./src'
	],
	devServer: {
		hot: true,
		headers: { 'Access-Control-Allow-Origin' : '*'}
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		modules: ['node_modules', 'src'],
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_module/,
			loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015']
		}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
}