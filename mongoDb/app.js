const express = require('express');
const bodyParser = require('body-parser');
var _ = require('lodash');
const app = express();
const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/fruitsDB",()=>{
    console.log("Db Connected");
});

const userSchema = new mongoose.Schema({
    name :String,
    rating:Number,
});
const User = mongoose.model("User",userSchema);

    const user = new User({name:"newmelon",rating:5})
    user.save()
    console.log(user);


// const fruitSchema = new mongoose.Schema({
//     name :String,
//     rating:Number,
//     review:String
// });
// const Fruit = mongoose.model("Fruit",fruitSchema);

// const fruit = new Fruit({

//     name:"Apple",
//     rating:7,
//     review:"Pretty good"
//     },
//     {
//         name:"Orange",
//         rating:8,
//         review:"Pretty good too"
//     }
// );
// fruit.save();






