// Password Generator

//Variabele to hold lowercase, uppercase, numeric, and/or special characters
var passwordCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLower = "abcdefghijklmnopqrstuvwxyz";
var passwordNumber = "0123456789";
var passwordSpecial = "~`!@#$%^&*()-_+={}[]:;'<>,.?/";
var password = "";
var passwordCharacters = "";

//This variable is the Password Generate Button.
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  //Function to determine length.
  var passwordLength = prompt("Please specify number of charachters in Password (8-128).");

  if (passwordLength >= 8 && passwordLength <= 128) {
    var passwordLength = parseInt(passwordLength);
  } else {
    alert("Length is underfined, try again")
    generatePassword();
  }

  //Give user the option to include capital letters.
  var incPasswordCapital = confirm("Do you want capital letters in your password?");

  if (incPasswordCapital === true) {
    passwordCharacters += passwordCapital;
  }

  //Give user the option to include lower case letters.
  var incPasswordLower = confirm("Do you want lower case letters in your password?");

  if (incPasswordLower === true) {
    passwordCharacters += passwordLower;
  }

  //Give user the option to include numbers.
  var incPasswordNumber = confirm("Do you want numbers in your password?");

  if (incPasswordNumber === true) {
    passwordCharacters += passwordNumber;
  }

  //Give user the option to include special characters.
  var incPasswordSpecial = confirm("Do you want special characters in your password?");

  if (incPasswordSpecial === true) {
    passwordCharacters += passwordSpecial;
  }
  randomisePassword()

  function randomisePassword() {
    //ensure there are nothing in password
    password = "";
    //add loop to get password chars.
    for (var i = 0; i < passwordLength; i++) {
      password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
      //if password has atleast one of each specified cases than contiue.., else revoke randomisePassword.
    }
    if (password.indexOf(passwordCapital) && password.indexOf(passwordLower) && password.indexOf(passwordNumber) && password.indexOf(passwordSpecial)) {
      var passwordText = document.getElementById("password");
      passwordText.textContent = password;
    } else {
      randomisePassword();
    }
  }
}

//When I click a button, write password in the .
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input  
function writePassword() {
  generatePassword();
}