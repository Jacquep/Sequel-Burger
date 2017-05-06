//require node dependencies
var express = require('express');
var app = express();
var path = require('path');
app.set('port',process.env.PORT || 3000);
app.use(express.static(process.cwd() + '/public'));

var methodOverride = require('method-override');
app.use(methodOverride("_method"));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require('express-handlebars');
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var routes = require('./controllers/burgers_controller.js');
// app.use('/', routes);


// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================

require('./routing/api-routes.js')(app); 
require('./routing/html-routes.js')(app);


app.listen(app.get('port'), function(){
	console.log('Listening on ' + app.get('port'));
});