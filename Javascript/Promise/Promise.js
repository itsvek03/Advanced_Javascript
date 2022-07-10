// promise is an object that holds the eventual result of an asynchronous operation
// When an asynchronousoperation is complete it can either results as value or an error

// It has three state :
// -> First when we  create  promise it is in the pending state
// Then it will kick async opeartion
// When the promise is ready :->
// -> If the async operation is successfully than then it is considered as fulfilled state
// -> If the async operation is successfully than then it is considered as rejected state

// For consuming the promise we have to use then and catch
// If the result is successfull then it will come under the then block else catch block

// const p = new Promise((resolve, reject) => {
//   // async operation

//   //resolve(1)
//   reject(new Error('message'))
// })

// p.then((res) => console.log(res)).catch((err) => console.log(err.message))

// Convert these into  promise
// console.log('Before')
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits)
//     })
//   })
// })
// console.log('After')

// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log('Reading a user from a database...')
//     callback({ id: id, gitHubUsername: 'mosh' })
//   }, 2000)
// }

// function getRepositories(username, callback) {
//   setTimeout(() => {
//     console.log('Calling GitHub API...')
//     callback(['repo1', 'repo2', 'repo3'])
//   }, 2000)
// }

// function getCommits(repo, callback) {
//   setTimeout(() => {
//     console.log('Calling GitHub API...')
//     callback(['commit'])
//   }, 2000)
//}

console.log('Before')

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...')
      resolve({ id: id, gitHubUsername: 'mosh' })
    }, 2000)
  })
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...')
      resolve({ username, repo: ['repo1', 'repo2', 'repo3'] })
    }, 2000)
  })
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API Commit...')
      resolve({ repo, commits: ['commit'] })
    }, 2000)
  })
}

getUser(1)
  .then((user) => getRepositories(user.gitHubUsername))
  .then((repo) => getCommits(repo))
  .then((commit) => console.log(commit)) // the last then block will return the solution
  .catch((err) => console.log(err.message))

//{
//     repo: { username: 'mosh', repo: [ 'repo1', 'repo2', 'repo3' ] },
//     commits: [ 'commit' ]
//   }

// When we want two promises runs in parallel and return the result

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Async Operation 1')
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Async Operation 2')
    //reject(new Error('Error msg'))
  }, 2000)
})

// p1 and p2 runs parallely and return the result after all the promise is completed
// If one error is present,  then it will return the error

// Return the result in array
Promise.all([p1, p2])
  .then((res) => console.log(res)) // [ 'Async Operation 1', 'Async Operation 2' ]
  .catch((err) => console.log(err.message))
