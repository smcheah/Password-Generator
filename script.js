// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var password = []; //criteria[0] length
  var lowerlist = ['abcdefghijklmnopqrstuvwxyz'];
  var upperlist = [lowerlist[0].toUpperCase()];
  var numlist = ['1234567890'];
  var scharlist = [" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]; //omitted double quotes

  // asks for password length, returns if out of range
  var length = prompt('Enter the password length (must be 8 - 128): ');
  if (length > 7 && length < 129) {
    alert('You have chosen a password length of ' + length);
  } else {
    alert('The password is required to be between 8 - 120 characters.');
    return ('try again: please choose a number between 8 and 128.');
  }

  // asks for character types
  var lowercase = confirm('Does the password require lowercase?');
  var uppercase = confirm('Does the password require uppercase?');
  var numeric = confirm('Does the password require numeric values?');
  var specialchar = confirm('Does the password require special characters?');

  var criteria = [length, lowercase, uppercase, numeric, specialchar];

  // if none are true then it displays an alert and returns
  if (lowercase === true || uppercase === true || numeric === true || specialchar === true) {
    alert(`Your character types will contain: \n- lowercase: ${lowercase}\n- uppercase: ${uppercase}\n- numeric: ${numeric}\n- special characters: ${specialchar}`);
  } else {
    alert('The password is required to have at least one character type.')
    return ('try again: please choose at least one character type.');
  }

  // continuously checks if length of password is met
  while (password.length != criteria[0]) {
    if (password.length != criteria[0]) {
      password.push(lowerlist[0].charAt(Math.floor(Math.random() * 26) + 1));
    }
    if (password.length != criteria[0]) {
      password.push(upperlist[0].charAt(Math.floor(Math.random() * 26) + 1));
    }
    if (password.length != criteria[0]) {
      password.push(numlist[0].charAt(Math.floor(Math.random() * 10) + 1));
    }
    if (password.length != criteria[0]) {
      password.push(scharlist[0].charAt(Math.floor(Math.random() * 31) + 1));
    }
  }

  return (password.join(''));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
