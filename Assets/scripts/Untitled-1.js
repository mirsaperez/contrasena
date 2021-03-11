// Assignment Code
var generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");
generateBtn.addEventListener("click", () => {
  // ask user how long do they want there password
  let lengthSelection = prompt("how long do you want your password")
  // ask user if they want uppercase
  let isUppercase = confirm("do you want uppercase")
  // ask user if they want lowercase
  var isLowercase = confirm("do you want lowercase")
  // ask user if they want numbers
  var isNumbers = confirm("do you want numbers")
  // ask user if they want special characters
  var isSpecialCharacters = confirm("do you want special characters")
  // validate the input from user
  if (lengthSelection <= 8 || lengthSelection >= 128) { 
  } 
  // the goal of this function is to generate a password
  // we must take the users input from the prompt 
  // to make sure its a valid range from 8 to 128
  // the user must pick if they want uppercase lowercase numbers and special characters
  var emptystring = ""
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeric = '1234567890';
  const special = '/\!@#$%^&*()';
  // the password must contain uppercase lowercase numbers and special characters
  if (isUppercase){
    emptystring += uppercase
  }
  if (isLowercase) { 
    emptystring += lowercase
  }
  if (isNumbers ) {
    emptystring += numeric
  }
  if (isSpecialCharacters) {
    emptystring += special
  }
  let genpassword = ""
  // password must be in a random order from uppercase lowercase numbers and special characters
  // the range must be the same length as the generated password 
  for (let i = 0 ; i < lengthSelection ; i++) {
    var randomnumber = Math.floor(Math.random()*emptystring.length)
    genpassword += emptystring[randomnumber]
  } 
  passwordText.innerHTML = genpassword;
});