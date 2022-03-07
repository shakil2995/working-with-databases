const express = require('express');
const bodyParser = require('body-parser');
var _ = require('lodash');
const app = express();
const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/fruitsDB",()=>{
    console.log("Connected to fruitsDB");
});


const fruitSchema = new mongoose.Schema({
    name :{
        type:String,
        required: true,
    },
    price : Number,
    rating : Number,
})
const userSchema = new mongoose.Schema({
    name :String,
    rating:{
       type: Number,
       min:1,
       max:[5,'maximum allowed rating is 5, got {VALUE}'],
       required: true,
    },
    favouriteFruit:fruitSchema,
});




const User = mongoose.model("User",userSchema);


const Fruit = mongoose.model("Fruit",fruitSchema);
const fruit = new Fruit({
    name:"boroi",
    price:10.5,
    rating:4.3,
})
// const Lichu = mongoose.model("Fruit",fruitSchema);
const lichu = new Fruit({
    name:"lichu",
    price:10.5,
    rating:4.3,
})
const user = new User({
    name:"tilottoma2",
    rating:4.2,
    favouriteFruit:lichu,
})
user.save();
// lichu.save();
// user.save();
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
// Fruit.deleteMany({name:"boroi"},err=>{
//     // console.log(err);
// });
// User.updateOne({_id:"622638a98acf0213a960cb28"},{favouriteFruit:lichu});
// mongoose.connection.close();