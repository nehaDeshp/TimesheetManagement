var mongoose = require('mongoose');
NewTasks = mongoose.model('NewTasks');

//Get all Tasks
exports.getAllTasks = function(req, res){
	NewTasks.find(function(err, tasks){	//employees --> response from database ie. all employees
		if(err)
			res.send(err);
		res.json(tasks);	//sends back the response to controller in json format
	});
};

//Get task by id
exports.getTaskByID = function(req, res){
	console.log(req.params);
	NewTasks.findOne({_id:req.params.id},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
};

//Get Task by Name
exports.getTaskByName = function(req, res){
	console.log(req.params);
	NewTasks.find({title:req.params.title},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
};

//Get Task by Activity Type
exports.getTaskByActivityType = function(req, res){
	console.log(req.params);
	NewTasks.find({activityType:req.params.activityType},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
};

//Get Task by Current Status
exports.getTaskByCurrentStatus = function(req, res){
	console.log(req.params);
	NewTasks.find({currentstatus:req.params.currentstatus},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
};

//Get Task by Responsibility
exports.getTaskByResponsibility = function(req, res){
	console.log(req.params);
	NewTasks.find({responsible:req.params.responsible},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
};

//Get Task by task Status
exports.getTaskByTaskStatus = function(req, res){
	console.log(req.params);
	NewTasks.find({taskStatus:req.params.taskStatus},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
};

//Get Task by AssignedTo
exports.getTaskByAssignedTo = function(req, res){
	console.log(req.params);
	NewTasks.find({assignedTo:req.params.assignedTo},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
};

//Create New Task
exports.createNewTask = function(req, res){
	NewTasks.create(req.body, function(err, tasks){	
		//req.body --> requsting the data from the body of the input data. Install body-parser
		if(err)
			return err;
			//res.send(err);
		//res.json(tasks);
		
	});
};

//Delete Task by id
exports.deleteTaskByID = function(req, res){
	//req.params.id --> get the value of id from url
	//_id:req.params.id --> checks the id with db
	NewTasks.findOneAndRemove({_id:req.params.id},function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
	});
};

//Update Task by id
exports.updateTaskByID = function(req, res){
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
};