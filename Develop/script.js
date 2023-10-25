var specialCase = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";

const button = document.querySelector('button');

button.addEventListener('click', function() {

// Promts to appear when button is clicked
var passwordLength = prompt("How many characters would you like your Password to be? It may be no less than 8, and no more than 128, character in length.");
var specialCase = confirm("Do you want special characters?");
var upperCase = confirm("Do you want upper-case letters?");
var lowerCase = confirm("Do you want lower-case letters?");
var numeric = confirm("Do you want numeric characters?");

console.log(passwordLength);

});


println(passwordLength);
println(specialCase);
println(upperCase);
println(lowerCase);
println(numeric);


form.addEventListener('submit', e => {
const password = generatorPassword(passwordLength, specialCase, upperCase, lowerCase, numeric)
const passwordLength = characterAmountNumber.value
const specialCase = includeSpecialCase.true
const upperCase = includeUpperCase.true
const lowerCase = includeLowerCase.true
const numeric = includeNumeric.true
})

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
}

