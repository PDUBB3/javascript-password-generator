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
const uppercasearray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Declare numeric character arrays in global memory
const numericarray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Declare special character arrays in global memory
const specialchararray = [ "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}".
. "~", "/"];


// Declare variables in global memory

let islowercase;
let isuppercase;
let isnumeric;
let isspecialchar;

// Declare a new array which contains chosen characters
const chosenchararray = [] ;


// Declare function which generates password
const generatePassword = function () {

  // Create prompt password length which is more than 8 but less than 128 characters
  let passwordlength = prompt("What is the length of your password?");
  console.log(passwordlength);

  // Create if/else statement that if the password is between 8 and 128 characters is true alert with hurray
  if (passwordlength > 8 && passwordlength < 128) {
    alert("Hurray");
  }

  //if false alert that password needs to be 8 to 128 characters
    else { 
    alert("Password needs to be between 8 and 128 characters");
    }

// Create a validation function for the character type to generate a new array with the characters chosen
if(islowercase) {
  chosenchararray.push(lowercasearray)
}
if(isuppercase) {
  chosenchararray.push(uppercasearray)
}

if(isnumeric) {
  chosenchararray.push(numericarray)
}
if(isspecialchar) {
  chosenchararray.push(specialchararray)
}
if(!lowercasearray && !isuppercase && !isnumeric &&!isspecialchar) {
  alert("At least one type of character needs to be selected")
}
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
