console.log('Higher Order Function')

// Find the area and circumference of circle

const arr = [3, 4, 5, 6]
// function calculateAreaCircumDiameter(arr) {
//   let area = []
//   let cir = []
//   let dia = []
//   for (let index = 0; index < arr.length; index++) {
//     area.push(Math.PI * arr[index] * arr[index])
//     cir.push(Math.PI * 2 * arr[index])
//     dia.push(2 * arr[index])
//   }
//   return { area, cir, dia }
// }

// console.log('Area is : ->', calculateAreaCircumDiameter(arr))
// These can be done while using higher order function

function area(radius) {
  return Math.PI * radius * radius
}

function circumference(radius) {
  return Math.PI * 2 * radius
}

function diameter(radius) {
  return 2 * radius
}

function calculate(array, type) {
  let output = []
  for (let index = 0; index < array.length; index++) {
    output.push(type(array[index]))
  }
  return output
}

console.log('Area is : ->', calculate(arr, area))
console.log('Circumference is : ->', calculate(arr, circumference))
console.log('Diameter is : ->', calculate(arr, diameter))
