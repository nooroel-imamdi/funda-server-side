// Modules
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var apiUrl = 'http://funda.kyrandia.nl/feeds/Aanbod.svc/json/';
var apiKey = '271175433a7c4fe2a45750d385dd9bfd';
var searchKey = '/?type=koop&zo=/amsterdam/tuin/&page=1&pagesize=25';

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

// Global Vars
// app.use(function(req, res, next){
// 	res.locals.errors = null;
// 	next();
// })

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

var server = app.listen(3000,function(){
	console.log('Server Started on Port 3000');
});