

console.log("aziza");


function storage(){


    let input1 = document.querySelector('input1').value;
    let input2 = document.querySelector('input2').value;
    let input3 = document.querySelector('input3').value;
    let input4 = document.querySelector('input4').value;
    let input5 = document.querySelector('input5').value;

    localStorage.setItem("Full name", input1)
    localStorage.setItem("Password",input2)
    localStorage.setItem("Email",input3)
    localStorage.setItem("Address",input4)
    localStorage.setItem("Comment",input5)



}


let name = localStorage.getItem('Full name');
let Password  = localStorage.getItem('Password');
let Email = localStorage.getItem('Email');
let Address = localStorage.getItem('Address');
let Comment = localStorage.getItem('Comment');




let store1 = document.querySelector('#Fullname');
let store2 = document.querySelector('#Password');
let store3 = document.querySelector('#Email');
let store4 = document.querySelector('#Address');
let store5 = document.querySelector('#Comment');

if(Fullname && Address){
    if(Email && Comment){
        store1.innerHTML = `Full name: ${Fullname}`;
        store2.innerHTML = `Password: ${Password}`;
        store3.innerHTML = `Email: ${Email}`;
        store4.innerHTML = `Address: ${Address}`;

    }
}


