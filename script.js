// Variables
const grad = document.querySelectorAll("#myGradYear");
const header1 = document.querySelector("#firstHeading");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const fullName = document.querySelector("#fullName");
const startCountBtn = document.querySelector("#startCount");

// Display name when typed in nickname to the header
lastName.oninput = function(){
    header1.innerText = "Welcome to the site, " + firstName.value + "!";
    fullName.value = firstName.value + " " + lastName.value;
}

// Creating stage name from other inputs

// Colors is an array
// Arrays start at zero and go to n-1
grad[0].onclick = function(){
    alert("Nina is not graduating in 2026!");
}

grad[1].onclick = function(){
    alert("Nina is not graduating in 2027!");
}

grad[2].onclick = function(){
    alert("Nina is graduating in 2028!");
}

grad[3].onclick = function(){
    alert("Nina is not graduating in 2029!");
}

startCountBtn.onclick = function() {
    let timeLeft = parseInt(document.querySelector("#countNum").value);

    const IntervalId = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(IntervalId);
            document.querySelector("#displayCount").innerText = "Countdown Complete! Now, check out Nina's work!";
        } else {
            document.querySelector("#displayCount").innerText = timeLeft;
            timeLeft = timeLeft - 1;
        } 
    },1000);
};