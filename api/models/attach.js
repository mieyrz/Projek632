"use strict";
const mongoose = require('mongoose');

const attachSchema  = new mongoose.Schema({
    path:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:'project'
    }
});

const Attachment = mongoose.model('attachments',attachSchema);
module.exports = Attachment;