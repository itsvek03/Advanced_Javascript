// Synchronous
console.log('First')
console.log('Second')

console.log('--------------------------')
// Asyncrohnous
console.log('First')
setTimeout(() => {
  console.log('Reading the files')
}, 2000)
console.log('Second')
