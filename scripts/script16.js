const convertToAccountingFormat = (num) => {
  // ADVANCED
  // if (typeof num === 'number') {
  //   return num < 0 ? `(${Math.abs(num)})` : num.toString()
  // } else {
  //   return undefined
  // }

  // MINE
  // if (num == null) return
  // return num < 0 ? `(${Math.abs(num)})` : num.toString()

  // PRO
  if (num == null) return
  if (num < 0) return `(${Math.abs(num)})`
  return num.toString()
}

// TEST CASES
console.log(convertToAccountingFormat(0))
console.log(convertToAccountingFormat(10))
console.log(convertToAccountingFormat(-5))
console.log(convertToAccountingFormat(undefined))
console.log(convertToAccountingFormat('things'))
