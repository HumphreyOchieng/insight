const path = require("path");

module.exports = {
	css: {
		modules: true,
		loaderOptions: {
			sass: {
				prependData:`@import "@/shared/sass/index.scss";`
			}
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				icons: path.resolve(__dirname, "node_modules/vue-material-design-icons")
			}
		},
		module: {
			rules: [
				{
					test: /\.(graphql|gql)$/,
					exclude: /node_modules/,
					loader: 'graphql-tag/loader'
				}
			]
		}
	}
};