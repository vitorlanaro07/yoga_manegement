const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const config = require("./config/config");
// const studentRoutes = require('./routes/studentsRoutes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'script')));
app.use(express.static(path.join(__dirname, 'views')));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// app.use(studentRoutes);

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

// app.use((req, res) => {
//     res.status(404);
//     res.render('404',{
//         title: "Error 404"
//     })
// })

app.listen(config.port, () => {
    console.log("On:", config.url);
})