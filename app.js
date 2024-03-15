const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors')
const config = require("./config/config");
const studentModel = require('./models/studentModel');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());



app.get('/student', (req, res, next) => {
    res.json(studentModel.students);
}) 

app.get('/*', (req, res, next) => {
    
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    next();
})

// app.get('/', (req, res) => {
//     res.json(studentModel.students);
// }) 

app.listen(config.port, () => {
    console.log("On:", config.url);
})