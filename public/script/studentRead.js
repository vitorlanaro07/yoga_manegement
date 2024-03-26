function getId(element){
    let idStudent = element.children[0].innerHTML
    window.location.href = '/student/' + idStudent;
}


const checkContainer = [...document.querySelectorAll('.has-check')];

checkContainer.forEach(div => {
    let checkBoxes = [...div.children[0].children[1].children];
    let textAreaChild = div.children[1];
    
    checkBoxes.forEach(check => {
        if (check.tagName !== "LABEL"){
            if(check.classList.contains('checkYes')){
                if(check.checked === true){
                    textAreaChild.hidden = false;
                }    else {
                    textAreaChild.hidden = true;
                }
            }
            
        }
    })
})

