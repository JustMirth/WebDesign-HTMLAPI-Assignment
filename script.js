//Element References
const savebutton = document.getElementById("save-btn");
const clearbutton = document.getElementById("clear-btn");
const welcomeElement = document.getElementById("welcome");
const displayElement = document.getElementById("displayname");

//Buttons
savebutton.addEventListener("click", function() {
    const inputname = document.getElementById("Username").value;
    localStorage.setItem("userId", inputname);
    reflectInputName();
});
clearbutton.addEventListener("click", function () {
    localStorage.removeItem("userId");
    reflectInputName();
});

//On-Load
reflectInputName();

//Update Site to Reflect Username
function reflectInputName() {
    const savedName = localStorage.getItem("userId");
    if (savedName) {
        welcomeElement.innerHTML = "Welcome, " + savedName + "!";
        displayElement.innerHTML = greeting(savedName);
    } else {
        welcomeElement.innerHTML = "Welcome, Dear Guest!";
        displayElement.innerHTML = "Can you please enter a username so we may get to know you?";
    }
}

//Check Hours for Bonus
function greeting(savedId) {
    const hours = new Date().getHours();
    let welcomeline;
    if (hours >= 0 && hours < 12) {
        welcomeline = "Good morning,";
    } else if (hours >= 12 && hours < 17) {
        welcomeline = "Good afternoon,";
    } else {
        welcomeline = "Good evening,";
    }
    return `${welcomeline} ${savedId}`;
}