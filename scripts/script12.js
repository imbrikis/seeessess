const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')

let widthP, heightP, animFrame

function fadeOut() {
  var r = 0.1 + Math.random() * 0.1
  ctx.fillStyle = `rgba(0, 0, 0, ${r})`
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  setTimeout(fadeOut, 100)
}

// draw stuff here
const draw = () => {
  const radius = Math.floor(Math.random() * 2) + 1

  ctx.beginPath()
  ctx.arc(
    Math.floor(Math.random() * (widthP * 1000) + 1),
    Math.floor(Math.random() * (widthP * 1000) + 1),
    radius,
    0,
    Math.PI * 2
  )
  ctx.fillStyle = 'white'
  ctx.fill()
  console.log('hi')
  animFrame = requestAnimationFrame(draw)
}

const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame

const cancelAnimationFrame =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame

const resizeCanvas = () => {
  cancelAnimationFrame(animFrame)
  if (
    window.innerHeight > window.innerWidth ||
    window.innerHeight === window.innerWidth
  ) {
    canvas.width = window.innerWidth
    canvas.height = window.innerWidth
  } else {
    canvas.width = window.innerHeight
    canvas.height = window.innerHeight
  }

  widthP = canvas.width / 1000
  heightP = canvas.height / 1000

  animFrame = requestAnimationFrame(draw)
}

window.addEventListener('resize', resizeCanvas)

resizeCanvas()
fadeOut()
