// async code example

const footer = document.querySelector('.footer')
const html = `
  <h1>Hello</h1>
`

console.log('start')

const saySomething = async () =>
  await footer.insertAdjacentHTML('beforeend', html)

setTimeout(() => {
  saySomething()
}, 2000)

console.log('end')
