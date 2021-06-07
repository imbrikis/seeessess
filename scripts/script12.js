const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')

let widthP, heightP, animFrame

// draw stuff here
const draw = () => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
  ctx.fillRect(0, 0, widthP * 1000, heightP * 1000)
  ctx.fillStyle = 'rgba(255, 255, 255, 1)'

  const radius = Math.floor(Math.random() * 100) + 1

  ctx.beginPath()
  ctx.arc(
    Math.floor(Math.random() * (widthP * 1000) + 1),
    Math.floor(Math.random() * (widthP * 1000) + 1),
    radius,
    0,
    Math.PI * 2
  )
  ctx.fill()
  console.log('hi')
  animFrame = window.requestAnimationFrame(draw)
}

const resizeCanvas = () => {
  window.cancelAnimationFrame(animFrame)
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

  animFrame = window.requestAnimationFrame(draw)
}

window.addEventListener('resize', resizeCanvas)

resizeCanvas()
