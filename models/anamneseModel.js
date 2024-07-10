const pool = require('../config/db-config');


module.exports = class Anamnese{
  constructor(id){
    this.id = id;

  }

  static fetchAnamnese(id){
    return pool.execute(`select * from Anamnese where AnamneseID = ${id};`)
  }
}
