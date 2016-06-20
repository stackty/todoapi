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
app.get('/todos/:id',function(req,res){
	var todoid = req.params.id;
	//iterate over todo's aray to find a match
	var matchedToDo;
	for (i=0;i<todos.length;i++){
		if (todoid == todos[i].id){
			matchedToDo = todos[i]
		}
	}
	if (matchedToDo){
		res.json(matchedToDo);
	}else{
	response.status(404).send();}
});
app.listen(PORT,function(){
	console.log('express listening on port %d',PORT);
});