const hamburgerIcon = document.querySelector('.hamburger-icon')
const navMenu = document.querySelector('.nav-menu')

hamburgerIcon.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu-visible')
})
