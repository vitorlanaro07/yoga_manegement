const pool = require('../config/db-config');

module.exports = class Student{
    static fetchAll(){
      return pool.execute('select * from Student');
    }
  
    static fetchById(id){
      return pool.execute(`select * from Student where StudentID = ${id};`)
    }
    
    static update(id){
        return "Updating..."
    }
  }
