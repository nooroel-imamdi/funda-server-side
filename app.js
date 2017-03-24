// Modules
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();




// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

// Global Vars
app.use(function(req, res, next){
	res.locals.errors = null;
	next();
})

app.get('/', function (req, res) {
  request(host, function (error, response, body) {
    var data = JSON.parse(body)
    res.render('index.ejs', {residences: data})
  });
})

app.get('/residences/:id', function (req, res) {
  request(host + req.params.id, function (error, response, body) {
    var data = JSON.parse(body)
    res.render('detail.ejs', {residence: data})
  });
})


var server = app.listen(3000,function(){
	console.log('Server Started on Port 3000');
});