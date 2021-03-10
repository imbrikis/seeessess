const colorBlock = document.querySelector('.color-block')

const svgPaths = document.getElementsByTagName('path')
const svgYPositionTop = Math.floor(svgPaths[0].getBoundingClientRect().top)
const svgYPositionBottom = Math.floor(
  svgPaths[0].getBoundingClientRect().height +
    svgPaths[0].getBoundingClientRect().top
)
const svgPosition = [svgYPositionTop, svgYPositionBottom]

const divs = []

divs[0] = document.querySelector('.one')
divs[1] = document.querySelector('.two')
divs[2] = document.querySelector('.three')
divs[3] = document.querySelector('.four')

// const init = () => {

//   console.log(svgPaths[0].style)
// }

// init()

const compareElements = (overlay, underlayItems) => {
  let elementColors = [svgPaths[0].style.fill || 'rgb(40, 192, 215)']
  underlayItems.forEach((div, index) => {
    let underlayYPositionTop = div.getBoundingClientRect().top
    let underlayYPositionBottom =
      div.getBoundingClientRect().height + div.getBoundingClientRect().top

    console.log(
      index,
      underlayYPositionTop,
      underlayYPositionBottom,
      overlay[0],
      overlay[1]
    )

    if (
      underlayYPositionTop <= overlay[0] &&
      underlayYPositionBottom <= overlay[0]
    ) {
      // console.log(`color will not be changed`)
    } else if (
      underlayYPositionTop >= overlay[1] &&
      underlayYPositionBottom >= overlay[1]
    ) {
      // console.log(`color will not be changed`)
    } else if (
      underlayYPositionTop <= overlay[0] &&
      underlayYPositionBottom >= overlay[1]
    ) {
      console.log(`${div.className} is currently within the SVG`)
    } else if (
      underlayYPositionTop >= overlay[0] &&
      underlayYPositionBottom <= overlay[1]
    ) {
      console.log(`${div.className} is currently within the SVG`)
    } else if (
      underlayYPositionTop < overlay[1] &&
      underlayYPositionBottom >= overlay[1]
    ) {
      console.log(`${div.className} is currently within the SVG`)
    } else if (
      underlayYPositionBottom > overlay[0] &&
      underlayYPositionTop <= overlay[0]
    ) {
      console.log(`${div.className} is currently within the SVG`)
    }
  })
}

document.addEventListener('scroll', () => {
  compareElements(svgPosition, divs)
})

/*

- How do you calculate the opposite of a color in RGB?
- Example: I have orange (255, 127, 0). How do I calculate the opposite, blue (0, 0, 255)

red   - (255, 0, 0)     FF0000
orange- (255, 127, 0)   FF7F00
yellow- (255, 255, 0)   FFFF00
green - (0, 255, 0)     00FF00
blue  - (0, 0, 255)     0000FF
purple- (127, 0, 255)   7F00FF

white - (0, 0, 0)       FFFFFF
black - (255, 255, 255) 000000

- ANSWER:
- Calculate the inverted color, but invert to either black or white for better contrast  

*/
