const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const anamneseModel = require('../models/anamneseModel');
const anamneseController = require('../controllers/anamneseController');


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
 

    // res.send(stu[0])
    

});

// router.get('/student/json/:id', (req, res) => {
//     let student = studentModel.students[req.params.id];
//     res.json({
//         name: student.name,
//         birthdate: student.birthdate,
//         genre : student.genre,
//         status : student.status,
//         email: student.email,
//         phone : student.phone,
//         city : student.city,
//         street : student.street,
//         state : student.state,
//         number : student.number,
//         spine : student.spine,
//         surgery : student.surgery,
//         pain : student.pain,
//         hypertension : student.hypertension,
//         heartDisease : student.heartDisease,
//         hearingIssues : student.hearingIssues,
//         labyrinthitis : student.labyrinthitis,
//         alreadyPracticed : student.alreadyPracticed,
//         anyExercise : student.anyExercise,
//         observation : student.observation
//     })
// })

function getDataFormated(date){
    birthdateFromStudent = new Date(date).toLocaleDateString().split("/");
        
    if (birthdateFromStudent[0].length == 1){
        birthdateFromStudent[0] = "0" + birthdateFromStudent[0];
    }

    if (birthdateFromStudent[1].length == 1){
        birthdateFromStudent[1] = "0" + birthdateFromStudent[1];
    }

    dataFormated = birthdateFromStudent[2] + "-" + birthdateFromStudent[0] + "-" + birthdateFromStudent[1];
    
    return dataFormated;
}

router.get('/student/:id', async (req, res) => {
 
    try{
        // console.log("Testing fetch, id: ", req.params.id);
        studentResult = await studentController.fetchByID(req.params.id);        
        anamneseResult = await anamneseController.getAnamneseByID(req.params.id);
        

        res.render('studentRead', {
                title: `Yoga Management`,
                additionalCss: '/css/studentRead.css',
                id: studentResult[0][0].StudentID,
                name : studentResult[0][0].FirstName,
                lastName : studentResult[0][0].LastName,
                age : studentResult[0][0].Age,
                birthday : getDataFormated(studentResult[0][0].Birthday),
                genre : studentResult[0][0].Genre,
                email : studentResult [0][0].Email,
                telephone : studentResult[0][0].Telephone,
                city : studentResult[0][0].City,
                street : studentResult[0][0].Street,
                state : studentResult[0][0].State,
                number : studentResult[0][0].Number,
                studentStatus : studentResult[0][0].StudentStatus,
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
    console.log(req.body);

    // student.name = req.body.name;
    // student.birthdate = req.body.birthdate;
    // student.email = req.body.email;
    // student.phone = req.body.phone;
    // student.genre = req.body.genre;
    // student.status = req.body.status;
    // student.city = req.body.city;
    // student.street = req.body.street;
    // student.state = req.body.state;
    // student.spine = req.body.spine;
    // student.surgery = req.body.surgery;
    // student.pain = req.body.pain;
    // student.hypertension = req.body.hypertension;
    // student.heartDisease = req.body.heartDisease;
    // student.hearingIssues = req.body.hearingIssues;
    // student.labyrinthitis = req.body.labyrinthitis;
    // student.alreadyPracticed = req.body.alreadyPracticed;
    // student.anyExercise = req.body.anyExercise;
    // student.observation = req.body.observation;



    res.redirect('../students');
})

router.post('/remove/:id', (req, res) => {
    console.log("deleting", req.params.id);
    studentModel.students.splice((req.params.id - 1),1);
    
})

router.post("/students", (req, res) => {

    // studentModel.lenght++;
    // // console.log(req.body);
    // var newStudent = {
    //     id: studentModel.lenght,
    //     name: req.body.name,
    //     genre: req.body.genre,
    //     status: req.body.status
    // }
    // studentModel.students.push(newStudent);
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

