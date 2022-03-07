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

const user = new User({name:"newmelon",rating:5})
user.save()
// console.log(user);

const fruitSchema = new mongoose.Schema({
    name : String,
    price : Number,
    rating : Number,
})
const Fruit = mongoose.model("Fruit",fruitSchema);
const fruit = new Fruit({
    name:"Melon",
    price:10.5,
    rating:4.3,
})
fruit.save();
console.log(user);
console.log(fruit);

