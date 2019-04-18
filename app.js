var express = require('express');

var logger = require('morgan');
var bodyParser = require('body-parser');

var cors = require('cors');
var story = require('./app/routes/story');

var connection = require('./config/db');
var app = express();

var corsOptions = {
  origin: /\.api.kumparan\.com$/
}
app.use(cors(corsOptions));

connection.init();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

story.configure(app, cors());

module.exports = app;
