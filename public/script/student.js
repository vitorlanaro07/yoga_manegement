



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


//verifying all checksboxes, confering if it has text-area, if the student data
const allCheck = document.querySelectorAll('.check-container');

allCheck.forEach(check => {
    const checkYes = check.children[0].children[1].children[1];
    const checkNo = check.children[0].children[1].children[3];
    checkNo.checked = true;
    if(check.classList.contains('has-check')){
        const textArea = check.children[1];

        //closing text area on click
        listeningClicks(checkYes, checkNo, textArea);
    

        //closing text area on load
        if(checkYes.checked == true){
            textArea.hidden = false;
        } else {
            textArea.hidden = true;
        }
    }else{
        listeningClicks(checkYes, checkNo, undefined);
    }
});


//verifying checkbox on clicks
function listeningClicks(checkYes, checkNo, hasTextArea){
    checkYes.addEventListener('click', () => {
        if(checkNo.checked == true && hasTextArea){
            hasTextArea.hidden = false;
            checkYes.checked = true;
            checkNo.checked = false;
        } else if (checkNo.checked == true){
            checkYes.checked = true;
            checkNo.checked = false;
        } else{
            checkYes.checked = true;
            hasTextArea.hidden = false;
        }

    })

    checkNo.addEventListener('click', () => {
        if(checkYes.checked == true && hasTextArea){
            hasTextArea.hidden = true;
            hasTextArea.value = "";
            checkNo.checked = true;
            checkYes.checked = false;
        }else if (checkYes.checked == true){
            checkYes.checked = false;
            checkNo.checked = true;
        }else{
            checkNo.checked = true;
        }
    })
}