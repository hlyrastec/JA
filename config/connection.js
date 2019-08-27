const mysql = require('mysql');
const dbconfig = require('./database');

const pool  = mysql.createPool({
	connectionLimit : 10,
	host : dbconfig.connection.host,
	port : dbconfig.connection.port,
	user : dbconfig.connection.user,
	password : dbconfig.connection.password,
	database : dbconfig.database
});

const db = async (query) => {
	return new Promise(async (resolve, reject) => {
		pool.getConnection((err, connection) => {
		    connection.query(query, (err, rows) => {
				// connection.end();
		        connection.release();
		        if(!err){
		        	resolve(rows)
		        } else {
		        	reject(err);
		        };
		    });
		});
	});
};

db("UPDATE lfsdb.users set support='disconnected'");

module.exports = db;