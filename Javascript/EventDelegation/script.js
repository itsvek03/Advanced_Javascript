console.log('Event Delegation')

document.querySelector('#categories').addEventListener('click', (e) => {
  window.location = `/${e.target.id}`
})

// If it has id has class data-uppercase it should give UPPER CASE
document.querySelector('#DemoInput').addEventListener('keyup', (e) => {
  console.log(e)
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase()
  }
})

// OOPS Concept
// Blockchain Related Videos
// CSS

// Saturday
// Full Javascript Session Video
// Assignment Submission
// try catch block
// Akshay Saini fulll complete vidoe
