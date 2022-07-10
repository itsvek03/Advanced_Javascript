console.log('Before ')

const userInfo = getUserInfo({ id: 1, name: 'First Commit' })

console.log('User Info : ->', userInfo)

console.log('After')

function getUserInfo({ id, name }) {
  setTimeout(() => {
    return { id, name }
  }, 2000)
  return 1
}
