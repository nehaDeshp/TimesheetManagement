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
    return UserLogin.findOne({username:req.body.username,password:req.body.password},function(err,user){
        if(err) 
            throw err;
        console.log(user);
        res.json(user);  

    });
};