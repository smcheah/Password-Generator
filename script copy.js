// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var password = [];

  // input length of password
  var inputLength = InputLength();
  if (inputLength > 7 && inputLength < 129) {
    alert(`You have chosen a password length of ${inputLength}`);
  } else {
    alert('The password is required to be between 8 - 120 characters.');
    return ('try again: please choose a number between 8 and 128.');
  }

  // input character types wanted
  var inputCharTypes = InputCharTypes();
  // if no character types are chosen, then it displays an alert and returns
  if (inputCharTypes.some(IsEqualTo(true))) {
    alert(`Your character types will contain: \n- lowercase: ${inputCharTypes[0]}\n- uppercase: ${inputCharTypes[1]}\n- numeric: ${inputCharTypes[2]}\n- special characters: ${inputCharTypes[3]}`);
  } else {
    alert('The password is required to have at least one character type.')
    return ('try again: please choose at least one character type.');
  }

  // generates password randomly
  RandomisePassword(password, inputLength, inputCharTypes);
  
  return (password.join(''));
}

function InputLength() {
  // asks for password length, returns if out of range
  var userLength = prompt('Enter the password length (must be 8 - 128): ');
  return userLength;
}

function InputCharTypes() {
  // asks for character types
  var lowerCase = confirm('Does the password require lowercase?');
  var upperCase = confirm('Does the password require uppercase?');
  var numeric = confirm('Does the password require numeric values?');
  var specialChar = confirm('Does the password require special characters?');
  
  var criteria = [lowerCase, upperCase, numeric, specialChar]
  return criteria
}

// checks whether at least one element is equal to input
function IsEqualTo(input) {
  var equal = (element) => element === input; // the function with parameter element contains a statement that element equals input
  return equal;
}

function RandomisePassword(password, inputLength, inputCharTypes) {
  //character types: lowercase, uppercase, numbers, special
  var charType = ['abcdefghijklmnopqrstuvwxyz',
    'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
    '1234567890',
    "\"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"]; //removed 'space'

  var count = [0, 0, 0, 0]; // keeps track of char types not used

  while (password.length != inputLength) {
    var randomIndex = Math.floor(Math.random() * 4);
    var index = randomIndex;

    if (inputCharTypes[index] === true) {
      password.push(charType[index].charAt(Math.floor(Math.random() * charType[index].length) + 1)); //add a random character to the password
      count[index]++;
    }
    //if certain characters have not been used
    if (count.some(IsEqualTo(0))) {
      for (var i = 0; i < 4; i++) {
        if (count[i] === 0 && inputCharTypes[i] === true) {
          password.push(charType[i].charAt(Math.floor(Math.random() * charType[i].length) + 1)); //add a character to the password
          count[i]++;
        }
      }
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);