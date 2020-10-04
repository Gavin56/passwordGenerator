var userCharacters = [];
var lowerCaseLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericalValues = ["1", "2", "3", "4", "5", "6", "7", , "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "="];


function getUserOptions() {
  var lowerCaseOption = confirm("Would you like to include lowercase letters?");
  var upperCaseOption = confirm("Would you like to include uppercase letters?");
  var numericalValueOption = confirm("Would you like to include numerical values?");
  var specialCharacterOption = confirm("Would you like to include special characters?");

  if (lowerCaseOption) {

      lowerCaseLetters.join("");
      userCharacters.push(lowerCaseLetters);
  }

  if (upperCaseOption) {

      upperCaseLetters.join("");
      userCharacters.push(upperCaseLetters);
  }

  if (numericalValueOption) {

      numericalValues.join("");
      userCharacters.push(numericalValues);
  }

  if (specialCharacterOption) {

      specialCharacters.join("");
      userCharacters.push(specialCharacters);
  }

  return;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
