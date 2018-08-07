var mysql = require('mysql');

var conDB = mysql.createConnection({
	host		: "localhost",
	user		: "root",
	password	: "",
	database	: "crudDB"
});

module.exports = conDB;