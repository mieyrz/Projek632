const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
name:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true,
    unique:[ true, "this email is already used"],
},
password:{
    type: String,
    required: true,
   
},
});



userSchema.pre('save',function(next){
    let user=this;
    if(!user.isModified("password")){
        next();
    }else{
        bcrypt.genSalt(10,function(err,salt){
            if(err) return next (err)
            bcrypt.hash(user.password,salt,function(err,hash){
                if(!err){
                    user.password = hash;
                    next();
                }
            });
        })
    }
})

const user = new mongoose.model('user',userSchema);
module.exports = user;