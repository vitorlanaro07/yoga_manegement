const express = require("express");
const path = require('path');
const ejs = require("ejs");
const config = require("./config/config");
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


var students = [
    { id: 1, name: 'fulano', genre: 'male' , status: 'active'},
    { id: 2, name: 'ciclano', genre: 'female', status: 'inactive' },
    { id: 3 ,name: 'beltrano', genre: 'male', status: 'interested' }
  ];


app.get("/", (req, res) => {
    res.render('index', {
        title: 'Testing',
        students: students
    });
})

app.listen(config.port, () => {
    console.log("is open");
})