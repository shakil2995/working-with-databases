const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name :String,
    rating:Number,
})
module.exports=mongoose.model("User",userSchema)