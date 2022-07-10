function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: 'John Doe',
        isGold: true,
        email: 'john@gmail.com',
      })
    }, 4000)
  })
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2'])
    }, 4000)
  })
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Email sent to the ${email} of movies ${movies}`)
    }, 4000)
  })
}

// Make it async await
// First convert to promise

async function displayCustomerMovie() {
  const userInfo = await getCustomer(1)
  console.log(userInfo)
  if (userInfo.isGold) {
    const getMovies = await getTopMovies()
    console.log(getMovies)
    const emailStatus = await sendEmail(userInfo.email, getMovies)
    console.log(emailStatus)
  }
}

displayCustomerMovie()
