var students = [
  { id: 1, name: 'fulano', genre: 'male' , status: 'active', birthdate: '1997-04-17', email:"fulano@gmail.com", phone: "44998005430", city: "Japurá", street:"Jaracatiá", state: "PR", number: "366", spine: [ 'yes', 'costa' ], surgery: [ 'no', '' ], pain: [ 'yes', '123123' ], hypertension: 'no', heartDisease: 'no', hearingIssues: 'no', labyrinthitis: 'no', alreadyPracticed: 'no', anyExercise: [ 'no', '' ], obs: [ 'no', '' ]},
    { id: 2, name: 'ciclano', genre: 'female', status: 'inactive',birthdate: '2000-07-18'},
    { id: 3 ,name: 'beltrano', genre: 'male', status: 'interested', birthdate: '2005-04-17' }
  ];

var lenght = students.length;

exports.students = students;
exports.lenght = lenght;