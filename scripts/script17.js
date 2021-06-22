const theMeaningOfLife = new Promise((resolve, reject) => {
  setTimeout(() => console.log("it isn't here"), 3000)
})

let x

theMeaningOfLife.then((res) => (x = res)).then(console.log(x)) // why is this logging undefined?
