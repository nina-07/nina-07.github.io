//variables
const heading = document.querySelector("#heading");
let firstName = document.querySelector("#fname");
let lastName = document.querySelector("#lname");

//functions
lastName.oninput = function(){
    if (firstName.value == "Jack"){
        heading.innerHTML = "Welcome to the site, Jack!";
    } else if (firstName.value == "Larry"){
        heading.innerHTML = "You are not Jack!";
    } else {
        heading.innerHTML = "We love to hear your feedback!";
    }
}