console.log('Polly Bind')

let personInfo = {
  fullName: 'Vivek Maurya',
  age: 23,
}

function getPersonInfo(_hometown, _city) {
  return `Ny Name is ${this.fullName} and my age is ${this.age}. My Location is ${_hometown} and city is ${_city}`
}

// const getDetails = getPersonInfo.bind(personInfo, 'Pune')
// console.log(getDetails('Mumbai'))

Function.prototype.bindDemo = function (...args) {
  let obj = this // obj store personInfo Object
  params = args.slice(1) // [Pune]
  return function (...args2) {
    //..args2 --> Mumbai
    return obj.apply(args[0], [...params, ...args2])
  }
}

const getDetails2 = getPersonInfo.bindDemo(personInfo, 'Pune')
console.log(getDetails2('Mumbai'))
