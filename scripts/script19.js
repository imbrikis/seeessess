const orbit1 = document.querySelector('.fins-orbit-wrapper-1')
const orbit2 = document.querySelector('.fins-orbit-wrapper-2')
const orbit3 = document.querySelector('.fins-orbit-wrapper-3')
const fin1 = document.querySelector('.fin1')
const fin2 = document.querySelector('.fin2')
const fin3 = document.querySelector('.fin3')
const outerOrbits = document.querySelectorAll('.fins-orbit-outer')
const orb = document.querySelector('.orb')
const iconContainer = document.querySelector('.icon-container')

const animationTiming = 0.5
const spinVal = `${animationTiming}s`

const spin = () => {
  orbit1.style.animationDuration = spinVal
  orbit2.style.animationDuration = spinVal
  orbit3.style.animationDuration = spinVal
}

const collapse = () => {
  outerOrbits.forEach((orbit) => {
    orbit.style.width = '4rem'
    orbit.style.height = '4rem'
  })
}

const grow = () => {
  outerOrbits.forEach((orbit) => {
    orbit.style.width = '8rem'
    orbit.style.height = '8rem'
  })
}

const finsMoveOut = () => {
  fin1.style.top = '-100rem'
  fin2.style.top = '-100rem'
  fin3.style.top = '-100rem'
  fin1.style.backgroundColor = 'rgba(180, 0, 0, 0)'
  fin2.style.backgroundColor = 'rgba(180, 0, 0, 0)'
  fin3.style.backgroundColor = 'rgba(180, 0, 0, 0)'
}

const positionNormal = () => {
  orbit1.style.animation = 'none'
  orbit2.style.animation = 'none'
  orbit3.style.animation = 'none'
  finsMoveOut()
}

const orbFlash = () => {
  orb.classList.add('flash')
  setTimeout(() => orb.classList.remove('flash'), 500)
}

// orb.addEventListener('click', () => spin())
iconContainer.addEventListener('touchstart', () => collapse())
iconContainer.addEventListener('touchend', () => {
  orbFlash()
  grow()
  spin()
  setTimeout(() => positionNormal(), 500)
})
