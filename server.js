var express = require ('express');
var app = express();
var PORT = process.env.PORT ||3000;

app.get('/', function(request, response){
	response.send('Hey Tanya');
})

app.listen(PORT,function(){
	console.log('express listening on port %d',PORT);
})