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
  //character types: lowercase, uppercase, numbers, special
  var chartype = ['abcdefghijklmnopqrstuvwxyz',
    'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
    '1234567890',
    "\"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"]; //removed 'space'

  // asks for password length, returns if out of range
  var userlength = prompt('Enter the password length (must be 8 - 128): ');
  if (userlength > 7 && userlength < 129) {
    alert(`You have chosen a password length of ${userlength}`);
  } else {
    alert('The password is required to be between 8 - 120 characters.');
    return ('try again: please choose a number between 8 and 128.');
  }

  // asks for character types
  var lowercase = confirm('Does the password require lowercase?');
  var uppercase = confirm('Does the password require uppercase?');
  var numeric = confirm('Does the password require numeric values?');
  var specialchar = confirm('Does the password require special characters?');

  // if no character types are chosen, then it displays an alert and returns
  if (lowercase === true || uppercase === true || numeric === true || specialchar === true) {
    alert(`Your character types will contain: \n- lowercase: ${lowercase}\n- uppercase: ${uppercase}\n- numeric: ${numeric}\n- special characters: ${specialchar}`);
  } else {
    alert('The password is required to have at least one character type.')
    return ('try again: please choose at least one character type.');
  }

  var chartypechoice = [lowercase, uppercase, numeric, specialchar];
  var count = [0, 0, 0, 0]; // keeps track of char types not used
  // generates password randomly
  while (password.length != userlength) {
    var randomindex = Math.floor(Math.random() * 4);
    var index = randomindex;

    if (chartypechoice[index] === true) {
      password.push(chartype[index].charAt(Math.floor(Math.random() * chartype[index].length) + 1)); //add a random character to the password
      count[index]++;
    }

    //if certain characters have not been used
    if ((count[0] === 0 || count[1] === 0 || count[2] === 0 || count[3] === 0)) {
      for (var i = 0; i < 4; i++) {
        if (count[i] === 0 && chartypechoice[i] === true) {
          password.push(chartype[i].charAt(Math.floor(Math.random() * chartype[i].length) + 1)); //add a character to the password
          count[i]++;
        }
      }
    }
  }
  return (password.join(''));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);