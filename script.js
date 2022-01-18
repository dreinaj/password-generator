// Assignment code here
var options;

// character = ["!", "?", "<", ">", "@", "#", "$", "%", "^", "&", "*"];
// number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// letters = letters.map(toLowerCase);
// letters2 = letters.map(toUpperCase);

// var password = [];

// var toUpperCase = function (u) {
//   return u.toUpperCase();
// };

// var toLowerCase = function (l) {
//   return l.toLowerCase();
// };

// var get = document.querySelector("#generate");

// get.addEventListener("click", function () {
//   pwd = generatePassword();
//   document.getElementById("password").placeholder = pwd;
// });

function generatePassword() {
  var enter = parseInt(prompt("How many characters? Please choose between 8 and 128 characters"));

  if (enter < 8 || enter > 128 || isNaN(enter) ){
    return "Please enter a valid number between 8 and 128"
  }


  var confirmLowerCase = confirm("Will this password contain Lowercase letters?");
  var confirmUpperCase = confirm("Will this password contain Uppercase letters?");
  var confirmNumber = confirm("Will this password contain numbers?");
  var confirmCharacter = confirm("Will this password contain special characters?");


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

  // for (var i = 0; i < enter; i++) {
  //   var pickOptions = options[Math.floor(Math.random() * options.length)];
  //   password.push(pickOptions);
  // }

  // var pwd = password.join("");

  // return pwd;
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
