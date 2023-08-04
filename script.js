//Pop Ups









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

