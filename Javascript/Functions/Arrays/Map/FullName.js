const userInfo = [
  { firstName: 'Vivek', lastName: 'Maurya', age: 34 },
  { firstName: 'John', lastName: 'Doe', age: 35 },
  { firstName: 'Ramesh', lastName: 'Kumar', age: 37 },
  { firstName: 'Viju', lastName: 'Sarat', age: 20 },
  { firstName: 'Ronald', lastName: 'Christ', age: 34 },
  { firstName: 'Rati', lastName: 'Majhi', age: 54 },
]

// Print the full userName of users

function fullName(userInfo) {
  const fullUserInfo = userInfo.map((current) => {
    return current.firstName + ' ' + current.lastName
  })

  return fullUserInfo
}

console.log(fullName(userInfo))
