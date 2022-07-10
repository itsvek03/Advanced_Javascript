// Filter out the firstName whose age is 40

const userInfo = [
  { firstName: 'Vivek', lastName: 'Maurya', age: 34 },
  { firstName: 'John', lastName: 'Doe', age: 35 },
  { firstName: 'Ramesh', lastName: 'Kumar', age: 41 },
  { firstName: 'Viju', lastName: 'Sarat', age: 33 },
  { firstName: 'Ronald', lastName: 'Christ', age: 34 },
  { firstName: 'Rati', lastName: 'Majhi', age: 54 },
]

function combine(userInfo) {
  const filterAge = userInfo
    .filter((element) => element.age < 40)
    .map((element) => element.firstName)
  return filterAge
}

function combineReduce(userInfo) {
  const filterAge = userInfo.reduce((prevValue, current) => {
    if (current.age < 40) {
      prevValue.push(current.firstName)
    }
    return prevValue
  }, [])
  return filterAge
}

console.log(combineReduce(userInfo))
