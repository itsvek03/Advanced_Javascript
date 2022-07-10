function maxNumber(arr) {
  const max = arr.reduce((prev, current) => {
    if (prev < current) {
      prev = current
    }
    return prev
  })

  return max
}

console.log('Max Number is  : -> ', maxNumber([23, 24, 92, 78, 65]))
