const selectValue = document.querySelector('select')
const container = document.querySelector('.container')

const setCookie = (val) => {
  //COOKIE
  // document.cookie = `color=${val};max-age=60;`

  // LOCAL STORAGE
  localStorage.setItem('color', val)
}

window.onload = () => {
  console.log(localStorage.getItem('color'))

  // COOKIE
  // if (document.cookie.length !== 0) {
  //   let item = document.cookie.split('=')[1]
  //   setColor(item)
  // }

  // LOCAL STORAGE
  let item = localStorage.getItem('color')
  item !== null && setColor(item)
}

const setColor = (val) => {
  switch (val) {
    case 'Select Color':
      break
    case 'red':
      container.style.backgroundColor = '#ffc9cf'
      break
    case 'blue':
      container.style.backgroundColor = '#b3d7ff'
      break
    case 'green':
      container.style.backgroundColor = '#a6ffbe'
      break
    default:
      console.log('nuttin happened')
  }

  val !== 'Select Color' && setCookie(val)
}

selectValue.addEventListener('change', (event) => {
  setColor(event.target.value)
})
