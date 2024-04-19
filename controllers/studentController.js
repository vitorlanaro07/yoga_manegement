const Student = require('../models/studentModel');

exports.getAllStudents = (req, res, next) => {
    res.send(Student.fetchAll());
}