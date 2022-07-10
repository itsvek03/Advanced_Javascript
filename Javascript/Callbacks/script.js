// Callback Function
// A callback function is a function passed into the another function as an argument

setTimeout(() => {
  console.log('Timer Called')
}, 5000)

function x(y) {
  console.log('x')
  y()
}

x(function () {
  console.log('y')
})

// Blocking main thread means there is only one callstack if any operation takes more time it is preferable to use setTimeout or async and await

// Javascript is synchronous and single threaded

// Garbage Collection and removeEventListener

// Closure with Even Listener // Garbage Collection and removeEventListener
function attachListener() {
  let count = 0
  document.getElementById('clickMe').addEventListener('click', function () {
    console.log(`Button Clicked ${++count}`)
  })
  // addEventLitener have a callback function which stores the lexical environment of count
  return document.getElementById('clickMe').removeEventListener('click', () => {
    console.log('Remove Event Listener')
  })
}

attachListener()

// When we are adding event listener we should also remove it because it takes lot of memory space
