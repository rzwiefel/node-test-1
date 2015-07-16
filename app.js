var express = require('express');

module.exports = function (port) {
	var app = express();
	
	app.all('*', function (req, res) {
		res.send('<html><h1>Hello friend</h1><h2>Welcome to SlackException</h2></br></br><h3>' + new Date().toISOString() + '</h3></html>');
	});
	console.log('Starting server on port ' + port);
	app.listen(port);

}
