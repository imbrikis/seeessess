const wrapper = document.querySelector('.wrapper')
let elems = document.querySelectorAll('.box-container')
const singleBoxContainer = document.querySelector('.box-container')

window.onload = () => {
  wrapper.scroll(singleBoxContainer.clientWidth, 0)
}

const clone = singleBoxContainer.cloneNode(true)

// elems.addEventListener('click', () => {
//   console.log('clicked')
//   wrapper.appendChild(clone)
//   wrapper.prepend(clone)
// })

let options = {
  root: wrapper,
  rootMargin: '0px',
  threshold: [0.25, 0.75],
}

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (!entry.isIntersecting && entry.boundingClientRect.left > 600) {
      console.log('move the group at elem[2] to the beginning of the array')
      fuckery(elems[2])
    }
    // attachObservers()
    // if (entry.isIntersecting && entry.boundingClientRect.left > 600) {
    //   console.log('move the group at elem[0] to the beginning of the array')
    // }
    // if (!entry.isIntersecting && entry.boundingClientRect < 600) {
    //   console.log('move the group at elem[0] to the end of the array')
    // }
    // if (entry.isIntersecting && entry.boundingClientRect < 600) {
    //   console.log('move the group at elem[2] to the end of the array')
    // }
  })
}

let observer = new IntersectionObserver(callback, options)

const attachObservers = () => {
  observer.observe(elems[1])
  setInterval(() => console.log(wrapper.scrollLeft), 250)
}

attachObservers()

const fuckery = (element) => {
  const oldScrollWidth = wrapper.scrollWidth
  wrapper.prepend(element)
  wrapper.scrollLeft = oldScrollWidth - singleBoxContainer.clientWidth * 1.25

  elems = document.querySelectorAll('.box-container')
  observer.unobserve(elems[1])
  observer.observe(elems[1])
}
