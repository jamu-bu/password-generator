// Assignment Code
var generateBtn = document.querySelector("#generate");
//arrays
uppercaseArray = ["A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowercaseArray = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l","m","n","o","p","q","r","s","t","u","v", "w", "x","y","z"];
specialArray =["!","@","#", "$", "%", "^", "&", "*", "(", ")", "-","=","+", "," ,";", ":","<"," ","[","]","{","}", ".","~",">","?","/","\\", "'"];
numericArray = ["0", "1", "2","3", "4", "5", "6", "7", "8", "9"]
// Write password to the #password input
function writePassword() {
  let passwordLength = prompt("Please input number value for password length between 8-128 characters");
  
  while (parseInt(passwordLength)< 8 || parseInt(passwordLength)>128) {
    alert("Please input number value between 8-128 to generate password")
    passwordLength = prompt("Please input number value for password length between 8-128 characters");
  }
  var passwordLengthInt = parseInt(passwordLength);
  var passwordGenerated = false;
  while (!passwordGenerated) {
    let passwordUppercase = prompt("Would you like to include uppercase letters in your password? Y/N?").toUpperCase();
    var uppercaseSelected = null;
    while (uppercaseSelected == null) { 
      if (passwordUppercase==="Y") {
        uppercaseSelected = true;
      }
        else if (passwordUppercase==="N") {
          uppercaseSelected = false;
      } else if (passwordUppercase=== null) {
        alert("You must answer Y or N");
        passwordUppercase = prompt("Would you like to include uppercase letters in your password? Y/N?").toUpperCase();
      } 
      else {
        alert("You must answer Y or N");
        passwordUppercase = prompt("Would you like to include uppercase letters in your password? Y/N?").toUpperCase();
      }}

    let passwordLowercase = prompt("Would you like to include lowercase letters in your password? Y/N").toUpperCase();
    var lowercaseSelected = null;
    while (lowercaseSelected == null) { 
      if (passwordLowercase==="Y") {
        lowercaseSelected = true;
      }
        else if (passwordLowercase==="N") {
          lowercaseSelected = false;
      } else {
        alert("You must answer Y or N");
        passwordLowercase = prompt("Would you like to include lowercase letters in your password? Y/N?").toUpperCase();
      }}

    let passwordSpecial= prompt("Would you like to include spcial characters in your password? Y/N").toUpperCase();
    var specialSelected = null;
    while (specialSelected == null) { 
      if (passwordSpecial==="Y") {
        specialSelected = true;
      }
        else if (passwordSpecial==="N") {
          specialSelected = false;
      } else {
        alert("You must answer Y or N");
        passwordSpecial = prompt("Would you like to include special characters in your password? Y/N?").toUpperCase();
      }}

    let passwordNumeric = prompt("Would you like to include numbers in your password? Y/N").toUpperCase();
    var numericSelected = null;
    while (numericSelected == null) { 
      if (passwordNumeric==="Y") {
        numericSelected = true;
      }
        else if (passwordNumeric==="N") {
          numericSelected = false;
      } else {
        alert("You must answer Y or N");
        passwordNumeric = prompt("Would you like to include numbers in your password? Y/N?").toUpperCase();
      }}

    if (uppercaseSelected || lowercaseSelected || numericSelected || specialSelected ){
      alert("Generating password now...");
      generatePassword(passwordLengthInt,uppercaseSelected,lowercaseSelected,specialSelected, numericSelected);
      passwordGenerated = true; 
    } else {
      alert ("You must select one character type to create your password: Uppercase, Lowercase, Special, Numeric");
    }
  }
}

function generatePassword(length, uppercase, lowercase, special, numeric) {
  var password = "";
  var criteria = [];
  var passwordText = document.querySelector("#password");


  if (uppercase == true) {
    criteria = criteria.concat(uppercaseArray)
  }
  if (lowercase == true) {
    criteria = criteria.concat(lowercaseArray)
  }
  if (special == true) {
    criteria = criteria.concat(specialArray)
  }
  if (numeric == true) {
    criteria = criteria.concat(numericArray)
  }

  for (var i = 0; i < length; i++) {
    var randomIDX = Math.floor(Math.random() * criteria.length);
    criteria[randomIDX];
    password = password.concat(criteria[randomIDX]);
  }





  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);