var express = require('express');
var conDB = require('../lib/conDB');
var router = express.Router();


router.get('/', function(req, res, next) {
  conDB.query('SELECT * FROM contact LIMIT 10', function(err, rows, fields) {
  	if (err) {
  		throw err
  	}

  	res.send(rows);
  });
});

router.get('/page/:id', function(req, res, next) {
	var page = (req.params.id * 10) - 10;
	conDB.query('SELECT * FROM contact LIMIT 10 OFFSET '+page, function(err, rows, fields) {
		if (err) {
			throw err
		}
		res.send(rows);
	});
});

router.post('/add', function(req, res, next) {
	var data = req.body;
	conDB.query('INSERT INTO contact (name, email, phone) VALUES ("'+data.name+'", "'+data.email+'", "'+data.phone+'")', function(err, rows, fields) {
		if (err) {
			throw err
		}

		res.send({
			msg: "Contact has been added!"
		});
	});
});

router.put('/update', function(req, res, next) {
	var id = req.body.id;
	var data = req.body;
	conDB.query('UPDATE contact SET name="'+data.name+'", email="'+data.email+'", phone="'+data.phone+'" WHERE id='+id, function(err, rows, fields) {
		if (err) {
			throw err
		}
		res.send({
			msg: "Contact has been updated!"
		});
	});
});

router.delete('/delete/:id', function(req, res, next) {
	var id = req.params.id;
	conDB.query('DELETE FROM contact WHERE id='+id, function(err, rows, fields) {
		if (err) {
			throw err
		}
		res.send({
			msg: "Contact has been deleted!"
		});
	});
});

module.exports = router;