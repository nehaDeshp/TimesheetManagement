var express=require('express');

const app = express();

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

module.exports = signup;
