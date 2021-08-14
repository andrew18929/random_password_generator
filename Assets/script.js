// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//characters that i want used in the password
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "'", "/", ",", ".", "<", ">"];


//empty arrays to generate from
var passwordArray = [];
var userChoices = [];

//generatePassword function
function generatePassword() {
  var numberOfCharacters = window.prompt("How many number of characters to include (Password should be minimum 8 characters and maximum 128 characters):");


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
    passwordArray.push(lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]);
  }

  var upperCaseSelection = window.confirm("Do you want uppercase letters used in your password?");
  if (upperCaseSelection === true) {
    userChoices = userChoices.concat(upperCaseLetters);
    passwordArray.push(upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]);
  }

  var numbersSelection = window.confirm("Do you want numbers used in your password?");
  if (numbersSelection === true) {
    userChoices = userChoices.concat(numbers);
    passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }

  var symbolsSelection = window.confirm("Do you want symbols used in your password?");
  if (symbolsSelection === true) {
    userChoices = userChoices.concat(specialCharacters);
    passwordArray.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
  }

  if (!lowerCaseSelection && !upperCaseSelection && !numbersSelection && !symbolsSelection) {
    alert("You should include at least one character type.");
    userSelectedCharacters();
  }

  console.log(userChoices);
  console.log(passwordArray);

  var passwordArrayLength = passwordArray.length;

  for (i = passwordArrayLength; i < numberOfCharacters; i++) {
    passwordArray.push (userChoices[Math.floor(Math.random() * userChoices.length)]);
  }

  var finalPassword = ""
  for(f = 0; f < numberOfCharacters; f++) {
    finalPassword = finalPassword + passwordArray[Math.floor(Math.random() * passwordArray.length)]
  }

  console.log(finalPassword);
  return finalPassword;

}

return password;
console.log(password);
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


