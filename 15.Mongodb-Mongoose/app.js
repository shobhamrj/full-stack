const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url = "mongodb://localhost:27017";
const dbName = "fruitsDB";
const client = new MongoClient(url, {useNewUrlParser: true});
client.connect((err)=> {
    assert.equal(null, err);
    console.log("Connected to server !");
    const db = client.db(dbName);


     client.close();
});