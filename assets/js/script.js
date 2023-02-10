// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// My code
var promptMessage = "Do you want to include";
var promptInput = "characters? Please enter Y or N:";
var minPasswordLength = 8;
var maxPasswordLength = 128;
var noSelectedCharAlert = "Invalid password. Please select that the password contains at least one lowercase, uppercase, numeric, or special character.";

function generatePassword() {
  //Generated password initially blank
  var generatePassword = "";
  var passwordLength;
  var includeLowerCase;
  var includeUpperCase;
  var includeNumbers;
  var includeSpecialChar;

    // call functions to collect prompts
    passwordLength = getPasswordLengthChoice();
    includeLowerCase = getIncludeLowerCaseChoice();
    includeUpperCase = getIncludeUpperCaseChoice();
    includeNumbers = getIncludeNumbersChoice();
    includeSpecialChar = getIncludeSpecialCharChoice();

      if(passwordLength != minPasswordLength || passwordLength != maxPasswordLength) {
        
      }

}

// Choices functions

function getPasswordLengthChoice() {
  var userChoice = window.prompt("Please enter password length from 8 to 128 characters:", "8");

  return userChoice;
}

function getIncludeLowerCaseChoice() {
  var userChoice = window.prompt(promptMessage + " lowercase " + promptInput, "Y");
  return userChoice;
}

function getIncludeUpperCaseChoice() {
  var userChoice = window.prompt(promptMessage + " uppercase " + promptInput, "Y");

  return userChoice;
}

function getIncludeNumbersChoice() {
  var userChoice = window.prompt(promptMessage + " numeric " + promptInput, "Y");
  return userChoice;
}

function getIncludeSpecialCharChoice() {
  var userChoice = window.prompt(promptMessage + " special " + promptInput, "Y");

  return userChoice;
}