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
var invalidLengthAlert = "Invalid password. Password must be 8 to 128 characters long.";
var noSelectedCharAlert = "Invalid password. Please select that the password contains at least one lowercase, uppercase, numeric, or special character.";
var minPasswordLength = 8;
var maxPasswordLength = 128;

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

  //First if statement to check if the password length is 8 to 128 characters long
  if (passwordLength < minPasswordLength || passwordLength > maxPasswordLength) {
    alert(invalidLengthAlert);

  } else {
    // for loop for password concatenation
    for (var i = 0; i < passwordLength; i++) {
      // first check if at least one character was selected if not then alert the user that they need to select at least one
      if (includeLowerCase === "N" && includeUpperCase === "N" && includeNumbers === "N" && includeSpecialChar === "N") {
        alert(noSelectedCharAlert);
        break;
      } else {
        if (includeLowerCase === "Y") {
          generatePassword += getLowerCaseChar();
        }
        if (includeUpperCase === "Y") {
          generatePassword += getUpperCaseChar();
        }
        if (includeNumbers === "Y") {
          generatePassword += getNumericChar();
        }
        if (includeSpecialChar === "Y") {
          generatePassword += getSpecialChar();
        }

      }

    }

  }

  // resultPassword to slice the generated password with selected choices
  const resultPassword = generatePassword.slice(0, passwordLength);

  return resultPassword;
}

// Choices functions

function getPasswordLengthChoice() {
  var userChoice = window.prompt("Please enter your desired password length between 8 to 128 characters:", "8");

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

// Character Generators

function getLowerCaseChar() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return alphabet[Math.floor(Math.random() * alphabet.length)];

}
function getUpperCaseChar() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function getNumericChar() {
  return Math.floor(Math.random() * 10);

}

function getSpecialChar() {
  const specialChar = "!@#$%^&*(){}[]=<>/.";

  return specialChar[Math.floor(Math.random() * specialChar.length)];

}