var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/TSManager");
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var userSchema = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        trim: true
      },
    password:{
        type: String,
        required: true,
      },
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true
      },
    contact:{
        type:String,
        unique:true
    },
    hash:String,
    salt:String
});

var UserLogin = mongoose.model("userLogins",userSchema);
userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
  };
userSchema.methods.generateJwt = function() {
var expiry = new Date();
expiry.setDate(expiry.getDate() + 7);

return jwt.sign({
                    _id: this._id,
                    email: this.email,
                    name: this.name,
                    exp: parseInt(expiry.getTime() / 1000),
                }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

module.exports = UserLogin