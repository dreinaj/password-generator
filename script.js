// Assignment code here
//declaring options which are the options the users will have as they set the criteria for the password
var options;

//delcaring the generate password function with a prompt of the criteria for the number of values
function generatePassword() {
  var enter = parseInt(prompt("How many characters? Please choose between 8 and 128 characters"));

  if (enter < 8 || enter > 128 || isNaN(enter) ){
    return "Please enter a valid number between 8 and 128"
  }

//declaration of the value options that the user will have when setting the criteria
  var confirmLowerCase = confirm("Will this password contain Lowercase letters?");
  var confirmUpperCase = confirm("Will this password contain Uppercase letters?");
  var confirmNumber = confirm("Will this password contain numbers?");
  var confirmCharacter = confirm("Will this password contain special characters?");

//if user selects FALSE/CANCEL for all of them then we will provide a prompt that they MUST make one selection
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumber && !confirmCharacter) {
    return "Please select atleast one option"
  }
  var correctValues = ""
  var password = []

  if (confirmLowerCase) {
    correctValues += "abcdefghijklmnopqrstuvwxyz"
  }

  if (confirmUpperCase) {
    correctValues += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (confirmCharacter) {
    correctValues += "!@#$%^&*()"
  }

  if (confirmNumber) {
    correctValues += "1234567890"
  }
console.log (correctValues)

//marth random of values based on the criteria the user selects
  for (var i = 0; i < enter; i++) {
    var pickOptions = correctValues[Math.floor(Math.random() * correctValues.length)];
    password.push(pickOptions);
  }

  var pwd = password.join("");

  return pwd;
}

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
