const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {
    const apiKey = "9f0c8ba4d8a7a0ebfae41f4473f4fb44";
    const query = req.body.cityName;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&APPID=" + apiKey + "&units=metric";
    https.get(url, function(response) {
        console.log(response.statusCode);
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            res.write("<h1>Temperature is " + temp + "degree Celcius. " + " </h1>");
            res.write("<h3>The weather is currently " + weatherDescription + "</h3>");
            res.send();
        });
    });
});

app.listen(8080, function() {
    console.log("Server is runing on port 8080");
});