const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "This is a required field !"]

    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Great!"
});

// const orange = new Fruit({
//     name: "Orange",
//     rating: 4,
//     review: "Sour!"
// });
// const banana = new Fruit({
//     name: "banana",
//     rating: 6,
//     review: "its so so !"
// });
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
        mongoose.connection.close();
        fruits.forEach(fruit => {
            console.log(fruit.name);    
        });
    }
});
// Fruit.updateOne({_id: "6153638297da152f63d0a35f"},{name: "Peach"}, (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Updated!");
//     }
// });
Fruit.deleteOne({_id: "6150db1826ab282bec23345a"}, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("Updated!");
    }
});
