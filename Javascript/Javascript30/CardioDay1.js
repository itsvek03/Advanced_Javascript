const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornFilter = inventors.filter(
  (item) => item.year >= 1500 && item.year < 1600,
)
console.log(bornFilter)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const nameMap = inventors.map((item) => {
  return item.first + ' ' + item.last
})
console.log(nameMap)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const invertorsBirthSort = inventors.sort((a, b) => (a.year > b.year ? 1 : -1))
console.log(invertorsBirthSort)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const yearCounts = inventors.reduce((prevCal, currentVal) => {
  return prevCal + (currentVal.passed - currentVal.year)
}, 0)
console.log(yearCounts)

// 5. Sort the inventors by years lived
const sortLived = inventors.sort((a, b) => {
  const last = a.passed - a.year
  const first = b.passed - b.year
  return last > first ? -1 : 1
})
console.log(sortLived)

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortByLastName = inventors.sort((first, second) => {
  return first.last > second.last ? -1 : 1
})
console.log(sortByLastName)

const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
]
// 8. Reduce Exercise
// Sum up the instances of each of these

const countData = data.reduce((prevCal, currentVal) => {
  if (!prevCal[currentVal]) {
    prevCal[currentVal] = 1
  } else {
    prevCal[currentVal] += 1
  }
  return prevCal
}, {})
console.log(countData)
