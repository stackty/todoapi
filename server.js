var express = require ('express');
var app = express();
var PORT = process.env.PORT ||3000;
var todos = [{
	id:1,
	description: 'meet mom for lunch',
	completed:false
},{
	id:2,
	description:'go to marker',
	completed: false
},{	id:3,
	description:'go to markert',
	completed: true}];

app.get('/', function(request, response){
	response.send('todo API root');
});
app.get('/todos',function(request,response){
	response.json(todos);
});
app.get('/todos/:id',function(request,response){
	response.send('asking for todo with id of %d',request.params.id);
});
app.listen(PORT,function(){
	console.log('express listening on port %d',PORT);
});