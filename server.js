var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var login = require('./server-functions/collections/login');
const app=express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//CORS settings
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });       

app.use(express.static(__dirname + '/src'));
app.listen(3000,function(){
    console.log("Server Listening on Port 3000")
})

/**
 *          SIGN UP
 * */
var signup = app.post('/signup', function(req,res){
    console.log(req.body);
    var usr_inst = new login({
        "username":req.body.username,
        "password":req.body.password,
        "fname":req.body.first_name,
        "lname":req.body.last_name,
        "email":req.body.email_id,
        "contact":req.body.contact
    });
    usr_inst.save(function(err){
        if(err)
            return err;
        else
            console.log("saved!");
    })
});

/**
 *              SIGN IN
 */
app.get('/signin/:username',function(req,res){
    console.log("Called Server",req.params);
    var params = {
        "username":req.params.username
    }
    var data;
    login.findOne({username:params.username},function(err,user){
        if(err) 
            throw err;
        res.json(user);  
    });
});