var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/')));

app.get('/', function(req, res){
	res.render('index.html')
})

app.listen(3004, function(){
	console.log('3000')
})