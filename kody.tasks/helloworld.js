const task = {
  name: 'Hello World 👋',
  description: 'Hey from kody 🐻',
  exec: (resolve, reject, shell) => {
    shell.exec('say hello world!')
    resolve()
  }
}
module.exports = task