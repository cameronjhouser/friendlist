var express = require('express');
var app = express();
var http = require('http').Server(app);

// When we get a req for a static file, response with that folder and to 
// in it.
app.use(express.static(__dirname + '/public'));

// Request on the root route
// res = response, req = request 
app.get('/', function(req, res){
	// __ makes it dinamic 
	res.sendfile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3001, function(){
	console.log("Hey man, Im listening on the *3001");
});

