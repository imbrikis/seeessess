const leftArrow = document.querySelector('.arrow-left')
const rightArrow = document.querySelector('.arrow-right')
const dropdownWrapper = document.querySelector('.dropdown-wrapper')
const dropdownArray = document.querySelectorAll('.select-container')

const ddWrapperWidth = dropdownWrapper.getBoundingClientRect()

let ddItemPosition = -300
dropdownArray.forEach((item) => {
  item.testProp = ddItemPosition
  item.style.left = `${item.testProp}%`
  ddItemPosition += 100
})

// dropdownArray.forEach((item) => console.log(item.style.left))

leftArrow.addEventListener(
  'click',
  () =>
    // move this function out of this event listener
    dropdownArray.forEach((item) => {
      item.testProp -= 100
      item.style.left = `${item.testProp}%`
    })

  // move this function out of this event listener
)

rightArrow.addEventListener('click', () =>
  dropdownArray.forEach((item) => {
    item.testProp += 100
    item.style.left = `${item.testProp}%`
  })
)

// console.log((dropdownArray[2].style.left = '0%'))
console.log(dropdownWrapper.getBoundingClientRect()) // container width

/*


look at dropdown wrapper width (will be giant to include all dropdowns)
on click event, change left property of all items
  - if wrapper was moved left, grab first item (left item) and move to the very end (right)
  - if wrapper was moved right, grab last item (right item) and move to the very start (left)

first:
just move all dd items on click

*/
