// A demonstration of collision detection : INCOMPLETE

// --- VARIABLES --- //
const ballA = document.querySelector('.ball-1')
const ballB = document.querySelector('.ball-2')
let ballAx = 0
let ballAy = 0
let ballBx = 50
let ballBy = 50

// initialize the starting points
ballA.style.top = `${ballAy}%`
ballA.style.left = `${ballAx}%`
ballB.style.top = `${ballBy}%`
ballB.style.left = `${ballBx}%`

// --- ANIMATION STARTS HERE --- //
ballAy += 10
ballA.style.top = `${ballAy}%`
