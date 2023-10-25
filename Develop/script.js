

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


println(passwordLegnth);
println(specialCase);
println(upperCase);
println(lowerCase);
println(numeric);

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

  // Minimum count for userInput(total characters), passwordlength, spcialCase, upperCase, lowerCase, & numeric
  var minimumCount = 0;
  
  // Empty minimums for spcialCase, upperCase, lowerCase & numeric
  var minimumspecialCase = "";
  var minimumupperCase = "";
  var minimumlowerCase = "";
  var minimumnumeric = "";

