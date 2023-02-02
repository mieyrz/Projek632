const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user');

router.get('/info',(req,res)=>{
    User.find({})
    .then(users=>{res.json({users})})
    .catch(err=>res.status(500).json({error:"Something went wrong"}));
});


//A1
router.post('/login',async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body)
    try{
        const user = await User.findOne({email})
        const valid = await bcrypt.compare(password,user.password)
        if(!valid) 
            res.status(404).json({error:"Wrong credentials"})
        else
            res.json({message:"Successfully login",id:user._id});
    }catch(err){
        res.status(500).json({error:"Wrong account"});
    }
   
    
    

});

//A1
router.post('/register',async(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    try{
        const user = await User.findOne({name})
        if(user)
            res.status(401).json({error:"Name is already taken"})
        else{
            new User({name,email,password}).save()
            res.json({message:"Account registered"})
        }
    }
    catch{
        res.status(500).json({error:"Something went wrong"})
    }
});

//A2
router.route('/:id')
.get(async(req,res)=>{
    const id = req.params.id;
    User.findById(id)
    .orFail()
    .then(user=>res.json({user}))
    .catch(err=>{res.status(404).json({error:"Invalid User"})});
})
.put(async(req,res)=>{
     
    try{
        const id = req.params.id;
        const password = req.body.password
        const user = await User.findById(id)
        if(user)
        {
        user.password = password;
        user.save()
        res.json({message:"Password changed"});
        }
        else{
            res.status(405).json({error:"Failed to update"});
        }
    }
    catch(err){
        res.status(500).json({error:"Something went wrong"})
    }

});

module.exports = router;