// Pull in required dependencies
var Sequelize = require('sequelize');

var source = {
  localhost: {
       port: 3306,
       host: 'localhost',
       user: 'root',
       password: 'password',
       database: 'burgers_db'
   },
    burgerDB: {
      port: 3300,
  		host: 'us-cdbr-iron-east-03.cleardb.net',
  		user: 'b8293307136d75',
  		password: 'ca5bd9bd',
  		database: 'heroku_f490f2732a34cd1',
  		connectionLimit: 5
    }
};

var selectedSource = source.burgerDB;

var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
    host: selectedSource.host,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});
module.exports = sequelize;

