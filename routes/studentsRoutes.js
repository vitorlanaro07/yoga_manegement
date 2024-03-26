const express = require('express');
const router = express.Router();
const studentModel = require('../models/studentModel');



router.get("/", (req, res) => {
    res.render('index', {
        title: 'Yoga Management',
        additionalCss: ''
    });
})

router.get("/students", (req, res) => {
    res.render('students', {
        title: 'Students | Yoga Management',
        additionalCss: '',
        students: studentModel.students
    });
})


router.get('/student/:id', (req, res) => {
    let student = studentModel.students[req.params.id - 1];
    console.log(student);
    res.render('studentRead', {
        title: `${student.name.toUpperCase()} | Yoga Management`,
        additionalCss: '/css/studentRead.css'
    });
})


router.post("/students", (req, res) => {
    studentModel.lenght++;
    var newStudent = {
        id: studentModel.lenght,
        name: req.body.name,
        genre: req.body.genre,
        status: req.body.status
    }
    studentModel.students.push(newStudent);
    res.redirect('students');
    console.log('Student Posted!');
})

router.get('/notifications',(req, res) => {
    res.render('notifications', {
        title: "Notifications | Yoga Management",
        additionalCss: ''
    })
})

router.get('/payments', (req, res) => {
    res.render('payments', {
        title: "Payments | Yoga Management",
        additionalCss: ""
    })
})

module.exports = router;

