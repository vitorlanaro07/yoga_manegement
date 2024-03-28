//getting the student
function getId(element){
    let idStudent = element.children[0].innerHTML
    window.location.href = '/student/' + idStudent;
}

//submit changes
const btnSubmit = document.querySelector('.button-save');

// postingData = () => {

// }

// btnSubmit.addEventListener('submit', postingData)

//working with others check, but only one can be checked
const checkBoxes = document.querySelectorAll('.container-select');

checkBoxes.forEach(check => {
    const checkYes = check.children[1];
    const checkNo = check.children[3];

    checkYes.addEventListener('click', () => {
        if(checkNo.checked == true){
            checkYes.checked = true;
            checkNo.checked = false;
        }
    })
    checkNo.addEventListener('click', () => {
        if(checkYes.checked == true){
            checkNo.checked = true;
            checkYes.checked = false;
        }
    })
})


//listening check box to open text area
const hasCheck = document.querySelectorAll('.has-check');

hasCheck.forEach(div => {
    let textArea = div.children[1];
    const checkYes = div.children[0].children[1].children[1];
    const checkNo = div.children[0].children[1].children[3];

    div.addEventListener('click', (e) => {
        if (e.target == checkYes){
            textArea.hidden = false;
        }   else if (e.target == checkNo){
            textArea.hidden = true;       
        }
    })

})


//editing student
const btnEdit = document.querySelector('.button-edit');
const inputs = document.querySelectorAll('.input-edit');
const btnSave = document.querySelector('.button-save');
const allCheckBoxes = document.querySelectorAll('[type ="checkbox"]:disabled');
const allTextAreas = document.querySelectorAll("textarea");


inputs.forEach(input => {
    input.disabled = true;
})

editingStudent = (e) => {
    e.preventDefault();
    btnSave.classList.remove('button--disable');
    btnSave.disabled = false;
    inputs.forEach(input => {
        input.disabled = false;
        input.classList.add('input-editing');
    })
    allCheckBoxes.forEach(checkbox => {
        checkbox.disabled = false;
    })
    allTextAreas.forEach(textarea => {
        textarea.disabled = false;
    })

}

btnEdit.addEventListener('click', editingStudent);



//removing student
const btnDelete = document.querySelector('.button-delete');
const btnNegate = document.querySelector('.warning-no');
const btnConfirm = document.querySelector('.warning-yes');


openingWarning = (e) => {
    e.preventDefault();
    const backgroundChange = document.querySelector('.container-opacity');
    const boxWarning = document.querySelector('.box-warning');

    backgroundChange.style.display = "block";
    boxWarning.style.display = "flex";

    btnNegate.addEventListener('click', () => {
        backgroundChange.style.display = "none";
        boxWarning.style.display = "none";
    });

    btnConfirm.addEventListener('click', () => {
        window.location.href = '/students'
    })
}


btnDelete.addEventListener('click', openingWarning);



//checking the chekbox to open text if there is.
const checkContainer = [...document.querySelectorAll('.has-check')];

checkContainer.forEach(div => {
    let option = {
        checkBoxes: [...div.children[0].children[1].children],
        textAreaChild: div.children[1]
    } 
    
    option.checkBoxes.forEach(check => {
        if (check.tagName !== "LABEL"){
            if(check.classList.contains('checkYes')){
                if(check.checked === true){
                    option.textAreaChild.hidden = false;
                }    else {
                    option.textAreaChild.hidden = true;
                }
            }
            
        }
    })
})

