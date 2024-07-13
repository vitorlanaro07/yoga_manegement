//getting the student id
let id = window.location.href.split('/')[4];


//canceling changes
const btnCancel = document.querySelector('.button-cancel');

cancelingChanges = (e) => {
    e.preventDefault();

    btnCancel.classList.add('button--disable');
    btnSave.classList.add('button--disable');
    btnSave.disabled = true;
    btnCancel.disabled = true;

    allSelects.forEach(select => {
        select.disabled = true;
    })

    inputs.forEach(input => {
        input.disabled = true;
        input.classList.remove('input-editing');
    })
    
    allCheckBoxes.forEach(checkbox => {
        checkbox.disabled = true;
    })
    allTextAreas.forEach(textarea => {
        textarea.disabled = true;
    })
}

btnCancel.addEventListener("click", cancelingChanges)

//submit changes
const btnSubmit = document.querySelector('.button-save');


//editing student
const btnEdit = document.querySelector('.button-edit');
const inputs = document.querySelectorAll('.input-edit');
const btnSave = document.querySelector('.button-save');
const allCheckBoxes = document.querySelectorAll('[type ="checkbox"]:disabled');
const allTextAreas = document.querySelectorAll("textarea");
const allSelects = document.querySelectorAll('select');

inputs.forEach(input => {
    input.disabled = true;
})

editingStudent = (e) => {
    e.preventDefault();
    btnSave.classList.remove('button--disable');
    btnCancel.classList.remove('button--disable');

    btnSave.disabled = false;
    btnCancel.disabled = false;

    allSelects.forEach(select => {
        select.disabled = false;
    })

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

    btnConfirm.addEventListener('click', (e) => {
        // e.preventDefault();
        fetch('/remove/'+id, {method: "POST"})
            .then(window.location.href = '/students')
        // console.log(id);
        
    })
}


btnDelete.addEventListener('click', openingWarning);




//verifying all checksboxes, confering if it has text-area, if the student data
const allCheck = document.querySelectorAll('.check-container');

allCheck.forEach(check => {
    const checkYes = check.children[0].children[1].children[1];
    const checkNo = check.children[0].children[1].children[3];
    
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