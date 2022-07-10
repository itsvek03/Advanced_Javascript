console.log('Hello world')

// function Statement or function declaration
function a() {
  console.log('a called')
}
a()

// function declaration
var b = function () {
  console.log('b called')
}
b()

// Difference between function statement and declaration
// hoisting in function statement, before execution of code function a stored the body statemnet where as in function declaration b will treated as variable
// therefore it will store undefined

// Anonymous function
// a function without name is called anonymous function
// we can only use anonymous function when we are using with values otherwise it will return error
var c = function () {
  console.log('c called')
}
c()

// Named Function Expression
// when declaration and function name are given is called named function Expression
var d = function xyz() {
  console.log('d called')
}
d()
//xyz() // Error

// Difference between Parameters and arguments

function demo(a, b) {} // parameters

demo(a, b) //arguments

// First class function
// the ability of function to be used as value and can be passed as an argument to the another function
//and also return from the function is called first class function

function pass() {
  return function (aa, bb) {
    return aa + bb
  }
}

//console.log(pass(10, 12)) //ƒ () {console.log(a, b)}
const result = pass()
console.log(result(20, 30))

const result2 = pass()(40, 90)
console.log(result2)
