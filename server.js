//require node dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var app = express();

var PORT = process.env.PORT || 3000;

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


app.listen(PORT, function(){
	console.log("Listening on " + PORT);
});