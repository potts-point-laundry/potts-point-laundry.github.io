module.exports = {
	entry: ["./lib/buildSitemap.js"],
    target: "node",
    mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				loader: "file-loader",
				options: {
					outputPath: "images/",
					name: "[name].[ext]",
					publicPath: "/images",
				},
			},
		],
	},
	output: {
		path: __dirname + "/compiled",
		filename: "main.js",
	},
};
