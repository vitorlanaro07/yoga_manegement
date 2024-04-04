const express = require('express');
const router = express.Router();
const studentModel = require('../models/studentModel');



router.get("/", (req, res) => {
    res.render('index', {
        title: 'Index | Yoga Management',
        additionalCss: '/css/index.css'
    });
})

router.get("/students", (req, res) => {
    res.render('students', {
        title: 'Students | Yoga Management',
        additionalCss: '/css/student.css',
        students: studentModel.students
    });
})

router.get('/student/json/:id', (req, res) => {
    let student = studentModel.students[req.params.id - 1];
    res.json({
        name: student.name,
        birthdate: student.birthdate,
        genre : student.genre,
        status : student.status,
        email: student.email,
        phone : student.phone,
        city : student.city,
        street : student.street,
        state : student.state,
        number : student.number,
        spine : student.spine,
        surgery : student.surgery,
        pain : student.pain,
        hypertension : student.hypertension,
        heartDisease : student.heartDisease,
        hearingIssues : student.hearingIssues,
        labyrinthitis : student.labyrinthitis,
        alreadyPracticed : student.alreadyPracticed,
        anyExercise : student.anyExercise,
        observation : student.observation
    })
})

router.get('/student/:id', (req, res) => {
    let student = studentModel.students[req.params.id - 1];
    res.render('studentRead', {
        title: `${student.name.toUpperCase()} | Yoga Management`,
        additionalCss: '/css/studentRead.css',
        id: req.params.id
    })
})

router.post("/student/:id", (req, res) => {
    let student = studentModel.students[req.params.id - 1];
    student.name = req.body.name;
    student.birthdate = req.body.birthdate;
    student.email = req.body.email;
    student.phone = req.body.phone;
    student.genre = req.body.genre;
    student.status = req.body.status;
    student.city = req.body.city;
    student.street = req.body.street;
    student.state = req.body.state;
    student.spine = req.body.spine;
    student.surgery = req.body.surgery;
    student.pain = req.body.pain;
    student.hypertension = req.body.hypertension;
    student.heartDisease = req.body.heartDisease;
    student.hearingIssues = req.body.hearingIssues;
    student.labyrinthitis = req.body.labyrinthitis;
    student.alreadyPracticed = req.body.alreadyPracticed;
    student.anyExercise = req.body.anyExercise;
    student.observation = req.body.observation;

    res.redirect('../students');
})

router.post("/students", (req, res) => {
    studentModel.lenght++;
    // console.log(req.body);
    var newStudent = {
        id: studentModel.lenght,
        name: req.body.name,
        genre: req.body.genre,
        status: req.body.status
    }
    studentModel.students.push(newStudent);
    res.redirect('students');
    // console.log('Student Posted!');
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

