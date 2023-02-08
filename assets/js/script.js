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

function generatePassword() {
  //Generated password initially blank
  var generatePassword = "";
  var passwordLength;
  var includeLowerCase;
  var includeUpperCase;
  var includeNumbers;
  var includeSpecialChar;

}