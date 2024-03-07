const express = require('express');
const router = express.Router();
const studentModel = require('../models/studentModel');

router.get("/", (req, res) => {
    res.render('student', {
        title: 'Yoga Management',
        students: studentModel.students
    });
})

router.post('/', (req, res) => {
    studentModel.lenght++;
    var newStudent = {
        id: studentModel.lenght,
        name: req.body.name,
        genre: req.body.genre,
        status: req.body.status
    }
    studentModel.students.push(newStudent);
    res.redirect('/');
    console.log('Student Posted!');
})

router.get('/student/:id', (req, res) => {
    let student = studentModel.students[req.params.id - 1];
    console.log(student);
    res.send(student);
})

module.exports = router;

