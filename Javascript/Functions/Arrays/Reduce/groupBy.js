const userInfo = [
  { firstName: 'Vivek', lastName: 'Maurya', age: 34 },
  { firstName: 'John', lastName: 'Doe', age: 35 },
  { firstName: 'Ramesh', lastName: 'Kumar', age: 37 },
  { firstName: 'Viju', lastName: 'Sarat', age: 20 },
  { firstName: 'Ronald', lastName: 'Christ', age: 34 },
  { firstName: 'Rati', lastName: 'Majhi', age: 54 },
]

// Ouput
// [{34:2,35:1,37:1,20:1,54:1}]

function groupBy(userInfo) {
  const arrangeGroup = userInfo.reduce((prevValue, current) => {
    if (prevValue[current.age]) {
      prevValue[current.age] = ++prevValue[current.age]
    } else {
      prevValue[current.age] = 1
    }
    return prevValue
  }, {})
  return arrangeGroup
}

console.log('Age Group of user Info', groupBy(userInfo))

console.log(userInfo[0].age == userInfo[4].age)
