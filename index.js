const express = require("express");
const path = require('path');
const ejs = require("ejs");
const config = require("./config/config");
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


var students = [
    { name: 'tobi', email: 'tobi@learnboost.com' },
    { name: 'loki', email: 'loki@learnboost.com' },
    { name: 'jane', email: 'jane@learnboost.com' }
  ];


app.get("/", (req, res) => {
    res.render('index', {
        title: 'Testing'
    });
})

app.listen(config.port, () => {
    console.log("is open");
})