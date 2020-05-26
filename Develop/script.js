// Assignment Code
var generateBtn = document.querySelector("#generate");
var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LowerCase = "abcdefghijklmnopqrstuvwxyz";
var SpecialChar = "!@#$%^&*()_+=-?.,";
var numbers = "0123456789";



// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code


var UserChoice = prompt("How long would you like your password to be? Choose between 8 and 128 characters");
var SpecialChar = confirm("Would you like special characters?");
var numbers = confirm("Would you like numbers?");
var UpperCase = confirm("Would you like uppercase letters?");
var LowerCase = confirm("would you like lowercase letters?");
var passW = "";

if (UserChoice < 8) {
  var UserChoice = 8;
}
if (UserChoice > 128) {
  var UserChoice = 128;
}
generateBtn.addEventListener("click", writePassword); {

  for (var i = 0; i < UserChoice; i++) {
    if (SpecialChar === true && numbers === true && UpperCase === true && LowerCase ===true) {
      var password = (UpperCase + LowerCase + numbers + SpecialChar).charAt(Math.floor(Math.random())) * (UpperCase + LowerCase + SpecialChar + numbers.length);
    }
    if (SpecialChar === true && numbers === true && UpperCase === true && LowerCase === false) {
      var password = (UpperCase + numbers + SpecialChar).charAt(Math.floor(Math.random())) * (UpperCase + numbers + SpecialChar).length;
    }
    if (SpecialChar === true && numbers === true && UpperCase === false && LowerCase === true) {
      var password = (LowerCase + numbers + SpecialChar).charAt(Math.floor(Math.random()) * (LowerCase + numbers + SpecialChar).length);    
    }
    if (SpecialChar === true && numbers === false && UpperCase === true && LowerCase === true) {
      var password = (SpecialChar + LowerCase + UpperCase).charAt(Math.floor(Math.random()) * (SpecialChar + UpperCase + LowerCase).length);
    }
    if (SpecialChar === false && numbers === true && UpperCase === true && LowerCase === true) {
      var password = (numbers + UpperCase + LowerCase).charAt(Math.floor(Math.random()) * (numbers + UpperCase + LowerCase).length);
    }
    if (SpecialChar === false && numbers === false && UpperCase === true && LowerCase === true) {
     var password = (UpperCase + LowerCase).charAt(Math.floor(Math.random()) * (UpperCase + LowerCase).length);
    }
    if (SpecialChar === true && numbers === true && UpperCase === false && LowerCase === false) {
      var password = (SpecialChar + numbers).charAt(Math.floor(Math.random()) * (SpecialChar + numbers).length);
    }
    if (SpecialChar === true && numbers === false && UpperCase === true && LowerCase === false) {
      var password = (SpecialChar + UpperCase).charAt(Math.floor(Math.random()) * (SpecialChar + UpperCase).length);
    }
    if (SpecialChar === true && numbers === false && UpperCase === false && LowerCase === true) {
     var password = (SpecialChar + LowerCase).charAt(Math.floor(Math.random()) * (SpecialChar + LowerCase).length);
    } 
    if (SpecialChar === false && numbers === true && UpperCase === true && LowerCase === false) {
     var password = (numbers + UpperCase).charAt(Math.floor(Math.random()) * (numbers + UpperCase).length);
    }
    if (SpecialChar === false && numbers === true && UpperCase === false && LowerCase === true) {
     var password = (numbers + LowerCase).charAt(Math.floor(Math.random()) * (numbers + LowerCase).length);
    }
    if (SpecialChar === false && numbers === false && UpperCase === true && LowerCase === true) {
     var password = (UpperCase + LowerCase).charAt(Math.floor(Math.random()) * (UpperCase + LowerCase).length);
    }
    if (SpecialChar === true && numbers === false && UpperCase === false && LowerCase === false) {
     var password = (SpecialChar).charAt(Math.floor(Math.random()) * (SpecialChar).length);
    }
    if (SpecialChar === false && numbers === true && UpperCase === false && LowerCase === false) {
     var password = (numbers).charAt(Math.floor(Math.random()) * (numbers).length);
    }
    if (SpecialChar === false && numbers === false && UpperCase === true && LowerCase === false) {
     var password = (UpperCase).charAt(Math.floor(Math.random()) * (UpperCase).length);
    }
    if (SpecialChar === false && numbers === false && UpperCase === false && LowerCase === true) {
      var password = (LowerCase).charAt(Math.floor(Math.random()) * (LowerCase).length);
    }
     passW = password
  }
}