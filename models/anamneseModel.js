const pool = require('../config/db-config');


module.exports = class Anamnese{
  constructor(id){
    this.id = id;

  }

  static fetchAnamnese(id){
    return pool.execute(`select * from Anamnese where AnamneseID = ${id};`)
  }

  static create(anamnese){
    return pool.execute(` insert into Anamnese (SpineIssues, SpineDescription, Surgery, SurgeryDescription, Pain, PainDescription, Hypertension, HeartDisease, HearingIssues, Labyrinthitis, AlreadyPracticed, PracticeAnyExercise, ExerciseDescription, Observation, ObservationDescription, CreationTime) values ("${anamnese.spineIssues}","${anamnese.spineDescription}","${anamnese.surgery}","${anamnese.surgeryDescription}","${anamnese.pain}","${anamnese.painDescription}","${anamnese.hypertension}","${anamnese.heartDisease}","${anamnese.hearingIssues}","${anamnese.labyrinthitis}","${anamnese.alreadyPracticed}","${anamnese.practiceAnyExercise}","${anamnese.exerciseDescription}","${anamnese.observation}","${anamnese.observationDescription}", "${anamnese.creationTime}");`);
  }

  static update(anamnese){      
    return pool.execute(` update Anamnese set SpineIssues = "${anamnese.spine}", SpineDescription = "${anamnese.spineDescription}", Surgery = "${anamnese.surgery}", SurgeryDescription = "${anamnese.surgeryDescription}", Pain = "${anamnese.pain}", PainDescription = "${anamnese.painDescription}", Hypertension = "${anamnese.hypertension}", HeartDisease = "${anamnese.heartDisease}", HearingIssues = "${anamnese.hearingIssues}", Labyrinthitis = "${anamnese.labyrinthitis}", AlreadyPracticed = "${anamnese.alreadyPracticed}", PracticeAnyExercise = "${anamnese.practiceAnyExercise}", ExerciseDescription = "${anamnese.exerciseDescription}", Observation = "${anamnese.observation}", ObservationDescription = "${anamnese.observationDescription}" where AnamneseID = ${anamnese.id};`);
  }

  static delete (anamneseID){
    return pool.execute(`delete from Anamnese where AnamneseID = ${anamneseID}`);

  }

  static getID(datetime){
    return pool.execute(`select AnamneseID from Anamnese where CreationTime = "${datetime}";`)
  }
  
}
