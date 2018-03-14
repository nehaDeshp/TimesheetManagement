var express = require('express');// Fast, unopinionated, minimalist web framework for node.
var app = express();	// Initiate Express Application
var bodyParser = require('body-parser');	// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();

  });
var mongoose = require('mongoose');	// Node Tool for MongoDB
mongoose.connect('mongodb://localhost/NewTasks');	//connect to database

// var NewLinks = new Schema({	//create schema and export the model
// 	name:String,
// 	Link:String
	
// });

// var NewTasksattachments = mongoose.model('NewTasksattachments', mongoose.Schema({	//create schema and export the model
// 	name:String,
// 	fileAttachment:String
	
// }));


var NewTasks = mongoose.model('NewTasks', mongoose.Schema({	//create schema and export the model
	title: String,
	activityType: String,
	description: String,
	pactivityType: String,
	currentstatus: String,
	responsible: String,
	assignedTo: String,
	NewlinksContacts:String,
	NewlinksCompany:String,
	NewlinksProjects:String,
	NewTasksattachments:String,
	taskStatus:String
}));



// Middleware
//app.use(bodyParser.urlencoded({extended:true}));	// parse application/x-www-form-urlencoded
app.use(bodyParser.json());	// parse application/json
app.use(express.static(__dirname + '/client'));	// Provide static directory for frontend

//Default Api
/*app.get('/', function(req, res){
	console.log("Server running");
}); */

//Api to get all Tasks
app.get('/api/gettasks', function(req, res){
	NewTasks.find(function(err, tasks){	//employees --> response from database ie. all employees
		if(err)
			res.send(err);
		res.json(tasks);	//sends back the response to controller in json format
	});
});

//Api to get task by id
app.get('/api/tasks/id/:id', function(req, res){
	console.log(req.params);
	NewTasks.findOne({_id:req.params.id},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
});


app.get('/api/tasks/title/:title', function(req, res){
	console.log(req.params);
	NewTasks.find({title:req.params.title},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
});

app.get('/api/tasks/activityType/:activityType', function(req, res){
	console.log(req.params);
	NewTasks.find({activityType:req.params.activityType},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
});

app.get('/api/tasks/currentstatus/:currentstatus', function(req, res){
	console.log(req.params);
	NewTasks.find({currentstatus:req.params.currentstatus},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
});

app.get('/api/tasks/responsible/:responsible', function(req, res){
	console.log(req.params);
	NewTasks.find({responsible:req.params.responsible},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
});

app.get('/api/tasks/taskStatus/:taskStatus', function(req, res){
	console.log(req.params);
	NewTasks.find({taskStatus:req.params.taskStatus},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
});

app.get('/api/tasks/assignedTo/:assignedTo', function(req, res){
	console.log(req.params);
	NewTasks.find({assignedTo:req.params.assignedTo},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
});
//Api to create New Task
app.post('/api/newtasks', function(req, res){
	NewTasks.create(req.body, function(err, tasks){	
		//req.body --> requsting the data from the body of the input data. Install body-parser
		if(err)
			return err;
			//res.send(err);
		//res.json(tasks);
		
	});
});

//Api to delete Task by id
app.delete('/api/tasks/:id', function(req, res){
	//req.params.id --> get the value of id from url
	//_id:req.params.id --> checks the id with db
	NewTasks.findOneAndRemove({_id:req.params.id},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
});

//Api to update Task by id
app.put('/api/edittasks/:id', function(req, res){
	var query = {

		title: req.body.title,	
		activityType: req.body.activityType,
		description: req.body.description,
		pactivityType: req.body.pactivityType,
		currentstatus: req.body.currentstatus,
		responsible: req.body.responsible,
		assignedTo:req.body.assignedTo,
		NewlinksContacts:req.body.NewlinksContacts,
		NewlinksCompany:req.body.NewlinksCompany,
		NewlinksProjects:req.body.NewlinksProjects,
		NewTasksattachments:req.body.NewTasksattachments,
		taskStatus:req.body.taskStatus,
	
	};
	NewTasks.findOneAndUpdate({_id:req.params.id}, query, function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
});

// Start Server: Listen on port 3000
app.listen(3000, function(){
	console.log('Server is running on port 3000')
});

//module.exports = Task;
