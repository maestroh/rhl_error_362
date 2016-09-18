const express = require('express');
const config = require('./webpack.config');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');

var app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(
    compiler, {
        hot: true,
        stats: {
            colors: true
        }
    }
));
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