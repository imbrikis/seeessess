const leftArrow = document.querySelector('.arrow-left')
const rightArrow = document.querySelector('.arrow-right')
const dropdownWrapper = document.querySelector('.dropdown-wrapper')
const dropdownArray = document.querySelectorAll('.select-container')
let dropdownArrayCopy = []

const ddWrapperWidth = dropdownWrapper.getBoundingClientRect()

// initializes the program
const init = () => {
  let ddItemPosition = (-dropdownArray.length / 3) * 100
  console.log(ddItemPosition)

  dropdownArrayCopy = Array.prototype.slice.call(dropdownArray)

  dropdownArrayCopy.forEach((item) => {
    item.leftPos = ddItemPosition
    item.style.left = `${item.leftPos}%`
    ddItemPosition += 100
  })
  dropdownWrapper.replaceChildren(...dropdownArray)
}
init()

const relocateItem = (arr, position) => {
  const tempSlice =
    position === 'left' ? arr.splice(0, 1) : arr.splice(arr.length - 1, 1)

  console.log(tempSlice)

  position === 'left'
    ? ((tempSlice[0].leftPos = (dropdownArray.length / 2) * 100 + 100),
      (tempSlice[0].style.left = `${tempSlice[0].leftPos}%`))
    : ((tempSlice[0].leftPos = -(dropdownArray.length / 3) * 100),
      (tempSlice[0].style.left = `${tempSlice[0].leftPos}%`))

  position === 'left' ? arr.push(...tempSlice) : arr.unshift(...tempSlice)
  return arr
}

const setDropdownPosition = (arr, position) => {
  arr.forEach((item) => {
    position === 'left' ? (item.leftPos -= 100) : (item.leftPos += 100)
    item.style.left = `${item.leftPos}%`
  })

  const mutatedArr =
    position === 'left' ? relocateItem(arr, 'left') : relocateItem(arr, 'right')
  dropdownWrapper.replaceChildren(...mutatedArr)
}

leftArrow.addEventListener('click', () => {
  setDropdownPosition(dropdownArrayCopy, 'left')
})

rightArrow.addEventListener('click', () => {
  setDropdownPosition(dropdownArrayCopy, 'right')
})
