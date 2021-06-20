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
  ctx.fillStyle = 'white'
  ctx.fillRect(500, 500, 5, 5)

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
