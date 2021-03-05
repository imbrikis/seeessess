let y1 = 0
const animationDuration = 10
const animationStep = 0.5
const lineFadein = 4
const lineFadeOut = 8
// const lineColor = '244,25,209,1'
const lineColor = '29,244,25,1'

const c = document.querySelector('.img')
c.addEventListener('click', ()=> {
    console.log('clicked once')

  const intervalId = setInterval(() => runAnimation(), animationDuration)
  
})

const runAnimation = () => {
    c.style.backgroundImage = `linear-gradient(rgba(0,0,0,0), 0%, rgba(0,0,0,0), ${y1 === 100 ? '100' : 0 + y1}%, rgba(${lineColor}), ${y1 === 100 ? '100' : lineFadein + y1}%, rgba(0,0,0,0), ${y1 === 100 ? '100' : lineFadeOut + y1}%, rgba(0,0,0,0))`

    y1 += animationStep
} 
