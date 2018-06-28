const publicPath = '/';

export default {
  "entry": "src/page/index.js",
  "extraBabelPlugins": [
    [
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true
      }
    ],
    [
      "import",
      {
        "libraryName": "antd-mobile",
        "libraryDirectory": "es",
        "style": true
      },
      "antd-mobile-import"
    ],
    "lodash"
  ],
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  },
  "proxy": {
     "/api": {
      "target": "http://120.77.70.146:8956/",
       "changeOrigin": true,
       "pathRewrite": {"^/api": ""}
     },
    "/app": {
      "target": "http://localhost:8000/",
      "pathRewrite": {"^/app.*$": "/app.html"}
    }
  },
  "theme": "./src/styles/theme.js",
  publicPath,
  define: {publicPath}
}
