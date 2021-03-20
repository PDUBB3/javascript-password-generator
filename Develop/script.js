// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare lower case character arrays in global memory
const lowercasearray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Declare upper case character arrays in global memory

// Declare numeric character arrays in global memory

// Declare special character arrays in global memory

const generatePassword = function () {
  let passwordlength = prompt("What is the length of your password?");
  console.log(passwordlength);

  if (passwordlength > 8 && passwordlength < 128) {
    alert("Hurray");
  }
};

// Declare function which generates password
function generatePassword() {
  // create variable to store generated password
  var password = "";

  // return with password thats created
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
