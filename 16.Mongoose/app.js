const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Great!"
});

const orange = new Fruit({
    name: "Orange",
    rating: 4,
    review: "Sour!"
});
const banana = new Fruit({
    name: "banana",
    rating: 6,
    review: "its so so !"
});
// Fruit.insertMany([orange, banana], (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("Sucessfully added!");
// });
// fruit.save();
Fruit.find((err, fruits)=>{
    if(err) {
        console.log(err);
    }
    else {
        fruits.forEach(fruit => {
            console.log(fruit.name);    
        });
        
    }
});