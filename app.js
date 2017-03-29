// Modules
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var path = require('path');
var ngrok = require('ngrok');
var compression = require('compression');
// var CleanCSS = require('clean-css');

require('dotenv').config()

var app = express();

// .env
var apiUrl = process.env.API_URL;
var apiKey = process.env.API_KEY;
var searchKey = process.env.SEARCH_KEY;

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

// Compression
app.use(compression());

// Clean CSS
// new CleanCSS().minify(['./css/style.css']);

app.get('/', function (req, res) {
  request(apiUrl + apiKey + searchKey, function (error, response, body) {
    var data = JSON.parse(body)
    res.render('index.ejs', {residences: data})
  });
})

app.get('/residences/:GroupByObjectType', function (req, res, GroupByObjectType) {
  request(apiUrl + 'detail/' + apiKey + '/koop/' + req.params.GroupByObjectType, function (error, response, body) {
    console.log(GroupByObjectType);
    var data = JSON.parse(body)
    res.render('detail.ejs', {residence: data})
  });
})

var server = app.listen(3004,function(){
	console.log('Server Started on Port 3004');
});