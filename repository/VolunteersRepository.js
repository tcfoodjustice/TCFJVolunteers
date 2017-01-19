var mysql = require('mysql');

var con  = mysql.createPool({
  connectionLimit : 10,
  host            : 'tcfj-rds-db.cimnc2ecuxzw.us-west-2.rds.amazonaws.com',
  user            : 'awsmaster',
  password        : 'masterpwd3251',
  database        : 'tfcj_rds_db'
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