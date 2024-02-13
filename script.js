const specialCaseOptions = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz";
const numericOptions = "0123456789";

const button = document.querySelector("button");
const passwordArea = document.querySelector("#password");

button.addEventListener("click", function () {
  // Prompts to appear when button is clicked
  let passwordLength = prompt(
    "How many characters would you like your Password to be? It may be no less than 8, and no more than 128, character in length."
  );

  passwordLength = parseInt(passwordLength, 10);
  if (isNaN(passwordLength)) {
    alert("You were supposed to enter a number. Nothing else!");
    return;
  }

  if (passwordLength < 8) {
    alert("You were supposed to select 8 or more characters!");
    return;
  }
  if (passwordLength > 128) {
    alert("You were supposed to select no more than 128 characters!");
    return;
  }

  const specialCase = confirm("Do you want special characters?");
  const upperCase = confirm("Do you want upper-case letters?");
  const lowerCase = confirm("Do you want lower-case letters?");
  const numeric = confirm("Do you want numeric characters?");

  const password = generatePassword(
    passwordLength,
    specialCase,
    upperCase,
    lowerCase,
    numeric
  );
  passwordArea.textContent = password;
});

function getPasswordChar(options) {
  return options[Math.floor(Math.random() * options.length)];
}

function generatePassword(
  passwordLength,
  specialCase,
  upperCase,
  lowerCase,
  numeric
) {
  let charset = "";
  let password = "";

  if (specialCase) {
    charset += specialCaseOptions;
  }
  if (upperCase) {
    charset += upperCaseOptions;
  }
  if (lowerCase) {
    charset += lowerCaseOptions;
  }
  if (numeric) {
    charset += numericOptions;
  }

  if (charset === "") {
    throw new Error("Please try again and select at least one character set.");
  }

  for (let i = 0; i < passwordLength; i++) {
    password += getPasswordChar(charset);
  }

  return password;
}
