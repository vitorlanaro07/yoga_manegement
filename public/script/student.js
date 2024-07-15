
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

//validate input date
inputs = document.querySelectorAll('input');
label = document.querySelectorAll('label');
verify = [];

//listening the press to clear the error message
for(let i = 10; i < 14; i++){
    inputs[i].addEventListener("keypress", (event) => {
        if(inputs[i].value != ""){
            verify[i] = true;
        }
        if(verify[10] == verify[11] == verify[12] == verify[13]){
            messageContainer.style.display = "none";
        }
    })
}

//error message and error emphasis
messageContainer= document.querySelector('.message-container');
messageText = document.querySelector('.message-error');
submitButton = document.querySelector("#submitButton");
birthdateForms = document.querySelector("#birthdate");
birthdateLabel = document.querySelector('.birthdateLabel');

submitButton.addEventListener("click", (e) => {
    
    for(let i = 10; i < 14 ; i++){
        if(inputs[i].value == ""){
            //message
            messageContainer.style.display = "block";
            messageText.innerHTML = "Fill all the fields";

            e.preventDefault();
            //change color
            inputs[i].style.borderColor = "red";
            label[i - 1].style.color = "red";
        } else{
            //change color
            inputs[i].style.borderColor = "black";
            label[i - 1].style.color = "black";
        }
    }

    //if the key was pressed then clear the red emphasis in the label and input
    for(let i = 10; i < 14 ; i++){
        inputs[i].addEventListener('keypress', () => {
            if(inputs[i].value == ""){
                inputs[i].style.borderColor = "black";
                label[i - 1].style.color = "black";
            }
        })
    }

})



//listening the input date to validate the value
birthdateForms.addEventListener("keyup", (event) => {
    if (birthdateForms.value.split("-")[0].length > 4){
        messageContainer.style.display = "block";
        messageText.innerHTML = "Invalid Date";
        event.preventDefault();
    }else{
        messageContainer.style.display = "none";
    }
})
