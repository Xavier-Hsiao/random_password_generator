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
  console.log('Collection:', collection)

  // remove what users might want to exclude

  // start generating random passwords

  // return the generated password
  console.log('Boot the password generating function!')
}

generatePassword();