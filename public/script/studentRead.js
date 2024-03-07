function getId(element){
    let idStudent = element.children[0].innerHTML
    window.location.href = '/student/' + idStudent;
}