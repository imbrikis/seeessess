const optionsWrapper = document.querySelector('.options-wrapper')
const menu = document.querySelector('.menu')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')

let menuIsExpanded = false

optionsWrapper.addEventListener('click', () => {
  if (!menuIsExpanded) {
    menu.classList.toggle('expand')
    one.classList.toggle('visibleOne')
    two.classList.toggle('visibleTwo')
    three.classList.toggle('visibleThree')
    menuIsExpanded = !menuIsExpanded
    console.log(menuIsExpanded)
  }
})

document.querySelector('.container').addEventListener('click', () => {
  if (menuIsExpanded) {
    menu.classList.toggle('expand')
    one.classList.toggle('visibleOne')
    two.classList.toggle('visibleTwo')
    three.classList.toggle('visibleThree')
    // menuIsExpanded = !menuIsExpanded 
    console.log(menuIsExpanded)
  }
})