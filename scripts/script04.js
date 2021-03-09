const colorBlock = document.querySelector('.color-block')
const btn = document.querySelector('.btn')
console.log(btn)

btn.addEventListener('click', () => {
  colorBlock.classList.toggle('move-left')
})
