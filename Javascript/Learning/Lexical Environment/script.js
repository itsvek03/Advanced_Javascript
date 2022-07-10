function a() {
  c()
  function c() {
    console.log(b)
  }
}

a()
var b = 10
