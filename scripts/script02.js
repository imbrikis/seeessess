// --- ANIMATION OPTIONS --- //
let y1 = 0 // animation start, on Y axis
const animationDuration = 10 // in milliseconds
const animationStep = 0.5 // amount to increment animation, screen height (100) divided by selected amount
const lineFadein = 4 // where animation fades in
const lineFadeOut = 8 // where animation fades out
// --- animation colors --- //
// const lineColor = '244,25,209,1' // magenta
const lineColor = '29,244,25,1' // electric green

// declare variable for animation interval
let intervalId

// select overlay image to later set a linear gradient
const c = document.querySelector('.img')

// add click event to body only if animation has completed (or has been reset)
if (y1 === 0) {
  document.body.addEventListener('click', () => {
    if (y1 === 0) {
      intervalId = setInterval(() => runAnimation(), animationDuration)
    }
  })
}

// animation function
const runAnimation = () => {
  // reset animation after it has completed
  if (y1 > 100) {
    clearInterval(intervalId)
    y1 = 0
    return
  }

  // set a linear gradient on the overlay image
  c.style.backgroundImage = `linear-gradient(rgba(0,0,0,0), 0%, rgba(0,0,0,0), ${
    y1 === 100 ? '100' : 0 + y1
  }%, rgba(${lineColor}), ${
    y1 === 100 ? '100' : lineFadein + y1
  }%, rgba(0,0,0,0), ${y1 === 100 ? '100' : lineFadeOut + y1}%, rgba(0,0,0,0))`

  // move the linear gradient down a step, producing an animation
  y1 += animationStep
}
