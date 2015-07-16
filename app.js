var express = require('express');

module.exports = function (port) {
	var app = express();
	
	app.all('*', function (req, res) {
		res.send('<html><h1>Hello friend</h1></html>');
	});
	app.listen(port);
}
