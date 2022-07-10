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

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...')
      resolve({ id: id, gitHubUsername: 'mosh' })
    }, 2000)
  })
}
// getUser(1)
//   .then((user) => getRepositories(user.gitHubUsername))
//   .then((repo) => getCommits(repo))
//   .then((commit) => console.log(commit)) // the last then block will return the solution
//   .catch((err) => console.log(err.message))

async function displayCommit() {
  const user = await getUser(1)
  const gitRepo = await getRepositories(user.gitHubUsername)
  const commits = await getCommits(gitRepo)
  console.log(commits)
}

displayCommit()
