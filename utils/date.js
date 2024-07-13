
function getDataFormated(date){
   
}

// function getAge(birthdate){
    
// }

module.exports = {
    getAge : (birthdate) => {
        actualYear = new Date().getFullYear();
        birthdateYear = new Date(birthdate).getFullYear();
        actualMonth = new Date().getMonth() + 1;
        birthdateMonth = new Date(birthdate).getMonth() + 1;
        actualDay = new Date().getDate();
        birthdateDay = new Date(birthdate).getDate();
        
        age = actualYear - birthdateYear;
    
        if (actualMonth <= birthdateMonth && actualDay < birthdateDay){
            age--;
        } else if (actualMonth > birthdateMonth && actualYear <= birthdateYear){
            age++;
        } 
        return age;
    },
    getDataFormated : (date) => {
        console.log(date);
        birthdateFromStudent = new Date(date).toLocaleDateString().split("/");
        console.log(birthdateFromStudent);
        if (birthdateFromStudent[0].length == 1){
            birthdateFromStudent[0] = "0" + birthdateFromStudent[0];
        }
        if (birthdateFromStudent[1].length == 1){
            birthdateFromStudent[1] = "0" + birthdateFromStudent[1];
        }
        dataFormated = birthdateFromStudent[2] + "-" + birthdateFromStudent[0] + "-" + birthdateFromStudent[1];
        return dataFormated;
    }
}