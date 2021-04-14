const wrapper = document.querySelector('.wrapper')
const elems = document.querySelector('.all-the-boxes')
console.log(elems)

let elemsNew = [elems, elems]
console.log(elemsNew)

elems.addEventListener('click', () => {
  console.log('clicked')
  wrapper.append(...elemsNew)
})

let options = {
  root: wrapper,
  rootMargin: '0px',
  threshold: [0.25, 0.75],
}

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry)
  })
}

let observer = new IntersectionObserver(callback, options)

// observer.observe(elems)
