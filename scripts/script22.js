const allFiles = document.querySelectorAll('.files')
const file1 = document.querySelector('.file1')
const file2 = document.querySelector('.file2')
const file3 = document.querySelector('.file3')
const file4 = document.querySelector('.file4')
const file5 = document.querySelector('.file5')

let active

let windowPositions = [0, 1, 2, 3, 4]
let selectedWindowIndex = windowPositions.indexOf(4)

const initFiles = () => {
  for (let x = 0; x < allFiles.length; x++) {
    allFiles[x].style.zIndex = windowPositions[x]
  }
}
initFiles()

const windowFocus = (e) => {
  if (+e.target.style.zIndex === 4) {
    console.log("You're already focused on that window")
    return
  }

  selectedWindowIndex = +e.target.style.zIndex

  for (let x = 0; x < allFiles.length; x++) {
    if (+allFiles[x].style.zIndex === selectedWindowIndex) {
      windowPositions[x] = 4
    }
    if (+allFiles[x].style.zIndex > selectedWindowIndex) {
      windowPositions[x]--
    }
  }

  initFiles()
}

const dragStart = (e, file) => {
  console.log(e)
  active = true

  // file.style.top = e.clientY + 'px'
  // file.style.left = e.clientX + 'px'
}

const dragEnd = (e) => {
  console.log(e)
  active = false
}

const drag = (e) => {
  if (active) {
    console.log(e)
  }
}

file1.addEventListener('click', windowFocus)
// file2.addEventListener('click', windowFocus)
// file3.addEventListener('click', windowFocus)
// file4.addEventListener('click', windowFocus)
// file5.addEventListener('click', windowFocus)

file1.addEventListener('mousedown', (e) => dragStart(e, file1))
file1.addEventListener('mouseup', (e) => dragEnd(e, file1))
file1.addEventListener('mousemove', (e) => drag(e, file1))
// file2.addEventListener('drag', (e) => moveWindow(e, file2))
// file3.addEventListener('drag', (e) => moveWindow(e, file3))
// file4.addEventListener('drag', (e) => moveWindow(e, file4))
// file5.addEventListener('drag', (e) => moveWindow(e, file5))
