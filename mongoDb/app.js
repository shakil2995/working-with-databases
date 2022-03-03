const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name :String,
    rating:Number,
    review:String
});
const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    name:"Apple",
    rating:7,
    review:"Pretty good"
    },
    {
        name:"Orange",
        rating:8,
        review:"Pretty good too"
    }
)






