console.log('Event Capturing and Event Bulbbling')

document.querySelector('#grandparent').addEventListener(
  'click',
  () => {
    console.log('GrandParent Clicked')
  },
  false,
)

document.querySelector('#parent').addEventListener(
  'click',
  () => {
    console.log('Parent Clicked')
  },
  true,
)

document.querySelector('#child').addEventListener(
  'click',
  () => {
    console.log('Child Clicked')
  },
  false,
)
