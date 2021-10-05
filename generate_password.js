// define a function to pick an element from collection array randomly 
function pickRandomCharacter(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}


// define generatePassword function
function generatePassword() {
  // define all the elements users might use
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  const dummyData = {
    length: 12,
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    excludeCharacters: '40'
  }

  let collection = []
  
  if(dummyData.lowercase) {
    collection = collection.concat([...lowerCaseLetters])
  }
  
  if(dummyData.uppercase) {
    collection = collection.concat([...upperCaseLetters])
  }
  
  if(dummyData.numbers) {
    collection = collection.concat([...numbers])
  }

  if(dummyData.symbols) {
    collection = collection.concat([...symbols])
  }


  // remove what users might want to exclude
  collection = collection.filter(character => 
    // if(dummyData.excludeCharacters.includes(character)) {
    //   return false
    // } 
    // return true
    !dummyData.excludeCharacters.includes(character)
  )

  // start generating random passwords
  let password = ''
  for(let i = 0; i < dummyData.length; i++) {
    password += pickRandomCharacter(collection)
  }
  
  // return the generated password
  return password
}

generatePassword();