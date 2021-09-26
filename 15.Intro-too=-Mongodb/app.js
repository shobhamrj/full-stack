const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url = "mongodb://localhost:27017";
const dbName = "fruitsDB";
const client = new MongoClient(url, {useNewUrlParser: true});
client.connect((err)=> {
    assert.equal(null, err);
    console.log("Connected to server !");
    const db = client.db(dbName);
    insertDocuments(db, ()=>{
        client.close();
    });
}); 



const insertDocuments = (db, callback)=>{
    const collection = db.collection("fruits");
    collection.insertMany([
        {
            name: "apple",
            score: 8, 
            review: "Great!" 
        },
        {
            name: "orange",
            score: 6,
            review: "Sour!"

        },
        {
            name: "banana",
            score: 9,
            review: "Great stuff!"

        }
    ]
    // , function(err, result) {
    //     assert.equal(err, null);
    //     assert.equal(3, result.result.n);
    //     assert.equal(3, result.ops.length);
    //     console.log("Inserted 3 document");
    //     callback(result);
    // });
    )};