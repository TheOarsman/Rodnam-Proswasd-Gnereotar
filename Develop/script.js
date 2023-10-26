var specialCaseOptions = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz";
var numericOptions = "0123456789";

const button = document.querySelector('button');
const passwordArea = document.querySelector('#password');

button.addEventListener('click', function () {

    // Promts to appear when button is clicked
    var passwordLength = prompt("How many characters would you like your Password to be? It may be no less than 8, and no more than 128, character in length.");
    var specialCase = confirm("Do you want special characters?");
    var upperCase = confirm("Do you want upper-case letters?");
    var lowerCase = confirm("Do you want lower-case letters?");
    var numeric = confirm("Do you want numeric characters?");

    console.log(passwordLength);
    console.log(specialCase);
    console.log(upperCase);
    console.log(lowerCase);
    console.log(numeric);
    const password = generatePassword(passwordLength, specialCase, upperCase, lowerCase, numeric);
    passwordArea.textContent = password;
});

function getPasswordChar(options) {
    options[Math.floor(Math.random() * options.length)];
}


function generatePassword(passwordLength, specialCase, upperCase, lowerCase, numeric) {
    var password = "";

    var specialCaseAdded = false;
    var upperCaseAdded = false;
    var lowerCaseAdded = false;
    var numericAdded = false;

    for (var i = 0; i < password.length; i++) {
        if (specialCase) {
            if (!specialCaseAdded) {
                password += getPasswordChar(specialCaseOptions);
                specialCaseAdded = true;
            } else {
                
            }
        }

    }


    return password;
}