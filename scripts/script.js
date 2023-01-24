// Assignment code here

// Defining the elements for the password generator
const characterAmountRange = document.getElementById ("characterAmountRange")

const characterAmountNumber = document.getElementById ("characterAmountNumber")

const includeUppercaseElement = document.getElementById ("includeUppercase")

const includeNumbersElement = document.getElementById ("includeNumbers")

const includeSymbolsElement = document.getElementById ("includeSymbols")

const form = document.getElementById ("passwordForm")

const passwordDisplay = document.getElementById ("passwordDisplay")

characterAmountNumber.addEventListener("input", syncAmount)
characterAmountRange.addEventListener("input", syncAmount)

const UPPERCASE_CHAR_CODES = asciiCode(65, 90) 
const LOWERCASE_CHAR_CODES = asciiCode(97, 122)
const NUMBER_CHAR_CODES = asciiCode(48, 57) 
const SYMBOL_CHAR_CODES = asciiCode(33, 47).concat(asciiCode(58, 64)).concat(asciiCode(91, 96)).concat(asciiCode(123, 126))

function asciiCode(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array 
}

function syncAmount(e) {
  const value = e.target.value
  characterAmountRange.value = value
  characterAmountNumber.value = value
}


form.addEventListener("submit", e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const includeNumbers = includeNumbersElement.checked
  const password = generatePassword (characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})

function generatePassword (characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  console.log(LOWERCASE_CHAR_CODES)
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join("")
}