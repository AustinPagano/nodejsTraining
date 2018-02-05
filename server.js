require('dotenv').config();
var PORT = process.env.PORT;

var express = require('express');
var app = express();

//listen for requests from port 3000
//then callback the function()
app.listen(PORT, function() {
	console.log(`Server is up and running on port ${PORT}`);
});

//expose a get endpoint at the root->"/" of the address domain
//provide a callback to handle the request and a response
app.get('/', function(request, response){
	response.send('Hello World');
});

//Create GET Endpoint

const MongoClient = require('mongodb').MongoClient;
const MONGO_URI = 'mongodb://127.0.0.1:27017/ng';

app.get('/users', function(request, response){
	MongoClient.connect(MONGO_URI, function(err, db){
		if(err){
			response.send(`Error fetching all users => ${err}`);
		}
		db.collection('users').find().toArray(function(err, docs){
			response.send(docs);
		});
	});
});

//Create promise chaining demonstration

app.get('/promise', function(req, res){
	asyncPromise1()
	.then(function(result1){
		return asyncPromise2();
	})
	.then(function(result2){
		res.send(result2);
	})
	.catch(function(error){
		consple.log('we have an error =>', error);
	});
})

function asyncPromise1(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve("hello from Promise 1");
		}, 4000);
	});
}

function asyncPromise2(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve("hello from Promise 2");
		}, 4000)
	});
}