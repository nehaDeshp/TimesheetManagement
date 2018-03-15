var mongoose = require('./db_connect');

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

module.exports=NewTasks;