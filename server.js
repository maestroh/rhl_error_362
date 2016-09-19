const express = require('express');
const config = require('./webpack.config');
const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');

var app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
});

app.listen(8081, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`listening on port 8081`);
});
