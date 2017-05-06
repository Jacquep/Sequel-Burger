// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.

// Pull in required dependencies
var mysql = require('mysql');

// // Create the MySQL connection object
var connection;

// if (process.env.DATABASE_URL) {

	
	connection = mysql.createConnection({
  		host: 'us-cdbr-iron-east-03.cleardb.net',
  		user: 'b8293307136d75',
  		password: 'ca5bd9bd',
  		database: 'heroku_f490f2732a34cd1',
  		connectionLimit: 5
});
// } else {
// 	// DB is local on localhost
// 	connection = mysql.createConnection({
// 		port: 3306,
// 		host: 'localhost',
// 		user: 'root',
// 		password: 'Manny111',
// 		database: 'burgers_db'
// 	});
// };

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;

