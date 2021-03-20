// Assignment Code
var generateBtn = document.querySelector("#generate");

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
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
