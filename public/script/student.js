const btnNewStudent = document.querySelector('.new-student');
const table = document.querySelector('.table');
const forms = document.querySelector('.forms-new-student');
var icons = document.querySelectorAll('.icon')
var title = document.querySelector('.title');
var textButton = document.querySelector('.text-button');

var textArray = ["Students", "New student"]


changeToNew = () => {
    table.classList.toggle('remove');
    forms.classList.toggle('show');
    if(title.innerHTML === textArray[0]){
        btnNewStudent.children[0].style.display = "none";
        title.innerHTML = textArray[1];
        textButton.innerHTML = "Back";
        icons[1].classList.remove('remove');   
    } else {
        btnNewStudent.children[0].style.display = "block";
        textButton.innerHTML = textArray[1];
        title.innerHTML = textArray[0];  
        icons[1].classList.add('remove');
    }
}

btnNewStudent.addEventListener("click", changeToNew)