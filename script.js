// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // input length of password
  var inputLength = prompt('Enter the password length (must be 8 - 128): ');
  
  if (inputLength > 7 && inputLength < 129) {
    alert(`You have chosen a password length of ${inputLength}`);
  } else {
    alert('The password is required to be between 8 - 120 characters.');
    return 'try again: please choose a number between 8 and 128.';
  }

  var lowerCase = confirm('Does the password require lowercase?');
  var upperCase = confirm('Does the password require uppercase?');
  var numeric = confirm('Does the password require numeric values?');
  var specialChar = confirm('Does the password require special characters?');
  
  var criteria = [lowerCase, upperCase, numeric, specialChar];

  // if no character types are chosen, then it displays an alert and returns
  if (criteria.some(isEqualTo(true))) {
    alert(`Your character types will contain: \n- lowercase: ${criteria[0]}\n- uppercase: ${criteria[1]}\n- numeric: ${criteria[2]}\n- special characters: ${criteria[3]}`);
  } else {
    alert('The password is required to have at least one character type.');
    return 'try again: please choose at least one character type.';
  }
  
  //character types: lowercase, uppercase, numbers, special
  var charType = ['abcdefghijklmnopqrstuvwxyz',
    'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
    '1234567890',
    "\"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"]; //removed 'space'

  var randomPassword = [];
  var count = [0, 0, 0, 0]; // keeps track of char types not used

  // generates password randomly
  while (randomPassword.length != inputLength) {
    var randomIndex = Math.floor(Math.random() * 4);
    var index = randomIndex;

    if (criteria[index] === true) {
      randomPassword.push(charType[index].charAt(Math.floor(Math.random() * charType[index].length) + 1)); //add a random character to the password
      count[index]++;
    }
    //if certain characters have not been used
    if (count.some(isEqualTo(0))) {
      for (var i = 0; i < 4; i++) {
        if (count[i] === 0 && criteria[i] === true) {
          randomPassword.push(charType[i].charAt(Math.floor(Math.random() * charType[i].length) + 1));
          count[i]++;
        }
      }
    }
  }
  return randomPassword.join('');
}

// checks whether at least one element is equal to input
function isEqualTo(input) {
  var equal = (element) => element === input; // the function with parameter element contains a statement (element equals input)
  return equal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);