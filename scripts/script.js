// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
  var passwordLength = document.querySelector('#passwordLength').value;
  let pwChars = lowercaseChars
  let addUppercase = "Would you like to add Uppercase characters to your password?";
  if(confirm(addUppercase) == true) {
    pwChars = lowercaseChars.concat(uppercaseChars)
    console.log(pwChars)
  } else {
    pwChars = lowercaseChars
    console.log(pwChars)
  }
  let addNumbers = "Would you like to add Numbers to your password?";
  if(confirm(addNumbers, addUppercase) == true) {
    pwChars = lowercaseChars.concat(numberChars)
    console.log(pwChars)
  } else {
    pwChars = lowercaseChars
    console.log(pwChars)
  }
  let addSymbols = "Would you like to add Symbols to your password?";
  if(confirm(addNumbers, addUppercase, addSymbols) == true) {
    pwChars = lowercaseChars.concat(numberChars).concat(uppercaseChars).concat(symbolChars)
    console.log(pwChars) 
  } else {
    pwChars = lowercaseChars
  }
  
  let passwordChars = []
  for (let i = 0; i <= passwordLength; i++){
    let mathTime = pwChars[Math.floor(Math.random() * pwChars.length)]
    passwordChars.push(mathTime)
    console.log(passwordChars.join(''))
  }
  document.getElementById('password').innerHTML = passwordChars.join('');

}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


var lowercaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var uppercaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','U','S','T','U','V','W','X','Y','Z']

var numberChars = ['0','1','2','3','4','5','6','7','8','9']

var symbolChars = ['"',' ','!','"','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@',',',']','[','^','_','`','{','|','}','~']
