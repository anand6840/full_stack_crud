const mongoose = require("mongoose");

const noteSchema= mongoose.Schema({
    // note:{type:String, required: true},
    category:{type:String, required: true},
    // user:{type:String, required: true},
    title:{type:String, required: true},
    userID:{type:String, required: true}
})

const Notemodel=mongoose.model(`notes`, noteSchema);


module.exports = {Notemodel};