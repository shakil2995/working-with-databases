const express = require('express');
const bodyParser = require('body-parser');
var _ = require('lodash');
const app = express();
const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/fruitsDB",()=>{
    console.log("Connected to fruitsDB");
});

const userSchema = new mongoose.Schema({
    name :String,
    rating:Number,
});
const User = mongoose.model("User",userSchema);

const user = new User({name:"tilottoma",rating:5})
// 
// console.log(user);

const fruitSchema = new mongoose.Schema({
    name : String,
    price : Number,
    rating : Number,
})
const Fruit = mongoose.model("Fruit",fruitSchema);
const fruit = new Fruit({
    name:"boroi",
    price:10.5,
    rating:4.3,
})
// user.save()
// fruit.save();
// console.log(user);
// console.log(fruit);
Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    } else{
        fruits.forEach(fruit => {
            console.log(fruit.name);
        })
    }
})