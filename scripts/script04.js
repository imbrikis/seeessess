const colorBlock = document.querySelector('.color-block')

const svgPaths = document.getElementsByTagName('path')
const svgYPositionTop = svgPaths[0].getBoundingClientRect().top
const svgYPositionBottom =
  svgPaths[0].getBoundingClientRect().height +
  svgPaths[0].getBoundingClientRect().top
console.log(svgYPositionTop, svgYPositionBottom)

const div1 = document.querySelector('.one')
const div2 = document.querySelector('.two')
const div3 = document.querySelector('.three')
const div4 = document.querySelector('.four')

// const compareElements = () => {}

document.addEventListener('scroll', () => {
  let elemYPositionTop = div1.getBoundingClientRect().top
  let elemYPositionBottom =
    div1.getBoundingClientRect().height + div1.getBoundingClientRect().top
  console.log(elemYPositionTop, elemYPositionBottom)
})

/*

- the check will only fire on scrollY
- the check will compare the current position of the div within the bounding area and the svgPaths (first item)

NEW QUESTION
- How to compare ranges of numbers against each other
  Ex: range1 = [100, 200] (100 pixels height)
      range2 = [800, 1000] (200 pixels height)

      range 2 will decrease as the page scrolls down
      if range 2 falls within range 1, then proceed with an action

      possible states (within bounds of range 1)

      range2 = [200, 400] ( range2[0] <= range1[1] || range2[0] >= range1[0] )
      range2 = [50, 250] (" ") // -------------------------------------------------------------------<<<<<<< CONTINUE FROM HERE
      range2 = [-100, 100] (" ")

      if (range2[0 or 1] )
*/
