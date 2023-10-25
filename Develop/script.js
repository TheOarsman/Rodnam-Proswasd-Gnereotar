// Assignment Code
var length = Number(prompt("How long out would like your password to be? Must be no less than 8, and no more than 128, characters"));
var characters = promt("What type of characters would you like your password to utilize?: UPPER-CASE, lower-case, $p3c!al Charat3r$, or Numbers?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
