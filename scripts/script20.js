const btn = document.querySelector('.btn')
const items = document.querySelectorAll('.hide-me')

btn.addEventListener('click', () => {
  items.forEach((item) => item.classList.toggle('hide'))
})
