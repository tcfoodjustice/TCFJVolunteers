var express = require('express');
var router = express.Router();
var repository = require('../repository/VolunteersRepository.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	repository.getAll()
		.then(rows => {
			return res.json(rows);
		}).
		catch(err => {
			console.log(err)
			res.status(503)
			res.json({"code" : 503, "message" : "Database Error"})
		})
});

module.exports = router;
