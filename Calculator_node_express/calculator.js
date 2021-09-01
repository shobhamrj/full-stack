const express = require('express');
const bodyParser = require('body-parser');
const { text } = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.post('/', (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send('The result is ' + result);
});



app.get('/bmi', (req, res) => {
    res.sendFile(__dirname + '/bmi.html');
});
app.post('/bmi', (req, res) => {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);
    res.send('BMI: ' + bmi);

});




app.listen(port, () => {
    console.log(`localhost listening at http://localhost:${port}`);
});