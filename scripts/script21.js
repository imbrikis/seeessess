const body = document.body

const randomVal = () => {
  return Math.floor(Math.random() * 256)
}

const changeRandomColor = () => {
  const color = `rgb(${randomVal()}, ${randomVal()}, ${randomVal()})`
  body.style.backgroundColor = color
}

body.addEventListener('click', changeRandomColor)
