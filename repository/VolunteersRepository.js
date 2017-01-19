var mysql = require('mysql');

var con  = mysql.createPool({
  connectionLimit : process.env.CONNECTIONLIMIT,
  host            : process.env.URL,//'tcfj-rds-db.cimnc2ecuxzw.us-west-2.rds.amazonaws.com',
  user            : process.env.USER,//'awsmaster',
  password        : process.env.PASSWORD//'masterpwd3251',
  database        : process.env.DBNAME//'tfcj_rds_db'
});

var database = {
	getAll : function (){
		return new Promise(function(resolve, reject){
			con.query('SELECT volunteer_id, volunteer_name, created_date FROM Volunteers', function(err, rows, fields) {
			  if (err) return reject(err);
			
			  return resolve(rows);
			});
		})
	}
}

module.exports = database;