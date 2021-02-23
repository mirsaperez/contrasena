// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
// ask user how long do they want there password
let lengthSelection = prompt("how long do you want your password")
// ask user if they want uppercase
let isUppercase = confirm("do you want uppercase")
// ask user if they want lowercase
var isLowercase = confirm("do you want lowercase")
// ask user if they want numbers
// ask user if they want special characters
// validate the input from user
// combine all selections into a pool
// randomized all the selections
// pulled the length of the password from the pool
return lengthSelection
}



// Add event listener to generate button 
// when the generate password button is clicked calls the function right password on line 5 
generateBtn.addEventListener("click", writePassword);







// how to make an array 
// how to assign multiple values to an array (push) look up arraypush








// user hits button -addventlistener
// ask user how long do they want there password
// ask user if they want uppercase
// ask user if they want lowercase
// ask user if they want numbers
// ask user if they want special characters
// validate the input from user
// combine all selections into a pool
// randomized all the selections
// pulled the length of the password from the pool
// display the password - .querySelector("#password");



































