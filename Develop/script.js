// Assignment Code
var length = Number(prompt("How long out would like your password to be? Must be no less than 8, and no more than 128, characters."));
var criteria = promt("What type of characters would you like your password to utilize?: UPPER-CASE, lower-case, $p3c!al Charat3r$, or Numbers?");
var password = generatePassword ();

// Creating the password
function writePassword() {
  var criteria1 = "";
  var name1 = criteria.name2();
  if (name1 === "UPPER-CASE") {
    criteria1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (name1 === "lower-case") {
    criteria1 = "abcdefghijklmnopqrstuvwxyz";
  } else if (name1 === "$p3c!al Charat3r$") {
    criteria1 = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  } else if (name1 = "Numbers") {
    criteria1 = "0123456789"
  };
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
