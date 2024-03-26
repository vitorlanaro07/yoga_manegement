//getting the student
function getId(element){
    let idStudent = element.children[0].innerHTML
    window.location.href = '/student/' + idStudent;
}

//buttons edit and delete
const btnEdit = document.querySelector('.button-edit');
const btnDelete = document.querySelector('.button-delete');
const btnNegate = document.querySelector('.warning-no');
const btnConfirm = document.querySelector('.warning-yes');


editingStudent = () => {
    console.log('editing');
}

openingWarning = () => {
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


btnEdit.addEventListener('click', editingStudent);
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

