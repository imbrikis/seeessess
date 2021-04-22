const box = document.querySelector('.box')
const container = document.querySelector('.container')

box.addEventListener('click', () => {
  box.classList.toggle('moveUp')
  container.classList.toggle('colorShift')
})

console.log(box.style)
