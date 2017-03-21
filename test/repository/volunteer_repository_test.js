var repository = require('../../repository/VolunteersRepository.js')
var assert = require('chai').assert;

describe('VolunteersRepository Tests', function () {
   //make sure to add done ya turkey!
    //to be more clear, done will make sure the asych call returns
    it('count is correct ', function (done) {
        var query = "name" + ":" + "batman";
        var offset = "&offset=" + 0
        repository.getAll()
	        .then(rows => {

	        	assert(rows.length == 2)
	        	done()
	        }).
	       catch(err => {
				console.log(err)
				assert(false)
				done()
			})

    });
});