//getting the student
function getId(element){
    let idStudent = element.children[0].innerHTML;
    window.location.href = '/student/' + idStudent;
}
let id = window.location.href.split('/')[4];


//fetching data async and showing
const namePlace = document.querySelector('.name');
const birthdate = document.querySelector('.birthdate');
const genre = document.querySelector('.genre-input');
const status = document.querySelector('.status-input');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const city = document.querySelector('.city');
const street = document.querySelector('.street');
const state = document.querySelector('.state');
const number = document.querySelector('.number');
const spine = document.querySelectorAll('.spine');

fetch("/student/json/"+id).then(
    (response) => response.json()
).then(data => {
    namePlace.value = data.name;
    birthdate.value = data.birthdate;
    genre.value = data.genre,
    status.value = data.status,
    email.value = data.email,
    phone.value = data.phone,
    city.value = data.city,
    street.value = data.street,
    state.value = data.state,
    number.value = data.number
    // spine.value = data.spine
    // console.log(data.spine);
    // console.log(spine)
    if(data.spine[0] == "yes"){
        spine[0].checked = true;
        spine[2].value = data.spine[1];
        spine[2].hidden = false;

    }else{
        spine[1].checked = true
    }
})


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

    btnConfirm.addEventListener('click', () => {
        window.location.href = '/students'
    })
}


btnDelete.addEventListener('click', openingWarning);



function listeningClicks(checkYes, checkNo, hasTextArea){
    checkYes.addEventListener('click', () => {
        if(checkNo.checked == true && hasTextArea){
            hasTextArea.hidden = false;
            checkYes.checked = true;
            checkNo.checked = false;
        } else if (checkNo.checked == true){
            checkYes.checked = true;
            checkNo.checked = false;
        }
    })

    checkNo.addEventListener('click', () => {
        if(checkYes.checked == true && hasTextArea){
            hasTextArea.hidden = true;
            checkNo.checked = true;
            checkYes.checked = false;
        }else if (checkYes.checked == true){
            checkYes.checked = false;
            checkNo.checked = true;
        }
    })
}


//verifying all checksboxes, confering if it has text-area, if the student data
const allCheck = document.querySelectorAll('.check-container');

allCheck.forEach(check => {
    const checkYes = check.children[0].children[1].children[1];
    const checkNo = check.children[0].children[1].children[3];
    
    if(check.classList.contains('has-check')){
        const textArea = check.children[1];

        //closing text area on click
        listeningClicks(checkYes, checkNo, textArea);
        console.log(check)

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