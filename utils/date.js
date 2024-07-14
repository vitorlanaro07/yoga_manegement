
function getDataFormated(date){
   
}

// function getAge(birthdate){
    
// }

function validate(date){
    if (date[0].length == 1){
        date[0] = "0" + date[0];
    }
    if (date[1].length == 1){
        date[1] = "0" + (parseInt(date[1]));
    }
    newDataFormated = date[2] + "-" + date[0] + "-" + date[1];
    return newDataFormated
}

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
    getBirthdateFormated : (date) => {
        dateFormated = new Date(date).toLocaleDateString().split("/");
        dateFormated[1] = parseInt(dateFormated[1]) + 1;

        newDataFormated = validate(dateFormated);
        
        return newDataFormated;
    },
    getDateTime : () => {
        dateToday = new Date().toLocaleDateString().split("/");   
        dateToday = validate(dateToday);
        timeNow = new Date().toTimeString().split(" ")[0];
        newDateTime = dateToday + " " + timeNow;
        return newDateTime;
    }

}