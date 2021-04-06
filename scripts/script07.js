// grab image and button elements
const imageA = document.querySelector('.image-a img')
const imageB = document.querySelector('.image-b img')
const imageC = document.querySelector('.image-c img')
const imageD = document.querySelector('.image-d img')
// array of image elements to quickly parse in URL handle function below
const images = [imageA, imageB, imageC, imageD]
// button elements
const aBtnY = document.querySelector('.a-btn-y')
const aBtnX = document.querySelector('.a-btn-x')
const bBtnY = document.querySelector('.b-btn-y')
const bBtnX = document.querySelector('.b-btn-x')
const cBtnY = document.querySelector('.c-btn-y')
const cBtnX = document.querySelector('.c-btn-x')
const dBtnY = document.querySelector('.d-btn-y')
const dBtnX = document.querySelector('.d-btn-x')

// create state for image 'transform' properties
// set them to a default view (no flipping of the axis just yet)
const flipArray = {
  imageA: { x: 1, y: 1 },
  imageB: { x: 1, y: 1 },
  imageC: { x: 1, y: 1 },
  imageD: { x: 1, y: 1 },
}

// this function takes the image element, selected array element
// and axis to be toggled, modifies the flipArray (state),
// then modifies the image elements 'transform' attribute accordingly
const flipAxis = (image, data, axis) => {
  if (data[axis] === -1) {
    data[axis] = 1
    data.transform = `scale(${data.x}, ${data.y})`
    image.style.transform = data.transform
  } else {
    data[axis] = -1
    data.transform = `scale(${data.x}, ${data.y})`
    image.style.transform = data.transform
  }
}

// event listeners on all button elements
aBtnY.addEventListener('click', () => flipAxis(imageA, flipArray.imageA, 'y'))
aBtnX.addEventListener('click', () => flipAxis(imageA, flipArray.imageA, 'x'))
bBtnY.addEventListener('click', () => flipAxis(imageB, flipArray.imageB, 'y'))
bBtnX.addEventListener('click', () => flipAxis(imageB, flipArray.imageB, 'x'))
cBtnY.addEventListener('click', () => flipAxis(imageC, flipArray.imageC, 'y'))
cBtnX.addEventListener('click', () => flipAxis(imageC, flipArray.imageC, 'x'))
dBtnY.addEventListener('click', () => flipAxis(imageD, flipArray.imageD, 'y'))
dBtnX.addEventListener('click', () => flipAxis(imageD, flipArray.imageD, 'x'))

// Handle URL submit
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()

  const URL = e.target.inputField.value
  e.target.inputField.value = ''
  images.forEach((image) => (image.src = URL))
})
