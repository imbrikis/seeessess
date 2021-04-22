const box = document.querySelector('.box')

box.addEventListener('click', () => {
  box.classList.toggle('moveUp')
})

console.log(box.style)
