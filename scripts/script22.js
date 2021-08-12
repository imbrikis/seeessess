const allFiles = document.querySelectorAll('.files')
const file1 = document.querySelector('.file1')
const file2 = document.querySelector('.file2')
const file3 = document.querySelector('.file3')
const file4 = document.querySelector('.file4')
const file5 = document.querySelector('.file5')

let windowPositions = [1, 2, 3, 4, 5]
let selectedWindowIndex = windowPositions.indexOf(5)
console.log(selectedWindowIndex)

const initFiles = () => {
  for (let x = 0; x < allFiles.length; x++) {
    allFiles[x].style.zIndex = windowPositions[x]
  }
}
initFiles()

const windowFocus = (e) => {
  console.log(selectedWindowIndex)
  if (e.target.style.zIndex - 1 === selectedWindowIndex) {
    console.log("i won't do it")
    return
  }

  selectedWindowIndex = +e.target.style.zIndex

  console.log(selectedWindowIndex)

  // for (let x = 0; x < allFiles.length; x++) {
  //   console.log(selectedWindowIndex)
  //   if (allFiles[x].style.zIndex - 1 === selectedWindowIndex) {
  //     windowPositions[x] = x + 1
  //   }
  //   if (allFiles[x].style.zIndex - 1 > selectedWindowIndex) {
  //     windowPositions[x] = windowPositions[x] - 1
  //   }
  // }
  // console.log(selectedWindowIndex)

  // initFiles()
}

file1.addEventListener('click', windowFocus)
file2.addEventListener('click', windowFocus)
file3.addEventListener('click', windowFocus)
file4.addEventListener('click', windowFocus)
file5.addEventListener('click', windowFocus)
