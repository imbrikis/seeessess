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

const flipY = (image) => {
  if (image.style.transform === 'scaleY(-1)') {
    image.style.transform = 'scaleY(1)'
  } else {
    image.style.transform = 'scaleY(-1)'
  }
}

const flipX = (image) => {
  if (image.style.transform === 'scaleX(-1)') {
    image.style.transform = 'scaleX(1)'
  } else {
    image.style.transform = 'scaleX(-1)'
  }
}

aBtnY.addEventListener('click', () => flipY(imageA))

aBtnX.addEventListener('click', () => flipX(imageA))

bBtnY.addEventListener('click', () => flipY(imageB))

bBtnX.addEventListener('click', () => flipX(imageB))

cBtnY.addEventListener('click', () => flipY(imageC))

cBtnX.addEventListener('click', () => flipX(imageC))

dBtnY.addEventListener('click', () => flipY(imageD))

dBtnX.addEventListener('click', () => flipX(imageD))
