var express = require ('express');
var app = express();
var PORT = process.env.PORT ||3000;

app.get('/', function(request, response){
	response.send('todo API root');
})

app.listen(PORT,function(){
	console.log('express listening on port %d',PORT);
})