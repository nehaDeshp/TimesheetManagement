//Import required modules
var express = require('express');
const app=express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to Database
mongoose.connect("mongodb://127.0.0.1/TSManager");

//Import models
var login = require('./server-functions/collections/login');
var calender = require('./server-functions/collections/events');

//Use NPM Modules
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//CORS settings
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});     

app.use(express.static(__dirname + '/src'));

//Listen
app.listen(3000,function(){
    console.log("Server Listening on Port 3000");
})

//Define routes
var login_routes = require('./server-functions/api/loginroutes');
login_routes(app);

var event_routes = require('./server-functions/api/eventroutes');
event_routes(app);


//Export required Modules
module.exports = mongoose;
module.exports = login;
module.exports = calender;