

export async function getData(){
    let response = await fetch('/student');
    // console.log(response.json());
    return response.json();
}