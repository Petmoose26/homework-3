// display password in text area.
function displayRandomPassword() {
  var password = generatePassword();
  var textArea = document.getElementById('password');
  textArea.value = password;
}

//generate password after button is pushed  by adding event listener to button.
var generatePasswordButton = document.getElementById('generate');
generatePasswordButton.addEventListener('click', displayRandomPassword);

//get user input to help generate password
function generatePassword() {
  var userLength = prompt('choose how long you would like your password to be 8 through 128');
  var upperCase = confirm('would you like upper case letters?');
  var lowerCase = confirm('would you like lower case letters?');
  var specialCharacters = confirm('would you like special characters?');
  var numbers = confirm('would you like numbers?');
  var password = generatePasswordFromCriteria (upperCase, lowerCase, specialCharacters, numbers, userLength);
  return password
}
// give var's strings, look to see what is true from user response. 
function generatePasswordFromCriteria(upperCase, lowerCase, specialCharacters, numbers, userLength) {
  var upperCase = ('QWERTYUIOPASDFGHJKLZXCVBNM');
  var lowerCase = (upperCase.toLowerCase());
  var specialCharacters = ('!@#$%^&*()+?');
  var numbers = ('1234567890');
  var includedCharacters = "";
  password = "";
  //checking if password is to include what the user agreed to. 
  if (upperCase) {
    includedCharacters += upperCase;
  }
  if (lowerCase) {
    includedCharacters += lowerCase;
  }
  if (specialCharacters) {
    includedCharacters += specialCharacters;
  }
  if (numbers) {
    includedCharacters += numbers;
  }
  //running a for loop to run though the strings
  for (var i = 0; i < userLength; i++) {
    //random position from  included characters 
    var randomIndex = Math.floor(Math.random() * includedCharacters.length);
    //use the random position to find random character. 
    var randomChar = includedCharacters.charAt(randomIndex);
    password += randomChar
  }
  return password;
}
 
