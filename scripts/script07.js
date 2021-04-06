const imageA = document.querySelector('.image-a img')
const imageB = document.querySelector('.image-b img')
const imageC = document.querySelector('.image-c img')
const imageD = document.querySelector('.image-d img')

const aBtnY = document.querySelector('.a-btn-y')
const aBtnX = document.querySelector('.a-btn-x')
const bBtnY = document.querySelector('.b-btn-y')
const bBtnX = document.querySelector('.b-btn-x')
const cBtnY = document.querySelector('.c-btn-y')
const cBtnX = document.querySelector('.c-btn-x')
const dBtnY = document.querySelector('.d-btn-y')
const dBtnX = document.querySelector('.d-btn-x')

const flipArray = {
  imageA: { x: 1, y: 1 },
  imageB: { x: 1, y: 1 },
  imageC: { x: 1, y: 1 },
  imageD: { x: 1, y: 1 },
}

for (const item in flipArray) {
  flipArray[
    item
  ].transform = `scale(${flipArray[item].x}, ${flipArray[item].y})`
}

imageA.style.transform = flipArray.imageA.transform
imageB.style.transform = flipArray.imageB.transform
imageC.style.transform = flipArray.imageC.transform
imageD.style.transform = flipArray.imageD.transform

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

aBtnY.addEventListener('click', () => flipAxis(imageA, flipArray.imageA, 'y'))
aBtnX.addEventListener('click', () => flipAxis(imageA, flipArray.imageA, 'x'))
bBtnY.addEventListener('click', () => flipAxis(imageB, flipArray.imageB, 'y'))
bBtnX.addEventListener('click', () => flipAxis(imageB, flipArray.imageB, 'x'))
cBtnY.addEventListener('click', () => flipAxis(imageC, flipArray.imageC, 'y'))
cBtnX.addEventListener('click', () => flipAxis(imageC, flipArray.imageC, 'x'))
dBtnY.addEventListener('click', () => flipAxis(imageD, flipArray.imageD, 'y'))
dBtnX.addEventListener('click', () => flipAxis(imageD, flipArray.imageD, 'x'))
