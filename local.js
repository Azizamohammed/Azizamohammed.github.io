
// console.log(input1);
// console.log(input2);
// console.log(input3);
// console.log(input4);



// localStorage.setItem("full name",input1);
// localStorage.setItem("Address", input2);



function myfunction(){

    let input1 = document.querySelector(".name").value;
    let input2 = document.querySelector(".address").value;
    let input3 = document.querySelector(".email").value;
    let input4 = document.querySelector(".area").value;




    localStorage.setItem("fullname", input1);
    localStorage.setItem("Address",input2);
    localStorage.setItem("Email",input3);
    localStorage.setItem("Comment",input4);






}


let jn = localStorage.getItem("fullname");
let mt = localStorage.getItem("Email");
let br = localStorage.getItem("Comment");
let ha = localStorage.getItem("Address");

let jina = document.querySelector(".jia");
let mtaa = document.querySelector(".adre");
let barua = document.querySelector(".ema");
let huu = document.querySelector(".comen");





if (jn && mt){
    if(br && ha){
        jina.innerHTML = `name ${jn} `;
        mtaa.innerHTML = `address  ${mt}`;
        barua.innerHTML= `email ${br}`;
        ha.innerHTML = `area ${ha}`;
        
    }
}