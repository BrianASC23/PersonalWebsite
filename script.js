//Recommendations Page Submission
//Whenever the input is submitted, it is pushed to realArray
//The input is also shown as a list below the submit button
let recInput = document.getElementById("recinput");
let recBtn = document.getElementById("rec_btn");
let recArray = document.getElementById("recArray");
let realArray = [];
let para;

recBtn.onclick = function(event) {
    event.preventDefault();

    if(recInput.value == ""){
        alert("Please fill in the box to leave a recommendation.")
    } else {
        para = document.createElement("li");
        para.innerHTML += recInput.value
        recArray.appendChild(para);

        realArray.push(recInput.value);
    }
}







//Login Button

let logbutton = document.getElementById("logbutton");
let password = document.getElementById("password");
let username = document.getElementById("username");

logbutton.onclick = function(event){
    event.preventDefault();

    if(password.value == "" || username.value == "") {
        alert("Please fill in all boxes!");
    }
}

logbutton.onmouseover = function(){
    logbutton.style["background-color"] = "green";
}

logbutton.onmouseout = function(){
    logbutton.style["background-color"] = "#2989d8";
}

