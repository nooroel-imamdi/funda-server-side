var express = require('express');
var request = require('requestb');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');

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

app.get('/paintings', function (req, res) {
  request(host, function (error, response, body) {
    var data = JSON.parse(body)
    res.render('index.ejs', {movies: data})
  });
})

app.get('/paintings/:id', function (req, res) {
  request(host + req.params.id, function (error, response, body) {
    var data = JSON.parse(body)
    res.render('detail.ejs', {movie: data})
  });
})

// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

var residences = [
	{
		name: 'Pizzahotel',
		city: 'Amsterdam'
	},
	{
		name: 'Tuinvilla',
		city: 'Amsterdam'
	},
	{
		name: 'Appartement',
		city: 'Rotterdam'
	}
]

app.get('/', function(req, res){
	res.render('index', {
		title: 'Funda app',
		residences: residences
	});
});

app.post('/residences/add', function(req, res){

	req.checkBody('name', 'Naam is een verplicht veld').notEmpty();
	req.checkBody('city', 'Plaatsnaam is een verplicht veld').notEmpty();

	var errors = req.validationErrors();

	if(errors){

		res.render('index', {
			title: 'Funda app',
			residences: residences,
			errors: errors
		});

		console.log('ERRORS');

	} else{
		var newResidence = {
			name: req.body.name,
			city: req.body.city
		}

		console.log('SUCCES');
	}

	console.log(newResidence);
});

var server = app.listen(3000,function(){
	console.log('Server Started on Port 3000');
});