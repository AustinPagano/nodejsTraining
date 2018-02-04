
var express = require('express');
var app = express();

//listen for requests from port 3000
//then callback the function()
app.listen(3000, function() {
	console.log('Server is up and running on port 3000');
});

//expose a get endpoint at the root->"/" of the address domain
//provide a callback to handle the request and a response
app.get('/', function(request, response){
	response.send('Hello World');
});