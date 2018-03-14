var mongoose = require('mongoose');
UserLogin = mongoose.model('userLogin');

exports.userSignUp = function(req,res){
    console.log(req.body);
    var usr_inst = new UserLogin({
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
};

/**
 * 
 * @param {*} req = UserData 
 * @param {*} res = 200 OK Status Posted to Database
 */
exports.validateLogin = function(req,res){
    console.log("Called Server",req.params);
    var params = {
        "username":req.params.username
    }
    var data;
    UserLogin.findOne({username:params.username},function(err,user){
        if(err) 
            throw err;
        res.json(user);  
    });
};