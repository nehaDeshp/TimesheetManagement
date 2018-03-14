var mongoose = require('./db_connect');

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
    }
});

var UserLogin = mongoose.model('userLogin',userSchema);
module.exports = UserLogin