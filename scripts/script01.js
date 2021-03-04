const optionsWrapper = document.querySelector('.options-wrapper')
const menu = document.querySelector('.menu')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')

let menuIsExpanded = false

optionsWrapper.addEventListener('click', (e) => {
  if (e.target.className !== 'container') {
    menu.classList.toggle('expand')
    one.classList.toggle('visibleOne')
    two.classList.toggle('visibleTwo')
    three.classList.toggle('visibleThree')
  }
})

document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.className === 'container') {
    menu.classList.remove('expand')
    one.classList.remove('visibleOne')
    two.classList.remove('visibleTwo')
    three.classList.remove('visibleThree') 
  }
})