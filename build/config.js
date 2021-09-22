const path = require("path");
const PORT = process.env.PORT || 8000;
const pkg = require("../package.json");
const assetsPublicPath = {
	development: `http://static-dev.tongdun.cn/static-public/${pkg.name}/default/${pkg.version}/`
}[process.env.SYS_ENV] || `https://portal-static.tongdun.cn/static-public/${pkg.name}/default/${pkg.version}/`;

const apiHost = "http://127.0.0.1:7001";

module.exports = {
	common: {
		htmlTemplatePath: path.resolve(__dirname, "../src/index.ejs"),
		dllPath: path.resolve(__dirname, "../public/vendor")
	},
	dev: {
		hot: true,
		assetsSubDirectory: "static",
		assetsPublicPath: "/",
		proxyTable: {
			"/api": {
				"target": apiHost,
				"changeOrigin": true,
				"pathRewrite": {
					"^/api": "/api"
				}
			}
		},
		host: "localhost",
		port: PORT,
		autoOpenBrowser: true,
		devtool: "cheap-module-source-map"
	},
	build: {
		assetsRoot: path.resolve(__dirname, "../dist"),
		assetsSubDirectory: "static",
		assetsPublicPath: assetsPublicPath,
		devtool: "source-map",
		projectFolderName: "sinan-resource"
	}
};
