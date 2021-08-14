// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//functions to generate random characters
function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

var lowerCaseLetters = getRandomLowercase();
var upperCaseLetters = getRandomUppercase();
var numbers = getRandomNumber();
var specialCharacters = getRandomSymbol();


//empty arrays to generate from
var passwordArray = [];
var userChoices = [];

//generatePassword function
function generatePassword() {
  var numberOfCharacters = window.prompt("How many number of characters to include (Password should be minimum 8 characters and maximum 128 characters):");
}

//check to see if number of characters is correct
if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
  password = userSelectedCharacters();
} else {
  alert("The amount of characters you have chosen is invalid. Please try again.");
  generatePassword();
}

//user selected character prompts
function userSelectedCharacters() {
  var lowerCaseSelection = window.confirm("Do you want lowercase letters used in your password?");
  if (lowerCaseSelection === true) {
    userChoices = userChoices.concat(lowerCaseLetters);
    passwordArray.push(lowerCaseLetters);
  }

  var upperCaseSelection = window.confirm("Do you want uppercase letters used in your password?");
  if (upperCaseSelection === true) {
    userChoices = userChoices.concat(upperCaseLetters);
    passwordArray.push(upperCaseLetters);
  }

  var numbersSelection = window.confirm("Do you want numbers used in your password?");
  if (numbersSelection === true) {
    userChoices = userChoices.concat(numbers);
    passwordArray.push(numbers);
  }

  var symbolsSelection = window.confirm("Do you want symbols used in your password?");
  if (lowerCaseSelection === true) {
    userChoices = userChoices.concat(specialCharacters);
    passwordArray.push(specialCharacters);
  }
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


