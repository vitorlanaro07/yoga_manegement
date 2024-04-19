const pool = require('../config/db-config');
 
module.exports = class Student{
  constructor(id, firstName, lastName, telephone, age){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.telephone = telephone;
    this.age = age;
  }

  static fetchAll(){
    return pool.execute('select * from Student');
  }
}


// const queryAll = await pool.query(function(err, conn){
//   if (err) throw err;

//   conn.query("SELECT * from Student;", function(err, result, fields){
//     if(err) throw err;
//     return result;
//   })

// })


// var students = [
//   { id: 1, name: 'fulano', genre: 'male' , status: 'active', birthdate: '1997-04-17', email:"fulano@gmail.com", phone: "44998005430", city: "Japurá", street:"Jaracatiá", state: "PR", number: "366", spine: [ 'yes', 'costa' ], surgery: [ 'no', '' ], pain: [ 'yes', '123123' ], hypertension: 'yes', heartDisease: 'yes', hearingIssues: 'no', labyrinthitis: 'no', alreadyPracticed: 'no', anyExercise: [ 'no', 'corrida' ], observation: [ 'no', '' ]},
//     { id: 2, name: 'ciclano', genre: 'female', status: 'inactive',birthdate: '2000-07-18'},
//     { id: 3 ,name: 'beltrano', genre: 'male', status: 'interested', birthdate: '2005-04-17' }
//   ];

// var lenght = students.length;

// exports.students = students;
// exports.lenght = lenght;