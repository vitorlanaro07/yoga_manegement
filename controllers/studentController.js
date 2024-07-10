const studentModel = require('../models/studentModel');

module.exports = {
          fetchAllStudents : (req, res) => {   
               return studentModel.fetchAll(); 
          },
          fetchByID : (id, req, res) => {    
               return  studentModel.fetchById(id);
          }
}


