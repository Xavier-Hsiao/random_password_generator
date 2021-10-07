// define a function to pick an element from collection array randomly 
function pickRandomCharacter(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}


// define generatePassword function
function generatePassword(options) {
  // define all the elements users might use
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  let collection = []
  
  if(options.lowercase) {
    collection = collection.concat([...lowerCaseLetters])
  }
  
  if(options.uppercase) {
    collection = collection.concat([...upperCaseLetters])
  }
  
  if(options.numbers) {
    collection = collection.concat([...numbers])
  }

  if(options.symbols) {
    collection = collection.concat([...symbols])
  }


  // remove what users might want to exclude
  collection = collection.filter(character => 
    // if(options.excludeCharacters.includes(character)) {
    //   return false
    // } 
    // return true
    !options.excludeCharacters.includes(character)
  )

  // start generating random passwords
  let password = ''
  for(let i = 0; i < options.length; i++) {
    password += pickRandomCharacter(collection)
  }
  
  // return the generated password
  return password
}

// export generatePassword function
module.exports = generatePassword