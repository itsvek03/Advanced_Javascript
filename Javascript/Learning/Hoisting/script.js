var x = 10
a()
b()
c()
console.log(x)
console.log(d())

function a() {
  var x = 10
  console.log(x)
}

function b() {
  var x = 100
  console.log(x)
}

function c() {
  console.log(x)
}

function d() {
  return undefined
}

console.log(this.a)
