const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res) {
    res.send("HOME!");
});

app.get("/about", function(req, res) {
    res.send("ABOUT!");
});

app.get("/email", function(req, res) {
    res.send("shobham.rajak@gmail.com!");
});

app.get("/abc", function(req, res) {
    res.send("new!");
});

app.listen(port, function() {
    console.log("server started");
});