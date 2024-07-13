const pool = require('../config/db-config');

module.exports = class Student{
    static fetchAll(){
      return pool.execute('select * from Student');
    }
  
    static fetchById(id){
      return pool.execute(`select * from Student where StudentID = ${id};`)
    }

    static create(student){
      return pool.execute(`INSERT INTO Student (Name , Age, Birthdate, Telephone, Genre, StudentStatus, Email, City, Street, State, Number) VALUES ("${student.name}", ${student.age}, "${student.birthdate}" , "${student.telephone}", "${student.genre}" , ${student.studentStatus}, "${student.email}", "${student.city}", "${student.street}", "${student.state}", "${student.number}");`)
    }
    
    static update(student){
      if(student.status == "inactive"){
        student.status = 0;
      } else if(student.status == "active"){
        student.status = 1;
      } else {
        student.status = 2;
      }
      return pool.execute(` update Student set Name = "${student.name}", Birthdate = "${student.birthdate}", Email = "${student.email}", Telephone = "${student.telephone}", Genre = "${student.genre}", StudentStatus = "${student.status}", City = "${student.city}", Street = "${student.street}", State = "${student.state}", Number = "${student.number}" where StudentID = ${student.id};`);
    }

    static delete(studentID){
      return pool.execute(`delete from Student where StudentID = ${studentID}`);
    }
  }
