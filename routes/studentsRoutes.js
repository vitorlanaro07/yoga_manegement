const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const anamneseModel = require('../models/anamneseModel');
const anamneseController = require('../controllers/anamneseController');
const dateUtil = require('../utils/date');
const date = require('../utils/date');


router.get("/", (req, res) => {
    res.render('index', {
        title: 'Index | Yoga Management',
        additionalCss: '/css/index.css'
    });
})

router.get("/students", async (req, res) =>  {
    try{
        result =  await studentController.fetchAllStudents();
        // console.log(result);
        res.render('students', {
            title: 'Students | Yoga Management',
            additionalCss: '/css/student.css',
            students: result[0]
        });
    } catch {
        
    }

});

router.get('/student/:id', async (req, res) => {
    try{
        studentResult = await studentController.fetchByID(req.params.id);        
        anamneseResult = await anamneseController.fetchAnamneseByID(req.params.id);
        // console.log(studentResult[0][0].Birthdate, "oii");
        res.render('studentRead', {
                title: `Yoga Management`,
                additionalCss: '/css/studentRead.css',
                id: studentResult[0][0].StudentID,
                name : studentResult[0][0].Name,
                age : dateUtil.getAge(studentResult[0][0].Birthdate),
                birthdate : dateUtil.getBirthdateFormated(studentResult[0][0].Birthdate),
                email : studentResult [0][0].Email,
                genre : studentResult[0][0].Genre,
                studentStatus : studentResult[0][0].StudentStatus,
                telephone : studentResult[0][0].Telephone,
                city : studentResult[0][0].City,
                street : studentResult[0][0].Street,
                state : studentResult[0][0].State,
                number : studentResult[0][0].Number,
                spineIssues : anamneseResult[0][0].SpineIssues,
                spineDescription : anamneseResult[0][0].SpineDescription,
                surgery : anamneseResult[0][0].Surgery,
                surgeryDescription : anamneseResult[0][0].SurgeryDescription,
                pain : anamneseResult[0][0].Pain,
                painDescription : anamneseResult[0][0].PainDescription,
                hypertension : anamneseResult[0][0].Hypertension,
                heartDisease : anamneseResult[0][0].HeartDisease,
                hearingIssues : anamneseResult[0][0].HearingIssues,
                labyrinthitis : anamneseResult[0][0].Labyrinthitis,
                alreadyPracticed : anamneseResult[0][0].AlreadyPracticed,
                practiceAnyExercise : anamneseResult[0][0].PracticeAnyExercise,
                exerciseDescription : anamneseResult[0][0].ExerciseDescription,
                observation : anamneseResult[0][0].Observation,
                observationDescription : anamneseResult[0][0].ObservationDescription
            });
    } catch{
    }
})

router.post("/student/:id", (req, res) => {
    studentUpdated = {
        id : req.params.id,
        name : req.body.name,
        birthdate : req.body.birthdate,
        email : req.body.email,
        telephone : req.body.telephone,
        genre : req.body.genre,
        status : req.body.status,
        city : req.body.city,
        street : req.body.street,
        state : req.body.state,
        number : req.body.number
    }
    anamneseUpdated = {
        id : req.params.id,
        spine: req.body.spine,
        spineDescription : req.body.spineDescription,
        surgery : req.body.surgery,
        surgeryDescription : req.body.surgeryDescription,
        pain : req.body.pain,
        painDescription : req.body.painDescription,
        hypertension : req.body.hypertension,
        heartDisease : req.body.heartDisease,
        hearingIssues : req.body.hearingIssues,
        labyrinthitis : req.body.labyrinthitis,
        alreadyPracticed : req.body.alreadyPracticed,
        practiceAnyExercise : req.body.practiceAnyExercise,
        exerciseDescription : req.body.exerciseDescription,
        observation : req.body.observation,
        observationDescription : req.body.observationDescription
    }

    studentController.update(studentUpdated);
    anamneseController.update(anamneseUpdated);

    res.redirect('../students');
})

router.post('/remove/:id', (req, res) => {
    studentID = req.params.id;
    studentController.delete(studentID);
    anamneseController.delete(studentID);
})

router.post("/students", async (req, res) => {
    console.log(req.body.birthdate);
    newStudent = {
        name : req.body.name,
        age : dateUtil.getAge(req.body.birthdate),
        birthdate : req.body.birthdate,
        email : req.body.email,
        telephone : req.body.telephone,
        genre : req.body.genre,
        studentStatus : req.body.studentStatus,
        city : req.body.city,
        street : req.body.street,
        state : req.body.state,
        number : req.body.number,
        creationTime : dateUtil.getDateTime()
    }
    newAnamnese = {
        spineIssues: req.body.spineIssues,
        spineDescription : req.body.spineDescription,
        surgery : req.body.surgery,
        surgeryDescription : req.body.surgeryDescription,
        pain : req.body.pain,
        painDescription : req.body.painDescription,
        hypertension : req.body.hypertension,
        heartDisease : req.body.heartDisease,
        hearingIssues : req.body.hearingIssues,
        labyrinthitis : req.body.labyrinthitis,
        alreadyPracticed : req.body.alreadyPracticed,
        practiceAnyExercise : req.body.practiceAnyExercise,
        exerciseDescription : req.body.exerciseDescription,
        observation : req.body.observation,
        observationDescription : req.body.observationDescription,
        creationTime : dateUtil.getDateTime()
    }

    try{
        anamneseController.create(newAnamnese);
        setTimeout(async ()  => {
            anamneseID =  await anamneseController.getID(newAnamnese.creationTime);
            newStudent.anamneseID = anamneseID[0][0].AnamneseID;
            studentController.create(newStudent);
            res.redirect('students');
        },50)
    } catch (err) {
        res.redirect('students');

    }


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

