const studentModel = require('../models/studentModel');

module.exports = {
          fetchAllStudents : (req, res) => {   
               return studentModel.fetchAll(); 
          },
          fetchByID : (id, req, res) => {    
               return  studentModel.fetchById(id);
          },
          create : (student, req, res) => {
               studentModel.create(student);
          },
          update : (student, req, res) => {
               studentModel.update(student);
          },
          delete : (studentID, req, res) => {
               studentModel.delete(studentID);
          }
}


