// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = Number(prompt("How long out would like your password to be? Must be no less than 8, and no more than 128, characters."));
var chartype = prompt("What type of characters would you like your password to utilize?: UPPER-CASE, lower-case, $p3c!al Charat3r$, or Numbers?");


// Creating the password
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    var charSet = "";
    if (charTypeLower === "UPPER-CASE") {
      charSet = "abcdefghijklmnopqrstuvwxyz";
    } else if (charTypeLower === "lower-case") {
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (charTypeLower === "Numbers") {
      charSet = "0123456789";
    } else if (charTypeLower === "$p3c!al Charat3r$") {
      charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else if (chartype !== "Upper-CASE", "lower-case", "Numbers", "$p3c!al Charat3r$") {
      charSet = "NOT A VALID ENTRY!";
    }
    //return value
    var retVal = "";
    for (var i = 0; i < length; i++) {
      //picks a character within charSet at index of random number
      retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return retVal;
  }
  alert(generatePassword());
  
  //make password appear in display box
  document.getElementById("display").value = password;
  
  //function to copy password to clipboard
  function copyPassword() {
  
    document.getElementById("display").select();
  
    document.execCommand("Copy");
  
    alert("Password copied to clipboard!");
}

generateBtn.addEventListener("click", writePassword);