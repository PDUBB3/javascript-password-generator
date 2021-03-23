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
const specialchararray = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  ".",
  ".",
  ",",
  "~",
  "/",
];

// Declare variables in global memory

let islowercase;
let isuppercase;
let isnumeric;
let isspecialchar;

// Declare new array to contain types of character chosen
const chosenchararray = [];

// Declare function which generates password
function generatePassword() {
  const passwordarray = [];
  const passwordlength = prompt(
    "How many characters would you want your password to be?"
  );
  console.log(passwordlength);
  const passwordlengthnumber = parseInt(passwordlength);
  console.log(passwordlengthnumber);

  // confirm if lowercase characters are included
  const islowercase = confirm("Do you want password to include lowercase?");
  console.log(islowercase);

  // Confirm if uppercase characters are included
  const isuppercase = confirm(
    "Do you want password to include uppercase characters?"
  );
  console.log(isuppercase);

  // Confirm if numeric characters are included
  const isnumeric = confirm(
    "Do you want password to include numeric characters?"
  );
  console.log(isnumeric);

  // Confirm is special characters are included
  const isspecialchar = confirm(
    "Do you want password to include special character?"
  );
  console.log(isspecialchar);

  // Create if/else statement that if the password is between 8 and 128 characters is true or else alert with password should be between 8 to 128
  if (passwordlengthnumber >= 8 && passwordlengthnumber <= 128) {
  } else {
    alert("Password should be between 8 and 128 characters");
  }
  // add validations functions for generate a new array with characters chosen
  if (islowercase) {
    chosenchararray.push(lowercasearray);
  }
  if (isuppercase) {
    chosenchararray.push(uppercasearray);
  }
  if (isnumeric) {
    chosenchararray.push(numericarray);
  }
  if (isspecialchar) {
    chosenchararray.push(specialchararray);
  }
  if (!islowercase && !isuppercase && !isnumeric && !isspecialchar) {
    alert("At least one type of character needs to be selected");
  }
  console.log(chosenchararray);

  //create loop to choose password

  for (let i = 0; i < passwordlength; i++) {
    let randomarray =
      chosenchararray[Math.floor(Math.random() * chosenchararray.length)];
    let randomcharacter =
      randomarray[Math.floor(Math.random() * randomarray.length)];

    passwordarray.push(randomcharacter);
  }
  console.log(passwordarray);
  // create variable to store generated password
  const password = passwordarray.join("");
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
