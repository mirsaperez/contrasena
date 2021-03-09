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
var isNumbers = confirm("do you want numbers")
// ask user if they want special characters
var isSpecialCharacters = confirm("do you want special characters")
// validate the input from user
if (lengthSelection ≤ 8 || lengthSelection ≥ 128) { 

}
  // if lengthSelection is not a number return 
  
    // if lengthSelection is less than 8 or greater then 128 return
    //if (condition) then { branch_1 } else { branch_2 }
   
    
    // if isUppercase + isLowercase + isNumber + isSpecialCharacters = 0 then return
    
  // create array selection 
   
    //if isUppercase then push uppercase array into selection array

    //if isLowercase then push Lowercase array into selection array

    //if isNumbers then push Numbers array into selection array

    //if isSpecialCharacters then push SpecialCharacters array into selection array

  //create new array called password 

    //start fourloop(i is leess than length selection)

    //while in loop select random index from selection array

    //return pasword 

// combine all selections into a pool

// randomized all the selections

// pulled the length of the password from the pool
return lengthSelection
}



// Add event listener to generate button 
// when the generate password button is clicked calls the function right password on line 5 
generateBtn.addEventListener("click", writePassword);







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



































