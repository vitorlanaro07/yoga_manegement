const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const config = require("./config/config");
const studentRoutes = require('./routes/studentsRoutes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(studentRoutes);

app.listen(config.port, () => {
    console.log("On:", config.url);
})