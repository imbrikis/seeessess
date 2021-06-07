const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')

let widthP, heightP

// draw stuff here
const draw = () => {
  ctx.moveTo(0, 0)
  ctx.lineTo(widthP * 1000, heightP * 1000)
  ctx.stroke()
}

const resizeCanvas = () => {
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

  draw()
}

window.addEventListener('resize', resizeCanvas)

resizeCanvas()
