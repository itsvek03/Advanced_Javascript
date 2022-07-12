const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
]

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const checkSome = people.some((a) => new Date().getFullYear() - a.year > 19)
console.log(checkSome)

// Array.prototype.every() // is everyone 19 or older?
const checkevery = people.every((a) => new Date().getFullYear() - a.year > 19)
console.log(checkevery)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findComment = comments.find((a) => a.id === 823423)
console.log(findComment)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

comments.splice(
  comments.findIndex((a) => a.id === 823423),
  1,
)
console.log('Filter Comments : ->', comments)
