console.log('Before')

getUserInfo({ id: 1, userName: 'itsvek03' }, function (user) {
  console.log('User Info', user)
  getUserRepoInfo(user.userName, function (RepoInfo) {
    console.log(RepoInfo)
  })
})

console.log('After')

function getUserInfo({ id, userName }, callback) {
  setTimeout(() => {
    console.log('Reading from the database')
    callback({ id, userName })
  }, 2000)
}

// Convert these function in callback
function getUserRepoInfo(userName, callback) {
  setTimeout(() => {
    console.log('Getting user Repo Info')
    callback({ userName, repo: ['repo1', 'repo2', 'repo3'] })
  }, 3000)
}
