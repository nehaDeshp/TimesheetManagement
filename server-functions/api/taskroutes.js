'use strict';
module.exports = function(app) {
    var links = require('./taskcontroller');
    app.route('/api/gettasks')
        .get(links.getAllTasks);

    app.route('/api/tasks/id/:id')
        .get(links.getTaskByID);
	
    app.route('/api/tasks/title/:title')
        .get(links.getTaskByName);
	
    app.route('/api/tasks/activityType/:activityType')
        .get(links.getTaskByActivityType);
    
    app.route('/api/tasks/currentstatus/:currentstatus')
        .get(links.getTaskByCurrentStatus);
    
    app.route('/api/tasks/responsible/:responsible')
        .get(links.getTaskByResponsibility);

    app.route('/api/tasks/taskStatus/:taskStatus')
        .get(links.getTaskByTaskStatus);
    
    app.route('/api/tasks/assignedTo/:assignedTo')
        .get(links.getTaskByAssignedTo);
    
    app.route('/api/newtasks')
        .post(links.createNewTask);
    
    app.route('/api/tasks/:id')
        .delete(links.deleteTaskByID);
    
    app.route('/api/edittasks/:id')
        .put(links.updateTaskByID);
};